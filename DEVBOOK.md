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
- **Redesign explorer làm mất deep-link `#dish-slug`**: sau khi đổi trang
  tỉnh sang `ProvinceDishExplorer` (grid + Sheet), link kiểu
  `/provinces/ha-noi#bun-cha` không còn tự cuộn/mở gì cả vì Sheet mặc định
  đóng và DishTile không có `id` anchor như DishCard cũ. Phát hiện lại khi
  làm Search (kết quả tìm kiếm món ăn cần trỏ thẳng vào đúng món). Xử lý:
  `ProvinceDishExplorer` đọc `window.location.hash` lúc mount, tự mở Sheet
  đúng món nếu khớp slug.
- **`lib/provinces.ts` cache module-level trả dữ liệu cũ trong dev server**
  (phát hiện khi thêm 6 tỉnh mới): sau khi thêm file JSON mới vào
  `data/provinces/`, `pnpm dev` đang chạy sẵn từ trước **không tự thấy** file
  mới — route `/provinces/an-giang` trả 404 dù file đã tồn tại trên đĩa,
  parent do biến `cache` trong `lib/provinces.ts` chỉ đọc thư mục 1 lần rồi
  giữ mãi trong bộ nhớ tiến trình Node, JSON đọc qua `fs` không nằm trong đồ
  thị module mà webpack HMR theo dõi. Xác minh bằng cách restart `pnpm dev`
  → route chạy đúng ngay. **Ghi nhớ cho việc thêm tỉnh sau này: phải restart
  dev server sau khi thêm file `data/provinces/*.json` mới**, không tự nhận
  qua hot-reload.
- **[NGHIÊM TRỌNG] `maplibre-gl@6.5.0` không bao giờ load xong vector tile
  source** (phát hiện khi PM báo "map không hiển thị luôn" sau khi dán
  MapTiler key thật): style.json/sprite/tiles.json đều tải thành công (HTTP
  200), nhưng source `maptiler_planet` (nguồn tile chính) kẹt mãi ở trạng
  thái `isSourceLoaded: false`, không bao giờ bắn request `.pbf` tile thật
  nào, khiến `map.on('load')` không bao giờ fire — bản đồ mãi mãi là canvas
  trống. Tái hiện được cả ở `pnpm dev` lẫn `pnpm build && next start`
  (không phải do React Strict Mode/HMR double-mount). Debug bằng cách gắn
  listener `onStyleData/onSourceData/onData/onIdle` trực tiếp vào
  `<Map>` để lần dấu — xác nhận vấn đề nằm ở chính base style, không phải 2
  layer GeoJSON tự thêm (tắt hẳn `hero-bubbles`/`province-pins` vẫn lỗi y
  hệt). **Xử lý:** hạ `maplibre-gl` từ `^6.5.0` xuống `4.7.1` (bản ổn định,
  dùng rộng rãi) — map load đúng ngay, đủ 8 bubble hiện đúng vị trí, click
  điều hướng đúng. Đây là bug thật của thư viện/môi trường (không phải lỗi
  code của mình), nhưng phải tự dò bằng tay vì không có thông báo lỗi rõ
  ràng nào từ MapLibre — ghi lại kỹ để nếu sau này nâng cấp maplibre-gl thì
  test lại kỹ trước khi merge.
- **Basemap dùng style demo công khai của MapLibre** (`demotiles.maplibre.org`)
  vì chưa có MapTiler key — style này rất tối giản (chỉ có màu nước biển,
  không có địa hình/nhãn), không phản ánh chất lượng bản đồ thật. Cần thay
  bằng MapTiler style URL ngay khi có `NEXT_PUBLIC_MAPTILER_KEY`.
- **[NGHIÊM TRỌNG — dữ liệu] Centroid Khánh Hòa và Đà Nẵng nằm giữa Biển Đông**
  (phát hiện khi mở rộng bản đồ ra đủ 63 tỉnh, PM yêu cầu 2026-09-06): file
  `data/geo/centroids.json` được sinh bằng cách lấy centroid hình học của
  polygon hành chính, mà polygon Khánh Hòa **bao gồm huyện đảo Trường Sa** và
  polygon Đà Nẵng **bao gồm huyện đảo Hoàng Sa** — nên centroid bị kéo hẳn ra
  ngoài khơi: Khánh Hòa `[112.818, 10.677]` (giữa quần đảo Trường Sa, cách Nha
  Trang ~450km), Đà Nẵng `[109.758, 16.237]` (vùng Hoàng Sa). Marker của 2 tỉnh
  này nổi giữa biển thay vì trên đất liền. **Đáng chú ý: Khánh Hòa nằm trong 8
  tỉnh MVP gốc** — nghĩa là lỗi đã tồn tại suốt từ walking skeleton, qua cả
  W1-11 QA (PM duyệt PASS) mà không ai phát hiện, chỉ lộ ra khi bản đồ đủ 63
  tỉnh làm marker ngoài biển trở nên bất thường rõ rệt. **Xử lý:** sửa
  `centroid` trong 2 file tỉnh về phần đất liền (Khánh Hòa `[109.15, 12.3]`,
  Đà Nẵng `[108.22, 16.06]`); giữ nguyên `centroids.json` vì nó là dữ liệu
  dẫn xuất từ geojson. **Bài học:** không tin centroid hình học cho đơn vị
  hành chính có quần đảo — phải mắt thường soi lại trên bản đồ thật.
