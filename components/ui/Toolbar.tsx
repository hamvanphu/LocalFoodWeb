import type { ReactNode } from "react";

/** Khung toolbar dùng chung (map toolbar, filter bar tương lai) — nền kính mờ nổi trên ảnh/bản đồ. */
export default function Toolbar({
  children,
  className = "",
  orientation = "vertical",
}: {
  children: ReactNode;
  className?: string;
  orientation?: "vertical" | "horizontal";
}) {
  return (
    <div
      className={`flex ${orientation === "vertical" ? "flex-col" : "flex-row"} gap-1 rounded-control border border-white/40 bg-white/70 p-1.5 shadow-card backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
}

export function ToolbarButton({
  children,
  label,
  active = false,
  ...props
}: {
  children: ReactNode;
  label: string;
  active?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      aria-label={label}
      title={label}
      className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-150 ${
        active
          ? "bg-chili text-white"
          : "text-ink/70 hover:bg-surface-muted hover:text-ink"
      }`}
      {...props}
    >
      {children}
    </button>
  );
}
