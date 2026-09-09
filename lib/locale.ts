/**
 * Hằng số ngôn ngữ và dựng đường dẫn — dùng được ở CẢ server lẫn client.
 *
 * Tách riêng khỏi `lib/i18n.ts` một cách có chủ đích: file kia đọc bản dịch bằng
 * `node:fs`. Trước khi tách, các client component import `localePath` từ đó và kéo luôn
 * `node:fs` vào bundle trình duyệt — build đổ với "the chunking context does not support
 * external modules (request: node:fs)". Ranh giới server/client ở đây là ranh giới file,
 * nên không thể vô tình vượt qua.
 */
export const LOCALES = ["vi", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "vi";

export function isLocale(v: string): v is Locale {
  return (LOCALES as readonly string[]).includes(v);
}

/** Tiền tố đường dẫn: tiếng Việt ở gốc (`/`), tiếng Anh ở `/en`. */
export function localePath(locale: Locale, pathname = ""): string {
  const clean = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const p = clean === "/" ? "" : clean;
  return locale === "en" ? `/en${p}` || "/en" : p || "/";
}
