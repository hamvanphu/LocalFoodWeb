# [1] SW Spec chi tiết (SRS) — Local Food

> Input: `SCOPE-LF.md` (đã đóng Cổng hiểu bước [0], deadline ~2026-09-09).

## Vai trò (role)

Không có hệ thống tài khoản trong MVP (đã chốt ở SCOPE), nên chỉ có các "vai"
khác nhau về **trách nhiệm**, không phải 2 loại tài khoản đăng nhập:

| Role | Là ai | Tương tác qua đâu |
|---|---|---|
| **Người dùng (Visitor)** | Bất kỳ ai mở website | UI công khai: bản đồ, trang tỉnh |
| **Người biên tập nội dung (Content Editor)** | PM (mày) | Sửa `data/provinces/*.json` (nội dung gốc) và `data/i18n/en/*.json` (bản dịch). Không có UI quản trị **trên site** |
| **Người kiểm duyệt (Moderator)** *(vai mới, ghi nhận 2026-09-09 sau T2/P9)* | Cũng là PM — nhưng là **trách nhiệm khác**, phát sinh từ US-14/US-15 | **Supabase Dashboard → SQL Editor**: đọc báo nội dung sai, ẩn review spam (`status='hidden'`). Cố ý **không** làm trang `/admin`: để đọc/sửa qua RLS cần `service_role` key, key đó lọt vào bundle trình duyệt là ai cũng xoá sạch được database. Quy trình đầy đủ ở `ADMIN-GUIDE-LF.md` |

## User stories

### MVP (bắt buộc có trong 2 tuần)

| # | Story | Acceptance Criteria (Given/When/Then) |
|---|---|---|
| US-01 | Là người dùng, tôi muốn thấy bản đồ Việt Nam với marker món ăn của **tất cả tỉnh có dữ liệu** ngay khi vào trang, để khám phá món đặc trưng theo vùng miền mà không cần biết trước tên tỉnh. | **Given** tôi mở trang chủ, **When** bản đồ tải xong, **Then** khung nhìn mặc định bao trọn **lãnh thổ Việt Nam gồm đất liền (Hà Giang → mũi Cà Mau, không bị cắt) VÀ hai quần đảo Hoàng Sa, Trường Sa** — ranh giới khung tới **114,4°Đ / 8,0°B**, xem `mapStyle.ts` `VIETNAM_BOUNDS`; **And** tất cả tỉnh có dữ liệu đều có marker hiện sẵn, trong đó tỉnh nổi bật vẽ to hơn rõ rệt để dẫn mắt. |
| US-02 | Là người dùng, tôi muốn zoom bản đồ để thấy nhiều tỉnh hơn, để tìm tỉnh cụ thể mình quan tâm khi đã biết tên. | **Given** tôi đang ở mức zoom mặc định, **When** tôi zoom vào, **Then** marker to dần theo zoom và nhãn tên món hiện thêm (tỉnh nổi bật từ zoom ≥6, mọi tỉnh từ zoom ≥7.5); **And** không tỉnh nào bị ẩn đi ở bất kỳ mức zoom nào — phân cấp bằng kích thước, không bằng ẩn/hiện (đổi từ thiết kế 2 tầng cũ, xem `DEVBOOK.md`). |
| US-03 | Là người dùng, tôi muốn bấm vào một điểm trên bản đồ để xem trang chi tiết tỉnh đó, để biết món ăn đặc trưng, nguyên liệu, cách làm, cách ăn. | **Given** tôi thấy 1 bubble/pin có dữ liệu, **When** tôi bấm vào, **Then** tôi được điều hướng tới `/provinces/{slug}` đúng tỉnh, trang hiện đủ: tên món, mô tả, nguyên liệu, cách làm sơ lược, cách ăn. |
| US-04 | Là người dùng, tôi muốn thấy ảnh món ăn rõ ràng — ảnh thật nếu có, hoặc hình minh hoạ có chủ đích nếu chưa có ảnh — để trải nghiệm không bị vỡ layout hay thấy icon lỗi. | **Given** món ăn không có ảnh trong dữ liệu, **When** trang tải, **Then** hiện placeholder gradient + tên món (không phải ô trống/icon vỡ). **Given** món có ảnh, **When** ảnh tải thành công, **Then** hiện ảnh kèm caption nguồn/license. |
| US-05 | Là người dùng, tôi muốn xem danh sách tất cả tỉnh đã có trên site kể cả không dùng bản đồ, để có đường vào thay thế (không rành thao tác bản đồ, hoặc dùng bàn phím/trình đọc màn hình). | **Given** tôi ở trang chủ, **When** tôi cuộn xuống dưới bản đồ, **Then** thấy danh sách card **các tỉnh nổi bật** (không phải đủ 63 — quyết định có chủ đích ngày 2026-09-03 để trang chủ không bị rợp khi mở rộng ra 63 tỉnh), bấm vào điều hướng đúng như bấm bản đồ; **And** có link **"Xem tất cả {n} tỉnh"** dẫn sang `/browse` — nơi liệt kê **đủ 63 tỉnh** nhóm theo miền. |
| US-06 | Là người dùng, tôi muốn quay lại bản đồ từ trang chi tiết tỉnh, để tiếp tục khám phá tỉnh khác mà không cần bấm nút back trình duyệt. | **Given** tôi đang ở trang tỉnh, **When** tôi bấm link "Quay lại bản đồ", **Then** về `/` đúng, bản đồ tải lại bình thường. |
| US-07 | Là người dùng dùng điện thoại, tôi muốn trang hiển thị tốt trên màn hình nhỏ, để dùng được khi đang di chuyển/du lịch thực tế. | **Given** viewport **từ 360px** (ngưỡng cam kết, khớp NFR Responsive — sửa 2026-09-09 sau T2/P10; trước đây US-07 ghi "≤400px" còn NFR ghi "≥360px", hai con số không khớp nhau), **When** tải trang chủ và trang tỉnh, **Then** không có tràn ngang (horizontal scroll), bản đồ và card đọc được, cỡ chữ không quá nhỏ. |
| US-08 (negative) | Là người dùng, khi tôi vào URL `/provinces/{slug}` với slug không tồn tại, tôi muốn thấy trang 404 rõ ràng, không phải lỗi trắng trang hoặc crash. | **Given** slug không có trong `data/provinces/`, **When** tôi truy cập, **Then** Next.js trả trang not-found chuẩn, có đường quay lại trang chủ. **PM test (Cổng hiểu bước [1]): PASS về mặt kỹ thuật (không crash) nhưng đang dùng trang 404 mặc định của Next.js — chưa có thiết kế riêng, coi là chưa đạt AC "rõ ràng" theo chuẩn UI của site → cần custom not-found page, đưa vào WBS.** |

