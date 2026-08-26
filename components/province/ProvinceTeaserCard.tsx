"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Province, Dish } from "@/lib/types";

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
        className="block rounded-card border border-border bg-surface p-5 shadow-soft transition-shadow duration-200 hover:shadow-card"
      >
        <p className="text-xs font-medium uppercase tracking-wide text-amber">
          Miền {province.region}
        </p>
        <p className="mt-1 font-display text-lg font-semibold text-ink">
          {province.name}
        </p>
        <p className="mt-1 text-sm text-ink/70">Món tiêu biểu: {hero?.name}</p>
      </Link>
    </motion.div>
  );
}
