import type { Dish, Province } from "./types";

/**
 * Logic gợi ý món cho bữa trưa (US-18). **Hàm thuần, không phụ thuộc React** — chạy được
 * ở cả server lẫn client, và test được mà không cần trình duyệt.
 *
 * Hai nguyên tắc từ `ARCH-LF.md` D4:
 *  - Việc phải **hiểu** (món này ăn no được không) đã gán tay vào `mealTypes`.
 *  - Việc chỉ cần **tra** (có `mắm tôm` không, có gắn `cay` không) thì suy ở đây.
 */

/** Món đã kèm thông tin tỉnh — để hiện được "Bún chả · Hà Nội" mà không phải tra ngược. */
export interface RecommendedDish {
  dish: Dish;
  provinceSlug: string;
  provinceName: string;
  flags: OfficeFlags;
}

/**
 * Đặc điểm đáng cân nhắc khi ăn trưa ở văn phòng.
 *
 * Cố ý **không tự động loại** món có cờ — chỉ hiện nhãn để người đọc tự quyết (US-18 AC).
 * Loại giúp là quyết định thay người dùng dựa trên phán đoán không ai kiểm chứng được.
 */
export interface OfficeFlags {
  cay: boolean;
  monNuoc: boolean;
  chayDuoc: boolean;
  /** Mắm tôm/mắm ruốc… — ở văn phòng mở đây là chuyện xã giao, không phải khẩu vị. */
  nangMui: boolean;
  nhieuDauMo: boolean;
}

/**
 * Danh sách nguyên liệu nặng mùi, **curated bằng tay**.
 *
 * Tra chuỗi ở đây là đúng việc: chỉ kiểm **sự có mặt của một nguyên liệu**, không phải
 * hiểu nghĩa câu — khác hẳn việc phân loại `mealTypes`, nơi tra chuỗi đã được đo là
 * không đáng tin (`ARCH-LF.md` D4).
 *
 * ⚠️ Hạn chế đã biết: thiếu từ nào thì lọt món đó, âm thầm. Ghi ở `RISK-LF.md` R16.
 */
const STRONG_SMELL = [
  "mắm tôm",
  "mắm ruốc",
  "mắm nêm",
  "mắm bò hóc",
  "mắm cáy",
  "mắm tép",
  "mắm cua",
  "sầu riêng",
];

const OILY = ["chiên", "rán", "quay giòn"];

function textOf(dish: Dish): string {
  return [dish.name, dish.keyIngredients.join(" "), dish.description, dish.prepOutline.join(" ")]
    .join(" ")
    .toLowerCase();
}

export function deriveFlags(dish: Dish): OfficeFlags {
  const text = textOf(dish);
  return {
    cay: dish.tasteTags.includes("spicy"),
    monNuoc: dish.tasteTags.includes("noodle-soup"),
    chayDuoc: dish.tasteTags.includes("vegetarian-friendly"),
    nangMui: STRONG_SMELL.some((t) => text.includes(t)),
    nhieuDauMo: OILY.some((t) => text.includes(t)),
  };
}

/**
 * Bể món được phép gợi ý cho bữa trưa: **chỉ món gắn `bua-chinh`**.
 *
 * Đây là chỗ thực thi yêu cầu "lọc bớt chứ không full" của PM — mồi nhậu, ăn vặt, tráng
 * miệng và đặc sản làm quà không bao giờ vào đây.
 */
export function officePool(provinces: Province[]): RecommendedDish[] {
  const pool: RecommendedDish[] = [];
  for (const province of provinces) {
    for (const dish of province.dishes) {
      if (!dish.mealTypes?.includes("bua-chinh")) continue;
      pool.push({
        dish,
        provinceSlug: province.slug,
        provinceName: province.name,
        flags: deriveFlags(dish),
      });
    }
  }
  return pool;
}

/**
 * Bộ sinh số giả ngẫu nhiên **tất định theo hạt giống** (mulberry32).
 *
 * Vì sao không dùng `Math.random()`: trang render ở máy chủ rồi hydrate ở trình duyệt.
 * `Math.random()` cho hai kết quả khác nhau ⇒ lệch hydration và món **nháy đổi** trước
 * mắt người dùng. Cùng một seed thì hai bên ra cùng một cặp món.
 */
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Chuỗi seed trên URL → số. Cho phép seed dạng chữ để link đọc được. */
export function seedToNumber(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/**
 * Bốc **đúng 2 món khác nhau** từ bể, tất định theo seed.
 *
 * Ưu tiên 2 món **khác tỉnh** để cặp gợi ý đa dạng hơn — hai bát bún của cùng một tỉnh
 * thì không thực sự là hai lựa chọn. Nếu bể quá nhỏ để làm vậy thì chấp nhận cùng tỉnh,
 * miễn là khác món.
 */
export function pickTwo(pool: RecommendedDish[], seed: string): RecommendedDish[] {
  if (pool.length === 0) return [];
  if (pool.length === 1) return [pool[0]];

  const rand = mulberry32(seedToNumber(seed));

  /**
   * Món thứ nhất **ưu tiên món có ảnh thật**.
   *
   * Đo được: chỉ 53/132 món trong bể có ảnh (40%), nên nếu bốc thuần ngẫu nhiên thì
   * **36% số lần cả hai món đều là ảnh giữ chỗ**. Với một trang có mục đích làm người ta
   * thèm ăn, hai ô gradient là hỏng việc.
   *
   * Vì sao ưu tiên chứ không lọc: lọc bỏ món không ảnh sẽ **cắt bể từ 132 xuống 53** và
   * loại oan nhiều tỉnh chỉ vì thiếu ảnh — lỗi cùng họ với R16. Cách này giữ **cả 132 món
   * đều tiếp cận được** (món không ảnh vẫn ra ở vị trí thứ hai), chỉ đảm bảo trang luôn có
   * ít nhất một ảnh thật.
   */
  const withPhoto = pool.filter((d) => d.dish.images.length > 0);
  const firstPool = withPhoto.length > 0 ? withPhoto : pool;
  const first = firstPool[Math.floor(rand() * firstPool.length)];

  const otherProvince = pool.filter((d) => d.provinceSlug !== first.provinceSlug);
  const candidates = otherProvince.length > 0 ? otherProvince : pool.filter((d) => d !== first);
  if (candidates.length === 0) return [first];

  const second = candidates[Math.floor(rand() * candidates.length)];
  return [first, second];
}

/** Seed mới cho nút "Đổi món khác" — chỉ gọi ở client, sau khi người dùng bấm. */
export function newSeed(): string {
  return Math.random().toString(36).slice(2, 8);
}

/** Seed mặc định khi URL chưa có — phải TẤT ĐỊNH, nếu không lại lệch hydration. */
export const DEFAULT_SEED = "trua-nay";
