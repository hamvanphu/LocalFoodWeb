# Operating Log — Local Food (Customer Zero)

> **Bằng chứng bắt buộc §8.3 mục 4** của `PM-AI-Bootcamp-Program-v1.0.md`:
> *"Operating log (Customer Zero): ghi lại cái gì **vỡ khi PM tự dùng** hệ thống mình
> build — chỗ này mới bật ra hiểu biết mà plan không bao giờ cho."*
>
> **Khác gì `DEVBOOK.md`?** DEVBOOK ghi lỗi phát hiện **trong lúc build** (AI sai, PM
> sửa). File này ghi lỗi phát hiện **khi dùng sản phẩm như người dùng thật** — mở site
> lên, bấm, nhìn, và thấy có gì đó không ổn. Nhiều lỗi ở đây **đã đi qua build sạch,
> qua QA có checklist, được đánh PASS** rồi vẫn lộ ra khi dùng thật.

---

## Vì sao mục này quan trọng hơn nó có vẻ

Trong 11 sự cố dưới đây:

- **8/11 do PM tự phát hiện khi dùng**, không phải do AI tự kiểm hay do test tự động.
- **4/11 đã đi qua một cổng chất lượng nào đó** (build PASS, QA PASS, hoặc cả hai) mà
  vẫn không bị bắt.
- **3/11 chỉ lộ ra sau khi deploy thật**, không tài nào thấy được ở localhost.

Đây là bằng chứng cụ thể cho một điều Playbook nói mà nghe hơi trừu tượng: *plan và
test không thay thế được việc tự dùng thứ mình làm ra.*

---

## Nhật ký

### OP-01 · Bản đồ không hiển thị gì cả *(2026-09-03)*

**PM thấy gì:** *"tao ko thấy map hoạt động: ko thấy display luôn nhé"* — mở trang chủ,
chỗ bản đồ trống trơn.

**Trước đó cổng nào đã cho qua:** `pnpm build` PASS, không lỗi TypeScript, không lỗi
console rõ ràng. Với AI thì "code đúng" nên coi như xong.

**Thực tế:** `maplibre-gl@6.5.0` có lỗi khiến vector tile source không bao giờ load
xong — `isSourceLoaded` mãi `false`, không bắn request `.pbf` nào, `map.on('load')`
không bao giờ fire. Phải gắn listener `onStyleData/onSourceData/onIdle` trực tiếp mới
lần ra. Hạ xuống `4.7.1` là chạy.

**Bài học:** build PASS chỉ chứng minh code **biên dịch được**, không chứng minh sản
phẩm **chạy được**. Lỗi thư viện không hiện ra ở bất kỳ cổng tự động nào.

---

### OP-02 · Giọng văn "mày" lọt vào giao diện người dùng *(2026-09-03)*

**PM thấy gì:** *"sao lại dùng từ khóa 'mày' ở mục thông báo v? OMG"* — trang 404 và
trang chủ xưng hô với người dùng bằng đại từ thân mật/thô mà AI dùng khi nói chuyện
với PM.

**Trước đó cổng nào đã cho qua:** build PASS, QA checklist PASS, A11y 0 vi phạm. Không
cổng nào kiểm **giọng văn**.

**Thực tế:** AI mang nguyên văn phong hội thoại nội bộ vào copy sản phẩm. Grep toàn bộ
`app/` và `components/` thấy 2 chỗ, sửa thành "bạn".

**Bài học:** loại lỗi mà **chỉ người bản ngữ đọc mới thấy**. Không linter nào bắt được,
và nó làm hỏng cảm giác chuyên nghiệp ngay từ chạm đầu tiên.

---

### OP-03 · Danh sách tỉnh ở trang chủ gây rối *(2026-09-03)*

**PM thấy gì:** *"tao đang confuse ở trang chủ, cách mà các tỉnh hiển thị… Tao muốn có
graphic display nhé."*

**Thực tế:** trang chủ đổ thẳng toàn bộ tỉnh thành một danh sách dài, không phân cấp,
không ảnh — và sẽ càng tệ khi scale lên 63 tỉnh.

**Xử lý:** trang chủ chỉ hiện tỉnh nổi bật + thêm trang `/browse` nhóm theo miền, có
ảnh thumbnail.

**Bài học:** thiết kế "đúng về mặt dữ liệu" vẫn có thể **sai về mặt trải nghiệm**. Chỉ
lộ ra khi có người thật nhìn vào và thấy khó dùng.

---

### OP-04 · Bubble bản đồ là chấm màu vô hồn *(2026-09-03)*

