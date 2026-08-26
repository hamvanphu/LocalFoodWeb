# Dev Book — Local Food

Nhật ký "AI sai/vướng → xử lý" trong quá trình build. Ghi ngay khi phát sinh, không đợi tối viết lại.

## Lỗi quy trình (PM bắt được, 2026-08-25)

- **AI bỏ qua toàn bộ bước [0]-[7] của Capstone Playbook**, nhảy thẳng vào
  bước [8] BUILD ngay sau khi PM nói "tiến hành dev thật". Không có
  `SCOPE-LF.md`, `SPEC-LF.md`, `MODULEMAP-LF.md`, `ARCH-LF.md` (dạng văn bản
  riêng), `WBS-LF.md`, `EST-LF.md`, `RISK-LF.md`, `DELEGATION-MAP-LF.md`,
  `DOR-LF.md`. Không có **Cổng hiểu** nào được đóng đúng nghĩa (PM giải
  thích lại bằng lời + bắt lỗi AI) trước khi qua bước kế — chỉ có
  AskUserQuestion dạng chọn phương án, không đủ để chứng minh PM hiểu và
  phán xử, đúng kiểu rubber-stamp mà chương trình cảnh báo.
- **PM bắt lỗi này** ngay sau khi thấy walking skeleton chạy — hỏi thẳng "sao
  không đi từng step, không có WBS/risk list, cổng đóng đâu". Đây là bằng
  chứng PM hiểu quy trình và không rubber-stamp, dù là AI làm sai.
- **Xử lý:** dừng code, quay lại làm đúng thứ tự từ bước [0], viết lại các
  artefact còn thiếu bằng văn bản, mở Cổng hiểu thật ở từng bước (PM tự giải
  thích + bắt lỗi AI) trước khi cho phép bước tiếp theo chạy. Code walking
  skeleton đã build được giữ lại làm tham chiếu kỹ thuật, nhưng coi như
  "chưa chính thức" cho tới khi SCOPE/SPEC/ARCH/WBS/DOR được PM duyệt và các
  artefact khớp lại với những gì đã code.

## Walking Skeleton (Hà Nội + Thừa Thiên Huế)

- **npm package name không hợp lệ**: `create-next-app` chạy trực tiếp trong
  `07_Local_Food` báo lỗi vì tên thư mục có chữ hoa (npm cấm tên package viết
  hoa). Xử lý: scaffold vào thư mục tạm `local-food-tmp`, move toàn bộ file
  lên thư mục gốc, sửa `package.json.name` thành `"local-food"`.
- **pnpm virtual store lệch đường dẫn**: sau khi move file từ thư mục tạm,
  `node_modules` cũ trỏ symlink về đường dẫn tạm không còn tồn tại → pnpm báo
  lỗi `ERR_PNPM_UNEXPECTED_VIRTUAL_STORE`. Xử lý: xoá `node_modules` +
  `.next`, `pnpm install` lại từ đầu.
- **GeoJSON nguồn có 65 feature thay vì 63**: file gộp
  `Provinces_included_Paracel_SpratlyIslands_combine.geojson` từ
  Free-GIS-Data vẫn tách Đà Nẵng và Khánh Hòa thành 2 feature riêng (đất liền
  + đảo) dù tên "combine" gợi ý đã gộp. Nếu dùng thẳng sẽ bị trùng
  slug/centroid sai. Xử lý: viết `scripts/normalize-geojson.mjs` gộp các
  feature trùng tên thành 1 MultiPolygon, xác nhận đủ đúng 63 tỉnh trước khi
  ghi file.
- **Tìm ảnh Wikimedia qua bash curl bị lỗi encode tiếng Việt**: chạy trực
  tiếp `curl` với tham số có dấu trong Git Bash trên Windows trả về kết quả
  sai/rỗng (cảnh báo "non-normalized data"). Xử lý: chuyển sang dùng
  `encodeURIComponent` trong Node để tạo URL rồi gọi qua `WebFetch` — ổn định
  hơn nhiều so với shell tự encode.
- **Ảnh Wikimedia 429 khi test dồn dập**: lúc chạy Playwright screenshot 3
  trang liên tiếp trong vài giây, 3/8 ảnh món (Cơm hến, Bánh khoái, Bánh bèo)
  bị vỡ do server ảnh trả 429 (rate limit), không phải lỗi code. Xác minh lại
  bằng cách đợi rồi curl trực tiếp từng URL — 2/3 ảnh tự phục hồi sau ~15s,
  1 ảnh (`Banh_beo.jpg`) vẫn 429 dai hơn, cần theo dõi thêm khi mở app thật
  (không phải burst-test).
