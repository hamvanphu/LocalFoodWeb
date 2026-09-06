# [10] Weekly Report — Local Food

**Kỳ báo cáo:** 2026-08-25 → 2026-09-06 (12 ngày, 5 phiên làm việc)
**Hạn nộp bài:** **2026-09-09** — **còn 3 ngày**
**Người lập:** PM (Hàm Văn Phú) · **Trạng thái chung:** 🟢 Trên đà kịp hạn, còn 3 việc phải quyết

---

## 1. Tóm tắt cho người bận

Sản phẩm đã **vượt xa** phạm vi MVP đã cam kết: kế hoạch ban đầu là **8 tỉnh**,
thực tế đã hoàn thành **đủ 63/63 tỉnh** với 197 món ăn, mỗi món có nguồn tham chiếu.
Toàn bộ 10/11 bước Capstone Playbook đã đóng cổng hiểu, hệ thống build sạch và
đã đẩy lên GitHub.

**Điều cần PM biết ngay:** không phải mọi dấu "PASS" đều còn đáng tin. Việc lập RTM
hôm nay phát hiện **1 test case đã lỗi thời** và **2 tính năng đang chạy mà chưa
từng được kiểm chứng** — chi tiết mục 4.

---

## 2. Tiến độ

### Đã hoàn thành

| Hạng mục | Kế hoạch | Thực tế | Ghi chú |
|---|---|---|---|
| Bước [0]→[9] Capstone Playbook | 10 bước | ✅ 10/10, đóng cổng hiểu đủ | 8/8 cổng hiểu PM có phản biện thực chất |
| Bước [10] Trace + Telemetry | 3 artefact | ✅ RTM + Telemetry + Weekly | Telemetry còn ô chờ PM điền — mục 5 |
| Dữ liệu tỉnh | 8 tỉnh (Phương án A) | ✅ **63 tỉnh** (+688%) | 197 món, 222 `sourceRef`, 0 món thiếu nguồn |
| Ảnh món ăn | — | 75/197 có ảnh thật (38%) | 122 món dùng fallback gradient — đúng đường US-04, không phải lỗi |
| Bản đồ tương tác | Bubble + pin 2 tầng | ✅ Đổi sang **63 marker hiện đồng thời** | Thiết kế cũ giấu mất 55 tỉnh — xem mục 4 |
| QA (SIT/UAT) | 8 story | ✅ 8/8 PASS | ⚠️ 1 test lỗi thời, thực chất 7 đáng tin |
| Accessibility | Audit | ✅ **0 vi phạm** axe-core | Sau khi sửa 4 lỗi contrast + 1 lỗi focus |
| Performance | Đạt NFR | ⚠️ **Không đạt** LCP < 2.5s | Rủi ro R12 đã chấp nhận công khai, không giấu |
| Đưa code lên remote | — | ✅ github.com/hamvanphu/LocalFoodWeb | 37 commit, public |

### Chưa hoàn thành (đúng kế hoạch, không phải trượt tiến độ)

| Hạng mục | Lý do |
|---|---|
| Review/Rating (Supabase) | PM chủ động hoãn 2026-09-03 để dồn lực cho dữ liệu + QA + hồ sơ |
| Wishlist (US-09), Lọc khẩu vị (US-10), Quiz (US-11) | Backlog phase-2, ngoài MVP 2 tuần |

---

## 3. Điểm sáng đáng mang vào viva

1. **Không rubber-stamp:** 8/8 cổng hiểu PM đều để lại dấu vết phản biện thật —
   5 lần bắt được lỗi/thiếu sót của AI ngay tại cổng (giả định sai ở SCOPE, thiếu
   `sourceRef` cho `Province.summary` ở ARCH, thiếu A11y/Performance ở WBS, ước
   lượng W1-6 phi thực tế ở EST, gộp sai GAP-01 ở MODULEMAP).
2. **2 lần đánh FAIL và bắt làm lại** yêu cầu "UI wow" thay vì tặc lưỡi cho qua.
3. **Ghi nhận lỗi AI trung thực:** 17 sự cố trong DEVBOOK, gồm cả các lỗi nghiêm
   trọng tự phát hiện — và telemetry **tự thừa nhận** DEVBOOK còn ghi thiếu.
4. **Không giấu điểm yếu:** LCP không đạt NFR được ghi thẳng vào `PERFORMANCE-LF.md`
   + `RISK-LF.md` R12 thay vì im lặng.

