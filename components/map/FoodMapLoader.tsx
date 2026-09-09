"use client";

import dynamic from "next/dynamic";
import type { FeatureCollection, Point } from "geojson";
import type { ProvinceMapProperties } from "@/lib/geo";
import { useLocale } from "@/lib/useLocale";
import { t } from "@/lib/ui-strings";
import type { Locale } from "@/lib/locale";

/**
 * Khung chờ trong lúc tải bản đồ. Tách thành component riêng vì `dynamic()` chạy ở phạm
 * vi module nên không nhận được prop `locale` — nó tự đọc ngôn ngữ từ URL.
 */
function MapLoading() {
  const locale = useLocale();
  return (
    <div className="flex h-full w-full items-center justify-center bg-surface-muted text-ink/50">
      {t(locale, "map.loading")}
    </div>
  );
}

const FoodMap = dynamic(() => import("./FoodMap"), {
  ssr: false,
  loading: () => <MapLoading />,
});

interface FoodMapLoaderProps {
  provinces: FeatureCollection<Point, ProvinceMapProperties>;
  locale?: Locale;
}

export default function FoodMapLoader(props: FoodMapLoaderProps) {
  return <FoodMap {...props} />;
}
