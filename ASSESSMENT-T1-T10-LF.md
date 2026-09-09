# Tự đánh giá T1–T10 — Local Food

> Đối chiếu với §7.1 (đề bài) và §7.2 (rubric 0–4) của `PM-AI-Bootcamp-Program-v1.0`.
> Ngày đánh giá: 2026-09-09. Người đánh giá: AI, PM đọc lại và phân xử.
>
> **Điều kiện qua Phase 2 (§7.3):** ≥9/10 assignment ở mức ≥2 · **T5 và T10 bắt buộc ≥2**
> · mọi assignment phải **có telemetry**.

## Kết quả một bảng

| # | Assignment | Điểm | Bắt buộc | Bằng chứng chính |
|---|---|:---:|:---:|---|
| T1 | AI viết Requirement | **2** | | `SCOPE-LF.md`, `SPEC-LF.md` |
| T2 | AI Review Requirement | **1** | | *(không có artefact đúng dạng)* |
| T3 | AI sinh WBS | **3** | | `WBS-LF.md` |
| T4 | AI Estimation | **3** | | `EST-LF.md` |
| T5 | AI sinh Risk List | **4** | ✅ **BB** | `RISK-LF.md` |
| T6 | AI sinh Test Strategy | **2** | | `SIT-UAT-LF.md` + 6 cổng tự động |
| T7 | AI Weekly Report | **3** | | `WEEKLY-LF.md`, `TELEMETRY-LF.md` §1, §5.4 |
| T8 | AI Meeting Summary | **0** | | — |
| T9 | AI Retrospective | **3** | | `CASE-STUDY-LF.md`, `TELEMETRY-LF.md` §3 |
| T10 | AI Delivery Dashboard | **4** | ✅ **BB** | `/telemetry`, `KNOWLEDGE-HEALTH-LF.md` |

### ⛔ Kết luận thẳng: **8/10 ở mức ≥2 — CHƯA QUA cổng, thiếu đúng 1 assignment**

- Hai điều kiện **bắt buộc** đều đạt: T5 = 4, T10 = 4.
- Điều kiện **≥9/10 ở mức ≥2** thì **trượt**: T2 = 1 và T8 = 0.
- Telemetry: ✅ có, dùng chung toàn dự án (`TELEMETRY-LF.md` + trang `/telemetry` chạy thật).

Nghịch lý đáng nói: phần **khó nhất** (T5 Risk, T10 Dashboard) đạt mức cao nhất, còn phần
**rẻ nhất** (T2, T8 — mỗi cái dưới 1 giờ) lại là chỗ trượt. Không phải vì làm không nổi,
mà vì **chưa từng được coi là việc phải làm** — cả hai đều không nằm trên đường tới sản
phẩm chạy được, nên trôi mất trong 2 tuần chạy theo tính năng.

---

## Chi tiết từng assignment

### T1 — AI viết Requirement · **2/4**

**Đạt:** `SCOPE-LF.md` có mục tiêu/in-scope/out-scope; `SPEC-LF.md` có US-01→US-16 với
AC dạng Given/When/Then và bảng NFR riêng (hiệu năng, responsive, a11y, mở rộng dữ liệu,
"UI wow").

**PM đã chỉnh ≥1 điểm sai intent** — có bằng chứng, không phải tự nhận:
- PM bác thẳng: *"UI lỗi thời, cỡ 10 năm về trước"* → biến thành **NFR chính thức** trong
  SPEC, không còn là ý kiến rời rạc.
- PM bắt lỗ hổng thiết kế thật ở Cổng hiểu bước [1]: wishlist localStorage mất dữ liệu khi
  đổi thiết bị → chuyển thành open question ở `RISK-LF.md` R8 thay vì code bừa.

