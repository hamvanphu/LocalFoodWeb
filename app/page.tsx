import FoodMapLoader from "@/components/map/FoodMapLoader";
import ProvinceTeaserCard from "@/components/province/ProvinceTeaserCard";
import { buildHeroBubbleFeatureCollection, buildProvincePinFeatureCollection } from "@/lib/geo";
import { getAllProvinces, getHeroDish } from "@/lib/provinces";

export default function HomePage() {
  const heroBubbles = buildHeroBubbleFeatureCollection();
  const provincePins = buildProvincePinFeatureCollection();
  const provinces = getAllProvinces();

  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-6 bg-texture-warm">
        <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
          Bản đồ ẩm thực <span className="text-chili">Việt Nam</span>
        </h1>
        <p className="mt-3 max-w-2xl text-ink/70">
          Khám phá món ăn đặc trưng của từng tỉnh thành — bấm vào một điểm trên
          bản đồ để xem công thức, nguyên liệu và cách thưởng thức chuẩn vị địa
          phương.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="h-[70vh] min-h-[420px] w-full overflow-hidden rounded-card border border-border shadow-card">
          <FoodMapLoader heroBubbles={heroBubbles} provincePins={provincePins} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="font-display text-2xl font-semibold text-ink">
          Tỉnh thành đã có trên bản đồ
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {provinces.map((province, index) => (
            <ProvinceTeaserCard
              key={province.slug}
              province={province}
              hero={getHeroDish(province)}
              index={index}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
