# T2 — AI rà soát Requirement · Local Food

> **Đề bài (§7.1 T2):** AI rà draft T1 tìm mâu thuẫn/thiếu/ambiguity, sinh câu hỏi làm rõ.
> **Tiêu chí đạt:** ≥5 phát hiện hợp lệ; **PM phân loại đúng cái nào thật.**
>
> Phạm vi rà: `SCOPE-LF.md` (bước [0]) + `SPEC-LF.md` (bước [1]) — hai artefact requirement.
> Ngày rà: 2026-09-09. Đối chiếu với sản phẩm đang chạy tại commit `0e716c5`.

## Cách rà — để PM biết nên tin tới đâu

**Mỗi phát hiện đều được đối chiếu với code/dữ liệu thật trước khi ghi vào đây.** Không có
mục nào chỉ dựa trên "đọc thấy nghi nghi". Cột *Bằng chứng* ghi rõ file + dòng để PM tự
kiểm lại trong 30 giây.

Lý do phải nói điều này: bài T2 rất dễ làm giả — sinh 10 nhận xét nghe hợp lý là chuyện
vặt, và PM sẽ mất thời gian phân loại rác. Rà thật thì phải có chỗ để đối chứng.

**Không tính vào phát hiện** (đã kiểm và thấy SPEC đúng): giới hạn 500 ký tự ở US-14 khớp
`REVIEW_MAX_COMMENT` và `check` constraint trong DB; ngưỡng zoom nhãn ở US-02 khớp
`HERO_LABEL_MIN_ZOOM = 6` / `PIN_LABEL_MIN_ZOOM = 7.5`; quyền `grant insert` có đủ cột
`kind` sau migration-02.

---

## Bảng phát hiện — **PM điền cột cuối**

