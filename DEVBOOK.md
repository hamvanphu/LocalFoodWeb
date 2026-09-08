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

  **⚠️ Làm rõ để không bị hiểu sai (bổ sung 2026-09-08):** đưa centroid về phần đất
  liền là quyết định **hiển thị marker ẩm thực**, **không liên quan tới chủ quyền**.
  **Hoàng Sa và Trường Sa thuộc chủ quyền Việt Nam** — Hoàng Sa là huyện Hoàng Sa
  (TP Đà Nẵng), Trường Sa là huyện Trường Sa (tỉnh Khánh Hòa). Lý do thuần kỹ thuật:
  bún chả cá Nha Trang không nấu ở Trường Sa, nên marker *món ăn* phải nằm nơi món ăn
  thực sự có. Chủ quyền được thể hiện bằng **lớp riêng** (`data/sovereignty.json` +
  `SovereigntyMarker.tsx`), hiện ở **mọi mức zoom** kể cả khung mặc định — xem mục
  dưới.
- **[CHỦ QUYỀN] Bản đồ không thể hiện Hoàng Sa và Trường Sa** (PM yêu cầu rà soát,
  2026-09-08): kiểm bằng ảnh chụp bản đồ thật thì thấy **hai thiếu sót**. Một, khung
  nhìn mặc định dừng ở kinh độ 109,6°Đ nên **cả hai quần đảo nằm ngoài tầm nhìn** —
  người mở trang không hề thấy. Hai, basemap MapTiler chỉ ghi nhãn quốc tế
  (**"PARACEL ISLANDS"**, **"South China Sea"**), không có "Hoàng Sa", "Trường Sa",
  "Biển Đông", và không thể hiện chủ quyền. **Xử lý:** mở rộng khung mặc định tới
  114,4°Đ / 8,0°B để bao cả hai; thêm lớp `data/sovereignty.json` +
  `SovereigntyMarker.tsx` hiện ở mọi mức zoom với nhãn tiếng Việt kèm **đơn vị hành
  chính quản lý**, cộng nhãn "Biển Đông"; marker chủ quyền cố ý khác kiểu marker món
  ăn (hình thoi viền đỏ, không phải ảnh tròn) để không bị nhầm là điểm ẩm thực; bấm
  vào quần đảo dẫn tới trang tỉnh quản lý. **Bài học:** đây là loại thiếu sót **không
  cổng nào bắt được** — build sạch, `check:geo` PASS, QA PASS, 7 KPI đạt — vì chưa ai
  đặt ra yêu cầu đó. Nó chỉ lộ khi có người nhìn bản đồ và hỏi *"bản đồ này đã đúng
  chưa"* thay vì *"bản đồ này có chạy không"*. Ghi thành **OP-12** trong
  `OPERATING-LOG-LF.md`.
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
- **3 link nguồn đã chết (404) nằm im trong dữ liệu — zod không bắt được** (phát hiện
  khi spot-check R2, 2026-09-06): kiểm tự động toàn bộ **213 URL duy nhất** trong
  `data/provinces/*.json` thì 191 OK, 22 có vấn đề. Sau khi thử lại bằng User-Agent
  trình duyệt để loại nhiễu, còn **3 link chết thật**: `sunparadiseland.com` (Ốc Hải
  Phòng), `ipa.quangtri.gov.vn` (Bánh ướt Phương Lang) và
  `khuyennong.thainguyen.gov.vn` (Bánh chưng Bờ Đậu) — đáng chú ý **2 trong 3 là cổng
  thông tin của chính quyền tỉnh**, tức nguồn tưởng là bền nhất lại chết. **Điểm cốt
  lõi:** `provinceSchema` ép mỗi món phải có `sourceRef` và `pnpm build` luôn PASS,
  nhưng schema **chỉ kiểm có URL, không kiểm URL còn sống** — đây là khoảng trống thật
  giữa "validate PASS" và "nội dung có thể tra lại được", đúng bản chất rủi ro R2.
  **Xử lý:** thay cả 3 bằng nguồn đã verify còn sống và **chất lượng cao hơn** (Tuổi
  Trẻ + Thanh Niên cho Quảng Trị, Báo Thái Nguyên cho Thái Nguyên) — tình cờ nâng cấp
  từ site du lịch/cổng tỉnh lên báo chính thống. **Bài học:** cần kiểm link định kỳ,
  không coi `sourceRef` là xong vĩnh viễn; link mục (link rot) là rủi ro dài hạn của
  mọi hồ sơ dựa trên nguồn web.