**❌ Thiếu để lên 3:** đề bài yêu cầu rõ **"có bước simulation stakeholder đòi thêm scope"**
— chưa từng làm. Trong dự án này PM là stakeholder thật và **có** đòi thêm scope liên tục
(8 → 63 tỉnh, Review/Rating, song ngữ, chủ quyền biển đảo), nhưng đó là scope creep thật
diễn ra tự nhiên, **không phải một bước diễn tập có chủ đích** như đề bài đòi.

---

### T2 — AI Review Requirement · **1/4** ⚠️ điểm trượt

**Đề bài:** AI rà draft T1 tìm mâu thuẫn/thiếu/ambiguity, sinh câu hỏi làm rõ.
**Tiêu chí:** ≥5 phát hiện hợp lệ; PM phân loại đúng cái nào thật.

**Thực tế: không có artefact nào đúng dạng này.** Cái gần nhất là `RTM-LF.md` §3, nhưng
khác cả về thời điểm lẫn bản chất:

| Đề bài T2 đòi | Dự án có |
|---|---|
| AI review **requirement** | AI review **truy vết** (story ↔ code ↔ test) |
| Ngay sau bước [1] | Ở bước [10], gần cuối |
| ≥5 phát hiện | 3 (GAP-T1, GAP-T2, GAP-T3) |
| PM phân loại thật/giả | Không có bước phân loại |

**Chiều review bị ngược.** Toàn bộ dự án chạy theo **PM review AI** (8 Cổng hiểu, PM bác
5 lần) — kỷ luật này rất mạnh và là điểm sáng nhất của dự án. Nhưng T2 đòi chiều ngược
lại: **AI review chính bản requirement** rồi PM phân xử phát hiện nào thật. Chiều đó gần
như không có.

Chỉ cho **1** chứ không phải 0 vì có dùng AI để rà và có phát hiện hợp lệ (GAP-T2 dẫn tới
việc viết test cho US-12/13, và **việc viết test đó tìm ra 3 lỗi thật** mà build xanh +
axe-core sạch đều không thấy). Nhưng không đủ số lượng và sai dạng bài.

---

### T3 — AI sinh WBS · **3/4**

`WBS-LF.md` có rolling-wave (Wave 1 bẻ tới task 0.5–2 ngày, Wave 2+ để thô), **cột "Phụ
thuộc" tường minh** cho từng task (W1-4 ← W1-3; W1-5 ← W1-3,W1-4; W1-9 ← W1-2,5,6,7,8),
và output cụ thể theo tên file.

**PM hiệu chỉnh có bằng chứng:** W1-9 bị PM đánh **FAIL 2 lần** (layout 1-cột-dài, rồi
"vẫn minor") → sinh ra W1-9b và W1-9c ngay trong WBS. Đây là WBS **sống**, không phải kế
hoạch viết một lần rồi bỏ.

Chưa lên 4 vì không có phần cải tiến quy trình lập WBS để dạy lại.

---

### T4 — AI Estimation · **3/4**

Ước lượng 3 điểm đầy đủ cho 14 task, **cột "Giả định đứng sau con số" riêng** cho từng
task, PERT = (24 + 4×48 + 88)/6 ≈ **50,7h**.

**PM điều chỉnh theo thực tế:** W1-6 (Framer Motion) bị PM bác *"1h lạc quan phi thực tế"*
→ sửa 1h→2h, kéo PERT từ 49,5h lên 50,7h. Đáng chú ý là **PM sửa theo hướng làm con số
xấu đi**, không phải làm đẹp báo cáo.

**✅ Có bước trade-off scope–time** (yêu cầu in đậm của đề bài): 50,7h PERT > 30–40h quỹ
PM thật → đưa ra 3 phương án A/B/C kèm đánh đổi từng cái, AI khuyến nghị B, **PM chốt A**.

**Điều trung thực nhất phải nói:** ước lượng này **sai rất xa**. Dự tính 50,7h cho **8
tỉnh**; thực tế làm **63 tỉnh** trong **16–22h** giờ người. Sai số hơn 20 lần theo hướng
ngược lại. Nguyên nhân đã ghi ở `CASE-STUDY-LF.md` §C: ước lượng lập theo mô hình "người
gõ code", trong khi việc thật là "người phán xử, agent gõ" — hai loại công việc khác
nhau về bản chất, không quy đổi được bằng hệ số.