| # | Loại | Phát hiện | Bằng chứng | PM phán xử (2026-09-09) |
|---|---|---|---|---|
| **P1** | 🔴 Mâu thuẫn | AC của US-01 nói khung nhìn mặc định bao trọn **đất liền** ("Hà Giang → mũi Cà Mau"). Nhưng R14 + US-01c đòi khung mặc định phải **bao cả Hoàng Sa và Trường Sa** — code đi tới **114,4°Đ**, xa ngoài đất liền | `SPEC-LF.md:21` vs `mapStyle.ts:27-30`, `RISK-LF.md` R14 | ✅ **Thật** |
| **P2** | 🟡 ~~Mâu thuẫn~~ → **Thiếu khai báo** | ⚠️ **AI tự rút lại một phần sau khi PM duyệt.** Khung ban đầu ("SCOPE mâu thuẫn với sản phẩm") **sai theo quy ước của chính dự án**: `KNOWLEDGE-HEALTH-LF.md` khi đo c3 đã chốt `SCOPE`/`EST`/`ARCH` là **artefact đóng băng có chủ đích**, và ghi rõ cách đo cũ đã *"phạt oan"* chúng. Vậy việc SCOPE còn ghi "đa ngôn ngữ — out of scope" là **đúng thiết kế**, không phải lỗi. **Phần còn đúng, nhỏ hơn:** SCOPE **không tuyên bố ở đầu file** rằng nó là bản đóng băng → người đọc mới không phân biệt được *"đã quyết bỏ hồi đó"* với *"đang bỏ"* | `SCOPE-LF.md:36-38, 43, 45-46` vs `KNOWLEDGE-HEALTH-LF.md` mục "Hai điều phải nói thật" #1 | ✅ Thật, **nhưng đã thu hẹp phạm vi** |
| **P3** | 🔴 Mâu thuẫn | AC của US-05: cuộn xuống dưới bản đồ *"thấy danh sách card **mỗi tỉnh**"*. Thực tế trang chủ chỉ hiện **8 tỉnh** nổi bật; 63 tỉnh nằm ở `/browse` | `SPEC-LF.md:25` vs `hero-bubbles.json` (8 slug), `HomeView.tsx` lọc `highlighted` | ✅ **Thật** |
| **P4** | 🔴 Lỗi thực tế | AC của US-16 viết `/provinces/hue` ↔ `/en/provinces/hue`. **Không tồn tại slug `hue`** — slug thật là `thua-thien-hue`, nên `/provinces/hue` trả 404 | `SPEC-LF.md:80` vs `data/provinces/thua-thien-hue.json` | ✅ **Thật** |
| **P5** | 🟠 Mâu thuẫn | NFR *"Không có auth"* ghi *"Không lưu trữ dữ liệu cá nhân người dùng → **không cần NFR về mã hoá/phân quyền**"*. Nhưng US-14 lưu `author_name` do người dùng nhập vào database, và RLS **chính là** phân quyền — lại là rào chắn duy nhất | `SPEC-LF.md:127` vs `SPEC-LF.md:49`, `supabase/schema.sql` | ✅ **Thật** |
| **P6** | 🟠 Ambiguity | NFR *Content integrity* đòi *"≥1 nguồn tham chiếu **chính thống**"* nhưng **không định nghĩa "chính thống"**. Hậu quả đã đo được: **63% món không có nguồn Wikipedia**, 21/63 tỉnh cả 3 món đều không — vẫn "đạt" NFR. Cổng zod chỉ kiểm *có* URL, không kiểm chất lượng nguồn | `SPEC-LF.md:121` vs `RISK-LF.md` R2 | ✅ **Thật** |
| **P7** | 🟠 Mâu thuẫn nội bộ | Trong **cùng một dòng US-01**: phần *Story* nói *"vài bubble món ăn nổi bật"*, phần *AC* nói *"tất cả tỉnh có dữ liệu đều có marker hiện sẵn"*. Story chưa cập nhật khi bỏ thiết kế 2 tầng | `SPEC-LF.md:21` | ✅ **Thật** |
| **P8** ✅ đã sửa | 🟡 Thiếu | **Không story/AC nào phủ `tasteTags`.** Thực tế badge hiện slug tiếng Anh thô — `spicy`, `savory`, `noodle-soup` — trên **cả bản tiếng Việt**. Chưa ai từng quyết định điều này; nó lọt vào sản phẩm qua schema | `lib/types.ts` `TASTE_TAGS`, `DishCard.tsx:72-75`; không có US nào nhắc | ✅ **Thật** |
| **P9** | 🟡 Thiếu | Vai **Content Editor** chỉ mô tả *"sửa `data/provinces/*.json`, không qua UI admin"*. Không dòng nào cho 2 việc đã phát sinh: sửa bản dịch `data/i18n/en/*.json`, và **kiểm duyệt/ẩn review + xử lý báo lỗi** qua Supabase Dashboard | `SPEC-LF.md:13, 132-137` vs `ADMIN-GUIDE-LF.md` | ✅ **Thật** |
| **P10** | 🟡 Ambiguity | US-07 đòi không tràn ngang ở *"viewport ≤ 400px"*; NFR Responsive lại cam kết *"từ **360px** trở lên"*. Máy 320px (iPhone SE) **nằm trong** phạm vi US-07 nhưng **ngoài** cam kết NFR | `SPEC-LF.md:27` vs `SPEC-LF.md:124` | ✅ **Thật** |
| **P11** | 🟢 Lỗi thời | GAP-02 vẫn nằm ở mục *"negative case CHƯA XỬ LÝ"* với điều kiện *"nếu tới hạn nộp bài vẫn chưa có key thật"*. Key MapTiler đã có từ **2026-09-03**; điều kiện không bao giờ kích hoạt. Người đọc hôm nay không phân biệt được đây là việc còn treo hay đã hết hiệu lực | `SPEC-LF.md:35` vs `DOR-LF.md` (mục MapTiler đã đóng) | ✅ **Thật** |

**11 phát hiện** — vượt mốc ≥5 của đề bài.

### PM phán xử — 2026-09-09

PM duyệt **11/11 là thật**. Nhưng khi ghi lại kết quả, AI tự đối chiếu thêm và **rút lại
một phần P2**: cách đóng khung ban đầu mâu thuẫn với quy ước *"artefact đóng băng có chủ
đích"* mà chính dự án đã chốt ở `KNOWLEDGE-HEALTH-LF.md`. Chi tiết ở dòng P2.

