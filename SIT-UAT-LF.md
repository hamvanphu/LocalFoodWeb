# [9] Test & Gate — Checklist QA (W1-11) — Local Food

> Cổng mặc-định-đóng: không tự test = coi như chưa xong. **Tao (AI) không được tự tuyên bố PASS** — mày tự tay làm từng bước, tick kết quả thật vào cột cuối. Cổng hiểu bước [6] đã chốt điều này.
> Dev server: `http://localhost:3000` (chạy `pnpm dev` nếu chưa có).

---

> ### ⚠️ US-01, US-02, US-03 đã được VIẾT LẠI ngày 2026-09-06
>
> Bản cũ mô tả *"8 chấm đỏ"*, *"chấm vàng nhỏ"*, *"chấm đỏ biến mất dần"* — **không
> còn đúng** sau 2 thay đổi: marker đổi sang **ảnh món ăn thật** (2026-09-03) và **bỏ
> hẳn cơ chế ẩn/hiện 2 tầng** (2026-09-06). Chi tiết ở `RTM-LF.md` GAP-T1.
>
> **Dấu PASS cũ của 3 mục này không còn giá trị** — cần PM test lại từ đầu.

## US-01 — Bản đồ hiện đủ 63 tỉnh ngay khi vào trang

| # | Bước làm | Kỳ vọng | PASS/FAIL |
|---|---|---|---|
| 1 | Mở trang chủ, cuộn xuống khối bản đồ, **không zoom tay** | Thấy marker rải khắp Việt Nam. Marker là **ảnh món ăn tròn** (món nào chưa có ảnh thì là nền gradient + icon dao dĩa), **không phải chấm màu đơn sắc** | ☐ |
| 2 | **Đếm nhanh hai đầu đất nước** | Thấy marker ở **cực Bắc (Hà Giang/Cao Bằng)** và **cực Nam (Cà Mau)** — cả hai **nằm trọn trong khung**, không bị cắt | ☐ |
| 3 | So sánh kích thước marker | Có **2 cỡ rõ rệt**: tỉnh nổi bật to hơn hẳn tỉnh thường (≈36px so với ≈18px) | ☐ |
| 4 | Nhìn nhãn tên món ở mức zoom mặc định | **Chưa có nhãn nào** — đúng thiết kế, tránh chữ chồng chữ khi nhìn toàn quốc | ☐ |

## US-01b — 🌏 Marker nằm đúng vị trí địa lý *(mục MỚI, sinh ra từ rủi ro R13)*

> **Vì sao có mục này:** marker Khánh Hòa từng nằm giữa quần đảo Trường Sa suốt 12
> ngày, **lọt qua zod + build + một vòng QA đã đánh PASS**, vì checklist cũ không có
> bước nào bắt nhìn vị trí. Xem `OPERATING-LOG-LF.md` OP-06.

| # | Bước làm | Kỳ vọng | PASS/FAIL |
|---|---|---|---|
| 1 | Ở zoom toàn quốc, **rà mắt vùng Biển Đông** | **Không marker nào nằm giữa biển** — mọi marker phải nằm trên đất liền hoặc sát bờ | ☐ |
| 2 | Kiểm riêng **Khánh Hòa** (Nha Trang) và **Đà Nẵng** | Cả hai nằm đúng dải ven biển miền Trung, **không trôi ra khơi** | ☐ |
| 3 | Kiểm vài tỉnh có đảo: **Kiên Giang, Bà Rịa-Vũng Tàu, Quảng Ngãi** | Nằm đúng phần đất liền, không bị đảo kéo lệch ra | ☐ |

## US-01c — 🇻🇳 Bản đồ thể hiện đúng chủ quyền biển đảo *(mục MỚI, 2026-09-08)*

> **Vì sao có mục này:** rà soát ngày 2026-09-08 phát hiện khung nhìn mặc định **không
> bao gồm Hoàng Sa và Trường Sa**, và basemap chỉ ghi nhãn quốc tế. Không cổng tự động
> nào bắt được — xem `OPERATING-LOG-LF.md` OP-12.

