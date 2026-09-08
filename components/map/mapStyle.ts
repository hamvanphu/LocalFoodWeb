/** Public MapLibre demo style — swap for a MapTiler style URL once NEXT_PUBLIC_MAPTILER_KEY is set. */
export const DEMO_STYLE_URL = "https://demotiles.maplibre.org/style.json";

export function maptilerStyleUrl(): string {
  const key = process.env.NEXT_PUBLIC_MAPTILER_KEY;
  if (!key) return DEMO_STYLE_URL;
  return `https://api.maptiler.com/maps/streets-v2/style.json?key=${key}`;
}

export const VIETNAM_CENTER: [number, number] = [106.5, 16.1];
export const VIETNAM_INITIAL_ZOOM = 5;

/**
 * Khung nhìn mặc định ([tây, nam] → [đông, bắc]).
 *
 * Bao **cả phần đất liền lẫn hai quần đảo Hoàng Sa và Trường Sa** — hai quần đảo thuộc
 * chủ quyền Việt Nam, nên khung mặc định phải thể hiện được. Khung cũ dừng ở kinh độ
 * 109,6°Đ khiến cả hai nằm ngoài tầm nhìn.
 *
 * Mở rộng tới 114,4°Đ và xuống 8,0°B để bao Hoàng Sa (~112°Đ, 16,5°B) và cụm đảo chính
 * của Trường Sa (~113,6°Đ, 10,2°B). Không kéo tới hết 117,3°Đ — biên ngoài cùng của
 * Trường Sa — vì khi đó phần đất liền bị thu nhỏ quá mức; marker + nhãn quần đảo đã
 * đảm nhiệm việc thể hiện chủ quyền.
 *
 * Dùng `fitBounds` thay center+zoom cứng: center cũ cắt mất mũi Cà Mau ở khung 70vh.
 */
export const VIETNAM_BOUNDS: [[number, number], [number, number]] = [
  [102.1, 8.0],
  [114.4, 23.5],
];

export const VIETNAM_FIT_PADDING = 32;

/**
 * Cả 63 tỉnh đều hiện trên bản đồ ở mọi mức zoom (đổi từ thiết kế 2 tầng cũ, nơi
 * zoom xa chỉ thấy 8 bubble curated nên 55 tỉnh còn lại gần như không tìm thấy được:
 * ở zoom >= 7 khung nhìn chỉ còn vài tỉnh nên tầng pin cũ vô dụng để duyệt cả nước).
 * Phân cấp thị giác giữ lại bằng KÍCH THƯỚC thay vì ẩn/hiện: tỉnh nổi bật to hơn hẳn.
 */
export const MARKER_MIN_ZOOM = 5;
export const MARKER_MAX_ZOOM = 9;

/** [kích thước ở zoom 5, kích thước ở zoom >= 9] — px. */
export const HERO_MARKER_SIZE_RANGE: readonly [number, number] = [36, 60];
export const PIN_MARKER_SIZE_RANGE: readonly [number, number] = [18, 44];

/** Nhãn tên món chỉ hiện khi marker đã đủ to, tránh chữ chồng chữ lúc nhìn toàn quốc. */
export const HERO_LABEL_MIN_ZOOM = 6;
export const PIN_LABEL_MIN_ZOOM = 7.5;

function clamp01(value: number): number {
  return Math.max(0, Math.min(1, value));
}

/** Nội suy tuyến tính kích thước marker theo zoom, tách riêng dải cho tỉnh nổi bật. */
export function markerSizeAtZoom(zoom: number, isHero: boolean): number {
  const t = clamp01((zoom - MARKER_MIN_ZOOM) / (MARKER_MAX_ZOOM - MARKER_MIN_ZOOM));
  const [min, max] = isHero ? HERO_MARKER_SIZE_RANGE : PIN_MARKER_SIZE_RANGE;
  return Math.round(min + (max - min) * t);
}

export function showLabelAtZoom(zoom: number, isHero: boolean): boolean {
  return zoom >= (isHero ? HERO_LABEL_MIN_ZOOM : PIN_LABEL_MIN_ZOOM);
}