### Đã biết là NEGATIVE CASE CHƯA XỬ LÝ — ghi nhận thẳng, không giấu

| # | Vấn đề | Hiện trạng code | Rủi ro |
|---|---|---|---|
| GAP-01 | Ảnh Wikimedia tải lỗi lúc runtime (đã gặp thật: lỗi 429 khi test dồn dập ở walking skeleton) | `ImageWithFallback` chỉ xử lý trường hợp **không có ảnh trong data** (`images: []`), KHÔNG xử lý trường hợp có ảnh nhưng ảnh đó tải lỗi lúc runtime (`next/image onError`) | Người dùng thấy icon ảnh vỡ dù data có vẻ "có ảnh" — cần thêm client-side `onError` fallback sang placeholder. Đưa vào WBS bước [4] như 1 task riêng, không phải bỏ qua. |
| ~~GAP-02~~ ✅ **HẾT HIỆU LỰC 2026-09-03** — PM đã có MapTiler key thật, site không còn dùng demo tiles; điều kiện *"nếu tới hạn vẫn chưa có key"* không bao giờ kích hoạt. Giữ dòng này làm lịch sử, **không phải việc còn treo**. | Style bản đồ demo (`demotiles.maplibre.org`) bị rate-limit khi tải nhiều lần liên tục | Chưa có xử lý khi `mapStyle` fetch lỗi — MapLibre sẽ hiện bản đồ trống/lỗi im lặng | Chấp nhận rủi ro thấp cho MVP vì sẽ thay bằng MapTiler key thật; nhưng nếu tới hạn nộp bài vẫn chưa có key thật, cần fallback UI báo "bản đồ đang tải chậm, thử lại" thay vì im lặng trống trơn. |

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
| **US-16** | Là người đọc không biết tiếng Việt, tôi muốn đọc toàn bộ nội dung món ăn bằng tiếng Anh, nhưng **vẫn thấy nguyên tên món và tên nguyên liệu đặc trưng bằng tiếng Việt**, để hiểu được món ăn mà không bị mất bản sắc của nó. | **Given** tôi đang ở bất kỳ trang nào, **When** tôi bấm nút chuyển ngôn ngữ, **Then** tôi tới **đúng trang đó** ở ngôn ngữ kia (đang xem Huế thì sang bản tiếng Anh của Huế, không bị đá về trang chủ); **And** URL đổi thật (`/provinces/thua-thien-hue` ↔ `/en/provinces/thua-thien-hue`) nên tôi **chia sẻ được link đúng ngôn ngữ**. **Given** tôi đọc bản tiếng Anh, **When** tôi xem mô tả/nguyên liệu/cách làm/cách ăn, **Then** nội dung là tiếng Anh; **And** **tên món và tên tỉnh vẫn là tiếng Việt có dấu** (`Phở`, `Bún chả`, `Hà Nội`); **And** nguyên liệu/gia vị đặc trưng giữ tiếng Việt kèm chú thích ngắn lần đầu (`nước mắm (Vietnamese fish sauce)`, `mắc khén`, `than hoa`), **không** bị dịch phẳng thành *fish sauce*. **Given** một tỉnh **chưa** có bản dịch, **When** tôi mở trang tiếng Anh của tỉnh đó, **Then** trang vẫn hiện nội dung tiếng Việt ở đúng phần chưa dịch — **không** để trống, không lỗi. **Given** tôi ở bản tiếng Anh, **When** tôi nhìn bản đồ, **Then** Hoàng Sa/Trường Sa/Biển Đông vẫn hiện, với tên riêng tiếng Việt làm tên chính kèm tên quốc tế trong ngoặc. |

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

