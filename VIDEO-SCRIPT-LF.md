# Kịch bản Video Demo — Local Food

> Deliverable: *"Video Demo — Demo thực tế **cách PM vận hành Human+AI**"* (§9.1, 5%).
>
> **Đọc kỹ đề bài:** không phải video giới thiệu website. Là video cho thấy **cách bạn
> lái AI** — chấm ở *"cách PM vận hành"*, không chấm sản phẩm đẹp.

---

## Chuẩn bị trước khi quay

| Việc | Chi tiết |
|---|---|
| **Thời lượng** | 5-7 phút. Đừng quá 8 — coach xem nhiều bài. |
| **Mở sẵn 4 tab** | ① Site production ② GitHub repo ③ `DEVBOOK.md` ④ `/telemetry` |
| **Cỡ chữ** | Zoom trình duyệt 125-150%. Chữ nhỏ trong video là mất người xem. |
| **Ghi hình** | Toàn màn hình + mic. Không cần webcam. |
| **Không cần** | Kịch bản thuộc lòng, dựng phim, nhạc nền. |

> ⚠️ **Trước khi quay, dọn dữ liệu test** trong Supabase (xem `SIT-UAT-LF.md` §US-14
> mục 4.1) — để trên site không còn "Kiem thu RLS", "KT-357884".

---

## Kịch bản theo phút

### 0:00-0:30 · Mở đầu — nói ngay điều đắt nhất

> *"Đây là Local Food — bản đồ ẩm thực 63 tỉnh Việt Nam, tôi tự lái AI xây trong khoảng
> 17 giờ ngồi máy. Nhưng thứ tôi muốn khoe trong video này không phải cái website, mà là
> **những chỗ AI làm sai và tôi bắt được như thế nào**."*

**Màn hình:** trang chủ, cuộn nhẹ qua bản đồ.

**Vì sao mở kiểu này:** coach chấm *"phán xử của bạn"*, không chấm "AI trả lời hay".
Nói thẳng ra ngay từ giây thứ 20 là bạn hiểu đề.

---

### 0:30-1:30 · Demo sản phẩm chạy thật — nhanh gọn

Đây là **bằng chứng bắt buộc §8.3 mục 1**, nhưng đừng sa đà.

**Làm đúng 4 thao tác:**

1. Bản đồ toàn quốc → **63 marker cùng hiện**, marker là **ảnh món ăn thật**.
2. Zoom vào → marker to dần, hiện tên món.
3. Bấm 1 tỉnh → trang tỉnh, mở 1 món → mô tả, nguyên liệu, cách ăn, **nguồn tham chiếu**.
4. Gõ `pho` **không dấu** vào ô tìm kiếm → ra `phở`.

> **Câu nên nói khi bấm vào nguồn tham chiếu:**
> *"Mỗi món đều bắt buộc có nguồn — đây là ràng buộc ở tầng schema, thiếu nguồn thì
> build fail, không phải lời hứa suông."*

---

### 1:30-3:00 · Phần quan trọng nhất — AI sai chỗ nào, bắt bằng cách nào

**Màn hình:** mở `DEVBOOK.md` và `OPERATING-LOG-LF.md` trên GitHub.

Kể **đúng 3 chuyện** (đừng liệt kê hết 19 sự cố):

#### Chuyện 1 — Lỗi quy trình, ngay ngày đầu *(OP: DEVBOOK phần A)*

> *"Ngày đầu tiên, AI nhận đề rồi nhảy thẳng vào code, bỏ qua toàn bộ 7 bước đầu của
> Playbook. Nó chạy được, trông có vẻ ổn. Tôi bắt lại và bắt làm lại từ bước 0 — vì nếu
> để qua, tôi sẽ không giải thích được vì sao kiến trúc lại như thế."*

#### Chuyện 2 — Lỗi lọt qua **mọi** cổng chất lượng *(OP-06)*

**Màn hình:** mở `OPERATING-LOG-LF.md`, cuộn tới OP-06.

