# [6] Delegation Map — Local Food

> Input: `RISK-LF.md`. Leash A ≈ L3 (tự thực thi, PM spot-check, tới bản nháp) · Leash A+ ≈ L4 (chạm rủi ro cao, bắt buộc cổng bảo mật + PM duyệt trước release).

| Loại việc | Mức L | Leash | AI được làm tới đâu | PM phải làm gì |
|---|---|---|---|---|
| Code UI/component (Design System, DishCard, map toolbar, motion) | L3 | **A** | Tự viết/sửa code, chạy `pnpm build`/`pnpm dev` để tự kiểm tra | Spot-check + Cổng hiểu ở mốc W1-9 (đánh giá "wow") |
| Viết nội dung món ăn (mô tả, công thức, cách ăn) | L2-L3 | **A, kèm Content Gate riêng** | AI viết bản nháp + tự tìm `sourceRef` | **Bắt buộc** PM đọc + xác nhận nguồn trước khi coi 1 dish là "xong" (không phải chỉ đọc lướt) — đây là gate về nội dung, không phải về bảo mật, nên không gọi là A+ nhưng có sức nặng tương đương |
| Tìm/gắn ảnh Wikimedia + attribution/license | L3 | **A** | Tự tìm, tự gắn | PM spot-check vài ảnh xem đúng món không, license đúng loại không |
| **Kiểm thử/QA (W1-11, W1-11a, W1-11b: test AC, responsive, A11y, Lighthouse)** *(PM bổ sung — bảng gốc thiếu hẳn dòng này, không phải xếp sai tầng)* | L2-L3 | **A, kèm Content-style Gate bắt buộc** | AI tự chạy build/lint/Lighthouse, tự báo kết quả kỹ thuật | **AI không được tự tuyên bố "PASS" là xong** — PM phải tự tay test lại theo checklist AC/negative-case (giống kỷ luật đã làm ở Cổng hiểu bước [1]: US-03/US-08), đặc biệt các ca dễ "trông có vẻ pass nhưng thực ra vỡ" như responsive 360px |
| Sửa/xoá file dữ liệu đã có (`data/provinces/*.json` hiện tại) | L3 | **A** | Tự sửa qua Edit tool | PM biết trước qua git diff/commit message, không cần duyệt từng dòng |
| Đọc/ghi `.env.local`, xử lý API key | L4 | **A+** | AI đọc biến môi trường qua code, **KHÔNG tự điền giá trị key thật, KHÔNG in giá trị key ra output** | PM tự đăng ký + dán key, AI chỉ code phần đọc biến |
| `git commit` (local, chưa có remote) | L3 | **A** | Tự commit sau mỗi bước hoàn thành, message rõ ràng | PM xem lịch sử qua `git log` khi cần |
| `git push` / tạo remote / deploy lên Vercel | L4 | **A+ — CHƯA CẤP hành động, chỉ chuẩn bị** | AI **không tự push/deploy** dù có remote hay chưa (luật cứng #1) | PM tự quyết khi nào push/deploy, tự thực hiện hoặc ra lệnh rõ ràng từng lần |
| **[Mới, D3] Tạo Supabase project + lấy URL/anon key** | L4 | **A+** | AI **không tự đăng ký** dịch vụ ngoài thay PM (giống MapTiler) | PM tự tạo project, dán key vào `.env.local` |
| **[Mới, D3] Viết RLS policy trên bảng `dish_reviews`** | L4 | **A+ — bắt buộc PM xác nhận trước khi coi là xong** | AI viết SQL policy, nhưng **không tự chạy trên Supabase dashboard** — đưa PM chạy hoặc PM xác nhận rõ ràng trước | PM tự chạy SQL trên Supabase dashboard (hoặc xác nhận rõ ràng cho AI chạy qua CLI/API nếu có), rồi tự kiểm tra RLS đã bật (thử query từ client xem có bị chặn đúng không) |
| Form submit review/rating (UI phía client) | L3 | **A** | AI tự viết UI + validate phía client | PM spot-check UI, không cần duyệt từng dòng |
| Cắt scope (chuyển Phương án A→B theo checkpoint R1) | L2 | **Người quyết, AI đề xuất** | AI có thể nhắc khi tới hạn checkpoint, đề xuất phương án | PM là người quyết định cuối, không tự động hoá quyết định này dù đã có "tự động" trong câu chữ ở EST-LF.md — chữ "tự động" ở đó nghĩa là "không cần bàn lại từ đầu", không phải "AI tự quyết" |

---

## 🔒 Cổng hiểu — bước [6] — **ĐÃ ĐÓNG (2026-08-26)**

1. PM giải thích đúng: `.env.local` chứa secret, để A thì rủi ro commit lộ
   key hoặc AI tự điền giá trị sai mà PM không phát hiện ngay — đúng lý do
   phải A+.
2. PM chỉ ra bảng thiếu dòng QA/kiểm thử. Sau khi tao kiểm tra lại, đúng là
   **thiếu hẳn**, không phải "xếp nhầm xuống A" — đã bổ sung dòng QA với gate
   bắt buộc PM tự test lại, không tin AI tự báo "PASS". Tinh thần đề xuất của
   PM (không để AI tự tuyên bố xong) được giữ nguyên dù cách gọi tên khác.

Cổng đã đóng → bước [7] Definition of Ready được phép bắt đầu.
