# [2] Module Map & phân tầng — Local Food

> Input: `SPEC-LF.md` (đã đóng Cổng hiểu bước [1], có NFR "UI wow" chính thức).

## Nguyên tắc xếp tầng

Móng-ẩn (Layer 0) = thứ **mọi module bề mặt đều phụ thuộc vào**, sai/thiếu ở
đây thì sửa lại tốn công gấp nhiều lần so với sửa 1 module bề mặt riêng lẻ.
Sau phản hồi "UI lỗi thời" của PM, tao xếp **hệ thống thiết kế (design
system)** vào Layer 0 — không phải bề mặt — vì nếu làm nội dung 6 tỉnh còn
lại trước rồi mới "làm đẹp UI" thì phải sửa lại UI ở tất cả các trang đã có
dữ liệu, đúng kiểu bẫy "xây bề mặt đẹp trên nền chưa xong" mà Playbook cảnh
báo.

## Bảng module

| Module | Tầng | Hiện trạng | Vì sao ở tầng này |
|---|---|---|---|
| **Data schema & loader** (`lib/types.ts`, `lib/provinces.ts`) | Layer 0 | ✅ Đã có, ổn | Mọi trang đều đọc qua đây; đổi schema sau này ảnh hưởng toàn bộ 8+ tỉnh. |
| **Map data layer** (`lib/geo.ts`, GeoJSON, centroids) | Layer 0 | ✅ Đã có, ổn | Bản đồ là tính năng lõi của đề bài, mọi tỉnh mới đều cần centroid đúng. |
| **Routing** (App Router: `/`, `/provinces/[slug]`) | Layer 0 | ✅ Đã có, ổn | Cấu trúc URL ảnh hưởng SEO + cách mở rộng sau này (vd `/dishes/[slug]` nếu cần). |
| **Design system** (palette, typography, icon set, spacing, component gốc: Button/Card/Toolbar, motion primitives) | **Layer 0 — NÂNG TẦNG sau feedback PM** | ⚠️ Có palette/font cơ bản nhưng PM đánh giá "lỗi thời" — **chưa đạt**, cần làm lại nghiêm túc | Nếu để bề mặt (dish card, map toolbar, 404 page...) mỗi cái tự bịa style riêng thì không nhất quán và phải sửa lại nhiều lần. Phải chốt xong bộ này trước khi build thêm bề mặt mới. |
| **Ảnh & fallback** — component `ImageWithFallback` | Layer 0 *(là 1 primitive của Design System, không phải module riêng)* | ✅ Khung component đã có | Là 1 phần của bộ component gốc trong Design System (giống Button/Card), không tách riêng. |
| ~~Xử lý lỗi tải ảnh runtime (GAP-01)~~ **→ sửa tầng sau Cổng hiểu bước [2]** | **Bề mặt** *(PM bác đúng)* | ❌ Chưa làm | Chỉ ảnh hưởng UX cục bộ 1 component khi ảnh lỗi, không có module nào khác phải chờ nó — không nên đặt ngang hàng data schema/routing. Làm sau Design System, cùng đợt polish bề mặt. |
| Bản đồ tương tác (bubble, hover popup, **toolbar/icon riêng** thay vì control mặc định MapLibre) | Bề mặt | ⚠️ Có chức năng cơ bản, chưa có toolbar/icon theo yêu cầu "wow" | Phụ thuộc Design System xong mới làm đẹp được, tránh làm 2 lần. |
| Trang chi tiết tỉnh (dish card, recipe, cách ăn) | Bề mặt | ⚠️ Có chức năng, UI cơ bản (PM chê lỗi thời) | Cùng lý do — chờ Design System. |
| Trang chủ (bản đồ + browse grid) | Bề mặt | ⚠️ Có chức năng, UI cơ bản | Cùng lý do. |
| Trang 404 tuỳ chỉnh | Bề mặt | ❌ Chưa có (đang dùng mặc định Next.js) | Nhỏ, làm sau Design System, trước khi nộp bài. |
| Nội dung 6 tỉnh MVP còn lại (data entry) | Bề mặt (nội dung) | ❌ Chưa làm | Nên làm **sau** khi Design System + component bề mặt (DishCard, ProvinceHero...) đã đẹp, để không phải tô lại 8 tỉnh 2 lần. |
| Wishlist / filter khẩu vị / quiz | Bề mặt (phase-2) | ❌ Ngoài MVP | Ngoài phạm vi 2 tuần theo SCOPE. |

## Scope MVP (nhắc lại, khớp SCOPE-LF.md)

8 tỉnh: Hà Nội, Hải Phòng, Thừa Thiên Huế, Quảng Nam, Khánh Hòa, TP.HCM, Cần
Thơ, An Giang. Kiến trúc module ở trên không đổi khi mở rộng ra 63 tỉnh —
chỉ thêm file dữ liệu.

## Lát cắt dọc mỏng tiếp theo (sau khi qua Cổng hiểu bước [2])

Không code lại toàn bộ ngay. Thứ tự đề xuất cho bước [8] BUILD (sẽ chốt kỹ ở
WBS bước [4]):

1. Làm lại **Design System** (Layer 0) trên chính 2 tỉnh walking skeleton đã
   có — không phải trang trắng mới, mà nâng cấp `globals.css`, thêm
   icon/toolbar cho map, thêm motion (Framer Motion đã cài sẵn nhưng chưa
   dùng), làm custom 404.
2. Verify lại trên Hà Nội + Huế rằng "wow" đạt yêu cầu (PM tự đánh giá) —
   đây là 1 Cổng hiểu con trước khi nhân rộng.
3. Mới nhân rộng ra 6 tỉnh MVP còn lại bằng component/style đã chốt.

---

## 🔒 Cổng hiểu — bước [2] — **ĐÃ ĐÓNG (2026-08-26)**

1. PM giải thích đúng: Design System là móng bắt buộc, thiếu nó thì bề mặt
   chỉ là "mảnh ghép rời rạc", sửa lại sau sẽ tốn công gấp bội.
2. PM bác đúng: gộp "Ảnh & fallback" (cả component lẫn việc xử lý lỗi
   runtime) vào Layer 0 làm loãng trọng tâm. Đã tách lại: component
   `ImageWithFallback` là 1 primitive của Design System (đúng chỗ), nhưng
   việc sửa GAP-01 (lỗi tải ảnh runtime) là việc bề mặt, không chặn module
   nào khác — đã chuyển tầng.

Cổng đã đóng → bước [3] Architecture được phép bắt đầu.
