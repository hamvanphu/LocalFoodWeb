import fs from "node:fs";
import path from "node:path";
import { provinceSchema } from "./schema";
import type { Province } from "./types";

const PROVINCES_DIR = path.join(process.cwd(), "data", "provinces");

let cache: Province[] | null = null;

function loadAll(): Province[] {
  if (cache) return cache;

  const files = fs
    .readdirSync(PROVINCES_DIR)
    .filter((file) => file.endsWith(".json"));

  cache = files
    .map((file) => {
      const raw = fs.readFileSync(path.join(PROVINCES_DIR, file), "utf8");
      const parsed = provinceSchema.safeParse(JSON.parse(raw));
      if (!parsed.success) {
        throw new Error(
          `data/provinces/${file} không đúng schema:\n${parsed.error.issues
            .map((issue) => `  - ${issue.path.join(".")}: ${issue.message}`)
            .join("\n")}`,
        );
      }
      return parsed.data as Province;
    })
    .sort((a, b) => a.name.localeCompare(b.name, "vi"));

  return cache;
}

export function getAllProvinces(): Province[] {
  return loadAll();
}

export function getProvinceBySlug(slug: string): Province | undefined {
  return loadAll().find((province) => province.slug === slug);
}

export function getAllProvinceSlugs(): string[] {
  return loadAll().map((province) => province.slug);
}

export function getHeroDish(province: Province) {
  return province.dishes.find((dish) => dish.slug === province.heroDishSlug);
}
