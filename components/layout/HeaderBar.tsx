"use client";

import Link from "next/link";
import { UtensilsCrossed } from "lucide-react";
import SearchBar from "@/components/search/SearchBar";
import LanguageSwitch from "./LanguageSwitch";
import { useLocale } from "@/lib/useLocale";
import { localePath } from "@/lib/locale";
import { t } from "@/lib/ui-strings";
import type { SearchEntry } from "@/lib/searchIndex";

/**
 * Phần header phụ thuộc ngôn ngữ. Chỉ mảnh này là client — chỉ mục tìm kiếm vẫn được
 * dựng ở server rồi truyền xuống, để trình duyệt không phải tải lại toàn bộ dữ liệu tỉnh.
 */
export default function HeaderBar({ index }: { index: SearchEntry[] }) {
  const locale = useLocale();

  return (
    <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
      <Link
        href={localePath(locale, "/")}
        className="flex shrink-0 items-center gap-2 font-display text-xl font-semibold text-ink"
      >
        <UtensilsCrossed className="h-5 w-5 text-chili" />
        Local Food
      </Link>
      <SearchBar index={index} locale={locale} />
      <nav className="hidden shrink-0 items-center gap-4 text-sm lg:flex">
        <Link
          href={localePath(locale, "/goi-y")}
          className="font-medium text-chili hover:text-chili-dark"
        >
          {t(locale, "nav.recommend")}
        </Link>
        <Link href={localePath(locale, "/browse")} className="text-ink/70 hover:text-chili">
          {t(locale, "nav.allProvinces")}
        </Link>
      </nav>
      <LanguageSwitch locale={locale} />
    </div>
  );
}
