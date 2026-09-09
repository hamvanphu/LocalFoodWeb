"use client";

import { useMemo, useState } from "react";
import { CalendarDays, Check } from "lucide-react";
import ProvinceTeaserCard from "./ProvinceTeaserCard";
import { OCCASIONS } from "@/lib/types";
import type { Locale } from "@/lib/locale";
import { t } from "@/lib/ui-strings";
import type { Occasion, Province, Region } from "@/lib/types";

const REGION_ORDER: Region[] = ["Bắc", "Trung", "Nam"];

export default function BrowseProvinces({
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

  const grouped = useMemo(() => {
    return REGION_ORDER.map((region) => ({
      region,
      items: filtered.filter((p) => p.region === region),
    })).filter((group) => group.items.length > 0);
  }, [filtered]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center gap-2">
        <span className="flex items-center gap-1.5 text-sm font-medium text-ink/70">
          <CalendarDays className="h-4 w-4" />
          {t(locale, "browse.filter")}
        </span>
        {OCCASIONS.map((occasion) => {
          const on = active === occasion;
          return (
            <button
              key={occasion}
              aria-pressed={on}
              onClick={() => setActive(on ? null : occasion)}
              className={`flex items-center gap-1 rounded-pill border px-3 py-1 text-sm font-medium transition-colors ${
                on
                  ? "border-chili bg-chili text-white"
                  : "border-border bg-surface text-ink/70 hover:border-chili/40 hover:text-chili"
              }`}
            >
              {/* Xem chú thích ở ProvinceExplorerGrid: dấu ✓ là tín hiệu không dựa
                  vào màu (WCAG 1.4.1), aria-pressed cho trình đọc màn hình. */}
              {on && <Check className="h-3.5 w-3.5" aria-hidden="true" />}
              {t(locale, `occasion.${occasion}`)}
            </button>
          );
        })}
      </div>

      {grouped.length === 0 ? (
        <p className="rounded-card border border-dashed border-border p-8 text-center text-sm text-ink/50">
          {t(locale, "browse.emptyFilter", {
            occasion: active ? t(locale, `occasion.${active}`) : "",
          })}
        </p>
      ) : (
        <div className="space-y-10">
          {grouped.map(({ region, items }) => (
            <section key={region}>
              <h2 className="mb-4 font-display text-xl font-semibold text-ink">
                {t(locale, `region.${region}`)}{" "}
                <span className="text-sm font-normal text-ink/65">
                  {t(locale, "browse.groupCount", { n: items.length })}
                </span>
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {items.map((province, index) => (
                  <ProvinceTeaserCard
                    key={province.slug}
                    province={province}
                    hero={province.dishes.find((d) => d.slug === province.heroDishSlug)}
                    index={index}
                    locale={locale}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
