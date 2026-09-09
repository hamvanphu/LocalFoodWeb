import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { localePath, type Locale } from "@/lib/i18n";
import { t } from "@/lib/ui-strings";
import type { Dish, Province } from "@/lib/types";

export default function ProvinceHero({
  province,
  heroDish,
  locale = "vi",
}: {
  province: Province;
  heroDish?: Dish;
  locale?: Locale;
}) {
  return (
    <section className="relative">
      <div className="h-64 w-full sm:h-80">
        <ImageWithFallback
          slug={province.slug}
          name={heroDish?.name ?? province.name}
          images={heroDish?.images ?? []}
          className="h-full w-full"
          priority
        />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <Link
          href={localePath(locale, "/")}
          className="mt-4 inline-flex items-center gap-1.5 text-sm text-ink/70 hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" />
          {t(locale, "province.backToMap")}
        </Link>
        <p className="mt-4 text-xs uppercase tracking-wide text-amber-dark">
          {t(locale, `region.${province.region}`)}
        </p>
        <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
          {province.name}
        </h1>
        <p className="mt-3 max-w-2xl text-ink/70">{province.summary}</p>
        {province.summarySourceRefs.length > 0 && (
          <p className="mt-2 text-xs text-ink/65">
            {t(locale, "province.source")}{" "}
            {province.summarySourceRefs.map((ref, i) => (
              <span key={ref.url}>
                {i > 0 && ", "}
                <a href={ref.url} target="_blank" rel="noreferrer" className="underline hover:text-ink/80">
                  {ref.label}
                </a>
              </span>
            ))}
          </p>
        )}
      </div>
    </section>
  );
}