- **Khung nhìn mặc định cắt mất mũi Cà Mau** (cùng đợt): `initialViewState`
  hard-code `center [107.5, 16.5] + zoom 5` chỉ vừa khung ở một tỉ lệ viewport
  nhất định; với khung bản đồ cao `70vh` trên màn 900px thì phần cực Nam bị
  đẩy ra ngoài, người dùng không thấy các tỉnh ĐBSCL nếu không tự kéo. **Xử
  lý:** đổi sang `fitBounds(VIETNAM_BOUNDS)` với padding — tự co giãn theo
  kích thước thật của khung nên không phụ thuộc chiều cao viewport; nút
  "Về toàn cảnh" cũng đổi sang `fitBounds` cho khớp. Vì `fitBounds` tự chọn
  zoom, phải đọc lại zoom thật trong `onLoad` (`map.getZoom()`) thay vì tin
  hằng số `VIETNAM_INITIAL_ZOOM`, nếu không marker vẽ sai kích thước ban đầu.
- **Bản đồ 2 tầng zoom (hero bubble ẩn/hiện theo zoom) thực chất giấu mất 55
  tỉnh**: thiết kế cũ chỉ hiện 8 bubble curated ở zoom thấp, tầng pin 63 tỉnh
  chỉ bật từ zoom ≥7 — nhưng ở zoom 7 khung nhìn chỉ còn vài tỉnh, nên tầng
  pin gần như vô dụng để duyệt cả nước; người dùng không có mức zoom nào thấy
  được toàn bộ 63 tỉnh. **Xử lý:** bỏ crossfade 2 tầng, hiện cả 63 tỉnh ở mọi
  mức zoom, phân cấp thị giác chuyển sang **kích thước marker nội suy theo
  zoom** (tỉnh nổi bật 36→60px, tỉnh thường 18→44px) + z-index cho tỉnh nổi
  bật nằm trên khi chồng nhau. Đánh đổi đã biết và chấp nhận: cụm tỉnh đồng
  bằng sông Hồng vẫn chồng marker ở zoom thấp — người dùng zoom vào là tách
  ra, đổi lại không tỉnh nào bị giấu hoàn toàn. Đã cập nhật US-01/US-02 trong
  `SPEC-LF.md` cho khớp hành vi thật.
- **Ảnh Wikimedia trả 502 qua `_next/image` lúc cache Vercel còn lạnh** (phát hiện
  khi kiểm thử production sau deploy, 2026-09-06): quét 6 trang trên site thật thấy
  **11 lỗi 502** ở đường tối ưu ảnh `/_next/image`, tất cả đều là ảnh nguồn từ
  `upload.wikimedia.org`. Nhưng số lỗi **dao động giữa các lần chạy** (2 → 0 → 11 → 0),
  đó là manh mối quan trọng: không phải bug tất định. Loại trừ 2 giả thuyết sai bằng
  đo đạc: (a) *"do ảnh quá nặng"* — sai, `Nem_chua_Thanh_Hoa.jpg` chỉ 12KB mà vẫn
  502, dù `Banh_beo.jpg` nặng tới 3MB; (b) *"do `quality={60}` không hợp lệ trong
  Next.js 16"* — gọi tay `_next/image?q=60` đúng là trả **400**, nhưng đó chỉ xảy ra
  khi tự ghép URL: trình duyệt thật luôn nhận `q=75` hợp lệ, và lần quét cuối ghi
  nhận **35/35 ảnh thành công**. Nguyên nhân thật: Wikimedia **chặn/giới hạn tần suất**
  khi Vercel fetch dồn dập nhiều ảnh gốc cùng lúc từ một dải IP — xác nhận được bằng
  `curl` không gửi `User-Agent` thì Wikimedia trả thẳng **403**. Sau khi Vercel cache
  ảnh xong thì ổn định hoàn toàn. **Không sửa code:** đây đúng là rủi ro **R5** đã
  lường trước và đã có `onError` fallback sang placeholder gradient (GAP-01), nên
  layout không vỡ kể cả lúc 502 — người xem đầu tiên của một ảnh chưa cache có thể
  thấy gradient thay vì ảnh, sau đó thì bình thường. **Bài học:** khi thấy lỗi mạng
  trên production, đo tỉ lệ lặp lại qua nhiều lần chạy trước khi kết luận là bug code
  — ở đây 3 lần chạy cho 3 kết quả khác nhau, nếu chỉ chạy 1 lần rồi kết luận sẽ đi
  sửa nhầm chỗ (`quality`, kích thước ảnh) mà không chạm tới nguyên nhân thật.
