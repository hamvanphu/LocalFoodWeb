import type { CircleLayerSpecification, SymbolLayerSpecification } from "maplibre-gl";

/** Public MapLibre demo style — swap for a MapTiler style URL once NEXT_PUBLIC_MAPTILER_KEY is set. */
export const DEMO_STYLE_URL = "https://demotiles.maplibre.org/style.json";

export function maptilerStyleUrl(): string {
  const key = process.env.NEXT_PUBLIC_MAPTILER_KEY;
  if (!key) return DEMO_STYLE_URL;
  return `https://api.maptiler.com/maps/streets-v2/style.json?key=${key}`;
}

export const VIETNAM_CENTER: [number, number] = [107.5, 16.5];
export const VIETNAM_INITIAL_ZOOM = 5;

export const HERO_BUBBLE_LAYER: Omit<CircleLayerSpecification, "id" | "source"> = {
  type: "circle",
  minzoom: 0,
  maxzoom: 8,
  paint: {
    "circle-radius": ["interpolate", ["linear"], ["zoom"], 3, 10, 8, 22],
    "circle-color": "#d7263d",
    "circle-opacity": ["interpolate", ["linear"], ["zoom"], 3, 0.85, 7, 0.9, 8, 0],
    "circle-stroke-width": 2,
    "circle-stroke-color": "#fff8f0",
  },
};

export const HERO_BUBBLE_LABEL_LAYER: Omit<SymbolLayerSpecification, "id" | "source"> = {
  type: "symbol",
  minzoom: 4,
  maxzoom: 8,
  layout: {
    "text-field": ["get", "heroDishName"],
    "text-size": 12,
    "text-offset": [0, 1.6],
    "text-anchor": "top",
    "text-font": ["Open Sans Regular"],
  },
  paint: {
    "text-color": "#241c15",
    "text-halo-color": "#fff8f0",
    "text-halo-width": 1.4,
    "text-opacity": ["interpolate", ["linear"], ["zoom"], 4, 1, 7, 1, 8, 0],
  },
};

export const PROVINCE_PIN_LAYER: Omit<CircleLayerSpecification, "id" | "source"> = {
  type: "circle",
  minzoom: 7,
  maxzoom: 22,
  paint: {
    "circle-radius": ["interpolate", ["linear"], ["zoom"], 7, 5, 14, 10],
    "circle-color": "#f2a93c",
    "circle-opacity": ["interpolate", ["linear"], ["zoom"], 7, 0, 8, 0.95],
    "circle-stroke-width": 1.5,
    "circle-stroke-color": "#241c15",
  },
};
