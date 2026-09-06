"use client";

import { useState } from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  value: number;
  onChange?: (value: number) => void;
  size?: number;
  /** Chỉ hiển thị, không cho bấm. */
  readOnly?: boolean;
  label?: string;
}

export default function StarRating({
  value,
  onChange,
  size = 20,
  readOnly = false,
  label,
}: StarRatingProps) {
  const [hover, setHover] = useState<number | null>(null);
  const shown = hover ?? value;

  if (readOnly) {
    return (
      <span
        className="inline-flex items-center gap-0.5"
        // Trình đọc màn hình đọc 1 câu gọn thay vì 5 icon rời rạc.
        role="img"
        aria-label={label ?? `${value} trên 5 sao`}
      >
        {[1, 2, 3, 4, 5].map((n) => (
          <Star
            key={n}
            aria-hidden="true"
            style={{ width: size, height: size }}
            className={
              n <= value ? "fill-amber-dark text-amber-dark" : "fill-none text-ink/25"
            }
          />
        ))}
      </span>
    );
  }

  return (
    <div
      className="inline-flex items-center gap-1"
      role="radiogroup"
      aria-label={label ?? "Chấm điểm món ăn"}
      onMouseLeave={() => setHover(null)}
    >
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          role="radio"
          aria-checked={value === n}
          aria-label={`${n} sao`}
          onClick={() => onChange?.(n)}
          onMouseEnter={() => setHover(n)}
          onFocus={() => setHover(n)}
          onBlur={() => setHover(null)}
          className="rounded-control p-0.5 transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-chili"
        >
          <Star
            style={{ width: size, height: size }}
            className={
              n <= shown ? "fill-amber-dark text-amber-dark" : "fill-none text-ink/30"
            }
          />
        </button>
      ))}
    </div>
  );
}
