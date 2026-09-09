/**
 * Ghi số đo mới vào `data/telemetry.json`.
 *
 * Giờ người là tham số truyền vào từ PM, KHÔNG suy từ git — xem `TELEMETRY-LF.md` mục 1:
 * đã thử hai cách suy từ git, cả hai sai và sai ngược chiều nhau.
 *
 * Chạy: node scripts/update-telemetry.mjs
 */
import fs from "node:fs";
import readline from "node:readline";
import { execSync } from "node:child_process";

const TRANSCRIPT =
  "C:/Users/X/.claude/projects/d--01-Study-06-PM-AI-Bootcamp/54b73208-ba4f-4a0a-99d4-f41fb82187c6.jsonl";

/** Giờ PM tự khai cho từng phiên — nguồn duy nhất hợp lệ cho con số này. */
const PM_HOURS = {
  "2026-09-07": { range: [2, 3], note: "PM trả lời: 2–3 giờ" },
  "2026-09-08": {
    range: [3, 4],
    note: 'PM trả lời: "trên 3 giờ" — cận dưới chắc chắn là 3h, cận trên là giả định',
  },
  "2026-09-09": { range: [2, 3], note: "PM trả lời: 2–3 giờ" },
};

async function measureTokens() {
  const t = { inputNew: 0, output: 0, cacheWrite: 0, cacheRead: 0 };
  let turns = 0, sidechain = 0, first = null, last = null;
  const rl = readline.createInterface({
    input: fs.createReadStream(TRANSCRIPT),
    crlfDelay: Infinity,
  });
  for await (const line of rl) {
    if (!line.trim()) continue;
    let o;
    try { o = JSON.parse(line); } catch { continue; }
    if (o.timestamp) {
      if (!first || o.timestamp < first) first = o.timestamp;
      if (!last || o.timestamp > last) last = o.timestamp;
    }
    const u = o.message?.usage;
    if (!u) continue;
    turns++;
    if (o.isSidechain) sidechain++;
    t.inputNew += u.input_tokens ?? 0;
    t.output += u.output_tokens ?? 0;
    t.cacheWrite += u.cache_creation_input_tokens ?? 0;
    t.cacheRead += u.cache_read_input_tokens ?? 0;
  }
  return { ...t, turns, sidechain, first, last };
}

const measured = JSON.parse(
  execSync("node scripts/measure-telemetry.mjs", { encoding: "utf8" }),
);
const tok = await measureTokens();
const d = JSON.parse(fs.readFileSync("data/telemetry.json", "utf8"));

/** Việc đã làm trong 3 phiên mới — để bảng telemetry đọc được không cần tra git. */
const NEW_SESSIONS = {
  "2026-09-07":
    "Đo lại hiệu năng ở 63 tỉnh (kết quả trái với dự đoán), 7 KPI Knowledge Health, " +
    "báo cáo HTML cho sếp, xuất hội thoại, tag v1.0",
  "2026-09-08":
    "Chủ quyền biển đảo: Hoàng Sa/Trường Sa lên bản đồ ở mọi mức zoom (R14), tempo marquee, " +
    "quy trình quản trị qua Supabase Dashboard, khối Cảm nhận mới nhất ở trang chủ",
  "2026-09-09":
    "Song ngữ Việt–Anh 63/63 tỉnh (US-16, ~41.000 từ, 10 agent song song), dọn lint về 0 và " +
    "sửa bug deep-link, tự đánh giá T1–T10, bài T2 rà requirement (11 phát hiện, sửa 11/11), " +
    "US-17 nhãn khẩu vị, tag v1.1",
};

// Đồng bộ số commit từ git cho MỌI phiên — bảng cũ chốt số giữa chừng phiên 06/09 nên sai.
for (const s of d.sessions) {
  if (measured.commitsByDate[s.date] != null) s.commits = measured.commitsByDate[s.date];
}
// Thêm phiên chưa có trong bảng
const known = new Set(d.sessions.map((s) => s.date));
for (const [date, work] of Object.entries(NEW_SESSIONS)) {
  if (known.has(date)) continue;
  d.sessions.push({
    date,
    commits: measured.commitsByDate[date] ?? 0,
    gitLowerBoundH: null,
    gitUpperBoundH: null,
    pmEstimatedH: null,
    grouped: false,
    work,
  });
}
d.sessions.sort((a, b) => a.date.localeCompare(b.date));

