# AI Workflow — Local Food

> Deliverable tốt nghiệp: *"AI Workflow + Delegation Map — Quy trình AI-first
> end-to-end + bản đồ ủy quyền **đã áp dụng**"* (`PM-AI-Bootcamp-Program-v1.0.md` §9.1).
>
> Bản đồ ủy quyền ở `DELEGATION-MAP-LF.md`. File này mô tả **quy trình đã chạy thật**,
> mỗi bước kèm ví dụ có thật trong dự án — không phải quy trình lý tưởng vẽ ra sau.

---

## Vòng lặp orchestrator

Chuẩn của chương trình:
`Context → Plan → Delegate (Leash A/A+) → Execute → Gate (fail-closed) → Log → lặp`

Dưới đây là cách vòng lặp đó **thực sự diễn ra** trong dự án này.

```
┌─ CONTEXT ──────────────────────────────────────────────────────────┐
│ AI tự đọc repo + artefact các bước trước. PM KHÔNG dán lại bối cảnh │
│ Thực tế: mỗi bước [n] lấy input là artefact bước [n-1] đã đóng cổng │
└────────────────────────┬───────────────────────────────────────────┘
                         ▼
┌─ PLAN ─────────────────────────────────────────────────────────────┐
│ AI đề xuất cách làm + chỉ ra chỗ chưa chốt. PM chọn hướng           │
│ Thực tế: bước [5] AI báo PERT 50,7h > quỹ 30-40h → PM chọn P.án A   │
└────────────────────────┬───────────────────────────────────────────┘
                         ▼
┌─ DELEGATE ─────────────────────────────────────────────────────────┐
│ Gán mức L theo DELEGATION-MAP. Việc chạm secret/ra ngoài = A+       │
│ Thực tế: viết SQL RLS = A+ → AI viết, PM tự chạy trên dashboard     │
└────────────────────────┬───────────────────────────────────────────┘
                         ▼
┌─ EXECUTE ──────────────────────────────────────────────────────────┐
│ AI tự chạy: code, build, test, subagent song song                   │
│ Thực tế: 7 agent nền cùng research 55 tỉnh, PM không ngồi chờ       │
└────────────────────────┬───────────────────────────────────────────┘
                         ▼
┌─ GATE ─────────────────────────────────────────────────────────────┐
│ Cổng hiểu (người) + cổng tự động (build/zod/axe). FAIL = quay lại   │
│ Thực tế: W1-9 FAIL 2 lần → redesign 2 vòng mới qua                  │
└────────────────────────┬───────────────────────────────────────────┘
                         ▼
┌─ LOG ──────────────────────────────────────────────────────────────┐
│ DEVBOOK (AI sai/PM sửa) · OPERATING-LOG (vỡ khi dùng) · telemetry   │
│ Thực tế: 19 sự cố + 11 mục operating log + dashboard /telemetry     │
└────────────────────────┴───────────────────────────────────────────┘
                         │
                         └──────► lặp cho bước tiếp theo
```

---

## Từng bước, kèm ví dụ có thật

### 1. Context — AI tự nạp bối cảnh, PM không dán lại

**Nguyên tắc:** PM không copy-paste code hay tài liệu vào chat. AI tự đọc repo.

**Đã chạy thế nào:** mỗi artefact ghi rõ dòng `> Input:` trỏ tới artefact trước đó.
`WBS-LF.md` lấy input là `ARCH-LF.md` **đã đóng cổng**, không phải bản nháp.

**Vì sao quan trọng:** đây là chỗ phân biệt *orchestrator* với *chatbot*. Nếu PM phải
dán lại bối cảnh mỗi lần thì chi phí người tăng tuyến tính theo số bước.

### 2. Plan — AI đề xuất và **nói ra chỗ chưa chắc**, PM quyết

**Nguyên tắc:** AI không im lặng chọn hộ khi có đánh đổi thật.

**Đã chạy thế nào:**

- Bước [5]: AI tính PERT **50,7h** rồi tự chỉ ra nó **vượt quỹ thời gian 30-40h** của
  PM, đưa 3 phương án A/B/C kèm đánh đổi. PM chọn A (giữ 8 tỉnh, chấp nhận rủi ro).
- 2026-09-06: AI phát hiện thiếu 40% trọng số deliverable, **dừng lại hỏi ưu tiên**
  thay vì tự chọn làm cái nào trước.

**Phản ví dụ (đã sai):** Search + Filter đi thẳng từ yêu cầu miệng vào WBS rồi build,
**bỏ qua bước Plan** — hệ quả là GAP-T2, không có AC nên không test được.

### 3. Delegate — gán mức L trước khi làm, không gán sau

| Loại việc | Mức | Nguyên tắc |
|---|---|---|
| Code UI, component, motion | L3 / A | Sai thấy ngay, sửa rẻ |
| Viết nội dung món ăn | L2-L3 + Content Gate | Sai **không** lộ qua build |
| QA/kiểm thử | L2-L3 + gate PM tự test | AI không được tự tuyên bố PASS |
| Secret, API key | **L4 / A+** | Không tự điền, không in ra output |
| Push / deploy | **L4 / A+** | Ra ngoài, khó thu hồi |
| Đăng ký dịch vụ ngoài | **L4 / A+** | Không bao giờ tự làm thay PM |
| RLS policy | **L4 / A+** | Sai = mất toàn bộ dữ liệu |

