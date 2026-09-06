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
| **US-01** Bản đồ hiện marker ngay khi vào trang | W1-5, W1-9c, (2026-09-06: refactor 63 tỉnh) | `app/page.tsx`, `components/map/FoodMap.tsx`, `FoodMapLoader.tsx`, `mapStyle.ts`, `DishMarker.tsx`, `lib/geo.ts` | `SIT-UAT-LF.md` §US-01 | ✅ Build + test PASS (W1-11). **AC đã đổi 2026-09-06** — xem GAP-T1 |
| **US-02** Zoom hiện thêm tỉnh | W1-5, (2026-09-06: refactor) | `components/map/mapStyle.ts` (`markerSizeAtZoom`, `showLabelAtZoom`), `FoodMap.tsx` | `SIT-UAT-LF.md` §US-02 | ⚠️ Build OK, **test LỖI THỜI** — xem **GAP-T1** |
| **US-03** Bấm marker → đúng trang tỉnh | W1-1, W1-5 | `FoodMap.tsx` (`goToProvince`), `app/provinces/[slug]/page.tsx` (`generateStaticParams`) | `SIT-UAT-LF.md` §US-03 | ✅ Build + test PASS |
| **US-04** Ảnh thật hoặc placeholder, không vỡ layout | W1-8 (GAP-01) | `components/ui/ImageWithFallback.tsx`, `DishMarker.tsx`, `lib/image-fallback.ts`, `components/ui/Lightbox.tsx` | `SIT-UAT-LF.md` §US-04 + §GAP-01 | ✅ Build + test PASS. Dữ liệu thật: **75/197 món có ảnh, 122 dùng fallback** |
| **US-05** Danh sách tỉnh thay thế bản đồ | W1-4, (bổ sung 2026-09-03: `/browse`) | `components/province/ProvinceExplorerGrid.tsx`, `BrowseProvinces.tsx`, `app/browse/page.tsx`, `ProvinceTeaserCard.tsx` | `SIT-UAT-LF.md` §US-05 | ✅ Build + test PASS |
| **US-06** Quay lại bản đồ từ trang tỉnh | W1-4 | `components/province/ProvinceHero.tsx` | `SIT-UAT-LF.md` §US-06 | ✅ Build + test PASS |
| **US-07** Responsive di động | W1-3, W1-9c | `app/globals.css` (token), toàn bộ component dùng Tailwind responsive | `SIT-UAT-LF.md` §US-07 | ✅ Build + test PASS |
| **US-08** 404 khi slug không tồn tại | W1-7 | `app/not-found.tsx` | `SIT-UAT-LF.md` §US-08 | ✅ Build + test PASS (đã custom, không còn trang mặc định Next.js) |

### Bổ sung 2026-09-06 — US-12 → US-15

| Story | Task (WBS) | Code (file thật) | Test (SIT-UAT) | Trạng thái |
|---|---|---|---|---|
| **US-12** Tìm kiếm không dấu | W2-7 | `components/search/SearchBar.tsx`, `lib/searchIndex.ts` | ❌ **vẫn chưa có test case** | ⚠️ Đã có story (viết bù), **chưa có test** — GAP-T2 mới đóng được một nửa |
| **US-13** Lọc theo mùa/lễ hội | W2-8 | `lib/types.ts` (`OCCASIONS`), `ProvinceExplorerGrid.tsx`, `BrowseProvinces.tsx` | ❌ **vẫn chưa có test case** | ⚠️ Như trên |
| **US-15** Báo nội dung sai | *(phát sinh từ quyết định R2)* | `lib/reviews.ts` (`ReviewKind`), `components/review/DishReviews.tsx`, `supabase/migration-02-content-report.sql` | `SIT-UAT-LF.md` §US-15 | ✅ **Story viết trước code**, test đầy đủ cả luồng lỗi + kiểm ở tầng DB |
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

**→ Việc cần làm:** cập nhật `SIT-UAT-LF.md` §US-02 theo AC mới của US-01/US-02
(đã sửa trong `SPEC-LF.md` ngày 2026-09-06), rồi **PM test lại US-02** trước viva.
Chưa test lại thì US-02 phải coi là **chưa được kiểm chứng**, không phải PASS.

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

> **Cập nhật 2026-09-06 — đóng được một nửa:** đã viết US-12 và US-13 kèm AC vào
> `SPEC-LF.md`. **Nhưng test case thì chưa** — nên 2 tính năng này vẫn *chưa được
> kiểm chứng chính thức*, chỉ là giờ đã có tiêu chí để kiểm. Ghi rõ ở đây thay vì
> đánh dấu "đã xong" cho gọn mắt.
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
| Story MVP có test case | 8/8 (nhưng **1 lỗi thời** → thực chất 7 đáng tin) |
| Story "mồ côi" (chưa build) | 0 |
| **Task đã build nhưng không có story/test** | **2** (W2-7, W2-8) |
| **Test case lỗi thời cần viết lại** | **1** (US-02) |
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