### Bổ sung 2026-09-09 — US-17 (đóng P8 từ rà soát T2)

| # | Story | Acceptance Criteria (Given/When/Then) |
|---|---|---|
| **US-17** | Là người đọc bản tiếng Việt, tôi muốn nhãn khẩu vị của món hiện bằng tiếng Việt, để không phải đọc chữ Anh lẫn trong giao diện Việt. | **Given** tôi xem chi tiết một món ở bản tiếng Việt, **When** nhìn hàng nhãn khẩu vị dưới tên món, **Then** thấy tiếng Việt (`cay`, `chua`, `đậm đà`, `món nước`…), **không** phải slug `spicy`/`savory`/`noodle-soup`. **Given** tôi xem cùng món ở bản tiếng Anh, **When** nhìn hàng đó, **Then** thấy tiếng Anh đọc tự nhiên (`noodle soup`, `street food` — có dấu cách, không phải gạch nối kiểu slug). **Given** dữ liệu có thêm nhãn khẩu vị mới chưa khai báo chuỗi hiển thị, **When** trang render, **Then** hiện slug gốc thay vì trống — chưa dịch thì xấu, nhưng không được mất thông tin. |

**Vì sao có story này:** đây **không phải yêu cầu mới**, mà là **lỗ hổng do rà soát T2 tìm
ra (P8)**. `tasteTags` lọt vào giao diện qua schema `lib/types.ts` từ walking skeleton và
hiện slug tiếng Anh thô trên **cả bản tiếng Việt** suốt 2 tuần — không story nào phủ, nên
không test nào bắt, và không ai từng quyết định. Viết story ở đây để nó trở thành **quyết
định có chủ đích** thay vì thứ vô tình.

**Ràng buộc:** chỉ đổi **cách hiển thị** trong `lib/ui-strings.ts`; giá trị lưu trong
`data/provinces/*.json` giữ nguyên slug tiếng Anh. Lý do: 63 file dữ liệu đã qua zod và
đã được kiểm; đổi giá trị dữ liệu chỉ để đổi chữ trên màn hình là rủi ro không cần thiết.
Backlog US-10 (lọc bản đồ theo khẩu vị) sau này vẫn lọc trên slug, không lọc trên chữ hiển thị.

### Bổ sung 2026-09-11 — US-18 ("Trưa nay ăn gì" — gợi ý món cho dân văn phòng)

> Scope riêng của tính năng: `SCOPE-REC-LF.md`. Quyết định kiến trúc: `ARCH-LF.md` **D4**.
> Story viết **trước** khi code — đúng bài học GAP-T2.