| # | Bước làm | Kỳ vọng | PASS/FAIL |
|---|---|---|---|
| 1 | Mở trang chủ, **không zoom, không kéo** | Thấy **cả hai** quần đảo trong khung: **Quần đảo Hoàng Sa** và **Quần đảo Trường Sa** | ☐ |
| 2 | Đọc nhãn từng quần đảo | Có đủ **tên tiếng Việt + đơn vị hành chính**: "Huyện Hoàng Sa, thành phố Đà Nẵng" và "Huyện Trường Sa, tỉnh Khánh Hòa" | ☐ |
| 3 | Nhìn vùng biển giữa bản đồ | Có nhãn **"BIỂN ĐÔNG"** (không chỉ để nhãn quốc tế "South China Sea" của basemap) | ☐ |
| 4 | So sánh hình dạng marker quần đảo với marker tỉnh | **Khác kiểu rõ rệt** — quần đảo là hình thoi viền đỏ + nhãn chữ, không phải ảnh món ăn hình tròn | ☐ |
| 5 | Bấm vào **Quần đảo Hoàng Sa** | Tới trang Đà Nẵng — tỉnh quản lý huyện đảo này | ☐ |
| 6 | Bấm vào **Quần đảo Trường Sa** | Tới trang Khánh Hòa | ☐ |
| 7 | Bấm nút **la bàn** (về toàn cảnh) rồi nhìn lại | Cả hai quần đảo **vẫn nằm trong khung** sau khi reset | ☐ |

## US-02 — Zoom vào: marker to dần, nhãn hiện thêm, **không tỉnh nào biến mất**

| # | Bước làm | Kỳ vọng | PASS/FAIL |
|---|---|---|---|
| 1 | Bấm nút **+** trên toolbar **1 lần** | Marker **to lên**, vẫn **đủ 63 tỉnh**, chưa có nhãn | ☐ |
| 2 | Bấm **+** thêm lần nữa (tổng 2 lần) | Bắt đầu hiện nhãn tên món, nhưng **chỉ ở các tỉnh nổi bật** (≈8 nhãn) | ☐ |
| 3 | Bấm **+** thêm lần nữa (tổng 3 lần) | **Mọi tỉnh đều có nhãn** tên món bên dưới | ☐ |
| 4 | **Điểm quan trọng nhất:** trong suốt quá trình zoom | **Không marker nào biến mất hay bị thay thế** — phân cấp bằng **kích thước**, không bằng ẩn/hiện *(khác hẳn thiết kế cũ)* | ☐ |
| 5 | Bấm nút **la bàn** trên toolbar | Bản đồ bay về toàn cảnh Việt Nam, marker nhỏ lại, nhãn biến mất | ☐ |

## US-03 — Bấm marker vào đúng trang tỉnh

| # | Bước làm | Kỳ vọng | PASS/FAIL |
|---|---|---|---|
| 1 | Bấm vào marker khu vực **Hà Nội** | Chuyển sang `/provinces/ha-noi`, thấy tên món, mô tả, nguyên liệu, cách làm, cách ăn | ☐ |
| 2 | Lặp lại với **1 tỉnh miền Trung** (vd Quảng Nam) và **1 tỉnh miền Nam** (vd Cần Thơ) | Cả 2 đều vào đúng trang, đủ nội dung | ☐ |
| 3 | Thử **1 tỉnh mới thêm** ngoài 8 tỉnh MVP gốc (vd Cao Bằng, Trà Vinh, Kon Tum) | Vào đúng trang, đủ nội dung — chứng minh 55 tỉnh mới cũng hoạt động | ☐ |
| 4 | Rê chuột lên 1 marker (không bấm) | Hiện popup tên tỉnh + tên món chủ đạo | ☐ |

## US-04 — Ảnh thật hoặc placeholder, không vỡ layout

| # | Bước làm | Kỳ vọng | PASS/FAIL |
|---|---|---|---|
| 1 | Vào `/provinces/hai-phong`, bấm mở món **"Ốc Hải Phòng"** (món không có ảnh thật) | Hiện **placeholder màu gradient** + tên món, KHÔNG phải ô trống hay icon vỡ | ☐ |
| 2 | Vào `/provinces/an-giang`, kiểm tra món **"Bún cá Châu Đốc"** (hero, không có ảnh) và **"Gỏi sầu đâu"** | Cả 2 đều có placeholder đẹp, không vỡ | ☐ |
| 3 | Vào `/provinces/ha-noi`, bấm ảnh món **"Phở bò Hà Nội"** (có ảnh thật) | Ảnh phóng to (lightbox), có ghi chú nguồn/license phía dưới | ☐ |

## US-05 — Danh sách tỉnh thay thế bản đồ

