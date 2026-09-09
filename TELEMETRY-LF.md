# [10] Telemetry — Local Food

> Lập ngày **2026-09-06**.
>
> **Nguyên tắc của bước này (Capstone Playbook [10]):** *"Bẫy hay sót: để AI **bịa
> số** telemetry; đo token thay vì giờ thật."* — Vì vậy tài liệu này chia rõ 3 loại:
>
> | Ký hiệu | Nghĩa |
> |---|---|
> | ✅ **ĐO ĐƯỢC** | Trích trực tiếp từ git/file/output lệnh. Ai chạy lại cũng ra đúng số này. |
> | 🟡 **PROXY** | Suy ra từ dữ liệu đo được, **không phải** thứ cần đo. Ghi rõ sai lệch. |
> | ⬜ **PM TỰ ĐIỀN** | AI **không biết** và **không được đoán**. Để trống cho tới khi PM điền. |

---

## 1. ✅ Nhịp làm việc — đo từ git log

| Ngày | Commit | Đầu → cuối | 🟡 Cận trên | 🟡 Cận dưới | Nội dung chính |
|---|---|---|---|---|---|
| 2026-08-25 | 3 | 21:51 → 21:58 | 0h07 | 0h07 | Walking skeleton + phát hiện lỗi bỏ quy trình |
| 2026-08-26 | 24 | 20:06 → 22:49 | 2h43 | 2h43 | Bước [0]→[7] + W1-1→W1-9c + Search/Filter |
| 2026-09-03 | 7 | 19:44 → 21:56 | 2h12 | 1h11 | W1-10 (8 tỉnh), fix map, SIT-UAT, A11y, Performance |
| 2026-09-05 | 1 | 20:35 | — | — | Chốt quyết định mở rộng 63 tỉnh |
| 2026-09-06 | **18** | 08:28 → 19:59 | 11h31 | 1h43 | 63 tỉnh, refactor bản đồ, RTM/telemetry, deploy, US-14 |
| 2026-09-07 | 6 | | — | — | Đo lại hiệu năng, 7 KPI Knowledge Health, báo cáo HTML, tag `v1.0` |
| 2026-09-08 | 4 | | — | — | Chủ quyền Hoàng Sa/Trường Sa (R14), marquee, quy trình quản trị |
| 2026-09-09 | 6 | | — | — | Song ngữ 63/63 tỉnh, lint về 0, tự đánh giá T1–T10, T2, `v1.1` |
| **Tổng** | **69** | | — | — | 8 phiên, trải 15 ngày |

> **🔴 Sửa số liệu 2026-09-09 — chính bảng này từng sai.** Bản trước ghi 06/09 có **8**
> commit và tổng **43**; đo lại bằng `git log` cho **18** và **69**. Nguyên nhân: telemetry
> được lập **ngay trong** phiên 06/09, chốt số giữa chừng rồi không ai đo lại khi phiên đó
> chạy tiếp.
>
> **Bài học:** chỉ số tự động vẫn sai nếu **thời điểm đo** nằm trong khoảng đang đo. Từ nay
> số liệu sinh bằng `node scripts/update-telemetry.mjs`, chạy lại được, không nhập tay.

### 🟡 Vì sao KHÔNG có cột "giờ thật" ở đây

Đã thử **hai** cách suy giờ từ git. Cả hai đều sai, và sai **ngược chiều nhau**:

| Cách | Cách tính | Sai ở đâu |
|---|---|---|
| **Cận trên** | Lấy khoảng từ commit đầu tới commit cuối trong ngày | **Tính dư**: gộp luôn thời gian nghỉ. Ngày 06/09 nuốt trọn 2 khoảng trống 3h35 và 6h13 (nghỉ trưa/chiều) vào "giờ làm việc" |
| **Cận dưới** | Cộng các khoảng giữa 2 commit liên tiếp, bỏ khoảng > 60 phút | **Loại nhầm**: ngày 06/09 ra 1h43, trong khi ngày đó thực tế làm xong mở rộng 63 tỉnh, refactor bản đồ, deploy production và cả tính năng Review/Rating — không thể gói trong 1h43 |

Cả hai cách còn **chung một lỗi**: không đếm được thời gian **trước commit đầu tiên**
của mỗi phiên (đọc tài liệu, research, lập kế hoạch, chờ và đọc kết quả agent). Ngày
25/08 lộ rõ nhất — đo ra 7 phút, nhưng phiên đó dựng cả walking skeleton từ số không.

