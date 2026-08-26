"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import Map, {
  Source,
  Layer,
  Popup,
  type MapLayerMouseEvent,
  type MapRef,
} from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { Hand } from "lucide-react";
import type { FeatureCollection, Point } from "geojson";
import {
  HERO_BUBBLE_LAYER,
  HERO_BUBBLE_LABEL_LAYER,
  PROVINCE_PIN_LAYER,
  VIETNAM_CENTER,
  VIETNAM_INITIAL_ZOOM,
  maptilerStyleUrl,
} from "./mapStyle";
import MapToolbar from "./MapToolbar";
import type { ProvinceMapProperties } from "@/lib/geo";

interface FoodMapProps {
  heroBubbles: FeatureCollection<Point, ProvinceMapProperties>;
  provincePins: FeatureCollection<Point, ProvinceMapProperties>;
}

const INTERACTIVE_LAYER_IDS = ["hero-bubbles", "province-pins"];

export default function FoodMap({ heroBubbles, provincePins }: FoodMapProps) {
  const router = useRouter();
  const mapRef = useRef<MapRef | null>(null);
  const [hovered, setHovered] = useState<{
    lng: number;
    lat: number;
    props: ProvinceMapProperties;
  } | null>(null);
  const [interacted, setInteracted] = useState(false);

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
    <div
      className="relative h-full w-full"
      onPointerDownCapture={() => setInteracted(true)}
      onWheelCapture={() => setInteracted(true)}
    >
      <Map
        ref={mapRef}
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
      <Source id="hero-bubbles" type="geojson" data={heroBubbles}>
        <Layer id="hero-bubbles" {...HERO_BUBBLE_LAYER} />
        <Layer id="hero-bubble-labels" {...HERO_BUBBLE_LABEL_LAYER} />
      </Source>

      <Source id="province-pins" type="geojson" data={provincePins}>
        <Layer id="province-pins" {...PROVINCE_PIN_LAYER} />
      </Source>

      <AnimatePresence>
        {hovered && (
          <Popup
            longitude={hovered.lng}
            latitude={hovered.lat}
            closeButton={false}
            closeOnClick={false}
            offset={12}
            anchor="bottom"
          >
            <motion.div
              className="p-1 text-sm"
              initial={{ opacity: 0, scale: 0.85, y: 4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            >
              <p className="font-display font-semibold text-ink">{hovered.props.name}</p>
              {hovered.props.heroDishName && (
                <p className="text-ink/70">{hovered.props.heroDishName}</p>
              )}
            </motion.div>
          </Popup>
        )}
      </AnimatePresence>
      </Map>

      <AnimatePresence>
        {!interacted && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="pointer-events-none absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-pill border border-white/40 bg-white/85 px-4 py-2 text-sm font-medium text-ink shadow-card backdrop-blur-md"
          >
            <Hand className="h-4 w-4 text-chili" />
            Bấm vào một điểm để khám phá món ăn
          </motion.div>
        )}
      </AnimatePresence>

      <MapToolbar
        className="absolute top-4 right-4"
        onZoomIn={() => mapRef.current?.zoomIn({ duration: 200 })}
        onZoomOut={() => mapRef.current?.zoomOut({ duration: 200 })}
        onReset={() =>
          mapRef.current?.flyTo({
            center: VIETNAM_CENTER,
            zoom: VIETNAM_INITIAL_ZOOM,
            duration: 800,
          })
        }
      />
    </div>
  );
}
