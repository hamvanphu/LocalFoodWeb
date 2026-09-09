import ProvinceView from "@/components/pages/ProvinceView";
import { getAllProvinceSlugs, getHeroDish, getProvinceBySlug } from "@/lib/provinces";
import { localizeProvince } from "@/lib/i18n";

export function generateStaticParams() {
  return getAllProvinceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const raw = getProvinceBySlug(slug);
  if (!raw) return {};
  const province = localizeProvince(raw, "en");
  const hero = getHeroDish(province);
  return {
    // Tên tỉnh và tên món giữ nguyên tiếng Việt kể cả ở bản tiếng Anh
    title: `${province.name} — ${hero?.name ?? "Local food"} | Local Food`,
    description: province.summary,
    alternates: { languages: { vi: `/provinces/${slug}`, en: `/en/provinces/${slug}` } },
  };
}

export default async function ProvincePageEn({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProvinceView slug={slug} locale="en" />;
}
