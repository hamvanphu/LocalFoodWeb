# [0] SCOPE — Local Food

> Bước [0] Capstone Playbook: chốt phạm vi trước khi thiết kế. Artefact này thay thế cho phần "chốt miệng" đã làm sai quy trình ở phiên trước — viết lại đầy đủ để có Cổng hiểu thật.

> ## 🧊 Đây là bản ĐÓNG BĂNG — đọc đúng cách
>
> *(khai báo bổ sung 2026-09-09, sau rà soát T2/P2)*
>
> File này ghi lại **phạm vi đã quyết ngày 2026-08-26**, và **cố ý không cập nhật** theo
> sản phẩm. Nó là **lịch sử quyết định**, không phải mô tả hiện trạng.
>
> Nghĩa là: mục *Out of scope* bên dưới đọc là **"đã quyết bỏ tại thời điểm đó"**, KHÔNG
> phải *"hiện đang không có"*. Thực tế **3 mục trong đó về sau đã được PM yêu cầu làm và
> đã ship**:
>
> | Ghi trong file này (26/08) | Thực tế hôm nay | Quyết định đảo ở đâu |
> |---|---|---|
> | Đa ngôn ngữ — out of scope | ✅ Song ngữ Việt–Anh, 63/63 tỉnh | `SPEC-LF.md` US-16 (09/09) |
> | Nội dung người dùng đóng góp — out of scope | ✅ Review/Rating + Báo nội dung sai | `SPEC-LF.md` US-14, US-15 (06/09) |
> | D2: "không database/backend, dữ liệu tĩnh JSON" | ✅ Supabase chạy production | `ARCH-LF.md` **D3** |
> | D1: 8 tỉnh MVP | ✅ 63/63 tỉnh | `WEEKLY-LF.md` mục 2 |
>
> **Muốn biết phạm vi hiện tại thì đọc `SPEC-LF.md`, không đọc file này.**
>
> Vì sao giữ nguyên thay vì sửa: đối chiếu *"đã định làm gì"* với *"cuối cùng làm gì"* là
> dữ liệu thật của dự án — sửa file này là xoá mất bằng chứng scope đã trôi 4 lần. Quy ước
> "artefact đóng băng có chủ đích" áp cho `SCOPE-LF.md`, `EST-LF.md`, `ARCH-LF.md`, đã ghi
> ở `KNOWLEDGE-HEALTH-LF.md` khi đo KPI c3.

## Problem statement

Người dùng Việt Nam (và du khách) muốn khám phá món ăn đặc trưng theo từng
tỉnh thành nhưng thông tin hiện rải rác trên nhiều trang blog/báo, không có
một nơi tổng hợp trực quan theo địa lý, kèm công thức và cách thưởng thức
chuẩn vị. Local Food giải quyết việc này bằng một bản đồ tương tác + trang
chi tiết món ăn cho từng tỉnh trong 63 tỉnh thành (trước sáp nhập 2025).

## 10 câu hỏi làm rõ scope + giả định mặc định

| # | Câu hỏi | Giả định mặc định (nếu chưa trả lời) |
|---|---|---|
| 1 | MVP có bắt buộc đủ 63 tỉnh ngay, hay được phép ra mắt với tập con rồi mở rộng? | **Đã trả lời (phiên trước):** tập con 8 tỉnh trước, mở rộng dần — nhưng phiên trước KHÔNG ép mày xác nhận lại bằng Cổng hiểu, nay cần xác nhận lại. |
| 2 | Ai là người dùng chính: khách du lịch nước ngoài, người Việt tò mò văn hoá vùng miền, hay người thực sự muốn nấu ăn theo công thức? | Giả định: cả 3, nhưng ưu tiên "khám phá + nấu thử" hơn là hướng dẫn du lịch chi tiết (lịch trình, giá vé...). |
| 3 | Trang có cần đa ngôn ngữ (Anh/Việt) không, hay chỉ tiếng Việt cho MVP? | Giả định: chỉ tiếng Việt cho MVP, đa ngôn ngữ để phase sau. |
| 4 | Nguồn nội dung món ăn (mô tả, công thức) là do AI biên soạn dựa trên research công khai, hay cần người có chuyên môn ẩm thực kiểm duyệt? | **PM sửa lại (Cổng hiểu bước [0]):** AI có thể viết bản nháp, nhưng **bắt buộc đối chiếu với ít nhất 1 nguồn tham chiếu chính thống** (Wikipedia tiếng Việt, báo/trang ẩm thực uy tín, tài liệu du lịch chính thức...) cho mỗi món trước khi công bố — không chỉ dựa vào AI "nhớ" rồi PM duyệt qua loa. Rủi ro nếu bỏ qua: sai lệch văn hoá/công thức, biến site thành "copy-paste thiếu chuẩn mực". |
| 5 | Ranh giới hành chính dùng bản đồ trước hay sau sáp nhập 2025? | **Đã chốt (đề bài):** trước sáp nhập, 63 tỉnh. |
| 6 | Có cần tài khoản người dùng (đăng nhập, lưu wishlist theo tài khoản) cho MVP không? | Giả định: KHÔNG — wishlist (nếu làm) dùng localStorage ẩn danh, không backend auth. |
| 7 | Ảnh món ăn: chấp nhận ảnh free-license thật (không phải ảnh AI-gen, không phải ảnh tự chụp) cho MVP? | **Đã chốt (phiên trước):** có, Wikimedia/Unsplash/Pexels, ghi attribution. |
| 8 | Có ràng buộc thời gian/deadline nộp bài (viva) không? | **Đã chốt (Cổng hiểu bước [0]): ~2 tuần kể từ 2026-08-26, tức hạn khoảng 2026-09-09.** Deadline gấp → tác động trực tiếp tới bước [5] Estimation: khả năng cao phải dừng ở MVP 8 tỉnh khi nộp, 55 tỉnh còn lại là roadmap sau nộp bài, không phải yêu cầu bắt buộc trước hạn. |
| 9 | Site có cần responsive/mobile-first ngay từ MVP, hay desktop trước? | Giả định: responsive ngay từ đầu (mobile không được coi là "để sau") vì đối tượng dùng thực tế duyệt bằng điện thoại nhiều hơn desktop cho loại nội dung này. |
| 10 | Có giới hạn ngân sách cho dịch vụ trả phí (MapTiler vượt free tier, hosting...) không? | Giả định: KHÔNG dùng dịch vụ trả phí — mọi lựa chọn (MapTiler free tier, Vercel free tier khi deploy) phải nằm trong free tier. |

