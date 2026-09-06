"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import Map, { Marker, Popup, type MapRef, type ViewStateChangeEvent } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { Hand } from "lucide-react";
import type { FeatureCollection, Point } from "geojson";
import {
  VIETNAM_BOUNDS,
  VIETNAM_FIT_PADDING,
  VIETNAM_INITIAL_ZOOM,
  markerSizeAtZoom,
  showLabelAtZoom,
  maptilerStyleUrl,
} from "./mapStyle";
import MapToolbar from "./MapToolbar";
import DishMarker from "./DishMarker";
import type { ProvinceMapProperties } from "@/lib/geo";

interface FoodMapProps {
  provinces: FeatureCollection<Point, ProvinceMapProperties>;
}

export default function FoodMap({ provinces }: FoodMapProps) {
  const router = useRouter();
  const mapRef = useRef<MapRef | null>(null);
  const [zoom, setZoom] = useState(VIETNAM_INITIAL_ZOOM);
  const [hovered, setHovered] = useState<{
    lng: number;
    lat: number;
    props: ProvinceMapProperties;
  } | null>(null);
  const [interacted, setInteracted] = useState(false);

  const styleUrl = useMemo(() => maptilerStyleUrl(), []);

  // Tỉnh nổi bật vẽ sau cùng để nằm trên khi marker chồng nhau (vd vùng đồng bằng
  // sông Hồng có nhiều tỉnh sát nhau); z-index bên dưới xử lý phần còn lại.
  const ordered = useMemo(
    () =>
      [...provinces.features].sort(
        (a, b) => Number(a.properties.isHeroBubble) - Number(b.properties.isHeroBubble),
      ),
    [provinces],
  );

  const goToProvince = useCallback(
    (slug: string) => router.push(`/provinces/${slug}`),
    [router],
  );

  const handleMove = useCallback((e: ViewStateChangeEvent) => {
    setZoom(e.viewState.zoom);
  }, []);

  // fitBounds tự chọn zoom theo kích thước khung, nên phải đọc lại zoom thật lúc load
  // thay vì tin vào VIETNAM_INITIAL_ZOOM — nếu không, marker sẽ vẽ sai kích thước ban đầu.
  const handleLoad = useCallback(() => {
    const map = mapRef.current;
    if (map) setZoom(map.getZoom());
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
          bounds: VIETNAM_BOUNDS,
          fitBoundsOptions: { padding: VIETNAM_FIT_PADDING },
        }}
        mapStyle={styleUrl}
        style={{ width: "100%", height: "100%" }}
        onMove={handleMove}
        onLoad={handleLoad}
      >
        {ordered.map((f) => {
          const [lng, lat] = f.geometry.coordinates;
          const p = f.properties;
          const isHero = p.isHeroBubble;
          const size = markerSizeAtZoom(zoom, isHero);
          const showLabel = showLabelAtZoom(zoom, isHero) && Boolean(p.heroDishName);
          const isHovered = hovered?.props.slug === p.slug;

          return (
            <Marker
              key={p.slug}
              longitude={lng}
              latitude={lat}
              anchor="center"
              style={{ zIndex: isHovered ? 3 : isHero ? 2 : 1 }}
            >
              <div className="flex flex-col items-center gap-1">
                <DishMarker
                  slug={p.slug}
                  name={`${p.name} — ${p.heroDishName}`}
                  imageUrl={p.heroDishImageUrl}
                  size={size}
                  opacity={1}
                  onClick={() => goToProvince(p.slug)}
                  onMouseEnter={() => setHovered({ lng, lat, props: p })}
                  onMouseLeave={() => setHovered(null)}
                />
                {showLabel && (
                  <span className="pointer-events-none whitespace-nowrap rounded-pill bg-surface/90 px-2 py-0.5 text-[11px] font-medium text-ink shadow-soft">
                    {p.heroDishName}
                  </span>
                )}
              </div>
            </Marker>
          );
        })}

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
          mapRef.current?.fitBounds(VIETNAM_BOUNDS, {
            padding: VIETNAM_FIT_PADDING,
            duration: 800,
          })
        }
      />
    </div>
  );
}
