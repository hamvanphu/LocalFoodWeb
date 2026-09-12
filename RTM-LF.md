# [10] RTM — Requirements Traceability Matrix — Local Food

> Input: `SPEC-LF.md` (user story + AC), `WBS-LF.md` (task), `SIT-UAT-LF.md` (test case),
> code thật trong repo. Lập ngày **2026-09-06**, sau khi mở rộng đủ 63 tỉnh và
> refactor bản đồ.
>
> **Mục đích:** truy vết `requirement → task → code → test`, để lộ ra story nào
> chưa build/chưa test, và ngược lại — code nào đã build mà không truy về được
> requirement nào.

---

## 1. Ma trận truy vết — Story MVP (US-01 → US-08)

| Story | Task (WBS) | Code (file thật) | Test (SIT-UAT) | Trạng thái |
|---|---|---|---|---|
| **US-01** Bản đồ hiện marker ngay khi vào trang | W1-5, W1-9c, (2026-09-06: refactor 63 tỉnh) | `app/page.tsx`, `components/map/FoodMap.tsx`, `FoodMapLoader.tsx`, `mapStyle.ts`, `DishMarker.tsx`, `lib/geo.ts` | `SIT-UAT-LF.md` §US-01 + §US-01b | ✅ Test **đã viết lại** 2026-09-06 cho khớp sản phẩm; thêm US-01b kiểm địa lý + cổng `pnpm check:geo`. Chờ PM test lại |
| **US-02** Zoom hiện thêm tỉnh | W1-5, (2026-09-06: refactor) | `components/map/mapStyle.ts` (`markerSizeAtZoom`, `showLabelAtZoom`), `FoodMap.tsx` | `SIT-UAT-LF.md` §US-02 | ✅ Test **đã viết lại** 2026-09-06 (AI chạy thử 10/10 PASS). Chờ PM test lại |
| **US-03** Bấm marker → đúng trang tỉnh | W1-1, W1-5 | `FoodMap.tsx` (`goToProvince`), `app/provinces/[slug]/page.tsx` (`generateStaticParams`) | `SIT-UAT-LF.md` §US-03 | ✅ Build + test PASS |
| **US-04** Ảnh thật hoặc placeholder, không vỡ layout | W1-8 (GAP-01) | `components/ui/ImageWithFallback.tsx`, `DishMarker.tsx`, `lib/image-fallback.ts`, `components/ui/Lightbox.tsx` | `SIT-UAT-LF.md` §US-04 + §GAP-01 | ✅ Build + test PASS. Dữ liệu thật: **75/197 món có ảnh, 122 dùng fallback** |
| **US-05** Danh sách tỉnh thay thế bản đồ | W1-4, (bổ sung 2026-09-03: `/browse`) | `components/province/ProvinceExplorerGrid.tsx`, `BrowseProvinces.tsx`, `app/browse/page.tsx`, `ProvinceTeaserCard.tsx` | `SIT-UAT-LF.md` §US-05 | ✅ Build + test PASS |
| **US-06** Quay lại bản đồ từ trang tỉnh | W1-4 | `components/province/ProvinceHero.tsx` | `SIT-UAT-LF.md` §US-06 | ✅ Build + test PASS |
| **US-07** Responsive di động | W1-3, W1-9c | `app/globals.css` (token), toàn bộ component dùng Tailwind responsive | `SIT-UAT-LF.md` §US-07 | ✅ Build + test PASS |
| **US-08** 404 khi slug không tồn tại | W1-7 | `app/not-found.tsx` | `SIT-UAT-LF.md` §US-08 | ✅ Build + test PASS (đã custom, không còn trang mặc định Next.js) |

### Bổ sung 2026-09-06 — US-12 → US-15