## Quyết định nền (D1/D2)

- **D1 — Phạm vi dữ liệu MVP:** website build cho **8 tỉnh đại diện 3 miền**
  trước (Hà Nội, Hải Phòng, Thừa Thiên Huế, Quảng Nam, Khánh Hòa, TP.HCM, Cần
  Thơ, An Giang), kiến trúc phải cho phép mở rộng ra đủ 63 tỉnh chỉ bằng cách
  thêm file dữ liệu, không sửa code. 55 tỉnh còn lại là backlog rõ ràng, không
  phải "quên".
- **D2 — Tier kỹ thuật:** Tier 1 nhưng gọn — code chạy thật (Next.js), không
  database/backend, dữ liệu tĩnh JSON. Lý do: đủ để chứng minh năng lực kỹ
  thuật (yêu cầu Tier 1) mà không tốn effort vận hành server/DB không cần
  thiết cho quy mô nội dung này.

## Out of scope (rõ ràng, không phải quên)

- Đăng nhập/tài khoản người dùng, cá nhân hoá theo tài khoản.
- Đa ngôn ngữ (chỉ tiếng Việt cho MVP).
- Đặt chỗ/đặt tour/thương mại điện tử (bán đồ ăn, tour du lịch...).
- Nội dung do người dùng đóng góp (review, upload ảnh) — chỉ nội dung do
  PM/AI biên soạn.
- Ứng dụng di động riêng (chỉ web responsive).

## Ràng buộc deadline (chốt 2026-08-26)

**Hạn nộp bài ~2 tuần, tức khoảng 2026-09-09.** Đây là ràng buộc cứng chi
phối toàn bộ các bước tiếp theo:
- Bước [5] Estimation phải tính effort thực tế cho 8 tỉnh MVP + polish UI +
  test, so với quỹ thời gian 2 tuần — nếu vượt, cắt scope (ví dụ giảm số
  tỉnh MVP hoặc giảm tính năng phase-2 như wishlist/quiz) chứ không cắt chất
  lượng nền tảng (map, routing, data schema).
- Các bước [0]-[7] (giấy tờ) cần làm **gọn, đúng trọng tâm**, không phình to
  — mục tiêu là PM hiểu và phán xử được, không phải viết tài liệu dài cho
  đẹp hồ sơ.
- 55 tỉnh còn lại ngoài MVP là backlog sau khi nộp bài, không phải điều
  kiện để qua bước nào trong 2 tuần này.

---

## 🔒 Cổng hiểu — bước [0] — **ĐÃ ĐÓNG (2026-08-26)**

PM đã trả lời bằng lời của mình (không phải chọn nút), cụ thể:

1. **MVP cố tình bỏ gì, vì sao bỏ được** — PM giải thích đúng tinh thần "làm
   nhỏ nhưng chắc": bỏ đăng nhập/tài khoản (không cần quản lý người dùng ở
   giai đoạn khám phá), bỏ đa ngôn ngữ (đối tượng chính là người Việt), bỏ
   đặt tour/thương mại điện tử (trọng tâm là văn hoá ẩm thực, không phải
   dịch vụ du lịch), bỏ nội dung do người dùng đóng góp (kiểm soát chất
   lượng), bỏ app riêng (web responsive đã đủ).
2. **Bắt lỗi AI thật** — giả định #4 (AI biên soạn + PM duyệt qua loa) bị PM
   bác bỏ, yêu cầu sửa thành bắt buộc đối chiếu nguồn tham chiếu chính thống
   cho từng món. Đã cập nhật vào bảng 10 câu hỏi ở trên.
3. **Deadline** — chốt ~2 tuần (2026-09-09), đã ghi ở mục Ràng buộc deadline.

**Hệ quả cho bước [1] SPEC:** mỗi dish entry trong SPEC/nội dung sau này
phải có ít nhất 1 nguồn tham chiếu (không chỉ Wikimedia cho ảnh, mà cả cho
nội dung mô tả/công thức) — áp dụng cho 8 tỉnh MVP, và cần rà soát lại 2
tỉnh walking skeleton (Hà Nội, Huế) đã viết ở phiên trước vì lúc đó chưa có
yêu cầu này.

Cổng đã đóng → bước [1] SPEC được phép bắt đầu.
