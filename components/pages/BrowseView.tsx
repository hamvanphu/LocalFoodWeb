import BrowseProvinces from "@/components/province/BrowseProvinces";
import { getAllProvinces } from "@/lib/provinces";
import { localizeProvinces, type Locale } from "@/lib/i18n";
import { t } from "@/lib/ui-strings";

/** Thân trang danh sách tỉnh, dùng chung cho `/browse` và `/en/browse`. */
export default function BrowseView({ locale }: { locale: Locale }) {
  const provinces = localizeProvinces(getAllProvinces(), locale);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
        {t(locale, "browse.title")}
      </h1>
      <p className="mt-2 max-w-2xl text-ink/70">
        {t(locale, "browse.intro", { n: provinces.length })}
      </p>
      <div className="mt-8">
        <BrowseProvinces provinces={provinces} locale={locale} />
      </div>
    </div>
  );
}