| Story | Task (WBS) | Code (file thật) | Test (SIT-UAT) | Trạng thái |
|---|---|---|---|---|
| **US-12** Tìm kiếm không dấu | W2-7 | `components/search/SearchBar.tsx`, `lib/searchIndex.ts` | `SIT-UAT-LF.md` §US-12 | ✅ **GAP-T2 đã đóng hẳn** 2026-09-07 — có story + test. Viết test **tìm ra 1 bug thật** (thiếu trạng thái rỗng), đã sửa |
| **US-13** Lọc theo mùa/lễ hội | W2-8 | `lib/types.ts` (`OCCASIONS`), `ProvinceExplorerGrid.tsx`, `BrowseProvinces.tsx` | `SIT-UAT-LF.md` §US-13 | ✅ **GAP-T2 đã đóng hẳn** 2026-09-07 — viết test **tìm ra 2 lỗi a11y** mà axe-core không bắt được, đã sửa |
| **US-15** Báo nội dung sai | *(phát sinh từ quyết định R2)* | `lib/reviews.ts` (`ReviewKind`), `components/review/DishReviews.tsx`, `supabase/migration-02-content-report.sql` | `SIT-UAT-LF.md` §US-15 | ✅ **Story viết trước code**, test đầy đủ cả luồng lỗi + kiểm ở tầng DB |
| **US-16** Song ngữ Việt–Anh | `SPEC-LF.md` US-16 | `lib/i18n.ts`, `lib/locale.ts`, `lib/ui-strings.ts`, `app/en/**`, `data/i18n/en/*.json` (63 file) | `SIT-UAT-LF.md` §US-16 — **PM đã test PASS 09-09** | ✅ Story trước code. Cổng riêng `pnpm check:i18n`. ⚠️ Nội dung bản dịch **chưa ai đọc** — `RISK-LF.md` R15 |
| **US-17** Nhãn khẩu vị theo ngôn ngữ | `SPEC-LF.md` US-17 | `lib/ui-strings.ts`, `components/province/DishCard.tsx` | `SIT-UAT-LF.md` §US-17 | ✅ **Sinh ra từ bài rà soát T2 (P8)** — không phải yêu cầu mới mà là lỗ hổng tìm được |
| **US-18** "Trưa nay ăn gì" | `SCOPE-REC-LF.md` + `SPEC-LF.md` US-18 + `ARCH-LF.md` **D4** | `lib/recommend.ts`, `app/goi-y/`, `app/en/goi-y/`, `components/recommend/`, `components/pages/RecommendView.tsx`, `mealTypes` trong 63 file dữ liệu | `SIT-UAT-LF.md` §US-18 (15 bước) + **cổng W4-9 đã đóng** | ✅ **Bộ tài liệu [0]→[6] viết xong TRƯỚC khi code.** Cổng riêng `pnpm check:meal` + `scripts/review-meal.mjs`. ⚠️ Phân loại là phán đoán — `RISK-LF.md` R16/R17 |
| **US-14** Đánh giá & bình luận món | D3 (ARCH) | `lib/reviews.ts`, `components/review/DishReviews.tsx`, `StarRating.tsx`, `supabase/schema.sql`, gắn trong `DishCard.tsx` | `SIT-UAT-LF.md` §US-14 (gồm **cổng RLS bắt buộc** ở mục 0) | ✅ **Story viết trước code**, có test đầy đủ cả luồng lỗi. RLS kiểm chứng bằng cách tự tấn công DB |

**Kết luận phần 1: 8/8 story MVP đã build và có test case.** Không có story "mồ côi"
theo nghĩa chưa build. Nhưng **1 test case đã lỗi thời** (GAP-T1) và **2 task đã
build không truy về được story nào** (GAP-T2) — chi tiết mục 3.

---

## 2. Truy vết negative case đã ghi nhận ở SPEC

| # | Vấn đề | Code xử lý | Test | Trạng thái |
|---|---|---|---|---|
| GAP-01 | Ảnh Wikimedia lỗi runtime (429) | `ImageWithFallback.tsx` + `DishMarker.tsx` (`onError` → gradient) | `SIT-UAT-LF.md` §GAP-01 | ✅ Đã fix (W1-8), test PASS |
| GAP-02 | Style bản đồ demo bị rate-limit | `components/map/mapStyle.ts` (`maptilerStyleUrl()` fallback về demo style) | `SIT-UAT-LF.md` §GAP-02 | ✅ **Hết rủi ro** — `NEXT_PUBLIC_MAPTILER_KEY` đã có trong `.env.local`, không còn dùng demo style. Nhánh fallback vẫn giữ nhưng không còn là đường chạy chính |

---

## 3. ⚠️ Lỗ hổng truy vết phát hiện được khi lập RTM

RTM sinh ra để bắt đúng những chỗ này. Ghi thẳng, không giấu.

### GAP-T1 — Test case US-02 đã lỗi thời so với sản phẩm thật

`SIT-UAT-LF.md` §US-02 hiện ghi kỳ vọng:

> *"Chấm đỏ to biến mất dần, thay bằng **chấm vàng nhỏ** (pin tỉnh)"*

Cả hai vế đều **không còn đúng**:

1. **"Chấm đỏ/chấm vàng"** lỗi thời từ **2026-09-03** (commit `dd0eede`): marker đã
   đổi từ chấm tròn đơn sắc sang **ảnh món ăn thật** (`DishMarker.tsx`).
2. **"Biến mất dần / thay bằng"** lỗi thời từ **2026-09-06** (commit `92d4732`):
   đã bỏ hẳn cơ chế crossfade 2 tầng, giờ **không marker nào biến mất** ở bất kỳ
   zoom nào — phân cấp bằng kích thước.

