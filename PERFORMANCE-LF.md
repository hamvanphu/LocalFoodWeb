# [10] Performance & Accessibility — W1-11a + W1-11b

> Đo bằng `pnpm build && next start` (production), không đo `pnpm dev` (chậm hơn thật do chưa tối ưu).

## W1-11a — Accessibility (axe-core)

Scan tự động bằng `@axe-core/playwright` trên 4 trang: Trang chủ, `/provinces/ha-noi`, `/browse`, 404.

**Kết quả cuối: 0 vi phạm trên cả 4 trang** (Lighthouse Accessibility: 96-100/100).

Lỗi tìm thấy và đã sửa:
| Lỗi | Vị trí | Sửa |
|---|---|---|
| Contrast `text-ink/40`, `text-ink/60` dưới ngưỡng AA (4.5:1) | Lan rộng khắp site (caption, label, subtitle) | Tính toán chính xác bằng công thức WCAG, bump lên `/65`-`/70` |
| `text-amber` (#b5732a) trên nền trắng chỉ đạt 3.85:1 | Label "Miền Bắc/Trung/Nam", tiêu đề "CÁCH ĂN GỢI Ý" | Đổi sang `text-amber-dark` (5.46-5.75:1) |
| Badge "Món đặc trưng" (`text-chili` trên `bg-chili/10`) chỉ đạt 4.24:1 | `Badge.tsx` tone chili | Đổi sang `text-chili-dark` (6.28:1) |
| Focus indicator ô tìm kiếm quá mờ (`border-chili/40`) | `SearchBar.tsx` | Đổi thành `border-chili` đặc + `ring-2 ring-chili/30` |

**Keyboard navigation:** test bằng Tab liên tục 40 lần trên trang chủ — toàn bộ phần tử tương tác (marker bản đồ, toolbar, filter chip, search, card, link) đều nhận focus đúng thứ tự DOM, có focus-visible rõ ràng, không có bẫy tab (tab trap).

## W1-11b — Performance (Lighthouse)

### Vấn đề nghiêm trọng tìm thấy và đã sửa

**Trang chủ nặng 16.4MB, trong đó ảnh chiếm 14.4MB.** Nguyên nhân: `DishMarker.tsx`
(marker bản đồ) dùng thẻ `<img>` thuần thay vì `next/image`, tải nguyên bản ảnh gốc
từ Wikimedia (thường vài MB/ảnh) chỉ để hiện thumbnail ~50px. **Xử lý:** đổi sang
`next/image` với `sizes` đúng kích thước marker → **ảnh giảm còn 211KB (giảm 98.5%)**,
tổng trang giảm còn 2.26MB.

**LCP trang tỉnh bị trễ ~3.2s do chính hiệu ứng blur-up fade-in đã thêm ở đợt UX
review trước** — ảnh priority (LCP candidate) khởi tạo ở trạng thái `opacity-0`
chờ sự kiện `onLoad` mới hiện, khiến trình duyệt không tính là đã "paint" cho tới
lúc đó. **Xử lý:** ảnh priority hiện ngay lập tức (bỏ qua hiệu ứng blur-up), chỉ ảnh
thường (dưới màn hình) mới giữ hiệu ứng mượt lúc tải.

### Kết quả sau khi sửa

| Trang | Performance | Accessibility | LCP | TBT | Payload |
|---|---|---|---|---|---|
| Trang tỉnh (Hà Nội) | **~80/100** | 100/100 | ~4.2-4.5s | ~110-160ms | 550KB |
| Trang chủ (có bản đồ) | ~30/100 | 96/100 | ~8.8s | ~5.3s | 2.26MB |

### Đánh giá trung thực — không đạt NFR "LCP < 2.5s" cho trang chủ

Trang chủ **không đạt** ngưỡng NFR ban đầu do MapLibre GL JS (thư viện bản đồ
WebGL) tự thân nặng — riêng 1 chunk JS của thư viện này chiếm 6-10 giây scripting
lúc khởi tạo trong môi trường test. Đây là **đánh đổi cố hữu đã biết trước**, không
phải lỗi code có thể vá nhanh: bản đồ tương tác là tính năng lõi bắt buộc theo đề
bài (không thể bỏ để đạt điểm Lighthouse đẹp hơn). Số liệu dao động khá lớn giữa
các lần đo (render delay 3.2s→2.3s→1.5s dù code không đổi) — một phần do máy test
đã chạy liên tục rất nặng suốt phiên làm việc, người dùng thật trên máy sạch nhiều
khả năng sẽ tốt hơn số đo ở đây, nhưng bản chất "map WebGL nặng" vẫn đúng.

**Kết luận:** đã sửa 2 vấn đề thật (ảnh 14MB→211KB, LCP blur-up), trang không-bản-đồ
đạt hiệu năng tốt (~80/100). Trang chủ chấp nhận điểm thấp hơn vì lý do kiến trúc
đã biết trước — ghi vào `RISK-LF.md` làm rủi ro đã chấp nhận, không che giấu.

---

## 🔒 Cổng hiểu — W1-11a + W1-11b

1. Đọc bảng kết quả, tự hỏi: **có chấp nhận trang chủ điểm Performance thấp vì lý do
   bản đồ WebGL không, hay muốn cân nhắc phương án khác** (vd tách bản đồ ra khỏi
   trang chủ, chỉ tải khi cuộn tới — trade-off UX vs performance)?
2. Xác nhận PASS/FAIL cho W1-11a/W1-11b để chuyển sang W1-12 (hồ sơ viva).
