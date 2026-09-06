"use client";

import dynamic from "next/dynamic";
import type { FeatureCollection, Point } from "geojson";
import type { ProvinceMapProperties } from "@/lib/geo";

const FoodMap = dynamic(() => import("./FoodMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-surface-muted text-ink/50">
      Đang tải bản đồ…
    </div>
  ),
});

interface FoodMapLoaderProps {
  provinces: FeatureCollection<Point, ProvinceMapProperties>;
}

export default function FoodMapLoader(props: FoodMapLoaderProps) {
  return <FoodMap {...props} />;
}