**Điểm đáng lưu ý về quy trình:** SIT-UAT viết lúc 20:40 ngày 2026-09-03
(`0f97373`), PM test và đánh **PASS**, rồi 15 phút sau (20:55, `dd0eede`) marker
được thay đổi mà checklist **không được cập nhật lại**. Nghĩa là dấu "PASS" của
W1-11 với US-02 đang chứng nhận cho một hành vi không còn tồn tại.

**→ Cập nhật 2026-09-06 — ĐÃ XỬ LÝ, và rộng hơn dự kiến:**

Khi bắt tay sửa thì phát hiện **không chỉ US-02 lỗi thời** — cả **US-01 và US-03** cũng
mô tả *"8 chấm đỏ"* / *"chấm vàng"*. GAP-T1 ban đầu ghi thiếu 2 mục.

Đã làm:
- **Viết lại US-01, US-02, US-03** theo hành vi thật, có số liệu đo được (63 marker,
  nhãn hiện từ lần bấm + thứ 2 cho tỉnh nổi bật, thứ 3 cho mọi tỉnh).
- **Thêm US-01b** — mục kiểm **tính đúng đắn địa lý** mà checklist cũ thiếu hoàn toàn,
  chính là khoảng trống đã để lọt OP-06.
- **Thêm cổng tự động `pnpm check:geo`** — đã chứng minh bắt được đúng lỗi cũ: đặt lại
  toạ độ Khánh Hòa cũ thì script fail với exit code 1.
- Chạy thử toàn bộ checklist mới bằng trình duyệt: **10/10 bước PASS**.

**Vẫn cần PM tự test lại** — AI chạy thử chỉ chứng minh checklist *khớp sản phẩm*,
không thay được việc PM tự tay kiểm (đúng kỷ luật đã chốt ở Cổng hiểu bước [6]).

### GAP-T2 — W2-7 (Search) và W2-8 (Filter mùa/lễ hội): có task, có code, **không có story, không có test**

| Task | Code đã build | Story trong SPEC | Test trong SIT-UAT |
|---|---|---|---|
| W2-7 Search | `components/search/SearchBar.tsx`, `lib/searchIndex.ts`, gắn trong `SiteHeader.tsx` | ❌ **Không có** | ❌ **Không có** |
| W2-8 Filter mùa/lễ hội | `OCCASIONS` trong `lib/types.ts`, chip filter trong `ProvinceExplorerGrid.tsx` + `BrowseProvinces.tsx` | ❌ **Không có** | ❌ **Không có** |

Hai tính năng này đến từ yêu cầu miệng của PM ngày 2026-08-26, được đưa thẳng vào
`WBS-LF.md` (dòng 68-69) và build luôn (commit `54a208e`) mà **không quay lại
`SPEC-LF.md` viết user story + AC**. Hệ quả: không có tiêu chí chấp nhận nào để
kiểm, nên cũng không có test case — hai tính năng đang chạy trên site mà **chưa
từng được kiểm chứng chính thức**.

**→ Việc cần làm:** bổ sung US-12 (Search) và US-13 (Filter mùa/lễ hội) vào
`SPEC-LF.md` kèm AC, thêm test case tương ứng vào `SIT-UAT-LF.md`, rồi PM test.

> **Cập nhật 2026-09-07 — ĐÃ ĐÓNG HẲN.** Đã viết test case cho cả US-12 và US-13 vào
> `SIT-UAT-LF.md`, AI chạy thử 8/8 bước PASS. **GAP-T2 khép lại.**
>
> **Và việc viết test đã trả công ngay — tìm ra 3 lỗi thật mà "code chạy được" che mất:**
>
> | Lỗi | Vì sao không ai thấy trước đó |
> |---|---|
> | Search không có trạng thái rỗng — gõ sai thì dropdown **không hiện gì** | Không có AC nào nói phải báo "không tìm thấy", nên không ai kiểm |
> | Chip lọc phân biệt **chỉ bằng màu** (vi phạm WCAG 1.4.1) | **axe-core báo 0 vi phạm** — công cụ tự động không bắt được |
> | Chip lọc thiếu `aria-pressed` | Như trên |
>
> Đây là bằng chứng cụ thể cho luận điểm của chính GAP-T2: **không có AC thì không có
> gì để test, và không test thì lỗi cứ nằm đó dù build xanh và audit sạch.**
>
> **Bài học đã áp dụng ngay:** US-14 (Review/Rating) làm **ngược lại** — story và AC
> viết **trước** khi code, test case viết cùng lúc với tính năng, gồm cả các luồng
> lỗi (thiếu sao, thiếu tên, comment quá dài, Supabase chết). US-15 (Báo nội dung sai)
> làm y hệt. Đó là lý do US-14 và US-15 là **hai dòng duy nhất** trong RTM không mang
> cảnh báo nào — bằng chứng bài học được áp dụng thật, không chỉ nhận lỗi cho có.