→ **Kết luận: git không đo được giờ người.** Giờ thật nằm đâu đó giữa **5h44 và 16h33**
— khoảng này quá rộng để dùng làm mẫu số tính Nén. Đây chính là lý do cụ thể (không
phải lý do hình thức) mà mục 5 phải do PM điền.

---

## 2. ✅ Chất lượng phán xử — đo từ git + DEVBOOK

| Chỉ số | Giá trị | Nguồn đo |
|---|---|---|
| Cổng hiểu đã đóng (bước [0]→[7]) | **8/8** | 8 commit `"dong Cong hieu"` |
| Cổng hiểu PM có phản hồi thực chất (sửa/bác/bổ sung), **không** rubber-stamp | **8/8** | Nội dung từng commit — xem bảng dưới |
| Lần gate bị PM đánh **FAIL** buộc làm lại | **2** | W1-9 → W1-9b, W1-9b → W1-9c |
| Sự cố ghi trong DEVBOOK | **23** | đếm mục bullet cấp 1 (1 mục là ghi chú hạn chế, không tính là lỗi) |
| Dòng DEVBOOK | 190+ | `wc -l DEVBOOK.md` |

### PM đã bác/sửa gì ở từng Cổng hiểu (✅ trích commit message thật)

| Bước | PM đã làm gì |
|---|---|
| [0] SCOPE | Sửa giả định #4 (nội dung AI-only), chốt deadline |
| [1] SPEC | Test US-03/US-08, **bắt gap wishlist localStorage** |
| [2] MODULEMAP | **Bác đúng** việc gộp GAP-01 vào Layer 0, buộc tách lại |
| [3] ARCH | **Bắt `Province.summary` cũng cần `sourceRef`** (AI sót) |
| [4] WBS | **Bắt 2 việc sót**: A11y audit + Lighthouse performance |
| [5] EST | **Sửa W1-6** (1h lạc quan phi thực tế) → PERT tăng 49.5h → 50.7h; chốt Phương án A |
| [6] RISK/DELEGATION | Giải thích đúng lý do `.env` cần Leash A+; chỉ ra vấn đề bảng Delegation |
| [7] DOR | Xác nhận xuyên tầng đúng; **đồng ý build trước với điều kiện** MapTiler key phải có trước W1-11 |

**Đây là số liệu mạnh nhất của dự án:** 8/8 cổng hiểu PM đều để lại dấu vết phản
biện thật, 5 lần bắt được lỗi/thiếu sót AI ngay tại cổng. Đúng tinh thần
`RISK-LF.md` R3 (chống rubber-stamping).

---

## 3. ✅ Sự cố AI — phân loại các mục DEVBOOK

| Nhóm | Số | Ví dụ tiêu biểu |
|---|---|---|
| **AI sai quy trình** | 1 | Bỏ qua toàn bộ bước [0]-[7], nhảy thẳng vào code — **PM bắt** |
| **AI sai code/logic** | 5 | `generateMetadata` không `await params`; `as Province` không validate thật; mất deep-link `#dish-slug` sau redesign; ảnh hero/Lightbox thiếu `onError`; `<img>` thuần khiến trang 16MB |
| **AI sai nội dung (hallucination)** | 1 | Bánh cuốn Thanh Trì mô tả sai (có nhân — thực tế không nhân) |
| **AI sai thiết kế** | 3 | Bản đồ 2 tầng giấu mất 55 tỉnh; khung nhìn cắt mũi Cà Mau; hiệu ứng blur-up áp nhầm cho ảnh `priority` gây LCP trễ |
| **AI sai khi tự kiểm** | 1 | Playwright `fullPage` screenshot làm hiểu nhầm là có bug |
| **Lỗi dữ liệu nguồn** | 3 | GeoJSON 65 feature thay vì 63; **centroid Khánh Hòa/Đà Nẵng nằm giữa Biển Đông**; **3 link nguồn 404 nằm im mà zod không bắt được** |
| **Lỗi môi trường/thư viện** | 5 | `maplibre-gl@6.5.0` không load tile (**PM báo**); pnpm virtual store lệch; Wikimedia 429; cache module-level trả dữ liệu cũ; **502 ảnh Wikimedia trên production khi cache Vercel còn lạnh** |

