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
| US-01 | Là người dùng, tôi muốn thấy bản đồ Việt Nam với vài bubble món ăn nổi bật khi mới vào trang, để khám phá nhanh món đặc trưng theo vùng miền mà không cần biết trước tên tỉnh. | **Given** tôi mở trang chủ, **When** bản đồ tải xong, **Then** khung nhìn mặc định bao trọn đất liền Việt Nam (Hà Giang → mũi Cà Mau, không bị cắt); **And** tất cả tỉnh có dữ liệu đều có marker hiện sẵn, trong đó tỉnh nổi bật vẽ to hơn rõ rệt để dẫn mắt. |
| US-02 | Là người dùng, tôi muốn zoom bản đồ để thấy nhiều tỉnh hơn, để tìm tỉnh cụ thể mình quan tâm khi đã biết tên. | **Given** tôi đang ở mức zoom mặc định, **When** tôi zoom vào, **Then** marker to dần theo zoom và nhãn tên món hiện thêm (tỉnh nổi bật từ zoom ≥6, mọi tỉnh từ zoom ≥7.5); **And** không tỉnh nào bị ẩn đi ở bất kỳ mức zoom nào — phân cấp bằng kích thước, không bằng ẩn/hiện (đổi từ thiết kế 2 tầng cũ, xem `DEVBOOK.md`). |
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

### Bổ sung 2026-09-06 — story cho tính năng đã/đang build mà trước đó thiếu AC

> **Vì sao có mục này:** khi lập `RTM-LF.md` (bước [10]) phát hiện **GAP-T2** — W2-7
> (Search) và W2-8 (Filter mùa/lễ hội) đi thẳng từ yêu cầu miệng vào WBS rồi build,
> **không có user story, không có AC, nên không có test case**. Bổ sung ở đây để đóng
> lỗ hổng truy vết, và để US-14 (Review/Rating) **không lặp lại lỗi đó** — story viết
> **trước** khi code.

| # | Story | Acceptance Criteria (Given/When/Then) |
|---|---|---|
| US-12 | Là người dùng, tôi muốn tìm nhanh món ăn hoặc tỉnh theo tên, để tới thẳng nội dung mình cần mà không phải rà bản đồ. | **Given** tôi gõ vào ô tìm kiếm, **When** tôi nhập **không dấu** (vd `pho`, `bun bo`), **Then** kết quả vẫn khớp món/tỉnh có dấu tương ứng; **And** bấm vào 1 kết quả thì tới đúng `/provinces/{slug}` và **mở đúng món** đó; **And** không có kết quả thì hiện thông báo rỗng, không phải danh sách trắng. |
| US-13 | Là người dùng, tôi muốn lọc tỉnh/món theo mùa hoặc dịp lễ, để tìm món hợp thời điểm trong năm. | **Given** tôi ở trang chủ hoặc `/browse`, **When** tôi chọn 1 chip dịp (vd "Tết Nguyên Đán"), **Then** chỉ còn hiện tỉnh có ít nhất 1 món gắn dịp đó; **And** bỏ chọn thì danh sách trở lại đầy đủ; **And** chip đang chọn phải phân biệt được bằng thị giác, không chỉ bằng màu (yêu cầu A11y). |
| **US-14** | **Là người xem, tôi muốn chấm sao và để lại bình luận cho món ăn, và thấy đánh giá của người khác, để cùng đóng góp cảm nhận thay vì chỉ đọc một chiều.** | **Given** tôi đang xem 1 món, **When** tôi chọn số sao (1-5), nhập tên và bình luận rồi gửi, **Then** đánh giá của tôi hiện ra ngay trong danh sách mà không cần tải lại trang; **And** người dùng khác mở cùng món đó trên **thiết bị khác cũng thấy** đánh giá đó (yêu cầu lưu trữ dùng chung — lý do đảo quyết định "không backend", xem `ARCH-LF.md` D3). **Given** tôi bỏ trống sao hoặc tên, **When** tôi bấm gửi, **Then** bị chặn kèm thông báo rõ, không gửi bản ghi rỗng. **Given** bình luận dài quá 500 ký tự, **When** tôi gửi, **Then** bị chặn ở cả client **lẫn** database (`check` constraint), không chỉ dựa vào client. **Given** món chưa có đánh giá nào, **When** tôi mở, **Then** hiện trạng thái rỗng mời đánh giá, không phải vùng trắng. **Given** Supabase lỗi/không kết nối được, **When** trang tải, **Then** phần nội dung món **vẫn hiển thị bình thường**, chỉ khu vực đánh giá báo lỗi — không làm hỏng cả trang. |

### Bổ sung 2026-09-06 — US-15 (sau khi PM chốt hướng xử lý R2)

