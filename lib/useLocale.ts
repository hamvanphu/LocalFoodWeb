"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "./locale";

/**
 * Suy ngôn ngữ từ URL ở phía client.
 *
 * Header và footer nằm trong root layout dùng chung cho cả `/` lẫn `/en`, mà layout chạy
 * ở server thì không biết đường dẫn hiện tại. Thay vì dựng hai layout song song (kéo theo
 * việc phải chẻ đôi cây route), chỉ những mảnh phụ thuộc ngôn ngữ mới thành client và tự
 * đọc pathname.
 *
 * URL là nguồn sự thật duy nhất về ngôn ngữ — không có state, không có cookie, nên không
 * bao giờ có chuyện URL một đằng giao diện một nẻo.
 */
export function useLocale(): Locale {
  const pathname = usePathname() || "/";
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "vi";
}
