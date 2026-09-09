# Local Food v1.1 — Trạng thái bản phát hành

**Ngày:** 2026-09-09 · **Tag:** `v1.1`

> Cố ý **không ghi mã commit** ở đây: file này nằm trong chính commit được gắn tag, nên
> hash ghi vào sẽ luôn trỏ commit *trước đó* — ghi hash là tự tạo ra một con số sai.
> Tra commit thật bằng `git rev-parse v1.1`.
**Sản phẩm:** https://local-food-hamvanphus-projects.vercel.app
**Mã nguồn:** https://github.com/hamvanphu/LocalFoodWeb

> Bản trước: [`RELEASE-v1.0.md`](RELEASE-v1.0.md) (2026-09-07). File này chỉ nói **phần
> thêm và phần đổi**; những gì v1.0 đã ghi mà không đổi thì không lặp lại.

---

## Thêm gì so với v1.0

| Hạng mục | v1.0 | v1.1 |
|---|---|---|
| Ngôn ngữ | Chỉ tiếng Việt | **Việt + Anh**, 63/63 tỉnh đã dịch |
| Route sinh tĩnh | 69 | **134** (63 VI + 63 EN + 8) |
| Dòng code | 3.753 | **5.145** |
| Dòng dữ liệu | 5.717 | **10.124** |
| Component | 29 | **37** |
| Artefact tài liệu | 25 file · 43.370 từ | **32 file · 62.427 từ** |
| Commit | 53 | **69** |
| Cổng chạy bằng lệnh | 1 (`check:geo`) | **2** (thêm `check:i18n`) |
| Giờ người thật | ~17,5h | **23–32h** |
| Nén | 27–37× | **23–35×** *(cả tử số lẫn mẫu số đều đổi — xem `TELEMETRY-LF.md` 5.3)* |

## Tính năng mới

**Song ngữ Việt–Anh (US-16).** Nhánh `/en` song song, URL thật nên chia sẻ được link đúng
ngôn ngữ. 41.000 từ nguồn → **45.192 từ tiếng Anh**, do 10 agent dịch song song theo
`I18N-GLOSSARY-LF.md`.

Nguyên tắc nội dung do PM chốt — *cái gì đặc trưng thì giữ tiếng Việt*:

> *Bún bò Huế* — "A deep, fiery noodle soup … scented with **sả** (lemongrass) and
> **mắm ruốc** (fermented shrimp/krill paste), served with thick round **bún**
> (rice noodles) — far more forceful than northern **phở**."

**Chủ quyền biển đảo ở bản tiếng Anh.** Đây là phần quan trọng nhất của v1.1: người đọc
tiếng Anh chính là đối tượng mà basemap chỉ cho thấy nhãn *"South China Sea"*. Bản `/en`
hiện **Hoàng Sa Archipelago (Paracel Islands)**, **Trường Sa Archipelago (Spratly
Islands)**, **Biển Đông (East Sea)** — tên riêng Việt Nam là tên chính, tên quốc tế trong
ngoặc, kèm đơn vị hành chính quản lý.

**US-17 — nhãn khẩu vị theo ngôn ngữ.** Trước đây hiện slug tiếng Anh thô (`spicy`,
`noodle-soup`) trên **cả bản tiếng Việt**. Không phải yêu cầu mới mà là **lỗ hổng do bài
rà soát T2 tìm ra**.

## Sửa lỗi

| Lỗi | Vì sao không cổng nào bắt được |
|---|---|
| **Deep-link không mở panel** khi bấm kết quả tìm kiếm sang món khác **cùng tỉnh** | Effect đọc hash với dep `[dishes]`; hash đổi nhưng `dishes` không đổi. Đã chuyển sang `useSyncExternalStore` |
| **`Lightbox` nháy khung "ảnh không tải được"** trước khi hiện ảnh mới | Effect reset chạy **sau** khi trình duyệt vẽ |
| **Chuỗi tiếng Việt sót trên `/en`** ở `Lightbox`, `ImageWithFallback`, `Sheet` | Chỉ hiện khi ảnh lỗi hoặc mở panel — không nằm trên đường đi thông thường |
| **Telemetry tự nó sai**: ghi 43 commit, thật là 69 | Bảng được lập **ngay trong** phiên đang đo, chốt số giữa chừng |
| **Bộ lọc secret của báo cáo để lọt** 1 JWT cắt cụt + email cá nhân | Regex chỉ khớp JWT đủ 3 đoạn; email chưa hề có trong danh sách che |

**Lint: 0 lỗi, 0 cảnh báo** (v1.0 còn 3 lỗi + 2 cảnh báo). Cả 3 lỗi đều là `setState`
trong effect — sửa đúng gốc, không tắt rule, và **một trong ba che một bug người dùng gặp
được**.

## Chất lượng hồ sơ

**Tự đánh giá T1–T10** theo rubric bootcamp (`ASSESSMENT-T1-T10-LF.md`): **9/10 assignment
ở mức ≥2**, đủ điều kiện §7.3. Hai mục bắt buộc **T5 = 4** và **T10 = 4**.

**Bài T2 — AI rà soát requirement** (`REVIEW-REQ-LF.md`): **11 phát hiện**, mỗi cái đối
chiếu code thật kèm file + dòng. PM phân xử, **11/11 đã đóng**.

