import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-chili text-white hover:bg-chili-dark shadow-soft hover:shadow-card",
  secondary:
    "bg-surface text-ink border border-border hover:border-chili/40 hover:text-chili",
  ghost: "bg-transparent text-ink/70 hover:bg-surface-muted hover:text-ink",
};

const SIZE_CLASSES: Record<Size, string> = {
  sm: "h-8 px-3 text-sm gap-1.5",
  md: "h-10 px-4 text-sm gap-2",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 ease-out active:scale-95 disabled:opacity-50 disabled:pointer-events-none ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`}
      {...props}
    />
  );
}
