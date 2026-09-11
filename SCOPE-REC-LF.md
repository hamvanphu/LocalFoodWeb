# [0] SCOPE bổ sung — "Trưa nay ăn gì" (gợi ý món cho dân văn phòng)

> Bước [0] cho một tính năng mới, viết **trước** khi code — đúng bài học **GAP-T2**, nơi
> Search và Filter đi thẳng từ yêu cầu miệng vào WBS rồi build, không story không AC nên
> không test nào bắt được, và lỗi nằm im trên production nhiều ngày.
>
> `SCOPE-LF.md` gốc là **bản đóng băng** (chốt 2026-08-26). File này là scope riêng cho
> tính năng phát sinh, không sửa file gốc.

**Ngày:** 2026-09-11 · **Trạng thái:** ⬜ chờ Cổng hiểu của PM

---

## Problem statement

Dân văn phòng có một nỗi đau rất cụ thể và lặp lại **mỗi ngày**: *"trưa nay ăn gì?"*.
Đây không phải bài toán thiếu thông tin — mà là **mệt vì phải chọn** (decision fatigue),
trong một khung giờ nghỉ ngắn, kèm vài ràng buộc xã hội mà không app đặt đồ ăn nào nói ra:

- Ăn xong **buồn ngủ cả chiều** thì hỏng việc.
- Món **nặng mùi** (mắm tôm, mắm ruốc, sầu riêng) mang về bàn làm việc ở văn phòng mở là
  một vấn đề **xã giao**, không phải vấn đề khẩu vị.
- Quá cay giữa trưa họp chiều thì khổ.

Local Food đang có **197 món của 63 tỉnh** nhưng **không có đường nào để hỏi "gợi ý cho
tôi"** — người dùng phải tự biết tên tỉnh hoặc tên món mới tra được. Với người chỉ muốn
biết trưa nay ăn gì, toàn bộ kho nội dung này hiện **không dùng được**.

## Phạm vi: chọn lọc, không phải toàn bộ 197 món

PM nêu rõ: *"Lựa chọn filter bớt chứ ko full nhé, vì có vài món có thể chỉ phù hợp ăn vặt
hoặc kiểu nhậu thôi."*

Đã đo trên dữ liệu thật để xác nhận nhu cầu này là có căn cứ:

| Nhóm loại khỏi gợi ý bữa trưa | Ví dụ có thật trong dữ liệu |
|---|---|
| Mồi nhậu | Nem Bùi · Bò một nắng muối kiến vàng · Thịt lợn muối chua · Gỏi đu đủ kiến vàng |
| Ăn vặt / quà chiều | Bánh phu thê · Bánh gio mật mía · Chuối nếp nướng |
| Tráng miệng, kẹo | Kẹo dừa Bến Tre · các loại chè |
| Đặc sản mua về làm quà | Hạt điều rang · Mực một nắng · Bánh đậu xanh Hải Dương |

Gợi ý một đĩa **mồi nhậu** cho bữa trưa công sở là sai về bản chất, không phải sai về
khẩu vị. Vì vậy tính năng này **bắt buộc** phải lọc.

> **Sửa 2026-09-11 — bảng trên từng có một ví dụ sai, do chính AI viết.** Bản đầu lấy
> *"Miến dong"* làm ví dụ món phải loại. Khi phân loại thật thì thấy `howToEat` của nó ghi
> rõ *"nấu canh, nấu miến gà, miến lòng"* — tức nấu thành bữa ăn no được, và cùng dạng với
> *Mì Chũ* vốn được xếp `bua-chinh`. Ví dụ đó chọn bằng **đúng cái cách dò từ khoá mà mục
> này đang chê là không đáng tin**. Đã thay bằng *Bánh đậu xanh Hải Dương*, và sửa phân
> loại cho cả hai loại sợi khô về cùng một hướng.

## 10 câu hỏi làm rõ + giả định mặc định

