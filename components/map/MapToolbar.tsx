"use client";

import { Compass, Plus, Minus } from "lucide-react";
import Toolbar, { ToolbarButton } from "@/components/ui/Toolbar";
import { t } from "@/lib/ui-strings";
import type { Locale } from "@/lib/locale";

interface MapToolbarProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  className?: string;
  locale?: Locale;
}

export default function MapToolbar({
  onZoomIn,
  onZoomOut,
  onReset,
  className = "",
  locale = "vi",
}: MapToolbarProps) {
  return (
    <Toolbar className={className}>
      <ToolbarButton label={t(locale, "map.zoomIn")} onClick={onZoomIn}>
        <Plus className="h-4 w-4" />
      </ToolbarButton>
      <ToolbarButton label={t(locale, "map.zoomOut")} onClick={onZoomOut}>
        <Minus className="h-4 w-4" />
      </ToolbarButton>
      <div className="my-0.5 h-px bg-border" />
      <ToolbarButton label={t(locale, "map.reset")} onClick={onReset}>
        <Compass className="h-4 w-4" />
      </ToolbarButton>
    </Toolbar>
  );
}
