"use client";

import { motion } from "motion/react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import Badge from "@/components/ui/Badge";
import type { Dish } from "@/lib/types";

export default function DishCard({
  dish,
  priority = false,
  index = 0,
}: {
  dish: Dish;
  priority?: boolean;
  index?: number;
}) {
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
      <ImageWithFallback
        slug={dish.slug}
        name={dish.name}
        images={dish.images}
        className="h-56 w-full"
        priority={priority}
      />

      <div className="space-y-4 p-6">
        <div>
          <h3 className="font-display text-2xl font-semibold text-ink">
            {dish.name}
            {dish.isHero && (
              <Badge tone="chili" className="ml-2 align-middle">
                Món đặc trưng
              </Badge>
            )}
          </h3>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {dish.tasteTags.map((tag) => (
              <Badge key={tag} tone="neutral">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <p className="text-ink/80">{dish.description}</p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-herb">
              Nguyên liệu chính
            </h4>
            <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-ink/80">
              {dish.keyIngredients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-herb">
              Cách làm sơ lược
            </h4>
            <ol className="mt-2 list-decimal space-y-1 pl-4 text-sm text-ink/80">
              {dish.prepOutline.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="rounded-xl bg-turmeric/10 p-4">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-amber">
            Cách ăn gợi ý
          </h4>
          <p className="mt-1 text-sm text-ink/80">{dish.howToEat}</p>
        </div>

        {dish.sourceRefs.length > 0 && (
          <p className="text-xs text-ink/40">
            Nguồn tham chiếu:{" "}
            {dish.sourceRefs.map((ref, i) => (
              <span key={ref.url}>
                {i > 0 && ", "}
                <a href={ref.url} target="_blank" rel="noreferrer" className="underline hover:text-ink/60">
                  {ref.label}
                </a>
              </span>
            ))}
          </p>
        )}
      </div>
    </motion.article>
  );
}
