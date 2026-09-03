/** Public MapLibre demo style — swap for a MapTiler style URL once NEXT_PUBLIC_MAPTILER_KEY is set. */
export const DEMO_STYLE_URL = "https://demotiles.maplibre.org/style.json";

export function maptilerStyleUrl(): string {
  const key = process.env.NEXT_PUBLIC_MAPTILER_KEY;
  if (!key) return DEMO_STYLE_URL;
  return `https://api.maptiler.com/maps/streets-v2/style.json?key=${key}`;
}

export const VIETNAM_CENTER: [number, number] = [107.5, 16.5];
export const VIETNAM_INITIAL_ZOOM = 5;

/** Dải overlap zoom 7-8 dùng để crossfade giữa marker hero (zoom thấp) và pin từng tỉnh (zoom cao). */
export const HERO_MAX_ZOOM = 8;
export const PIN_MIN_ZOOM = 7;

export const HERO_MARKER_SIZE = 56;
export const PIN_MARKER_SIZE = 36;

function clamp01(value: number): number {
  return Math.max(0, Math.min(1, value));
}

/** Opacity marker hero: đầy 1 tới zoom 7, mờ dần về 0 tới zoom 8. */
export function heroOpacityAtZoom(zoom: number): number {
  return clamp01(1 - (zoom - PIN_MIN_ZOOM));
}

/** Opacity marker pin tỉnh: 0 dưới zoom 7, đầy 1 từ zoom 8 trở lên. */
export function pinOpacityAtZoom(zoom: number): number {
  return clamp01(zoom - PIN_MIN_ZOOM);
}
