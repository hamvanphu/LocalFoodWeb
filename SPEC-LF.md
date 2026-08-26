# [1] SW Spec chi tiết (SRS) — Local Food

> Input: `SCOPE-LF.md` (đã đóng Cổng hiểu bước [0], deadline ~2026-09-09).

## Vai trò (role)

Không có hệ thống tài khoản trong MVP (đã chốt ở SCOPE), nên chỉ có 2 "vai"
thực sự khác nhau về trách nhiệm, không phải 2 loại tài khoản đăng nhập:

| Role | Là ai | Tương tác qua đâu |
|---|---|---|
| **Người dùng (Visitor)** | Bất kỳ ai mở website | UI công khai: bản đồ, trang tỉnh |
| **Người biên tập nội dung (Content Editor)** | PM (mày), hiện tại là người trực tiếp sửa file JSON | Trực tiếp sửa `data/provinces/*.json`, không qua UI admin (MVP không có UI quản trị) |

## User stories

### MVP (bắt buộc có trong 2 tuần)

| # | Story | Acceptance Criteria (Given/When/Then) |
|---|---|---|
| US-01 | Là người dùng, tôi muốn thấy bản đồ Việt Nam với vài bubble món ăn nổi bật khi mới vào trang, để khám phá nhanh món đặc trưng theo vùng miền mà không cần biết trước tên tỉnh. | **Given** tôi mở trang chủ, **When** bản đồ tải xong, **Then** tôi thấy tối thiểu các bubble ứng với tỉnh đã có dữ liệu MVP, hiển thị rõ ở mức zoom mặc định (không cần zoom tay mới thấy). |
| US-02 | Là người dùng, tôi muốn zoom bản đồ để thấy nhiều tỉnh hơn, để tìm tỉnh cụ thể mình quan tâm khi đã biết tên. | **Given** tôi đang ở mức zoom thấp, **When** tôi zoom tới mức ≥7, **Then** các pin tỉnh (Layer B) hiện ra thay cho hero bubble; **And** nếu tỉnh chưa có dữ liệu thì không có pin (không dẫn tới trang lỗi). |
| US-03 | Là người dùng, tôi muốn bấm vào một điểm trên bản đồ để xem trang chi tiết tỉnh đó, để biết món ăn đặc trưng, nguyên liệu, cách làm, cách ăn. | **Given** tôi thấy 1 bubble/pin có dữ liệu, **When** tôi bấm vào, **Then** tôi được điều hướng tới `/provinces/{slug}` đúng tỉnh, trang hiện đủ: tên món, mô tả, nguyên liệu, cách làm sơ lược, cách ăn. |
| US-04 | Là người dùng, tôi muốn thấy ảnh món ăn rõ ràng — ảnh thật nếu có, hoặc hình minh hoạ có chủ đích nếu chưa có ảnh — để trải nghiệm không bị vỡ layout hay thấy icon lỗi. | **Given** món ăn không có ảnh trong dữ liệu, **When** trang tải, **Then** hiện placeholder gradient + tên món (không phải ô trống/icon vỡ). **Given** món có ảnh, **When** ảnh tải thành công, **Then** hiện ảnh kèm caption nguồn/license. |
| US-05 | Là người dùng, tôi muốn xem danh sách tất cả tỉnh đã có trên site kể cả không dùng bản đồ, để có đường vào thay thế (không rành thao tác bản đồ, hoặc dùng bàn phím/trình đọc màn hình). | **Given** tôi ở trang chủ, **When** tôi cuộn xuống dưới bản đồ, **Then** thấy danh sách card mỗi tỉnh, bấm vào điều hướng đúng như bấm bản đồ. |
| US-06 | Là người dùng, tôi muốn quay lại bản đồ từ trang chi tiết tỉnh, để tiếp tục khám phá tỉnh khác mà không cần bấm nút back trình duyệt. | **Given** tôi đang ở trang tỉnh, **When** tôi bấm link "Quay lại bản đồ", **Then** về `/` đúng, bản đồ tải lại bình thường. |
| US-07 | Là người dùng dùng điện thoại, tôi muốn trang hiển thị tốt trên màn hình nhỏ, để dùng được khi đang di chuyển/du lịch thực tế. | **Given** viewport ≤ 400px, **When** tải trang chủ và trang tỉnh, **Then** không có tràn ngang (horizontal scroll), bản đồ và card đọc được, cỡ chữ không quá nhỏ. |
| US-08 (negative) | Là người dùng, khi tôi vào URL `/provinces/{slug}` với slug không tồn tại, tôi muốn thấy trang 404 rõ ràng, không phải lỗi trắng trang hoặc crash. | **Given** slug không có trong `data/provinces/`, **When** tôi truy cập, **Then** Next.js trả trang not-found chuẩn, có đường quay lại trang chủ. **PM test (Cổng hiểu bước [1]): PASS về mặt kỹ thuật (không crash) nhưng đang dùng trang 404 mặc định của Next.js — chưa có thiết kế riêng, coi là chưa đạt AC "rõ ràng" theo chuẩn UI của site → cần custom not-found page, đưa vào WBS.** |

