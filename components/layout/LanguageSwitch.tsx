"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { t } from "@/lib/ui-strings";
import type { Locale } from "@/lib/locale";

/**
 * Nút chuyển Việt ↔ Anh.
 *
 * Dùng `<Link>` chứ không phải nút JS: mỗi ngôn ngữ là một URL thật (`/` và `/en`), nên
 * người dùng chia sẻ được link đúng ngôn ngữ, và công cụ tìm kiếm lập chỉ mục được cả hai.
 *
 * Giữ nguyên trang đang xem khi đổi ngôn ngữ — đang ở trang Huế thì sang bản tiếng Anh
 * của chính trang Huế, không đá về trang chủ.
 */
export default function LanguageSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";
  const other: Locale = locale === "vi" ? "en" : "vi";

  // Bỏ tiền tố /en để lấy đường dẫn gốc, rồi gắn lại theo ngôn ngữ đích
  const base = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  const href = other === "en" ? (base === "/" ? "/en" : `/en${base}`) : base;

  return (
    <Link
      href={href}
      hrefLang={other}
      aria-label={`${t(locale, "lang.label")}: ${t(locale, "lang.switchTo")}`}
      className="flex shrink-0 items-center gap-1.5 rounded-pill border border-border bg-surface px-3 py-1.5 text-sm font-medium text-ink/80 transition hover:border-chili/40 hover:text-chili focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chili"
    >
      <Languages className="h-4 w-4" aria-hidden="true" />
      {t(locale, "lang.switchTo")}
    </Link>
  );
}
