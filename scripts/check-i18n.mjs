/**
 * Cổng kiểm bản dịch: chạy `pnpm check:i18n`.
 *
 * Có 8 agent dịch song song và 6 trong số đó bị ngắt giữa chừng vì hết hạn mức phiên,
 * nên KHÔNG được tin là file trên đĩa thì đúng. Script này đối chiếu từng file dịch với
 * bản gốc tiếng Việt: đủ món, đủ trường, và số phần tử keyIngredients/prepOutline khớp
 * (quy tắc 5.4 trong I18N-GLOSSARY-LF.md — lệch số phần tử nghĩa là dịch thiếu bước).
 */
import fs from "node:fs";
import path from "node:path";

const SRC = path.join(process.cwd(), "data", "provinces");
const EN = path.join(process.cwd(), "data", "i18n", "en");
const FIELDS = ["description", "keyIngredients", "prepOutline", "howToEat"];
const FORBIDDEN = ["name", "sourceRefs", "images", "tasteTags", "occasions", "isHero"];

let errors = 0;
const missing = [];
const ok = [];

for (const file of fs.readdirSync(SRC).filter((f) => f.endsWith(".json"))) {
  const slug = path.basename(file, ".json");
  const src = JSON.parse(fs.readFileSync(path.join(SRC, file), "utf8"));
  const enPath = path.join(EN, `${slug}.json`);

  if (!fs.existsSync(enPath)) {
    missing.push(slug);
    continue;
  }

  let tr;
  try {
    tr = JSON.parse(fs.readFileSync(enPath, "utf8"));
  } catch (e) {
    console.error(`✗ ${slug}: JSON hỏng — ${e.message}`);
    errors++;
    continue;
  }

  const fail = (msg) => {
    console.error(`✗ ${slug}: ${msg}`);
    errors++;
  };

  if (tr.slug !== slug) fail(`slug trong file là "${tr.slug}", không khớp tên file`);
  if (!tr.summary || typeof tr.summary !== "string") fail("thiếu summary");

  for (const dish of src.dishes) {
    const d = tr.dishes?.[dish.slug];
    if (!d) {
      fail(`thiếu bản dịch món "${dish.slug}"`);
      continue;
    }
    for (const f of FIELDS) {
      if (d[f] === undefined) fail(`món "${dish.slug}" thiếu trường ${f}`);
    }
    for (const f of FORBIDDEN) {
      if (d[f] !== undefined) fail(`món "${dish.slug}" chứa "${f}" — trường này phải giữ bản gốc`);
    }
    for (const f of ["keyIngredients", "prepOutline"]) {
      if (Array.isArray(d[f]) && d[f].length !== dish[f].length) {
        fail(`món "${dish.slug}" có ${d[f].length} mục ${f}, bản gốc có ${dish[f].length}`);
      }
    }
  }

  // Món thừa: agent bịa ra slug không tồn tại trong bản gốc
  for (const s of Object.keys(tr.dishes ?? {})) {
    if (!src.dishes.some((d) => d.slug === s)) fail(`món "${s}" không có trong bản gốc`);
  }

  if (!errors || true) ok.push(slug);
}

const total = fs.readdirSync(SRC).filter((f) => f.endsWith(".json")).length;
console.log(`\nĐã dịch: ${ok.length}/${total} tỉnh`);
if (missing.length) console.log(`Chưa dịch (${missing.length}): ${missing.join(" ")}`);
if (errors) {
  console.error(`\n${errors} lỗi trong các bản dịch đã có.`);
  process.exit(1);
}
console.log("Các bản dịch đã có: hợp lệ.");
