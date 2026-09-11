"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Carrot, ListOrdered, Utensils, ZoomIn } from "lucide-react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import Lightbox from "@/components/ui/Lightbox";
import Badge from "@/components/ui/Badge";
import DishReviews from "@/components/review/DishReviews";
import { t } from "@/lib/ui-strings";
import type { Locale } from "@/lib/locale";
import type { Dish } from "@/lib/types";

export default function DishCard({
  dish,
  provinceSlug,
  priority = false,
  index = 0,
  locale = "vi",
  showReviews = true,
}: {
  dish: Dish;
  /** Cần cho khối đánh giá — cặp (province_slug, dish_slug) là khoá của review. */
  provinceSlug: string;
  priority?: boolean;
  index?: number;
  locale?: Locale;
  /** Trang gợi ý tắt phần đánh giá: mục đích ở đó là quyết định nhanh, không phải đọc bình luận. */
  showReviews?: boolean;
}) {
  const [zoomed, setZoomed] = useState(false);
  const primaryImage = dish.images[0] ?? null;

  return (
    <motion.article
      id={dish.slug}
      className="scroll-mt-24 overflow-hidden rounded-card border border-border bg-surface shadow-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6, boxShadow: "var(--shadow-lifted)" }}
    >
      <button
        type="button"
        onClick={() => primaryImage && setZoomed(true)}
        className={`group relative block h-56 w-full ${primaryImage ? "cursor-zoom-in" : "cursor-default"}`}
        aria-label={primaryImage ? t(locale, "dish.zoom", { name: dish.name }) : dish.name}
      >
        <ImageWithFallback
          slug={dish.slug}
          name={dish.name}
          images={dish.images}
          className="h-56 w-full"
          priority={priority}
        />
        {primaryImage && (
          <span className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white opacity-0 transition-opacity group-hover:opacity-100">
            <ZoomIn className="h-4 w-4" />
          </span>
        )}
      </button>

      <div className="space-y-4 p-6">
        <div>
          <h3 className="font-display text-2xl font-semibold text-ink">
            {dish.name}
            {dish.isHero && (
              <Badge tone="chili" className="ml-2 align-middle">
                {t(locale, "dish.hero")}
              </Badge>
            )}
          </h3>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {dish.tasteTags.map((tag) => (
              <Badge key={tag} tone="neutral">
                {t(locale, `taste.${tag}`)}
              </Badge>
            ))}
          </div>
        </div>

        <p className="text-ink/80">{dish.description}</p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <h4 className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-herb">
              <Carrot className="h-4 w-4" aria-hidden="true" />
              {t(locale, "province.ingredients")}
            </h4>
            <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-ink/80">
              {dish.keyIngredients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-herb">
              <ListOrdered className="h-4 w-4" aria-hidden="true" />
              {t(locale, "province.steps")}
            </h4>
            <ol className="mt-2 list-decimal space-y-1 pl-4 text-sm text-ink/80">
              {dish.prepOutline.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="rounded-xl bg-turmeric/10 p-4">
          <h4 className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-amber-dark">
            <Utensils className="h-4 w-4" aria-hidden="true" />
            {t(locale, "province.howToEat")}
          </h4>
          <p className="mt-1 text-sm text-ink/80">{dish.howToEat}</p>
        </div>

        {dish.sourceRefs.length > 0 && (
          <p className="text-xs text-ink/65">
            {t(locale, "province.source")}{" "}
            {dish.sourceRefs.map((ref, i) => (
              <span key={ref.url}>
                {i > 0 && ", "}
                <a href={ref.url} target="_blank" rel="noreferrer" className="underline hover:text-ink/80">
                  {ref.label}
                </a>
              </span>
            ))}
          </p>
        )}

        {showReviews && (
          <DishReviews
            provinceSlug={provinceSlug}
            dishSlug={dish.slug}
            dishName={dish.name}
            locale={locale}
          />
        )}
      </div>

      <Lightbox
        image={zoomed ? primaryImage : null}
        alt={dish.name}
        onClose={() => setZoomed(false)}
      />
    </motion.article>
  );
}