| # | Story | Acceptance Criteria (Given/When/Then) |
|---|---|---|
| **US-15** | Là người đọc phát hiện thông tin sai về món ăn, tôi muốn báo cho người quản trị, để nội dung được sửa — thay vì phải im lặng hoặc chấm sao thấp cho một món mà thực ra tôi không chê. | **Given** tôi đang xem 1 món, **When** tôi chuyển sang chế độ *Báo nội dung sai*, **Then** form đổi sang hỏi *sai ở chỗ nào* và **không bắt buộc chấm sao** (vì đây không phải đánh giá món ăn). **Given** tôi bỏ trống phần mô tả, **When** gửi, **Then** bị chặn — báo lỗi rỗng thì vô dụng. **Given** tôi gửi thành công, **When** form đóng, **Then** hiện xác nhận đã gửi tới người quản trị; **And** báo lỗi này **không hiện công khai** trong danh sách đánh giá, để không làm rối người đọc khác và không thành kênh spam hiển thị. **Given** tôi mở lại trang, **When** xem danh sách đánh giá, **Then** chỉ thấy đánh giá món ăn, không thấy báo lỗi của ai. |

**Vì sao tách khỏi US-14:** đánh giá món ăn và báo nội dung sai là hai ý định khác
nhau. Gộp chung khiến người muốn báo lỗi buộc phải chấm sao thấp — làm hỏng luôn
điểm trung bình của món, và người quản trị không phân biệt được "món dở" với "bài
viết sai".

**Giới hạn đã biết:** PM chỉ thấy báo lỗi khi chủ động mở Supabase dashboard — chưa
có thông báo tự động. Ghi rõ ở `RISK-LF.md` R2, không giả vờ là đã khép kín.

**Ràng buộc bắt buộc của US-14 (không phải nice-to-have):**

1. **RLS phải bật đúng trước khi tính năng được coi là xong** (`RISK-LF.md` R11).
   Không bật = ai cầm anon key cũng xoá sạch được bảng. Có cách tự kiểm trong
   `supabase/schema.sql` mục 4.
2. **Không có kiểm duyệt trước khi đăng** — rủi ro đã chấp nhận công khai
   (`RISK-LF.md` R10). Rào chắn tối thiểu: giới hạn độ dài, chặn gửi lặp nhanh phía
   client, PM tự ẩn thủ công qua dashboard.
3. **Nội dung món ăn vẫn phải render tĩnh (SSG)** — chỉ khối đánh giá là động.
   Supabase chết thì trang vẫn phải xem được.

### Bổ sung 2026-09-09 — US-16 (PM yêu cầu chuyển ngữ Việt–Anh)

| # | Story | Acceptance Criteria (Given/When/Then) |
|---|---|---|
| **US-16** | Là người đọc không biết tiếng Việt, tôi muốn đọc toàn bộ nội dung món ăn bằng tiếng Anh, nhưng **vẫn thấy nguyên tên món và tên nguyên liệu đặc trưng bằng tiếng Việt**, để hiểu được món ăn mà không bị mất bản sắc của nó. | **Given** tôi đang ở bất kỳ trang nào, **When** tôi bấm nút chuyển ngôn ngữ, **Then** tôi tới **đúng trang đó** ở ngôn ngữ kia (đang xem Huế thì sang bản tiếng Anh của Huế, không bị đá về trang chủ); **And** URL đổi thật (`/provinces/hue` ↔ `/en/provinces/hue`) nên tôi **chia sẻ được link đúng ngôn ngữ**. **Given** tôi đọc bản tiếng Anh, **When** tôi xem mô tả/nguyên liệu/cách làm/cách ăn, **Then** nội dung là tiếng Anh; **And** **tên món và tên tỉnh vẫn là tiếng Việt có dấu** (`Phở`, `Bún chả`, `Hà Nội`); **And** nguyên liệu/gia vị đặc trưng giữ tiếng Việt kèm chú thích ngắn lần đầu (`nước mắm (Vietnamese fish sauce)`, `mắc khén`, `than hoa`), **không** bị dịch phẳng thành *fish sauce*. **Given** một tỉnh **chưa** có bản dịch, **When** tôi mở trang tiếng Anh của tỉnh đó, **Then** trang vẫn hiện nội dung tiếng Việt ở đúng phần chưa dịch — **không** để trống, không lỗi. **Given** tôi ở bản tiếng Anh, **When** tôi nhìn bản đồ, **Then** Hoàng Sa/Trường Sa/Biển Đông vẫn hiện, với tên riêng tiếng Việt làm tên chính kèm tên quốc tế trong ngoặc. |

**Vì sao tên món không dịch:** tên món là danh từ riêng của văn hoá ẩm thực. "Hanoi Beef
Noodle Soup" không phải là một cái tên — nó là một lời mô tả, và nó xoá mất chính thứ mà
trang này tồn tại để giới thiệu. Quy ước đầy đủ ở `I18N-GLOSSARY-LF.md`.

**Ràng buộc kỹ thuật đã chốt:**

1. **Bản dịch nằm ở file riêng** (`data/i18n/en/{slug}.json`), không trộn vào
   `data/provinces/*.json`. Lý do: 10 agent dịch song song; nếu ghi thẳng vào file gốc
   thì một lỗi bất kỳ làm hỏng luôn nội dung tiếng Việt — thứ đã kiểm và không có bản sao.
2. **Số phần tử `keyIngredients`/`prepOutline` phải khớp bản gốc** — lệch nghĩa là dịch
   thiếu bước. Ép bằng cổng `pnpm check:i18n`, không dựa vào việc đọc lại.
3. **Fallback theo từng trường**, không theo cả trang: thiếu bản dịch ở đâu thì giữ tiếng
   Việt đúng chỗ đó.

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