### Đã biết là NEGATIVE CASE CHƯA XỬ LÝ — ghi nhận thẳng, không giấu

| # | Vấn đề | Hiện trạng code | Rủi ro |
|---|---|---|---|
| GAP-01 | Ảnh Wikimedia tải lỗi lúc runtime (đã gặp thật: lỗi 429 khi test dồn dập ở walking skeleton) | `ImageWithFallback` chỉ xử lý trường hợp **không có ảnh trong data** (`images: []`), KHÔNG xử lý trường hợp có ảnh nhưng ảnh đó tải lỗi lúc runtime (`next/image onError`) | Người dùng thấy icon ảnh vỡ dù data có vẻ "có ảnh" — cần thêm client-side `onError` fallback sang placeholder. Đưa vào WBS bước [4] như 1 task riêng, không phải bỏ qua. |
| GAP-02 | Style bản đồ demo (`demotiles.maplibre.org`) bị rate-limit khi tải nhiều lần liên tục | Chưa có xử lý khi `mapStyle` fetch lỗi — MapLibre sẽ hiện bản đồ trống/lỗi im lặng | Chấp nhận rủi ro thấp cho MVP vì sẽ thay bằng MapTiler key thật; nhưng nếu tới hạn nộp bài vẫn chưa có key thật, cần fallback UI báo "bản đồ đang tải chậm, thử lại" thay vì im lặng trống trơn. |

### Backlog phase-2 (ngoài 2 tuần, không phải MVP)

| # | Story |
|---|---|
| US-09 | Là người dùng, tôi muốn lưu món/tỉnh vào wishlist (localStorage), để quay lại xem sau. **⚠️ Open question (PM bắt ở Cổng hiểu bước [1]):** localStorage mất khi đổi thiết bị/xoá cache — chưa quyết định có chấp nhận rủi ro mất dữ liệu này cho v1, hay cần cơ chế nhẹ hơn (export/import JSON thủ công, hoặc share link chứa danh sách wishlist trong query string). Vì US-09 không thuộc MVP 2 tuần, quyết định này để lại cho `RISK-LF.md` (bước [6]) — ghi rõ owner + mitigation trước khi bắt tay code tính năng này, không quyết định vội ở đây. |
| US-10 | Là người dùng, tôi muốn lọc bản đồ theo khẩu vị (cay/chua/hải sản...), để tìm món hợp gu nhanh hơn. |
| US-11 | Là người dùng, tôi muốn làm quiz gợi ý món theo khẩu vị, để khám phá món mới. |

## Feedback PM sau khi test walking skeleton (Cổng hiểu bước [1], 2026-08-26)

- US-01/US-03 (bản đồ, điều hướng tỉnh): **PASS** về mặt chức năng.
- US-08 (404): **PASS kỹ thuật, FAIL về UI** — trang mặc định, chưa custom.
- **Nhận xét trực tiếp của PM: "UI chưa như kỳ vọng, thậm chí lỗi thời, cỡ
  10 năm về trước"** — walking skeleton mới chỉ chứng minh pipeline (đúng
  mục tiêu của Walking Skeleton theo Capstone Playbook: "chưa cần bento grid
  đẹp"), nhưng PM đúng khi nhắc lại yêu cầu gốc: **"UI bắt mắt, màu sắc thời
  thượng sinh động, bắt trend, UI tương tác sinh động"** — đây KHÔNG phải
  polish tuỳ chọn, mà là yêu cầu gốc từ đề bài, phải lên rõ trong ARCH (bước
  [3]) và có mặt trong WBS (bước [4]) ở mức ưu tiên cao, không bị đẩy xuống
  cuối cùng.