---

### T5 — AI sinh Risk List · **4/4** ✅ *(bắt buộc — ĐẠT)*

**14 rủi ro** (R1–R14) — vượt mốc ≥10. Mỗi rủi ro đủ: xác suất × tác động × mitigation ×
owner, và có **trạng thái cập nhật** (🟢 đã đóng / 🟡 còn mở đã chấp nhận).

Cho 4 vì có hai thứ vượt mức "mitigation khả thi" — đó là **cải tiến quy trình, dạy lại
được**:

1. **R11 (RLS) đóng bằng bằng chứng, không bằng lời hứa.** Không dừng ở "đã chạy
   migration" mà **tự tấn công database thật**: `DELETE` cả bảng → 401; `UPDATE` review
   người khác → 401; ép `status='hidden'` → 401; `rating=99` → 401. Câu lệnh tự kiểm nằm
   trong `supabase/schema.sql` để ai cũng chạy lại được.
2. **R13 đóng bằng cách dựng cổng tự động, không bằng "lần sau nhớ kỹ hơn".** Lỗi centroid
   Khánh Hòa/Đà Nẵng nằm giữa Biển Đông đã **đi lọt qua trọn một vòng QA được đánh PASS**.
   Cách xử lý: viết `pnpm check:geo`, rồi **chứng minh cổng hoạt động** bằng cách đặt lại
   toạ độ sai → script fail exit 1, chỉ đúng tên tỉnh.

Rủi ro cũng **không tô hồng**: R2 (hallucination nội dung) và R10 (spam) vẫn để 🟡 còn mở
kèm ghi rõ hạn chế, R12 (LCP không đạt NFR) ghi là **cổng fail-open có chủ đích**.

---

### T6 — AI sinh Test Strategy · **2/4**

**Đề bài:** cấp độ test, coverage, dữ liệu test. **Tiêu chí:** bám requirement, nêu rủi
ro chất lượng.

**Phần chất đã có, nhưng nằm rải rác chứ chưa gom thành chiến lược:**

| Thành phần | Có ở đâu |
|---|---|
| Test chấp nhận theo story | `SIT-UAT-LF.md` — 12 story, bám AC trong SPEC |
| Cổng tự động ở build | zod validate 63 file dữ liệu (build fail nếu thiếu `sourceRef`) |
| Cổng dữ liệu địa lý | `pnpm check:geo` |
| Cổng bản dịch | `pnpm check:i18n` |
| Accessibility | axe-core (0 vi phạm) |
| Hiệu năng | Lighthouse, đo lại 2 lần |
| Bảo mật | Tự tấn công RLS |
| Rủi ro chất lượng | `RISK-LF.md` R2/R10/R12/R13 |

**❌ Thiếu để lên 3:** không có artefact nào **tuyên bố chiến lược** — cấp độ test nào áp
cho loại thay đổi nào, coverage mục tiêu là bao nhiêu, dữ liệu test lấy đâu ra. Hệ quả
thật, không phải lý thuyết: **GAP-T2** — Search và Filter có code, chạy trên production,
mà không có story cũng không có test, suốt nhiều ngày không ai phát hiện. Có chiến lược
test viết ra thì lỗ hổng đó lộ ngay.

`SIT-UAT-LF.md` là **danh sách ca kiểm thử**, không phải **chiến lược**. Hai thứ khác nhau.

---

### T7 — AI Weekly Report · **3/4**

`WEEKLY-LF.md` — số liệu từ nguồn thật (git log, đếm file trong repo, đo bằng công cụ),
có tiến độ/rủi ro/next, và **§5 "Quyết định cần PM đưa ra"** với Q1–Q5 → ra quyết định
được, không phải báo cáo để đọc cho vui.

