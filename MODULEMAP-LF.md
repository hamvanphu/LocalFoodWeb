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
| **Ảnh & fallback** (`ImageWithFallback`, xử lý lỗi tải ảnh runtime) | Layer 0 | ⚠️ Thiếu GAP-01 (chưa xử lý lỗi tải runtime) | Mọi dish card, mọi tỉnh đều dùng chung component này — sửa 1 lần, lợi toàn bộ. |
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

## 🔒 Cổng hiểu — bước [2]

Trước khi tao viết `ARCH-LF.md` (bước [3]), mày cần:

1. **Chỉ vào bảng module, nói: móng nào PHẢI xong trước, vì sao bề mặt
   không "wow" được nếu thiếu nó** — theo cách hiểu của mày, không copy lại
   bảng trên.
2. **Bác ≥1 chỗ tao xếp sai tầng** (nếu có) — ví dụ: mày có nghĩ "Ảnh &
   fallback" nên là bề mặt chứ không phải Layer 0? Hay có module nào tao xếp
   Layer 0 nhưng thực ra chưa cần thiết ngay?

Chưa qua cổng này thì bước [3] Architecture chưa bắt đầu.
