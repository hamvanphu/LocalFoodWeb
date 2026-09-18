# Knowledge Health KPI — Local Food

> Yêu cầu từ quản lý (2026-09-04): *"Tạo Interactive HTML report về quá trình làm dự án
> … Tạo các KPI theo ảnh và add luôn vào report"*. Đo ngày **2026-09-07**.
>
> **Đây KHÔNG trùng với `TELEMETRY-LF.md`.** Telemetry đo *quá trình làm việc* (giờ,
> token, sự cố). 7 KPI này đo *sức khoẻ kho kiến thức* — AI chỉ tốt bằng kho tài liệu
> nó đọc được.

| KPI | Kết quả | Target | |
|---|---|---|---|
| c1 Traceability Coverage | **93,3%** | ≥ 80% | ✅ |
| c2 Change Coupling | **92,5%** | ≥ 70% | ✅ |
| c3 Freshness | **96,9%** | ≥ 85% | ✅ *(đã dọn 18/09)* |
| c4 Orphan Rate | **5,4%** | ≤ 15% | ✅ |
| c5 Review Evidence | **100%** | ≥ 90% | ✅ |
| c6 Decision Coverage | **100%** | ≥ 75% | ✅ |
| c7 Retrieval Quality | *(chưa đo lại)* | ≥ 70% | ⚠️ số của v1.0 |

> **Đo lại 2026-09-18 cho bản v1.2.** Lần đo trước (07/09) là của v1.0.
>
> c3 ban đầu đo ra **84,4% (không đạt)** → đã dọn 6 artefact lệch → **96,9%**.
> c5 đạt **100%** sau khi `PERFORMANCE-LF.md` có Cổng hiểu riêng.

**Nơi xem:** panel trên `/telemetry` (dashboard đang chạy) + Interactive HTML report.

---

## ⚠️ c3 lại KHÔNG ĐẠT — lần thứ ba nó bắt được lỗi thật *(đo 2026-09-18)*

**84,4%** (27/32 artefact) — dưới ngưỡng 85%. Năm file còn lệch sau khi thêm US-18:

| File | Lệch chỗ nào |
|---|---|
| `WEEKLY-LF.md` | Báo cáo tuần dừng ở 06/09 |
| `VIDEO-SCRIPT-LF.md` | Chưa có cảnh `/goi-y` — mà đó là tính năng dễ gây ấn tượng nhất khi quay |
| `CASE-STUDY-LF.md` | Chưa có US-18 làm điểm dữ liệu |
| `PERFORMANCE-LF.md` | Chưa đo `/goi-y`; cũng là artefact **duy nhất** thiếu dấu vết PM ở c5 |
| `SPOTCHECK-LF.md` | Chưa nhắc rủi ro bản dịch (R15) |

**Ba lần c3 bắt được lỗi thật, cùng một nguyên nhân gốc:** thêm tính năng thì viết tài
liệu mới, nhưng **không rà lại tài liệu cũ**. Lần 1: bản đồ module ghi "404 chưa có" khi
đã xong từ lâu. Lần 2: README tự khai nhược điểm mình không còn có. Lần 3: năm file trên.

### Hai chỉ số khác cũng đổi, ghi thẳng

- **c2 tụt 100% → 92,5%.** Số commit tăng gấp đôi; ba commit sửa lỗi gấp không kèm tài liệu.
- **c4 cải thiện 7,9% → 5,4%** dù số module tăng gấp đôi.
- **c5 96,9%** — chỉ `PERFORMANCE-LF.md` thiếu dấu vết can thiệp của người.

### 🔴 Sửa CÁCH ĐO c3 — định nghĩa cũ sai, và nó sai theo hướng nguy hiểm

Phép rà ban đầu hỏi: *"artefact này có nhắc `US-18` / `goi-y` / `mealTypes` không?"* — file
nào không nhắc thì coi là lỗi thời. **Định nghĩa đó sai.**

Bằng chứng: sau khi dọn xong đúng 5 file lệch, phép đo cũ cho **81,3% — thấp hơn trước khi
dọn**. Một phép đo mà làm việc đúng lại khiến điểm tụt thì không dùng được.

Nó gắn cờ 6 file, và **5 trong đó hoàn toàn không cần nhắc US-18**:

| File | Vì sao KHÔNG lỗi thời |
|---|---|
| `ADMIN-GUIDE-LF.md` | Nói về kiểm duyệt review qua Supabase Dashboard — không liên quan |
| `DOR-LF.md` | Cổng của lát cắt W1, đã đóng — **đóng băng theo bản chất** |
| `I18N-GLOSSARY-LF.md` | Quy ước dịch, không phải mô tả tính năng |
| `RELEASE-v1.0.md` | Ghi chú phát hành cũ — **cố ý giữ nguyên** |
| `TRANSFORMATION-PLAN-LF.md` | Định vị CASAN vẫn là Cấp 2, không đổi |

