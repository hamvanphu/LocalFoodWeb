# [10] Telemetry — Local Food

> Lập ngày **2026-09-06**.
>
> **Nguyên tắc của bước này (Capstone Playbook [10]):** *"Bẫy hay sót: để AI **bịa
> số** telemetry; đo token thay vì giờ thật."* — Vì vậy tài liệu này chia rõ 3 loại:
>
> | Ký hiệu | Nghĩa |
> |---|---|
> | ✅ **ĐO ĐƯỢC** | Trích trực tiếp từ git/file/output lệnh. Ai chạy lại cũng ra đúng số này. |
> | 🟡 **PROXY** | Suy ra từ dữ liệu đo được, **không phải** thứ cần đo. Ghi rõ sai lệch. |
> | ⬜ **PM TỰ ĐIỀN** | AI **không biết** và **không được đoán**. Để trống cho tới khi PM điền. |

---

## 1. ✅ Nhịp làm việc — đo từ git log

| Ngày | Commit đầu | Commit cuối | Khoảng cách | Số commit | Nội dung chính |
|---|---|---|---|---|---|
| 2026-08-25 | 21:51 | 21:58 | 7 phút | 3 | Walking skeleton + phát hiện lỗi bỏ quy trình |
| 2026-08-26 | 20:06 | 22:49 | 2h43 | 24 | Bước [0]→[7] + W1-1→W1-9c + Search/Filter |
| 2026-09-03 | 19:44 | 21:56 | 2h12 | 7 | W1-10 (8 tỉnh), fix map, SIT-UAT, A11y, Performance |
| 2026-09-05 | 20:35 | 20:35 | — | 1 | Chốt quyết định mở rộng 63 tỉnh |
| 2026-09-06 | 08:28 | 12:03 | 3h35 | 2 | 63 tỉnh + refactor bản đồ + RTM/telemetry |
| **Tổng** | | | **🟡 ~8h37** | **37** | 5 phiên, trải 12 ngày |

**🟡 Vì sao 8h37 KHÔNG phải "giờ người thật":**

1. Chỉ tính từ **commit đầu đến commit cuối** — bỏ sót toàn bộ thời gian trước
   commit đầu mỗi phiên (đọc tài liệu, research, lập kế hoạch) và sau commit cuối.
   Rõ nhất là ngày 25/08: đo ra 7 phút, nhưng dựng cả walking skeleton (scaffold
   Next.js + map + 2 tỉnh chạy end-to-end) chắc chắn lâu hơn nhiều.
2. Ngày 05/09 chỉ có 1 commit nên **không đo được khoảng nào**.
3. Ngược lại, nó **có thể tính dư** nếu PM rời máy giữa phiên (ăn tối, việc khác)
   mà đồng hồ vẫn chạy.

→ Con số này là **proxy thô**, chỉ dùng để PM đối chiếu trí nhớ. **Không dùng để
tính Nén chính thức.**

---

## 2. ✅ Chất lượng phán xử — đo từ git + DEVBOOK

| Chỉ số | Giá trị | Nguồn đo |
|---|---|---|
| Cổng hiểu đã đóng (bước [0]→[7]) | **8/8** | 8 commit `"dong Cong hieu"` |
| Cổng hiểu PM có phản hồi thực chất (sửa/bác/bổ sung), **không** rubber-stamp | **8/8** | Nội dung từng commit — xem bảng dưới |
| Lần gate bị PM đánh **FAIL** buộc làm lại | **2** | W1-9 → W1-9b, W1-9b → W1-9c |
| Sự cố ghi trong DEVBOOK | **17** | đếm mục bullet cấp 1 (1 mục là ghi chú hạn chế, không tính là lỗi) |
| Dòng DEVBOOK | 165 | `wc -l DEVBOOK.md` |

### PM đã bác/sửa gì ở từng Cổng hiểu (✅ trích commit message thật)

