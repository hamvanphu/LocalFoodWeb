import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import type { Dish, Province } from "@/lib/types";

export default function ProvinceHero({ province, heroDish }: { province: Province; heroDish?: Dish }) {
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
          href="/"
          className="mt-4 inline-flex items-center gap-1.5 text-sm text-ink/60 hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" />
          Quay lại bản đồ
        </Link>
        <p className="mt-4 text-xs uppercase tracking-wide text-amber">
          Miền {province.region}
        </p>
        <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
          {province.name}
        </h1>
        <p className="mt-3 max-w-2xl text-ink/70">{province.summary}</p>
      </div>
    </section>
  );
}
