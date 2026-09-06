# [9] Test & Gate — Checklist QA (W1-11) — Local Food

> Cổng mặc-định-đóng: không tự test = coi như chưa xong. **Tao (AI) không được tự tuyên bố PASS** — mày tự tay làm từng bước, tick kết quả thật vào cột cuối. Cổng hiểu bước [6] đã chốt điều này.
> Dev server: `http://localhost:3000` (chạy `pnpm dev` nếu chưa có).

---

## US-01 — Bản đồ hiện bubble ngay khi vào trang

| # | Bước làm | Kỳ vọng | PASS/FAIL |
|---|---|---|---|
| 1 | Mở `http://localhost:3000`, cuộn xuống khối bản đồ | Thấy **8 chấm đỏ** rải khắp Việt Nam (Bắc→Nam), không cần zoom tay | ☐ |
| 2 | Nhìn kỹ từng chấm | Mỗi chấm có nhãn tên món bên dưới (vd "Phở bò Hà Nội") | ☐ |

## US-02 — Zoom hiện thêm pin tỉnh

| # | Bước làm | Kỳ vọng | PASS/FAIL |
|---|---|---|---|
| 1 | Bấm nút **+** trên toolbar bản đồ liên tục ~5-6 lần | Chấm đỏ to biến mất dần, thay bằng **chấm vàng nhỏ** (pin tỉnh) | ☐ |
| 2 | Bấm nút **compass** (icon la bàn) trên toolbar | Bản đồ bay về đúng vị trí/zoom ban đầu (toàn cảnh Việt Nam) | ☐ |

## US-03 — Bấm bubble/pin vào đúng trang tỉnh

| # | Bước làm | Kỳ vọng | PASS/FAIL |
|---|---|---|---|
| 1 | Bấm vào chấm đỏ ở khu vực Hà Nội | Chuyển sang `/provinces/ha-noi`, thấy tên món, mô tả, nguyên liệu, cách làm, cách ăn | ☐ |
| 2 | Lặp lại với **1 tỉnh miền Trung** (vd Quảng Nam) và **1 tỉnh miền Nam** (vd Cần Thơ) | Cả 2 đều vào đúng trang, đủ nội dung | ☐ |

## US-04 — Ảnh thật hoặc placeholder, không vỡ layout

| # | Bước làm | Kỳ vọng | PASS/FAIL |
|---|---|---|---|
| 1 | Vào `/provinces/hai-phong`, bấm mở món **"Ốc Hải Phòng"** (món không có ảnh thật) | Hiện **placeholder màu gradient** + tên món, KHÔNG phải ô trống hay icon vỡ | ☐ |
| 2 | Vào `/provinces/an-giang`, kiểm tra món **"Bún cá Châu Đốc"** (hero, không có ảnh) và **"Gỏi sầu đâu"** | Cả 2 đều có placeholder đẹp, không vỡ | ☐ |
| 3 | Vào `/provinces/ha-noi`, bấm ảnh món **"Phở bò Hà Nội"** (có ảnh thật) | Ảnh phóng to (lightbox), có ghi chú nguồn/license phía dưới | ☐ |

## US-05 — Danh sách tỉnh thay thế bản đồ

| # | Bước làm | Kỳ vọng | PASS/FAIL |
|---|---|---|---|
| 1 | Ở trang chủ, cuộn xuống dưới bản đồ | Thấy khối **"Tỉnh nổi bật"** với card có ảnh, bấm vào 1 card | ☐ |
| 2 | Bấm link **"Xem tất cả 8 tỉnh"** | Sang trang `/browse`, thấy đủ 8 tỉnh nhóm theo Miền Bắc/Trung/Nam | ☐ |
| 3 | Ở `/browse`, thử bấm 1 chip lọc (vd "Tết Trung Thu") | Hiện thông báo "chưa có tỉnh nào gắn dịp này" (đúng, vì data thật chưa có) | ☐ |

## US-06 — Quay lại bản đồ từ trang tỉnh

| # | Bước làm | Kỳ vọng | PASS/FAIL |
|---|---|---|---|
| 1 | Ở bất kỳ trang tỉnh nào, bấm link **"← Quay lại bản đồ"** | Về `/`, bản đồ tải lại bình thường, không lỗi | ☐ |

## US-07 — Responsive di động

| # | Bước làm | Kỳ vọng | PASS/FAIL |
|---|---|---|---|
| 1 | Mở DevTools (F12) → bật chế độ responsive → chọn khung ~375px (iPhone SE) | Trang chủ: không cuộn ngang, chữ đọc được, bản đồ vẫn thao tác được | ☐ |
| 2 | Ở khung 375px, mở 1 trang tỉnh, thử cả 2 chế độ **Tổng quan/Hành trình** | Lưới món tự co lại hợp lý, "Hành trình" cuộn ngang mượt bằng ngón tay (hoặc kéo chuột) | ☐ |

## US-08 — 404 khi slug không tồn tại

| # | Bước làm | Kỳ vọng | PASS/FAIL |
|---|---|---|---|
| 1 | Gõ thẳng `http://localhost:3000/provinces/khong-ton-tai` | Hiện trang 404 **tuỳ chỉnh** (icon bản đồ gạch chéo, nút "Về bản đồ ẩm thực"), không phải trang lỗi mặc định Next.js | ☐ |

## Kiểm tra thêm — GAP-01/GAP-02 (đã tự nhận trước, giờ xác nhận đã fix)