**Bước phát hiện hallucination — có thật, và là chỗ mạnh nhất:**

Khi cần con số "giờ người thật" để tính chỉ số Nén, đã thử **hai** cách suy từ git. Cả
hai đều sai **ngược chiều nhau** (5h44 vs 16h33). Thay vì chọn đại một con số nghe hợp
lý, `TELEMETRY-LF.md` §1 ghi thẳng *"git không đo được giờ người"* và **để trống cột đó
chờ PM tự điền**. Giờ thật PM điền sau (16–22h) nằm ngoài cả hai ước lượng — chứng minh
việc từ chối công bố là đúng.

`TELEMETRY-LF.md` §5.4 liệt kê 4 điều chỉ số Nén **không** đo, kèm cách phát biểu an toàn
ở viva. Đây là chống hallucination áp lên **chính báo cáo của mình**.

**❌ Thiếu để lên 4:** bước này diễn ra trong telemetry chứ **không phải một bước có tên
trong quy trình lập báo cáo tuần**. Lần sau muốn lặp lại thì không có checklist để theo —
đang phụ thuộc vào việc nhớ ra phải hoài nghi.

---

### T8 — AI Meeting Summary · **0/4** ⛔ điểm trượt

**Không làm.** Không có gì để chấm.

Lý do thật: dự án này chạy hoàn toàn qua **hội thoại PM ↔ AI**, không có cuộc họp nhiều
người nào. Không có đầu vào thì không có bản tóm tắt.

Đây **không phải** lý do miễn trừ — đề bài đòi *"1 cuộc họp thật"*, và trong 2 tuần hoàn
toàn có thể tổ chức một buổi review 15 phút với sếp hoặc đồng nghiệp để lấy nguyên liệu.
Việc này bị bỏ qua vì nó không nằm trên đường tới sản phẩm chạy được.

---

### T9 — AI Retrospective · **3/4**

`CASE-STUDY-LF.md` là một retrospective đúng nghĩa, **dựa số liệu chứ không cảm tính**:

- **§A** Before/after về quy trình: vòng lặp đầu (không Cổng hiểu) → vòng lặp sau (có
  Cổng hiểu), đo bằng số lần PM bác và loại lỗi bắt được.
- **§B** Before/after năng suất nội dung: cùng một loại việc (data entry tỉnh), 6 tỉnh
  bằng 6 agent song song ≈ 7 phút thay vì ~6 ngày công.
- **§C** Tốc độ tổng thể — **tự đánh dấu là "phần yếu nhất, đọc kèm cảnh báo"**, vì
  baseline 600h là ước tính phản-thực, không phải số đo.
- **§E** Ba bài học kèm bằng chứng, trong đó bài học **"cổng chất lượng tự động bắt được
  ít hơn ta tưởng"** có bằng chứng cứng: axe-core báo **0 vi phạm** trong khi tồn tại 2
  lỗi a11y thật (chip lọc phân biệt chỉ bằng màu — WCAG 1.4.1; thiếu `aria-pressed`).

`TELEMETRY-LF.md` §3 phân loại 19 sự cố AI theo nhóm — insight từ dữ liệu vận hành.

**❌ Thiếu để lên 4:** retrospective viết **một lần ở cuối dự án**, không phải nhịp lặp
theo sprint. Không có vòng "rút ra → áp dụng → đo lại xem có tốt hơn không" ngoài một
trường hợp duy nhất (§A3).

---

### T10 — AI Delivery Dashboard · **4/4** ✅ *(bắt buộc — ĐẠT)*

Trang `/telemetry` **chạy thật trên production**, không phải bảng tĩnh trong file Word.

**7 KPI Knowledge Health** — vượt mốc ≥5 — mỗi cái có **công thức đo** (bảng "Cách đo",
viết để người khác chạy lại được) và **nguồn dữ liệu rõ** (git log, RTM, cây thư mục):