| # | Bước làm | Kỳ vọng | PASS/FAIL |
|---|---|---|---|
| 1 | Ở trang chủ, cuộn xuống dưới bản đồ | Thấy khối **"Tỉnh nổi bật"** với card có ảnh, bấm vào 1 card | ☐ |
| 2 | Bấm link **"Xem tất cả 8 tỉnh"** | Sang trang `/browse`, thấy đủ 8 tỉnh nhóm theo Miền Bắc/Trung/Nam | ☐ |
| 3 | Ở `/browse`, thử bấm 1 chip lọc (vd "Tết Trung Thu") | Hiện thông báo "chưa có tỉnh nào gắn dịp này" (đúng, vì data thật chưa có) | ☐ |

## US-06 — Quay lại bản đồ từ trang tỉnh

| # | Bước làm | Kỳ vọng | PASS/FAIL |
|---|---|---|---|
| 1 | Ở bất kỳ trang tỉnh nào, bấm link **"← Quay lại bản đồ"** | Về `/`, bản đồ tải lại bình thường, không lỗi | ☐ |

## US-07 — Responsive di động

| # | Bước làm | Kỳ vọng | PASS/FAIL |
|---|---|---|---|
| 1 | Mở DevTools (F12) → bật chế độ responsive → chọn khung ~375px (iPhone SE) | Trang chủ: không cuộn ngang, chữ đọc được, bản đồ vẫn thao tác được | ☐ |
| 2 | Ở khung 375px, mở 1 trang tỉnh, thử cả 2 chế độ **Tổng quan/Hành trình** | Lưới món tự co lại hợp lý, "Hành trình" cuộn ngang mượt bằng ngón tay (hoặc kéo chuột) | ☐ |

## US-08 — 404 khi slug không tồn tại

| # | Bước làm | Kỳ vọng | PASS/FAIL |
|---|---|---|---|
| 1 | Gõ thẳng `http://localhost:3000/provinces/khong-ton-tai` | Hiện trang 404 **tuỳ chỉnh** (icon bản đồ gạch chéo, nút "Về bản đồ ẩm thực"), không phải trang lỗi mặc định Next.js | ☐ |

## Kiểm tra thêm — GAP-01/GAP-02 (đã tự nhận trước, giờ xác nhận đã fix)

| # | Bước làm | Kỳ vọng | PASS/FAIL |
|---|---|---|---|
| 1 | Vào 1 trang tỉnh bất kỳ, để ý caption dưới ảnh thật | Có ghi rõ tên tác giả + loại license (vd "CC BY-SA 4.0") | ☐ |
| 2 | (Không bắt buộc, khó test tay) Ảnh lỗi tải lúc runtime → tự chuyển placeholder — đã sửa code ở `ImageWithFallback`, nếu có nghi ngờ báo lại | Không thấy icon ảnh vỡ khi duyệt bình thường | ☐ |

---

## 🔒 Cổng hiểu — W1-11

Sau khi tick xong bảng trên:
1. Nói lại **có bao nhiêu mục FAIL**, mục nào — nếu có FAIL thật, báo ngay, đừng tự sửa qua loa cho qua.
2. Nếu tất cả PASS: xác nhận rõ ràng "W1-11 PASS" để tao ghi vào `WBS-LF.md` và chuyển sang W1-11a (Accessibility audit).

---

## US-14 — Đánh giá & bình luận món ăn *(bổ sung 2026-09-06)*

> Bối cảnh: tính năng dùng Supabase (ARCH D3). **Rủi ro R11 (RLS)** phải được xác
> nhận trước khi coi là xong — mục 0 dưới đây là bắt buộc, không phải tuỳ chọn.

### 0. Cổng bảo mật — RLS *(làm trước, fail thì dừng, không test tiếp)*

| # | Bước làm | Kỳ vọng | PASS/FAIL |
|---|---|---|---|
| 0.1 | Supabase → SQL Editor chạy `select relrowsecurity from pg_class where relname='dish_reviews';` | Trả về `true` | ☐ |
| 0.2 | Chạy `select policyname, cmd from pg_policies where tablename='dish_reviews';` | Đúng **2 dòng**: 1 `SELECT`, 1 `INSERT`. Không có UPDATE/DELETE | ☐ |

*(Đã kiểm bằng script 2026-09-06: gửi review hợp lệ → 201; `status=hidden` → 401;
`rating=99` → 401; comment 600 ký tự → 401; DELETE cả bảng → 401; UPDATE → 401.)*

### 1. Luồng chính

