# [7] Definition of Ready — Local Food

> Input: toàn bộ artefact [1]-[6] (đã đóng Cổng hiểu). Đây là cổng cuối trước khi bước [8] BUILD được phép chạy.

## Ghi nhận thật thà trước khi vào checklist

Lát cắt dọc **đầu tiên** (bản đồ + Hà Nội + Huế, chức năng cơ bản) đã bị
build **trước khi** có artefact [0]-[7] — đúng lỗi quy trình đã ghi ở
`DEVBOOK.md` đầu phiên. DoR này **không áp dụng ngược cho lát cắt đó**
(chuyện đã rồi), mà áp dụng cho **lát cắt dọc thứ hai**: nâng cấp Design
System (Layer 0) trên nền walking skeleton đã có, đúng thứ tự W1-1→W1-9
trong `WBS-LF.md`, trước khi nhân rộng ra 6 tỉnh còn lại.

## Checklist DoR cho lát cắt "Nâng cấp Design System" (W1-1 → W1-9)

| Mục | PASS/FAIL | Ghi chú |
|---|---|---|
| Spec rõ chưa? | ✅ PASS | `SPEC-LF.md` có NFR "UI wow" cụ thể hoá, GAP-01/GAP-02 đã ghi, US-08 đã chỉ rõ cần custom 404. |
| Data model có chưa? | ✅ PASS (thiết kế), ❌ chưa code | `ARCH-LF.md` mục 3 + "chưa chốt #1" đã định nghĩa field `sourceRef` cần thêm — **đây chính là task W1-1**, DoR chỉ cần thiết kế sẵn sàng, không cần đã code. |
| API contract có chưa? | ✅ PASS (N/A có lý do) | Không có backend (`ARCH-LF.md` mục 4) — miễn trừ hợp lệ, không phải bỏ sót. |
| AC đo được không? | ⚠️ PASS có điều kiện | AC kỹ thuật (404, GAP-01) đo được rõ ràng. AC "wow" (W1-9) mang tính chủ quan — chấp nhận vì đã có quy trình đánh giá rõ (PM tự nhìn, tự quyết PASS/FAIL), không phải không đo được gì cả. |
| Mức Leash đã gán chưa? | ✅ PASS | `DELEGATION-MAP-LF.md` đã gán đủ cho từng loại việc trong Wave 1. |
| Cổng kiểm là gì? | ✅ PASS | W1-9 (Cổng hiểu con "wow") trước khi nhân rộng; W1-11/11a/11b (QA/A11y/Performance) sau khi nhân rộng — PM tự test, không tin AI tự báo PASS (đã chốt ở Cổng hiểu bước [6]). |
| Ràng buộc thời gian rõ chưa? | ✅ PASS | Checkpoint 2026-08-31 (`EST-LF.md`) — nếu trễ, tự động cắt sang Phương án B. |
| **MapTiler key thật đã có chưa?** | ❌ **FAIL — chưa có** | PM chưa đăng ký. **Không chặn** phần lớn W1-1→W1-9 (Design System, schema, 404, GAP-01 không cần map thật), nhưng **có chặn một phần của W1-5** (test toolbar bản đồ với style thật) — chấp nhận build W1-5 với style demo trước, verify lại với style thật khi PM có key, không dừng cả lát cắt vì 1 dependency phụ. |

**Kết luận DoR:** 7/8 mục PASS, 1 mục FAIL (MapTiler key) nhưng có phạm vi
ảnh hưởng giới hạn (chỉ 1 phần của 1 task/9 task) và có phương án đi tiếp mà
không cần chờ — **đủ điều kiện build**, không phải "giả vờ đủ điều kiện".

---

## 🔒 Cổng hiểu — bước [7]

Trước khi tao bắt đầu **bước [8] BUILD** (code thật), mày cần:

1. **Nói lại lát cắt dọc lần này đi xuyên những tầng nào** — từ móng (schema
   `sourceRef`, Design System token) → component gốc → bề mặt (toolbar bản
   đồ, dish card, 404) — theo cách hiểu của mày.
2. **Xác nhận mục FAIL (MapTiler key) có chấp nhận được không** — mày có
   đồng ý cách xử lý "build trước, verify sau khi có key" hay muốn tao dừng
   chờ mày đăng ký key trước?

Chưa qua cổng này thì bước [8] BUILD (code) chưa được phép chạy — kể cả khi
đã có sẵn dev server đang chạy nền.