| # | Story | Acceptance Criteria (Given/When/Then) |
|---|---|---|
| **US-18** | Là dân văn phòng đang đói và **mệt vì phải chọn**, tôi muốn bấm một nút và được đưa ra **đúng 2 món** hợp bữa trưa công sở kèm luôn công thức, để quyết định trong vài giây mà không phải rà 197 món. | **Given** tôi mở `/goi-y`, **When** trang tải, **Then** thấy **đúng 2 món**, **khác nhau**, bốc từ nhóm **hợp bữa trưa** — không phải toàn bộ 197 món; **And** mỗi món hiện **đủ**: ảnh, tỉnh, mô tả, **nguyên liệu chính**, **cách làm**, **cách ăn** — đọc được ngay tại chỗ, **không phải nhảy sang trang khác**. **Given** tôi bấm nút *"Đổi món khác"*, **Then** ra **cặp 2 món mới**; **And** cặp mới **không trùng** cặp vừa rồi. **Given** tôi copy URL gửi đồng nghiệp, **Then** họ mở ra thấy **đúng 2 món tôi đang nhìn** — cặp món nằm trên URL, không nằm trong bộ nhớ trình duyệt. **Given** một món có đặc điểm đáng cân nhắc ở văn phòng, **Then** hiện **nhãn cảnh báo nhẹ** (`cay`, `nặng mùi`, `chay được`) để tôi tự quyết, **không** tự động loại nó đi. **Given** trang tải trên máy chủ rồi hydrate, **Then** 2 món phía máy chủ và phía trình duyệt **giống hệt nhau** — không nháy đổi món, không lệch hydration. **Given** tôi đang ở bản tiếng Anh, **When** mở `/en/goi-y`, **Then** nhãn giao diện và nội dung món là tiếng Anh nhưng **tên món vẫn tiếng Việt** *(nguyên tắc US-16)*. **Given** trang nói về gợi ý ăn trưa, **Then** ghi rõ đây là gợi ý **món**, **không phải gợi ý quán** (không có giá, địa chỉ, khoảng cách). |

**Vì sao lọc bớt chứ không hiện đủ 197 món** *(yêu cầu trực tiếp của PM)*: gợi ý một đĩa
**mồi nhậu** hay một gói **đặc sản mua về làm quà** cho bữa trưa công sở là sai về **bản
chất món**, không phải sai về khẩu vị. Đã kiểm dữ liệu thật và xác nhận nhóm này tồn tại:
Nem Bùi, Bò một nắng muối kiến vàng, Kẹo dừa Bến Tre, Hạt điều rang, Mực một nắng…

**Cập nhật 2026-09-11 — PM đổi yêu cầu:** bỏ bộ lọc tương tác và danh sách 12 món, thay
bằng **bốc đúng 2 món kèm công thức đọc tại chỗ**. Lý do đầy đủ ở `SCOPE-REC-LF.md` mục
*"Đổi yêu cầu"*; quyết định nền **D-REC-4**. Điều đã mất (người ăn chay / không ăn cay
không nói ra được) **được ghi thẳng**, bù bằng nhãn hiển thị, và bộ lọc đưa vào backlog.

**Ràng buộc bắt buộc (không phải nice-to-have):**

1. **`mealTypes` là trường BẮT BUỘC** trên mọi món, ép bằng zod ở build. Thiếu một món là
   build đổ — không được để món nào "rơi" khỏi phân loại rồi âm thầm biến mất khỏi gợi ý.
2. **Không suy đoán "hợp văn phòng" bằng từ khoá trên tên món.** Đã đo và chứng minh là
   không đáng tin (`SCOPE-REC-LF.md` câu 3). Chỉ suy tự động những thứ **tra được theo mặt
   chữ** trong `keyIngredients`/`tasteTags`; phần phán đoán ngữ nghĩa phải gán tay.
3. **Trang phải nói rõ giới hạn**: không gợi ý quán, không có giá, và phân loại là **phán
   đoán của người biên tập** chứ không phải chuẩn dinh dưỡng.
4. **Không đưa lời khuyên dinh dưỡng/sức khoẻ** (calo, đường huyết) — dự án không có nguồn
   nào đối chiếu, nói sai có hại thật.
