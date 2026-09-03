import type { Feature, FeatureCollection, Point } from "geojson";
import heroBubbles from "@/data/hero-bubbles.json";
import { getAllProvinces, getHeroDish, getProvinceBySlug } from "./provinces";
import type { Province } from "./types";

export interface ProvinceMapProperties {
  slug: string;
  name: string;
  region: Province["region"];
  heroDishName: string;
  heroDishImageUrl: string | null;
}

function toPointFeature(province: Province): Feature<Point, ProvinceMapProperties> {
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
    },
  };
}

/** Layer A — hand-curated hero bubbles, visible at low zoom. */
export function buildHeroBubbleFeatureCollection(): FeatureCollection<
  Point,
  ProvinceMapProperties
> {
  const features = heroBubbles.provinceSlugs
    .map((slug) => getProvinceBySlug(slug))
    .filter((province): province is Province => Boolean(province))
    .map(toPointFeature);

  return { type: "FeatureCollection", features };
}

/** Layer B — every province with data, visible from mid zoom onward. */
export function buildProvincePinFeatureCollection(): FeatureCollection<
  Point,
  ProvinceMapProperties
> {
  return {
    type: "FeatureCollection",
    features: getAllProvinces().map(toPointFeature),
  };
}
