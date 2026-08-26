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
| W1-6 Framer Motion thật | Đã cài sẵn lib nhưng chưa dùng thật lần nào — rủi ro tinh chỉnh "cảm giác wow" mất nhiều vòng lặp | 1h | 3h | 5h |
| W1-7 Trang 404 | Nhỏ, dùng lại component đã có | 0.5h | 1h | 2h |
| W1-8 Fix GAP-01 | Logic `onError` đơn giản trên `next/image` | 0.5h | 1h | 2h |
| W1-9 Cổng hiểu con (PM review) | Thời gian PM tự đánh giá, không phải code | 0.5h | 1h | 2h |
| **W1-10 Data entry 6 tỉnh** | **Mỗi tỉnh: research + viết mô tả/công thức/cách ăn + `sourceRef` + tìm ảnh Wikimedia** — đã có kinh nghiệm từ 2 tỉnh walking skeleton nên biết quy trình, nhưng vẫn phụ thuộc độ sẵn có của ảnh/nguồn cho từng món (đã thấy có tỉnh Wikimedia thưa ảnh) | 2h/tỉnh | 4h/tỉnh | 7h/tỉnh |
| W1-11 QA pass 8 tỉnh | Test thủ công theo checklist AC có sẵn | 1h | 2h | 4h |
| W1-11a A11y audit | Checklist thủ công, không có tool tự động cài sẵn | 1h | 2h | 4h |
| W1-11b Performance check | Chạy Lighthouse có sẵn trong Chrome DevTools | 0.5h | 1h | 3h |
| W1-12 RISK/DELEGATION/DOR/viva docs | Tương tự các artefact đã viết (SCOPE/SPEC/MODULEMAP/ARCH/WBS) | 1h | 2h | 4h |

**Tổng W1-10 (6 tỉnh):** Lạc quan 12h · Khả dĩ 24h · Bi quan 42h.

**Tổng toàn Wave 1** (cộng cột, W1-10 đã gộp):
- Lạc quan: **23h**
- Khả dĩ: **47h**
- Bi quan: **86h**
- **PERT = (Lạc quan + 4×Khả dĩ + Bi quan) / 6 ≈ (23 + 188 + 86) / 6 ≈ 49.5 giờ**

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

---

## 🔒 Cổng hiểu — bước [5]

Trước khi tao viết `RISK-LF.md` + `DELEGATION-MAP-LF.md` (bước [6]), mày
cần:

1. **Chỉ 1 estimate bất kỳ, nói giả định nào đứng sau con số đó.**
2. **Bác ≥1 con số tao đưa ra mà mày thấy vô căn cứ**, buộc tao nêu lại
   khoảng lạc quan/khả dĩ/bi quan cho rõ hơn (nếu mày thấy tất cả đều hợp lý
   thì cũng phải nói rõ vì sao, không chỉ "ok").
3. **Chốt phương án cắt scope A/B/C (hoặc đề xuất phương án khác của
   mày)** — đây là quyết định bắt buộc phải có trước khi qua bước [6], vì
   `RISK-LF.md` cần biết đang risk-manage cho scope nào.

Chưa qua cổng này thì bước [6] Risk + Delegation Map chưa bắt đầu.
