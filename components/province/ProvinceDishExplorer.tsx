"use client";

import { useState, useSyncExternalStore } from "react";
import { LayoutGrid, GalleryHorizontal } from "lucide-react";
import DishTile from "./DishTile";
import DishCard from "./DishCard";
import Sheet from "@/components/ui/Sheet";
import { t } from "@/lib/ui-strings";
import type { Locale } from "@/lib/locale";
import type { Dish } from "@/lib/types";

type ViewMode = "overview" | "timeline";

/**
 * Hash của URL là **trạng thái nằm ngoài React**, nên đọc nó bằng `useSyncExternalStore`
 * chứ không phải `useEffect`.
 *
 * Cách cũ (`useEffect` đọc `window.location.hash`, dep là `[dishes]`) có lỗi thật: đang
 * ở trang một tỉnh mà bấm kết quả tìm kiếm sang **món khác cùng tỉnh** thì hash đổi nhưng
 * `dishes` không đổi ⇒ effect không chạy lại ⇒ panel chi tiết không mở.
 *
 * `getServerSnapshot` trả về chuỗi rỗng vì server không hề biết hash — React sẽ hydrate
 * với panel đóng rồi đọc lại hash thật ngay sau đó, nên không lệch hydration.
 */
function subscribeToHash(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}
const readHash = () => window.location.hash.replace("#", "");
const readHashOnServer = () => "";

export default function ProvinceDishExplorer({
  dishes,
  provinceName,
  provinceSlug,
  locale = "vi",
}: {
  dishes: Dish[];
  provinceName: string;
  provinceSlug: string;
  locale?: Locale;
}) {
  const [mode, setMode] = useState<ViewMode>("overview");

  // Deep-link: /provinces/{slug}#{dish-slug} (dùng bởi kết quả tìm kiếm) tự mở panel chi tiết.
  const hash = useSyncExternalStore(subscribeToHash, readHash, readHashOnServer);

  /**
   * Thao tác của người dùng được ghi kèm hash lúc đó. Nhờ vậy khi hash đổi, lựa chọn cũ
   * tự hết hiệu lực và panel bám theo URL mới — không cần effect nào để đồng bộ lại.
   */
  const [override, setOverride] = useState<{ hash: string; dish: Dish | null } | null>(null);

  const fromHash = hash ? (dishes.find((dish) => dish.slug === hash) ?? null) : null;
  const selected = override?.hash === hash ? override.dish : fromHash;
  const setSelected = (dish: Dish | null) => setOverride({ hash, dish });

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
          {t(locale, "province.overview")}
        </button>
        <button
          onClick={() => setMode("timeline")}
          className={`flex items-center gap-1.5 rounded-pill px-4 py-2 text-sm font-medium transition-colors ${
            mode === "timeline" ? "bg-chili text-white" : "text-ink/70 hover:text-ink"
          }`}
        >
          <GalleryHorizontal className="h-4 w-4" />
          {t(locale, "province.journey")}
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
              <DishCard
                dish={dish}
                provinceSlug={provinceSlug}
                priority={index === 0}
                index={index}
                locale={locale}
              />
            </div>
          ))}
        </div>
      )}

      <Sheet open={selected !== null} onClose={() => setSelected(null)}>
        {selected && (
          <div>
            <p className="px-6 pt-2 text-xs uppercase tracking-wide text-ink/65">
              {provinceName} · {t(locale, "province.dishes")}
            </p>
            <div className="p-6 pt-3">
              <DishCard dish={selected} provinceSlug={provinceSlug} priority index={0} locale={locale} />
            </div>
          </div>
        )}
      </Sheet>
    </div>
  );
}
