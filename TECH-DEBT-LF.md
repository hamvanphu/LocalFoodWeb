# Nợ kỹ thuật & việc đang chờ PM — Local Food

> File tra nhanh "còn thiếu gì để chạy đủ 100%". Cập nhật mỗi khi phát sinh/khi được giải quyết — đánh dấu ✅ khi xong, không xoá dòng (giữ lịch sử).

## 🔴 Đang chặn (PM cần cung cấp)

| # | Việc | Trạng thái | Ảnh hưởng nếu chưa có | Cách lấy |
|---|---|---|---|---|
| 1 | ~~MapTiler API key~~ | **✅ ĐÃ CÓ (2026-09-03)** — PM đã dán key vào `.env.local`, dev server đã restart để nạp | — | — |
| 2 | ~~Supabase URL + anon key~~ | **HOÃN (2026-09-03)** — PM quyết định bỏ Review/Rating khỏi bản nộp, chỉ còn 6 ngày tới hạn. Không còn là mục chặn. | Review/Rating chuyển hẳn sang phase-2 (sau khi nộp bài) | Nếu sau này muốn làm lại: xem `ARCH-LF.md` D3 đã có sẵn thiết kế schema + RLS |

## 🟡 Đã biết, chưa xử lý (không chặn code, nhưng cần nhớ)

| # | Việc | Ghi ở đâu | Khi nào xử lý |
|---|---|---|---|
| 3 | RLS (Row Level Security) trên bảng `dish_reviews` phải bật + đúng policy trước khi tính năng review được coi là "xong" | `ARCH-LF.md` D3, `RISK-LF.md` R11 | Ngay sau khi có mục #2 ở trên, cùng lúc viết schema |
| 4 | Không có kiểm duyệt trước khi đăng review (pre-moderation) — chấp nhận rủi ro cho bản nộp bài | `RISK-LF.md` R10 | Chấp nhận cho 2 tuần, PM tự ẩn thủ công qua Supabase dashboard nếu có spam |
| 5 | Wishlist (phase-2, US-09) — localStorage mất khi đổi thiết bị, chưa quyết định export/import hay chấp nhận mất | `SPEC-LF.md` US-09, `RISK-LF.md` R8 | Khi bắt tay code tính năng này (ngoài MVP 2 tuần) |
| 6 | ~~6 tỉnh MVP còn lại chưa có data~~ | **✅ XONG (2026-09-03)** — cả 8/8 tỉnh MVP đã có data, mỗi món đều có `sourceRefs` đối chiếu Wikipedia/nguồn uy tín, 27/32 món có ảnh thật (5 món không tìm được ảnh phù hợp, dùng fallback gradient trung thực) | — |
| 7 | Trang `/browse` liệt kê toàn bộ tỉnh — chưa làm, giá trị tăng khi >8 tỉnh | `WBS-LF.md` Wave 2 | Phase-2 |

## ✅ Đã giải quyết (giữ lại làm lịch sử, không xoá)

- ~~Ảnh vỡ khi lỗi tải runtime (GAP-01)~~ — đã fix ở `ImageWithFallback`.
- ~~Deep-link `#dish-slug` bị mất sau redesign explorer~~ — đã fix, `ProvinceDishExplorer` tự mở Sheet theo hash.
- ~~`sourceRef` chưa có trong schema~~ — đã thêm + validate bằng zod, áp dụng cho 8 món hiện có.

---
*Cập nhật lần cuối: 2026-08-26.*
