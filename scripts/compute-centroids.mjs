// One-time helper (not app runtime): computes an area-weighted centroid per
// province from the normalized GeoJSON, for use when authoring
// data/provinces/*.json `centroid` fields (map camera fly-to / fallback pin).
import fs from "node:fs";

const SRC = new URL("../data/geo/vietnam-provinces-63.geojson", import.meta.url);
const OUT = new URL("../data/geo/centroids.json", import.meta.url);

function ringCentroid(ring) {
  let cx = 0;
  let cy = 0;
  let area = 0;
  for (let i = 0; i < ring.length - 1; i++) {
    const [x1, y1] = ring[i];
    const [x2, y2] = ring[i + 1];
    const cross = x1 * y2 - x2 * y1;
    area += cross;
    cx += (x1 + x2) * cross;
    cy += (y1 + y2) * cross;
  }
  area /= 2;
  if (area === 0) return null;
  return { x: cx / (6 * area), y: cy / (6 * area), area: Math.abs(area) };
}

function multiPolygonCentroid(coordinates) {
  // Area-weighted centroid across all polygons; each polygon's outer ring only
  // (islands/holes ignored — negligible for our point-placement use case).
  let totalArea = 0;
  let wx = 0;
  let wy = 0;
  for (const polygon of coordinates) {
    const outer = polygon[0];
    const c = ringCentroid(outer);
    if (!c) continue;
    wx += c.x * c.area;
    wy += c.y * c.area;
    totalArea += c.area;
  }
  if (totalArea === 0) return null;
  return [wx / totalArea, wy / totalArea];
}

const data = JSON.parse(fs.readFileSync(SRC, "utf8"));
const centroids = {};
for (const feature of data.features) {
  const [lng, lat] = multiPolygonCentroid(feature.geometry.coordinates);
  centroids[feature.properties.slug] = [
    Math.round(lng * 1e5) / 1e5,
    Math.round(lat * 1e5) / 1e5,
  ];
}

fs.writeFileSync(OUT, JSON.stringify(centroids, null, 2) + "\n");
console.log(`Wrote centroids for ${Object.keys(centroids).length} provinces to ${OUT.pathname}`);
console.log("ha-noi:", centroids["ha-noi"], "thua-thien-hue:", centroids["thua-thien-hue"]);
