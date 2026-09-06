# Case Study — Local Food

> Deliverable tốt nghiệp: *"Case Study — Before/after có số liệu từ pilot"*
> (`PM-AI-Bootcamp-Program-v1.0.md` §9.1).
>
> Lập ngày **2026-09-06**. Sản phẩm: https://local-food-hamvanphus-projects.vercel.app

---

## Đề bài và kết quả trong một bảng

| | Cam kết ban đầu | Đã giao |
|---|---|---|
| Phạm vi | 8 tỉnh (Phương án A, chốt ở bước [5]) | **63/63 tỉnh** — gấp **7,9×** |
| Món ăn | ~32 | **197** |
| Thời gian | PERT ước lượng **50,7h** | **~17,5h** giờ người thật |
| Trạng thái | Chạy local | **Deploy công khai**, có backend, có kênh phản hồi người đọc |

Nhưng con số đẹp không phải phần đáng nói nhất của case study này. Ba phần dưới đây
xếp theo **độ tin cậy giảm dần** — phần đáng tin nhất để trước.

---

## A. Before/after về QUY TRÌNH — đo được, không phải giả định

Đây là phần mạnh nhất, vì cả "before" và "after" **đều xảy ra thật trong cùng dự án**,
cách nhau vài ngày, cùng một người, cùng một AI.

### A1. Vòng lặp đầu tiên: không có quy trình

**Ngày 2026-08-25.** AI nhận đề rồi **nhảy thẳng vào code** — bỏ qua toàn bộ bước
[0]→[7] của Capstone Playbook. Kết quả sau 7 phút và 3 commit: có walking skeleton
chạy được, nhìn thì "có vẻ ổn".

PM bắt ngay: *"Mày làm hơi nhanh rồi. Tao nhớ là có cổng đóng các thứ, tao cần trả lời
xong mới qua bước tiếp theo mà. Như vậy tao sẽ bị fail bài tập này đấy."*

**Chi phí thật:** phải quay lại viết lại từ bước [0], làm đủ 8 artefact và 8 Cổng hiểu.

### A2. Vòng lặp sau: có Cổng hiểu

**Từ 2026-08-26.** Mỗi bước đóng bằng một Cổng hiểu thật.

| Bước | PM bắt được gì tại cổng |
|---|---|
| [0] SCOPE | Sửa giả định #4 (nội dung AI-only), chốt deadline |
| [1] SPEC | Bắt gap wishlist localStorage |
| [2] MODULEMAP | **Bác đúng** việc gộp GAP-01 vào Layer 0 |
| [3] ARCH | **Bắt `Province.summary` cũng cần `sourceRef`** — AI đã sót |
| [4] WBS | **Bắt 2 việc sót**: A11y audit + Lighthouse |
| [5] EST | **Sửa ước lượng W1-6** (1h lạc quan phi thực tế) → PERT 49,5h → 50,7h |
| [6] RISK/DELEGATION | Chỉ ra bảng Delegation **thiếu hẳn dòng QA** |
| [7] DOR | Đồng ý build trước **kèm điều kiện** MapTiler key phải có trước W1-11 |

**8/8 cổng đều để lại dấu vết phản biện. 5 lần bắt được lỗi/thiếu sót ngay tại cổng.**

> **Số liệu chống rubber-stamping:** Playbook nói *"một PM có 30 lần sửa AI ≠ một PM có
> 0 lần sửa (kẻ thứ hai đang rubber-stamp)"*. Dự án này: **19 sự cố** ghi trong DEVBOOK
> + **2 lần đánh FAIL** buộc làm lại + **8/8 cổng có phản biện**.

### A3. Lặp lại đúng bài học đó ở quy mô nhỏ hơn — và đo được kết quả

Giữa dự án có một "before/after" thứ hai, tự nhiên hơn:

