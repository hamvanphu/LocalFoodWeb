# Local Food v1.3 — Trạng thái bản phát hành

**Ngày:** 2026-09-18 · **Tag:** `v1.3`
**Sản phẩm:** https://local-food-hamvanphus-projects.vercel.app
**Mã nguồn:** https://github.com/hamvanphu/LocalFoodWeb

> Cố ý **không ghi mã commit** ở đây: file này nằm trong chính commit được gắn tag, nên
> hash ghi vào sẽ luôn trỏ commit *trước đó*. Tra bằng `git rev-parse v1.3`.

> Bản trước: [`RELEASE-v1.2.md`](RELEASE-v1.2.md) (2026-09-12).

---

## Bản này khác các bản trước

v1.1 và v1.2 là **thêm tính năng**. v1.3 **không thêm tính năng nào** — nó là bản
**siết chất lượng**, và toàn bộ nội dung của nó sinh ra từ một câu của PM:

> *"check lại file build-report.html nhé, chưa latest rồi — release v1.2 đang không matching"*

Việc rà đó lôi ra ba thứ mà **không cổng tự động nào đang chạy bắt được**.

## 1. 🔴 Ba lỗi accessibility trên production — đã sửa

Đo Lighthouse trên `/goi-y` (trung vị 3 lần) ra **a11y 95, không phải 100**. Cả ba lỗi nằm
trong `DishCard` — tức ảnh hưởng **mọi trang có món ăn**, không riêng trang gợi ý:

