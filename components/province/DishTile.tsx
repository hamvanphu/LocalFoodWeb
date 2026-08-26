"use client";

import { motion } from "motion/react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import Badge from "@/components/ui/Badge";
import type { Dish } from "@/lib/types";

export default function DishTile({
  dish,
  index,
  onSelect,
}: {
  dish: Dish;
  index: number;
  onSelect: () => void;
}) {
  return (
    <motion.button
      onClick={onSelect}
      className="group overflow-hidden rounded-card border border-border bg-surface text-left shadow-soft transition-shadow duration-200 hover:shadow-card"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      <ImageWithFallback
        slug={dish.slug}
        name={dish.name}
        images={dish.images}
        className="aspect-[4/3] w-full"
        priority={index === 0}
      />
      <div className="p-4">
        <p className="font-display text-base font-semibold text-ink">
          {dish.name}
          {dish.isHero && (
            <Badge tone="chili" className="ml-2 align-middle">
              Đặc trưng
            </Badge>
          )}
        </p>
        <div className="mt-2 flex flex-wrap gap-1">
          {dish.tasteTags.slice(0, 3).map((tag) => (
            <Badge key={tag} tone="neutral">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.button>
  );
}
