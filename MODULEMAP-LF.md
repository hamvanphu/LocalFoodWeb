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

## 🔄 Cập nhật hiện trạng — 2026-09-07

> **Vì sao có mục này:** đo KPI **c3 Freshness** (Knowledge Health) phát hiện bảng module
> ở trên **đã lỗi thời nghiêm trọng** — cột "Hiện trạng" vẫn mô tả tình trạng ngày
> 2026-08-26. Giữ nguyên bảng gốc làm lịch sử quyết định phân tầng (phần đó vẫn đúng),
> nhưng hiện trạng phải cập nhật lại đây.

| Module | Hiện trạng ghi ở bảng trên | **Thực tế 2026-09-07** |
|---|---|---|
| Design system | ⚠️ "chưa đạt, cần làm lại nghiêm túc" | ✅ **Xong** — W1-9c PASS sau 2 vòng redesign |
| Ảnh & fallback (GAP-01) | ❌ "Chưa làm" | ✅ **Xong** từ W1-8; đã chứng minh giá trị trên production (OP-10) |
| Bản đồ tương tác | ⚠️ "chưa có toolbar theo yêu cầu wow" | ✅ **Xong** — `MapToolbar`, marker ảnh món ăn, 63 tỉnh hiện đồng thời |
| Trang chi tiết tỉnh | ⚠️ "UI cơ bản, PM chê lỗi thời" | ✅ **Xong** — `ProvinceDishExplorer` 2 chế độ + Sheet |
| Trang chủ | ⚠️ "UI cơ bản" | ✅ **Xong** — hero kinetic, bản đồ, tỉnh nổi bật |
| Trang 404 tuỳ chỉnh | ❌ "Chưa có, dùng mặc định Next.js" | ✅ **Xong** |
| Nội dung tỉnh | ❌ "Chưa làm 6 tỉnh MVP" | ✅ **63/63 tỉnh**, 197 món |
| Filter khẩu vị/mùa | ❌ "Ngoài MVP (phase-2)" | ✅ **Đã làm** — filter mùa/lễ hội (US-13). *Filter theo khẩu vị vẫn chưa* |
| Wishlist, quiz | ❌ "Ngoài MVP" | ❌ **Vẫn chưa** — đúng kế hoạch, phase-2 |

### Module PHÁT SINH sau bảng gốc — chưa từng được xếp tầng

| Module | Tầng | Vì sao | Trạng thái |
|---|---|---|---|
| **Tìm kiếm** (`components/search/SearchBar.tsx`, `lib/searchIndex.ts`) | Bề mặt | Đọc qua data loader Layer 0, không module nào phụ thuộc ngược lại | ✅ Xong (US-12) |
| **Đánh giá & báo lỗi nội dung** (`components/review/`, `lib/reviews.ts`, `supabase/`) | **Layer 0 mở rộng** — thêm **nguồn dữ liệu thứ hai** | Đây là lần đầu dự án có backend. Quyết định D3 trong `ARCH-LF.md` đảo một phần nguyên tắc "không backend". RLS là điều kiện bắt buộc (R11) | ✅ Xong (US-14, US-15) |
| **Dashboard telemetry** (`app/telemetry/`, `lib/telemetry.ts`, `data/telemetry.json`) | Bề mặt (nội bộ) | Không phục vụ người dùng cuối, phục vụ quản trị dự án. Đọc dữ liệu tĩnh riêng | ✅ Xong |
| **Cổng kiểm địa lý** (`scripts/check-geo.mjs`) | Layer 0 — **cổng chất lượng** | Chặn loại lỗi từng lọt qua mọi cổng khác (R13/OP-06) | ✅ Xong |
| **Lớp chủ quyền biển đảo** (`data/sovereignty.json`, `components/map/SovereigntyMarker.tsx`) | Layer 0 — dữ liệu bản đồ | Không phải điểm ẩm thực. Basemap chỉ ghi nhãn quốc tế và không thể hiện chủ quyền, nên đây là lớp dữ liệu độc lập, hiện ở **mọi** mức zoom | ✅ Xong |

### Bổ sung 2026-09-09 — Module đa ngôn ngữ (US-16)

