import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FoodMapLoader from "@/components/map/FoodMapLoader";
import HeroSection from "@/components/HeroSection";
import ProvinceExplorerGrid from "@/components/province/ProvinceExplorerGrid";
import heroBubbles from "@/data/hero-bubbles.json";
import { buildHeroBubbleFeatureCollection, buildProvincePinFeatureCollection } from "@/lib/geo";
import { getAllProvinces, getHeroDish } from "@/lib/provinces";

export default function HomePage() {
  const heroBubbleFeatures = buildHeroBubbleFeatureCollection();
  const provincePins = buildProvincePinFeatureCollection();
  const provinces = getAllProvinces();

  // Trang chủ chỉ hiện tỉnh nổi bật (danh sách curated dùng chung với bubble bản đồ),
  // không hiện tất cả — tránh trang chủ bị rợp khi scale ra 63 tỉnh (PM feedback 2026-09-03).
  const highlighted = provinces.filter((p) => heroBubbles.provinceSlugs.includes(p.slug));

  const heroPhoto = provinces
    .map((province) => getHeroDish(province)?.images[0])
    .find((image) => Boolean(image));

  const marqueeItems = provinces.flatMap((province) => {
    const hero = getHeroDish(province);
    return hero ? [`${province.name} · ${hero.name}`] : [];
  });

  return (
    <div>
      <HeroSection heroPhotoUrl={heroPhoto?.url} marqueeItems={marqueeItems} />

      <section id="map-section" className="mx-auto max-w-6xl px-6 pt-12">
        <div className="h-[70vh] min-h-[420px] w-full overflow-hidden rounded-card border border-border shadow-card">
          <FoodMapLoader heroBubbles={heroBubbleFeatures} provincePins={provincePins} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Tỉnh nổi bật
            </h2>
            <p className="mt-1 text-sm text-ink/60">
              Chưa quen thao tác bản đồ? Bấm thẳng vào tỉnh mày muốn khám phá bên dưới.
            </p>
          </div>
          <Link
            href="/browse"
            className="flex items-center gap-1.5 text-sm font-medium text-chili hover:text-chili-dark"
          >
            Xem tất cả {provinces.length} tỉnh
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-6">
          <ProvinceExplorerGrid provinces={highlighted} />
        </div>
      </section>
    </div>
  );
}
