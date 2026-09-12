# Local Food — Bản đồ ẩm thực 63 tỉnh thành Việt Nam

Website giới thiệu món ăn đặc trưng của **cả 63 tỉnh thành Việt Nam** (theo địa giới
trước sáp nhập 2025), với bản đồ tương tác, công thức sơ lược và gợi ý cách thưởng thức.

> Dự án Capstone của **PM AI Bootcamp** — làm theo đường ray 11 bước của
> `Capstone Playbook`, mỗi bước có **Cổng hiểu** (PM phải giải thích lại được và bắt
> ≥1 lỗi của AI trước khi đi tiếp). Toàn bộ hồ sơ quản trị nằm trong repo, xem mục
> [Hồ sơ dự án](#hồ-sơ-dự-án).

---

## Sản phẩm có gì

- **Bản đồ tương tác** (MapLibre GL + MapTiler): cả 63 tỉnh hiện đồng thời, marker là
  **ảnh món ăn thật** chứ không phải chấm màu. Tỉnh nổi bật vẽ to hơn để dẫn mắt;
  marker to dần và hiện thêm nhãn tên món khi zoom vào.
- **63 trang tỉnh** (sinh tĩnh): mỗi tỉnh có 1 món chủ đạo + 2 món khác, kèm mô tả,
  nguyên liệu chính, các bước làm sơ lược, cách ăn và **nguồn tham chiếu**.
- **Tìm kiếm** không dấu (gõ `pho` ra `phở`), điều hướng thẳng tới đúng món.
- **Lọc theo mùa / lễ hội** (Tết Nguyên Đán, Trung Thu, bốn mùa).
- **Trang `/browse`** liệt kê toàn bộ tỉnh, nhóm theo miền Bắc / Trung / Nam.

### Số liệu nội dung

| Chỉ số | Giá trị |
|---|---|
| Tỉnh thành | 63 / 63 |
| Món ăn | 197 |
| Nguồn tham chiếu (`sourceRef`) | 222 |
| Món thiếu nguồn | 0 *(zod chặn ngay lúc build)* |
| Món có ảnh Wikimedia thật | 75 (38%) |
| Món dùng ảnh dự phòng (gradient) | 122 (62%) |

> **Về ảnh:** dự án **không bịa URL ảnh**. Món nào không tìm được ảnh thật trên
> Wikimedia Commons thì dùng placeholder gradient có chủ đích, không phải ô ảnh vỡ.
> Đây là lý do tỷ lệ có ảnh chỉ 38% — các món vùng núi phía Bắc và Tây Nguyên hầu như
> không có ảnh trên Commons.

---

## Công nghệ

| Thành phần | Lựa chọn | Lý do |
|---|---|---|
| Framework | Next.js 16 (App Router) + React 19 + TypeScript | Sinh tĩnh toàn bộ, SEO tốt |
| Bản đồ | MapLibre GL JS `4.7.1` + `react-map-gl` | Mã nguồn mở, không khoá vendor |
| Basemap | MapTiler (free tier) | Có bản đồ nền tiếng Việt chất lượng |
| Giao diện | Tailwind CSS v4 | — |
| Chuyển động | Framer Motion (`motion/react`) | Tôn trọng `prefers-reduced-motion` |
| Kiểm tra dữ liệu | **zod** | Validate thật 63 file JSON lúc build, không chỉ ép kiểu TypeScript |
| Lưu trữ nội dung | File JSON tĩnh, không backend | Xem `ARCH-LF.md` |

> ⚠️ **MapLibre bị ghim ở `4.7.1` có lý do.** Bản `6.5.0` có lỗi khiến vector tile
> source không bao giờ load xong → bản đồ trắng hoàn toàn. Chi tiết điều tra nằm
> trong `DEVBOOK.md`. **Đừng nâng cấp mà không test lại kỹ.**

---

## Chạy tại máy

```bash
pnpm install
cp .env.example .env.local      # rồi điền MapTiler key
pnpm dev                        # http://localhost:3000
```

### Biến môi trường

| Biến | Bắt buộc | Lấy ở đâu |
|---|---|---|
| `NEXT_PUBLIC_MAPTILER_KEY` | Không (có fallback) | https://cloud.maptiler.com/account/keys/ |

Không có key thì bản đồ vẫn chạy bằng style demo công khai của MapLibre, chỉ kém đẹp hơn.

> 🔒 **Lưu ý bảo mật:** biến có tiền tố `NEXT_PUBLIC_` **luôn bị nhúng vào bundle
> phía client** — bất kỳ ai mở DevTools trên site đã deploy đều đọc được. Đây là bản
> chất của thư viện bản đồ chạy phía trình duyệt, không tránh được. Vì vậy **phải bật
> domain restriction** cho key trong MapTiler dashboard, giới hạn đúng domain deploy.

### Lệnh khác

```bash
pnpm build        # build production — cũng là lúc zod validate toàn bộ 63 file dữ liệu
pnpm start        # chạy bản production
pnpm lint

# Ba cổng kiểm chất lượng, chạy độc lập được
pnpm check:geo    # mọi centroid nằm trong đất liền VN (sinh ra từ rủi ro R13)
pnpm check:i18n   # bản dịch khớp bản gốc: đủ món, đủ trường, khớp số bước
pnpm check:meal   # phân loại mealTypes hợp lệ + KHÔNG trường nào khác bị sửa
```

> **`check:meal` làm một việc khác thường:** ngoài kiểm dữ liệu, nó **đối chiếu từng file
> với bản trong git** và fail nếu có trường nào ngoài `mealTypes`/`mealTypeNote` bị đụng.
> Lý do: nhiều agent ghi song song vào `data/provinces/*.json`, mà đó là nội dung gốc
> tiếng Việt **không có bản sao nào ngoài git**.

Ngoài ra `node scripts/review-meal.mjs` dựng phiếu soi phân loại — khoanh vùng chỗ dữ liệu
tự mâu thuẫn với nhãn, để người duyệt đọc ~23 món thay vì 197.

> ⚠️ **Gotcha khi thêm tỉnh mới:** `lib/provinces.ts` cache dữ liệu ở cấp module, nên
> thêm file `data/provinces/*.json` mới mà dev server đang chạy thì **route mới sẽ 404**.
> Phải **restart dev server**. Đã ghi trong `DEVBOOK.md`.

---

## Cấu trúc

```
app/                     # App Router — tiếng Việt ở gốc, tiếng Anh dưới /en
  /  /browse  /goi-y  /provinces/[slug]  /telemetry  not-found
  en/…                   # bản tiếng Anh song song, cùng bộ component
components/
  map/                   # FoodMap, DishMarker, MapToolbar, SovereigntyMarker, mapStyle
  province/              # ProvinceHero, DishCard, DishTile, ProvinceDishExplorer
  recommend/             # RerollButton, OfficeFlags — trang "Trưa nay ăn gì"
  review/                # DishReviews, RecentReviews, StarRating
  pages/                 # thân trang dùng chung cho 2 ngôn ngữ (*View.tsx)
  ui/                    # Button, Badge, Sheet, Lightbox, ImageWithFallback
  search/                # SearchBar (tìm kiếm không dấu)
data/
  provinces/*.json       # 63 file, mỗi tỉnh 1 file — thêm tỉnh = thêm file, không sửa code
  i18n/en/*.json         # bản dịch tiếng Anh, tách riêng để không đụng bản gốc
  geo/                   # ranh giới + centroid 63 tỉnh
  sovereignty.json       # Hoàng Sa, Trường Sa, Biển Đông — hiện ở mọi mức zoom
  hero-bubbles.json      # danh sách tỉnh nổi bật (marker to + mục "Tỉnh nổi bật")
lib/
  types.ts  schema.ts    # kiểu dữ liệu + zod schema
  provinces.ts  geo.ts   # đọc/validate dữ liệu, dựng GeoJSON cho bản đồ
  i18n.ts (server)       # nạp/ghép bản dịch — dùng node:fs, KHÔNG import từ client
  locale.ts (dùng chung) # hằng số ngôn ngữ + localePath() — an toàn cho client
  recommend.ts           # bể gợi ý bữa trưa + bốc cặp tất định theo seed
  reviews.ts             # Supabase: đánh giá + báo nội dung sai
```

> ⚠️ `lib/i18n.ts` **chỉ dùng được ở server**. Client phải import từ `lib/locale.ts`.
> Trộn lẫn sẽ kéo `node:fs` vào bundle trình duyệt và **build đổ hoàn toàn** — TypeScript
> không bắt được lỗi này.

### Thêm một tỉnh mới

1. Tạo `data/provinces/{slug}.json` theo `lib/schema.ts`. Mỗi món **bắt buộc**: ≥1
   `sourceRef`, ≥1 `mealTypes`, và đúng 1 món có `isHero: true` khớp `heroDishSlug`.
2. Chạy `pnpm build` — zod báo rõ file nào thiếu trường nào.
3. Chạy `pnpm check:geo` và `pnpm check:meal`.
4. *(tuỳ chọn)* Thêm `data/i18n/en/{slug}.json` rồi `pnpm check:i18n`. Chưa dịch thì trang
   tiếng Anh vẫn chạy, chỉ hiện tiếng Việt ở phần chưa dịch.
5. Restart dev server (xem gotcha ở trên).

---

## Hồ sơ dự án

Đây là dự án bootcamp nên **hồ sơ quản trị là một phần của sản phẩm**, không phải phụ lục:

| Bước | Artefact | Nội dung |
|---|---|---|
| [0] | `SCOPE-LF.md` | Phạm vi, giả định, cái gì **không** làm |
| [1] | `SPEC-LF.md` | User story + tiêu chí chấp nhận + NFR |
| [2] | `MODULEMAP-LF.md` | Phân tầng module |
| [3] | `ARCH-LF.md` | Kiến trúc, mô hình dữ liệu, các quyết định (D1-D3) |
| [4] | `WBS-LF.md` | Chia việc |
| [5] | `EST-LF.md` | Ước lượng PERT |
| [6] | `RISK-LF.md` · `DELEGATION-MAP-LF.md` | 13 rủi ro (có nhóm rủi ro AI-sinh) + mức uỷ quyền cho AI |
| [7] | `DOR-LF.md` | Definition of Ready |
| [9] | `SIT-UAT-LF.md` · `PERFORMANCE-LF.md` | QA checklist + kết quả đo hiệu năng |
| [10] | `RTM-LF.md` · `TELEMETRY-LF.md` · `WEEKLY-LF.md` | Truy vết yêu cầu, telemetry, báo cáo tuần |
| — | **`DEVBOOK.md`** | **Nhật ký lỗi AI và cách PM sửa** — 17 sự cố có thật |
| — | `TECH-DEBT-LF.md` | Nợ kỹ thuật đang theo dõi |

**Điểm đáng đọc nhất:** `DEVBOOK.md` (lỗi AI thật, gồm cả lỗi nghiêm trọng như centroid
2 tỉnh nằm giữa Biển Đông suốt nhiều tuần) và `RTM-LF.md` mục 3 (các lỗ hổng truy vết
mà chính RTM phát hiện ra, không giấu).

---

## Giới hạn đã biết

Ghi thẳng, không giấu — chi tiết trong `RISK-LF.md` và `RTM-LF.md`:

- **LCP trang chủ chưa đạt NFR < 2.5s.** Nguyên nhân là MapLibre GL JS tự thân nặng
  (~700KB-1MB script). Bản đồ là tính năng lõi nên chấp nhận đánh đổi thay vì bỏ đi
  để lấy điểm đẹp. Rủi ro R12, đo đạc trong `PERFORMANCE-LF.md`.
- **Chất lượng nguồn không đồng đều.** zod chỉ đảm bảo *có* `sourceRef`, không đảm bảo
  nguồn *uy tín*. Nhiều tỉnh miền núi/Tây Nguyên chỉ có nguồn báo chí hoặc cổng du lịch
  địa phương, không có Wikipedia. Rủi ro R2 vẫn mở.
- **Bản dịch tiếng Anh chưa ai đọc.** 45.192 từ do 10 agent sinh; cổng `check:i18n` chỉ
  kiểm **cấu trúc**, không cổng nào kiểm **nghĩa**. Đã tìm được 7 bẫy dịch trong phần được
  đọc kỹ ⇒ gần như chắc chắn còn bẫy chưa ai thấy. Rủi ro **R15**, còn mở.
- **Phân loại món ở `/goi-y` là phán đoán của người biên tập**, không phải chuẩn mực. Món
  bị gán nhầm sẽ **biến mất khỏi gợi ý mà không ai thấy** — người dùng không thể báo lỗi về
  thứ họ không nhìn thấy. Rủi ro **R16**. Ba tỉnh (Hải Dương, Thanh Hóa, Sơn La) hiện không
  bao giờ xuất hiện trong gợi ý, vì dữ liệu của họ chỉ có món quà và đồ nhắm.
- **`/goi-y` gợi ý MÓN, không gợi ý QUÁN** — không có giá, địa chỉ, khoảng cách. Đây là
  ràng buộc dữ liệu, đã ghi thẳng trên trang.

> **Hai giới hạn dưới đây đã được xử lý, giữ lại để thấy tiến trình:**
> ~~Search và bộ lọc chưa có user story~~ → đã đóng GAP-T2 (US-12/13), và **việc viết test
> đó tìm ra 3 lỗi thật** mà build xanh + axe-core sạch đều không thấy.
> ~~Chưa có đánh giá/bình luận~~ → đã lên production (US-14/15), RLS kiểm bằng cách tự
> tấn công database.
