import { getAllProvinces } from "./provinces";

export interface SearchEntry {
  type: "province" | "dish";
  label: string;
  subtitle: string;
  href: string;
}

export function buildSearchIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];

  for (const province of getAllProvinces()) {
    entries.push({
      type: "province",
      label: province.name,
      subtitle: `Miền ${province.region}`,
      href: `/provinces/${province.slug}`,
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
