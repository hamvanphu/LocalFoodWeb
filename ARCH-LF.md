# [3] Architecture — Local Food

> Input: `SPEC-LF.md` + `MODULEMAP-LF.md` (đã đóng Cổng hiểu bước [2]).

## 1. Nguyên tắc kiến trúc

1. **Không backend/DB** — toàn bộ nội dung là JSON tĩnh, render qua Next.js
   Static Site Generation (SSG). Lý do: quy mô nội dung (63 tỉnh × ~4 món)
   không cần truy vấn động; giảm bề mặt vận hành (không server DB để lo bảo
   trì) trong 2 tuần deadline; khớp ràng buộc "không dịch vụ trả phí".
2. **Design System là hợp đồng bắt buộc, không phải gợi ý** — mọi component
   bề mặt (map toolbar, dish card, 404 page...) phải dùng token/primitive từ
   Design System, không tự chế màu/spacing riêng. Đây là cách kỹ thuật để
   thực thi NFR "UI wow" nhất quán, không phụ thuộc cảm hứng lúc code.
3. **Client-only cho phần cần WebGL** (bản đồ MapLibre), **Server Component
   cho phần cần SEO/first-paint** (nội dung trang, meta tags) — giữ nguyên
   quyết định từ walking skeleton, đã chứng minh chạy được.
4. **Dữ liệu có nguồn tham chiếu là một phần của kiến trúc, không phải ghi
   chú ngoài lề** — schema `DishImage`/nguồn tham chiếu nội dung là trường
   bắt buộc, validate được (TypeScript), không phải quy ước miệng.
5. **Mở rộng bằng dữ liệu, không bằng code** — thêm tỉnh = thêm file JSON,
   không sửa component/route.

## 2. Sơ đồ container

```
┌─────────────────────────┐      ┌──────────────────────────┐
│   Trình duyệt (client)  │      │  MapTiler (basemap tile)  │
│                          │─────▶│  free tier, qua API key   │
│  ┌────────────────────┐ │      └──────────────────────────┘
│  │ FoodMap (MapLibre,  │ │
│  │ client component)   │ │      ┌──────────────────────────┐
│  └────────────────────┘ │─────▶│ Wikimedia Commons (ảnh)   │
│  ┌────────────────────┐ │      │ qua next/image proxy      │
│  │ React Server        │ │      └──────────────────────────┘
│  │ Components (nội     │ │
│  │ dung tỉnh/món)       │ │
│  └────────────────────┘ │
└───────────▲──────────────┘
            │ SSG (build time)
┌───────────┴──────────────┐
│  Next.js build            │
│  đọc data/provinces/*.json│
│  + data/geo/*.geojson      │
│  → HTML tĩnh + JS bundle   │
└────────────────────────────┘
```

Không có server runtime xử lý logic nghiệp vụ — Next.js server chỉ phục vụ
HTML tĩnh đã build sẵn (và tối ưu ảnh qua `next/image` khi request tới).

## 3. Data model

Đã định hình ở `lib/types.ts` (walking skeleton). Rà lại độ nhạy dữ liệu
từng trường:

| Field | Độ nhạy | Ghi chú |
|---|---|---|
| `Province.slug/code/name/region/centroid` | Công khai | Không nhạy cảm, dữ liệu địa lý khách quan |
| `Province.summary` | Công khai, **PM sửa (Cổng hiểu bước [3]): cần nguồn tham chiếu** | Là văn bản do AI biên soạn về văn hoá ẩm thực vùng miền — cùng rủi ro sai lệch/thiên kiến như `Dish.*`, không nên tách riêng. |
| `Dish.*` (mô tả, nguyên liệu, cách làm, cách ăn) | Công khai | **Cần nguồn tham chiếu** (NFR content integrity) — trường `sourceRef` **CHƯA CÓ trong schema hiện tại, cần bổ sung** (xem mục "chưa chốt"). |
| `DishImage.url/attribution/license` | Công khai | Bắt buộc điền đủ 3 trường, đã enforce bằng TypeScript interface. |
| *(phase-2)* Wishlist (danh sách slug đã lưu) | **Dữ liệu người dùng, lưu client-side (localStorage), không gửi lên server** | Không có server nào thấy dữ liệu này → không phải lo NFR bảo mật server-side, nhưng vẫn là dữ liệu người dùng thật (đã ghi nhận rủi ro persistance ở SPEC/RISK). |

