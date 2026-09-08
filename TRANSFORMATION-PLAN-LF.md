# AI Transformation Plan — Local Food

> Deliverable tốt nghiệp: *"Kế hoạch đưa dự án lên CASAN Cấp 2 (Augmented)"*
> (`PM-AI-Bootcamp-Program-v1.0.md` §9.1, 5%).
>
> Thang CASAN: **C**urious → **A**ugmented → **S**tandard → **A**utomated → **N**ative.

---

## 1. Tự định vị hiện tại — và vì sao không tự chấm cao hơn

**Kết luận: dự án đã ở Cấp 2 (Augmented), chạm một vài đặc trưng Cấp 3, nhưng chưa
đạt Cấp 3.**

| Cấp | Đặc trưng | Dự án này |
|---|---|---|
| **1 — Curious** | Dùng AI lẻ tẻ, không đo, không quy trình | ✅ Đã vượt qua rõ ràng |
| **2 — Augmented** | AI gắn vào **quy trình chuẩn**, có **telemetry cơ bản** | ✅ **Đang ở đây** |
| **3 — Standard** | AI-first **chuẩn hoá toàn đội**, có Delegation Map + Governance + human-in-the-loop | ⚠️ Có đủ *công cụ*, **thiếu "toàn đội"** |
| 4 — Automated | Agent vận hành workflow có cổng gác + audit, người chỉ duyệt ngoại lệ | ❌ Chưa |
| 5 — Native | AI-native toàn vòng đời, quy mô lớn, đa workflow | ❌ Chưa |

### Bằng chứng cho Cấp 2

| Đặc trưng Cấp 2 | Bằng chứng |
|---|---|
| Gắn vào quy trình chuẩn | 11 bước Capstone Playbook, 8/8 Cổng hiểu đóng, 22 artefact |
| Có telemetry cơ bản | `/telemetry` chạy được + `TELEMETRY-LF.md`: giờ thật, Nén, est→reconcile |
| AI tăng cường việc PM | PERT 50,7h → thực tế ~17,5h, đồng thời giao gấp 7,9× phạm vi |
| Không rubber-stamp | 19 sự cố DEVBOOK, 2 lần gate FAIL buộc làm lại |

### Vì sao **chưa** phải Cấp 3 — nói thẳng

Cấp 3 đòi *"chuẩn hoá **toàn đội**"*. Dự án này **chỉ có một người**. Có
`DELEGATION-MAP-LF.md`, có governance, có human-in-the-loop — nhưng **chưa ai khác
từng dùng chúng**. Một quy trình chưa qua tay người thứ hai thì chưa gọi là chuẩn hoá,
mới là *"quy trình cá nhân được viết ra"*.

> Đây là điểm dễ tự chấm quá tay nhất. Có đủ artefact ≠ đã chuẩn hoá.

---

## 2. Khoảng cách cụ thể để **giữ vững** Cấp 2

Cấp 2 đã đạt nhưng còn 4 chỗ mỏng — chính là 4 điểm yếu quy trình đã ghi ở
`AI-WORKFLOW-LF.md`:

| # | Khoảng cách | Bằng chứng đã xảy ra | Việc cần làm | Công |
|---|---|---|---|---|
| G1 | **Cổng a11y chạy tay**, không nối vào build | Lần sau sót thì không ai chặn | Thêm script `pnpm check:a11y`, chạy trong CI | 1-2h |
| G2 | **Không có cổng kiểm link nguồn còn sống** | 3 link 404 nằm im, zod vẫn PASS (OP-11) | Script kiểm link định kỳ, cảnh báo link chết | 1h |
| ~~G3~~ | ~~Không có cổng kiểm tính đúng đắn địa lý~~ | Marker giữa Biển Đông sống 12 ngày (OP-06, R13) | ✅ **XONG 2026-09-06** — `pnpm check:geo`, đã chứng minh bắt được lỗi cũ | — |
| G4 | **Không có thông báo khi có báo nội dung sai** | US-15 chạy rồi nhưng PM phải tự chạy SQL mới thấy | 🟡 **Một nửa xong (2026-09-08):** đã có `ADMIN-GUIDE-LF.md` với câu SQL sẵn dùng + hướng dẫn dựng webhook. Còn lại: PM chọn kênh (Discord/Slack rẻ nhất, hoặc email) rồi dán URL | ~30ph sau khi chọn kênh |

**Tổng còn lại: ~3 giờ** (G3 đã xong). Cả 4 đều biến một việc "nhớ thì làm" thành **cổng tự động**, đúng
tinh thần Cấp 2: *AI gắn vào quy trình*, không phụ thuộc trí nhớ người.

---

## 3. Lộ trình lên Cấp 3 (Standard)

Cấp 3 = **chuẩn hoá cho nhiều người**, không phải thêm tính năng. Ba việc, theo thứ tự:

