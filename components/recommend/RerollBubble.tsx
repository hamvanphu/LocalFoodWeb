"use client";

import { useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Sparkles, UtensilsCrossed } from "lucide-react";
import { newSeed } from "@/lib/recommend";
import { localePath } from "@/lib/locale";
import { useLocale } from "@/lib/useLocale";
import { t } from "@/lib/ui-strings";

/**
 * Bubble "Trưa nay ăn gì?" — chạy vòng quanh mép màn hình, có mặt ở **mọi trang**.
 *
 * Đây là **lối vào duy nhất** của tính năng gợi ý (PM bỏ link trên thanh menu, 2026-09-12).
 * Vì vậy nó phải nằm trong root layout chứ không riêng `/goi-y` — nếu chỉ ở trang đó thì
 * trang đó sẽ không còn đường nào đi vào.
 *
 * Bấm ở trang bất kỳ → sang `/goi-y` với cặp món mới. Bấm khi đang ở `/goi-y` → đổi cặp
 * khác. Cùng một hành vi, nên cùng một nhãn.
 *
 * Ba điều phải đúng, nếu không nó chỉ là đồ trang trí gây khó chịu:
 *
 * 1. **Dừng được để bấm.** Mục tiêu đang chạy thì rất khó bấm. Chuyển động làm bằng CSS
 *    animation để `animation-play-state: paused` dừng nó **tại chỗ** khi rê chuột tới
 *    hoặc khi nhận focus bàn phím — Framer Motion pause thì nhảy về đầu, đã học ở marquee.
 * 2. **Máy cảm ứng không có hover** ⇒ không dừng trước khi chạm được. Trên các máy đó
 *    bubble **neo cố định** ở mép dưới (xử lý trong `globals.css`).
 * 3. **Không che mất nội dung.** Bubble nhỏ, trôi chậm, và luôn nằm dưới thanh header.
 *
 * Chuyển động nằm ở CSS; file này chỉ lo hình thức và hành vi bấm.
 */
export default function RerollBubble() {
  // Bubble nằm trong root layout dùng chung mọi trang, mà layout chạy ở server nên không
  // biết đường dẫn hiện tại — đọc ngôn ngữ từ URL. Xem ghi chú ở `lib/useLocale.ts`.
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname() || "/";
  const [pending, startTransition] = useTransition();

  /**
   * Nhãn đổi theo ngữ cảnh. Ở trang khác, bubble là **lối vào** nên mang tên tính năng.
   * Ở ngay `/goi-y`, tên đó đã là tiêu đề trang rồi — lặp lại thì thừa, và lúc đó việc
   * nó làm thật sự là *đổi cặp khác*. Vẫn là một bubble duy nhất, chỉ nói đúng việc.
   */
  const onFeaturePage = pathname === "/goi-y" || pathname === "/en/goi-y";
  const labelKey = onFeaturePage ? "rec.reroll" : "rec.bubble";

  return (
    <div className="bubble-roam pointer-events-none">
      <button
        type="button"
        disabled={pending}
        onClick={() => {
          startTransition(() => {
            router.push(`${localePath(locale, "/goi-y")}?s=${newSeed()}`, {
              scroll: false,
            });
          });
        }}
        aria-label={onFeaturePage ? t(locale, "rec.reroll") : t(locale, "rec.bubbleAria")}
        className="magic-ring group pointer-events-auto relative isolate grid h-28 w-28 place-items-center rounded-full p-[4px] shadow-lifted transition-transform duration-300 hover:scale-110 active:scale-95 disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chili sm:h-32 sm:w-32"
      >
        {/* Quầng sáng thở — trong nút để trôi theo cùng */}
        <span
          aria-hidden="true"
          className="magic-glow pointer-events-none absolute -inset-4 -z-10 rounded-full bg-gradient-to-r from-chili via-turmeric to-herb opacity-60 blur-2xl"
        />

        <span className="magic-face relative z-10 grid h-full w-full place-items-center gap-0.5 overflow-hidden rounded-full px-3 text-center text-white">
          {/* Vệt sáng quét ngang */}
          <span
            aria-hidden="true"
            className="magic-sheen pointer-events-none absolute inset-y-0 -left-1/3 w-1/2 bg-white/25 blur-md"
          />
          <UtensilsCrossed
            className={`relative h-6 w-6 ${pending ? "animate-spin" : "transition-transform duration-500 group-hover:rotate-[18deg]"}`}
            aria-hidden="true"
          />
          <span className="relative text-balance px-1 text-[13px] font-semibold leading-tight sm:text-sm">
            {t(locale, pending ? "rec.rerolling" : labelKey)}
          </span>
          <Sparkles
            className="relative h-4 w-4 opacity-90 transition-transform duration-500 group-hover:scale-125"
            aria-hidden="true"
          />
        </span>
      </button>
    </div>
  );
}
