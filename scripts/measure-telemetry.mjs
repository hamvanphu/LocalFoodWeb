/**
 * Đo lại các chỉ số telemetry ĐO ĐƯỢC BẰNG MÁY. Chạy: node scripts/measure-telemetry.mjs
 *
 * KHÔNG đo giờ người — xem `TELEMETRY-LF.md` §1: đã thử hai cách suy từ git, cả hai đều
 * sai và sai ngược chiều nhau. Giờ người phải do PM tự điền.
 */
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const sh = (c) => execSync(c, { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 }).trim();
const root = process.cwd();

// --- Commit theo ngày ---
const byDate = {};
for (const d of sh("git log --date=short --pretty=format:%ad").split("\n")) {
  byDate[d] = (byDate[d] ?? 0) + 1;
}
const totalCommits = Number(sh("git rev-list --count HEAD"));

// --- Dữ liệu nội dung ---
const provDir = path.join(root, "data", "provinces");
const provinces = fs.readdirSync(provDir).filter((f) => f.endsWith(".json"));
let dishes = 0, sourceRefs = 0, withImage = 0;
for (const f of provinces) {
  const p = JSON.parse(fs.readFileSync(path.join(provDir, f), "utf8"));
  sourceRefs += (p.summarySourceRefs ?? []).length;
  for (const d of p.dishes) {
    dishes++;
    sourceRefs += (d.sourceRefs ?? []).length;
    if ((d.images ?? []).length > 0) withImage++;
  }
}
const translated = fs.existsSync(path.join(root, "data", "i18n", "en"))
  ? fs.readdirSync(path.join(root, "data", "i18n", "en")).filter((f) => f.endsWith(".json")).length
  : 0;

// --- Repo ---
const trackedFiles = sh("git ls-files").split("\n").filter(Boolean).length;
const artefacts = fs.readdirSync(root).filter((f) => f.endsWith(".md")).length;
const gateScripts = fs
  .readdirSync(path.join(root, "scripts"))
  .filter((f) => f.startsWith("check-")).length;

// --- DEVBOOK: đếm mục sự cố (gạch đầu dòng in đậm ở đầu) ---
const devbook = fs.readFileSync(path.join(root, "DEVBOOK.md"), "utf8");
const incidents = (devbook.match(/^- \*\*/gm) ?? []).length;

// --- SIT-UAT: đếm story có checklist ---
const sit = fs.readFileSync(path.join(root, "SIT-UAT-LF.md"), "utf8");
const stories = new Set((sit.match(/^## (US-[0-9]+[a-z]?)/gm) ?? []).map((s) => s.slice(3))).size;

console.log(JSON.stringify({
  measuredAt: new Date().toISOString(),
  commitsByDate: byDate,
  totalCommits,
  provinces: provinces.length,
  translated,
  dishes,
  sourceRefs,
  dishesWithImage: withImage,
  trackedFiles,
  artefacts,
  gateScripts,
  devbookIncidents: incidents,
  sitUatStories: stories,
}, null, 2));
