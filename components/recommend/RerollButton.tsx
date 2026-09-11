"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { Shuffle } from "lucide-react";
import { newSeed } from "@/lib/recommend";
import { localePath, type Locale } from "@/lib/locale";
import { t } from "@/lib/ui-strings";

/**
 * Nút "Đổi món khác".
 *
 * Điều hướng sang một seed mới thay vì bốc lại ở client. Nhờ vậy cặp món **luôn nằm trên
 * URL** — chia sẻ được đúng cặp đang xem, và máy chủ với trình duyệt không bao giờ lệch
 * nhau (US-18 AC: không nháy đổi món, không lệch hydration).
 */
export default function RerollButton({ locale }: { locale: Locale }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [spins, setSpins] = useState(0);

  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => {
        setSpins((n) => n + 1);
        startTransition(() => {
          router.push(`${localePath(locale, "/goi-y")}?s=${newSeed()}`, { scroll: false });
        });
      }}
      className="flex items-center gap-2 rounded-pill bg-chili px-5 py-2.5 text-sm font-medium text-white shadow-soft transition hover:bg-chili-dark disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chili"
    >
      <Shuffle
        className={`h-4 w-4 ${pending ? "animate-spin" : ""}`}
        style={{ transform: `rotate(${spins * 180}deg)`, transition: "transform 0.3s" }}
        aria-hidden="true"
      />
      {t(locale, pending ? "rec.rerolling" : "rec.reroll")}
    </button>
  );
}
