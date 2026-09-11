/**
 * Cổng kiểm phân loại `mealTypes` — chạy `pnpm check:meal`.
 *
 * Hai việc, và việc thứ hai mới là việc quan trọng:
 *
 *  1. **Đủ và hợp lệ** — mọi món có ≥1 `mealTypes` thuộc tập đóng, có `mealTypeNote`.
 *     (zod ở build cũng chặn phần này; ở đây kiểm lại để chạy được độc lập, nhanh hơn.)
 *
 *  2. **KHÔNG có trường nào khác bị sửa** — đối chiếu từng file với bản trong git.
 *     6 agent đã ghi thẳng vào `data/provinces/*.json`, là file nội dung gốc tiếng Việt
 *     đã được kiểm và **không có bản sao nào ngoài git**. Bài học từ đợt dịch: khi nhiều
 *     agent ghi song song, thứ cần canh không phải "chúng có làm xong không" mà là
 *     "chúng có làm hỏng thứ khác không".
 *
 *  3. **Cảnh báo bất thường** — tỉnh không còn món `bua-chinh` nào là dấu hiệu gán nhầm
 *     hàng loạt (RISK-LF.md R16: món bị loại nhầm sẽ *biến mất* khỏi gợi ý mà không ai
 *     thấy, nên phải có máy canh thay vì trông vào mắt người).
 */
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

/**
 * Chép lại từ `lib/types.ts` vì file .mjs không import được .ts.
 * Chép tay thì sẽ lệch — nên đọc luôn file gốc và so, lệch là fail.
 */
const MEAL_TYPES = [
  "bua-chinh",
  "an-vat",
  "trang-mieng",
  "moi-nhau",
  "dac-san-qua",
];

{
  const src = fs.readFileSync(path.join(process.cwd(), "lib", "types.ts"), "utf8");
  const block = src.match(/export const MEAL_TYPES = \[([\s\S]*?)\] as const;/);
  const inTs = block ? [...block[1].matchAll(/"([a-z-]+)"/g)].map((m) => m[1]) : [];
  if (inTs.join(",") !== MEAL_TYPES.join(",")) {
    console.error(
      [
        "✗ Danh sách MEAL_TYPES trong script đã LỆCH với lib/types.ts:",
        `   script  : ${MEAL_TYPES.join(", ")}`,
        `   types.ts: ${inTs.join(", ")}`,
        "   Sửa script cho khớp rồi chạy lại.",
      ].join("\n"),
    );
    process.exit(1);
  }
}

const SRC = path.join(process.cwd(), "data", "provinces");
const VALID = new Set(MEAL_TYPES);
/** Mọi trường KHÁC hai trường được phép thêm — phải giống hệt bản trong git. */
const ADDED_FIELDS = new Set(["mealTypes", "mealTypeNote"]);

let errors = 0;
const fail = (msg) => {
  console.error(`✗ ${msg}`);
  errors++;
};

/** Bản gốc trong git để đối chiếu. Không có (file mới) thì bỏ qua bước đối chiếu. */
function fromGit(relPath) {
  try {
    return JSON.parse(
      execSync(`git show HEAD:${relPath}`, { encoding: "utf8", maxBuffer: 32 * 1024 * 1024 }),
    );
  } catch {
    return null;
  }
}

const files = fs.readdirSync(SRC).filter((f) => f.endsWith(".json")).sort();
const tally = Object.fromEntries(MEAL_TYPES.map((t) => [t, 0]));
let dishes = 0;
const noMainDish = [];

for (const file of files) {
  const slug = path.basename(file, ".json");
  const cur = JSON.parse(fs.readFileSync(path.join(SRC, file), "utf8"));
  const old = fromGit(`data/provinces/${file}`);

  // --- 1 + 2: kiểm từng món ---
  let mainCount = 0;
  for (const [i, dish] of cur.dishes.entries()) {
    dishes++;

    if (!Array.isArray(dish.mealTypes) || dish.mealTypes.length === 0) {
      fail(`${slug}/${dish.slug}: thiếu mealTypes`);
    } else {
      for (const t of dish.mealTypes) {
        if (!VALID.has(t)) fail(`${slug}/${dish.slug}: mealTypes "${t}" không hợp lệ`);
        else tally[t]++;
      }
      if (new Set(dish.mealTypes).size !== dish.mealTypes.length) {
        fail(`${slug}/${dish.slug}: mealTypes có giá trị lặp`);
      }
      if (dish.mealTypes.includes("bua-chinh")) mainCount++;
    }

    if (!dish.mealTypeNote || typeof dish.mealTypeNote !== "string") {
      fail(`${slug}/${dish.slug}: thiếu mealTypeNote (lý do phân loại)`);
    }

    // --- 2: đối chiếu với git, trường khác phải y nguyên ---
    const before = old?.dishes?.[i];
    if (!before) continue;
    if (before.slug !== dish.slug) {
      fail(`${slug}: món thứ ${i} đổi slug "${before.slug}" → "${dish.slug}" (đảo thứ tự hoặc thêm/xoá món)`);
      continue;
    }
    for (const key of Object.keys(before)) {
      if (ADDED_FIELDS.has(key)) continue;
      if (JSON.stringify(before[key]) !== JSON.stringify(dish[key])) {
        fail(`${slug}/${dish.slug}: trường "${key}" BỊ SỬA — chỉ được phép thêm mealTypes/mealTypeNote`);
      }
    }
  }

  // Trường cấp tỉnh cũng phải y nguyên
  if (old) {
    if (old.dishes.length !== cur.dishes.length) {
      fail(`${slug}: số món đổi ${old.dishes.length} → ${cur.dishes.length}`);
    }
    for (const key of Object.keys(old)) {
      if (key === "dishes") continue;
      if (JSON.stringify(old[key]) !== JSON.stringify(cur[key])) {
        fail(`${slug}: trường cấp tỉnh "${key}" BỊ SỬA`);
      }
    }
  }

  // --- 3: cảnh báo bất thường ---
  if (mainCount === 0) noMainDish.push(slug);
}

console.log(`\nĐã phân loại: ${dishes} món / ${files.length} tỉnh`);
console.log("\nPhân bố:");
for (const t of MEAL_TYPES) {
  const pct = ((tally[t] / dishes) * 100).toFixed(1);
  console.log(`  ${t.padEnd(14)} ${String(tally[t]).padStart(3)}  (${pct}%)`);
}
console.log(`\n→ Bể gợi ý bữa trưa: ${tally["bua-chinh"]} món`);

if (noMainDish.length) {
  console.warn(
    `\n⚠️  ${noMainDish.length} tỉnh KHÔNG có món "bua-chinh" nào — tỉnh đó sẽ không bao ` +
      `giờ xuất hiện trong gợi ý:\n   ${noMainDish.join(" ")}\n   ` +
      `Có thể đúng (tỉnh chỉ có đặc sản làm quà), nhưng phải xem lại trước khi tin.`,
  );
}

if (errors) {
  console.error(`\n${errors} lỗi.`);
  process.exit(1);
}
console.log("\n✓ Phân loại hợp lệ, và không trường nào khác bị sửa.");
