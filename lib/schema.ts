import { z } from "zod";
import { TASTE_TAGS } from "./types";

const sourceRefSchema = z.object({
  url: z.url(),
  label: z.string().min(1),
});

/** ARCH-LF.md NFR "content integrity": mọi nội dung AI biên soạn phải có ≥1 nguồn tham chiếu. */
const sourceRefsSchema = z.array(sourceRefSchema).min(1, {
  message: "Cần ≥1 sourceRef (NFR content integrity, ARCH-LF.md §3)",
});

const dishImageSchema = z.object({
  url: z.url(),
  attribution: z.string().min(1),
  license: z.string().min(1),
});

const dishSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  isHero: z.boolean(),
  tasteTags: z.array(z.enum(TASTE_TAGS)),
  description: z.string().min(1),
  keyIngredients: z.array(z.string().min(1)).min(1),
  prepOutline: z.array(z.string().min(1)).min(1),
  howToEat: z.string().min(1),
  season: z.string().optional(),
  images: z.array(dishImageSchema),
  sourceRefs: sourceRefsSchema,
});

export const provinceSchema = z
  .object({
    slug: z.string().min(1),
    code: z.string().min(1),
    name: z.string().min(1),
    region: z.enum(["Bắc", "Trung", "Nam"]),
    centroid: z.tuple([z.number(), z.number()]),
    summary: z.string().min(1),
    summarySourceRefs: sourceRefsSchema,
    heroDishSlug: z.string().min(1),
    dishes: z.array(dishSchema).min(1),
  })
  .refine(
    (province) =>
      province.dishes.some(
        (dish) => dish.slug === province.heroDishSlug && dish.isHero,
      ),
    {
      message: "heroDishSlug phải trỏ tới 1 dish có isHero: true trong dishes[]",
      path: ["heroDishSlug"],
    },
  );