> *"Đây là lỗi tôi thích nhất. Marker tỉnh Khánh Hòa nằm giữa quần đảo Trường Sa, lệch
> 450km so với Nha Trang. Nó sống sót 12 ngày — qua zod validate, qua build sạch, và qua
> **cả một vòng QA mà chính tôi đã đánh PASS**. Nguyên nhân: toạ độ được tính là centroid
> hình học của polygon hành chính, mà polygon đó bao gồm cả huyện đảo Trường Sa. Toạ độ
> hoàn toàn hợp lệ về mặt dữ liệu — chỉ sai về mặt đời thực. Không schema nào bắt được.
> Nó chỉ lộ ra khi tôi mở rộng lên 63 marker và thấy có cái nổi giữa biển."*

**→ Đây chính là câu trả lời cho câu viva:** *"có lỗi nào đi qua toàn bộ quy trình chất
lượng của bạn mà vẫn lọt không?"*

#### Chuyện 3 — Suýt sửa nhầm *(OP-11)*

> *"Tôi cho kiểm 213 link nguồn, báo về 22 link hỏng. Nếu sửa hết theo báo cáo đó, tôi
> đã thay nhầm 19 nguồn đang tốt — chúng chỉ bị chặn script chứ không chết. Chỉ 3 link
> thật sự 404. Bài học: kiểm lại bằng công cụ khác trước khi kết luận."*

---

### 3:00-4:00 · Vì sao delegate mức này, không phải mức kia

**Màn hình:** `DELEGATION-MAP-LF.md`, rồi `DEVBOOK.md` phần B1.

> *"Tôi gán mức uỷ quyền **trước** khi giao việc. Code giao diện là L3 — sai thì thấy
> ngay, sửa rẻ, bắt tôi duyệt từng dòng chỉ là hình thức vì tôi không đọc code được.
> Nhưng bất cứ việc gì chạm secret hoặc ra ngoài đều là L4 cần cổng của tôi."*

**Ví dụ đắt nhất, nên kể:**

> *"Khi làm tính năng đánh giá, AI hoàn toàn có thể tự chạy SQL bật bảo mật RLS qua API.
> Nó không làm — nó viết SQL rồi đưa tôi tự chạy trên dashboard. Vì nếu policy sai thì
> bất kỳ ai cầm key công khai đều xoá sạch được bảng. Đây là chỗ dễ tặc lưỡi 'chạy hộ
> cho nhanh' nhất, và nó đã dừng đúng."*

**Rồi cho xem bằng chứng RLS thật sự chặt:**

> *"Và tôi không tin là 'đã chạy migration nên chắc ổn'. Chúng tôi **tự tấn công chính
> database của mình**: gửi review hợp lệ được 201, còn xoá cả bảng, sửa review người
> khác, lách kiểm duyệt — đều bị chặn 401."*

---

### 4:00-5:00 · Telemetry — và tự bác số của chính mình

**Màn hình:** mở `/telemetry` trên site production.

> *"Đây là dashboard đo chính quá trình làm ra nó."*

**Thao tác trực tiếp (đây là phần "vận hành được"):**

1. Chỉ vào Nén **34,3×**.
2. **Sửa giờ một phiên** → số Nén đổi ngay trước mắt.
3. Bấm **"Về số gốc"**.

> *"Nhưng con số 34 lần này tôi không dám nói to. Mẫu số là giờ tôi tự khai, tử số là
> 600 giờ tôi **ước lượng** nếu làm tay — không ai thực sự làm lại để đo. Và nó **không
> đo chất lượng**: ngay dưới đây, cổng hiệu năng LCP của tôi **KHÔNG ĐẠT**."*

**Cuộn xuống phần Cổng chất lượng, chỉ vào dòng đỏ.**

> *"Tôi để nó đỏ ngay trên dashboard chứ không giấu. Lý do: bản đồ là tính năng lõi,
> thư viện MapLibre nặng khoảng 1MB, tôi chọn giữ bản đồ và chấp nhận điểm xấu. Đó là
> đánh đổi có ý thức, ghi thành rủi ro R12."*

**Vì sao đoạn này quan trọng:** tự bác số của mình là dấu hiệu mạnh nhất của *không
rubber-stamp*. Coach nghe được điều này sẽ tin phần còn lại.

---

### 5:00-6:00 · Chỗ tôi làm sai quy trình, và sửa ngay trong dự án

