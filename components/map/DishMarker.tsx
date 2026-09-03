"use client";

import { useState } from "react";
import Image from "next/image";
import { UtensilsCrossed } from "lucide-react";
import { placeholderGradientFor } from "@/lib/image-fallback";

interface DishMarkerProps {
  slug: string;
  name: string;
  imageUrl: string | null;
  size: number;
  opacity: number;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

/** Marker bản đồ hình tròn dùng ảnh món ăn thật thay vì chấm màu đơn sắc. */
export default function DishMarker({
  slug,
  name,
  imageUrl,
  size,
  opacity,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: DishMarkerProps) {
  const [failed, setFailed] = useState(false);
  const showPhoto = imageUrl && !failed;

  return (
    <button
      type="button"
      aria-label={name}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        width: size,
        height: size,
        opacity,
        pointerEvents: opacity < 0.1 ? "none" : "auto",
        transition: "opacity 200ms ease-out, transform 150ms ease-out",
      }}
      className={`group relative flex items-center justify-center overflow-hidden rounded-full border-2 border-white shadow-lifted ${
        showPhoto ? "" : `bg-gradient-to-br ${placeholderGradientFor(slug)}`
      } hover:scale-110 focus-visible:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-chili`}
    >
      {showPhoto ? (
        // next/image dù marker nhỏ vẫn cần thiết: tránh tải nguyên ảnh gốc Wikimedia
        // (thường vài MB) chỉ để hiện thumbnail ~50px — bài học từ Lighthouse audit
        // W1-11b (14MB/16MB page weight do <img> thuần trước đó gây ra).
        <Image
          src={imageUrl}
          alt=""
          fill
          sizes={`${size}px`}
          quality={60}
          className="rounded-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <UtensilsCrossed className="text-white" style={{ width: size * 0.4, height: size * 0.4 }} />
      )}
    </button>
  );
}
