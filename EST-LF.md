# [5] Estimation — Local Food

> Input: `WBS-LF.md` (đã đóng Cổng hiểu bước [4]). Đơn vị: **giờ người thật**, không suy từ token.

## Ước lượng 3 điểm (Lạc quan / Khả dĩ / Bi quan) từng task Wave 1

| Task | Giả định đứng sau con số | Lạc quan | Khả dĩ | Bi quan |
|---|---|---|---|---|
| W1-1 Schema `sourceRef` | Chỉ thêm field TS, không đổi logic đọc | 0.5h | 1h | 2h |
| W1-2 Rà nguồn Hà Nội+Huế (8 món) | Có sẵn nội dung, chỉ cần đối chiếu + sửa | 1h | 2h | 4h |
| W1-3 Token Design System | Mở rộng file CSS đã có sẵn khung | 1h | 2h | 4h |
| W1-4 Component gốc (Button/Toolbar/Badge) | 3 component đơn giản, không logic phức tạp | 1h | 2h | 3h |
| W1-5 Map toolbar tuỳ chỉnh | Chưa từng làm loại UI này trong dự án — rủi ro học API MapLibre control tuỳ chỉnh | 1h | 3h | 5h |
| W1-6 Framer Motion thật | **PM sửa (Cổng hiểu bước [5]): 1h lạc quan phi thực tế** — tinh chỉnh "cảm giác wow" (hover-tilt, stagger, transition popup) cần nhiều vòng thử-xem-sửa, không gói gọn 1h dù lib đã cài sẵn | 2h | 4h | 7h |
| W1-7 Trang 404 | Nhỏ, dùng lại component đã có | 0.5h | 1h | 2h |
| W1-8 Fix GAP-01 | Logic `onError` đơn giản trên `next/image` | 0.5h | 1h | 2h |
| W1-9 Cổng hiểu con (PM review) | Thời gian PM tự đánh giá, không phải code | 0.5h | 1h | 2h |
| **W1-10 Data entry 6 tỉnh** | **Mỗi tỉnh: research + viết mô tả/công thức/cách ăn + `sourceRef` + tìm ảnh Wikimedia** — đã có kinh nghiệm từ 2 tỉnh walking skeleton nên biết quy trình, nhưng vẫn phụ thuộc độ sẵn có của ảnh/nguồn cho từng món (đã thấy có tỉnh Wikimedia thưa ảnh) | 2h/tỉnh | 4h/tỉnh | 7h/tỉnh |
| W1-11 QA pass 8 tỉnh | Test thủ công theo checklist AC có sẵn | 1h | 2h | 4h |
| W1-11a A11y audit | Checklist thủ công, không có tool tự động cài sẵn | 1h | 2h | 4h |
| W1-11b Performance check | Chạy Lighthouse có sẵn trong Chrome DevTools | 0.5h | 1h | 3h |
| W1-12 RISK/DELEGATION/DOR/viva docs | Tương tự các artefact đã viết (SCOPE/SPEC/MODULEMAP/ARCH/WBS) | 1h | 2h | 4h |

**Tổng W1-10 (6 tỉnh):** Lạc quan 12h · Khả dĩ 24h · Bi quan 42h.

**Tổng toàn Wave 1** (cộng cột, W1-10 đã gộp, **W1-6 đã sửa theo Cổng hiểu bước [5]**):
- Lạc quan: ~~23h~~ **24h**
- Khả dĩ: ~~47h~~ **48h**
- Bi quan: ~~86h~~ **88h**
- **PERT = (24 + 4×48 + 88) / 6 ≈ 50.7 giờ** (tăng so với 49.5h ban đầu —
  càng củng cố rủi ro vượt mốc, không giảm)

## So với quỹ thời gian thật

Hạn ~2026-09-09 (từ hôm nay 2026-08-26) ≈ 10 ngày làm việc. PM không làm
full-time cho dự án này (còn công việc khác) — giả định thực tế: **~3-4
giờ/ngày** thời gian PM thực sự ngồi phán xử/duyệt/test (không tính giờ AI
code chạy nền, vì việc đó không tốn giờ người). Quỹ thời gian PM thật ≈
30-40 giờ trong 10 ngày.

**49.5 giờ PERT > 30-40 giờ quỹ thời gian PM → ước lượng vượt mốc.** Đây
đúng là tình huống EX-03: phải quay lại cắt scope, không phải cố nhồi nhét.

## 3 task rủi ro ước lượng cao nhất

1. **W1-10 (data entry 6 tỉnh)** — chiếm ~50% tổng effort (24h/47h khả dĩ),
   rủi ro cao nhất vì phụ thuộc nguồn ảnh/tài liệu tham chiếu có sẵn hay
   không cho từng món — không kiểm soát được, đã thấy thực tế Wikimedia
   thưa ảnh cho một số món đặc sản vùng miền.
2. **W1-6 (Framer Motion thật)** — "wow" là tiêu chí chủ quan, dễ lặp lại
   nhiều vòng chỉnh sửa (PM chưa vừa ý → sửa → review lại) mà ước lượng ban
   đầu không tính hết số vòng lặp.
