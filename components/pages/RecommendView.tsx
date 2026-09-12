import Link from "next/link";
import { ArrowRight, Info, UtensilsCrossed } from "lucide-react";
import DishCard from "@/components/province/DishCard";
import OfficeFlagList from "@/components/recommend/OfficeFlags";
import RerollBubble from "@/components/recommend/RerollBubble";
import { getAllProvinces } from "@/lib/provinces";
import { localizeProvinces } from "@/lib/i18n";
import { localePath, type Locale } from "@/lib/locale";
import { officePool, pickTwo, DEFAULT_SEED } from "@/lib/recommend";
import { t } from "@/lib/ui-strings";

/**
 * Thân trang "Trưa nay ăn gì" (US-18), dùng chung cho `/goi-y` và `/en/goi-y`.
 *
 * Cặp món suy ra từ **seed trên query string**, không phải `Math.random()` lúc render —
 * nếu không, máy chủ và trình duyệt sẽ ra hai cặp khác nhau và món sẽ nháy đổi ngay
 * trước mắt người dùng. Xem `lib/recommend.ts`.
 */
export default function RecommendView({
  locale,
  seed,
}: {
  locale: Locale;
  seed?: string;
}) {
  const provinces = localizeProvinces(getAllProvinces(), locale);
  const pool = officePool(provinces);
  const picked = pickTwo(pool, seed || DEFAULT_SEED);

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <header className="text-center">
        <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
          {t(locale, "rec.title")}
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-ink/70">{t(locale, "rec.lead")}</p>
        <p className="mt-6 text-xs text-ink/60">
          {t(locale, "rec.poolNote", { n: pool.length })}
        </p>
      </header>

      {picked.length === 0 ? (
        <p className="mt-12 rounded-card border border-dashed border-border p-8 text-center text-sm text-ink/60">
          {t(locale, "rec.empty")}
        </p>
      ) : (
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {picked.map((item, i) => (
            <section key={`${item.provinceSlug}/${item.dish.slug}`}>
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs font-medium uppercase tracking-wide text-amber-dark">
                  {t(locale, i === 0 ? "rec.optionA" : "rec.optionB")}
                </p>
                <OfficeFlagList flags={item.flags} locale={locale} />
              </div>

              {/* DishCard đã hiện đủ nguyên liệu / cách làm / cách ăn — đúng thứ US-18 cần.
                  Tắt phần đánh giá: ở đây mục đích là quyết định nhanh. */}
              <DishCard
                dish={item.dish}
                provinceSlug={item.provinceSlug}
                priority={i === 0}
                index={i}
                locale={locale}
                showReviews={false}
              />

              <Link
                href={localePath(locale, `/provinces/${item.provinceSlug}#${item.dish.slug}`)}
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-chili hover:text-chili-dark"
              >
                <UtensilsCrossed className="h-4 w-4" aria-hidden="true" />
                {t(locale, "rec.seeProvince", { name: item.provinceName })}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </section>
          ))}
        </div>
      )}

      {/* Bubble trôi quanh màn hình — hành động chính. Đặt ngoài luồng nội dung vì nó
          `position: fixed`; để trong header sẽ bị cuộn mất. */}
      <RerollBubble locale={locale} />

      {/* Giới hạn phải nói thẳng, không giấu ở chân trang — US-18 AC và RISK R17. */}
      <aside className="mt-12 flex gap-3 rounded-card border border-border bg-surface-muted p-5">
        <Info className="mt-0.5 h-5 w-5 shrink-0 text-amber-dark" aria-hidden="true" />
        <div>
          <p className="font-medium text-ink">{t(locale, "rec.limitTitle")}</p>
          <p className="mt-1 text-sm text-ink/75">{t(locale, "rec.limitBody")}</p>
        </div>
      </aside>
    </div>
  );
}
