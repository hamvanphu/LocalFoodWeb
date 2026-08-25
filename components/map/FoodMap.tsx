"use client";

import { useCallback, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Map, {
  Source,
  Layer,
  Popup,
  NavigationControl,
  type MapLayerMouseEvent,
} from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import type { FeatureCollection, Point } from "geojson";
import {
  HERO_BUBBLE_LAYER,
  HERO_BUBBLE_LABEL_LAYER,
  PROVINCE_PIN_LAYER,
  VIETNAM_CENTER,
  VIETNAM_INITIAL_ZOOM,
  maptilerStyleUrl,
} from "./mapStyle";
import type { ProvinceMapProperties } from "@/lib/geo";

interface FoodMapProps {
  heroBubbles: FeatureCollection<Point, ProvinceMapProperties>;
  provincePins: FeatureCollection<Point, ProvinceMapProperties>;
}

const INTERACTIVE_LAYER_IDS = ["hero-bubbles", "province-pins"];

export default function FoodMap({ heroBubbles, provincePins }: FoodMapProps) {
  const router = useRouter();
  const [hovered, setHovered] = useState<{
    lng: number;
    lat: number;
    props: ProvinceMapProperties;
  } | null>(null);

  const styleUrl = useMemo(() => maptilerStyleUrl(), []);

  const handleClick = useCallback(
    (event: MapLayerMouseEvent) => {
      const feature = event.features?.[0];
      const slug = feature?.properties?.slug as string | undefined;
      if (slug) router.push(`/provinces/${slug}`);
    },
    [router],
  );

  const handleMove = useCallback((event: MapLayerMouseEvent) => {
    const feature = event.features?.[0];
    if (!feature || feature.geometry.type !== "Point") {
      setHovered(null);
      return;
    }
    const [lng, lat] = feature.geometry.coordinates as [number, number];
    setHovered({ lng, lat, props: feature.properties as ProvinceMapProperties });
  }, []);

  return (
    <Map
      initialViewState={{
        longitude: VIETNAM_CENTER[0],
        latitude: VIETNAM_CENTER[1],
        zoom: VIETNAM_INITIAL_ZOOM,
      }}
      mapStyle={styleUrl}
      style={{ width: "100%", height: "100%" }}
      interactiveLayerIds={INTERACTIVE_LAYER_IDS}
      cursor={hovered ? "pointer" : "grab"}
      onClick={handleClick}
      onMouseMove={handleMove}
      onMouseLeave={() => setHovered(null)}
    >
      <NavigationControl position="top-right" />

      <Source id="hero-bubbles" type="geojson" data={heroBubbles}>
        <Layer id="hero-bubbles" {...HERO_BUBBLE_LAYER} />
        <Layer id="hero-bubble-labels" {...HERO_BUBBLE_LABEL_LAYER} />
      </Source>

      <Source id="province-pins" type="geojson" data={provincePins}>
        <Layer id="province-pins" {...PROVINCE_PIN_LAYER} />
      </Source>

      {hovered && (
        <Popup
          longitude={hovered.lng}
          latitude={hovered.lat}
          closeButton={false}
          closeOnClick={false}
          offset={12}
          anchor="bottom"
        >
          <div className="p-1 text-sm">
            <p className="font-display font-semibold text-ink">{hovered.props.name}</p>
            {hovered.props.heroDishName && (
              <p className="text-ink/70">{hovered.props.heroDishName}</p>
            )}
          </div>
        </Popup>
      )}
    </Map>
  );
}
