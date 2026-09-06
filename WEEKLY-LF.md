# [10] Weekly Report — Local Food

**Kỳ báo cáo:** 2026-08-25 → 2026-09-06 (12 ngày, 5 phiên làm việc)
**Hạn nộp bài:** **2026-09-09** — **còn 3 ngày**
**Người lập:** PM (Hàm Văn Phú) · **Trạng thái chung:** 🟢 Đã vượt phạm vi cam kết, **site đã chạy công khai**, còn 3 việc chất lượng

---

## 1. Tóm tắt cho người bận

Sản phẩm đã **vượt xa** phạm vi MVP đã cam kết: kế hoạch ban đầu là **8 tỉnh**,
thực tế đã hoàn thành **đủ 63/63 tỉnh** với 197 món ăn, mỗi món có nguồn tham chiếu.
Toàn bộ 11/11 bước Capstone Playbook đã đi hết, hệ thống build sạch, **đã deploy công
khai** và có cả tính năng Review/Rating mà trước đó đã bị hoãn.

**Link sản phẩm:** https://local-food-hamvanphus-projects.vercel.app

**Điều cần PM biết ngay:** không phải mọi dấu "PASS" đều còn đáng tin. Việc lập RTM
hôm nay phát hiện **1 test case đã lỗi thời** và **2 tính năng đang chạy mà chưa
từng được kiểm chứng** — chi tiết mục 4.

---

## 2. Tiến độ

### Đã hoàn thành

| Hạng mục | Kế hoạch | Thực tế | Ghi chú |
|---|---|---|---|
| Bước [0]→[9] Capstone Playbook | 10 bước | ✅ 10/10, đóng cổng hiểu đủ | 8/8 cổng hiểu PM có phản biện thực chất |
| Bước [10] Trace + Telemetry | 3 artefact | ✅ RTM + Telemetry + Weekly | Telemetry **đã có giờ người thật** → Nén ≈ 27–37× |
| Dữ liệu tỉnh | 8 tỉnh (Phương án A) | ✅ **63 tỉnh** (+688%) | 197 món, 222 `sourceRef`, 0 món thiếu nguồn |
| Ảnh món ăn | — | 75/197 có ảnh thật (38%) | 122 món dùng fallback gradient — đúng đường US-04, không phải lỗi |
| Bản đồ tương tác | Bubble + pin 2 tầng | ✅ Đổi sang **63 marker hiện đồng thời** | Thiết kế cũ giấu mất 55 tỉnh — xem mục 4 |
| QA (SIT/UAT) | 8 story | ✅ 8/8 PASS | ⚠️ 1 test lỗi thời, thực chất 7 đáng tin |
| Accessibility | Audit | ✅ **0 vi phạm** axe-core | Sau khi sửa 4 lỗi contrast + 1 lỗi focus |
| Performance | Đạt NFR | ⚠️ **Không đạt** LCP < 2.5s | Rủi ro R12 đã chấp nhận công khai, không giấu |
| Đưa code lên remote | — | ✅ github.com/hamvanphu/LocalFoodWeb | 48 commit, public |
| **Deploy production** | *(không có trong WBS)* | ✅ **Vercel, ai cũng xem được** | Tự động deploy lại mỗi lần push |
| **US-14 Review/Rating** | *(đã hoãn 03/09)* | ✅ **Đã lên production** | Supabase + RLS đã kiểm chứng bằng cách tự tấn công DB |

### Chưa hoàn thành (đúng kế hoạch, không phải trượt tiến độ)

| Hạng mục | Lý do |
|---|---|
| Wishlist (US-09), Lọc khẩu vị (US-10), Quiz (US-11) | Backlog phase-2, ngoài MVP 2 tuần |

---

## 3. Điểm sáng đáng mang vào viva

1. **Không rubber-stamp:** 8/8 cổng hiểu PM đều để lại dấu vết phản biện thật —
   5 lần bắt được lỗi/thiếu sót của AI ngay tại cổng (giả định sai ở SCOPE, thiếu
   `sourceRef` cho `Province.summary` ở ARCH, thiếu A11y/Performance ở WBS, ước
   lượng W1-6 phi thực tế ở EST, gộp sai GAP-01 ở MODULEMAP).
2. **2 lần đánh FAIL và bắt làm lại** yêu cầu "UI wow" thay vì tặc lưỡi cho qua.
3. **Ghi nhận lỗi AI trung thực:** 19 sự cố phân loại trong DEVBOOK (23 mục), gồm cả
   lỗi nghiêm trọng tự phát hiện — và telemetry **tự thừa nhận** DEVBOOK còn ghi thiếu.
4. **US-14 và US-15 làm đúng quy trình sau khi RTM chỉ ra sai:** story + AC viết **trước** khi
   code, nên là **hai dòng duy nhất** trong RTM không mang cảnh báo nào — đối lập
   trực tiếp với Search/Filter (GAP-T2). Bằng chứng bài học được áp dụng thật.
5. **Bảo mật đóng bằng bằng chứng:** R11 (RLS) không chỉ "đã chạy migration" mà được
   xác nhận bằng cách tự tấn công database thật — DELETE/UPDATE/lách kiểm duyệt đều 401.
