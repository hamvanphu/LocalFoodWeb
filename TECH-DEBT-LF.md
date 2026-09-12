# Nợ kỹ thuật & việc đang chờ PM — Local Food

> File tra nhanh "còn thiếu gì để chạy đủ 100%". Cập nhật mỗi khi phát sinh/khi được giải quyết — đánh dấu ✅ khi xong, không xoá dòng (giữ lịch sử).

## 🔴 Đang chặn (PM cần cung cấp)

| # | Việc | Trạng thái | Ảnh hưởng nếu chưa có | Cách lấy |
|---|---|---|---|---|
| 1 | ~~MapTiler API key~~ | **✅ ĐÃ CÓ (2026-09-03)** — PM đã dán key vào `.env.local`, dev server đã restart để nạp | — | — |
| 2 | ~~Supabase URL + anon key~~ | **✅ ĐÃ CÓ (2026-09-06)** — PM tạo project, chạy `supabase/schema.sql`, dán key vào `.env.local` + Vercel. Review/Rating (US-14) đã lên production | — | — |

## 🟡 Đã biết, chưa xử lý (không chặn code, nhưng cần nhớ)

| # | Việc | Ghi ở đâu | Khi nào xử lý |
|---|---|---|---|
| 3 | RLS (Row Level Security) trên bảng `dish_reviews` phải bật + đúng policy trước khi tính năng review được coi là "xong" | `ARCH-LF.md` D3, `RISK-LF.md` R11 | Ngay sau khi có mục #2 ở trên, cùng lúc viết schema |
| 4 | Không có kiểm duyệt trước khi đăng review (pre-moderation) — chấp nhận rủi ro cho bản nộp bài | `RISK-LF.md` R10 | Chấp nhận cho 2 tuần, PM tự ẩn thủ công qua Supabase dashboard nếu có spam |
| 5 | Wishlist (phase-2, US-09) — localStorage mất khi đổi thiết bị, chưa quyết định export/import hay chấp nhận mất | `SPEC-LF.md` US-09, `RISK-LF.md` R8 | Khi bắt tay code tính năng này (ngoài MVP 2 tuần) |
| 6 | ~~6 tỉnh MVP còn lại chưa có data~~ | **✅ XONG (2026-09-03)** — cả 8/8 tỉnh MVP đã có data, mỗi món đều có `sourceRefs` đối chiếu Wikipedia/nguồn uy tín, 27/32 món có ảnh thật (5 món không tìm được ảnh phù hợp, dùng fallback gradient trung thực) | — |
| 7 | Trang `/browse` liệt kê toàn bộ tỉnh — chưa làm, giá trị tăng khi >8 tỉnh | `WBS-LF.md` Wave 2 | Phase-2 |

| 8 | **Xuống dòng không nhất quán trong `data/provinces/`** — đa số file dùng LF, nhưng `quang-tri.json` và `hai-phong.json` dùng **CRLF**. Hệ quả thật: `git diff` hiện file CRLF thành **viết lại toàn bộ** (83+/77−) thay vì 6 dòng thêm ⇒ **không review được**, và là bẫy cho bất kỳ agent nào chèn text theo dòng | Agent phát hiện khi làm W4-2 (2026-09-11) | Khi có `.gitattributes` chuẩn hoá; chưa gấp vì đã có cổng `check:meal` đối chiếu nội dung nên lỗi định dạng không lọt thành lỗi dữ liệu |
| 9 | **Ba tỉnh không bao giờ xuất hiện ở `/goi-y`** — Hải Dương, Thanh Hóa, Sơn La. Phân loại **đúng**, đây là **thiếu nội dung**: các tỉnh này chỉ có món quà/đồ nhắm trong dữ liệu | `SCOPE-REC-LF.md`, `RISK-LF.md` R16 | Khi bổ sung món ăn no được cho 3 tỉnh đó. **Không** chữa bằng cách ép một món lên `bua-chinh` — bẻ dữ liệu cho vừa tính năng |
| 10 | **Không có cách báo "sao món X không có trong gợi ý"** — kênh US-15 chỉ báo được nội dung **hiện ra** là sai, không báo được món bị **ẩn đi** oan | `RISK-LF.md` R16 | Phase-2. Đây là lỗ hổng cấu trúc của mọi tính năng lọc, không riêng cái này |

## 🔴 Đã giải quyết ngay trong phiên này — PM cần biết

- **Bản đồ không hiển thị gì** (PM báo cáo 2026-09-03): nguyên nhân là bug
  thật của `maplibre-gl@6.5.0` (bản mới) — vector tile source không bao giờ
  load xong. Đã hạ xuống `maplibre-gl@4.7.1` (ổn định), map chạy đúng ngay.
  Chi tiết điều tra ở `DEVBOOK.md`.

## ✅ Đã giải quyết (giữ lại làm lịch sử, không xoá)

- ~~Ảnh vỡ khi lỗi tải runtime (GAP-01)~~ — đã fix ở `ImageWithFallback`.
- ~~Deep-link `#dish-slug` bị mất sau redesign explorer~~ — đã fix, `ProvinceDishExplorer` tự mở Sheet theo hash.
- ~~`sourceRef` chưa có trong schema~~ — đã thêm + validate bằng zod, áp dụng cho 8 món hiện có.

---
*Cập nhật lần cuối: 2026-08-26.*

| 8 | **Chưa có thông báo tự động khi có báo nội dung sai / đánh giá spam** — PM phải chủ động mở Supabase Dashboard chạy SQL mới biết | `ADMIN-GUIDE-LF.md` mục 4, `TRANSFORMATION-PLAN-LF.md` G4 | Khi PM chọn kênh (Discord/Slack ~10 phút, hoặc email nhiều bước hơn). **Quyết định có ý thức: không làm trang /admin trên site**, vì cần `service_role` key mà key đó lọt vào client là mất toàn bộ dữ liệu |
