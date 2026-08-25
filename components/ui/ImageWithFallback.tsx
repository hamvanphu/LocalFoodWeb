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

export default function ImageWithFallback({
  slug,
  name,
  images,
  className = "",
  sizes = "(min-width: 768px) 50vw, 100vw",
  priority = false,
}: ImageWithFallbackProps) {
  const primary = images[0];

  if (!primary) {
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
          <span className="text-xs opacity-80">Ảnh minh hoạ đang cập nhật</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={primary.url}
        alt={name}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
      <span className="absolute bottom-1 right-2 rounded bg-black/50 px-2 py-0.5 text-[10px] text-white">
        {primary.attribution} · {primary.license}
      </span>
    </div>
  );
}