**Vì sao ghi lại chuyện này thay vì im lặng sửa:** `RISK-LF.md` **R3 (rubber-stamping)**
là rủi ro còn mở của dự án, và nó áp cho **cả hai chiều**. PM duyệt cả gói mà không có
mục nào bị bác là **đúng dạng tín hiệu** mà R3 cảnh báo. Ở đây phát hiện sai lại do chính
AI viết ra, nên AI có trách nhiệm chỉ ra — nếu không, một dương tính giả sẽ được đóng dấu
"PM đã duyệt" và trở thành căn cứ để sửa nhầm một artefact vốn cố tình giữ nguyên.

**Kết quả sau phán xử:** 10 phát hiện giữ nguyên, 1 phát hiện (P2) thu hẹp phạm vi.

### Trạng thái xử lý — 2026-09-09

**11/11 đã đóng.** Xem commit `91433f8` (10 phát hiện) và commit sau đó (P8).

| Phát hiện | Cách đóng |
|---|---|
| P1 | AC của US-01 sửa thành *"đất liền **VÀ** hai quần đảo Hoàng Sa, Trường Sa"*, ghi kèm toạ độ `114,4°Đ / 8,0°B` và trỏ thẳng `VIETNAM_BOUNDS` |
| P2 | `SCOPE-LF.md` thêm khai báo **🧊 bản ĐÓNG BĂNG** ở đầu file + bảng đối chiếu 4 mục đã đảo quyết định. **Không sửa nội dung gốc** |
| P3 | AC của US-05 sửa cho khớp thiết kế đã quyết: tỉnh nổi bật + link sang `/browse` |
| P4 | `/provinces/hue` → `/provinces/thua-thien-hue` |
| P5 | NFR *"Không có auth"* viết lại — không còn dùng làm lý do miễn phân quyền |
| P6 | Định nghĩa *"nguồn chính thống"* thành 4 loại cụ thể, kèm cảnh báo chưa rà lại theo định nghĩa mới |
| P7 | Story của US-01 sửa từ *"vài bubble"* → *"tất cả tỉnh có dữ liệu"* |
| P8 | **PM chọn dịch sang tiếng Việt.** Viết thành **US-17** + 4 ca kiểm thử, code sửa ở `ui-strings.ts` + `DishCard.tsx`. Kiểm bằng trình duyệt: VI = `cay · đậm đà · món nước · ăn đường phố`; EN = `spicy · savoury · noodle soup · street food` |
| P9 | Thêm vai **Moderator** + 3 dòng use-case còn thiếu |
| P10 | Thống nhất ngưỡng responsive về **360px** ở cả US-07 lẫn NFR |
| P11 | GAP-02 đánh dấu **hết hiệu lực từ 2026-09-03**, giữ làm lịch sử |

**Một quan sát đáng ghi:** P8 sinh ra **US-17** — tức bài rà soát requirement không chỉ
sửa tài liệu mà **đẻ ra một story thật và làm đổi sản phẩm**. Đó là bằng chứng cụ thể
nhất cho việc T2 không phải thủ tục giấy tờ.

---

## Câu hỏi làm rõ — cần PM trả lời để sửa đúng

