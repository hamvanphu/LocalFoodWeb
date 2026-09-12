# Local Food v1.2 — Trạng thái bản phát hành

**Ngày:** 2026-09-12 · **Tag:** `v1.2`
**Sản phẩm:** https://local-food-hamvanphus-projects.vercel.app
**Mã nguồn:** https://github.com/hamvanphu/LocalFoodWeb

> Cố ý **không ghi mã commit** ở đây: file này nằm trong chính commit được gắn tag, nên
> hash ghi vào sẽ luôn trỏ commit *trước đó*. Tra bằng `git rev-parse v1.2`.

> Bản trước: [`RELEASE-v1.1.md`](RELEASE-v1.1.md) (2026-09-09). File này chỉ nói **phần
> thêm và phần đổi**.

---

## Thêm gì so với v1.1

| Hạng mục | v1.1 | v1.2 |
|---|---|---|
| Tính năng | Bản đồ · 63 trang tỉnh · tìm kiếm · lọc mùa · đánh giá · song ngữ | **+ "Trưa nay ăn gì"** — gợi ý bữa trưa |
| Route sinh tĩnh | 134 | **136** |
| Dòng code | 5.145 | **5.990** |
| Artefact tài liệu | 32 file · 62.427 từ | **34 file · 73.387 từ** |
| Commit | 69 | **82** |
| Cổng chạy bằng lệnh | 2 | **3** (thêm `check:meal`) |
| Giờ người thật | 23–32h | **27–38h** |
| Nén | 23–35× | **20–31×** |

## Tính năng mới — US-18 "Trưa nay ăn gì"

Giải một nỗi đau rất cụ thể và lặp lại mỗi ngày của dân văn phòng: **mệt vì phải chọn**.

**Bấm một bubble → nhận đúng 2 món** hợp bữa trưa, kèm luôn nguyên liệu, cách làm và cách
ăn — đọc ngay tại chỗ, không phải nhảy sang trang khác.

| Con số | |
|---|---|
| Món trong bể gợi ý | **121** / 197 |
| Món bị loại | **76** — mồi nhậu, ăn vặt, tráng miệng, đặc sản làm quà |

**Vì sao phải lọc bớt** *(yêu cầu trực tiếp của PM)*: gợi ý một đĩa **mồi nhậu** hay một
gói **kẹo dừa** cho bữa trưa công sở là sai về **bản chất món**, không phải sai khẩu vị.

### Bubble chạy vòng quanh mép màn hình

Hành động chính, có mặt ở **mọi trang** — là **lối vào duy nhất** của tính năng (PM bỏ link
trên thanh menu). Nhãn đổi theo ngữ cảnh: *"Trưa nay ăn gì?"* ở trang khác, *"Đổi món khác"*
khi đang ở `/goi-y`.

Ba ràng buộc bắt buộc, vì **mục tiêu đang chạy thì rất khó bấm**:

1. **Dừng tại chỗ** khi chuột tới gần hoặc khi nhận focus bàn phím. Làm bằng CSS animation
   chứ không phải Framer Motion — Framer pause thì **nhảy về đầu quỹ đạo**.
2. **Máy cảm ứng không có hover** ⇒ bubble **neo cố định**, không chạy.
3. **Chạy sát mép**, không trôi tự do — bản thử đầu trôi ngẫu nhiên hai trục thì **đè lên
   ảnh món ăn** giữa trang.

## Quyết định kiến trúc — D4

> **Gán tay thứ phải *hiểu*; suy tự động thứ chỉ cần *tra*.**

`mealTypes` (món này ăn no được không) là **phán đoán ngữ nghĩa** ⇒ 6 agent gán tay 197 món.
Đã đo và loại bỏ phương án tự động: từ khoá bắt nhầm *"Hạt điều rang"* vào **cả** nhóm nhậu
lẫn ăn vặt, *"Bánh đa Kế"* vào cả ăn vặt lẫn lễ Tết.

Còn *cay · món nước · chay được · nặng mùi · nhiều dầu mỡ* thì **suy bằng code** — vì chúng
chỉ là **kiểm sự có mặt** của một nguyên liệu hoặc một nhãn.

## Cổng chất lượng