| Bước | PM đã làm gì |
|---|---|
| [0] SCOPE | Sửa giả định #4 (nội dung AI-only), chốt deadline |
| [1] SPEC | Test US-03/US-08, **bắt gap wishlist localStorage** |
| [2] MODULEMAP | **Bác đúng** việc gộp GAP-01 vào Layer 0, buộc tách lại |
| [3] ARCH | **Bắt `Province.summary` cũng cần `sourceRef`** (AI sót) |
| [4] WBS | **Bắt 2 việc sót**: A11y audit + Lighthouse performance |
| [5] EST | **Sửa W1-6** (1h lạc quan phi thực tế) → PERT tăng 49.5h → 50.7h; chốt Phương án A |
| [6] RISK/DELEGATION | Giải thích đúng lý do `.env` cần Leash A+; chỉ ra vấn đề bảng Delegation |
| [7] DOR | Xác nhận xuyên tầng đúng; **đồng ý build trước với điều kiện** MapTiler key phải có trước W1-11 |

**Đây là số liệu mạnh nhất của dự án:** 8/8 cổng hiểu PM đều để lại dấu vết phản
biện thật, 5 lần bắt được lỗi/thiếu sót AI ngay tại cổng. Đúng tinh thần
`RISK-LF.md` R3 (chống rubber-stamping).

---

## 3. ✅ Sự cố AI — phân loại 17 mục DEVBOOK

| Nhóm | Số | Ví dụ tiêu biểu |
|---|---|---|
| **AI sai quy trình** | 1 | Bỏ qua toàn bộ bước [0]-[7], nhảy thẳng vào code — **PM bắt** |
| **AI sai code/logic** | 5 | `generateMetadata` không `await params`; `as Province` không validate thật; mất deep-link `#dish-slug` sau redesign; ảnh hero/Lightbox thiếu `onError`; `<img>` thuần khiến trang 16MB |
| **AI sai nội dung (hallucination)** | 1 | Bánh cuốn Thanh Trì mô tả sai (có nhân — thực tế không nhân) |
| **AI sai thiết kế** | 3 | Bản đồ 2 tầng giấu mất 55 tỉnh; khung nhìn cắt mũi Cà Mau; hiệu ứng blur-up áp nhầm cho ảnh `priority` gây LCP trễ |
| **AI sai khi tự kiểm** | 1 | Playwright `fullPage` screenshot làm hiểu nhầm là có bug |
| **Lỗi dữ liệu nguồn** | 2 | GeoJSON 65 feature thay vì 63; **centroid Khánh Hòa/Đà Nẵng nằm giữa Biển Đông** |
| **Lỗi môi trường/thư viện** | 4 | `maplibre-gl@6.5.0` không load tile (**PM báo**); pnpm virtual store lệch; Wikimedia 429; cache module-level trả dữ liệu cũ |

**⚠️ Điểm trung thực cần nói ở viva:** DEVBOOK **chưa ghi đủ** mọi lần PM bắt lỗi.
Ví dụ 2 việc PM phản hồi trực tiếp ngày 2026-09-03 — *giọng văn "mày" lọt vào copy
người dùng* và *bubble chấm đỏ thay vì ảnh món ăn* — chỉ nằm trong commit
`dd0eede`, **không có mục riêng trong DEVBOOK**. Tương tự, 2 lần W1-9 FAIL vì
"UI lỗi thời / chưa wow" cũng không có mục DEVBOOK. Nếu tính cả các lần này, số
sự cố thật **cao hơn 17**. Đây là nợ ghi chép, không phải số liệu để làm đẹp.

---

## 4. ✅ Sản lượng — đo từ repo

| Chỉ số | Giá trị | Cách đo |
|---|---|---|
| Tỉnh có dữ liệu | 63/63 | đếm file `data/provinces/` |
| Món ăn | 197 | script đếm `dishes[]` |
| `sourceRef` | 222 | script đếm |
| Món có ảnh thật | 75 (38%) | đếm `images.length > 0` |
| Dòng JSON dữ liệu tỉnh (riêng 55 tỉnh thêm ngày 06/09) | 4.563 | `git show --stat 36c3e4c` |
| File trong repo (đã track) | 207 | `git ls-tree -r origin/master \| wc -l` |
| Route sinh tĩnh | 68 (63 tỉnh + 5) | output `pnpm build` |
| Commit | 37 | `git log --oneline \| wc -l` |
| Artefact governance | 16 file `.md` | `ls *.md` |

### Kết quả cổng chất lượng (✅ đo bằng công cụ, không phải tự đánh giá)