**PM thấy gì:** *"bubble chấm đỏ thay vì vậy hãy dùng chính icon các món ăn từng địa
phương tương ứng display nhé"*

**Thực tế:** bản đồ đúng chức năng (click được, điều hướng đúng) nhưng marker chỉ là
chấm tròn đơn sắc — không truyền tải được đây là site **ẩm thực**.

**Xử lý:** thay GL circle layer bằng `<Marker>` + `DishMarker` hiển thị **ảnh món ăn thật**.

**Bài học:** chức năng đạt ≠ mục đích đạt.

---

### OP-05 · UI "lỗi thời cỡ 10 năm trước" *(2026-08-26, FAIL 2 lần)*

**PM thấy gì:** lần 1 — *"UI chưa như kỳ vọng, thậm chí lỗi thời"*. Lần 2, sau khi sửa
— *"mấy điểm vừa update có vẻ như chỉ là minor change, tao muốn wow hơn nữa"*.

**Xử lý:** hai vòng redesign (W1-9b rồi W1-9c) mới đạt.

**Bài học:** đây là **cổng duy nhất không đo được bằng số** trong cả dự án, và cũng là
cổng duy nhất bị đánh FAIL. Ghi rõ ở `RTM-LF.md` GAP-T3: W1-9c PASS là **phán xử chủ
quan của PM**, không phải kết quả đo.

---

### OP-06 · Marker Khánh Hòa nằm giữa quần đảo Trường Sa *(2026-09-06)*

**PM thấy gì:** khi bản đồ mở rộng đủ 63 tỉnh, có marker nổi giữa Biển Đông.

**Trước đó cổng nào đã cho qua:** **tất cả.** Lỗi tồn tại từ walking skeleton
(2026-08-25), qua zod validate, qua build, và **qua trọn vòng QA W1-11 mà PM đã đánh
PASS** (2026-09-03).

**Thực tế:** `centroids.json` lấy centroid hình học của polygon hành chính **bao gồm cả
huyện đảo** — Khánh Hòa gồm Trường Sa nên centroid lệch ~450km ra biển; Đà Nẵng gồm
Hoàng Sa nên tương tự.

**Vì sao 12 ngày không ai thấy:** lúc đó chỉ có 8 bubble, mắt lướt qua không thấy bất
thường. Phải có đủ 63 marker thì cái nằm sai chỗ mới nổi bật.

**Bài học:** checklist QA không có mục "marker có nằm đúng vị trí địa lý không" — loại
lỗi **chỉ bắt được bằng mắt trên bản đồ thật**, không bắt được bằng schema hay build.
Đã thành rủi ro **R13**.

---

### OP-07 · Mũi Cà Mau bị cắt khỏi khung nhìn *(2026-09-06)*

**Phát hiện khi:** chụp màn hình bản đồ để kiểm tra sau khi thêm 63 tỉnh.

**Thực tế:** `center [107.5, 16.5] + zoom 5` hard-code chỉ vừa khung ở một tỉ lệ màn
hình nhất định. Với khung bản đồ cao `70vh`, phần cực Nam bị đẩy ra ngoài — người dùng
**không thấy các tỉnh ĐBSCL** nếu không tự kéo.

**Xử lý:** đổi sang `fitBounds` để khung tự co theo kích thước thật.

**Bài học:** hằng số "trông ổn trên máy mình" là bẫy kinh điển của layout.

---

### OP-08 · Người ngoài mở link chỉ thấy trang đăng nhập Vercel *(2026-09-06)*

**Phát hiện khi:** mô phỏng người ngoài truy cập bằng `curl` không auth, ngay sau khi
deploy.

**Thực tế:** Vercel **mặc định bật Deployment Protection** cho project mới. Mọi route
trả 200 nhưng nội dung là trang SSO của Vercel, không phải site. Người được chia sẻ
link sẽ không xem được gì.

**Vì sao suýt bỏ lọt:** trên máy PM (đã đăng nhập Vercel) thì mở link **vẫn thấy site
bình thường**. Chỉ lộ ra khi kiểm bằng phiên ẩn danh.

**Bài học:** "tôi mở thấy được" ≠ "người khác mở thấy được". Với thứ đem chia sẻ, phải
kiểm bằng con mắt của người ngoài.

---

### OP-09 · Tên miền đẹp thuộc về người khác *(2026-09-06)*

**Phát hiện khi:** kiểm 3 URL sau deploy.

**Thực tế:** `local-food.vercel.app` trả về site có title *"Local Food Directory"* —
của người khác đã chiếm tên đó. Nếu chia sẻ nhầm URL này, người nhận sẽ vào **site
hoàn toàn xa lạ**.