6. **Không giấu điểm yếu:** LCP không đạt NFR được ghi thẳng vào `PERFORMANCE-LF.md`
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
| ~~Q3~~ | ~~Điền giờ người thật~~ | ✅ **XONG 2026-09-06** — PM đã ước tính từng phiên: tổng **16–22h**, baseline không-AI **600h** → **Nén ≈ 27–37 lần**. Giới hạn của chỉ số ghi ở `TELEMETRY-LF.md` mục 5.4 | — |
| **Q4** | `hero-bubbles.json` vẫn chỉ 8 tỉnh — giữ hay mở rộng? | Ảnh hưởng: tỉnh nào vẽ marker to trên bản đồ + mục "Tỉnh nổi bật" trang chủ | Tuỳ chọn |
| ~~Q5~~ | ~~Spot-check nội dung~~ | ✅ **XONG 2026-09-06** — PM đọc lướt 15/197 món (mẫu ngẫu nhiên từ 21 tỉnh rủi ro cao), 0 sai rõ ràng, **0 món đối chiếu chi tiết**. Ghi đúng mức đó. PM chốt chuyển mitigation sang phát hiện khi vận hành → đã build US-15. Chi tiết `SPOTCHECK-LF.md` | — |

---

## 6. Rủi ro — cập nhật trạng thái

| # | Rủi ro | Trạng thái hôm nay |
|---|---|---|
| R1 | Vượt deadline | 🟢 **Đã hạ** — vượt phạm vi cam kết (63 > 8 tỉnh), còn 3 ngày cho việc còn lại |
| R2 | Hallucination nội dung ẩm thực | 🟡 **Còn mở nhưng đã có kênh xử lý** — đo được: **63% món không có nguồn Wikipedia**, 21/63 tỉnh cả 3 món đều không. Đã kiểm 213 link (3 link 404, đã thay). PM spot-check mức đọc lướt. Mitigation chuyển sang US-15 (kênh báo nội dung sai) — **nhưng chưa khép kín**: chưa có thông báo tự động, và site mới có ít người dùng |
| R3 | Rubber-stamping | 🟢 **Đã kiểm soát tốt** — 8/8 cổng hiểu có phản biện, 2 lần FAIL thật |
| R4 | Ảnh Wikimedia thưa | 🟡 **Đã xảy ra đúng dự đoán, có fallback** — 122/197 món dùng gradient |
| R5 | Ảnh lỗi runtime | 🟡 **Tái xuất trên production** (502 khi cache Vercel lạnh) nhưng fallback hoạt động đúng — người xem thấy gradient, không thấy ảnh vỡ |
| R6 | Chưa có MapTiler key | 🟢 **Đóng** — key đã có, bản đồ dùng style thật |
| R7 | Rò rỉ secret | 🟢 **Đã kiểm trước khi push public** — `.env.local` không bị track, không commit nào chạm tới, quét lịch sử chỉ thấy tên biến |
| R8 | Wishlist mất dữ liệu | ⚪ Không áp dụng (phase-2) |
| R10 | Spam review (không có pre-moderation) | 🟡 **Đã áp dụng trở lại** — rào chắn tối thiểu đã code (giới hạn độ dài ở cả client lẫn DB, chặn gửi lặp 30s). Chấp nhận công khai |
| R11 | Thiếu RLS trên Supabase | 🟢 **ĐÃ ĐÓNG bằng bằng chứng** — tự tấn công DB: ghi hợp lệ 201, còn `status=hidden`/`rating=99`/comment 600 ký tự/DELETE/UPDATE đều bị chặn 401 |
| R12 | LCP không đạt do MapLibre nặng | 🟡 **Chấp nhận công khai** — bản đồ là tính năng lõi, không bỏ để lấy điểm đẹp |
| R13 | **[MỚI] Checklist QA không phủ tính đúng đắn địa lý của marker** | 🔴 Phát hiện qua 4.1 — vẫn **nên bổ sung 1 dòng vào SIT-UAT** trước viva |

---

## 7. Việc tiếp theo (3 ngày còn lại)

| Ưu tiên | Việc | Ước lượng |
|---|---|---|
| ✅ Xong | ~~PM điền giờ thật vào `TELEMETRY-LF.md`~~ — đã xong, Nén ≈ 27–37× | — |
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
| SPEC | `SPEC-LF.md` | ✅ US-01/02 sửa cho khớp bản đồ mới; thêm US-12/13/14 |
| MODULEMAP | `MODULEMAP-LF.md` | ✅ |
| ARCH | `ARCH-LF.md` | ✅ |
| WBS | `WBS-LF.md` | ✅ |
| EST | `EST-LF.md` | ✅ |
| RISK | `RISK-LF.md` | ✅ 13 rủi ro, R11 đã đóng có bằng chứng |
| DELEGATION-MAP | `DELEGATION-MAP-LF.md` | ✅ |
| DOR | `DOR-LF.md` | ✅ |
| DEVBOOK | `DEVBOOK.md` | ✅ 19 sự cố phân loại / 23 mục (tự thừa nhận còn ghi thiếu) |
| SIT/UAT | `SIT-UAT-LF.md` | ⚠️ cần sửa US-02; đã thêm §US-14 kèm cổng RLS |
| PERFORMANCE | `PERFORMANCE-LF.md` | ✅ |
| TECH-DEBT | `TECH-DEBT-LF.md` | ✅ |
| **RTM** | `RTM-LF.md` | ✅ **mới** |
| **Telemetry** | `TELEMETRY-LF.md` | ✅ **mới** — đã có giờ người thật + Nén |
| **Weekly** | `WEEKLY-LF.md` | ✅ **mới** (file này) |
| Hệ thống chạy được | **Đã deploy công khai** | ✅ 68 route tĩnh + Review/Rating chạy thật trên production |

**Bộ hồ sơ đã đủ.** Việc còn lại là chất lượng, không phải thiếu artefact: spot-check nội dung (R2), sửa test US-02 lỗi thời, và bổ sung test cho Search/Filter.