3. **W1-5 (map toolbar tuỳ chỉnh)** — chưa từng làm loại UI này trong dự án,
   rủi ro phải tìm hiểu API MapLibre control tuỳ chỉnh mất thời gian ngoài
   dự kiến.

## Đề xuất cắt scope (cần PM quyết, không tự chốt)

| Phương án | Mô tả | Effort ước tính | Đánh đổi |
|---|---|---|---|
| **A — Giữ nguyên 8 tỉnh** | Không cắt gì, chấp nhận rủi ro trễ hạn hoặc PM phải dành nhiều giờ hơn dự kiến | ~49.5h (khả dĩ) | Rủi ro cao nhất không kịp hạn |
| **B — Giảm còn 5 tỉnh cho bản nộp** | MVP nộp bài: Hà Nội, Huế (đã có) + 3 tỉnh mới (đề xuất: TP.HCM, Khánh Hòa, Cần Thơ — đủ trải Bắc/Trung/Nam, ảnh Wikimedia tốt theo research trước). 3 tỉnh còn lại (Hải Phòng, Quảng Nam, An Giang) là backlog ngay sau nộp bài | ~37.5h (khả dĩ, W1-10 còn 12h thay vì 24h) | An toàn hơn nhiều, vẫn đủ chứng minh kiến trúc mở rộng (đề bài không yêu cầu đủ 8 tỉnh, chỉ yêu cầu chứng minh khả năng mở rộng ra 63) |
| **C — Giữ 8 tỉnh, cắt polish** | Bỏ W1-6 (Framer Motion) hoặc W1-11a (A11y audit) khỏi bản nộp, làm sau | ~41-44h (khả dĩ) | Đánh đổi trực tiếp vào chính yêu cầu "UI wow" — rủi ro, không khuyến khích vì đây là phản hồi PM vừa nhấn mạnh |

**Khuyến nghị của tao: Phương án B.** Lý do: cắt số lượng tỉnh không đụng
tới chất lượng nền tảng/UI (đúng thứ PM vừa yêu cầu phải giữ), và đề bài
gốc chỉ đòi hỏi kiến trúc chứng minh mở rộng được tới 63 tỉnh — không bắt
buộc phải *có sẵn* đủ 63 (hay 8) tỉnh dữ liệu tại thời điểm nộp. Nhưng đây
là quyết định của PM, không phải AI tự chốt.

### Quyết định cuối (Cổng hiểu bước [5], 2026-08-26)

**PM chốt Phương án A — giữ nguyên 8 tỉnh**, chấp nhận rủi ro PERT ~50.7h so
với quỹ ~30-40h. Đây là quyết định có quyền làm (không sai), nhưng để không
biến thành "cắm đầu làm rồi trễ hạn không biết", tao thêm **1 checkpoint bắt
buộc** vào `RISK-LF.md` (bước [6]) làm cơ chế giảm thiểu cho chính rủi ro
này:

> **Checkpoint giữa chừng:** hết ngày thứ 5 (khoảng 2026-08-31), nếu W1-1
> đến W1-9 (toàn bộ nền tảng + Cổng hiểu con "wow") **chưa xong**, tự động
> chuyển sang Phương án B (dừng ở 5 tỉnh: Hà Nội, Huế, TP.HCM, Khánh Hòa,
> Cần Thơ) mà không cần họp bàn lại — quyết định trước, không quyết định
> giữa lúc gấp gáp.

---

## Cập nhật khi PM quay lại (2026-09-03) — còn 6 ngày tới hạn 2026-09-09

Review/Rating (W2-1→W2-6) hoãn sang phase-2 — cắt bớt effort đáng kể so với
lần cảnh báo trước. Việc còn lại tập trung vào lõi bắt buộc: W1-10 (6 tỉnh,
~1 ngày/tỉnh theo ước lượng gốc = 6 ngày công việc thực) + W1-11/11a/11b
(~2h) + W1-12 (~2h). **Sát nút nhưng khả thi nếu làm liên tục, không còn
buffer cho phát sinh mới** — nếu có yêu cầu thêm nữa trong 6 ngày này, gần
như chắc chắn phải cắt số tỉnh (quay lại Phương án B).

## Cập nhật sau yêu cầu mới — Review/Rating + Search + Filter mùa (2026-08-26)

Checkpoint 2026-08-31 (nền tảng W1-1→W1-9) đã đạt **đúng hạn, cùng ngày**
(2026-08-26) — tín hiệu tốt, còn dư thời gian so với dự kiến. Tuy nhiên PM
bổ sung 3 tính năng mới ngoài WBS gốc (`WBS-LF.md` mục "Wave 1 mở rộng"),
cộng thêm ~7.5h effort AI + phụ thuộc PM tự tạo Supabase project (không tính
được giờ AI). Tổng effort dự án hiện đã vượt xa mốc PERT ban đầu (~48h) —
**không còn ý nghĩa giữ nguyên Phương án A (8 tỉnh) làm mặc định "miễn bàn"
nữa**, cần PM theo dõi sát tiến độ thực tế thay vì tin vào ước lượng ban đầu
đã lạc hậu. Không đề xuất cắt gì ngay — ghi nhận rủi ro, checkpoint tiếp
theo (nếu cần) sẽ đặt ra khi các task W2-* triển khai xong.