Tổng: **19 sự cố** được phân loại ở trên, nằm trong **23 mục** DEVBOOK (4 mục còn lại là ghi chú hạn chế/bối cảnh, không phải lỗi).

**⚠️ Điểm trung thực cần nói ở viva:** DEVBOOK **chưa ghi đủ** mọi lần PM bắt lỗi.
Ví dụ 2 việc PM phản hồi trực tiếp ngày 2026-09-03 — *giọng văn "mày" lọt vào copy
người dùng* và *bubble chấm đỏ thay vì ảnh món ăn* — chỉ nằm trong commit
`dd0eede`, **không có mục riêng trong DEVBOOK**. Tương tự, 2 lần W1-9 FAIL vì
"UI lỗi thời / chưa wow" cũng không có mục DEVBOOK. Nếu tính cả các lần này, số
sự cố thật **cao hơn 19**. Đây là nợ ghi chép, không phải số liệu để làm đẹp.

---

## 4. ✅ Sản lượng — đo từ repo

| Chỉ số | Giá trị | Cách đo |
|---|---|---|
| Tỉnh có dữ liệu | 63/63 | đếm file `data/provinces/` |
| **Tỉnh đã dịch tiếng Anh** | **63/63** | đếm file `data/i18n/en/` |
| Món ăn | 197 | script đếm `dishes[]` |
| `sourceRef` | **287** | script đếm |
| Món có ảnh thật | 75 (38%) | đếm `images.length > 0` |
| File trong repo (đã track) | **316** | `git ls-files \| wc -l` |
| Route sinh tĩnh | **134** (63 VI + 63 EN + 8) | output `pnpm build` |
| Commit | **69** | `git rev-list --count HEAD` |
| Artefact governance | **31** file `.md` | `ls *.md` |
| Story có checklist kiểm thử | **16** | đếm `## US-` trong `SIT-UAT-LF.md` |
| Cổng kiểm chạy được bằng lệnh | **2** (`check:geo`, `check:i18n`) | đếm `scripts/check-*.mjs` |
| Mục sự cố trong DEVBOOK | **36** | đếm gạch đầu dòng in đậm |

> Toàn bộ bảng này sinh bằng `node scripts/measure-telemetry.mjs` — **không nhập tay**, nên
> chạy lại lúc nào cũng ra số hiện tại. Đây là phản ứng trực tiếp với lỗi số liệu ở mục 1.

### Kết quả cổng chất lượng (✅ đo bằng công cụ, không phải tự đánh giá)

| Cổng | Kết quả | Công cụ |
|---|---|---|
| Build + typecheck | **PASS** (0 lỗi TS) | `pnpm build` |
| Zod validate 63 file dữ liệu | **PASS** (0 file sai schema) | `provinceSchema.safeParse` lúc build |
| Accessibility | **0 vi phạm** (sau khi sửa 4 lỗi contrast + 1 lỗi focus) | `@axe-core/playwright`, 4 trang |
| Performance | LCP trang chủ **không đạt** NFR < 2.5s | Lighthouse CLI — xem `PERFORMANCE-LF.md`, rủi ro R12 đã chấp nhận công khai |
| SIT/UAT | 8/8 story MVP PASS — **nhưng 1 test lỗi thời** | PM test thủ công; xem `RTM-LF.md` GAP-T1 |
| RLS (bảo mật review) | **PASS** — tự tấn công DB: ghi hợp lệ 201; `status=hidden`/`rating=99`/comment 600 ký tự/DELETE/UPDATE đều 401 | script curl trực tiếp lên Supabase, 2026-09-06 |

---

## 5. ✅ Giờ người thật + Nén — **PM đã điền 2026-09-06**

> **Nguồn số:** PM tự ước tính, trả lời trực tiếp cho từng phiên. **Không** suy từ
> commit timestamp, **không** suy từ token. AI chỉ cung cấp mốc thời gian và khối
> lượng việc từng phiên để PM đối chiếu trí nhớ.

### 5.1 Giờ ngồi máy thật