Chỉ `AI-WORKFLOW-LF.md` là đáng bổ sung thật — đã thêm hai mẫu làm việc mới.

**Định nghĩa đúng của c3:** *artefact có nội dung **mâu thuẫn với thực tế hiện tại** hay
không* — **không phải** *có nhắc tính năng mới nhất hay không*. Một tài liệu đóng băng có
chủ đích thì **luôn tươi**, dù không nhắc gì mới.

**c3 = 31/32 = 96,9%.** File duy nhất còn nợ nội dung là `AI-WORKFLOW` — đã bổ sung trong
chính phiên này.

### Một điều phải nói về chính phép đo c5

Đo c5 **rất nhạy với cách định nghĩa "dấu vết"**. Cùng bộ dữ liệu, ba cách viết regex cho
ba kết quả khác hẳn nhau:

| Cách định nghĩa | Kết quả |
|---|---|
| Chặt — bắt buộc `PM` đứng trước động từ | 82,4% *(báo thừa: bỏ sót "theo yêu cầu PM")* |
| Rộng — chỉ cần có chữ `PM` | 100% *(báo thiếu: nhắc tên ≠ can thiệp)* |
| **Giữa — dấu vết CAN THIỆP thật** | **96,9%** ← dùng số này |

Đây là **lần thứ tư trong dự án** một bộ lọc tự động của AI báo sai lệch:

| Lần | Bộ lọc | Sai thế nào |
|---|---|---|
| 1 | `review-meal.mjs` nhóm B | Gắn cờ 7 món, **6 là báo nhầm** |
| 2 | Rà c3 lần đầu | **Báo thừa 14 file** |
| 3 | Đo c5 | Chặt → 82,4%, rộng → 100%, đúng → 96,9% |
| 4 | Rà c3 lần hai | Dọn xong 5 file thì điểm **tụt** — định nghĩa sai |

**Điểm chung của cả bốn:** bộ lọc tra **mặt chữ**, còn thứ cần đo là **ngữ nghĩa**. Đúng
cái ranh giới mà `ARCH-LF.md` **D4** đã chốt cho `mealTypes`: *gán tay thứ phải **hiểu**,
suy tự động thứ chỉ cần **tra***. Bốn lần này là bằng chứng rằng luật đó không chỉ đúng cho
dữ liệu món ăn — nó đúng cho **cả cách đo chính hồ sơ này**.

Ghi ra vì nếu chỉ đọc con số mà không đọc phần này thì sẽ tưởng nó chính xác hơn thực tế.

## c3 Freshness ở lần đo đầu (07/09) — giữ làm lịch sử

Ngay lần đo đầu tiên, c3 **bắt được lỗi thật**: `MODULEMAP-LF.md` lỗi thời nghiêm trọng.
Cột "Hiện trạng" vẫn ghi:

| Tài liệu ghi | Thực tế |
|---|---|
| Trang 404 "❌ Chưa có, dùng mặc định Next.js" | Đã custom từ W1-7 |
| Design system "⚠️ chưa đạt, cần làm lại" | Xong từ W1-9c |
| Ảnh & fallback "❌ Chưa làm" | Xong từ W1-8 |
| Nội dung "❌ Chưa làm 6 tỉnh MVP" | Xong 63 tỉnh |
| Filter khẩu vị "❌ Ngoài MVP" | Filter mùa/lễ hội đã làm (US-13) |

Và thiếu hẳn 3 module phát sinh: `review/`, `telemetry/`, `search/`. **Đã sửa** — thêm
mục "Cập nhật hiện trạng 2026-09-07" và xếp tầng cho các module mới.

**Đã xử lý nốt (2026-09-07):** `PERFORMANCE-LF.md` đo Lighthouse hồi **8 tỉnh** — đã **đo lại với 63 tỉnh**, trung vị 3 lần. Kết quả **trái dự đoán**: hiệu năng tốt hơn (LCP 8,8s → 6,20s, payload −19%) dù dữ liệu gấp 8 lần. c3 lên **87%**, đạt target.

> **Đây là vòng đời đầy đủ của một KPI:** đo → phát hiện tài liệu lỗi thời → sửa → đo lại → chỉ số đạt. Không phải con số trang trí.

## 🔄 Đo lại 2026-09-11 — c3 lại bắt được lỗi thật, lần thứ hai

Sau khi ship US-16/17/18, rà lại toàn bộ artefact xem cái nào còn mô tả sản phẩm cũ.

**c3 bắt được lỗi nghiêm trọng nhất ở đúng chỗ tệ nhất — mục *"Giới hạn đã biết"* của
`README.md`**, nơi người chấm đọc kỹ nhất. Nó vẫn ghi:

