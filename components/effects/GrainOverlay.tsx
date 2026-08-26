/** Texture nhiễu hạt phủ toàn site — phá vỡ cảm giác "web phẳng SaaS", tăng chất liệu ấm. */
export default function GrainOverlay() {
  return (
    <svg
      className="pointer-events-none fixed inset-0 z-[999] h-full w-full opacity-[0.05] mix-blend-overlay"
      aria-hidden="true"
    >
      <filter id="grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" />
    </svg>
  );
}