### Giai đoạn 1 — Làm quy trình dùng lại được *(~1 tuần)*

- **Tách "đề bài cho agent" thành template.** Đề bài research 1 tỉnh hiện nằm rải trong
  lịch sử hội thoại. Đưa thành file `templates/province-research-brief.md` — đây là tài
  sản giá trị nhất của dự án: `CASE-STUDY-LF.md` đo được rằng chi phí nằm ở **viết đề
  bài**, không ở agent chạy.
- **Viết `CONTRIBUTING.md`** dịch `DELEGATION-MAP-LF.md` thành hướng dẫn thao tác: người
  mới thêm 1 tỉnh thì làm gì, cổng nào phải qua, cái gì tuyệt đối không tự làm.
- **Nối cổng tự động vào CI** (G1-G3 ở trên) — người thứ hai không thể quên cái mà máy
  tự chặn.

### Giai đoạn 2 — Kiểm chứng bằng người thứ hai *(~1 tuần)*

- **Nhờ 1 người khác thêm 1 tỉnh** chỉ bằng tài liệu, không hỏi han. Đo: mất bao lâu,
  kẹt ở đâu, có phải hỏi không.
- **Đây mới là phép thử Cấp 3 thật.** Nếu họ không tự làm được thì quy trình chưa chuẩn
  hoá, dù artefact có đẹp đến đâu.
- Ghi kết quả vào `OPERATING-LOG-LF.md` — đúng tinh thần "cái gì vỡ khi dùng thật", chỉ
  khác là lần này người dùng là **người khác**.

### Giai đoạn 3 — Governance cho nhiều người *(~1 tuần)*

- **Quy tắc review nội dung**: ai được duyệt nội dung tỉnh nào, cần mấy nguồn.
- **Kiểm duyệt review công khai**: hiện R10 chấp nhận không có pre-moderation vì chỉ
  một người theo dõi. Nhiều người thì cần luồng rõ ràng.
- **Phân quyền Supabase**: hiện chỉ có anon key. Nhiều người cần role phân biệt.

---

## 4. Không đặt mục tiêu Cấp 4 — và vì sao

Cấp 4 (Automated) đòi *agent vận hành cả luồng, người chỉ duyệt ngoại lệ*. **Không phù
hợp với dự án này**, vì lý do bản chất chứ không phải thiếu công sức:

Rủi ro lớn nhất còn mở là **R2 — hallucination nội dung ẩm thực**. Mà đây đúng là loại
lỗi mà tự động hoá **không** bắt được:

- zod ép có `sourceRef` → vẫn lọt 3 link 404 (OP-11).
- Build PASS, QA PASS → marker vẫn nằm giữa Biển Đông 12 ngày (OP-06).
- Không công cụ nào biết bánh cuốn Thanh Trì có nhân hay không — **cần người biết món**.

Đẩy lên Cấp 4 khi cổng kiểm nội dung còn fail-open chỉ khiến sai sót **nhân rộng nhanh
hơn**. Đúng thứ tự phải là: **chuẩn hoá cổng (Cấp 3) trước, tự động hoá (Cấp 4) sau.**

> Đây là quyết định có chủ đích, không phải chưa nghĩ tới. Ghi ra để ở viva trả lời
> được câu *"sao không đặt mục tiêu cao hơn?"*.

---

## 5. Việc làm ngay sau khi nộp bài

| Ưu tiên | Việc | Vì sao trước |
|---|---|---|
| 1 | G2 — script kiểm link nguồn | Link rot là rủi ro dài hạn, càng nhiều dữ liệu càng nặng. Làm theo mẫu `check-geo.mjs` |
| 2 | G4 — thông báo khi có báo nội dung sai | Không có nó thì US-15 chỉ là kênh một chiều |
| 3 | G1 — a11y vào CI | Đang PASS nên chưa gấp, nhưng dễ trôi khi thêm trang mới |
| 4 | Template đề bài cho agent | Bước đầu tiên của Cấp 3, và tái dùng được cho dự án khác |

> **G3 đã cho thấy mẫu để làm 3 cái còn lại:** một script Node độc lập, exit code 1 khi
> fail, chạy được bằng `pnpm check:*`. Rẻ, không phụ thuộc framework, nối vào CI được ngay.

---

## 🔒 Cổng hiểu — Transformation Plan

1. Nói được **vì sao dự án chưa phải Cấp 3** dù đã có Delegation Map và Governance
   *(gợi ý: Cấp 3 đòi "toàn đội", dự án chỉ có một người dùng quy trình đó)*.
2. Nói được **vì sao không nhắm Cấp 4** *(gợi ý: R2 còn fail-open — tự động hoá khi
   cổng nội dung chưa chặn được thì chỉ nhân rộng sai sót nhanh hơn)*.
