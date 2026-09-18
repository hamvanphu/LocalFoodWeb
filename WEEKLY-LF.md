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

**Điều cần PM biết ngay:** RTM ban đầu phát hiện 1 test lỗi thời + 2 tính năng chưa
kiểm chứng. **Cả hai đã xử lý xong** — và quá trình xử lý còn lộ thêm: thực ra có **3**
test lỗi thời (không phải 1), và việc viết test cho Search/Filter **tìm ra 3 lỗi thật**
mà build xanh + audit sạch đều không thấy. Chi tiết mục 4.

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
| QA (SIT/UAT) | 8 story | ✅ **8/8 đáng tin** + thêm US-01b, US-12, US-13, US-14, US-15 | Test lỗi thời đã viết lại; GAP-T2 đã đóng |
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
| ~~Q1~~ | ~~Xử lý GAP-T2~~ | ✅ **XONG 2026-09-07** — chọn phương án (a). Viết test cho US-12/US-13, và **việc viết test tìm ra 3 lỗi thật** (search thiếu trạng thái rỗng; chip lọc phân biệt chỉ bằng màu; chip thiếu `aria-pressed`) — 2 lỗi sau **axe-core không bắt được**. Đã sửa hết | — |
| ~~Q2~~ | ~~Test lại US-02~~ | ✅ **XONG 2026-09-06** — phát hiện **cả US-01 và US-03 cũng lỗi thời**, không chỉ US-02. Viết lại cả 3 + thêm US-01b (kiểm địa lý) + cổng `pnpm check:geo`. **PM vẫn cần tự test lại** | PM test |
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
| ✅ Xong | ~~Sửa checklist US-02 (Q2)~~ + ~~test Search/Filter (Q1)~~ — đã xong, tìm ra 4 lỗi thật | — |
| 🔴 Cao | **PM tự test lại** theo checklist mới: US-01, US-01b, US-02, US-03, US-12, US-13 | 20 phút |
| 🔴 Cao | Quay video theo `VIDEO-SCRIPT-LF.md` | 30-40 phút |
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
| SIT/UAT | `SIT-UAT-LF.md` | ✅ US-01/02/03 viết lại, thêm US-01b/12/13/14/15 |
| PERFORMANCE | `PERFORMANCE-LF.md` | ✅ |
| TECH-DEBT | `TECH-DEBT-LF.md` | ✅ |
| **RTM** | `RTM-LF.md` | ✅ **mới** |
| **Telemetry** | `TELEMETRY-LF.md` | ✅ **mới** — đã có giờ người thật + Nén |
| **Weekly** | `WEEKLY-LF.md` | ✅ **mới** (file này) |
| Hệ thống chạy được | **Đã deploy công khai** | ✅ 68 route tĩnh + Review/Rating chạy thật trên production |

**Bộ hồ sơ đã đủ.** Việc còn lại là chất lượng, không phải thiếu artefact: spot-check nội dung (R2), sửa test US-02 lỗi thời, và bổ sung test cho Search/Filter.

---
---

# Báo cáo kỳ 2 — 2026-09-07 → 2026-09-18

**Kỳ báo cáo:** 12 ngày, 5 phiên · **Người lập:** PM (Hàm Văn Phú)
**Trạng thái chung:** 🟢 Đã phát hành **v1.1** và **v1.2**, site chạy công khai

## 1. Tóm tắt cho người bận

Kỳ trước khép lại ở v1.0 với 63 tỉnh và tính năng đánh giá. Kỳ này thêm **hai tính năng
lớn** và một đợt siết chất lượng hồ sơ:

| | |
|---|---|
| **v1.1** (09/09) | Song ngữ Việt–Anh đủ 63 tỉnh (~45.000 từ), chủ quyền biển đảo trên bản đồ bản tiếng Anh |
| **v1.2** (12/09) | "Trưa nay ăn gì" — bấm một bubble ra 2 món hợp bữa trưa kèm công thức |
| Hồ sơ | Tự đánh giá T1–T10 theo rubric bootcamp; bài rà soát requirement tìm ra **11 vấn đề thật** |

**Điều cần PM biết ngay:** **c3 Freshness tụt xuống 84,4%** — dưới ngưỡng 85%. Đã dọn xong
5 file lệch trong chính phiên 18/09 này. Và việc dọn đó **kéo theo phát hiện 3 lỗi
accessibility thật** đang nằm trên production.