- **19 link còn lại KHÔNG phải lỗi — suýt sửa nhầm**: trong 22 link "có vấn đề" ban
  đầu, 19 link thực ra vẫn sống, chỉ bị chặn khi gọi bằng script: `vietnamnet.vn`
  (7 link, chặn request tự động), `vinpearl.com` (403), `hanam.gov.vn` và
  `laocaitourism.vn` (chứng chỉ SSL hết hạn — lỗi của site, nội dung vẫn còn),
  `dulichnahang.com` (502 tạm thời, thử lại thì 200). Hai domain `tourtaynguyen.com.vn`
  và `thanhpho.sonla.gov.vn` không phân giải được từ máy này nhưng **DNS xác nhận có
  tồn tại** — nhiều khả năng chặn theo vùng, không phải AI bịa domain. **Nếu chỉ nhìn
  báo cáo lỗi đầu tiên rồi đi sửa hết 22 link thì đã thay nhầm 19 nguồn đang tốt** —
  phải xác minh lại bằng công cụ khác (curl + UA thật, tra DNS) trước khi kết luận.

---

# Phần B — Quyết định uỷ quyền, cổng fail-closed, hard-stop

> **Bổ sung 2026-09-06.** Phần A ở trên ghi *AI sai → PM sửa*. Nhưng `§8.3` của
> `PM-AI-Bootcamp-Program-v1.0.md` yêu cầu Dev Book còn phải ghi **3 vế nữa**:
> quyết định delegate **mức L mấy & vì sao**, **cổng nào fail-closed**, và **hard-stop**
> nào gặp phải. Ba vế đó trước giờ nằm rải rác ở `DELEGATION-MAP-LF.md` và commit
> message — gom lại đây cho đúng yêu cầu bằng chứng.

## B1. Quyết định uỷ quyền — mức L và lý do thật

| Việc | Mức | Vì sao mức đó, chứ không cao/thấp hơn |
|---|---|---|
| Viết code UI, component, motion | **L3 / Leash A** | Sai thì thấy ngay bằng mắt và sửa rẻ. Không đáng bắt PM duyệt từng dòng — PM không đọc code được, duyệt cũng chỉ là hình thức (chính là rubber-stamping). |
| Viết nội dung món ăn | **L2-L3 + Content Gate** | Không để L3 thuần vì **sai nội dung không lộ ra bằng build hay test** — phải người biết ẩm thực đọc mới thấy. Thực tế đã bắt được lỗi thật: bánh cuốn Thanh Trì mô tả sai. |
| Kiểm thử/QA | **L2-L3 + gate bắt buộc PM tự test** | **PM bổ sung dòng này ở Cổng hiểu bước [6]** — bảng gốc thiếu hẳn. Lý do: nếu để AI tự báo "PASS" thì cổng chất lượng thành vô nghĩa. |
| Đọc/ghi `.env.local`, API key | **L4 / Leash A+** | Chạm secret. AI đọc biến qua code nhưng **không tự điền giá trị, không in key ra output**. Đã giữ đúng suốt dự án — kiểm lịch sử git không có key nào bị commit. |
| `git commit` (local) | **L3 / A** | Rẻ, đảo ngược được, PM xem lại qua `git log`. |
| **`git push` / deploy** | **L4 / A+** | Hành động **ra ngoài**, người khác thấy được, khó thu hồi. |
| Tạo Supabase project, lấy key | **L4 / A+** | AI **không tự đăng ký dịch vụ ngoài** thay PM. Giữ đúng: PM tự tạo, tự dán key. |
| Viết + chạy RLS policy | **L4 / A+** | Sai policy = lộ/mất toàn bộ dữ liệu. AI viết SQL, **PM tự chạy** trên dashboard. Giữ đúng: PM chạy cả `schema.sql` lẫn `migration-02`. |
| Cắt scope (Phương án A→B) | **L2 — người quyết** | PM chốt rõ: chữ "tự động" trong `EST-LF.md` nghĩa là *không cần bàn lại từ đầu*, **không phải** AI tự quyết. |

### Thay đổi uỷ quyền trong quá trình làm

- **2026-09-06 — cấp quyền `git push` và deploy.** Trước đó `DELEGATION-MAP-LF.md`
  ghi *"A+ — CHƯA CẤP hành động, chỉ chuẩn bị"*. PM ra lệnh rõ ràng từng lần
  (*"nhớ push code lên git nhé"*, *"Cài Vercel CLI để tao deploy"*), đúng điều kiện
  đã ghi sẵn là "PM ra lệnh rõ ràng từng lần". **Quyền này là theo lệnh, không phải
  cấp vĩnh viễn** — mỗi lần deploy vẫn cần PM nói.
