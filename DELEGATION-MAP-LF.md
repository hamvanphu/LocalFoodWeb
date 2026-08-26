# [6] Delegation Map — Local Food

> Input: `RISK-LF.md`. Leash A ≈ L3 (tự thực thi, PM spot-check, tới bản nháp) · Leash A+ ≈ L4 (chạm rủi ro cao, bắt buộc cổng bảo mật + PM duyệt trước release).

| Loại việc | Mức L | Leash | AI được làm tới đâu | PM phải làm gì |
|---|---|---|---|---|
| Code UI/component (Design System, DishCard, map toolbar, motion) | L3 | **A** | Tự viết/sửa code, chạy `pnpm build`/`pnpm dev` để tự kiểm tra | Spot-check + Cổng hiểu ở mốc W1-9 (đánh giá "wow") |
| Viết nội dung món ăn (mô tả, công thức, cách ăn) | L2-L3 | **A, kèm Content Gate riêng** | AI viết bản nháp + tự tìm `sourceRef` | **Bắt buộc** PM đọc + xác nhận nguồn trước khi coi 1 dish là "xong" (không phải chỉ đọc lướt) — đây là gate về nội dung, không phải về bảo mật, nên không gọi là A+ nhưng có sức nặng tương đương |
| Tìm/gắn ảnh Wikimedia + attribution/license | L3 | **A** | Tự tìm, tự gắn | PM spot-check vài ảnh xem đúng món không, license đúng loại không |
| Sửa/xoá file dữ liệu đã có (`data/provinces/*.json` hiện tại) | L3 | **A** | Tự sửa qua Edit tool | PM biết trước qua git diff/commit message, không cần duyệt từng dòng |
| Đọc/ghi `.env.local`, xử lý API key | L4 | **A+** | AI đọc biến môi trường qua code, **KHÔNG tự điền giá trị key thật, KHÔNG in giá trị key ra output** | PM tự đăng ký + dán key, AI chỉ code phần đọc biến |
| `git commit` (local, chưa có remote) | L3 | **A** | Tự commit sau mỗi bước hoàn thành, message rõ ràng | PM xem lịch sử qua `git log` khi cần |
| `git push` / tạo remote / deploy lên Vercel | L4 | **A+ — CHƯA CẤP hành động, chỉ chuẩn bị** | AI **không tự push/deploy** dù có remote hay chưa (luật cứng #1) | PM tự quyết khi nào push/deploy, tự thực hiện hoặc ra lệnh rõ ràng từng lần |
| Cắt scope (chuyển Phương án A→B theo checkpoint R1) | L2 | **Người quyết, AI đề xuất** | AI có thể nhắc khi tới hạn checkpoint, đề xuất phương án | PM là người quyết định cuối, không tự động hoá quyết định này dù đã có "tự động" trong câu chữ ở EST-LF.md — chữ "tự động" ở đó nghĩa là "không cần bàn lại từ đầu", không phải "AI tự quyết" |

---

## 🔒 Cổng hiểu — bước [6]

Trước khi tao viết `DOR-LF.md` (bước [7]), mày cần:

1. **Giải thích vì sao "đọc/ghi `.env.local`" phải để A+ chứ không A** —
   chuyện gì xảy ra nếu để A (AI tự thực thi không cần hỏi)?
2. **Bắt ≥1 việc trong bảng mà mày nghĩ tao xếp nhầm xuống Leash A** trong
   khi thực ra đụng dữ liệu nhạy/rủi ro cao hơn mức đó — hoặc xác nhận bảng
   ổn nếu soi kỹ không thấy vấn đề.

Chưa qua cổng này thì bước [7] Definition of Ready chưa bắt đầu.