| # | Cho phát hiện | Câu hỏi |
|---|---|---|
| **Q1** | P1 | Khung nhìn mặc định phải bao **đất liền** hay **đất liền + hai quần đảo**? Cần chốt thành câu chữ trong AC, vì đây là chỗ nếu người sau "sửa cho khớp AC" thì sẽ **thu khung về đất liền và xoá mất phần chủ quyền**. Đây là rủi ro nghiêm trọng nhất trong danh sách |
| **Q2** | P2 | `SCOPE-LF.md` là **ảnh chụp quyết định lúc bắt đầu** (đóng băng, giữ làm lịch sử) hay **tài liệu sống** phải cập nhật? Hai cách đều hợp lệ nhưng phải chọn một và ghi rõ ở đầu file — hiện người đọc không biết mục *Out of scope* là "đã quyết bỏ" hay "đang bỏ" |
| **Q3** | P3 | Trang chủ nên hiện **8 tỉnh nổi bật** (như hiện tại) hay **đủ 63**? Đây chính là **Q4 còn treo** trong `WEEKLY-LF.md` từ 2026-09-06. Chốt xong thì sửa AC của US-05 cho khớp |
| **Q4** | P6 | "Nguồn **chính thống**" nghĩa là gì cho dự án này? Đề xuất định nghĩa đo được: *"Wikipedia tiếng Việt, báo có giấy phép hoạt động, cổng thông tin chính quyền tỉnh, hoặc trang du lịch chính thức — **không** tính blog cá nhân và trang tổng hợp không ghi nguồn"*. Có định nghĩa thì mới nâng được cổng zod từ "có URL" lên "nguồn hợp lệ" |
| **Q5** | P5 | `author_name` do người dùng nhập **có được coi là dữ liệu cá nhân** không? Nếu có, NFR *"Không có auth"* phải viết lại — vì nó đang được dùng làm lý do **miễn** yêu cầu phân quyền, trong khi RLS chính là phân quyền và là rào chắn duy nhất |
| **Q6** | P8 | `tasteTags` hiển thị thế nào? Ba lựa chọn: **(a)** dịch sang tiếng Việt cho bản VI (`spicy` → "cay"), **(b)** ẩn hẳn khỏi giao diện, **(c)** giữ nguyên tiếng Anh có chủ đích. Hiện đang là (c) **do vô tình**, không do quyết định |
| **Q7** | P10 | Ngưỡng responsive thật là **320px hay 360px**? Chốt một số rồi sửa cả US-07 lẫn NFR cho khớp, và ghi vào SIT-UAT để test đúng ngưỡng đó |

---

## Nhận xét về chất lượng bộ requirement

Ba điều đáng ghi nhận, để đọc bảng trên cho đúng mức:

1. **11 phát hiện nhưng không có cái nào là lỗi logic nghiêm trọng trong bản thân yêu cầu.**
   Phần lớn là **lệch pha giữa tài liệu và sản phẩm** — tài liệu viết đúng tại thời điểm
   viết, rồi sản phẩm chạy tiếp mà tài liệu đứng yên.

2. **Nguyên nhân gốc giống nhau ở P2, P3, P7, P11:** dự án mở rộng scope 4 lần lớn
   (8 → 63 tỉnh · Review/Rating · chủ quyền biển đảo · song ngữ) và mỗi lần đều **thêm
   story mới** thay vì **rà lại story cũ**. US-12 → US-16 được viết đúng quy trình, nhưng
   US-01 → US-08 chưa ai đọc lại kể từ 2026-08-26.

3. **P1 là phát hiện đáng giá nhất**, và nó minh hoạ đúng vì sao bài T2 tồn tại: sản phẩm
   **đang chạy đúng**, mọi cổng tự động đều xanh, PM đã test PASS — nhưng **tài liệu yêu
   cầu lại nói ngược lại với thực tế**. Chỉ lộ ra khi có người ngồi đọc AC và đối chiếu
   với code. Không cổng tự động nào bắt được loại này, vì cả hai bên đều "đúng" theo tiêu
   chuẩn của riêng nó.

**Một điều tự nhận:** P4 là lỗi do chính tao viết sáng nay khi soạn AC cho US-16 — viết
`/provinces/hue` mà không kiểm lại slug thật. Nó lọt qua vì AC không được đối chiếu với
dữ liệu, còn `pnpm build` thì không đọc file Markdown.

---

## 🔒 Cổng hiểu — bước T2

1. PM đọc 11 phát hiện, **tự phân loại** Thật / Không / Để sau — không tick theo mặc định.
   Nếu có mục PM cho là **sai**, ghi lý do vào đây: đó là dữ liệu quý hơn cả bảng trên.
2. Trả lời Q1 trước tiên. Sáu câu còn lại có thể để sau, riêng Q1 đụng tới chủ quyền.
3. Nói được **vì sao 11 phát hiện này không cổng tự động nào bắt được** (gợi ý: chúng nằm
   ở khoảng cách giữa *tài liệu* và *sản phẩm*, mà máy chỉ kiểm được một trong hai).
