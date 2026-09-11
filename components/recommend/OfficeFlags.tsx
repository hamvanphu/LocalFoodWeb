import { Flame, Soup, Leaf, Wind, Droplet } from "lucide-react";
import type { OfficeFlags } from "@/lib/recommend";
import type { Locale } from "@/lib/locale";
import { t, type StringKey } from "@/lib/ui-strings";

/**
 * Nhãn đặc điểm đáng cân nhắc khi ăn ở văn phòng.
 *
 * Cố ý **chỉ hiển thị, không lọc bỏ**: loại giúp người dùng là quyết định thay họ dựa
 * trên phán đoán mà không nguồn nào kiểm chứng được (`RISK-LF.md` R17). Hiện nhãn để họ
 * tự nhìn và tự bấm đổi món nếu không hợp.
 */
const ITEMS = [
  { key: "nangMui", icon: Wind, tone: "text-amber-dark" },
  { key: "cay", icon: Flame, tone: "text-chili" },
  { key: "monNuoc", icon: Soup, tone: "text-ink/70" },
  { key: "chayDuoc", icon: Leaf, tone: "text-herb-dark" },
  { key: "nhieuDauMo", icon: Droplet, tone: "text-amber-dark" },
] as const;

export default function OfficeFlagList({
  flags,
  locale,
}: {
  flags: OfficeFlags;
  locale: Locale;
}) {
  const on = ITEMS.filter(({ key }) => flags[key]);
  if (on.length === 0) return null;

  return (
    <ul className="flex flex-wrap gap-1.5">
      {on.map(({ key, icon: Icon, tone }) => (
        <li
          key={key}
          className="flex items-center gap-1 rounded-pill border border-border bg-surface px-2 py-0.5 text-xs text-ink/75"
        >
          <Icon className={`h-3 w-3 ${tone}`} aria-hidden="true" />
          {t(locale, `flag.${key}` as StringKey)}
        </li>
      ))}
    </ul>
  );
}
