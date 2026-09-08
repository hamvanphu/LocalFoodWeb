/**
 * Băng chữ chạy vô tận — danh sách tên tỉnh/món, tạo nhịp điệu ngay dưới hero.
 *
 * Hai điều đáng lưu ý về cách làm:
 *
 * 1. **Thời lượng tỉ lệ với số mục, không cố định.** Bản đầu đặt cứng 28 giây cho cả
 *    băng: hồi 8 tỉnh thì vừa mắt, nhưng khi mở rộng lên 63 tỉnh thì cùng 28 giây đó
 *    phải kéo băng dài gấp ~8 lần — chữ lướt quá nhanh, không kịp đọc (PM báo 2026-09-08).
 *
 * 2. **Dùng CSS animation, không dùng Framer Motion.** Cần dừng được khi rê chuột để
 *    người đọc kịp nhìn một tên cụ thể, mà `animation-play-state: paused` chỉ có tác
 *    dụng với CSS animation. Nếu dùng Framer thì "dừng" hoá ra là nhảy về đầu băng.
 *    Đây cũng là component tĩnh nên không cần thành client component.
 */
const SECONDS_PER_ITEM = 4;

export default function Marquee({ items }: { items: string[] }) {
  const track = [...items, ...items]; // nhân đôi để loop liền mạch
  const duration = Math.max(items.length * SECONDS_PER_ITEM, 20);

  return (
    <div className="marquee group overflow-hidden border-y border-border bg-ink py-3">
      <div
        className="marquee-track flex w-max gap-8 whitespace-nowrap"
        style={{ animationDuration: `${duration}s` }}
      >
        {track.map((item, i) => (
          <span key={`${item}-${i}`} className="font-display text-lg text-white/80">
            {item} <span className="text-turmeric">✺</span>
          </span>
        ))}
      </div>
    </div>
  );
}
