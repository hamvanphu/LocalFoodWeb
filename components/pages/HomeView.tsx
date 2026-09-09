import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FoodMapLoader from "@/components/map/FoodMapLoader";
import HeroSection from "@/components/HeroSection";
import ProvinceExplorerGrid from "@/components/province/ProvinceExplorerGrid";
import RecentReviews, { type DishLookup } from "@/components/review/RecentReviews";
import heroBubbles from "@/data/hero-bubbles.json";
import { buildProvinceMapFeatureCollection } from "@/lib/geo";
import { getAllProvinces, getHeroDish } from "@/lib/provinces";
import { localizeProvinces, localePath, type Locale } from "@/lib/i18n";
import { t } from "@/lib/ui-strings";

/** Thân trang chủ, dùng chung cho `/` và `/en`. */
export default function HomeView({ locale }: { locale: Locale }) {
  const provinceFeatures = buildProvinceMapFeatureCollection();
  const provinces = localizeProvinces(getAllProvinces(), locale);

  // Trang chủ chỉ hiện tỉnh nổi bật (danh sách curated dùng chung với bubble bản đồ),
  // không hiện tất cả — tránh trang chủ bị rợp khi scale ra 63 tỉnh (PM feedback 2026-09-03).
  const highlighted = provinces.filter((p) => heroBubbles.provinceSlugs.includes(p.slug));

  // Bảng tra slug → tên hiển thị, dựng sẵn ở server để khối đánh giá không phải
  // tải lại toàn bộ dữ liệu tỉnh ở phía trình duyệt. Tên giữ tiếng Việt ở cả hai bản.
  const dishLookup: DishLookup = {};
  for (const p of provinces) {
    for (const d of p.dishes) {
      dishLookup[`${p.slug}/${d.slug}`] = { provinceName: p.name, dishName: d.name };
    }
  }

  const heroPhoto = provinces
    .map((province) => getHeroDish(province)?.images[0])
    .find((image) => Boolean(image));

  const marqueeItems = provinces.flatMap((province) => {
    const hero = getHeroDish(province);
    return hero ? [`${province.name} · ${hero.name}`] : [];
  });

  return (
    <div>
      <HeroSection heroPhotoUrl={heroPhoto?.url} marqueeItems={marqueeItems} locale={locale} />

      <section id="map-section" className="mx-auto max-w-6xl px-6 pt-12">
        <div className="h-[70vh] min-h-[420px] w-full overflow-hidden rounded-card border border-border shadow-card">
          <FoodMapLoader provinces={provinceFeatures} locale={locale} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              {t(locale, "home.highlights")}
            </h2>
            <p className="mt-1 text-sm text-ink/70">{t(locale, "home.highlightsHint")}</p>
          </div>
          <Link
            href={localePath(locale, "/browse")}
            className="flex items-center gap-1.5 text-sm font-medium text-chili hover:text-chili-dark"
          >
            {t(locale, "home.viewAll", { n: provinces.length })}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-6">
          <ProvinceExplorerGrid provinces={highlighted} locale={locale} />
        </div>
      </section>

      <RecentReviews lookup={dishLookup} locale={locale} />
    </div>
  );
}