| KPI | Kết quả | Target |
|---|---|---|
| c1 Traceability Coverage | 91,7% | ≥80% ✅ |
| c2 Change Coupling | 100% | ≥70% ✅ |
| c3 Freshness | 87% | ≥85% ✅ |
| c4 Orphan Rate | 7,9% | ≤15% ✅ |
| c5 Review Evidence | 92% | ≥90% ✅ |
| c6 Decision Coverage | 100% | ≥75% ✅ |
| c7 Retrieval Quality | 100% | ≥70% ✅ |

Cộng thêm nhóm chỉ số giao hàng: nhịp commit, sản lượng repo, kết quả cổng chất lượng,
giờ người + Nén, **token đo từ transcript thật** (không ước lượng).

Cho 4 vì dashboard **tự chỉ ra điểm yếu của chính nó** — thứ hiếm thấy:
- **c3 bắt được lỗi thật:** `MODULEMAP-LF.md` lỗi thời nghiêm trọng (ghi "404 chưa có,
  design system chưa xong, 6 tỉnh chưa làm" trong khi tất cả đã xong từ lâu).
- **c7 = 100% được tự tuyên bố là có thiên lệch:** AI tự chọn mẫu, máy chỉ kiểm file/anchor
  *có tồn tại*, không kiểm nội dung có liên quan. Ghi rõ: đọc con số này là *"không có
  tham chiếu bịa"*, **không phải** *"chất lượng truy xuất hoàn hảo"*.
- Cách đo c3 ban đầu (chỉ dùng timestamp) **phạt oan** các artefact đóng băng có chủ đích
  → sửa cách đo, và **không** loại artefact đóng băng khỏi mẫu vì "như thế là tự bào chữa".

---

## Việc phải làm để qua cổng

Cần nâng **ít nhất 1 trong 2** assignment trượt lên mức ≥2. Cả hai đều rẻ:

| Việc | Công sức | Giá trị thật ngoài điểm số |
|---|---|---|
| **T2 — AI review requirement** | ~45 phút | **Cao.** `SPEC-LF.md` đã phình từ US-01 tới US-16 qua 2 tuần, thêm từng đợt theo yêu cầu miệng. Gần như chắc chắn có mâu thuẫn và AC lỗi thời thật nằm trong đó. Rà nghiêm túc sẽ tìm ra lỗi thật, giống hệt lần viết test cho US-12/13 |
| **T8 — Meeting summary** | ~30 phút | Trung bình. Cần một cuộc họp thật (buổi review với sếp, hoặc diễn tập viva có người thứ hai) rồi tóm tắt → action item + owner + hạn, PM xác nhận |

**Khuyến nghị: làm T2 trước.** Không cần sắp lịch với ai, và nhiều khả năng tìm ra lỗi
thật trong SPEC — đúng loại giá trị mà bootcamp muốn dạy. Làm cả hai thì được 10/10.

**Không nên làm:** viết hồi tố một "biên bản họp" từ hội thoại PM ↔ AI rồi gọi đó là T8.
Đề bài đòi *cuộc họp thật*; bịa ra đầu vào để lấp ô trống chính là thứ mà toàn bộ kỷ luật
telemetry của dự án này được dựng lên để chống lại.

---

## 🔒 Cổng hiểu — tự đánh giá

1. Nói được **vì sao T5 và T10 đạt 4 mà T2, T8 lại trượt** — và vì sao điều đó *không*
   nghĩa là dự án làm ẩu (gợi ý: cái gì nằm trên đường tới sản phẩm chạy được thì được
   làm kỹ; cái gì không thì trôi mất).
2. Nói được **T2 khác `RTM-LF.md` §3 ở chỗ nào** (gợi ý: chiều review, thời điểm, và ai
   phân loại phát hiện nào là thật).
3. Nói được **vì sao ước lượng T4 sai hơn 20 lần mà vẫn chấm 3** (gợi ý: rubric chấm chất
   lượng *quy trình ước lượng* và việc PM điều chỉnh, không chấm độ chính xác của con số).
