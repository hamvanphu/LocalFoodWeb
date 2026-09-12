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
| `git push` / tạo remote / deploy lên Vercel | L4 | **A+ — ĐÃ CẤP THEO LỆNH (2026-09-06)**, trước đó "chưa cấp hành động" | AI **không tự ý** push/deploy. Ngày 2026-09-06 PM ra lệnh rõ ràng từng lần (*"nhớ push code lên git nhé"*, *"Cài Vercel CLI để tao deploy"*) → AI thực hiện. **Quyền theo lệnh, không phải cấp vĩnh viễn** | PM quyết từng lần. Trước lần push đầu tiên, AI đã quét lịch sử git xác nhận không có secret nào bị commit |
| **[Mới, D3] Tạo Supabase project + lấy URL/anon key** | L4 | **A+** | AI **không tự đăng ký** dịch vụ ngoài thay PM (giống MapTiler) | PM tự tạo project, dán key vào `.env.local` |
| **[Mới, D3] Viết RLS policy trên bảng `dish_reviews`** | L4 | **A+ — bắt buộc PM xác nhận trước khi coi là xong** | AI viết SQL policy, nhưng **không tự chạy trên Supabase dashboard** — đưa PM chạy hoặc PM xác nhận rõ ràng trước | PM tự chạy SQL trên Supabase dashboard (hoặc xác nhận rõ ràng cho AI chạy qua CLI/API nếu có), rồi tự kiểm tra RLS đã bật (thử query từ client xem có bị chặn đúng không) |
| Form submit review/rating (UI phía client) | L3 | **A** | AI tự viết UI + validate phía client | PM spot-check UI, không cần duyệt từng dòng |
| **[Mới 2026-09-11] Phân loại hàng loạt bằng agent song song ghi thẳng vào file dữ liệu gốc** (`mealTypes` cho 197 món) | L3 | **A, kèm cổng đối chiếu BẮT BUỘC** | AI chia lô cho nhiều agent ghi thẳng vào `data/provinces/*.json`. **Điều kiện tiên quyết: working tree sạch và đã commit**, vì git là bản sao lưu duy nhất | Cổng `pnpm check:meal` **tự đối chiếu từng file với bản trong git** và fail nếu bất kỳ trường nào khác bị sửa. PM **không** phải review từng dòng diff — máy làm việc đó. PM chỉ duyệt **nội dung phân loại** ở cổng W4-9 |
| **[Mới 2026-09-11] Phán đoán ngữ nghĩa hàng loạt** (món này ăn no được không) | L2 | **Người quyết ở mức CHÍNH SÁCH, AI làm ở mức từng món** | AI gán từng món + ghi lý do vào dữ liệu để soi lại được | PM **không** duyệt 197 món. AI khoanh vùng chỗ dữ liệu tự mâu thuẫn (`scripts/review-meal.mjs`) → PM chỉ đọc phần đó và quyết **chính sách**, không quyết từng món. Ở W4-9, 23 món đáng ngờ quy về đúng **3 quyết định** |
| Cắt scope (chuyển Phương án A→B theo checkpoint R1) | L2 | **Người quyết, AI đề xuất** | AI có thể nhắc khi tới hạn checkpoint, đề xuất phương án | PM là người quyết định cuối, không tự động hoá quyết định này dù đã có "tự động" trong câu chữ ở EST-LF.md — chữ "tự động" ở đó nghĩa là "không cần bàn lại từ đầu", không phải "AI tự quyết" |

---

> **Cập nhật 2026-09-11 — bài học uỷ quyền rút ra từ US-18:** khi giao việc **phán đoán
> hàng loạt** cho AI, thứ PM cần duyệt **không phải kết quả từng món** mà là **chính sách
> đứng sau**. Bắt PM đọc 197 món là biến cổng duyệt thành nghi thức — sẽ bị đọc lướt, đúng
> kiểu rubber-stamping ở R3. Cách làm đúng: AI khoanh vùng chỗ đáng ngờ, PM quyết chính
> sách, rồi áp chính sách bằng **code** chứ không sửa dữ liệu cho vừa.
>
> **Cập nhật 2026-09-06:** xem `DEVBOOK.md` **Phần B** để biết mức L nào đã được
> áp dụng thật, cổng nào fail-closed (và cổng nào fail-open có chủ đích), cùng các
> hard-stop đã gặp — đó là bằng chứng bắt buộc theo §8.3 mục 2.

## 🔒 Cổng hiểu — bước [6] — **ĐÃ ĐÓNG (2026-08-26)**

1. PM giải thích đúng: `.env.local` chứa secret, để A thì rủi ro commit lộ
   key hoặc AI tự điền giá trị sai mà PM không phát hiện ngay — đúng lý do
   phải A+.
2. PM chỉ ra bảng thiếu dòng QA/kiểm thử. Sau khi tao kiểm tra lại, đúng là
   **thiếu hẳn**, không phải "xếp nhầm xuống A" — đã bổ sung dòng QA với gate
   bắt buộc PM tự test lại, không tin AI tự báo "PASS". Tinh thần đề xuất của
   PM (không để AI tự tuyên bố xong) được giữ nguyên dù cách gọi tên khác.

Cổng đã đóng → bước [7] Definition of Ready được phép bắt đầu.
