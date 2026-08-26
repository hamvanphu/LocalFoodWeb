import type { ReactNode } from "react";

type Tone = "chili" | "turmeric" | "herb" | "neutral";

const TONE_CLASSES: Record<Tone, string> = {
  chili: "bg-chili/10 text-chili",
  turmeric: "bg-turmeric/15 text-amber-dark",
  herb: "bg-herb/10 text-herb-dark",
  neutral: "bg-surface-muted text-ink/60",
};

export default function Badge({
  children,
  tone = "neutral",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-pill px-2.5 py-0.5 text-xs font-medium ${TONE_CLASSES[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
