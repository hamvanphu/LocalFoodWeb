# [0] SCOPE — Local Food

> Bước [0] Capstone Playbook: chốt phạm vi trước khi thiết kế. Artefact này thay thế cho phần "chốt miệng" đã làm sai quy trình ở phiên trước — viết lại đầy đủ để có Cổng hiểu thật.

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
| 4 | Nguồn nội dung món ăn (mô tả, công thức) là do AI biên soạn dựa trên research công khai, hay cần người có chuyên môn ẩm thực kiểm duyệt? | Giả định: AI research + biên soạn, PM (mày) kiểm duyệt tính chính xác trước khi công bố — đây chính là chỗ "Cổng hiểu" áp dụng, không phải rubber-stamp nội dung AI viết. |
| 5 | Ranh giới hành chính dùng bản đồ trước hay sau sáp nhập 2025? | **Đã chốt (đề bài):** trước sáp nhập, 63 tỉnh. |
| 6 | Có cần tài khoản người dùng (đăng nhập, lưu wishlist theo tài khoản) cho MVP không? | Giả định: KHÔNG — wishlist (nếu làm) dùng localStorage ẩn danh, không backend auth. |
| 7 | Ảnh món ăn: chấp nhận ảnh free-license thật (không phải ảnh AI-gen, không phải ảnh tự chụp) cho MVP? | **Đã chốt (phiên trước):** có, Wikimedia/Unsplash/Pexels, ghi attribution. |
| 8 | Có ràng buộc thời gian/deadline nộp bài (viva) không? | **Chưa rõ — cần mày trả lời.** Ảnh hưởng trực tiếp tới việc có kịp làm đủ 63 tỉnh hay dừng ở MVP 8 tỉnh khi nộp bài. |
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

## Việc cần mày trả lời trước khi tao viết SPEC (câu hỏi 8 ở trên)

Có deadline/mốc thời gian cụ thể (ngày nộp bài, ngày viva) không? Nếu có,
cho tao biết ngày — nó quyết định việc EST-LF.md (bước [5]) có khả thi làm
đủ 63 tỉnh hay phải dừng ở MVP khi nộp.

---

## 🔒 Cổng hiểu — bước [0]

Trước khi tao viết `SPEC-LF.md` (bước [1]), mày cần đóng cổng này **bằng
lời của mày**, không phải chọn nút:

1. **MVP này CỐ TÌNH bỏ cái gì, vì sao bỏ được?** (nhìn mục Out of scope ở
   trên, giải thích lại theo cách hiểu của mày, không copy nguyên văn).
2. **Chỉ ra ≥1 giả định ở bảng 10 câu hỏi mà mày KHÔNG đồng ý**, hoặc muốn
   sửa lại cho đúng ý đồ thật của mày (nếu mày đồng ý hết với tất cả giả
   định thì đó là dấu hiệu đáng ngờ — Coach sẽ hỏi lại, nên hãy soi kỹ).

Chưa qua cổng này thì bước [1] SPEC chưa được bắt đầu.