| Module | Tầng | Vì sao | Trạng thái |
|---|---|---|---|
| **`lib/locale.ts`** — hằng số ngôn ngữ + `localePath()` | **Layer 0**, dùng chung server/client | Mọi module sinh đường dẫn đều phụ thuộc nó. **Bắt buộc không được chứa API của Node**: khi `localePath` còn nằm chung file với hàm đọc `node:fs`, 16 client component kéo luôn `node:fs` vào bundle và **build đổ hoàn toàn** | ✅ Xong |
| **`lib/i18n.ts`** — nạp & ghép bản dịch | **Layer 0, chỉ server** | Đọc `data/i18n/en/*.json` bằng `node:fs`, ghép lên dữ liệu gốc lúc render. Fallback **theo từng trường**: thiếu bản dịch ở đâu thì giữ tiếng Việt đúng chỗ đó | ✅ Xong |
| **`lib/ui-strings.ts`** — ~90 chuỗi giao diện 2 ngôn ngữ | Layer 0, dùng chung | Object phẳng, không kéo thư viện i18n (bản đồ đã là phần nặng nhất của bundle — R12) | ✅ Xong |
| **`lib/useLocale.ts`** — suy ngôn ngữ từ URL | Bề mặt (client) | Header/footer/404 nằm trong root layout dùng chung, mà layout chạy ở server thì không biết pathname. Chỉ mảnh phụ thuộc ngôn ngữ mới thành client | ✅ Xong |
| **`components/pages/*View.tsx`** — thân trang dùng chung | Bề mặt | Để `/x` và `/en/x` không phải chép lại nhau — thứ chắc chắn sẽ lệch sau vài lần sửa. Route chỉ khai báo `locale` + metadata | ✅ Xong |
| **`data/i18n/en/*.json`** — 63 file bản dịch | Layer 0 — dữ liệu | Tách khỏi `data/provinces/` để 10 agent dịch song song **không thể** làm hỏng bản tiếng Việt (đã kiểm, không có bản sao) | ✅ 63/63 |
| **Cổng kiểm bản dịch** (`scripts/check-i18n.mjs`) | Layer 0 — **cổng chất lượng** | 6/10 agent bị ngắt giữa chừng ⇒ không thể tin "có file là xong". Đối chiếu số phần tử `keyIngredients`/`prepOutline` với bản gốc | ✅ Xong |

### Bổ sung 2026-09-11 — Module gợi ý món (US-18)

| Module | Tầng | Vì sao | Trạng thái |
|---|---|---|---|
| **`mealTypes`** trong `data/provinces/*.json` + zod | **Layer 0** — dữ liệu & hợp đồng | Thuộc tính nội tại của món, **gán tay** vì là phán đoán ngữ nghĩa (`ARCH-LF.md` D4). Nằm TRONG file gốc chứ không tách ra — tiêu chí tách file là *"có nguy cơ ghi đè hỏng bản gốc không"*, không phải *"dữ liệu mới thì tách"* | ✅ 197/197 |
| **`lib/recommend.ts`** — bể gợi ý, suy thuộc tính, bốc cặp | **Layer 0** — hàm thuần | Không phụ thuộc React nên chạy được cả hai phía và test được không cần trình duyệt. Chứa **chính sách của tính năng** (bữa trưa không nhận món nhậu) — cố ý để ở code chứ không bẻ dữ liệu | ✅ Xong |
| **Cổng `pnpm check:meal`** | Layer 0 — **cổng chất lượng** | Việc chính không phải kiểm đủ trường (zod làm rồi) mà là **đối chiếu từng file với git** để bắt agent sửa nhầm trường khác | ✅ Xong |
| **`scripts/review-meal.mjs`** | Công cụ phán xử (không thuộc sản phẩm) | Khoanh vùng chỗ dữ liệu tự mâu thuẫn với nhãn → 23/197 món cần soi, thay vì bắt người đọc hết | ✅ Xong |
| **`app/goi-y/`, `components/recommend/`** | Bề mặt | Trang bốc 2 món; seed trên query string để không lệch hydration và chia sẻ được | ✅ Xong |

**Điều đáng ghi nhất:** PM **đổi yêu cầu giữa chừng** (12 món + bộ lọc → 2 món kèm công
thức) mà **chỉ phải sửa tầng Bề mặt** — W4-1→W4-4 (dữ liệu, cổng, logic) không đụng một
dòng. Đây là lần thứ hai "móng trước, bề mặt sau" trả công cụ thể, sau lần mở rộng 8→63
tỉnh không phải sửa code.

**Nhận xét:** phân tầng cũ **không phải sửa** khi thêm ngôn ngữ thứ hai — `lib/provinces.ts`
và schema dữ liệu giữ nguyên, bản dịch chỉ là một lớp ghép lên trên lúc đọc. Điều phải học
lại là một ranh giới **mới**: Layer 0 giờ có phần **chỉ chạy được ở server**, và ranh giới
đó phải là ranh giới **file** thì mới không vượt qua nhầm được.

**Nhận xét về phân tầng:** nguyên tắc xếp tầng ở bảng gốc **vẫn đúng** sau khi mở rộng
— data schema/loader, map data, routing vẫn là Layer 0 và không phải sửa lại khi đi từ
8 lên 63 tỉnh. Điều đó xác nhận quyết định "móng trước, bề mặt sau" ở bước [2] là đúng.
Bổ sung duy nhất là **Supabase trở thành nguồn dữ liệu thứ hai ở Layer 0**, có kiểm
soát riêng (RLS) vì nó ghi được từ phía client.

---

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