for (const [date, { range, note }] of Object.entries(PM_HOURS)) {
  const s = d.sessions.find((x) => x.date === date);
  if (!s) continue;
  s.pmRangeH = range;
  s.pmEstimatedH = (range[0] + range[1]) / 2;
  s.pmNote = note;
  s.grouped = false;
}

const added = Object.values(PM_HOURS).reduce(
  (a, { range }) => [a[0] + range[0], a[1] + range[1]],
  [0, 0],
);

d.realHours = {
  previousTotalH: [16, 22],
  addedH: added,
  totalH: [16 + added[0], 22 + added[1]],
  note:
    "Cộng dồn: khoảng cũ 16–22h (tới 06/09) + 3 phiên mới do PM tự khai. " +
    "Giờ người KHÔNG suy từ git — xem mục 1.",
};

// Baseline mặc định của máy tính Nén phải theo phạm vi HIỆN TẠI, nếu không chỉ số sẽ
// tụt và trông như năng suất giảm trong khi thực tế đã làm thêm cả một tính năng lớn.
// Giữ giá trị cũ để còn truy vết được vì sao đổi.
d.baselineNoAiHPrevious = d.baselineNoAiHPrevious ?? d.baselineNoAiH;
d.baselineNoAiH = 765; // điểm giữa của khoảng 730–800 ở baselineRevised
d.baselineChangeNote =
  "600h → 765h (2026-09-09). Lý do: phạm vi tăng thêm phần song ngữ 63/63 tỉnh (~41.000 từ " +
  "dịch chuyên ngành). Chi tiết cách suy ra ở baselineRevised và TELEMETRY-LF.md mục 5.3.";

d.baselineRevised = {
  h: [730, 800],
  note:
    "Baseline 600h lập cho phạm vi tới 06/09. Từ đó phạm vi đã tăng: dịch 41.000 từ nội dung " +
    "ẩm thực chuyên ngành Việt→Anh (dịch chuyên ngành ~2.000–3.000 từ/ngày ⇒ ~110–160h) cộng " +
    "phần kỹ thuật đa ngôn ngữ (~90 chuỗi giao diện, tách route, kiểm thử ⇒ ~20–40h). " +
    "Vẫn là ƯỚC TÍNH phản-thực, không phải số đo — điểm yếu đã nêu ở 5.4.",
};