| # | Bước làm | Kỳ vọng | PASS/FAIL |
|---|---|---|---|
| 1.1 | Mở 1 trang tỉnh, bấm vào 1 món để mở panel chi tiết, cuộn xuống cuối | Thấy khối **"Đánh giá món này"** | ☐ |
| 1.2 | Món chưa ai đánh giá | Hiện "Chưa có đánh giá nào cho món này — bạn là người đầu tiên nhé!", **không phải vùng trắng** | ☐ |
| 1.3 | Chọn 4 sao, nhập tên, nhập cảm nhận, bấm **Gửi đánh giá** | Hiện "Cảm ơn bạn đã đánh giá!" và review **xuất hiện ngay trong danh sách, không cần tải lại trang** | ☐ |
| 1.4 | Sau khi có ≥1 đánh giá, nhìn lên tiêu đề khối | Hiện số sao trung bình + "(N đánh giá)" | ☐ |
| 1.5 | **Mở cùng món đó trên thiết bị/trình duyệt khác** | Vẫn thấy đánh giá vừa gửi → chứng minh dữ liệu dùng chung, không phải localStorage | ☐ |

### 2. Trường hợp lỗi *(phần dễ bị bỏ qua nhất)*

| # | Bước làm | Kỳ vọng | PASS/FAIL |
|---|---|---|---|
| 2.1 | Không chọn sao, bấm Gửi | Chặn, báo "Hãy chọn số sao từ 1 đến 5." | ☐ |
| 2.2 | Chọn sao nhưng bỏ trống tên, bấm Gửi | Chặn, báo "Hãy nhập tên của bạn." | ☐ |
| 2.3 | Gửi 1 đánh giá rồi gửi tiếp ngay cho **cùng món** | Chặn, báo đợi một chút (rào chắn spam tối thiểu, RISK R10) | ☐ |
| 2.4 | Thử dán > 500 ký tự vào ô cảm nhận | Ô input tự chặn ở 500 (`maxLength`); bộ đếm hiện `500/500` | ☐ |

### 3. Không làm hỏng phần còn lại

| # | Bước làm | Kỳ vọng | PASS/FAIL |
|---|---|---|---|
| 3.1 | Xem lại toàn trang tỉnh | Tên món, mô tả, nguyên liệu, cách làm, cách ăn, nguồn tham chiếu **vẫn render như cũ** — nội dung món vẫn tĩnh (SSG) | ☐ |
| 3.2 | *(nếu muốn thử)* Đổi `NEXT_PUBLIC_SUPABASE_URL` thành giá trị sai rồi tải lại | Trang món **vẫn xem bình thường**, chỉ khối đánh giá báo lỗi — Supabase chết không kéo sập cả trang | ☐ |

### 4. Việc dọn dẹp

| # | Bước làm | Kỳ vọng | PASS/FAIL |
|---|---|---|---|
| 4.1 | Supabase → Table Editor → `dish_reviews`, xoá các dòng có `province_slug = '__test__'` và các review kiểm thử | Bảng sạch trước khi nộp bài. **Lưu ý:** phải xoá từ dashboard vì anon key **không có quyền DELETE** — đó là RLS đang làm đúng việc | ☐ |

---

## US-15 — Báo nội dung sai *(bổ sung 2026-09-06)*

> Điều kiện: đã chạy `supabase/migration-02-content-report.sql`.

| # | Bước làm | Kỳ vọng | PASS/FAIL |
|---|---|---|---|
| 1 | Mở 1 món, cuộn tới khối đánh giá | Thấy **2 nút chế độ**: "Đánh giá món" và "Báo nội dung sai" | ☐ |
| 2 | Bấm **Báo nội dung sai** | Phần chấm sao **biến mất** (báo lỗi không phải chấm điểm món); có dòng giải thích báo lỗi gửi riêng tới quản trị | ☐ |
| 3 | Nhập tên, để mô tả 3 ký tự, bấm Gửi | Chặn: "Hãy mô tả chỗ sai (ít nhất 10 ký tự)…" | ☐ |
| 4 | Nhập mô tả đủ dài, bấm **Gửi báo lỗi** | Hiện "Đã gửi tới người quản trị…" | ☐ |
| 5 | Nhìn danh sách đánh giá bên dưới | Báo lỗi vừa gửi **KHÔNG xuất hiện** ở đó | ☐ |
| 6 | Bấm lại **Đánh giá món** | Phần chấm sao hiện lại, gửi đánh giá bình thường | ☐ |
| 7 | Vừa chấm sao xong, chuyển ngay sang báo lỗi cùng món | **Không bị chặn** bởi cooldown — 2 hành động tính riêng | ☐ |
| 8 | Supabase → SQL Editor, chạy câu 4.3 trong file migration | Thấy đúng báo lỗi vừa gửi | ☐ |

