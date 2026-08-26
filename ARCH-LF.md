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
| `Province.slug/code/name/region/centroid/summary` | Công khai | Không nhạy cảm |
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

## ⚠️ Phần CHƯA CHỐT

1. **`Dish.sourceRef` chưa có trong schema** — cần thêm field bắt buộc (vd
   `sourceRef: { url: string; label: string }[]`) để enforce NFR content
   integrity bằng TypeScript, không chỉ bằng lời hứa. Sẽ thêm ở WBS + áp
   dụng ngay khi rà lại nội dung Hà Nội/Huế.
2. **Toolbar bản đồ tuỳ chỉnh cụ thể gồm những nút gì** — chưa thiết kế chi
   tiết (chỉ mới quyết định "phải có, không dùng control mặc định"), để chốt
   ở WBS/lúc build.
3. **Có cần trang `/browse` riêng ngay trong 2 tuần không**, hay bento teaser
   dưới bản đồ ở trang chủ là đủ — nghiêng về "đủ", vì `/browse` được xếp
   phase-2 theo build order gốc, nhưng cần PM xác nhận lại vì lúc đó chưa có
   yêu cầu UI cao như bây giờ.

---

## 🔒 Cổng hiểu — bước [3]

Trước khi tao viết `WBS-LF.md` (bước [4]), mày cần:

1. **Giải thích được vì sao chọn "không backend, data JSON tĩnh" thay vì có
   backend thật — đánh đổi gì?** (gợi ý: được gì, mất gì so với có backend).
2. **Tìm ≥1 trường dữ liệu tao chưa gắn độ nhạy hoặc gắn sai** trong bảng
   mục 3 — hoặc xác nhận bảng đó ổn nếu mày kiểm kỹ rồi không thấy vấn đề gì
   (khác với đồng ý cho có).

Chưa qua cổng này thì bước [4] WBS chưa bắt đầu.