## 4. Data contract (thay cho API contract — không có backend)

Không có HTTP API cho MVP. "Hợp đồng" thực chất là **schema JSON** mà
`lib/provinces.ts` đọc tại build time:

- 1 file `data/provinces/{slug}.json` = 1 object `Province` đúng interface
  `lib/types.ts`.
- Content Editor (PM) phải tuân schema này khi thêm tỉnh mới — TypeScript
  sẽ báo lỗi ở `pnpm build` nếu sai field, đóng vai trò "cổng kiểm tự động"
  cho dữ liệu.
- Nếu sau này wishlist cần đồng bộ nhiều thiết bị (mở lại open question ở
  RISK-LF.md), đó là lúc **phải xét lại quyết định "không backend"** — ghi
  rõ ở đây để không quên.

## 5. Tech stack (đã chọn, giữ nguyên từ walking skeleton)

| Layer | Lựa chọn | Lý do |
|---|---|---|
| Framework | Next.js 16 App Router + React 19 + TypeScript | SSG mạnh, hệ sinh thái lớn, PM dễ review code vì phổ biến. |
| Style | Tailwind CSS v4 | Token hoá màu/spacing nhanh, khớp yêu cầu Design System nhất quán. |
| Bản đồ | MapLibre GL JS + react-map-gl (MapTiler free tier) | Free, không khoá vendor, đủ mạnh cho zoom-layer bubble. |
| Icon | lucide-react | Bộ icon nhất quán, đủ phong phú để làm toolbar bản đồ thay control mặc định. |
| Motion | Framer Motion (`motion/react`) | Đã cài từ walking skeleton nhưng **chưa dùng** — sẽ dùng thật ở bước build UI tiếp theo cho hover-tilt card, transition. |
| Package manager | pnpm | Đã dùng, ổn. |

**Không thêm thư viện UI mới** (vd Radix, shadcn) trừ khi WBS xác định thật
sự cần cho 1 task cụ thể (vd toolbar bản đồ phức tạp) — tránh phình
dependency không cần thiết trong 2 tuần deadline.

## 6. Mô hình phân quyền (map tới use-case × role ở SPEC)

Không có hệ thống phân quyền runtime (không auth). "Phân quyền" duy nhất là
ranh giới giữa Visitor (chỉ đọc, qua UI công khai) và Content Editor (ghi,
qua file trực tiếp ngoài UI) — đã đúng theo SPEC, không cần thiết kế thêm.

## D3 — Đảo ngược quyết định "không backend" (2026-08-26, sau yêu cầu Review/Rating công khai)

PM yêu cầu review/rating/comment **hiện cho mọi người dùng khác thấy**, không
chỉ người viết — bắt buộc có nơi lưu trữ dùng chung, localStorage (client-side
only) không đáp ứng được. Quyết định D1 ("không backend") ở phần Nguyên tắc
kiến trúc mục 1 **bị đảo ngược một phần**, chỉ áp dụng cho tính năng
review/rating — toàn bộ nội dung món ăn/tỉnh (Province/Dish) **vẫn giữ
nguyên** kiến trúc JSON tĩnh + SSG, không đổi.

**Chọn Supabase** (Postgres managed, free tier) thay vì tự dựng backend:
- Free tier đủ dùng cho quy mô traffic dự án học thuật, tránh vi phạm ràng
  buộc "không dịch vụ trả phí" (SCOPE-LF.md).