- **`generateMetadata` dùng `params.slug` đồng bộ (sai)**: khi viết trang
  `/provinces/[slug]`, hàm `generateStaticParams`/page component đã await
  đúng `params` (Next.js 16 trả `params` dạng Promise), nhưng
  `generateMetadata` lúc đầu lại đọc `params.slug` trực tiếp không await —
  dev server báo lỗi runtime ngay khi mở trang tỉnh (`params is a Promise`).
  Bắt được lỗi này khi đọc log `pnpm dev` sau lần chạy đầu, không phải khi
  build (build vẫn qua vì lỗi chỉ nổ ở runtime dynamic API). Xử lý: sửa
  `generateMetadata` thành `async` và `await params` giống page component.
- **`lib/provinces.ts` chỉ ép kiểu `as Province`, không validate thật**
  (phát hiện khi làm W1-1): ARCH-LF.md từng ghi "TypeScript sẽ báo lỗi nếu
  sai field" — SAI, vì `JSON.parse(...) as Province` bỏ qua kiểm tra hoàn
  toàn, dữ liệu sai vẫn qua được build rồi vỡ ở runtime khó dò. Xử lý: thêm
  `zod`, viết `lib/schema.ts` validate thật (bao gồm ràng buộc chéo
  `heroDishSlug` phải trỏ đúng 1 dish có `isHero: true`), `lib/provinces.ts`
  giờ `throw` lỗi rõ ràng (tên file + field sai) nếu data không đúng schema.
- **Nội dung Bánh cuốn Thanh Trì sai lệch thật** (phát hiện khi làm W1-2,
  đúng như NFR content integrity dự đoán): tao viết ban đầu là "cuốn nhân
  thịt băm/mộc nhĩ", nhưng đối chiếu Wikipedia tiếng Việt xác nhận bánh cuốn
  Thanh Trì đặc trưng là **KHÔNG nhân** — bánh tráng mỏng như giấy, ăn kèm
  chả lụa riêng chứ không cuộn nhân bên trong. Đã sửa description/
  keyIngredients/prepOutline cho đúng, thêm `sourceRefs` trỏ về bài
  Wikipedia làm bằng chứng đối chiếu.
- **Playwright fullPage screenshot làm hiểu nhầm bug** (khi tự kiểm tra
  W1-6): chụp `fullPage` trang tỉnh sau khi thêm `whileInView` cho DishCard
  cho thấy chỉ 1/4 món hiện, khoảng trắng lớn phía dưới — tưởng là bug thật.
  Kiểm tra lại bằng cuộn tay thật (mouse.wheel) thay vì chỉ resize-capture
  toàn trang: cả 4 card đều render đúng, opacity đạt 1 khi thực sự cuộn tới.
  Kết luận: đây là hạn chế của cách Playwright chụp `fullPage` (resize
  viewport không replay lại IntersectionObserver đúng cách), không phải lỗi
  code — ghi lại để không hoảng khi gặp lại kiểu False Positive này.
- **Ảnh hero trang chủ + Lightbox ban đầu không có xử lý lỗi tải** (phát
  hiện khi tự test sau đợt review UX/UI): dùng `next/image` trần không qua
  `ImageWithFallback`, nên khi gặp lại đúng kiểu rate-limit Wikimedia đã biết
  (GAP-01 tương tự nhưng ở 2 chỗ mới), ảnh hiện icon vỡ/hộp đen thay vì
  fallback đẹp. Xác minh kỹ trước khi kết luận: `ProvinceHero` dùng cùng URL
  vẫn load được cùng lúc — chứng tỏ không phải lỗi code logic mà là rate
  limit thoáng qua tự gây ra khi test dồn dập, nhưng đúng là 2 component mới
  thiếu resilience nhất quán với phần còn lại của site. Xử lý: thêm
  `HeroPhotoBackground.tsx` (tự ẩn khi lỗi) và `onError` trong `Lightbox.tsx`
  (hiện thông báo thay vì hộp đen).
- **Basemap dùng style demo công khai của MapLibre** (`demotiles.maplibre.org`)
  vì chưa có MapTiler key — style này rất tối giản (chỉ có màu nước biển,
  không có địa hình/nhãn), không phản ánh chất lượng bản đồ thật. Cần thay
  bằng MapTiler style URL ngay khi có `NEXT_PUBLIC_MAPTILER_KEY`.