## 🔒 Cổng hiểu — bước [5] — **ĐÃ ĐÓNG (2026-08-26)**

1. PM giải thích đúng giả định đứng sau W1-10 (4h/tỉnh): kinh nghiệm từ 2
   tỉnh trước + rủi ro nguồn ảnh thưa.
2. PM bác đúng W1-6: 1h lạc quan phi thực tế cho việc tinh chỉnh "wow" —
   đã sửa thành 2h/4h/7h, PERT tăng lên ~50.7h.
3. PM chốt **Phương án A** (giữ 8 tỉnh) — đã thêm checkpoint ngày thứ 5
   (2026-08-31) làm cơ chế giảm thiểu, tự động chuyển Phương án B nếu nền
   tảng chưa xong đúng hạn, tránh quyết định vội lúc gấp.

Cổng đã đóng → bước [6] Risk + Delegation Map được phép bắt đầu.


---

## Ước lượng bổ sung — US-18 "Trưa nay ăn gì" (2026-09-11)

> Input: `WBS-LF.md` Wave 4. Đơn vị: **giờ người thật**.

| Task | Giả định đứng sau con số | Lạc quan | Khả dĩ | Bi quan |
|---|---|---|---|---|
| W4-1 Schema `mealTypes` | Thêm union + zod, đã làm loại việc này ở W1-1 | 0.25h | 0.5h | 1h |
| W4-2 Phân loại 197 món | **Rủi ro cao nhất** — không phải gõ phím mà là phán đoán; món ranh giới (bánh xèo, gỏi, đồ nướng) tốn thời gian gấp bội món rõ ràng | 1.5h | 2h | 4h |
| W4-3 Cổng `check:meal` | Tương tự `check-i18n.mjs` đã có, dùng lại khung | 0.5h | 0.75h | 1.5h |
| W4-4 `lib/recommend.ts` | Hàm thuần, logic lọc không phức tạp | 0.75h | 1h | 2h |
| W4-5 Trang `/goi-y` ×2 ngôn ngữ | Dùng lại `DishCard` đã có (nó vốn đã hiện đủ nguyên liệu/cách làm/cách ăn) ⇒ phần mới chỉ là khung trang + nút đổi món | 1h | 1.5h | 3h |
| W4-6 Seed trên query string | Máy chủ đọc `searchParams`, suy cặp món tất định — **đơn giản hơn** bộ lọc nhiều chiều của bản trước | 0.25h | 0.5h | 1h |
| W4-7 Chuỗi 2 ngôn ngữ + link header | Thuần dữ liệu, khung `ui-strings` đã có | 0.25h | 0.5h | 1h |
| W4-8 Checklist SIT-UAT | Đã viết 16 story loại này | 0.25h | 0.5h | 1h |

**Tổng:** Lạc quan **4,75h** · Khả dĩ **7,25h** · Bi quan **14,5h**
**PERT = (4,75 + 4×7,25 + 14,5) / 6 ≈ 7,7 giờ**

> **Sửa 2026-09-11 sau khi PM đổi yêu cầu:** PERT 8,3h → **7,7h**. Giảm nhẹ vì bỏ bộ lọc
> tương tác và dùng lại được `DishCard` sẵn có. **Phần đắt nhất không đổi:** W4-2 (phân
> loại 197 món) vẫn là 2h khả dĩ và vẫn là rủi ro lớn nhất — đổi bề mặt không làm nhẹ đi
> công việc phán đoán ở tầng dữ liệu.

### Bài học từ EST trước, áp vào đây

Ước lượng Wave 1 **sai hơn 20 lần** vì lập theo mô hình *"người gõ code"* trong khi việc
thật là *"người phán xử, agent gõ"* (`CASE-STUDY-LF.md` §C). Lần này tách rõ hai loại:

| Loại việc | Task | Agent làm hộ được? |
|---|---|---|
| **Gõ code** | W4-1, W4-3, W4-4, W4-5, W4-6, W4-7 | ✅ Gần như toàn bộ ⇒ giờ người ≈ thời gian đọc và duyệt |
| **Phán đoán** | W4-2 (phân loại), W4-9 (PM duyệt mẫu) | ❌ Không — đây là **chi phí thật** và là phần duy nhất khó nén |

→ Dự đoán: PERT 8,3h sẽ **lại cao hơn thực tế** ở phần code, nhưng **W4-2 và W4-9 thì
không nén được**. Ghi trước để lần sau đối chiếu xem dự đoán này đúng hay sai.

### Không vượt mốc ⇒ không cần bước cắt scope

8,3h nằm trong quỹ thời gian còn lại, nên **không kích hoạt** bước trade-off scope–time
như lần Wave 1 (49,5h > 30–40h). Ghi rõ để không ai tưởng bước đó bị bỏ quên.