- Có sẵn client SDK cho Next.js, không cần viết API route riêng cho case đơn
  giản (đọc/ghi trực tiếp từ client qua Supabase JS client + Row Level
  Security policy).
- PM cần tự đăng ký project (giống MapTiler) — AI không tự tạo tài khoản
  dịch vụ ngoài thay PM được.

**Bảng dữ liệu mới — `dish_reviews`:**
| Cột | Kiểu | Ghi chú |
|---|---|---|
| `id` | uuid, PK | auto |
| `province_slug` | text | join với `data/provinces/*.json` |
| `dish_slug` | text | join với `dish.slug` trong tỉnh đó |
| `author_name` | text | tự nhập, không xác thực (không có auth) |
| `rating` | int 1-5 | bắt buộc |
| `comment` | text | tối đa ~500 ký tự, có thể rỗng |
| `created_at` | timestamptz | auto |
| `status` | text (`visible` \| `hidden`) | mặc định `visible` — **không có kiểm duyệt trước khi đăng** (xem RISK R10), `hidden` dùng để PM tự ẩn thủ công qua Supabase dashboard nếu phát hiện spam |

**Row Level Security (RLS) — bắt buộc, không tuỳ chọn:** bật RLS trên bảng
`dish_reviews`, policy cho phép `INSERT` công khai (ẩn danh) nhưng **giới hạn
field** (không cho ghi `status`, `id`, `created_at` — để DB tự sinh), và
`SELECT` công khai chỉ với `status = 'visible'`. Không bật RLS = bất kỳ ai
cầm anon key (vốn lộ công khai trong code client, đúng thiết kế của
Supabase) có thể đọc/sửa/xoá toàn bộ bảng — đây là lỗi bảo mật nghiêm trọng
nếu bỏ sót, không phải chi tiết vặt.

## ⚠️ Phần CHƯA CHỐT

1. **`sourceRef` chưa có trong schema — áp dụng cho CẢ `Province.summary`
   LẪN `Dish.*`** (PM sửa ở Cổng hiểu bước [3], không chỉ riêng Dish) — cần
   thêm field bắt buộc (vd `sourceRef: { url: string; label: string }[]`) ở
   cả 2 cấp để enforce NFR content integrity bằng TypeScript, không chỉ bằng
   lời hứa. Sẽ thêm ở WBS + áp dụng ngay khi rà lại nội dung Hà Nội/Huế.
2. **Toolbar bản đồ tuỳ chỉnh cụ thể gồm những nút gì** — chưa thiết kế chi
   tiết (chỉ mới quyết định "phải có, không dùng control mặc định"), để chốt
   ở WBS/lúc build.
3. **Có cần trang `/browse` riêng ngay trong 2 tuần không**, hay bento teaser
   dưới bản đồ ở trang chủ là đủ — nghiêng về "đủ", vì `/browse` được xếp
   phase-2 theo build order gốc, nhưng cần PM xác nhận lại vì lúc đó chưa có
   yêu cầu UI cao như bây giờ.

---

## 🔒 Cổng hiểu — bước [3] — **ĐÃ ĐÓNG (2026-08-26)**

1. PM giải thích đầy đủ đánh đổi "không backend": được đơn giản
   vận hành/tốc độ/chi phí 0/SEO tốt; mất khả năng đồng bộ đa thiết bị,
   realtime, và sẽ cần refactor kiến trúc nếu sau này thêm review/comment/cá
   nhân hoá.
2. PM bắt đúng: `Province.summary` bị gắn "không nhạy cảm" sai — thực ra
   cùng loại rủi ro nội dung AI biên soạn như `Dish.*`, cần nguồn tham
   chiếu. Đã sửa bảng mục 3 và mục "chưa chốt" #1 để áp dụng `sourceRef` cho
   cả 2 cấp.

Cổng đã đóng → bước [4] WBS được phép bắt đầu.
