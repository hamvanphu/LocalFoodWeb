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
