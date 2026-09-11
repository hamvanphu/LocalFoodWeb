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

/**
 * Loại bữa mà món phù hợp — **gán tay cho từng món**, không suy tự động.
 *
 * Vì sao gán tay: "món này ăn no được vào bữa trưa không" là **phán đoán ngữ nghĩa**.
 * Đã thử suy bằng từ khoá và đo được là không đáng tin — "Hạt điều rang" bị bắt vào cả
 * nhóm nhậu lẫn ăn vặt, "Bánh đa Kế" vào cả ăn vặt lẫn lễ Tết. Xem `ARCH-LF.md` D4.
 *
 * Một món có thể thuộc nhiều loại: bánh xèo vừa ăn no được vừa là món ăn chơi.
 */
export const MEAL_TYPES = [
  /** Ăn no được, thay được bữa trưa. Đây là nhóm DUY NHẤT vào bể gợi ý của US-18. */
  "bua-chinh",
  /** Ăn chơi, quà chiều — không thay được bữa. */
  "an-vat",
  /** Chè, kẹo, bánh ngọt. */
  "trang-mieng",
  /** Mồi nhậu — đi với rượu bia, không hợp bữa trưa công sở. */
  "moi-nhau",
  /** Đồ khô, đóng gói, mua về làm quà — không phải món ăn tại chỗ. */
  "dac-san-qua",
] as const;

export type MealType = (typeof MEAL_TYPES)[number];

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
  /**
   * BẮT BUỘC — zod chặn ở build nếu thiếu. Cố ý không cho optional: một món "rơi" khỏi
   * phân loại sẽ **âm thầm biến mất** khỏi gợi ý mà không ai biết (`RISK-LF.md` R16).
   */
  mealTypes: MealType[];
  /** Lý do phân loại, một câu ngắn — để người duyệt soi lại được, không phải hộp đen. */
  mealTypeNote?: string;
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