| | **Before** — Search + Filter (W2-7, W2-8) | **After** — Review/Rating + Báo lỗi (US-14, US-15) |
|---|---|---|
| Xuất phát | Yêu cầu miệng → thẳng vào WBS → build luôn | Yêu cầu miệng → **viết story + AC trước** → mới build |
| User story | ❌ Không có | ✅ Có, kèm cả **luồng lỗi** |
| Test case | ❌ Không có (vì không có AC để kiểm) | ✅ Có, gồm cổng RLS bắt buộc |
| Kết quả trong RTM | ⚠️ **GAP-T2** — đang chạy trên site mà **chưa từng được kiểm chứng** | ✅ **Hai dòng duy nhất trong RTM không mang cảnh báo nào** |
| Bug bắt được lúc làm | — | **2 bug im lặng**: `.select().single()` báo lỗi dù ghi thành công; cooldown chặn nhầm giữa 2 hành động khác nhau |

**Đây là bằng chứng bài học được áp dụng thật**, không phải nhận lỗi cho có: RTM chỉ ra
sai lầm → tính năng tiếp theo làm ngược lại → kết quả khác hẳn, đo được ngay trong
cùng một bảng truy vết.

---

## B. Before/after về NĂNG SUẤT NỘI DUNG — đo được, cùng một loại việc

Cùng một công việc (research + viết nội dung có kiểm nguồn cho từng tỉnh), làm hai lần
với hai cách tổ chức khác nhau:

| | **Đợt 1** — 6 tỉnh MVP (2026-09-03) | **Đợt 2** — 55 tỉnh (2026-09-06) |
|---|---|---|
| Cách làm | 6 agent, mỗi agent 1 tỉnh | **7 agent, mỗi agent 6-10 tỉnh**, chạy nền song song |
| Sản lượng | 814 dòng JSON / 10 file | **4.563 dòng JSON / 55 file** |
| Tỉnh/lô | 1 | 6-10 |
| Kết quả | 8/8 tỉnh MVP xong | 63/63 tỉnh xong trong **một buổi sáng** |

**Điều học được không phải "AI nhanh"**, mà là: chi phí lớn nhất nằm ở **viết đề bài
cho agent**, không phải ở việc agent chạy. Khi đã có đề bài chuẩn (schema + quy tắc
nguồn + quy tắc ảnh), nhân rộng từ 1 lên 10 tỉnh mỗi agent gần như **miễn phí**.

**Cái giá của tốc độ, ghi thẳng:** đợt 2 làm nhanh hơn nhưng **chất lượng nguồn thấp
hơn** — 63% món không có nguồn Wikipedia, tập trung ở các tỉnh miền núi/Tây Nguyên nơi
tư liệu vốn thưa. Nhanh không miễn phí.

---

## C. Before/after về TỐC ĐỘ TỔNG THỂ — phần yếu nhất, đọc kèm cảnh báo

| | Giờ |
|---|---|
| **Before** — tự làm một mình, không AI *(PM ước tính)* | **600h** |
| **After** — thực tế với AI *(PM tự khai theo từng phiên)* | **~17,5h** |
| **Nén** | **≈ 27–37×** (giữa khoảng ~32×) |

### Vì sao đây là phần yếu nhất

1. **600h là ước lượng phản-thực.** Không ai thực sự làm lại dự án này bằng tay để đo.
   Đây là điểm yếu cố hữu, và đúng ra phải vậy.
2. **Nén không đo chất lượng.** 600h giả định làm ra sản phẩm *tương đương* — nhưng
   `RTM-LF.md` cho thấy chưa tương đương: 2 tính năng chưa có test, 1 test lỗi thời,
   LCP không đạt NFR.
3. **Không trừ chi phí sửa 19 sự cố AI.** Chúng nằm *trong* 17,5h, nhưng nếu AI ít sai
   hơn thì con số còn thấp nữa. Nén đo **kết quả ròng**, không đo mức trơn tru.
4. **Giờ thật là PM tự khai.** Git chỉ đoán được khoảng 5h44–16h33, và giờ thật
   **vượt cả cận trên** — xác nhận mọi proxy từ commit đều đếm thiếu. Nếu lấy proxy làm
   mẫu số thì Nén đã bị **thổi phồng 1,5–4 lần**.

> **Cách phát biểu an toàn:** *"Nén khoảng 27–37 lần về **thời gian tạo ra sản phẩm**,
> với baseline là ước tính của tôi chứ không phải số đo, và chưa chiết khấu phần chất
> lượng còn thiếu đã ghi rõ trong RTM."*