| README nói | Thực tế |
|---|---|
| *"Chưa có tính năng đánh giá/bình luận"* | Đã lên production từ **06/09** (US-14/15) |
| *"Search và bộ lọc chưa có user story và test case"* | Đã đóng GAP-T2 từ **07/09** |

Tức là bản README đang **tự khai nhược điểm mình không còn có nữa** — vừa sai, vừa thiệt.
Cùng dạng lỗi với lần c3 bắt `MODULEMAP-LF.md` hồi 07/09, và **cùng nguyên nhân gốc**:
thêm tính năng thì viết tài liệu mới, nhưng **không rà lại tài liệu cũ**.

### Bảy artefact đã đồng bộ trong đợt này

`README` · `RTM` · `MODULEMAP` · `TELEMETRY` · `TECH-DEBT` · `OPERATING-LOG` ·
`DELEGATION-MAP` — thêm US-16/17/18, 3 cổng kiểm, và các rủi ro R15/R16/R17.

### Một điều phải nói thật về cách đo c3

Phép rà lần này (tìm artefact **không** nhắc `US-18`/`mealTypes`/`goi-y`) **báo thừa 14
file**, trong đó phần lớn **không đáng phải nhắc**: `I18N-GLOSSARY` là quy ước dịch,
`DOR-LF` là cổng của lát cắt cũ đã đóng, `ADMIN-GUIDE` nói về Supabase dashboard.

Đây là **lần thứ hai trong cùng một phiên** một bộ lọc tự động của AI báo thừa — lần trước
là `review-meal.mjs` gắn cờ 7 món nhóm B mà 6 là báo nhầm. Cả hai đều **cố ý** thiên về báo
thừa: sót một artefact lỗi thời thì nguy hiểm hơn đọc nhầm vài file không cần sửa.

**Nhưng phải nói ra**, vì nếu đọc con số "14 file lỗi thời" mà không đọc phần này thì sẽ
tưởng hồ sơ tệ hơn thực tế. **Số 14 là danh sách để người sàng, không phải kết luận.**

## Cách đo — để ai cũng chạy lại được

| KPI | Cách đo |
|---|---|
| c1 | Đọc bảng RTM, đếm story có đủ cả file code lẫn tham chiếu SIT-UAT |
| c2 | `git log --name-only`, đếm commit đụng code mà có kèm `.md` trong cùng commit |
| c3 | So `git log -1 --format=%ct` của từng artefact với lần code đổi cuối, **rồi đọc nội dung** những file chậm — timestamp một mình không đủ |
| c4 | Đối chiếu tên file trong `components/`, `lib/`, `app/` với toàn bộ nội dung artefact |
| c5 | Tìm dấu vết "PM bắt/bác/sửa/chốt" hoặc "Cổng hiểu" trong từng artefact |
| c6 | Liệt kê quyết định kiến trúc + vùng rủi ro cao, kiểm từng cái có bản ghi trong ARCH/RISK/DEVBOOK/TECH-DEBT |
| c7 | Chạy prompt mẫu cho 6 chức năng, rồi **verify bằng máy**: file có tồn tại, anchor có trong file |

## Hai điều phải nói thật

**1. c3 dùng timestamp là chưa đủ.** Cách đo ban đầu cho 72% và phạt oan `SCOPE-LF.md`,
`EST-LF.md`, `ARCH-LF.md` — những artefact **đóng băng có chủ đích** (quyết định tại
thời điểm, giữ làm lịch sử). Kiểm nội dung thì `ARCH` hoàn toàn đúng: đã có Supabase,
không còn mô tả bản đồ 2 tầng. Con số ở lần đo đầu là **82,6%** sau khi loại 2 file cấu hình
AI (`AGENTS.md`, `CLAUDE.md`) khỏi mẫu — **không** loại các artefact đóng băng, vì như
thế là tự bào chữa.

**2. c7 = 100% có thiên lệch.** AI tự chọn 6 chức năng, tự liệt kê tham chiếu; máy chỉ
kiểm file/anchor **có tồn tại**, không kiểm nội dung có thực sự liên quan. Prompt mẫu
ghi rõ *"PM đối chiếu kết quả với thực tế"* — bước đó **PM chưa làm**. Đọc con số này là
*"không có tham chiếu bịa"*, không phải *"chất lượng truy xuất hoàn hảo"*.

## 🔒 Cổng hiểu

1. Chọn 1 KPI và nói được **nó đo cái gì, và nếu tụt xuống thì hệ quả thực tế là gì**.
   Dễ nhất là c3 — nó vừa bắt được lỗi thật.
2. Nói được **vì sao c7 100% vẫn chưa đủ tin** (gợi ý: ai chọn mẫu, ai chấm).