### GAP-T3 — NFR "UI wow" không có test case khách quan

`SPEC-LF.md` có NFR về UI hiện đại/bắt mắt, và đây là yêu cầu PM nhấn mạnh nhiều
lần (W1-9 FAIL 2 lần vì lý do này). Nhưng trong `SIT-UAT-LF.md` **không có ca test
nào cho nó** — việc PASS/FAIL hoàn toàn dựa vào cảm nhận PM tại thời điểm review.

Đây là **giới hạn đã biết và chấp nhận**: "wow" vốn chủ quan, không đặt ngưỡng số
được. Ghi ra đây để ở viva trả lời trung thực rằng W1-9c PASS là **phán xử chủ quan
của PM**, không phải kết quả đo — chứ không giả vờ nó là test khách quan.

---

## 4. Backlog phase-2 — story chưa build (đúng kế hoạch, không phải thiếu sót)

| Story | Trạng thái | Ghi chú |
|---|---|---|
| US-09 Wishlist (localStorage) | ❌ Chưa build | Ngoài MVP. Open question về mất dữ liệu khi đổi thiết bị vẫn chưa chốt (`RISK-LF.md` R8) |
| US-10 Lọc bản đồ theo khẩu vị | ❌ Chưa build | Ngoài MVP. `tasteTags` đã có sẵn trong schema nên chi phí thấp khi làm |
| US-11 Quiz gợi ý món | ❌ Chưa build | Ngoài MVP |
| Review/Rating (D3, Supabase) | ❌ Đã hoãn | PM chốt hoãn 2026-09-03 để dồn lực cho data + QA + hồ sơ. `ARCH-LF.md` D3 + `RISK-LF.md` R10/R11 giữ nguyên để làm sau |

---

## 5. Độ phủ dữ liệu (đo thật, không ước)

| Chỉ số | Giá trị | Cách đo |
|---|---|---|
| Tỉnh có dữ liệu | **63/63** | đếm `data/provinces/*.json` |
| Tổng số món | **197** | script đếm `dishes[]` |
| Món có ảnh Wikimedia thật | **75** (38%) | đếm `images.length > 0` |
| Món dùng placeholder gradient | **122** (62%) | phần còn lại — đúng đường fallback US-04 |
| Tổng `sourceRef` | **222** | đếm `sourceRefs[]` |
| Món thiếu `sourceRef` | **0** | zod `min(1)` chặn ở build, `pnpm build` PASS |
| Route tỉnh sinh tĩnh | **63** (+5 route khác = 68) | output `pnpm build` |

**Lưu ý trung thực về chất lượng nguồn:** zod chỉ đảm bảo *có* `sourceRef`, không
đảm bảo nguồn *chất lượng cao*. Theo báo cáo của các agent research, chỉ một phần
món có nguồn Wikipedia; phần lớn tỉnh miền núi/Tây Nguyên chỉ có nguồn báo chí hoặc
cổng du lịch địa phương. Đây là **rủi ro R2 (hallucination nội dung)** vẫn còn mở —
PM cần spot-check ngẫu nhiên trước viva, không coi "build PASS" là "nội dung đúng".

---

## 6. Tổng kết RTM

| Hạng mục | Số lượng |
|---|---|
| Story MVP đã build | 8/8 |
| Story MVP có test case | **8/8 đáng tin** (test lỗi thời đã viết lại) |
| Story "mồ côi" (chưa build) | 0 |
| ~~Task đã build nhưng không có story/test~~ | **0** — GAP-T2 đã đóng 2026-09-07 |
| ~~Test case lỗi thời~~ | **0** — US-01/02/03 đã viết lại 2026-09-06, thêm US-01b |
| NFR không có test khách quan | 1 (UI "wow" — chấp nhận, ghi rõ) |
| Story phase-2 chưa build (đúng kế hoạch) | 4 |

---

## 🔒 Cổng hiểu — bước [10] (RTM)

**PM cần làm trước khi coi bước này đóng:**

1. **Chỉ 1 dòng bất kỳ** trong bảng mục 1 và truy được: *story này → code file nào
   → test case nào*. Ví dụ gợi ý: US-04 → `ImageWithFallback.tsx` → SIT-UAT §US-04.
2. **Xác nhận hoặc bác GAP-T1**: mở `SIT-UAT-LF.md` §US-02, đọc kỳ vọng "chấm đỏ →
   chấm vàng", mở site thật và tự kiểm — có đúng là test này không còn khớp sản phẩm không?
3. **Quyết định** về GAP-T2: bổ sung story + test cho Search/Filter ngay bây giờ,
   hay ghi nhận là nợ và mang vào viva như một phát hiện có chủ đích?

*(Cổng hiểu telemetry nằm riêng ở `TELEMETRY-LF.md`.)*
