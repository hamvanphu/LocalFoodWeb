import { z } from "zod";
import { MEAL_TYPES, OCCASIONS, TASTE_TAGS } from "./types";

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
  images: z.array(dishImageSchema),
  sourceRefs: sourceRefsSchema,
  occasions: z.array(z.enum(OCCASIONS)).min(1),
  // BẮT BUỘC, tối thiểu 1 phần tử. Món thiếu phân loại sẽ biến mất khỏi gợi ý mà không
  // ai thấy — nên chặn ngay ở build thay vì để lọt (RISK-LF.md R16, ARCH-LF.md D4).
  mealTypes: z.array(z.enum(MEAL_TYPES)).min(1, {
    message: "Cần ≥1 mealTypes (ARCH-LF.md D4) — món thiếu phân loại sẽ biến mất khỏi gợi ý",
  }),
  mealTypeNote: z.string().min(1).optional(),
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