## NFR (Non-functional requirements)

| NFR | Tiêu chí đo được |
|---|---|
| **Content integrity** (chốt ở Cổng hiểu bước [0]) | Mỗi món ăn trong `data/provinces/*.json` phải có ≥1 nguồn tham chiếu chính thống (không chỉ nguồn ảnh) trước khi coi là "xong" — áp dụng cho cả 2 tỉnh walking skeleton đã viết, cần rà soát lại. |
| **Chi phí** | Không dùng dịch vụ vượt free tier (MapTiler free tier ~100k request/tháng, Vercel free tier khi deploy). |
| **Hiệu năng** | Ảnh tối ưu qua `next/image` (đã có); mục tiêu LCP < 2.5s trên mạng 4G cho trang chủ (đo bằng Lighthouse khi có bản build gần hoàn thiện, không đo ở walking skeleton). |
| **Responsive** | Không tràn ngang từ 360px trở lên; đã áp dụng Tailwind responsive nhưng chưa test thật trên viewport hẹp — đưa vào WBS. |
| **Accessibility cơ bản** | Ảnh có `alt` text (đã làm); tôn trọng `prefers-reduced-motion` (đã làm ở `globals.css`); chưa kiểm tra contrast WCAG AA cho text-over-photo — đưa vào WBS. |
| **Mở rộng dữ liệu** | Thêm 1 tỉnh mới = thêm 1 file JSON, không sửa code (đã đạt qua schema `lib/types.ts` + `lib/provinces.ts`). |
| **Không có auth** | Không lưu trữ dữ liệu cá nhân người dùng trong MVP → giảm bề mặt rủi ro bảo mật, không cần NFR về mã hoá/phân quyền cho giai đoạn này. |
| **Chất lượng thiết kế UI ("wow")** | Không phải "trông ổn" — phải có: hệ màu ấm bắt trend đã chọn (chili/turmeric/herb/amber) áp dụng nhất quán, icon + toolbar tương tác trên bản đồ (không chỉ nút zoom mặc định của MapLibre), micro-interaction (hover, transition) chứ không phải trang tĩnh. Đo bằng: PM tự đánh giá "có thấy wow không" ở Cổng hiểu bước build UI — chủ quan nhưng là tiêu chí thật, ghi rõ để không bị lãng quên như lần trước. |

## Use-case × role

| Use-case | Người dùng | Content Editor |
|---|---|---|
| Xem bản đồ, khám phá tỉnh | ✅ | ✅ (test) |
| Xem chi tiết món ăn | ✅ | ✅ (test) |
| Thêm/sửa dữ liệu tỉnh mới | ❌ (không có UI) | ✅ qua file JSON, **bắt buộc kèm nguồn tham chiếu** (NFR content integrity) |
| Đổi style bản đồ (MapTiler key) | ❌ | ✅ qua `.env.local` |

---

## 🔒 Cổng hiểu — bước [1] — **ĐÃ ĐÓNG (2026-08-26)**

1. PM đã test thật US-03 (PASS) và US-08 (PASS kỹ thuật, FAIL UI — 404 mặc
   định).
2. PM bắt được lỗ hổng thiết kế thật: **wishlist localStorage không bền
   vững khi đổi thiết bị/xoá cache** — chưa có quyết định, đã đưa vào
   `RISK-LF.md` (bước [6]) làm open question.
3. PM bổ sung phản hồi trực tiếp: **UI hiện tại "lỗi thời, cỡ 10 năm về
   trước"**, cần bắt mắt/wow hơn hẳn — đã ghi thành NFR chính thức ở trên,
   không còn là ý kiến rời rạc.

Cổng đã đóng → bước [2] Module Map được phép bắt đầu.