| Cổng | Kết quả | Công cụ |
|---|---|---|
| Build + typecheck | **PASS** (0 lỗi TS) | `pnpm build` |
| Zod validate 63 file dữ liệu | **PASS** (0 file sai schema) | `provinceSchema.safeParse` lúc build |
| Accessibility | **0 vi phạm** (sau khi sửa 4 lỗi contrast + 1 lỗi focus) | `@axe-core/playwright`, 4 trang |
| Performance | LCP trang chủ **không đạt** NFR < 2.5s | Lighthouse CLI — xem `PERFORMANCE-LF.md`, rủi ro R12 đã chấp nhận công khai |
| SIT/UAT | 8/8 story PASS — **nhưng 1 test lỗi thời** | PM test thủ công; xem `RTM-LF.md` GAP-T1 |

---

## 5. ⬜ Giờ người thật + Nén — PM phải tự điền

**AI không điền phần này.** Lý do: giờ ngồi máy là thứ chỉ PM biết; suy từ commit
timestamp hay từ token đều là **bịa số** theo đúng định nghĩa của Playbook.

### 5.1 Giờ ngồi máy thật

| Phiên | 🟡 Proxy từ git | ⬜ Giờ ngồi máy thật (PM điền) |
|---|---|---|
| 2026-08-25 | 7 phút *(chắc chắn thiếu)* | ______ h |
| 2026-08-26 | 2h43 | ______ h |
| 2026-09-03 | 2h12 | ______ h |
| 2026-09-05 | không đo được | ______ h |
| 2026-09-06 | 3h35 | ______ h |
| **Tổng** | 🟡 ~8h37 | **______ h** ← số dùng để tính Nén |

### 5.2 Baseline "giờ truyền thống" (nếu làm không có AI)

⬜ **PM chốt con số này**, AI chỉ cung cấp khối lượng thật để PM có căn cứ:

- Research + viết nội dung có kiểm nguồn cho **197 món / 63 tỉnh** (mô tả, nguyên
  liệu, các bước, cách ăn, ≥1 nguồn/món, tìm ảnh Wikimedia)
- **~30 component** React/TypeScript + bản đồ tương tác MapLibre
- **16 artefact governance** (SCOPE → RTM)
- QA thủ công 8 story + audit A11y + audit Performance

> Tham chiếu nội bộ: `EST-LF.md` ước lượng PERT **50,7h** — nhưng đó là ước lượng
> **có AI hỗ trợ** và chỉ cho **8 tỉnh**, không phải baseline truyền thống cho 63 tỉnh.
> Đừng dùng nhầm số này làm tử số.

**Giờ truyền thống ước tính:** ______ h

### 5.3 Công thức

```
Nén (Productivity Ratio) = Giờ truyền thống (5.2) ÷ Giờ ngồi máy thật (5.1)
```

**Nén = ______ ÷ ______ = ______ ×**

### 5.4 ⬜ Token

| Chỉ số | Giá trị |
|---|---|
| Token ước tính (est) | ⬜ ______ |
| Token thật (reconcile) | ⬜ ______ |
| MD/1M-token | ⬜ ______ |

**AI không có số này.** Phiên làm việc chạy qua Claude Code; nếu PM cần con số
thật thì lấy từ trang usage của tài khoản, không suy đoán. Theo Playbook, token
**không được dùng thay cho giờ người** khi tính Nén — chỉ là chỉ số phụ về chi phí.

---

## 🔒 Cổng hiểu — bước [10] (Telemetry)

**PM cần làm trước khi coi bước này đóng:**

1. **Điền mục 5.1 và 5.2**, tính ra Nén. Chưa điền thì telemetry **chưa hoàn thành**
   — bảng đo được ở mục 1-4 không thay thế được giờ người thật.
2. **Bác ≥1 số** nếu thấy nghi. Gợi ý những số dễ bị hiểu sai nhất, tự AI nêu ra:
   - **"~8h37"** ở mục 1 — đây là **proxy**, gần như chắc chắn **thấp hơn** thực tế
     vì bỏ sót thời gian trước commit đầu tiên. Đừng dùng làm mẫu số tính Nén.
   - **"17 sự cố DEVBOOK"** — mục 3 đã tự thừa nhận con số này **thiếu**, ít nhất
     4 lần PM bắt lỗi không được ghi thành mục riêng.
   - **"8/8 story PASS"** — thực chất chỉ **7 đáng tin**, vì test US-02 đã lỗi thời
     (`RTM-LF.md` GAP-T1).
3. **Xác nhận**: mọi số ở mục 1-4 đều truy được về git/file/output lệnh, không số
   nào suy từ token.