| # | Câu hỏi | Trả lời / Giả định mặc định |
|---|---|---|
| 1 | Bối cảnh dùng: đi ăn tiệm, mang cơm, hay nấu ở nhà? | ✅ **PM chốt: "trưa nay ăn gì" — gợi ý món ĐI ĂN.** Không làm phần "mang cơm đi làm" vì dữ liệu hiện **không có** thuộc tính hâm lại/đựng hộp, sẽ phải gán tay thêm 197 món |
| 2 | Có gợi ý **quán** không? | ❌ **KHÔNG.** Site là bản đồ ẩm thực vùng miền, **không có dữ liệu quán/giá/địa chỉ**. Gợi ý ở mức **"ăn món gì"**, và phải nói rõ điều đó trên giao diện để người dùng không kỳ vọng nhầm |
| 3 | Phân loại 197 món bằng cách nào? | ✅ **PM chốt: AI phân loại + PM duyệt mẫu.** Đã đo và loại bỏ phương án tự động thuần: từ khoá bắt nhầm *"Hạt điều rang"* vào **cả** nhóm nhậu lẫn ăn vặt, *"Bánh đa Kế"* vào cả ăn vặt lẫn lễ Tết |
| 4 | Đặt ở đâu? | ✅ **PM chốt: trang riêng `/goi-y`** (và `/en/goi-y`). URL thật nên chia sẻ được kết quả |
| 5 | Có cần đăng nhập / lưu sở thích? | ❌ Không — giữ nguyên nguyên tắc không auth. Lựa chọn bộ lọc nằm trên URL (query string) nên chia sẻ được mà không cần tài khoản |
| 6 | Gợi ý bao nhiêu món một lần? | ✅ **PM chốt lại 2026-09-11: đúng 2 món, bốc ngẫu nhiên, kèm đầy đủ thông tin + công thức nấu.** Bấm lại thì ra cặp khác. *(Bản trước: 12 món + bộ lọc — đã bỏ, xem mục "Đổi yêu cầu" bên dưới)* |
| 7 | Ràng buộc "văn phòng" gồm những gì? | Áp **tự động ở tầng dữ liệu**, không phải nút cho người dùng bấm: chỉ món `bữa chính` mới vào bể bốc. Các chiều *không cay / chay được / nặng mùi* vẫn **suy ra và hiển thị làm nhãn** để người đọc tự cân nhắc, nhưng **không còn là bộ lọc tương tác** |
| 8 | Có tính tới mùa/dịp lễ không? | Không ở bản đầu. `occasions` đã có bộ lọc riêng ở `/browse` (US-13); nhồi thêm vào đây làm loãng trọng tâm |
| 9 | Song ngữ ngay không? | ✅ Có. Site đã song ngữ từ v1.1; thêm một trang chỉ có tiếng Việt là tạo nợ ngay lúc sinh ra |
| 10 | Dữ liệu phân loại lưu ở đâu? | Trong **chính `data/provinces/*.json`** (thêm 1 trường cho mỗi món), **không** tách file riêng. Khác với bản dịch — lý do ở `ARCH-LF.md` D4 |

## Quyết định nền

- **D-REC-1 — Chỉ gợi ý MÓN, không gợi ý quán.** Ràng buộc cứng do dữ liệu: không có
  giá, không có địa chỉ, không có giờ mở cửa. Giao diện phải nói thẳng điều này.
- **D-REC-2 — Thêm đúng MỘT trường gán tay cho mỗi món** (`mealTypes`), mọi thuộc tính
  còn lại **suy ra bằng code**. Lý do đầy đủ ở `ARCH-LF.md` D4.
- **D-REC-3 — Bản đầu chỉ làm bữa trưa đi ăn.** "Mang cơm đi làm" đưa vào backlog, không
  làm nửa vời.
- **D-REC-4 *(2026-09-11)* — Bốc đúng 2 món, không có bộ lọc tương tác.** Người dùng bấm
  một nút, nhận 2 món kèm đủ thông tin và công thức. Lý do ở mục dưới.

## 🔄 Đổi yêu cầu — 2026-09-11 (PM)

> *"tính năng gợi ý là sẽ random từ list ra 2 món thôi. Tức là mỗi lần user vào nhấn
> feature thì sẽ hiển thị ra 2 món + info + công thức nấu"*

| | Thiết kế cũ (chưa build) | Thiết kế mới |
|---|---|---|
| Kết quả | Tới 12 món dạng thẻ | **Đúng 2 món, đầy đủ nội dung + công thức** |
| Bộ lọc | 5 nút bật/tắt cho người dùng | **Không có.** Lọc áp tự động ở tầng dữ liệu |
| Thao tác | Chọn bộ lọc → đọc danh sách → bấm vào món → sang trang khác mới thấy công thức | **Bấm một nút → đọc luôn tại chỗ** |

**Vì sao thiết kế mới đúng hơn — không chỉ đơn giản hơn:**

1. **2 là con số đúng cho vấn đề gốc.** Vấn đề là *mệt vì phải chọn*. Một món thì không
   phải là gợi ý mà là mệnh lệnh; 12 món thì tái tạo lại đúng sự mệt mỏi ban đầu. Hai món
   cho cảm giác **có quyền chọn** mà không tốn sức.
2. **Bộ lọc mâu thuẫn với chính mục đích.** Bắt người đang mệt vì phải chọn đi *chọn năm
   cái bộ lọc trước* là làm nặng thêm đúng việc mà tính năng sinh ra để gỡ.