| Lỗi | Chi tiết | Sửa |
|---|---|---|
| **Contrast dưới ngưỡng AA** | `text-herb` (#6b8f47) trên nền trắng chỉ **3,72:1** ở tiêu đề "NGUYÊN LIỆU CHÍNH"; `text-ink/60` ở 12px chỉ **4,35:1** | `text-herb-dark`, `text-ink/75` |
| **Thứ tự tiêu đề nhảy cóc** | Trang đi thẳng `h1` → `h3`; nhãn "MÓN THỨ NHẤT/HAI" là `<p>` | Đổi thành `<h2>` — vốn đúng ngữ nghĩa hơn |
| **Tên truy cập không khớp chữ nhìn thấy** | Nút phóng to ảnh chứa **dòng ghi công** (`Tác giả · Wikimedia · CC BY-SA`) mà `aria-label` không nhắc | Gộp ghi công vào `aria-label` |

**Không dùng `aria-hidden` cho dòng ghi công** — làm thế là giấu mất phần credit khỏi
trình đọc màn hình, thứ đúng ra ai cũng nên nghe được.

**Sau khi sửa: a11y = 100/100, Performance nhích 55 → 83.**

> **Điều đáng nói nhất:** `axe-core` trong đợt W1-11a từng báo **0 vi phạm** trên chính
> những component này. Lighthouse chạy trên **trang đã render** thì bắt được. Hai công cụ,
> hai kết quả — bằng chứng thứ ba cho bài học *"cổng chất lượng tự động bắt được ít hơn ta
> tưởng"*, và bắt được **ít hơn nữa** nếu chỉ chạy một loại.

## 2. `/goi-y` là trang nhanh nhất site

| Trang | Performance | A11y | LCP | TBT | Payload |
|---|---|---|---|---|---|
| **`/goi-y`** | **83/100** | **100** | 4,70s | **65ms** | **0,59MB** |
| Trang tỉnh | 80/100 | 100 | 4,54s | 114ms | 0,62MB |
| `/browse` | 65/100 | 100 | 5,93s | 260ms | 0,98MB |
| Trang chủ *(có bản đồ)* | 46/100 | 96 | 6,20s | 4.222ms | 1,83MB |

Lý do `/goi-y` nhanh: **nó không tải thư viện bản đồ**. Đây là bằng chứng gián tiếp cho
**R12** — toàn bộ khoảng cách hiệu năng của trang chủ là do MapLibre, không phải do cách
dựng trang.

**Bubble chạy liên tục không tốn gì đo được:** 60fps, 0ms long task, cả khi có lẫn khi gỡ
bubble đi — vì `translate`/`rotate` chạy trên GPU.

## 3. Báo cáo build tự nói dối về chính nó

`reports/build-report.html` đứng nguyên ở 07/09 (bản v1.0). Đã đo lại toàn bộ: 48→85
commit, 5→10 phiên, 3.753→6.006 dòng code, 19→36 sự cố, token 913M→1,43 tỷ.

Nhưng lỗi tệ hơn là **chip lọc KPI là số cứng** trong HTML — ghi *"Đạt · 7 / Không đạt · 0"*.
Nên khi c3 tụt xuống dưới ngưỡng, báo cáo **vẫn khoe 7/7 đạt**. Đã cho chip **tự tính từ
dữ liệu**.

## 4. Sửa CÁCH ĐO c3 — không chỉ sửa con số

c3 báo **84,4% (không đạt)** với 5 file lệch. Dọn xong cả năm thì phép đo cũ cho **81,3%
— thấp hơn trước khi dọn**.

Một phép đo mà **làm việc đúng lại khiến điểm tụt** thì không dùng được. Nguyên nhân: định
nghĩa cũ hỏi *"artefact có nhắc `US-18` không"*, nên nó gắn cờ 6 file mà **5 hoàn toàn
không cần nhắc** — admin guide, DOR của lát cắt đã đóng, glossary dịch, `RELEASE-v1.0`
(đóng băng có chủ đích), transformation plan.

**Định nghĩa đúng:** artefact có nội dung **mâu thuẫn với thực tế** hay không — *không
phải* có nhắc tính năng mới nhất hay không. Tài liệu đóng băng có chủ đích thì **luôn tươi**.

### Lần thứ tư một bộ lọc tự động của AI báo sai

| | Bộ lọc | Sai thế nào |
|---|---|---|
| 1 | `review-meal.mjs` nhóm B | Gắn cờ 7 món, **6 báo nhầm** |
| 2 | Rà c3 lần đầu | **Báo thừa 14 file** |
| 3 | Đo c5 | Chặt → 82,4% · rộng → 100% · đúng → 96,9% |
| 4 | Rà c3 lần hai | Dọn xong thì điểm **tụt** |

**Điểm chung:** bộ lọc tra **mặt chữ**, còn thứ cần đo là **ngữ nghĩa** — đúng cái ranh
giới `ARCH-LF.md` **D4** đã chốt cho `mealTypes`. Bốn lần này chứng minh luật *"gán tay thứ
phải **hiểu**, suy tự động thứ chỉ cần **tra**"* không chỉ đúng cho dữ liệu món ăn, mà đúng
cho **cả cách đo chính hồ sơ này**.

Cũng vì lý do đó, script telemetry **thôi ghi đè** số sự cố đã phân loại tay: máy đếm được
42 dấu gạch đầu dòng, nhưng không đếm được *"cái này có phải một sự cố không"* — 6 trong đó
là gạch con, bài học tích cực, và ghi chú Phần B.

## Knowledge Health — đo lại toàn bộ cho v1.3

| KPI | v1.0 (07/09) | **v1.3 (18/09)** | Target |
|---|---|---|---|
| c1 Traceability | 91,7% | **93,3%** | ≥80% ✅ |
| c2 Change Coupling | 100% | **92,5%** | ≥70% ✅ |
| c3 Freshness | 87% | **96,9%** *(84,4% trước khi dọn)* | ≥85% ✅ |
| c4 Orphan Rate | 7,9% | **5,4%** | ≤15% ✅ |
| c5 Review Evidence | 92% | **100%** | ≥90% ✅ |
| c6 Decision Coverage | 100% | **100%** | ≥75% ✅ |
| c7 Retrieval Quality | 100% | *(chưa đo lại)* | ≥70% ⚠️ |

c7 **cố ý để trống** thay vì bê nguyên số của v1.0 sang.

## Quy mô

| | v1.2 | v1.3 |
|---|---|---|
| Commit | 82 | **85** |
| Dòng code | 5.990 | **6.006** |
| Artefact | 34 · 73.387 từ | **35 · 79.226 từ** |
| Sự cố đã ghi | 19 *(đếm sai)* | **36** |

---

## Còn tồn — không đổi so với v1.2

| # | Việc |
|---|---|
| 1 | 🔴 **R15** — 45.192 từ bản dịch tiếng Anh chưa ai đọc |
| 2 | 🔴 **R16** — phân loại món là phán đoán; món gán nhầm biến mất mà không ai thấy |
| 3 | **T8 (Meeting Summary) = 0** — assignment duy nhất dưới ngưỡng, cần một cuộc họp thật |
| 4 | LCP trang chủ 6,20s — R12, chấp nhận có ý thức |
| 5 | Nội dung tiếng Việt: đọc lướt 15/197 món |
| 6 | Chưa đặt giới hạn domain cho MapTiler key |
| 7 | Video demo chưa quay — kịch bản **đã bổ sung cảnh `/goi-y`** |
| 8 | Ba tỉnh (Hải Dương, Thanh Hóa, Sơn La) không bao giờ xuất hiện trong gợi ý — **thiếu nội dung**, không phải lỗi phân loại |

## Tự định vị

**Không đổi: CASAN Cấp 2 (Augmented).** Cấp 3 đòi *chuẩn hoá toàn đội*, mà quy trình này
vẫn **chỉ có đúng một người dùng**.
