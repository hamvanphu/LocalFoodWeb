# Local Food v1.0 — Trạng thái bản phát hành

**Ngày:** 2026-09-07 · **Sản phẩm:** https://local-food-hamvanphus-projects.vercel.app
**Mã nguồn:** https://github.com/hamvanphu/LocalFoodWeb

---

## Đã giao

| Hạng mục | Cam kết ban đầu | Thực tế |
|---|---|---|
| Tỉnh thành | 8 (Phương án A, bước [5]) | **63/63** — gấp 7,9× |
| Món ăn | ~32 | **197**, 222 nguồn tham chiếu, **0 món thiếu nguồn** |
| Thời gian | PERT 50,7h | **~17,5h** giờ người thật |
| Triển khai | Chạy local | **Deploy công khai**, tự động deploy mỗi lần push |
| Backend | Không có (D1) | **Có** — Supabase cho đánh giá & báo lỗi (D3), RLS đã kiểm chứng |

**Quy mô:** 3.753 dòng code · 5.717 dòng dữ liệu · 87 trang tài liệu (25 artefact,
43.370 từ) · 29 component · 69 route sinh tĩnh · 53 commit.

## Tính năng

- Bản đồ tương tác **63 tỉnh hiện đồng thời**, marker là ảnh món ăn thật, phân cấp bằng
  kích thước theo zoom
- 63 trang tỉnh sinh tĩnh: mô tả, nguyên liệu, cách làm, cách ăn, nguồn tham chiếu
- Tìm kiếm không dấu, deep-link mở đúng món
- Lọc theo mùa / lễ hội
- **Đánh giá & chấm sao** (US-14) + **báo nội dung sai** (US-15), dữ liệu dùng chung
- Dashboard `/telemetry` đo chính quá trình xây dựng

## Cổng chất lượng

| Cổng | Kết quả |
|---|---|
| Build + kiểm kiểu | ✅ PASS, 0 lỗi |
| Zod validate 63 file dữ liệu | ✅ PASS |
| Kiểm địa lý (`pnpm check:geo`) | ✅ 63/63 centroid trong đất liền |
| Accessibility (axe-core) | ✅ 0 vi phạm |
| RLS bảo mật đánh giá | ✅ Kiểm bằng cách tự tấn công DB |
| SIT/UAT story MVP | ✅ 8/8 (test lỗi thời đã viết lại) |
| **Hiệu năng LCP < 2,5s** | ❌ **KHÔNG ĐẠT** — R12, chấp nhận có ý thức |

## Knowledge Health: 6/7 đạt

c1 91,7% · c2 100% · **c3 82,6% (không đạt)** · c4 7,9% · c5 92% · c6 100% · c7 100%

## Hồ sơ đi kèm (25 artefact)

Bước [0]→[10] đầy đủ: `SCOPE` · `SPEC` · `MODULEMAP` · `ARCH` · `WBS` · `EST` · `RISK` ·
`DELEGATION-MAP` · `DOR` · `SIT-UAT` · `PERFORMANCE` · `RTM` · `TELEMETRY` · `WEEKLY`
Bằng chứng bắt buộc: `DEVBOOK` (23 mục, 19 sự cố) · `OPERATING-LOG` (11 mục)
Deliverable: `CASE-STUDY` · `AI-WORKFLOW` · `TRANSFORMATION-PLAN` · `KNOWLEDGE-HEALTH` ·
`SPOTCHECK` · `VIDEO-SCRIPT` · `TECH-DEBT` · `RELEASE-v1.0`
Report: `reports/build-report.html` · `reports/hoi-thoai-pm-ai.html`

---

## Còn tồn — ghi thẳng, không giấu

| # | Việc | Ảnh hưởng |
|---|---|---|
| 1 | **LCP chưa đạt NFR** | Thư viện bản đồ nặng ~1MB. Chấp nhận: bản đồ là tính năng lõi. Số liệu lại đo hồi 8 tỉnh — **cần đo lại với 63 marker** |
| 2 | **Nội dung chưa kiểm hết (R2)** | 63% món không có nguồn Wikipedia. PM đọc lướt 15/197, **0 món đối chiếu chi tiết**. Mitigation là kênh báo lỗi của người đọc — nhưng site còn ít người dùng |
| 3 | **c3 Freshness 82,6%** | `PERFORMANCE-LF.md` lỗi thời (mục 1) |
| 4 | **Cổng a11y chạy tay** | Chưa nối vào build |
| 5 | **Không thông báo khi có báo lỗi nội dung** | PM phải tự chạy SQL mới thấy |
| 6 | **Video demo chưa quay** | Đã có kịch bản `VIDEO-SCRIPT-LF.md` |
| 7 | **PM chưa tự test lại checklist mới** | US-01/01b/02/03/12/13 đã viết lại, AI chạy thử PASS nhưng chưa thay được PM tự kiểm |
| 8 | **Backlog phase-2** | Wishlist (US-09), lọc khẩu vị (US-10), quiz (US-11) |

## Tự định vị

**CASAN Cấp 2 (Augmented).** Không nhận Cấp 3 vì Cấp 3 đòi *chuẩn hoá toàn đội*, mà
quy trình này **mới có đúng một người dùng**. Chi tiết `TRANSFORMATION-PLAN-LF.md`.
