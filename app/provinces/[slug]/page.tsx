import { notFound } from "next/navigation";
import DishCard from "@/components/province/DishCard";
import ProvinceHero from "@/components/province/ProvinceHero";
import { getAllProvinceSlugs, getHeroDish, getProvinceBySlug } from "@/lib/provinces";

export function generateStaticParams() {
  return getAllProvinceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const province = getProvinceBySlug(slug);
  if (!province) return {};
  const hero = getHeroDish(province);
  return {
    title: `${province.name} — ${hero?.name ?? "Ẩm thực địa phương"} | Local Food`,
    description: province.summary,
  };
}

export default async function ProvincePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const province = getProvinceBySlug(slug);
  if (!province) notFound();

  const heroDish = getHeroDish(province);

  return (
    <div>
      <ProvinceHero province={province} heroDish={heroDish} />

      <section className="mx-auto max-w-4xl space-y-8 px-6 py-12">
        <h2 className="font-display text-2xl font-semibold text-ink">
          Món ăn đặc trưng
        </h2>
        {province.dishes.map((dish, index) => (
          <DishCard key={dish.slug} dish={dish} priority={index === 0} />
        ))}
      </section>
    </div>
  );
}
