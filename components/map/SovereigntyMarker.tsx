"use client";

interface SovereigntyMarkerProps {
  name: string;
  admin: string;
  /** Luôn bật: đơn vị hành chính là phần khẳng định chủ quyền, không ẩn theo zoom. */
  detailed: boolean;
  onClick?: () => void;
}

/**
 * Marker cho quần đảo Hoàng Sa và Trường Sa — thuộc chủ quyền Việt Nam.
 *
 * Cố ý KHÔNG dùng `DishMarker`: đây không phải điểm ẩm thực mà là thông tin chủ quyền,
 * nên phải khác hẳn về mặt thị giác để người xem không nhầm là "một món ăn nữa".
 *
 * Basemap MapTiler chỉ ghi nhãn quốc tế ("Paracel Islands", "South China Sea") và
 * không thể hiện chủ quyền, nên lớp nhãn tiếng Việt này là phần bổ sung bắt buộc.
 */
export default function SovereigntyMarker({
  name,
  admin,
  detailed,
  onClick,
}: SovereigntyMarkerProps) {
  const Tag = onClick ? "button" : "div";

  return (
    <Tag
      {...(onClick ? { type: "button" as const, onClick } : {})}
      aria-label={`${name} — ${admin}, thuộc chủ quyền Việt Nam`}
      className={`flex flex-col items-center gap-1 ${
        onClick
          ? "cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chili"
          : ""
      }`}
    >
      {/* Chấm nhỏ viền đỏ — khác hẳn marker ảnh món ăn hình tròn */}
      <span
        aria-hidden="true"
        className="block h-2.5 w-2.5 rotate-45 border-2 border-chili bg-surface shadow-soft"
      />
      <span className="pointer-events-none flex flex-col items-center whitespace-nowrap rounded-control border border-chili/30 bg-surface/95 px-2 py-1 shadow-soft backdrop-blur-sm">
        <span className="text-[11px] font-semibold leading-tight text-chili-dark">
          {name}
        </span>
        {detailed && (
          <span className="text-[10px] leading-tight text-ink/75">{admin}</span>
        )}
      </span>
    </Tag>
  );
}
