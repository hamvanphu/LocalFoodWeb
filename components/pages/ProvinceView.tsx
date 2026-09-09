import { notFound } from "next/navigation";
import ProvinceDishExplorer from "@/components/province/ProvinceDishExplorer";
import ProvinceHero from "@/components/province/ProvinceHero";
import { getHeroDish, getProvinceBySlug } from "@/lib/provinces";
import { localizeProvince, type Locale } from "@/lib/i18n";
import { t } from "@/lib/ui-strings";

/**
 * Thân trang tỉnh, dùng chung cho cả `/provinces/[slug]` (tiếng Việt) và
 * `/en/provinces/[slug]` (tiếng Anh).
 *
 * Tách ra để hai route không phải chép lại nhau — thứ chắc chắn sẽ lệch nhau sau vài
 * lần sửa. Route chỉ còn việc khai báo `locale` và `generateStaticParams`.
 */
export default function ProvinceView({
  slug,
  locale,
}: {
  slug: string;
  locale: Locale;
}) {
  const raw = getProvinceBySlug(slug);
  if (!raw) notFound();

  // Ghép bản dịch lên dữ liệu gốc; thiếu bản dịch thì giữ tiếng Việt ở đúng chỗ đó
  const province = localizeProvince(raw, locale);
  const heroDish = getHeroDish(province);

  return (
    <div>
      <ProvinceHero province={province} heroDish={heroDish} locale={locale} />

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="mb-2 font-display text-2xl font-semibold text-ink">
          {t(locale, "province.dishes")}
        </h2>
        <ProvinceDishExplorer
          dishes={province.dishes}
          provinceName={province.name}
          provinceSlug={province.slug}
          locale={locale}
        />
      </section>
    </div>
  );
}