Phát hiện nặng nhất **P1**: AC của US-01 nói khung nhìn mặc định bao trọn *"đất liền"* —
mâu thuẫn trực tiếp với R14 vốn đòi bao cả Hoàng Sa và Trường Sa. Sản phẩm chạy đúng, mọi
cổng xanh, PM đã test PASS — **chỉ tài liệu yêu cầu là nói ngược lại**. Ai đó "sửa code
cho khớp AC" sẽ thu khung về đất liền và xoá mất phần chủ quyền.

## Cổng chất lượng

| Cổng | Kết quả |
|---|---|
| Build + kiểm kiểu | ✅ PASS, 0 lỗi · 134 trang tĩnh |
| **Lint** | ✅ **0 lỗi, 0 cảnh báo** *(v1.0: 3 lỗi)* |
| Zod validate 63 file dữ liệu | ✅ PASS |
| Kiểm địa lý (`pnpm check:geo`) | ✅ 63/63 centroid trong đất liền |
| **Kiểm bản dịch (`pnpm check:i18n`)** | ✅ **63/63 — cấu trúc hợp lệ** *(không kiểm nghĩa — xem R15)* |
| Accessibility (axe-core) | ✅ 0 vi phạm |
| RLS bảo mật đánh giá | ✅ Kiểm bằng cách tự tấn công DB |
| SIT/UAT | ✅ US-16 PM đã test PASS · 16 story có checklist |
| **Hiệu năng LCP < 2,5s** | ❌ **KHÔNG ĐẠT** (6,20s) — R12, không đổi so với v1.0 |

---

## Còn tồn — ghi thẳng, không giấu

| # | Việc | Trạng thái |
|---|---|---|
| 1 | **🔴 Bản dịch tiếng Anh chưa ai đọc (R15 — MỚI)** | 45.192 từ do 10 agent sinh, chỉ qua cổng kiểm **cấu trúc**. **Không cổng nào kiểm nghĩa.** Đã tìm được **7 bẫy dịch** trong phần được đọc kỹ ⇒ gần như chắc chắn còn bẫy chưa ai thấy. Nặng hơn R2 ở chỗ: người đọc tiếng Anh **không có cách nào tự nghi ngờ** vì họ không đọc được bản gốc |
| 2 | **LCP chưa đạt NFR** (6,20s / 2,5s) | R12 — không đổi. Chấp nhận có ý thức: bản đồ là tính năng lõi |
| 3 | **Nội dung tiếng Việt chưa kiểm hết** (R2) | Không đổi. 63% món không có nguồn Wikipedia; PM đọc lướt 15/197, 0 món đối chiếu chi tiết |
| 4 | **T8 (Meeting Summary) = 0** | Assignment duy nhất dưới ngưỡng. Cần một cuộc họp **thật** (~30 phút). §7.3 cho phép 1 mục dưới ngưỡng nên **không chặn** |
| 5 | **Cổng a11y chạy tay** | Không đổi — chưa nối vào build |
| 6 | **Không thông báo khi có báo lỗi nội dung** | Không đổi. PM phải tự chạy SQL. `ADMIN-GUIDE-LF.md` có sẵn câu SQL + hướng dẫn dựng webhook |
| 7 | **Video demo chưa quay** | Không đổi — kịch bản có sẵn ở `VIDEO-SCRIPT-LF.md` |
| 8 | **PM chưa tự test lại checklist cũ** | US-16 và US-17 mới nhất **đã PASS**. US-01/01b/01c/02/03/12/13 vẫn chờ |
| 9 | **Token là SÀN, không phải tổng** | Transcript có **0 lượt sidechain** ⇒ token của ~24 agent nền không được ghi. Muốn tổng thật phải lấy từ trang usage của tài khoản |
| 10 | **Backlog phase-2** | Wishlist (US-09), lọc khẩu vị (US-10), quiz (US-11) |

### Rủi ro mới trong kỳ

**R15 — chất lượng bản dịch.** Đây là cái giá phải trả cho việc dùng 10 agent song song để
làm 45.000 từ trong một buổi: nhanh, nhưng **kiểm được cấu trúc thì dễ, kiểm được nghĩa
thì không có cổng nào làm hộ**. Cách xử lý đề xuất giống hệt R2: bốc mẫu ngẫu nhiên có
seed cố định từ nhóm rủi ro cao (tỉnh nhiều thuật ngữ địa phương — Tây Bắc, Tây Nguyên,
Tây Nam Bộ), đọc thật, rồi **ghi lại đúng mức đã kiểm** chứ không nâng thành "đã kiểm
chứng". Chi tiết ở `RISK-LF.md` R15.

## Hồ sơ đi kèm (32 artefact)

Thêm so với v1.0: `I18N-GLOSSARY-LF.md` · `ASSESSMENT-T1-T10-LF.md` · `REVIEW-REQ-LF.md` ·
`ADMIN-GUIDE-LF.md` · `RELEASE-v1.1.md`

Report: `reports/build-report.html` · `reports/hoi-thoai-pm-ai.html` *(96 lượt PM · 627
lượt AI · 1.457 thao tác — đã che secret và email)*

## Tự định vị

**Không đổi so với v1.0: CASAN Cấp 2 (Augmented).** v1.1 làm sâu thêm chất lượng hồ sơ
(bài T2, tự đánh giá theo rubric) nhưng **không** thay đổi điều kiện lên Cấp 3 — Cấp 3 đòi
*chuẩn hoá toàn đội*, mà quy trình này vẫn **chỉ có đúng một người dùng**.