// HỢP NHẤT, không thay thế: trang /telemetry đọc nhiều trường ở đây
// (totalRaw, cacheHitRate, mdPerMillionBillable, caveat, estimateNote…).
// Ghi đè cả object sẽ làm hỏng trang — đã mắc một lần.
const rawTotal = tok.inputNew + tok.output + tok.cacheWrite + tok.cacheRead;
const billable = tok.inputNew + tok.output + tok.cacheWrite;
d.tokens = {
  ...d.tokens,
  source:
    `Đo từ transcript phiên 54b73208 (52,4MB, ${tok.turns.toLocaleString("vi-VN")} lượt AI trả lời). ` +
    "Claude Code ghi usage thật vào từng lượt — đây là SỐ ĐO, không phải ước lượng. " +
    "Chạy lại: node scripts/update-telemetry.mjs",
  sessionStart: tok.first,
  sessionEnd: tok.last,
  turnsWithUsage: tok.turns,
  inputNew: tok.inputNew,
  output: tok.output,
  cacheWrite: tok.cacheWrite,
  cacheRead: tok.cacheRead,
  totalRaw: rawTotal,
  totalAllTypes: rawTotal,
  // Tính giá đầy đủ = mọi thứ TRỪ cache read (phần đọc lại rẻ hơn nhiều lần).
  billableFull: billable,
  cacheHitRate: Number(((tok.cacheRead / rawTotal) * 100).toFixed(1)),
  // Man-day / 1M token tính giá — DẪN XUẤT từ giờ người, nên phải tính lại mỗi lần
  // giờ đổi. Để nguyên số cũ là sai âm thầm: không lỗi, không ai thấy.
  mdPerMillionBillable: Number(
    (((16 + added[0] + 22 + added[1]) / 2 / 8) / (billable / 1e6)).toFixed(3),
  ),
  // Câu cảnh báo có nhúng số ⇒ phải sinh lại, không được giữ bản cũ.
  caveat:
    `Đó là bối cảnh được đọc lại ở mỗi lượt, không phải nội dung mới. Trích con số ` +
    `${(rawTotal / 1e6).toFixed(0)}M mà bỏ ngữ cảnh sẽ gây hiểu sai — con số phản ánh đúng ` +
    `khối lượng làm việc là khoảng ${(billable / 1e6).toFixed(1)}M tính giá đầy đủ, trong đó ` +
    `${(tok.output / 1e6).toFixed(1)}M là output AI thực sự viết ra.`,
  scopeNote:
    "CHỈ tính phiên 54b73208 (Local Food). Phiên 3ffd154d (13–21/08) thuộc dự án PB-04 khác — " +
    "đã kiểm cwd và loại đúng.",
  knownGap:
    `⚠️ Con số này là SÀN, không phải tổng. Đã kiểm: transcript có ${tok.sidechain} lượt sidechain, ` +
    "nên token của agent chạy nền (6 agent nội dung 03/09, ~8 agent mở rộng 06/09, 10 agent dịch " +
    "09/09) KHÔNG được ghi vào đây. Mẫu từ thông báo tác vụ 09/09: mỗi agent dịch báo " +
    "68.836–99.668 token. Không ước lượng bù — muốn tổng thật phải lấy từ trang usage của tài khoản.",
};

d.delivered = { ...d.delivered, ...{
  provincesActual: measured.provinces,
  provincesTranslated: measured.translated,
  dishes: measured.dishes,
  sourceRefs: measured.sourceRefs,
  dishesWithImage: measured.dishesWithImage,
  commits: measured.totalCommits,
  trackedFiles: measured.trackedFiles,
  artefacts: measured.artefacts,
  gateScripts: measured.gateScripts,
  sitUatStories: measured.sitUatStories,
} };
// `incidents` là MẢNG phân loại sự cố — giữ nguyên kiểu, đếm tổng để riêng.
// (Bản trước spread nó thành object và làm hỏng trang /telemetry.)
d.devbookEntries = measured.devbookIncidents;
d.updatedAt = new Date().toISOString().slice(0, 10);
d.measuredBy = "node scripts/update-telemetry.mjs — chạy lại được, không nhập tay";

fs.writeFileSync("data/telemetry.json", JSON.stringify(d, null, 2) + "\n");

const f = (x) => x.toLocaleString("vi-VN");
console.log("=== GIỜ NGƯỜI (PM tự khai) ===");
for (const s of d.sessions) {
  const h = s.pmRangeH ? `${s.pmRangeH[0]}–${s.pmRangeH[1]}h` : s.pmEstimatedH ? `${s.pmEstimatedH}h` : "(gộp)";
  console.log(` ${s.date} | ${String(s.commits).padStart(3)} commit | ${h}`);
}
console.log(` TỔNG: ${d.realHours.totalH.join("–")} giờ (trước: 16–22h)`);
console.log("\n=== TOKEN (sàn — chưa kể agent nền) ===");
console.log(` lượt AI     : ${f(tok.turns)}   (sidechain: ${tok.sidechain})`);
console.log(` output      : ${f(tok.output)}`);
console.log(` cache write : ${f(tok.cacheWrite)}`);
console.log(` cache read  : ${f(tok.cacheRead)}`);
console.log(` TỔNG        : ${f(d.tokens.totalAllTypes)}`);
console.log("\n=== NÉN ===");
const [lo, hi] = d.realHours.totalH;
console.log(` baseline giữ 600h  : ${(600 / hi).toFixed(0)}–${(600 / lo).toFixed(0)}×`);
console.log(` baseline sửa 730–800h: ${(730 / hi).toFixed(0)}–${(800 / lo).toFixed(0)}×`);