| Cổng | Kết quả |
|---|---|
| Build + kiểm kiểu | ✅ 136 trang tĩnh, 0 lỗi |
| Lint | ✅ 0 lỗi, 0 cảnh báo |
| `pnpm check:geo` | ✅ 63/63 |
| `pnpm check:i18n` | ✅ 63/63 *(cấu trúc — không kiểm nghĩa, xem R15)* |
| **`pnpm check:meal`** *(mới)* | ✅ 197/197, và **0 trường nào khác bị 6 agent sửa** |
| Mô phỏng 800 lần bấm | ✅ Không món bị loại nào lọt vào; cả 121 món đều tiếp cận được |
| Hiệu năng bubble | ✅ 60fps, 0ms long task — `translate`/`rotate` chạy trên GPU |
| **LCP < 2,5s** | ❌ **KHÔNG ĐẠT** — R12, không đổi |

**`check:meal` làm một việc khác thường:** ngoài kiểm dữ liệu, nó **đối chiếu từng file với
bản trong git** và fail nếu có trường nào ngoài `mealTypes`/`mealTypeNote` bị đụng — vì 6
agent ghi song song vào nội dung gốc tiếng Việt vốn **không có bản sao nào ngoài git**.

## Chất lượng hồ sơ

**Cổng W4-9 — PM duyệt phân loại, đã đóng.** Thay vì bắt PM đọc 197 món (chắc chắn thành
đọc lướt, đúng kiểu **R3 rubber-stamping**), dựng `scripts/review-meal.mjs` khoanh vùng chỗ
**dữ liệu tự mâu thuẫn với nhãn** → còn **23 món**. Đọc 23 món đó thì lộ ra chúng chỉ là
**3 quyết định chính sách**.

PM chốt: **loại** món vừa là bữa chính vừa là mồi nhậu · **giữ** lẩu · **không sửa** dữ liệu
bánh Huế. Bể 132 → 121 món. **Sửa ở LUẬT chứ không sửa dữ liệu** — nhãn `moi-nhau` của 10
món đó là đúng, gỡ đi là làm dữ liệu nói sai sự thật chỉ để vừa một tính năng.

---

## Còn tồn — ghi thẳng, không giấu

| # | Việc | Trạng thái |
|---|---|---|
| 1 | **🔴 Bản dịch tiếng Anh chưa ai đọc (R15)** | 45.192 từ do 10 agent sinh; cổng chỉ kiểm **cấu trúc**, không cổng nào kiểm **nghĩa**. Rủi ro mở lớn nhất |
| 2 | **🔴 Phân loại món là phán đoán (R16)** | Món gán nhầm **biến mất khỏi gợi ý mà không ai thấy** — người dùng không thể báo lỗi về thứ họ không nhìn thấy. Ba tỉnh (Hải Dương, Thanh Hóa, Sơn La) hiện không bao giờ xuất hiện: **thiếu nội dung**, không phải lỗi phân loại |
| 3 | **T8 (Meeting Summary) = 0** | Assignment duy nhất dưới ngưỡng. Cần một cuộc họp **thật** (~30 phút) → 10/10 |
| 4 | LCP chưa đạt NFR (6,20s) | R12 — không đổi, chấp nhận có ý thức |
| 5 | Nội dung tiếng Việt chưa kiểm hết (R2) | Không đổi — đọc lướt 15/197 món |
| 6 | Chưa đặt giới hạn domain cho MapTiler key | Việc bảo mật 5 phút, tồn lâu nhất |
| 7 | Cổng a11y chạy tay · chưa có thông báo khi có báo lỗi · video chưa quay | Không đổi |
| 8 | Token là **SÀN**, không phải tổng | Transcript có 0 lượt sidechain ⇒ token của ~30 agent nền không được ghi |

## Hồ sơ đi kèm (34 artefact)

Thêm so với v1.1: `SCOPE-REC-LF.md` · `RELEASE-v1.2.md`
Report: `reports/build-report.html` · `reports/hoi-thoai-pm-ai.html` · **`reports/hoi-thoai-pm-ai.md`** *(mới — 110 lượt PM · 754 lượt AI, đã che secret và email)*

## Tự định vị

**Không đổi: CASAN Cấp 2 (Augmented).** Cấp 3 đòi *chuẩn hoá toàn đội*, mà quy trình này
vẫn **chỉ có đúng một người dùng**.