---

## 4. 🔴 Phát hiện mới trong kỳ — cần xử lý trước viva

### 4.1 Centroid 2 tỉnh nằm giữa Biển Đông *(đã sửa)*

Khánh Hòa `[112.8, 10.7]` và Đà Nẵng `[109.8, 16.2]` bị đặt sai vị trí do
`centroids.json` lấy centroid hình học của polygon **bao gồm huyện đảo Trường Sa /
Hoàng Sa**. Khánh Hòa lệch ~450km so với Nha Trang.

**Điều đáng lo hơn bản thân lỗi:** Khánh Hòa nằm trong **8 tỉnh MVP gốc**, nghĩa là
lỗi tồn tại từ walking skeleton (25/08), **đi qua trọn vòng QA W1-11 mà PM đã đánh
PASS** (03/09) và chỉ lộ ra ngày 06/09 khi bản đồ mở rộng đủ 63 tỉnh.
→ **Bài học:** checklist QA không có mục "marker có nằm đúng vị trí địa lý không",
nên mắt người lướt qua mà không thấy. Đã ghi DEVBOOK.

### 4.2 Test case US-02 lỗi thời — dấu PASS không còn giá trị

`SIT-UAT-LF.md` §US-02 vẫn kỳ vọng *"chấm đỏ to biến mất dần, thay bằng chấm vàng
nhỏ"*, trong khi marker đã đổi sang **ảnh món ăn** (03/09) và cơ chế ẩn/hiện 2 tầng
đã **bị bỏ hẳn** (06/09).

Đáng chú ý: SIT-UAT viết lúc 20:40 ngày 03/09, PM test PASS, rồi **15 phút sau**
marker được thay đổi mà checklist không cập nhật.
→ US-02 hiện phải coi là **chưa được kiểm chứng**, không phải PASS.

### 4.3 Search + Filter mùa/lễ hội: có code, không story, không test

W2-7 (Search) và W2-8 (Filter mùa/lễ hội) đi thẳng từ yêu cầu miệng của PM vào WBS
rồi build luôn, **không quay lại SPEC viết user story + AC**. Hệ quả: không có tiêu
chí chấp nhận → không có test case → 2 tính năng đang chạy trên site mà **chưa từng
được kiểm chứng chính thức**.

---

## 5. ⬜ Quyết định cần PM đưa ra

| # | Quyết định | Lựa chọn | Hạn |
|---|---|---|---|
| **Q1** | Xử lý GAP-T2 (Search/Filter thiếu story+test) thế nào? | (a) Bổ sung US-12/US-13 + test + PM test lại — tốn ~1h nhưng hồ sơ kín; (b) Giữ nguyên, mang vào viva như phát hiện có chủ đích của chính RTM | Trước viva |
| **Q2** | Có test lại US-02 sau khi sửa checklist không? | (a) Sửa checklist + test lại (khuyến nghị — rẻ, ~15 phút); (b) Ghi nhận là chưa kiểm chứng | Trước viva |
| **Q3** | Điền giờ người thật vào `TELEMETRY-LF.md` mục 5 | **Chỉ PM làm được.** Chưa điền thì bước [10] chưa đóng được theo tiêu chí Playbook ("số liệu là giờ người thật") | Trước viva |
| **Q4** | `hero-bubbles.json` vẫn chỉ 8 tỉnh — giữ hay mở rộng? | Ảnh hưởng: tỉnh nào vẽ marker to trên bản đồ + mục "Tỉnh nổi bật" trang chủ | Tuỳ chọn |
| **Q5** | Spot-check nội dung ngẫu nhiên vài tỉnh | Rủi ro **R2 (hallucination)** vẫn mở. Zod chỉ đảm bảo *có* nguồn, không đảm bảo nội dung *đúng*. Nhiều tỉnh miền núi/Tây Nguyên chỉ có nguồn báo/du lịch, không có Wikipedia | Trước viva |

---

## 6. Rủi ro — cập nhật trạng thái