5. **Cặp món phải tất định theo URL.** Bốc ngẫu nhiên ngay lúc render sẽ làm máy chủ và
   trình duyệt ra hai kết quả khác nhau ⇒ lệch hydration, món nháy đổi trước mắt người
   dùng. Giải pháp: **hạt giống (seed) nằm trên query string**, máy chủ suy ra cặp món từ
   seed. Nhờ vậy vừa hết lệch hydration, vừa **chia sẻ được đúng cặp mình đang xem**, vừa
   không cần đặt state trong effect *(bài học lint 2026-09-09)*.

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
| **Content integrity** (chốt ở Cổng hiểu bước [0]; **định nghĩa "chính thống" bổ sung 2026-09-09 sau T2/P6**) | Mỗi món ăn trong `data/provinces/*.json` phải có ≥1 nguồn tham chiếu **chính thống** (không chỉ nguồn ảnh) trước khi coi là "xong". **"Chính thống" = một trong:** Wikipedia tiếng Việt · báo/tạp chí có giấy phép hoạt động · cổng thông tin chính quyền tỉnh · trang du lịch chính thức. **KHÔNG tính:** blog cá nhân, trang tổng hợp không ghi nguồn, nội dung mạng xã hội. ⚠️ **Hiện trạng đo được:** 63% món **không** có nguồn Wikipedia (`RISK-LF.md` R2) — chưa rà lại theo định nghĩa mới này, nên **chưa biết bao nhiêu món thật sự đạt**. Cổng `zod` hiện chỉ kiểm *có URL*, chưa kiểm *nguồn hợp lệ*. |
| **Chi phí** | Không dùng dịch vụ vượt free tier (MapTiler free tier ~100k request/tháng, Vercel free tier khi deploy). |
| **Hiệu năng** | Ảnh tối ưu qua `next/image` (đã có); mục tiêu LCP < 2.5s trên mạng 4G cho trang chủ (đo bằng Lighthouse khi có bản build gần hoàn thiện, không đo ở walking skeleton). |
| **Responsive** | Không tràn ngang **từ 360px trở lên** — đây là ngưỡng cam kết duy nhất, US-07 đã sửa cho khớp (2026-09-09). Máy hẹp hơn 360px (vd iPhone SE đời cũ 320px) **nằm ngoài cam kết**, không phải lỗi nếu tràn. |
| **Accessibility cơ bản** | Ảnh có `alt` text (đã làm); tôn trọng `prefers-reduced-motion` (đã làm ở `globals.css`); chưa kiểm tra contrast WCAG AA cho text-over-photo — đưa vào WBS. |
| **Mở rộng dữ liệu** | Thêm 1 tỉnh mới = thêm 1 file JSON, không sửa code (đã đạt qua schema `lib/types.ts` + `lib/provinces.ts`). |
| **Không có auth** *(sửa 2026-09-09 sau T2/P5)* | Không có đăng nhập, không hồ sơ người dùng. **Nhưng KHÔNG còn đúng là "không lưu dữ liệu cá nhân":** US-14 lưu `author_name` do người dùng tự nhập vào database. Vì vậy **phân quyền là bắt buộc, không được miễn** — cụ thể là **RLS trên Supabase**, và nó là **rào chắn duy nhất** (anon key công khai theo thiết kế). Xem `RISK-LF.md` R11. Dữ liệu thu thập giữ ở mức tối thiểu: chỉ tên hiển thị + nội dung, không email, không IP, không tracking. |
| **Chất lượng thiết kế UI ("wow")** | Không phải "trông ổn" — phải có: hệ màu ấm bắt trend đã chọn (chili/turmeric/herb/amber) áp dụng nhất quán, icon + toolbar tương tác trên bản đồ (không chỉ nút zoom mặc định của MapLibre), micro-interaction (hover, transition) chứ không phải trang tĩnh. Đo bằng: PM tự đánh giá "có thấy wow không" ở Cổng hiểu bước build UI — chủ quan nhưng là tiêu chí thật, ghi rõ để không bị lãng quên như lần trước. |

## Use-case × role

| Use-case | Người dùng | Content Editor |
|---|---|---|
| Xem bản đồ, khám phá tỉnh | ✅ | ✅ (test) |
| Xem chi tiết món ăn | ✅ | ✅ (test) |
| Thêm/sửa dữ liệu tỉnh mới | ❌ (không có UI) | ✅ qua file JSON, **bắt buộc kèm nguồn tham chiếu** (NFR content integrity) |
| Thêm/sửa **bản dịch tiếng Anh** | ❌ | ✅ qua `data/i18n/en/*.json`; cổng `pnpm check:i18n` chặn nếu lệch bản gốc |
| Gửi đánh giá / báo nội dung sai | ✅ | ✅ (test) |
| **Đọc báo nội dung sai, ẩn review spam** | ❌ | ✅ qua **Supabase Dashboard**, không qua site (xem `ADMIN-GUIDE-LF.md`) |
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
