import ProvinceView from "@/components/pages/ProvinceView";
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
    alternates: { languages: { vi: `/provinces/${slug}`, en: `/en/provinces/${slug}` } },
  };
}

export default async function ProvincePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProvinceView slug={slug} locale="vi" />;
}
