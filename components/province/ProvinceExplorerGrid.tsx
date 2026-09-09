"use client";

import { useMemo, useState } from "react";
import { CalendarDays, Check } from "lucide-react";
import ProvinceTeaserCard from "./ProvinceTeaserCard";
import { OCCASIONS } from "@/lib/types";
import type { Locale } from "@/lib/locale";
import { t } from "@/lib/ui-strings";
import type { Occasion, Province } from "@/lib/types";

export default function ProvinceExplorerGrid({
  provinces,
  locale = "vi",
}: {
  provinces: Province[];
  locale?: Locale;
}) {
  const [active, setActive] = useState<Occasion | null>(null);

  const filtered = useMemo(() => {
    if (!active) return provinces;
    return provinces.filter((province) =>
      province.dishes.some((dish) => dish.occasions.includes(active)),
    );
  }, [provinces, active]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <span className="flex items-center gap-1.5 text-sm font-medium text-ink/70">
          <CalendarDays className="h-4 w-4" />
          {t(locale, "browse.filter")}
        </span>
        {OCCASIONS.map((occasion) => {
          const on = active === occasion;
          return (
            <button
              key={occasion}
              // aria-pressed để trình đọc màn hình biết chip nào đang bật —
              // nếu không, trạng thái lọc chỉ tồn tại dưới dạng màu sắc.
              aria-pressed={on}
              onClick={() => setActive(on ? null : occasion)}
              className={`flex items-center gap-1 rounded-pill border px-3 py-1 text-sm font-medium transition-colors ${
                on
                  ? "border-chili bg-chili text-white"
                  : "border-border bg-surface text-ink/70 hover:border-chili/40 hover:text-chili"
              }`}
            >
              {/* Dấu ✓ là tín hiệu KHÔNG dựa vào màu — WCAG 1.4.1 (Use of Color),
                  cũng là AC của US-13. Người mù màu vẫn phân biệt được. */}
              {on && <Check className="h-3.5 w-3.5" aria-hidden="true" />}
              {t(locale, `occasion.${occasion}`)}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-card border border-dashed border-border p-8 text-center text-sm text-ink/50">
          {t(locale, "browse.emptyFilter", {
            occasion: active ? t(locale, `occasion.${active}`) : "",
          })}
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map((province, index) => (
            <ProvinceTeaserCard
              key={province.slug}
              province={province}
              hero={province.dishes.find((d) => d.slug === province.heroDishSlug)}
              index={index}
              locale={locale}
            />
          ))}
        </div>
      )}
    </div>
  );
}
