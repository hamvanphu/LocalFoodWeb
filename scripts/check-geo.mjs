/**
 * Cổng kiểm tính đúng đắn địa lý cho centroid 63 tỉnh.
 *
 * Sinh ra từ rủi ro R13 / OP-06: centroid Khánh Hòa từng nằm giữa quần đảo Trường Sa
 * (lệch ~450km) và sống sót 12 ngày vì lọt qua **mọi** cổng đang có — zod chỉ kiểm
 * `centroid` là mảng 2 số hợp lệ, không kiểm nó nằm ở đâu trên Trái Đất.
 *
 * Nguyên nhân gốc: `centroids.json` lấy centroid hình học của polygon hành chính, mà
 * polygon một số tỉnh **bao gồm cả huyện đảo xa bờ** (Trường Sa với Khánh Hòa, Hoàng
 * Sa với Đà Nẵng) nên bị kéo hẳn ra biển.
 *
 * ⚠️ PHẠM VI CỦA CỔNG NÀY: chỉ kiểm vị trí **marker món ăn**. Bbox "đất liền" dưới đây
 * KHÔNG phải tuyên bố về lãnh thổ. Hoàng Sa và Trường Sa thuộc chủ quyền Việt Nam và
 * được thể hiện riêng trên bản đồ qua `data/sovereignty.json` — chúng không nằm trong
 * bbox này chỉ vì ở đó không có món ăn nào để gắn marker.
 *
 * Chạy: `pnpm check:geo`
 */
import fs from "node:fs";
import path from "node:path";

/**
 * Bbox phần ĐẤT LIỀN, dùng để kiểm marker món ăn không bị trôi ra biển.
 * Cố ý không bao quần đảo xa bờ vì ở đó không gắn marker ẩm thực — KHÔNG mang ý nghĩa
 * lãnh thổ (xem ghi chú phạm vi ở đầu file).
 */
const MAINLAND = { west: 102.1, east: 109.6, south: 8.3, north: 23.5 };

const dir = path.join(process.cwd(), "data", "provinces");
const problems = [];
let checked = 0;

for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".json"))) {
  const p = JSON.parse(fs.readFileSync(path.join(dir, file), "utf8"));
  const [lng, lat] = p.centroid ?? [];

  if (typeof lng !== "number" || typeof lat !== "number") {
    problems.push(`${file}: centroid không phải cặp số hợp lệ`);
    continue;
  }
  checked++;

  const out = [];
  if (lng < MAINLAND.west) out.push(`quá tây (${lng})`);
  if (lng > MAINLAND.east) out.push(`quá đông (${lng}) — có thể đang nằm giữa Biển Đông`);
  if (lat < MAINLAND.south) out.push(`quá nam (${lat})`);
  if (lat > MAINLAND.north) out.push(`quá bắc (${lat})`);

  if (out.length) {
    problems.push(`${p.name} (${file}): ${out.join(", ")}`);
  }
}

if (problems.length) {
  console.error(`\n✗ ${problems.length} tỉnh có centroid nằm ngoài đất liền Việt Nam:\n`);
  for (const p of problems) console.error(`   - ${p}`);
  console.error(
    `\nNếu tỉnh đó thật sự có huyện đảo xa bờ, dùng toạ độ phần ĐẤT LIỀN,` +
      `\nđừng dùng centroid hình học của polygon hành chính.\n`,
  );
  process.exit(1);
}

console.log(`✓ ${checked}/${checked} centroid nằm trong đất liền Việt Nam.`);
