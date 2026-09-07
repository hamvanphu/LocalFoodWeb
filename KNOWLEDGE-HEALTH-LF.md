# Knowledge Health KPI — Local Food

> Yêu cầu từ quản lý (2026-09-04): *"Tạo Interactive HTML report về quá trình làm dự án
> … Tạo các KPI theo ảnh và add luôn vào report"*. Đo ngày **2026-09-07**.
>
> **Đây KHÔNG trùng với `TELEMETRY-LF.md`.** Telemetry đo *quá trình làm việc* (giờ,
> token, sự cố). 7 KPI này đo *sức khoẻ kho kiến thức* — AI chỉ tốt bằng kho tài liệu
> nó đọc được.

| KPI | Kết quả | Target | |
|---|---|---|---|
| c1 Traceability Coverage | **91,7%** | ≥ 80% | ✅ |
| c2 Change Coupling | **100%** | ≥ 70% | ✅ |
| c3 Freshness | **87%** | ≥ 85% | ✅ *(đã đạt sau khi đo lại hiệu năng)* |
| c4 Orphan Rate | **7,9%** | ≤ 15% | ✅ |
| c5 Review Evidence | **92%** | ≥ 90% | ✅ |
| c6 Decision Coverage | **100%** | ≥ 75% | ✅ |
| c7 Retrieval Quality | **100%** | ≥ 70% | ✅ |

**Nơi xem:** panel trên `/telemetry` (dashboard đang chạy) + Interactive HTML report.

---

## c3 Freshness — chỉ số duy nhất không đạt, và nó đáng giá nhất

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
