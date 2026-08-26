"use client";

import { Compass, Plus, Minus } from "lucide-react";
import Toolbar, { ToolbarButton } from "@/components/ui/Toolbar";

interface MapToolbarProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  className?: string;
}

export default function MapToolbar({
  onZoomIn,
  onZoomOut,
  onReset,
  className = "",
}: MapToolbarProps) {
  return (
    <Toolbar className={className}>
      <ToolbarButton label="Phóng to" onClick={onZoomIn}>
        <Plus className="h-4 w-4" />
      </ToolbarButton>
      <ToolbarButton label="Thu nhỏ" onClick={onZoomOut}>
        <Minus className="h-4 w-4" />
      </ToolbarButton>
      <div className="my-0.5 h-px bg-border" />
      <ToolbarButton label="Về toàn cảnh Việt Nam" onClick={onReset}>
        <Compass className="h-4 w-4" />
      </ToolbarButton>
    </Toolbar>
  );
}
