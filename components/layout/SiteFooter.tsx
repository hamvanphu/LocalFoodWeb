"use client";

import Link from "next/link";
import { UtensilsCrossed, BarChart3 } from "lucide-react";
import { useLocale } from "@/lib/useLocale";

import { t } from "@/lib/ui-strings";

export default function SiteFooter() {
  // Footer nằm trong root layout dùng chung hai ngôn ngữ — xem ghi chú ở `lib/useLocale.ts`
  const locale = useLocale();

  return (
    <footer className="relative border-t border-border bg-surface-muted">
      <div className="h-[3px] w-full bg-gradient-to-r from-herb via-turmeric to-chili" />
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
            <UtensilsCrossed className="h-5 w-5 text-chili" />
            Local Food
          </div>
          {/* Không gắn tiền tố /en: trang telemetry là báo cáo nội bộ về quá trình
              xây dự án, chỉ có bản tiếng Việt. Gắn tiền tố sẽ tạo link 404. */}
          <Link
            href="/telemetry"
            className="mt-3 inline-flex items-center gap-1.5 text-sm text-ink/70 hover:text-chili"
          >
            <BarChart3 className="h-4 w-4" aria-hidden="true" />
            {t(locale, "footer.telemetry")}
          </Link>
        </div>
        {/* Nói đúng mức đã kiểm: mỗi món CÓ nguồn (zod ép ở build), nhưng không phải
            món nào cũng đã được đối chiếu tay — 63% món không có nguồn Wikipedia và
            spot-check mới ở mức đọc lướt. Xem SPOTCHECK-LF.md. */}
        <p className="max-w-md text-sm text-ink/70">
          {t(locale, "footer.about")}{" "}
          <strong className="font-medium text-ink">{t(locale, "review.tabReport")}</strong>{" "}
          {t(locale, "footer.aboutEnd")}
        </p>
      </div>
    </footer>
  );
}