| Phiên | 🟡 Cận dưới (git) | 🟡 Cận trên (git) | ✅ PM ước tính | Việc đã làm |
|---|---|---|---|---|
| 2026-08-25 | 0h07 | 0h07 | *(gộp bên dưới)* | Walking skeleton từ số không |
| 2026-08-26 | 2h43 | 2h43 | **3–4h** | 8 artefact bước [0]→[7], 8 Cổng hiểu, W1-1→W1-9c, 2 vòng redesign UI, Search/Filter |
| 2026-09-03 | 1h11 | 2h12 | *(gộp bên dưới)* | 6 tỉnh MVP, debug bug map trắng, `/browse`, SIT-UAT, A11y, Lighthouse |
| 2026-09-05 | — | — | *(gộp bên dưới)* | Chốt quyết định mở rộng 63 tỉnh |
| 2026-09-06 | 1h43 | 11h31 | **4–6h** | 55 tỉnh, refactor bản đồ + sửa 2 centroid, RTM/Telemetry/Weekly, deploy Vercel, US-14 Review/Rating |
| *(25/08 + 03/09 + 05/09 gộp)* | | | **>9h** | — |
| 2026-09-07 | — | — | **2–3h** | Đo lại hiệu năng ở 63 tỉnh, 7 KPI Knowledge Health, báo cáo HTML cho sếp, xuất hội thoại, tag `v1.0` |
| 2026-09-08 | — | — | **>3h** | Chủ quyền Hoàng Sa/Trường Sa lên bản đồ ở mọi mức zoom (R14), tempo marquee, quy trình quản trị, khối "Cảm nhận mới nhất" |
| 2026-09-09 | — | — | **2–3h** | Song ngữ Việt–Anh 63/63 tỉnh (US-16, ~41.000 từ), dọn lint về 0 + sửa bug deep-link, tự đánh giá T1–T10, bài T2 (11 phát hiện, sửa 11/11), US-17, tag `v1.1` |
| **TỔNG** | — | — | **≈ 23–32h** | |

> **Cập nhật 2026-09-09.** Ba phiên cuối PM tự khai, **không** suy từ git (lý do ở mục 1).
> Riêng 08/09 PM trả lời *"trên 3 giờ"* — cận dưới chắc chắn là 3h, **cận trên 4h là giả
> định của AI**, không phải điều PM nói. Ghi rõ để không biến một khoảng mở thành con số đóng.
>
> Cột cận dưới/cận trên từ git để trống cho 3 phiên này: proxy đó **đã được chứng minh là
> sai cả hai chiều** ở mục 1, tính thêm chỉ tạo cảm giác chính xác giả tạo.

**Đối chiếu với proxy từ git:** con số thật (**16–22h**) nằm gọn trong khoảng
[5h44 – 16h33] mà git đoán được, nhưng **lệch hẳn về phía trên**, thậm chí vượt cận
trên. Điều này xác nhận nhận định ở mục 1: **cả hai proxy đều thấp hơn thực tế**, vì
không đếm được thời gian đọc/nghĩ/phán xử không sinh ra commit. Nếu lúc nãy cứ lấy
đại một proxy làm mẫu số thì Nén đã bị **thổi phồng lên 1,5–4 lần**.

### 5.2 Baseline "giờ truyền thống"

✅ **PM chốt: 600 giờ** (tự làm một mình, không AI hỗ trợ).

Khối lượng thật dùng làm căn cứ:

- Research + viết nội dung có kiểm nguồn cho **197 món / 63 tỉnh** (mô tả, nguyên
  liệu, các bước làm, cách ăn, ≥1 nguồn/món, tìm ảnh Wikimedia có giấy phép)
- **~33 component** React/TypeScript + bản đồ tương tác MapLibre
- **19 artefact governance** (SCOPE → RTM → Telemetry → Weekly)
- QA thủ công 8 story + audit A11y + audit Performance
- Deploy production + tính năng Review/Rating có backend, RLS và kiểm chứng bảo mật
- Bao gồm cả thời gian **học công nghệ mới từ đầu** (MapLibre, Next.js 16, Supabase RLS)

> ⚠️ **Đừng nhầm với PERT 50,7h trong `EST-LF.md`.** Con số đó là ước lượng **có AI
> hỗ trợ** và chỉ cho **8 tỉnh** — không phải baseline truyền thống cho 63 tỉnh.

### 5.3 Nén (Productivity Ratio) — **tính lại 2026-09-09**