## 2. Tiến độ

| Hạng mục | Kỳ trước | **Kỳ này** |
|---|---|---|
| Commit | 53 | **83** |
| Phiên | 5 | **10** |
| Route sinh tĩnh | 69 | **136** |
| Cổng kiểm chạy bằng lệnh | 1 | **3** |
| Artefact | 25 · 43.370 từ | **34 · 73.387 từ** |
| Giờ người | ~17,5h | **27–38h** |
| Đánh giá bootcamp | *(chưa tự chấm)* | **9/10 assignment ≥2** |

## 3. 🔴 Phát hiện mới trong kỳ — cần xử lý

### 3.1 Ba lỗi accessibility trên production *(đã sửa 18/09)*

Đo Lighthouse trên `/goi-y` ra **a11y 95, không phải 100**. Cả ba lỗi nằm trong `DishCard`
— tức ảnh hưởng **mọi trang có món ăn**: contrast dưới ngưỡng AA, thứ tự tiêu đề nhảy cóc,
tên truy cập không khớp chữ nhìn thấy.

**Đáng chú ý:** `axe-core` từng báo **0 vi phạm** trên chính những component này. Lighthouse
chạy trên trang đã render thì bắt được. Đã sửa, đo lại **a11y = 100**, và Performance nhích
**55 → 83**. Chi tiết `PERFORMANCE-LF.md`.

### 3.2 Chính báo cáo build tự lỗi thời, và tự nói dối về mình

`reports/build-report.html` đứng nguyên ở 07/09 — PM phát hiện khi đối chiếu với v1.2.
Tệ hơn: chip lọc KPI là **số cứng** trong HTML nên khi c3 tụt, báo cáo vẫn ghi *"Đạt · 7 /
Không đạt · 0"*. Đã cho chip **tự tính từ dữ liệu**.

### 3.3 Năm sự cố chưa vào DEVBOOK

Vành gradient tràn thành dải chéo, bubble đè nội dung, ghi HTML vào file `.md`, telemetry
tự lỗi thời, README khai sai nhược điểm. Đã bổ sung; phân loại lại **19 → 36 sự cố**.

## 4. ⬜ Quyết định cần PM đưa ra

| # | Việc | Ước lượng |
|---|---|---|
| **Q6** | **T8 (Meeting Summary) = 0** — assignment duy nhất dưới ngưỡng. Cần một **cuộc họp thật** rồi AI tóm tắt thành action item + owner + hạn → **10/10** | ~30 phút |
| **Q7** | **R15 — 45.192 từ bản dịch chưa ai đọc.** Rủi ro mở lớn nhất. Đề xuất spot-check theo nhóm tỉnh nhiều thuật ngữ địa phương | ~1h |
| **Q8** | Đặt giới hạn domain cho MapTiler key | 5 phút |
| **Q9** | Quay video demo — kịch bản đã có, đã bổ sung cảnh `/goi-y` | 30–40 phút |

## 5. Rủi ro — cập nhật

| # | Trạng thái |
|---|---|
| **R15** *(mới)* | 🔴 Bản dịch tiếng Anh chưa ai đọc — cổng chỉ kiểm cấu trúc, không kiểm nghĩa |
| **R16** *(mới)* | 🔴 Phân loại món là phán đoán — món gán nhầm **biến mất mà không ai thấy** |
| **R17** *(mới)* | 🟡 Tính năng khẳng định "món hợp văn phòng" mà không nguồn nào kiểm chứng. Rào: cấm tuyệt đối nội dung dinh dưỡng/sức khoẻ |
| R12 (LCP) | 🟡 Không đổi — nhưng `/goi-y` đạt 83/100, chứng minh khoảng cách là do MapLibre |
| R2, R10 | 🟡 Không đổi |
| R11, R13, R14 | 🟢 Vẫn đóng |

## 6. Việc tiếp theo

| Ưu tiên | Việc |
|---|---|
| 🔴 Cao | T8 (cuộc họp thật) → 10/10 · Spot-check bản dịch (R15) |
| 🟡 Vừa | Quay video · Giới hạn domain MapTiler · Chọn kênh thông báo báo lỗi nội dung |
| 🟢 Thấp | Bổ sung món "ăn no được" cho Hải Dương, Thanh Hóa, Sơn La — ba tỉnh hiện không bao giờ xuất hiện trong gợi ý |
