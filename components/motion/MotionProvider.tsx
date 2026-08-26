"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/** Tôn trọng prefers-reduced-motion trên toàn site (NFR accessibility, SPEC-LF.md). */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