Từ 06/09 tới nay phạm vi đã tăng thêm một khối lớn (song ngữ 63/63 tỉnh, ~41.000 từ dịch
chuyên ngành). **Cả tử số lẫn mẫu số đều đổi**, nên phải tính lại cả hai chứ không chỉ
cộng giờ vào mẫu số.

**Mẫu số (giờ thật):** 16–22h → **23–32h** (mục 5.1).

**Tử số (baseline không có AI):** 600h → **730–800h**. Phần thêm: dịch 41.000 từ nội dung
ẩm thực chuyên ngành ở tốc độ dịch chuyên ngành thực tế ~2.000–3.000 từ/ngày ⇒ ~110–160h;
cộng phần kỹ thuật đa ngôn ngữ (~90 chuỗi giao diện, tách nhánh route, kiểm thử) ⇒ ~20–40h.

| Cách tính | Nén |
|---|---|
| ⚠️ **Sai** — giữ baseline cũ 600h, chỉ cộng giờ vào mẫu số | 19–26× |
| ✅ **Đúng** — sửa cả tử số lẫn mẫu số | **23–35×** |

### ➡️ **Nén ≈ 23–35 lần** (khoảng giữa: **~29×**)

**Vì sao phải nêu cả dòng "Sai":** nếu chỉ cộng giờ mới vào mẫu số mà quên tăng baseline,
chỉ số tụt từ 27–37× xuống 19–26× và **trông như năng suất giảm** — trong khi thực tế là
đã làm thêm cả một tính năng lớn. Đây là cái bẫy dễ mắc nhất khi cập nhật chỉ số theo kỳ,
và nó làm sai theo hướng *bi quan* nên càng ít người kiểm lại.

**So với lần đo trước (27–37×):** khoảng mới thấp hơn một chút và **hẹp hơn**. Không nên
đọc là "năng suất giảm" — baseline cho phần dịch là ước tính thận trọng, và mẫu số giờ đã
có thêm 3 phiên đo trực tiếp thay vì gộp.

### 5.4 ⚠️ Chỉ số Nén này KHÔNG đo cái gì — cần nói rõ ở viva

Nén ~32× là con số rất lớn, và sẽ bị hỏi lại. Những giới hạn phải tự nêu trước:

1. **Không đo chất lượng.** 600h giả định làm ra sản phẩm *tương đương*, nhưng
   `RTM-LF.md` cho thấy chưa tương đương: 2 tính năng chưa có test, 1 test lỗi thời,
   LCP không đạt NFR.
2. **Không trừ chi phí sửa lỗi AI.** 19 sự cố trong DEVBOOK đều tốn giờ người để
   phát hiện và sửa — chúng nằm *trong* 23–32h, nhưng nếu AI ít sai hơn thì số giờ
   đó còn thấp nữa. Nén đo *kết quả ròng*, không đo mức độ trơn tru.
3. **Baseline 600h là ước tính, không phải đo.** Không ai thực sự làm lại dự án này
   bằng tay để so. Đây là điểm yếu nhất của phép tính — và đúng ra phải vậy, vì
   baseline truyền thống về bản chất là phản-thực (counterfactual).
4. **Rủi ro nội dung chưa được kiểm hết.** R2 (hallucination) còn mở: 197 món phần
   lớn nguồn không phải Wikipedia, PM chưa spot-check xong. Nếu spot-check phát hiện
   sai nhiều, phần "sản lượng" trong tử số sẽ phải chiết khấu.

**Cách phát biểu an toàn ở viva:** *"Nén khoảng 23–35 lần về **thời gian tạo ra sản
phẩm**, với baseline là ước tính của tôi chứ không phải số đo, và chưa chiết khấu phần
chất lượng còn thiếu đã ghi rõ trong RTM."*

**Nếu bị hỏi vì sao con số tụt so với lần trước (27–37×):** không phải năng suất giảm.
Phạm vi tăng thêm phần song ngữ nên **cả tử số lẫn mẫu số đều phải sửa**; baseline mới cho
phần dịch là ước tính thận trọng hơn, và mẫu số giờ đã có thêm 3 phiên PM khai trực tiếp
thay vì gộp. Xem bảng "Sai / Đúng" ở mục 5.3.

### 5.5 ✅ Token — **đo được từ transcript**, không phải ước lượng *(đo lại 2026-09-09)*

