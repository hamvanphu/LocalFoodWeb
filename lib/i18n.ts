import type { Locale } from "./locale";

export { LOCALES, DEFAULT_LOCALE, isLocale, localePath } from "./locale";
export type { Locale } from "./locale";

/**
 * ⚠️ File này CHỈ dùng được ở server — nó đọc file bản dịch bằng `node:fs`.
 *
 * Phần hằng số và `localePath()` nằm ở `lib/locale.ts` (không phụ thuộc Node) và được
 * re-export lại ở đây cho tiện. Client component phải import từ `@/lib/locale`, KHÔNG
 * import từ file này: chỉ cần một client component lấy `localePath` từ đây là cả module
 * bị kéo vào bundle trình duyệt và build đổ với lỗi "does not support external modules
 * (request: node:fs)".
 */
import fs from "node:fs";
import path from "node:path";
import type { Dish, Province } from "./types";

/**
 * Bản dịch tiếng Anh nằm ở file RIÊNG (`data/i18n/en/{slug}.json`), không trộn vào
 * `data/provinces/*.json`.
 *
 * Lý do: khi 8 agent dịch song song, nếu chúng ghi thẳng vào file gốc thì một lỗi bất kỳ
 * sẽ làm hỏng luôn nội dung tiếng Việt — thứ đã được kiểm và không có bản sao. Tách file
 * khiến bản gốc bất khả xâm phạm, và dễ thấy tỉnh nào chưa dịch (thiếu file).
 *
 * Bản dịch cố ý KHÔNG chứa `name`, `sourceRefs`, `images`, `tasteTags`, `occasions`:
 * tên món và tên tỉnh giữ nguyên tiếng Việt theo yêu cầu, phần còn lại không phụ thuộc
 * ngôn ngữ.
 */
interface ProvinceTranslation {
  slug: string;
  summary: string;
  dishes: Record<
    string,
    {
      description: string;
      keyIngredients: string[];
      prepOutline: string[];
      howToEat: string;
    }
  >;
}

const DIR = path.join(process.cwd(), "data", "i18n", "en");
let cache: Record<string, ProvinceTranslation> | null = null;

function loadEnglish(): Record<string, ProvinceTranslation> {
  if (cache) return cache;
  const out: Record<string, ProvinceTranslation> = {};
  if (fs.existsSync(DIR)) {
    for (const file of fs.readdirSync(DIR).filter((f) => f.endsWith(".json"))) {
      const t = JSON.parse(fs.readFileSync(path.join(DIR, file), "utf8")) as ProvinceTranslation;
      out[t.slug] = t;
    }
  }
  cache = out;
  return out;
}

/**
 * Ghép bản dịch lên dữ liệu gốc. Thiếu bản dịch ở đâu thì **giữ tiếng Việt ở đó** thay
 * vì bỏ trống — trang vẫn đọc được, chỉ là chưa dịch xong phần đó.
 */
export function localizeProvince(province: Province, locale: Locale): Province {
  if (locale === "vi") return province;

  const t = loadEnglish()[province.slug];
  if (!t) return province;

  return {
    ...province,
    summary: t.summary || province.summary,
    dishes: province.dishes.map((dish): Dish => {
      const d = t.dishes?.[dish.slug];
      if (!d) return dish;
      return {
        ...dish,
        // `name` giữ nguyên: tên món là danh từ riêng của văn hoá ẩm thực
        description: d.description || dish.description,
        keyIngredients: d.keyIngredients?.length ? d.keyIngredients : dish.keyIngredients,
        prepOutline: d.prepOutline?.length ? d.prepOutline : dish.prepOutline,
        howToEat: d.howToEat || dish.howToEat,
      };
    }),
  };
}

export function localizeProvinces(provinces: Province[], locale: Locale): Province[] {
  return provinces.map((p) => localizeProvince(p, locale));
}

/** Số tỉnh đã có bản dịch — dùng để biết tiến độ, và cho `pnpm check:i18n`. */
export function translatedSlugs(): string[] {
  return Object.keys(loadEnglish());
}
