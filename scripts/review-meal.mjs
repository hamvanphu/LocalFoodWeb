/**
 * Dựng phiếu soi phân loại `mealTypes` cho PM — chạy `node scripts/review-meal.mjs`.
 *
 * Vì sao cần: `check:meal` chỉ bắt được **thiếu** phân loại, không bắt được **sai** phân
 * loại (`RISK-LF.md` R16). Script này không phán đúng/sai — nó **khoanh vùng chỗ đáng
 * ngờ** để người đọc 197 món chỉ phải đọc vài chục món.
 *
 * Cách khoanh: tìm chỗ **dữ liệu tự mâu thuẫn với nhãn**, chứ không đoán theo tên món.
 * Ví dụ: món gắn `bua-chinh` mà `howToEat` lại ghi "ăn chơi" / "quà chiều".
 *
 * Bốc mẫu ngẫu nhiên là sai cách ở đây: lỗi phân loại **không rải đều**, nó tụ ở nhóm
 * ranh giới. Bốc ngẫu nhiên 20 món sẽ trúng phần lớn là món hiển nhiên đúng.
 */
import fs from "node:fs";
import path from "node:path";

const SRC = path.join(process.cwd(), "data", "provinces");

/** Dấu hiệu văn bản nói "đây KHÔNG phải bữa chính". */
const NOT_A_MEAL = /ăn chơi|quà chiều|quà vặt|quà quê|khai vị|tráng miệng|ăn lót dạ|món nhắm|nhắm rượu|nhắm bia/i;
/** Dấu hiệu văn bản nói "đây LÀ một bữa". */
const IS_A_MEAL = /ăn (kèm |với )?cơm|cơm nóng|cơm trắng|ăn kèm bún|với bún|bánh mì|no bụng|thay bữa|bữa sáng|bữa trưa|bữa cơm/i;
/** Nhắc đồ uống có cồn. */
const BOOZE = /rượu|bia\b|nhậu|lai rai/i;
/** Tên gợi ý đây là gia vị / nguyên liệu, không phải suất ăn. */
const CONDIMENT = /^(mắm|tương|nước mắm|muối|chao)\b/i;

const rows = [];
for (const file of fs.readdirSync(SRC).filter((f) => f.endsWith(".json"))) {
  const p = JSON.parse(fs.readFileSync(path.join(SRC, file), "utf8"));
  for (const d of p.dishes) {
    const text = `${d.description} ${d.howToEat}`;
    const isMain = d.mealTypes.includes("bua-chinh");
    const flags = [];

    // --- Nhóm A: ĐANG trong bể gợi ý, nhưng có dấu hiệu không nên ---
    if (isMain && NOT_A_MEAL.test(text)) flags.push("A1·văn bản nói 'ăn chơi/quà/nhắm'");
    if (isMain && CONDIMENT.test(d.name)) flags.push("A2·tên là gia vị, không phải suất ăn");
    if (isMain && BOOZE.test(text) && !d.mealTypes.includes("moi-nhau"))
      flags.push("A3·nhắc rượu/bia mà thiếu nhãn mồi nhậu");
    if (isMain && d.mealTypes.includes("moi-nhau")) flags.push("A4·vừa bữa chính vừa mồi nhậu");
    if (isMain && /^Lẩu|lẩu /i.test(d.name)) flags.push("A5·lẩu — bối cảnh 1 người ăn trưa?");

    // --- Nhóm B: BỊ LOẠI khỏi bể, nhưng có dấu hiệu đáng lẽ nên có ---
    if (!isMain && IS_A_MEAL.test(text)) flags.push("B1·văn bản nói ăn với cơm/bún/no");

    if (flags.length) {
      rows.push({
        prov: p.name,
        name: d.name,
        types: d.mealTypes,
        inPool: isMain,
        flags,
        note: d.mealTypeNote,
        eat: d.howToEat,
      });
    }
  }
}

const A = rows.filter((r) => r.inPool);
const B = rows.filter((r) => !r.inPool);

const print = (title, list, consequence) => {
  console.log(`\n${"=".repeat(78)}\n${title}  (${list.length} món)\n${consequence}\n${"=".repeat(78)}`);
  for (const r of list) {
    console.log(`\n▸ ${r.name}  —  ${r.prov}`);
    console.log(`   nhãn      : ${r.types.join(", ")}`);
    console.log(`   đáng ngờ  : ${r.flags.join(" | ")}`);
    console.log(`   lý do gán : ${r.note}`);
    console.log(`   cách ăn   : ${r.eat.slice(0, 165)}${r.eat.length > 165 ? "…" : ""}`);
  }
};

print(
  "NHÓM A — ĐANG được gợi ý cho bữa trưa, nhưng đáng ngờ",
  A,
  "Sai ở đây = người dùng NHÌN THẤY gợi ý dở. Tự phát hiện được, ít nguy hiểm hơn nhóm B.",
);
print(
  "NHÓM B — ĐÃ BỊ LOẠI khỏi gợi ý, nhưng có thể oan",
  B,
  "Sai ở đây NGUY HIỂM HƠN (R16): món biến mất, không ai thấy để mà báo lỗi.",
);

console.log(`\n${"-".repeat(78)}`);
console.log(`Tổng cần soi: ${rows.length}/197 món  (nhóm A: ${A.length} · nhóm B: ${B.length})`);
console.log("Các món không nằm trong danh sách này là chỗ dữ liệu và nhãn không mâu thuẫn nhau.");