**Nguồn:** transcript của phiên nằm trên đĩa (`~/.claude/projects/…/54b73208-….jsonl`,
**52,4MB**, **2.762 lượt** trả lời của AI). Claude Code ghi `usage`
thật vào từng lượt, nên đây là **số đo**, không phải suy đoán. Chạy lại bằng
`node scripts/update-telemetry.mjs`.

Phiên chạy từ **2026-08-25 13:52** đến **2026-09-09 14:44** — khớp đúng vòng đời dự án.

| Loại token | Số lượng |
|---|---|
| Input mới (không lấy từ cache) | 5.496 |
| **Output** (AI sinh ra) | **3.015.822** |
| Cache write (tạo cache) | 16.301.873 |
| Cache read (dùng lại cache) | 1.208.497.060 |
| **Tổng thô** | **1.227.820.251 (~1,22 tỷ)** |
| **Tính giá đầy đủ** *(không gồm cache read)* | **19.323.191 (~19,3M)** |

#### ⚠️ Đừng trích con số 1,22 tỷ mà bỏ ngữ cảnh

**98.4% lượng token là cache read** — phần bối cảnh được **đọc lại** ở mỗi lượt, không
phải nội dung mới. Trong một phiên dài 15 ngày, toàn bộ lịch sử hội thoại được gửi lại mỗi
lượt; cache khiến phần đó rẻ hơn nhiều lần so với input thường.

→ Nói *"dự án tiêu 1,22 tỷ token"* là **đúng số nhưng gây hiểu sai**. Con số phản ánh đúng
khối lượng làm việc là **~19,3M token tính giá đầy đủ**, trong đó **~3,0M là output** —
phần AI thực sự viết ra.

#### 🔴 Con số này là SÀN, không phải tổng — lỗ hổng đo lường đã biết

Đã kiểm cụ thể: transcript có **0 lượt `isSidechain`**. Nghĩa là **toàn bộ token của agent
chạy nền không được ghi vào đây**. Dự án dùng agent song song ở 3 đợt lớn:

| Đợt | Số agent | Việc |
|---|---|---|
| 03/09 | 6 | Research + viết nội dung 6 tỉnh MVP |
| 06/09 | ~8 | Mở rộng 55 tỉnh còn lại |
| 09/09 | 10 | Dịch 62 tỉnh sang tiếng Anh |

Mẫu đo được từ thông báo tác vụ ngày 09/09: 4 agent dịch báo **68.836 – 99.668 token**
mỗi agent. Suy ra ~24 agent × cỡ đó là **một khối đáng kể không nằm trong bảng trên**.

**Không ước lượng bù vào.** Ghi rõ đây là sàn, đúng nguyên tắc ở mục 1: thà để trống một
con số còn hơn điền một con số không đo được. Muốn có tổng thật thì phải lấy từ trang
usage của tài khoản — việc đó thuộc PM, AI không truy cập được.


## 🔒 Cổng hiểu — bước [10] (Telemetry)

**PM cần làm trước khi coi bước này đóng:**

1. ✅ **Đã điền mục 5.1/5.2 (2026-09-06), đo lại 2026-09-09** → Nén ≈ **23–35 lần**. Việc còn lại: đọc
   mục **5.4** và tự thấy thoải mái khi bảo vệ con số đó — nếu thấy 600h là quá cao
   so với cảm nhận thật, hãy sửa lại, vì đó là ước tính của PM chứ không phải số đo.
2. **Bác ≥1 số** nếu thấy nghi. Gợi ý những số dễ bị hiểu sai nhất, tự AI nêu ra:
   - **Khoảng "5h44 – 16h33"** ở mục 1 — cả 2 đầu đều là **proxy sai**: cận dưới loại
     nhầm giờ làm việc thật, cận trên gộp nhầm giờ nghỉ. Đừng lấy đầu nào làm mẫu số.
   - **"19 sự cố"** — mục 3 đã tự thừa nhận con số này **thiếu**, ít nhất 4 lần PM
     bắt lỗi không được ghi thành mục riêng trong DEVBOOK.
   - **"8/8 story PASS"** — thực chất chỉ **7 đáng tin**, vì test US-02 đã lỗi thời
     (`RTM-LF.md` GAP-T1).
3. **Xác nhận**: mọi số ở mục 1-4 đều truy được về git/file/output lệnh, không số
   nào suy từ token.
