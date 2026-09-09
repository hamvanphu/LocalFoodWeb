import { getAllProvinces } from "./provinces";
import type { Region } from "./types";

export interface SearchEntry {
  type: "province" | "dish";
  label: string;
  /** Chỉ có ở mục món: tên tỉnh, vốn giữ tiếng Việt ở cả hai ngôn ngữ. */
  subtitle?: string;
  href: string;
  /**
   * Chỉ có ở mục tỉnh. Mang mã vùng thô thay vì chuỗi "Miền Bắc" đã dựng sẵn, vì chỉ mục
   * này dựng một lần ở server rồi dùng chung cho cả hai ngôn ngữ — nơi hiển thị mới biết
   * đang ở tiếng Việt hay tiếng Anh.
   */
  region?: Region;
}

/**
 * Nhãn tìm kiếm luôn là tên tỉnh và tên món tiếng Việt, kể cả ở bản tiếng Anh — đúng
 * nguyên tắc "tên món giữ nguyên". Nhờ vậy một chỉ mục dùng được cho cả hai ngôn ngữ, và
 * người đọc bản tiếng Anh vẫn tra được đúng cái tên họ nhìn thấy trên trang.
 */
export function buildSearchIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];

  for (const province of getAllProvinces()) {
    entries.push({
      type: "province",
      label: province.name,
      href: `/provinces/${province.slug}`,
      region: province.region,
    });

    for (const dish of province.dishes) {
      entries.push({
        type: "dish",
        label: dish.name,
        subtitle: province.name,
        href: `/provinces/${province.slug}#${dish.slug}`,
      });
    }
  }

  return entries;
}