*(Đã kiểm tự động trên production 2026-09-06: sao ẩn đúng, chặn mô tả ngắn đúng, gửi
thành công, báo lỗi không lọt ra danh sách công khai, chuyển chế độ hoạt động. Ở tầng
database: `content_report` thiếu mô tả → 401, mô tả 5 ký tự → 401, `review` thiếu sao
→ 401, `kind` giả mạo → 401, và đọc công khai lọc `kind=content_report` trả về rỗng.)*

---

## US-12 — Tìm kiếm không dấu *(bổ sung 2026-09-07, đóng GAP-T2)*

| # | Bước làm | Kỳ vọng | PASS/FAIL |
|---|---|---|---|
| 1 | Gõ **`pho`** (không dấu) vào ô tìm kiếm trên đầu trang | Ra kết quả có dấu: "Phở chua Cao Bằng", "Phở khô Gia Lai"… | ☐ |
| 2 | Gõ **`bun bo`** (không dấu, có khoảng trắng) | Ra "Bún bò Huế", "Bún bò cay Bạc Liêu" | ☐ |
| 3 | Gõ **`ha noi`** | Ra tỉnh Hà Nội (kết quả loại tỉnh có icon ghim, món có icon dao dĩa) | ☐ |
| 4 | Gõ chuỗi vô nghĩa, vd **`zzzznothing`** | Hiện **thông báo "Không tìm thấy…"**, **không phải** dropdown trống hay không hiện gì | ☐ |
| 5 | Xoá hết chữ trong ô | Dropdown biến mất, **không** hiện thông báo "không tìm thấy" *(chưa gõ gì thì chưa có gì để báo)* | ☐ |
| 6 | Gõ `bun bo` rồi **bấm vào 1 kết quả món** | Tới đúng `/provinces/{tỉnh}#{món}` **và panel chi tiết món tự mở sẵn**, không phải chỉ tới trang tỉnh | ☐ |

> **Bug tìm ra khi viết test này:** trước 2026-09-07, gõ chuỗi không khớp thì dropdown
> **không hiện gì cả** — người dùng không biết là mình gõ sai hay ô tìm kiếm hỏng. Đã
> sửa (`SearchBar.tsx`). Đây là lý do cụ thể vì sao "có code" chưa đủ, phải có AC + test.

## US-13 — Lọc theo mùa/lễ hội *(bổ sung 2026-09-07, đóng GAP-T2)*

| # | Bước làm | Kỳ vọng | PASS/FAIL |
|---|---|---|---|
| 1 | Vào `/browse`, đếm số tỉnh đang hiện | 63 tỉnh, nhóm theo miền Bắc/Trung/Nam | ☐ |
| 2 | Bấm chip **"Tết Nguyên Đán"** | Số tỉnh **giảm rõ rệt** (≈17), chỉ còn tỉnh có món gắn dịp đó | ☐ |
| 3 | Nhìn chip đang chọn | Có **dấu ✓** bên cạnh chữ — phân biệt được **không chỉ bằng màu** (WCAG 1.4.1, cho người mù màu) | ☐ |
| 4 | Bấm lại chính chip đó | Bỏ lọc, quay lại đủ 63 tỉnh, dấu ✓ biến mất | ☐ |
| 5 | Thử ở **trang chủ** (mục "Tỉnh nổi bật") | Chip hoạt động tương tự. Nếu không tỉnh nổi bật nào khớp → hiện *"Chưa có tỉnh nào gắn dịp…"*, **không phải vùng trắng** | ☐ |
| 6 | *(nếu dùng trình đọc màn hình)* Tab tới chip | Đọc được trạng thái bật/tắt (`aria-pressed`) | ☐ |

> **Hai vấn đề a11y tìm ra khi viết test này:** chip đang chọn trước đó chỉ khác nhau
> **bằng màu** (vi phạm WCAG 1.4.1) và **thiếu `aria-pressed`** nên trình đọc màn hình
> không biết chip nào đang bật. **Đáng chú ý: axe-core đã chạy và báo 0 vi phạm** — công
> cụ tự động không bắt được loại này. Đã sửa ở cả `ProvinceExplorerGrid` và
> `BrowseProvinces`.

*(AI đã chạy thử toàn bộ 2 checklist trên bằng trình duyệt: **8/8 bước PASS**. Việc này
chỉ chứng minh checklist khớp sản phẩm — **không thay được PM tự test**.)*