| # | Rủi ro | Trạng thái hôm nay |
|---|---|---|
| R1 | Vượt deadline | 🟢 **Đã hạ** — vượt phạm vi cam kết (63 > 8 tỉnh), còn 3 ngày cho việc còn lại |
| R2 | Hallucination nội dung ẩm thực | 🔴 **Còn mở, mức cao nhất hiện tại** — 197 món, phần lớn nguồn không phải Wikipedia. Mitigation duy nhất là PM spot-check (Q5) |
| R3 | Rubber-stamping | 🟢 **Đã kiểm soát tốt** — 8/8 cổng hiểu có phản biện, 2 lần FAIL thật |
| R4 | Ảnh Wikimedia thưa | 🟡 **Đã xảy ra đúng dự đoán, có fallback** — 122/197 món dùng gradient |
| R5 | Ảnh lỗi runtime | 🟢 Đã fix (GAP-01) |
| R6 | Chưa có MapTiler key | 🟢 **Đóng** — key đã có, bản đồ dùng style thật |
| R7 | Rò rỉ secret | 🟢 **Đã kiểm trước khi push public** — `.env.local` không bị track, không commit nào chạm tới, quét lịch sử chỉ thấy tên biến |
| R8 | Wishlist mất dữ liệu | ⚪ Không áp dụng (phase-2) |
| R10/R11 | Spam review / thiếu RLS | ⚪ Không áp dụng (đã hoãn Review/Rating) |
| R12 | LCP không đạt do MapLibre nặng | 🟡 **Chấp nhận công khai** — bản đồ là tính năng lõi, không bỏ để lấy điểm đẹp |
| **R13** | **[MỚI] Checklist QA không phủ tính đúng đắn địa lý của marker** | 🔴 Mới phát hiện qua 4.1 — nên bổ sung 1 dòng vào SIT-UAT trước viva |

---

## 7. Việc tiếp theo (3 ngày còn lại)

| Ưu tiên | Việc | Ước lượng |
|---|---|---|
| 🔴 Cao | PM điền giờ thật vào `TELEMETRY-LF.md` (Q3) — chặn việc đóng bước [10] | 15 phút |
| 🔴 Cao | PM spot-check nội dung 3-5 tỉnh ngẫu nhiên (Q5) — R2 đang là rủi ro lớn nhất | 30-45 phút |
| 🟡 Vừa | Sửa `SIT-UAT-LF.md` §US-02 + test lại (Q2) | 15 phút |
| 🟡 Vừa | Quyết Q1 (Search/Filter) | 5 phút quyết, ~1h nếu chọn (a) |
| 🟢 Thấp | Diễn tập viva: mở 1 dòng RTM bất kỳ, truy story → code → test | 20 phút |

---

## 8. Bộ hồ sơ mang vào viva — đối chiếu yêu cầu Playbook

> Yêu cầu: `SPEC · ARCH · WBS · RISK · DELEGATION-MAP · DOR · DEVBOOK · RTM · telemetry · WEEKLY` + hệ thống chạy được.

| Artefact | File | Trạng thái |
|---|---|---|
| SCOPE | `SCOPE-LF.md` | ✅ |
| SPEC | `SPEC-LF.md` | ✅ (đã cập nhật US-01/US-02 ngày 06/09) |
| MODULEMAP | `MODULEMAP-LF.md` | ✅ |
| ARCH | `ARCH-LF.md` | ✅ |
| WBS | `WBS-LF.md` | ✅ |
| EST | `EST-LF.md` | ✅ |
| RISK | `RISK-LF.md` | ✅ (nên thêm R13) |
| DELEGATION-MAP | `DELEGATION-MAP-LF.md` | ✅ |
| DOR | `DOR-LF.md` | ✅ |
| DEVBOOK | `DEVBOOK.md` | ✅ 17 sự cố (tự thừa nhận còn ghi thiếu) |
| SIT/UAT | `SIT-UAT-LF.md` | ⚠️ cần sửa US-02 |
| PERFORMANCE | `PERFORMANCE-LF.md` | ✅ |
| TECH-DEBT | `TECH-DEBT-LF.md` | ✅ |
| **RTM** | `RTM-LF.md` | ✅ **mới** |
| **Telemetry** | `TELEMETRY-LF.md` | ⚠️ **mới** — chờ PM điền mục 5 |
| **Weekly** | `WEEKLY-LF.md` | ✅ **mới** (file này) |
| Hệ thống chạy được | `pnpm dev` / GitHub | ✅ 68 route tĩnh, build sạch |

**Thiếu duy nhất để đủ bộ:** giờ người thật trong telemetry (Q3).
