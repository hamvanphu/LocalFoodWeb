# [4] WBS + Rolling-Wave — Local Food

> Input: `ARCH-LF.md` (đã đóng Cổng hiểu bước [3]). Deadline ~2026-09-09 (từ `SCOPE-LF.md`).

## Wave 1 — làm ngay, bẻ tới task (0.5–2 ngày/task)

| # | Task | Output | Phụ thuộc | Ước lượng thô |
|---|---|---|---|---|
| W1-1 | Thêm field `sourceRef` vào `Province.summary` và `Dish` trong `lib/types.ts`; cập nhật `lib/provinces.ts` nếu cần | Schema mới, `pnpm build` báo lỗi nếu data cũ thiếu field | — | 0.5 ngày |
| W1-2 | Rà + bổ sung `sourceRef` cho nội dung Hà Nội + Huế đã viết (đối chiếu Wikipedia tiếng Việt/nguồn chính thống, sửa nếu phát hiện sai lệch) | `data/provinces/ha-noi.json`, `thua-thien-hue.json` cập nhật | W1-1 | 1 ngày |
| W1-3 | Mở rộng Design System token trong Tailwind: spacing scale, radius scale, shadow scale, typography scale (không chỉ màu như hiện tại) | `app/globals.css`/tailwind config cập nhật | — | 0.5–1 ngày |
| W1-4 | Xây component gốc dùng token mới: Button, Toolbar base, Badge | `components/ui/*` mới | W1-3 | 1 ngày |
| W1-5 | Toolbar bản đồ tuỳ chỉnh (thay `NavigationControl` mặc định) — icon lucide, style theo Design System | `components/map/MapToolbar.tsx` | W1-3, W1-4 | 1 ngày |
| W1-6 | Áp Framer Motion thật: hover-tilt `DishCard`, stagger reveal trang tỉnh, transition popup bản đồ; `MotionConfig reducedMotion="user"` | Cập nhật `DishCard.tsx`, `FoodMap.tsx` | W1-4 | 1 ngày |
| W1-7 | Trang 404 tuỳ chỉnh (`app/not-found.tsx`) theo Design System, khắc phục FAIL ở US-08 | `app/not-found.tsx` | W1-3, W1-4 | 0.5 ngày |
| W1-8 | Sửa GAP-01 — xử lý lỗi tải ảnh runtime trong `ImageWithFallback` (fallback khi ảnh 404/429 lúc chạy, không chỉ khi data rỗng) | `ImageWithFallback.tsx` cập nhật | — | 0.5 ngày |
| **W1-9** | **🔒 Cổng hiểu con — PM tự đánh giá "wow" trên Hà Nội + Huế** sau W1-3→W1-8, xong mới cho phép nhân rộng | Quyết định PASS/FAIL | W1-2, W1-5, W1-6, W1-7, W1-8 | Review, không phải build |
| **W1-9 → FAIL (2026-08-26):** PM chê layout 1-cột-dài bắt cuộn chuột quá nhiều, yêu cầu redesign kiểu "overview" + "timeline". |||||
| **W1-9c → PASS (2026-08-26):** "Cũng tạm ổn rồi" sau redesign kinetic/parallax/marquee. **Nhân rộng ra 6 tỉnh (W1-10) mở khoá.** |||||
| **W1-9c** | PM chê tiếp "vẫn minor, muốn wow hơn" → research xu hướng thiết kế bạo hơn (Awwwards, editorial maximalist, kinetic scroll), redesign trang chủ: hero chữ khổng lồ tách từng chữ, parallax ảnh theo scroll, marquee chạy tên món, CTA "từ tính" hút theo con trỏ, grain texture toàn site, clip-path reveal cho card, region-color accent | `HeroSection.tsx`, `effects/{GrainOverlay,MagneticButton,Marquee}.tsx` | W1-9b done | ✅ Xong (2026-08-26) |
| **W1-9b** | Redesign trang tỉnh: `ProvinceDishExplorer` — chế độ **Tổng quan** (lưới compact, không cuộn, bấm mở panel trượt xem chi tiết) mặc định + chế độ **Hành trình** (cuộn ngang kiểu story) chuyển đổi bằng toggle | `components/province/ProvinceDishExplorer.tsx`, `DishTile.tsx`, `components/ui/Sheet.tsx` | W1-9 FAIL | ✅ Xong (2026-08-26), build sạch, tự test cả 2 chế độ bằng Playwright trước khi đưa PM xem lại |
| W1-10 | ~~Data entry 6 tỉnh MVP còn lại~~ **✅ XONG (2026-09-03)** — 6 agent song song nghiên cứu + đối chiếu Wikipedia + tìm ảnh Wikimedia thật, validate qua zod schema (build sạch, 12/12 trang static-generate) | 6 file `data/provinces/*.json`, `hero-bubbles.json` cập nhật đủ 8 tỉnh | W1-1, W1-9 PASS | Thực tế: ~7 phút song song (thay vì ~6 ngày công người) nhờ chạy agent nền song song |
| W1-11 | QA pass toàn bộ 8 tỉnh: test 8 user story ở `SPEC-LF.md` thật (không chỉ đọc AC), test responsive 360px, kiểm tra ảnh vỡ, test 404 | Kết quả test ghi vào SIT/UAT sau (bước [9]) | W1-10, **MapTiler key thật đã có** (điều kiện PM chốt ở Cổng hiểu bước [7]) | 1 ngày |
| **W1-11a** | **(PM bổ sung, Cổng hiểu bước [4])** Accessibility audit: contrast ratio cho text-over-photo, keyboard navigation cho toolbar bản đồ + card, `aria-label` cho icon toolbar không có text | Checklist A11y PASS/FAIL | W1-5, W1-6, W1-7 | 0.5 ngày |
| **W1-11b** | **(PM bổ sung, Cổng hiểu bước [4])** Performance check bằng Lighthouse trên trang chủ + 1 trang tỉnh: đo LCP/FCP/bundle size, kiểm tra NFR "LCP < 2.5s" có đạt không (rủi ro: Framer Motion + nhiều ảnh làm chậm) | Báo cáo Lighthouse, xử lý nếu vượt ngưỡng | W1-10 | 0.5 ngày |
| W1-12 | Hoàn thiện `RISK-LF.md`, `DELEGATION-MAP-LF.md`, `DOR-LF.md`, chuẩn bị hồ sơ viva (RTM, telemetry, Weekly Report) | Artefact bước [6]-[10] | Song song, chốt cuối | 1 ngày |