**Màn hình:** `RTM-LF.md`, cuộn tới GAP-T2.

> *"Ma trận truy vết này tôi lập ra và nó tố ngược lại chính tôi. Tính năng tìm kiếm và
> bộ lọc: tôi yêu cầu bằng miệng, AI đưa thẳng vào kế hoạch rồi code luôn — **không ai
> viết user story**. Hệ quả: không có tiêu chí chấp nhận, nên không có test case. Hai
> tính năng đang chạy trên site mà chưa từng được kiểm chứng chính thức."*

> *"Ngay sau khi thấy điều đó, tính năng tiếp theo tôi làm **ngược lại**: viết story và
> tiêu chí chấp nhận **trước**, gồm cả các luồng lỗi, rồi mới code. Kết quả nằm ngay
> trong cùng bảng này — hai tính năng đó là **hai dòng duy nhất không mang cảnh báo nào**."*

**Vì sao đoạn này ăn điểm:** cho thấy quy trình **tự phát hiện lỗi của chính nó** và
bạn sửa ngay trong cùng dự án — không phải nhận lỗi cho có ở phần kết luận.

---

### 6:00-6:30 · Kết — nói điều còn thiếu

> *"Còn ba việc tôi biết là chưa xong. Rủi ro lớn nhất là nội dung: 63% số món không có
> nguồn Wikipedia, và tôi mới đọc lướt 15 trên 197 món — nên tôi **không tuyên bố nội
> dung đã được kiểm chứng**. Thay vào đó tôi mở kênh cho người đọc báo nội dung sai."*

**Màn hình:** vào một món bất kỳ, bấm tab **"Báo nội dung sai"**, cho thấy nó tách khỏi
việc chấm sao.

> *"Hiệu năng chưa đạt chuẩn tôi tự đặt, và một test case của tôi đã lỗi thời so với sản
> phẩm. Cả ba đều ghi trong hồ sơ. Tôi thà nộp một hồ sơ trông kém hoàn hảo mà đúng sự
> thật, còn hơn một hồ sơ đẹp mà không chống được câu hỏi đầu tiên."*

---

## Bảng đối chiếu — video đã trả lời hết câu hỏi viva bắt buộc chưa?

§8.4 nêu 4 câu xoáy **bắt buộc trả lời được**:

| Câu hỏi viva | Phút | Trả lời bằng |
|---|---|---|
| *"AI làm sai chỗ nào?"* | 1:30 | 3 chuyện thật, có file kèm |
| *"Em bắt được bằng cách nào?"* | 1:30, 3:00 | OP-06 (mắt thường trên bản đồ thật), OP-11 (kiểm chéo bằng công cụ khác) |
| *"Vì sao delegate mức L3 chứ không L4?"* | 3:00 | Code UI L3 vì sai thấy ngay; secret/deploy/RLS L4 |
| *"Cổng nào gác output này?"* | 3:00, 4:00 | zod + build + Cổng hiểu; và nói rõ cổng nào **fail-open** |

---

## Ba lỗi thường gặp — tránh

| ❌ Đừng | ✅ Nên |
|---|---|
| Dành 4 phút khoe giao diện đẹp | Tối đa 1 phút cho demo, dồn thời gian vào phán xử |
| Nói "AI làm hết, tôi chỉ review" | Nói rõ **bạn bắt được gì**, **dừng AI ở đâu** |
| Giấu chỗ chưa đạt | Chủ động nêu LCP fail, R2 còn mở, test lỗi thời |
| Đọc thuộc lòng kịch bản | Mở file thật, cuộn thật, để coach thấy đó là bằng chứng sống |

---

## Rút gọn còn 3 phút nếu bị giới hạn

Giữ đúng 4 đoạn, bỏ phần còn lại:

1. **0:00-0:20** — mở đầu ("thứ tôi khoe là chỗ AI sai")
2. **0:20-1:00** — demo nhanh: bản đồ 63 marker → 1 trang tỉnh
3. **1:00-2:15** — **OP-06** (marker giữa Trường Sa) + RLS tự tấn công
4. **2:15-3:00** — `/telemetry`: sửa số Nén trực tiếp + chỉ vào cổng LCP đỏ
