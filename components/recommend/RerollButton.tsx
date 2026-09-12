"use client";

import { useRef, useTransition } from "react";
import { useRouter } from "next/navigation";
import { motion, useMotionValue, useSpring } from "motion/react";
import { Sparkles, UtensilsCrossed } from "lucide-react";
import { newSeed } from "@/lib/recommend";
import { localePath, type Locale } from "@/lib/locale";
import { t } from "@/lib/ui-strings";
import type { MouseEvent } from "react";

/**
 * Nút "Đổi món khác" — **hành động chính duy nhất** của trang `/goi-y`.
 *
 * Cố ý làm nổi hẳn so với mọi nút khác trong site: cả trang chỉ có một việc để làm, nên
 * nút đó phải là thứ mắt rơi vào đầu tiên. Bốn lớp hiệu ứng chồng lên nhau:
 *   1. vành gradient **quay** (ớt → nghệ → rau thơm) — dùng đúng bảng màu đã chốt
 *   2. quầng sáng **thở** phía sau, cho cảm giác nút đang "sống"
 *   3. vệt sáng **quét ngang** mặt nút, nghỉ dài giữa hai lần cho khỏi nhức mắt
 *   4. **hút theo con trỏ** — mượn lại thủ pháp của `MagneticButton` ở hero
 *
 * Điều hướng sang seed mới thay vì bốc lại ở client: cặp món luôn nằm trên URL nên chia
 * sẻ được, và máy chủ với trình duyệt không bao giờ lệch nhau.
 */
export default function RerollButton({ locale }: { locale: Locale }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const ref = useRef<HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 18, stiffness: 200, mass: 0.5 });
  const springY = useSpring(y, { damping: 18, stiffness: 200, mass: 0.5 });

  function handleMouseMove(e: MouseEvent<HTMLButtonElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.25);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.25);
  }

  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Quầng sáng thở — nằm dưới cùng, không nhận chuột */}
      <span
        aria-hidden="true"
        className="magic-glow pointer-events-none absolute -inset-8 rounded-full bg-gradient-to-r from-chili via-turmeric to-herb opacity-70 blur-3xl"
      />

      <motion.button
        ref={ref}
        type="button"
        disabled={pending}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        onClick={() => {
          startTransition(() => {
            router.push(`${localePath(locale, "/goi-y")}?s=${newSeed()}`, { scroll: false });
          });
        }}
        style={{ x: springX, y: springY }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", damping: 15, stiffness: 300 }}
        className="magic-ring group relative isolate rounded-full p-[4px] shadow-lifted disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chili"
      >
        {/* Mặt nút — nằm TRÊN vành gradient, chừa đúng 3px làm viền */}
        <span className="magic-face relative z-10 flex items-center gap-3 overflow-hidden rounded-full px-9 py-4 text-lg font-semibold tracking-tight text-white drop-shadow-sm sm:px-12 sm:py-5 sm:text-2xl">
          {/* Vệt sáng quét ngang */}
          <span
            aria-hidden="true"
            className="magic-sheen pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-white/25 blur-md"
          />

          <UtensilsCrossed
            className={`h-5 w-5 shrink-0 transition-transform duration-500 ${
              pending ? "animate-spin" : "group-hover:rotate-[18deg]"
            }`}
            aria-hidden="true"
          />
          <span className="relative">{t(locale, pending ? "rec.rerolling" : "rec.reroll")}</span>
          <Sparkles
            className="h-5 w-5 shrink-0 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12"
            aria-hidden="true"
          />
        </span>
      </motion.button>
    </div>
  );
}
