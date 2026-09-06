import type { Feature, FeatureCollection, Point } from "geojson";
import heroBubbles from "@/data/hero-bubbles.json";
import { getAllProvinces, getHeroDish } from "./provinces";
import type { Province } from "./types";

export interface ProvinceMapProperties {
  slug: string;
  name: string;
  region: Province["region"];
  heroDishName: string;
  heroDishImageUrl: string | null;
  /** Tỉnh trong danh sách curated — vẽ marker to hơn để giữ phân cấp thị giác. */
  isHeroBubble: boolean;
}

function toPointFeature(
  province: Province,
  isHeroBubble: boolean,
): Feature<Point, ProvinceMapProperties> {
  const heroDish = getHeroDish(province);
  return {
    type: "Feature",
    geometry: { type: "Point", coordinates: province.centroid },
    properties: {
      slug: province.slug,
      name: province.name,
      region: province.region,
      heroDishName: heroDish?.name ?? "",
      heroDishImageUrl: heroDish?.images[0]?.url ?? null,
      isHeroBubble,
    },
  };
}

/**
 * Toàn bộ tỉnh có dữ liệu, mỗi tỉnh 1 điểm. Không còn tách 2 FeatureCollection theo
 * tầng zoom nữa — bản đồ hiện tất cả và phân cấp bằng kích thước marker (xem `mapStyle.ts`).
 */
export function buildProvinceMapFeatureCollection(): FeatureCollection<
  Point,
  ProvinceMapProperties
> {
  const heroSlugs = new Set(heroBubbles.provinceSlugs);
  return {
    type: "FeatureCollection",
    features: getAllProvinces().map((province) =>
      toPointFeature(province, heroSlugs.has(province.slug)),
    ),
  };
}
