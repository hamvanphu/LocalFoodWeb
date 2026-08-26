"use client";

import { useState } from "react";
import Image from "next/image";
import { UtensilsCrossed } from "lucide-react";
import { placeholderGradientFor } from "@/lib/image-fallback";
import type { DishImage } from "@/lib/types";

interface ImageWithFallbackProps {
  slug: string;
  name: string;
  images: DishImage[];
  className?: string;
  sizes?: string;
  priority?: boolean;
}

function PlaceholderCard({
  slug,
  name,
  className,
  reason,
}: {
  slug: string;
  name: string;
  className: string;
  reason: "no-image" | "load-error";
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${placeholderGradientFor(
        slug,
      )} ${className}`}
    >
      <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="relative flex flex-col items-center gap-2 px-4 text-center text-white">
        <UtensilsCrossed className="h-8 w-8" />
        <span className="font-display text-lg font-semibold leading-tight">
          {name}
        </span>
        <span className="text-xs opacity-80">
          {reason === "load-error"
            ? "Ảnh tạm thời không tải được"
            : "Ảnh minh hoạ đang cập nhật"}
        </span>
      </div>
    </div>
  );
}

export default function ImageWithFallback({
  slug,
  name,
  images,
  className = "",
  sizes = "(min-width: 768px) 50vw, 100vw",
  priority = false,
}: ImageWithFallbackProps) {
  const [loadError, setLoadError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const primary = images[0];

  if (!primary || loadError) {
    return (
      <PlaceholderCard
        slug={slug}
        name={name}
        className={className}
        reason={loadError ? "load-error" : "no-image"}
      />
    );
  }

  return (
    <div className={`relative overflow-hidden bg-surface-muted ${className}`}>
      <Image
        src={primary.url}
        alt={name}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover transition-all duration-700 ease-out ${
          loaded ? "scale-100 opacity-100 blur-0" : "scale-105 opacity-0 blur-md"
        }`}
        onLoad={() => setLoaded(true)}
        onError={() => setLoadError(true)}
      />
      <span className="absolute bottom-1 right-2 rounded bg-black/50 px-2 py-0.5 text-[10px] text-white">
        {primary.attribution} · {primary.license}
      </span>
    </div>
  );
}