**2 điểm sau W1-11 → ĐÃ SỬA (2026-09-03):** (1) thay "mày" → "bạn" ở
`app/not-found.tsx` + `app/page.tsx` (2 chỗ, đã grep toàn bộ `app`/`components`
xác nhận sạch); (2) bản đồ đổi từ chấm tròn đơn sắc sang **marker ảnh món ăn
thật** (component `DishMarker.tsx`, dùng `react-map-gl` `<Marker>` thay
`<Source>/<Layer>` GL cũ) — món không có ảnh vẫn fallback gradient +
icon, khớp `ImageWithFallback`. Build sạch, verify crossfade zoom + click
điều hướng vẫn đúng.

**W1-11 → PASS (2026-09-03).** PM test toàn bộ checklist `SIT-UAT-LF.md`,
xác nhận đạt hết — kèm 2 điểm cần sửa (không phải fail chức năng, mà UX/nội
dung): (1) trang 404 dùng từ "mày" — giọng văn nội bộ giữa PM-AI lọt vào
copy hiển thị cho người dùng thật, phải sửa thân thiện hơn; (2) bubble bản
đồ nên dùng ảnh món ăn thật thay vì chấm tròn đơn sắc.

**⚠️ Cảnh báo sớm (không đợi tới bước [5] mới nói):** cộng thô các task Wave 1
đã ra khoảng **11-12 ngày công việc thực** (sau khi thêm W1-11a/W1-11b theo
Cổng hiểu bước [4]), trong khi hạn còn ~2 tuần lịch (10 ngày làm việc nếu
tính cả 2 cuối tuần thì nhỉnh hơn, nhưng PM không làm full-time 8 tiếng/ngày
cho việc này). **Nhiều khả năng phải cắt scope** — đây chính xác là tình
huống EX-03 "estimate vượt mốc → quay lại cắt scope", sẽ xử lý formal ở
bước [5] EST, không quyết định vội ở đây.

## Wave 1 mở rộng — sau yêu cầu mới (2026-08-26): Review/Rating + Search + Filter mùa/lễ hội

**Cập nhật 2026-09-03 (PM quay lại sau nghỉ, chỉ còn 6 ngày tới hạn):**
**W2-1 → W2-6 (Review/Rating, phụ thuộc Supabase) bị HOÃN sang phase-2**,
chưa code dòng nào nên không mất công cắt. Ưu tiên dồn cho W1-10 (6 tỉnh
còn lại) + W1-11/11a/11b (QA/A11y/Performance) + W1-12 (hồ sơ viva) —
đúng phần lõi bắt buộc, không phải tính năng thêm. `ARCH-LF.md` D3 (quyết
định thêm Supabase) giữ nguyên trong hồ sơ làm bằng chứng đã cân nhắc đúng
quy trình, nhưng **không thực thi** trong bản nộp lần này.