3. **Đọc công thức tại chỗ bỏ được một bước nhảy trang.** Bản cũ: bấm món → sang trang
   tỉnh → mở panel → mới thấy công thức. Ba thao tác cho một câu hỏi đơn giản.

**Cái mất, ghi thẳng:** người ăn chay hoặc không ăn được cay **không có cách nói ra**.
Bù lại bằng nhãn hiển thị trên mỗi món (`chay được`, `cay`, `nặng mùi`) để họ tự nhìn và
bấm lại. Nếu về sau thấy khó chịu thật thì mở lại bộ lọc — đã ghi vào backlog, **không
phải quên**.

## Out of scope (rõ ràng, không phải quên)

- Gợi ý **quán ăn**, giá tiền, khoảng cách, giờ mở cửa — không có dữ liệu.
- **Mang cơm đi làm** / nấu sẵn — cần thuộc tính hâm lại, đựng hộp mà dữ liệu chưa có.
- Đặt món, liên kết app giao đồ ăn.
- Cá nhân hoá theo lịch sử (không có tài khoản, không theo dõi người dùng).
- **Bộ lọc tương tác** (không cay / chay / nhẹ bụng) — bỏ ở bản đầu theo D-REC-4, đưa vào
  backlog. Nhãn vẫn hiển thị để người đọc tự cân nhắc.
- Dinh dưỡng, calo, chỉ số đường huyết — **cố ý không làm**: đây là nội dung sức khoẻ,
  nói sai có hại thật, mà dự án không có nguồn dinh dưỡng nào để đối chiếu.

## Định nghĩa Done cho tính năng này

1. Mọi món trong `data/provinces/*.json` có `mealTypes` hợp lệ — **zod chặn ở build**.
2. Có cổng `pnpm check:meal` kiểm phân loại, chạy lại được.
3. `/goi-y` và `/en/goi-y` chạy: bấm nút ra **2 món khác nhau**, kèm đủ nguyên liệu,
   cách làm, cách ăn.
4. Cặp món **nằm trên URL** → chia sẻ được đúng cặp mình vừa nhận.
5. US-18 có AC trong `SPEC-LF.md` và checklist trong `SIT-UAT-LF.md` — **viết trước khi code**.
6. PM duyệt mẫu phân loại và **ghi đúng mức đã kiểm** (theo cách đã làm ở `SPOTCHECK-LF.md`).

## Kết quả phân loại — 2026-09-11

| | Số món |
|---|---|
| **Bể gợi ý bữa trưa** (`bua-chinh`) | **132** |
| Bị loại khỏi gợi ý | **65** |
| Tổng | 197 |

Phân bố nhãn (một món có thể mang nhiều nhãn): `bua-chinh` 132 · `an-vat` 69 ·
`moi-nhau` 42 · `dac-san-qua` 40 · `trang-mieng` 17.

**Đã kiểm bằng máy, không phải bằng cảm giác:**
- `pnpm check:meal`: 197/197 món hợp lệ, và **0 trường nào khác bị 6 agent sửa** (đối
  chiếu từng file với bản trong git).
- Mô phỏng **500 lần bấm**: không món nào thuộc nhóm bị loại lọt vào, và cả 132 món trong
  bể đều xuất hiện được.

**Hai tỉnh không bao giờ xuất hiện trong gợi ý** — cổng cảnh báo bắt được, kiểm lại thì
**đúng**, không phải lỗi phân loại:

| Tỉnh | Vì sao |
|---|---|
| Hải Dương | Cả 3 món là bánh đậu xanh, vải thiều, bánh gai — quà và tráng miệng |
| Thanh Hóa | Cả 3 món là nem chua, gỏi cá nhệch, chả tôm — đồ nhắm và quà vặt |

Đây là **vấn đề thiếu nội dung của tỉnh**, không phải lỗi phân loại. Không "chữa" bằng
cách ép một món lên `bua-chinh` — làm thế là bẻ dữ liệu cho vừa tính năng.

---

## 🔒 Cổng hiểu — bước [0] cho tính năng này — ⬜ **CHƯA ĐÓNG**

PM cần trả lời bằng lời của mình trước khi bước [8] BUILD được phép chạy:

1. **Tính năng này cố tình KHÔNG làm gì, và vì sao bỏ được?**
   (gợi ý: không gợi ý quán — vì sao đó là ràng buộc dữ liệu chứ không phải lười)
2. **Vì sao phải gán tay `mealTypes` thay vì suy tự động?**
   (gợi ý: xem 2 ví dụ bắt nhầm ở câu 3 bảng trên)
3. **Rủi ro lớn nhất của tính năng này là gì?**
   (gợi ý: nó *khẳng định* một điều về món ăn — "món này hợp văn phòng" — mà không nguồn
   nào kiểm chứng được. Xem `RISK-LF.md` R16/R17)
