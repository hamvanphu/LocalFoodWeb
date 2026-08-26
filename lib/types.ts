export const TASTE_TAGS = [
  "spicy",
  "sour",
  "sweet",
  "savory",
  "herb-forward",
  "street-food",
  "noodle-soup",
  "grilled",
  "seafood",
  "vegetarian-friendly",
] as const;

export type TasteTag = (typeof TASTE_TAGS)[number];

export type Region = "Bắc" | "Trung" | "Nam";

export interface DishImage {
  url: string;
  attribution: string;
  license: string;
}

/** Nguồn tham chiếu chính thống cho nội dung do AI biên soạn (NFR content integrity, ARCH-LF.md §3). Bắt buộc tối thiểu 1 phần tử. */
export interface SourceRef {
  url: string;
  label: string;
}

export interface Dish {
  slug: string;
  name: string;
  isHero: boolean;
  tasteTags: TasteTag[];
  description: string;
  keyIngredients: string[];
  prepOutline: string[];
  howToEat: string;
  season?: string;
  images: DishImage[];
  sourceRefs: SourceRef[];
}

export interface Province {
  slug: string;
  code: string;
  name: string;
  region: Region;
  centroid: [number, number];
  summary: string;
  summarySourceRefs: SourceRef[];
  heroDishSlug: string;
  dishes: Dish[];
}