**Đã giữ đúng ở chỗ dễ lách nhất:** khi làm US-14, AI **có** đường kỹ thuật để tự chạy
SQL qua API Supabase. Vẫn đưa PM tự chạy. Tương tự, không tự tắt Deployment Protection
dù thử API (bị `Not authorized`) — dừng và đưa PM đường dẫn.

### 4. Execute — song song hoá, PM không ngồi chờ

**Đã chạy thế nào:** nhân rộng 55 tỉnh bằng **7 agent chạy nền song song**, mỗi agent
6-10 tỉnh, cùng một đề bài chuẩn (schema + quy tắc nguồn + quy tắc ảnh).

**Bài học đo được** (`CASE-STUDY-LF.md` phần B): chi phí thật nằm ở **viết đề bài cho
agent**, không nằm ở agent chạy. Từ 1 lên 10 tỉnh mỗi agent gần như miễn phí.

**Xử lý khi agent chết:** 1 agent (10 tỉnh Tây Nam Bộ) chết giữa chừng do giới hạn
phiên. Không bỏ qua — chia lại lô nhỏ, chạy lại phần thiếu, **đối chiếu đủ 63/63 file**
trước khi đi tiếp.

### 5. Gate — hai lớp, và biết rõ lớp nào không chặn được gì

**Lớp tự động** (máy chạy, fail-closed thật):

| Cổng | Chặn được gì |
|---|---|
| `pnpm build` + TypeScript | Lỗi cú pháp, sai kiểu |
| zod `provinceSchema` | Thiếu `sourceRef`, `heroDishSlug` không khớp |
| axe-core | Vi phạm WCAG *(nhưng chạy tay, chưa nối vào build)* |

**Lớp người** (Cổng hiểu — PM giải thích lại + bắt ≥1 lỗi mới được đi tiếp):

8/8 cổng đóng, 5 lần bắt được lỗi thật ngay tại cổng.

**Chỗ cả hai lớp đều không bắt được** — quan trọng nhất phải biết:

| Loại lỗi | Ví dụ thật | Vì sao lọt |
|---|---|---|
| Sai văn hoá/ngôn ngữ | Giọng "mày" lọt vào UI | Không linter nào kiểm giọng văn |
| Đúng dữ liệu, sai đời thực | Marker Khánh Hòa giữa Trường Sa | Toạ độ hợp lệ về mặt schema |
| Chỉ tồn tại ở môi trường thật | Deployment Protection chặn người ngoài | Localhost không tái hiện được |

→ Đây chính là lý do phải có **Operating Log** (`OPERATING-LOG-LF.md`).

### 6. Log — ba sổ, ba mục đích khác nhau

| Sổ | Ghi gì | Trả lời câu hỏi viva nào |
|---|---|---|
| `DEVBOOK.md` Phần A | AI sai lúc build → PM sửa | *"AI làm sai chỗ nào? Bắt bằng cách nào?"* |
| `DEVBOOK.md` Phần B | Mức L & vì sao · fail-closed · hard-stop | *"Vì sao delegate mức này? Cổng nào gác?"* |
| `OPERATING-LOG-LF.md` | Vỡ khi PM tự dùng sản phẩm | *"Có lỗi nào qua hết quy trình mà vẫn lọt?"* |
| `/telemetry` + `TELEMETRY-LF.md` | Giờ thật, Nén, est→reconcile | *"Đo bằng gì? Số này tin được không?"* |

---

## Bốn luật cứng — không nới lần nào

1. **AI không tự đăng ký dịch vụ ngoài** thay PM (MapTiler, Supabase, Vercel, GitHub).
2. **AI không tự điền và không in giá trị secret** ra output.
3. **AI không tự push/deploy** — chỉ làm khi PM ra lệnh rõ ràng từng lần.
4. **AI không tự tuyên bố "PASS"** cho cổng chất lượng — PM tự test lại.

**Kiểm chứng luật 2:** quét toàn bộ lịch sử git trước lần push đầu tiên — không key nào
bị commit, chỉ có tên biến.

---

## Ba điểm quy trình này khác "dùng AI như chatbot"

1. **Cổng hiểu chặn thật, không phải nghi thức.** Chặn 1 lần lớn (bỏ quy trình, phải
   làm lại từ [0]) và 2 lần ở W1-9 (UI chưa đạt).
2. **Mức uỷ quyền quyết định TRƯỚC khi làm.** Không phải làm xong rồi mới hỏi có nên
   không — như vậy đã muộn với việc chạm secret hoặc deploy.
3. **Ghi lỗi AI là bắt buộc, không phải tuỳ hứng.** 19 sự cố + 11 mục operating log.
   Playbook nói thẳng: *PM có 0 lần sửa AI là PM đang rubber-stamp.*

---

## Chỗ quy trình này còn yếu — biết để nói ở viva

| Điểm yếu | Hệ quả thật đã xảy ra |
|---|---|
| **axe-core không nối vào build** | Chạy tay, lần sau sót thì không ai chặn |
| **Không có cổng nào kiểm nội dung đúng/sai** | Bánh cuốn Thanh Trì mô tả sai; 3 link nguồn 404 vẫn lọt qua zod |
| **Không có cổng kiểm tính đúng đắn địa lý** | Marker giữa biển sống sót 12 ngày (đã thành R13) |
| **Cổng "UI wow" chủ quan** | Không đặt được ngưỡng số; PASS là phán xử của PM (GAP-T3) |
| **Bước Plan bị bỏ khi yêu cầu đến bằng lời** | GAP-T2 — Search/Filter build xong mà không có AC để kiểm |
