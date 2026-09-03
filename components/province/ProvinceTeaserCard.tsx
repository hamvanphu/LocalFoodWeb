"use client";

import Link from "next/link";
import { motion } from "motion/react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import type { Province, Dish, Region } from "@/lib/types";

const REGION_ACCENT: Record<Region, string> = {
  Bắc: "bg-chili",
  Trung: "bg-turmeric",
  Nam: "bg-herb",
};

export default function ProvinceTeaserCard({
  province,
  hero,
  index,
}: {
  province: Province;
  hero?: Dish;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
      whileHover={{ y: -4 }}
    >
      <Link
        href={`/provinces/${province.slug}`}
        className="group flex overflow-hidden rounded-card border border-border bg-surface shadow-soft transition-shadow duration-200 hover:shadow-card"
      >
        <span className={`w-1.5 shrink-0 ${REGION_ACCENT[province.region]}`} />
        <div className="h-28 w-28 shrink-0 overflow-hidden">
          <ImageWithFallback
            slug={province.slug}
            name={hero?.name ?? province.name}
            images={hero?.images ?? []}
            className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-110"
          />
        </div>
        <div className="p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-amber">
            Miền {province.region}
          </p>
          <p className="mt-1 font-display text-lg font-semibold text-ink transition-colors group-hover:text-chili">
            {province.name}
          </p>
          <p className="mt-1 text-sm text-ink/70">Món tiêu biểu: {hero?.name}</p>
        </div>
      </Link>
    </motion.div>
  );
}