## US-16 — Chuyển ngôn ngữ Việt ↔ Anh *(bổ sung 2026-09-09)*

| # | Bước làm | Kỳ vọng | PASS/FAIL |
|---|---|---|---|
| 1 | Ở trang chủ, bấm nút **English** trên đầu trang | URL đổi thành `/en`, tiêu đề lớn thành *"A food map of **Vietnam**"* | ☐ |
| 2 | Vào `/provinces/thua-thien-hue`, bấm **English** | Tới `/en/provinces/thua-thien-hue` — **đúng tỉnh đang xem**, không bị đá về trang chủ | ☐ |
| 3 | Ở trang đó bấm ngược lại **Tiếng Việt** | Quay về `/provinces/thua-thien-hue`, không mất vị trí | ☐ |
| 4 | Đọc phần mô tả tỉnh ở bản `/en` | Là tiếng Anh, **không** còn tiếng Việt | ☐ |
| 5 | Nhìn **tên món** ở bản `/en` (vd Huế, Hà Nội) | Vẫn là **tiếng Việt có dấu**: "Bún bò Huế", "Phở", "Bánh khoái" — **không** dịch thành "Hue Beef Noodle Soup" | ☐ |
| 6 | Mở chi tiết 1 món ở `/en`, đọc **Key ingredients** | Nhãn tiếng Anh, nhưng nguyên liệu đặc trưng giữ tiếng Việt kèm chú thích: `nước mắm (Vietnamese fish sauce)`, `than hoa (charcoal)`, `mắc khén` | ☐ |
| 7 | Vẫn ở món đó, đọc **How it is made** | Các bước bằng tiếng Anh, **đúng số bước** như bản tiếng Việt (mở 2 tab so sánh) | ☐ |
| 8 | Ở `/en`, nhìn bản đồ ở khung mặc định | Thấy **Hoàng Sa Archipelago (Paracel Islands)**, **Trường Sa Archipelago (Spratly Islands)**, **Biển Đông (East Sea)** — tên Việt là tên chính | ☐ |
| 9 | Bấm vào marker Hoàng Sa ở `/en` | Tới `/en/provinces/da-nang` (giữ nhánh tiếng Anh, không nhảy về bản tiếng Việt) | ☐ |
| 10 | Ở `/en`, gõ `pho` vào ô tìm kiếm | Vẫn ra kết quả (nhãn tiếng Việt — đúng thiết kế), bấm vào thì tới `/en/provinces/...` chứ không rơi về bản tiếng Việt | ☐ |
| 11 | Ở `/en`, vào `/en/browse`, bấm chip **"Tết Nguyên Đán"** | Chip hiện *"Tết Nguyên Đán (Lunar New Year)"*; lọc chạy đúng như bản tiếng Việt | ☐ |
| 12 | Ở `/en`, gửi 1 đánh giá thiếu tên | Thông báo lỗi bằng **tiếng Anh** ("Please enter your name."), không phải tiếng Việt | ☐ |
| 13 | Vào URL sai ở nhánh EN, vd `/en/provinces/khong-co-that` | Trang 404 hiện **bằng tiếng Anh**, nút quay lại trỏ về `/en` | ☐ |
| 14 | Ở bản `/en`, kéo xuống chân trang | Phần giới thiệu bằng tiếng Anh; link Telemetry vẫn trỏ `/telemetry` (bản tiếng Việt — **có chủ đích**, đây là báo cáo nội bộ) | ☐ |

> **Lỗi tìm ra khi làm US-16:** `localePath()` ban đầu nằm chung file với hàm đọc bản dịch
> bằng `node:fs`. 16 client component import nó → `node:fs` bị kéo vào bundle trình duyệt
> → **build đổ hoàn toàn** ("the chunking context does not support external modules").
> TypeScript **không** bắt được: về mặt kiểu thì hoàn toàn hợp lệ. Đã tách `lib/locale.ts`
> (dùng chung được) khỏi `lib/i18n.ts` (chỉ server) để ranh giới này là ranh giới **file**,
> không thể vô tình vượt qua.

> **Vì sao có `pnpm check:i18n`:** 10 agent dịch song song, 6 trong số đó **bị ngắt giữa
> chừng** vì hết hạn mức phiên. Không thể tin "file có trên đĩa" nghĩa là "dịch xong đúng".
> Cổng này đối chiếu từng file dịch với bản gốc: đủ món, đủ 4 trường, **số phần tử
> `keyIngredients`/`prepOutline` khớp**, không chứa trường cấm (`name`, `sourceRefs`…).