---

## D. Chất lượng: cái gì đạt, cái gì không

Đọc kèm phần C — vì tốc độ mà không kèm chất lượng thì vô nghĩa.

| Cổng | Kết quả |
|---|---|
| Build + typecheck | ✅ PASS, 0 lỗi TS |
| Zod validate 63 file dữ liệu | ✅ PASS |
| Accessibility (axe-core, 4 trang) | ✅ **0 vi phạm** sau khi sửa 4 lỗi contrast + 1 lỗi focus |
| RLS bảo mật review | ✅ PASS — **kiểm bằng cách tự tấn công DB** |
| SIT/UAT 8 story MVP | ⚠️ 8/8 PASS nhưng **1 test lỗi thời** → thực chất 7 đáng tin |
| Spot-check nội dung (R2) | ⚠️ 15/197 **đọc lướt**, 0 món đối chiếu chi tiết |
| Performance LCP < 2,5s | ❌ **KHÔNG ĐẠT** — R12, chấp nhận công khai |

**Hai cổng fail-open đều thuộc về nội dung/trải nghiệm, không phải kỹ thuật** — đúng
chỗ khó tự động hoá nhất. Chi tiết ở `DEVBOOK.md` Phần B2.

---

## E. Ba điều rút ra, có bằng chứng kèm theo

### 1. Cổng chất lượng tự động bắt được ít hơn ta tưởng

`OPERATING-LOG-LF.md` ghi 11 sự cố phát hiện **khi dùng thật**. Trong đó **4 đã qua
build PASS**, và **2 đã qua QA có checklist được đánh PASS**.

Ví dụ nặng nhất: marker Khánh Hòa nằm giữa quần đảo Trường Sa **suốt 12 ngày**, lọt qua
zod + build + một vòng QA đầy đủ. Toạ độ hoàn toàn hợp lệ về mặt dữ liệu — chỉ sai về
mặt đời thực. Không schema nào bắt được.

### 2. Chi phí thật nằm ở phán xử, không nằm ở gõ code

19 sự cố AI đều tốn giờ **người** để phát hiện và quyết định. Loại đắt nhất không phải
lỗi cú pháp (build tự bắt) mà là:

- **Lỗi thiết kế** — bản đồ 2 tầng zoom *chạy đúng như đặc tả*, nhưng đặc tả sai: nó
  giấu mất 55/63 tỉnh, vì ở zoom ≥7 khung nhìn chỉ còn vài tỉnh.
- **Lỗi nội dung** — bánh cuốn Thanh Trì mô tả sai, chỉ người biết món mới thấy.
- **Lỗi văn hoá** — giọng "mày" lọt vào giao diện người dùng.

### 3. Trung thực trong hồ sơ rẻ hơn phải chữa cháy ở viva

Nhiều chỗ trong hồ sơ này tự khai điểm yếu: RTM tự chỉ ra 3 lỗ hổng truy vết của chính
nó; telemetry tự liệt kê 3 số dễ bị hiểu sai nhất; spot-check ghi *"đọc lướt"* thay vì
*"đã kiểm chứng"*; footer sửa lại câu nói quá về việc đối chiếu nguồn.

Cái giá phải trả là hồ sơ **trông kém hoàn hảo hơn**. Đổi lại, mọi câu hỏi xoáy ở viva
đều đã có sẵn câu trả lời đúng sự thật — thay vì phải ứng biến khi bị bắt tại chỗ.

---

## Ghi chú về trọng số

Tài liệu chương trình có **hai bảng trọng số khác nhau** cho track PM:

- **§9.1** (bảng chính): Case Study = **15%**, không có dòng "WBS + Estimation".
- **§9.1 bảng theo track**: Case study = **5%**, nhưng thêm "Vật phẩm nghề chính:
  WBS + Estimation = 15%" — dự án đã có `WBS-LF.md` và `EST-LF.md`.

Chưa rõ bảng nào áp dụng. **Dự án chuẩn bị đủ cho cả hai** — có Case Study, và cũng có
WBS + Estimation đầy đủ kèm PERT. Nên hỏi Coach để biết chấm theo bảng nào.