| # | Task | Output | Phụ thuộc | Ước lượng thô |
|---|---|---|---|---|
| W2-1 | **PM** tạo Supabase project, lấy URL + anon key | `.env.local` có `NEXT_PUBLIC_SUPABASE_URL` + `NEXT_PUBLIC_SUPABASE_ANON_KEY` | — | PM tự làm, ~10 phút |
| W2-2 | Viết SQL schema + RLS policy cho `dish_reviews` (ARCH-LF.md D3) | file SQL, PM tự chạy trên Supabase dashboard | W2-1 | 1h |
| W2-3 | Tích hợp Supabase client (`lib/supabase.ts`) | client đọc/ghi review | W2-2 | 0.5h |
| W2-4 | UI gửi review: rating 5 sao + tên + comment, trong Sheet chi tiết món | Form component | W2-3 | 1.5h |
| W2-5 | Hiển thị danh sách review đã có + rating trung bình cho mỗi món | List component | W2-3 | 1h |
| W2-6 | Rào chắn spam tối thiểu (giới hạn ký tự, chặn gửi lặp nhanh qua localStorage flag) | Validate phía client | W2-4 | 0.5h |
| W2-7 | Search — thanh tìm kiếm tên món/tỉnh, kết quả điều hướng nhanh (client-side, không cần backend) | Component search + kết quả dropdown | — | 1.5h |
| W2-8 | Filter theo mùa/lễ hội — thêm field `festivalTags`/dùng lại `season` trong schema, UI filter chip | Cập nhật schema + data 2 tỉnh hiện có + UI filter | — | 1.5h (chưa tính điền data cho 6 tỉnh mới) |

**Tổng Wave 1 mở rộng (khả dĩ):** ~7.5h AI-effort + ~10 phút PM setup.
**Cộng dồn với Wave 1 gốc (EST-LF.md, đã ~48h khả dĩ):** tổng ước lượng giờ
đã vượt xa quỹ 2 tuần ban đầu — xem cập nhật ở `EST-LF.md`.

## Cập nhật 2026-09-03 (2) — PM báo 2 issue sau khi test bản đồ thật

1. **Bản đồ không hiển thị** → fix nghiêm trọng (`maplibre-gl` 6.5.0 → 4.7.1),
   xem `DEVBOOK.md`.
2. **Danh sách tỉnh ở trang chủ gây confuse, không scale tới 63 tỉnh** → PM
   chọn phương án: trang chủ chỉ hiện tỉnh nổi bật (dùng chung danh sách với
   hero bubble bản đồ) + link "Xem tất cả" sang trang `/browse` mới (nhóm
   theo vùng miền, có ảnh thumbnail, filter mùa/lễ hội). Đây là Wave 2 làm
   sớm hơn dự kiến. Đã xong: `app/browse/page.tsx`,
   `components/province/BrowseProvinces.tsx`, `ProvinceTeaserCard` thêm ảnh
   thumbnail.

## Wave 2 — mức feature (coarser, chưa bẻ task)

- Phase-2: Wishlist (localStorage) — persistence decision còn treo, xem
  `RISK-LF.md`.
- Phase-2: Filter theo taste tag trên bản đồ.
- Phase-2: Trang `/browse` liệt kê toàn bộ tỉnh riêng (ngoài bento teaser ở
  trang chủ).
- Mở rộng dữ liệu ra thêm các tỉnh ngoài 8 MVP (tiến dần tới 63), sau hạn
  nộp bài.

## Wave 3 — mức epic (thô nhất, cố ý)

- Đa ngôn ngữ (Anh/Việt).
- Quiz gợi ý món theo khẩu vị.
- Itinerary builder / so sánh khẩu vị giữa tỉnh — có thể cần xét lại quyết
  định "không backend" (đã ghi ở ARCH mục chưa chốt).
- GSAP scroll storytelling (nếu Framer Motion chưa đủ "wow").

## Các việc hay sót đã rà theo brief (không được quên)

- **Kiểm thử negative-case theo AC** (không chỉ happy path) — đã có W1-11,
  và đã có GAP-01/GAP-02/US-08 ghi nhận từ trước, không phải bổ sung muộn.
- **Đối soát nội dung với nguồn tham chiếu** — W1-2 (rà lại 2 tỉnh cũ) +
  bắt buộc trong W1-10 (6 tỉnh mới), không phải làm cho có ở cuối.
- **Không có màn quản trị/log kiểm toán** — chủ động loại bỏ vì SCOPE đã
  chốt "không backend/auth", không phải sót.

---

## 🔒 Cổng hiểu — bước [4] — **ĐÃ ĐÓNG (2026-08-26)**

1. PM giải thích đúng W1-5: ra `MapToolbar.tsx`, phụ thuộc W1-3 (token) +
   W1-4 (component gốc) — không có nền thì toolbar dễ lệch style.
2. PM bắt được **2 việc sót thật**, cả 2 đều là NFR đã ghi ở `SPEC-LF.md`
   nhưng chưa có task thực thi: **Accessibility audit** (contrast, keyboard
   nav, aria-label) và **Performance check Lighthouse**. Đã thêm W1-11a,
   W1-11b, cập nhật cảnh báo estimate lên 11-12 ngày.

Cổng đã đóng → bước [5] Estimation được phép bắt đầu.