- **RLS thì không nới.** Dù có thể gọi API Supabase, AI vẫn đưa SQL cho PM tự chạy,
  đúng A+. Đây là chỗ dễ tặc lưỡi "chạy hộ cho nhanh" nhất, và đã không làm.

## B2. Cổng fail-closed — cổng nào chặn, và đã chặn thật chưa

*Fail-closed = không đạt thì **dừng**, không phải ghi chú rồi đi tiếp.*

| Cổng | Fail-closed? | Đã chặn thật lần nào chưa |
|---|---|---|
| **Cổng hiểu bước [0]→[7]** | ✅ Có | Chặn thật **1 lần lớn**: AI nhảy thẳng vào code, bỏ qua [0]-[7]. PM bắt → **quay lại làm đúng thứ tự từ đầu**, không cho đi tiếp. |
| **W1-9 "UI wow"** | ✅ Có | Chặn thật **2 lần**: FAIL → W1-9b → vẫn FAIL → W1-9c mới qua. |
| **zod validate dữ liệu tỉnh** | ✅ Có, tự động | Build **fail hẳn** nếu thiếu `sourceRef` hoặc `heroDishSlug` không khớp. Không có đường vòng. |
| **RLS trước khi coi US-14 xong** (R11) | ✅ Có | Không chỉ chạy migration rồi tin — **tự tấn công DB** để xác nhận: DELETE/UPDATE/lách kiểm duyệt đều 401. |
| **A11y (axe-core)** | ⚠️ Nửa | Có chạy và sửa hết 5 lỗi, nhưng **không nối vào build** — chạy tay. Lần sau sót thì không ai chặn. |
| **Performance (LCP)** | ❌ Không | **Đã FAIL và vẫn cho đi tiếp** — quyết định có ý thức, ghi thành R12: bản đồ là tính năng lõi, không bỏ để lấy điểm đẹp. Ghi rõ đây là cổng **fail-open có chủ đích**, không phải quên. |
| **Kiểm nội dung (R2)** | ❌ Không | Chỉ có `sourceRef` bắt buộc — mà OP-11 chứng minh là chưa đủ (3 link 404 vẫn lọt). Spot-check mới ở mức đọc lướt. |

**Điều trung thực nhất rút ra:** trong 7 cổng thì **4 fail-closed thật**, 1 nửa vời,
**2 fail-open** — và cả 2 cái fail-open đều là cổng về **chất lượng nội dung/trải
nghiệm**, không phải về kỹ thuật. Đúng chỗ khó tự động hoá nhất.

## B3. Hard-stop — chỗ buộc phải dừng chờ người

| Hard-stop | Chặn cái gì | Phân xử |
|---|---|---|
| **Không có MapTiler key** (2026-08-26 → 09-03) | Bản đồ chỉ chạy style demo, không verify được giao diện thật | Không dừng cả dự án. Build tiếp với style demo, **ghi điều kiện cứng: key phải có trước W1-11**. Đã đáp ứng đúng hạn. |
| **Không có Supabase key** (2026-08-26 → 09-06) | Toàn bộ tính năng Review/Rating | PM chủ động **hoãn hẳn tính năng** (2026-09-03) để dồn lực cho dữ liệu + QA, thay vì để nó chặn tiến độ. Mở lại khi có thời gian. |
| **AI không tự đăng ký dịch vụ ngoài** | MapTiler, Supabase, Vercel, GitHub | Luật cứng, không nới lần nào. AI chuẩn bị sẵn mọi thứ (SQL, config, lệnh) rồi **dừng chờ PM**. |
| **Vercel Deployment Protection** (2026-09-06) | Người ngoài không xem được site | AI **không tự tắt** — thử qua API bị `Not authorized`, và CLI không có lệnh. Dừng, đưa PM đường dẫn chính xác để tự tắt. |
| **Migration DB chưa chạy** (2026-09-06) | US-15 sẽ lỗi toàn bộ nếu deploy trước | AI **cố ý không deploy**, kiểm `kind` chưa tồn tại → dừng, chờ PM chạy SQL. Deploy sau khi xác nhận cột đã có. |
| **Giới hạn phiên làm việc** (2026-09-06) | 1 agent research 10 tỉnh Tây Nam Bộ chết giữa chừng | Không bỏ qua. Chia lại thành lô nhỏ hơn, chạy lại phần thiếu, đối chiếu đủ 63/63 file trước khi đi tiếp. |

**Điểm chung:** không hard-stop nào bị "lách". Chỗ dễ lách nhất là RLS và deploy —
đều có đường kỹ thuật để AI tự làm, và đều đã dừng đúng.
