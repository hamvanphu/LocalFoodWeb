"use client";

import { useEffect, useState } from "react";
import { LayoutGrid, GalleryHorizontal } from "lucide-react";
import DishTile from "./DishTile";
import DishCard from "./DishCard";
import Sheet from "@/components/ui/Sheet";
import type { Dish } from "@/lib/types";

type ViewMode = "overview" | "timeline";

export default function ProvinceDishExplorer({
  dishes,
  provinceName,
  provinceSlug,
}: {
  dishes: Dish[];
  provinceName: string;
  provinceSlug: string;
}) {
  const [mode, setMode] = useState<ViewMode>("overview");
  const [selected, setSelected] = useState<Dish | null>(null);

  // Deep-link: /provinces/{slug}#{dish-slug} (dùng bởi kết quả tìm kiếm) tự mở panel chi tiết.
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const match = dishes.find((dish) => dish.slug === hash);
    if (match) setSelected(match);
  }, [dishes]);

  return (
    <div>
      <div className="mb-6 inline-flex rounded-pill border border-border bg-surface p-1 shadow-soft">
        <button
          onClick={() => setMode("overview")}
          className={`flex items-center gap-1.5 rounded-pill px-4 py-2 text-sm font-medium transition-colors ${
            mode === "overview" ? "bg-chili text-white" : "text-ink/70 hover:text-ink"
          }`}
        >
          <LayoutGrid className="h-4 w-4" />
          Tổng quan
        </button>
        <button
          onClick={() => setMode("timeline")}
          className={`flex items-center gap-1.5 rounded-pill px-4 py-2 text-sm font-medium transition-colors ${
            mode === "timeline" ? "bg-chili text-white" : "text-ink/70 hover:text-ink"
          }`}
        >
          <GalleryHorizontal className="h-4 w-4" />
          Hành trình
        </button>
      </div>

      {mode === "overview" ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {dishes.map((dish, index) => (
            <DishTile
              key={dish.slug}
              dish={dish}
              index={index}
              onSelect={() => setSelected(dish)}
            />
          ))}
        </div>
      ) : (
        <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4">
          {dishes.map((dish, index) => (
            <div key={dish.slug} className="w-[85vw] max-w-md shrink-0 snap-center">
              <DishCard dish={dish} provinceSlug={provinceSlug} priority={index === 0} index={index} />
            </div>
          ))}
        </div>
      )}

      <Sheet open={selected !== null} onClose={() => setSelected(null)}>
        {selected && (
          <div>
            <p className="px-6 pt-2 text-xs uppercase tracking-wide text-ink/65">
              {provinceName} · Món ăn đặc trưng
            </p>
            <div className="p-6 pt-3">
              <DishCard dish={selected} provinceSlug={provinceSlug} priority index={0} />
            </div>
          </div>
        )}
      </Sheet>
    </div>
  );
}