| # | Bước làm | Kỳ vọng | PASS/FAIL |
|---|---|---|---|
| 1 | Vào 1 trang tỉnh bất kỳ, để ý caption dưới ảnh thật | Có ghi rõ tên tác giả + loại license (vd "CC BY-SA 4.0") | ☐ |
| 2 | (Không bắt buộc, khó test tay) Ảnh lỗi tải lúc runtime → tự chuyển placeholder — đã sửa code ở `ImageWithFallback`, nếu có nghi ngờ báo lại | Không thấy icon ảnh vỡ khi duyệt bình thường | ☐ |

---

## 🔒 Cổng hiểu — W1-11

Sau khi tick xong bảng trên:
1. Nói lại **có bao nhiêu mục FAIL**, mục nào — nếu có FAIL thật, báo ngay, đừng tự sửa qua loa cho qua.
2. Nếu tất cả PASS: xác nhận rõ ràng "W1-11 PASS" để tao ghi vào `WBS-LF.md` và chuyển sang W1-11a (Accessibility audit).

---

## US-14 — Đánh giá & bình luận món ăn *(bổ sung 2026-09-06)*

> Bối cảnh: tính năng dùng Supabase (ARCH D3). **Rủi ro R11 (RLS)** phải được xác
> nhận trước khi coi là xong — mục 0 dưới đây là bắt buộc, không phải tuỳ chọn.

### 0. Cổng bảo mật — RLS *(làm trước, fail thì dừng, không test tiếp)*

| # | Bước làm | Kỳ vọng | PASS/FAIL |
|---|---|---|---|
| 0.1 | Supabase → SQL Editor chạy `select relrowsecurity from pg_class where relname='dish_reviews';` | Trả về `true` | ☐ |
| 0.2 | Chạy `select policyname, cmd from pg_policies where tablename='dish_reviews';` | Đúng **2 dòng**: 1 `SELECT`, 1 `INSERT`. Không có UPDATE/DELETE | ☐ |

*(Đã kiểm bằng script 2026-09-06: gửi review hợp lệ → 201; `status=hidden` → 401;
`rating=99` → 401; comment 600 ký tự → 401; DELETE cả bảng → 401; UPDATE → 401.)*

### 1. Luồng chính

| # | Bước làm | Kỳ vọng | PASS/FAIL |
|---|---|---|---|
| 1.1 | Mở 1 trang tỉnh, bấm vào 1 món để mở panel chi tiết, cuộn xuống cuối | Thấy khối **"Đánh giá món này"** | ☐ |
| 1.2 | Món chưa ai đánh giá | Hiện "Chưa có đánh giá nào cho món này — bạn là người đầu tiên nhé!", **không phải vùng trắng** | ☐ |
| 1.3 | Chọn 4 sao, nhập tên, nhập cảm nhận, bấm **Gửi đánh giá** | Hiện "Cảm ơn bạn đã đánh giá!" và review **xuất hiện ngay trong danh sách, không cần tải lại trang** | ☐ |
| 1.4 | Sau khi có ≥1 đánh giá, nhìn lên tiêu đề khối | Hiện số sao trung bình + "(N đánh giá)" | ☐ |
| 1.5 | **Mở cùng món đó trên thiết bị/trình duyệt khác** | Vẫn thấy đánh giá vừa gửi → chứng minh dữ liệu dùng chung, không phải localStorage | ☐ |

### 2. Trường hợp lỗi *(phần dễ bị bỏ qua nhất)*

| # | Bước làm | Kỳ vọng | PASS/FAIL |
|---|---|---|---|
| 2.1 | Không chọn sao, bấm Gửi | Chặn, báo "Hãy chọn số sao từ 1 đến 5." | ☐ |
| 2.2 | Chọn sao nhưng bỏ trống tên, bấm Gửi | Chặn, báo "Hãy nhập tên của bạn." | ☐ |
| 2.3 | Gửi 1 đánh giá rồi gửi tiếp ngay cho **cùng món** | Chặn, báo đợi một chút (rào chắn spam tối thiểu, RISK R10) | ☐ |
| 2.4 | Thử dán > 500 ký tự vào ô cảm nhận | Ô input tự chặn ở 500 (`maxLength`); bộ đếm hiện `500/500` | ☐ |

### 3. Không làm hỏng phần còn lại

| # | Bước làm | Kỳ vọng | PASS/FAIL |
|---|---|---|---|
| 3.1 | Xem lại toàn trang tỉnh | Tên món, mô tả, nguyên liệu, cách làm, cách ăn, nguồn tham chiếu **vẫn render như cũ** — nội dung món vẫn tĩnh (SSG) | ☐ |
| 3.2 | *(nếu muốn thử)* Đổi `NEXT_PUBLIC_SUPABASE_URL` thành giá trị sai rồi tải lại | Trang món **vẫn xem bình thường**, chỉ khối đánh giá báo lỗi — Supabase chết không kéo sập cả trang | ☐ |

### 4. Việc dọn dẹp

| # | Bước làm | Kỳ vọng | PASS/FAIL |
|---|---|---|---|
| 4.1 | Supabase → Table Editor → `dish_reviews`, xoá các dòng có `province_slug = '__test__'` và các review kiểm thử | Bảng sạch trước khi nộp bài. **Lưu ý:** phải xoá từ dashboard vì anon key **không có quyền DELETE** — đó là RLS đang làm đúng việc | ☐ |
