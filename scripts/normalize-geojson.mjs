// One-time normalization script (not part of app runtime).
// Reads the raw Free-GIS-Data pre-2025 63-province GeoJSON, merges duplicate
// province features (mainland + separately-listed island group sharing the
// same name), assigns a stable kebab-case `slug` property matching the slugs
// used in data/provinces/*.json, and writes the result back in place.
import fs from "node:fs";

const SRC = new URL("../data/geo/vietnam-provinces-63.geojson", import.meta.url);

const NAME_TO_SLUG = {
  "An Giang": "an-giang",
  "Ba Ria - Vung Tau": "ba-ria-vung-tau",
  "Bac Giang": "bac-giang",
  "Bac Kan": "bac-kan",
  "Bac Lieu": "bac-lieu",
  "Bac Ninh": "bac-ninh",
  "Ben Tre": "ben-tre",
  "Binh Dinh": "binh-dinh",
  "Binh Duong": "binh-duong",
  "Binh Phuoc": "binh-phuoc",
  "Binh Thuan": "binh-thuan",
  "Ca Mau": "ca-mau",
  "Can Tho city": "can-tho",
  "Cao Bang": "cao-bang",
  "Dak Lak": "dak-lak",
  "Dak Nong": "dak-nong",
  "Dien Bien": "dien-bien",
  "Dong Nai": "dong-nai",
  "Dong Thap": "dong-thap",
  "Gia Lai": "gia-lai",
  "Ha Giang": "ha-giang",
  "Ha Nam": "ha-nam",
  "Ha Noi city": "ha-noi",
  "Ha Tinh": "ha-tinh",
  "Hai Duong": "hai-duong",
  "Hai Phong city": "hai-phong",
  "Hau Giang": "hau-giang",
  "Hoa Binh": "hoa-binh",
  "Hung Yen": "hung-yen",
  "Kien Giang": "kien-giang",
  "Kon Tum": "kon-tum",
  "Lai Chau": "lai-chau",
  "Lam Dong": "lam-dong",
  "Lang Son": "lang-son",
  "Lao Cai": "lao-cai",
  "Long An": "long-an",
  "Nam Dinh": "nam-dinh",
  "Nghe An": "nghe-an",
  "Ninh Binh": "ninh-binh",
  "Ninh Thuan": "ninh-thuan",
  "Phu Tho": "phu-tho",
  "Phu Yen": "phu-yen",
  "Quang Binh": "quang-binh",
  "Quang Nam": "quang-nam",
  "Quang Ngai": "quang-ngai",
  "Quang Ninh": "quang-ninh",
  "Quang Tri": "quang-tri",
  "Soc Trang": "soc-trang",
  "Son La": "son-la",
  "Tay Ninh": "tay-ninh",
  "Thai Binh": "thai-binh",
  "Thai Nguyen": "thai-nguyen",
  "Thanh Hoa": "thanh-hoa",
  "Thua Thien - Hue": "thua-thien-hue",
  "Tien Giang": "tien-giang",
  "Ho Chi Minh city": "ho-chi-minh",
  "Tra Vinh": "tra-vinh",
  "Tuyen Quang": "tuyen-quang",
  "Vinh Long": "vinh-long",
  "Vinh Phuc": "vinh-phuc",
  "Yen Bai": "yen-bai",
  "Da Nang city": "da-nang",
  "Khanh Hoa": "khanh-hoa",
};

const raw = JSON.parse(fs.readFileSync(SRC, "utf8"));

/** @type {Map<string, any>} slug -> merged feature */
const bySlug = new Map();

for (const feature of raw.features) {
  const name = feature.properties.Name;
  const slug = NAME_TO_SLUG[name];
  if (!slug) {
    throw new Error(`No slug mapping for source feature name: "${name}"`);
  }

  const polygons =
    feature.geometry.type === "MultiPolygon"
      ? feature.geometry.coordinates
      : [feature.geometry.coordinates];

  const existing = bySlug.get(slug);
  if (existing) {
    existing.geometry.coordinates.push(...polygons);
  } else {
    bySlug.set(slug, {
      type: "Feature",
      properties: { slug, sourceName: name },
      geometry: { type: "MultiPolygon", coordinates: polygons },
    });
  }
}

const merged = {
  type: "FeatureCollection",
  name: "vietnam-provinces-63",
  crs: raw.crs,
  features: [...bySlug.values()],
};

if (merged.features.length !== 63) {
  throw new Error(`Expected 63 merged provinces, got ${merged.features.length}`);
}

fs.writeFileSync(SRC, JSON.stringify(merged));
console.log(`Wrote ${merged.features.length} provinces with slugs to ${SRC.pathname}`);
