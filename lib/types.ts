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

export const OCCASIONS = [
  "Quanh năm",
  "Mùa xuân",
  "Mùa hè",
  "Mùa thu",
  "Mùa đông",
  "Tết Nguyên Đán",
  "Tết Trung Thu",
] as const;

export type Occasion = (typeof OCCASIONS)[number];

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
  images: DishImage[];
  sourceRefs: SourceRef[];
  occasions: Occasion[];
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