**Bài học:** đừng đoán URL sản phẩm của mình; phải mở thử từng cái.

---

### OP-10 · Ảnh món ăn 502 lúc mới deploy *(2026-09-06)*

**Phát hiện khi:** quét 6 trang trên production bằng trình duyệt thật.

**Thực tế:** 11 lỗi 502 ở `/_next/image`, tất cả ảnh nguồn Wikimedia. Nhưng **số lỗi
dao động giữa các lần chạy** (2 → 0 → 11 → 0) — dấu hiệu không phải bug tất định. Nguyên
nhân: Wikimedia giới hạn tần suất khi Vercel fetch dồn dập lúc cache còn lạnh.

**Điều đáng nói:** fallback `onError` (GAP-01, làm từ W1-8) **đã cứu trải nghiệm** —
người xem thấy placeholder gradient thay vì ảnh vỡ. Một mitigation viết từ 10 ngày
trước, lần đầu chứng minh giá trị trên production.

**Bài học:** suýt sửa nhầm. Nếu chỉ chạy 1 lần rồi kết luận, đã đi sửa `quality` hoặc
kích thước ảnh — hoàn toàn không phải nguyên nhân.

---

### OP-11 · 3 link nguồn đã chết nằm im trong dữ liệu *(2026-09-06)*

**Phát hiện khi:** chủ động kiểm tra toàn bộ 213 URL nguồn, không phải do ai báo.

**Trước đó cổng nào đã cho qua:** zod ép **mỗi món phải có `sourceRef`**, và build luôn
PASS.

**Thực tế:** 3 link trả 404, trong đó **2 là cổng thông tin của chính quyền tỉnh** —
nguồn tưởng bền nhất. Schema chỉ kiểm **có URL**, không kiểm **URL còn sống**.

**Bẫy suýt mắc:** báo cáo đầu gắn cờ 22 link, nhưng 19 trong số đó chỉ bị chặn script
(`vietnamnet.vn` chặn bot, SSL hết hạn, 502 tạm thời). Nếu sửa hết theo báo cáo đầu thì
**đã thay nhầm 19 nguồn đang tốt**.

**Bài học:** khoảng cách giữa *"validate PASS"* và *"nội dung tra lại được"* là có thật.
Link rot là rủi ro dài hạn của mọi hồ sơ dựa trên nguồn web.

---

## Tổng kết

| Nhóm | Số | Ý nghĩa |
|---|---|---|
| PM tự phát hiện khi dùng | 8/11 | Không cổng tự động nào bắt được |
| Đã qua build PASS mà vẫn vỡ | 4/11 | OP-01, OP-02, OP-06, OP-11 |
| **Đã qua QA có checklist mà vẫn vỡ** | **2/11** | OP-02, OP-06 — nghiêm trọng nhất |
| Chỉ lộ ra sau khi deploy thật | 3/11 | OP-08, OP-09, OP-10 |
| Mitigation cũ chứng minh giá trị | 1/11 | OP-10 — fallback viết từ W1-8 |

### Ba loại lỗi mà không cổng tự động nào bắt được

1. **Lỗi ngôn ngữ/văn hoá** (OP-02) — cần người bản ngữ đọc.
2. **Lỗi đúng-về-dữ-liệu-nhưng-sai-về-đời-thực** (OP-06: toạ độ hợp lệ, nằm giữa biển).
3. **Lỗi chỉ tồn tại ở môi trường thật** (OP-08, OP-09, OP-10).

### Điều này đổi cách làm việc thế nào

- Thêm **R13** vào `RISK-LF.md`: QA thiếu mục kiểm tính đúng đắn địa lý.
- Từ nay mọi thay đổi bản đồ **phải xem ảnh chụp thật**, không tin build PASS.
- Sau mỗi lần deploy, **kiểm bằng phiên ẩn danh** trước khi chia sẻ link.
- Lỗi mạng trên production **phải chạy nhiều lần** rồi mới kết luận (OP-10).

---

## 🔒 Cổng hiểu — Operating Log

1. Chọn 1 mục bất kỳ và nói được: **cổng nào đã cho nó lọt qua, và vì sao cổng đó
   không thể bắt được loại lỗi này.** Gợi ý dễ nhất: OP-06.
2. Trả lời được câu viva: *"Có lỗi nào đi qua toàn bộ quy trình chất lượng của bạn mà
   vẫn lọt không?"* — có, **OP-06**, lọt qua zod + build + QA PASS suốt 12 ngày.
