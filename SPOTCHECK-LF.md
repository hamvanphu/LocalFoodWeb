# Spot-check nội dung — Local Food

> **Mục đích:** kiểm rủi ro **R2 (hallucination nội dung ẩm thực)**. Đây là rủi ro
> **lớn nhất còn mở** của dự án. `pnpm build` chỉ chứng minh dữ liệu **đúng schema**
> và **có nguồn** — nó **không** chứng minh nội dung **đúng sự thật**.
>
> Lập ngày **2026-09-06**.

---

## 1. Bức tranh rủi ro — đo trên toàn bộ 63 tỉnh

| Chỉ số | Giá trị |
|---|---|
| Tổng `sourceRef` của món | 222 |
| Món **có** nguồn Wikipedia | 73 |
| Món **không** có nguồn Wikipedia | **124 (63%)** |
| Tỉnh có **cả 3 món** đều không có Wikipedia | **21 / 63** |

**Top nguồn được dùng:** `vi.wikipedia.org` (70), `mia.vn` (14), `vnexpress.net` (12),
`ivivu.com` (10), `vietnamnet.vn` (8), `danviet.vn` (6), `luhanhvietnam.com.vn` (5).

→ Sau Wikipedia và vài báo lớn, phần còn lại chủ yếu là **site du lịch/thương mại**
(`mia.vn`, `ivivu.com`, `vinwonders.com`, `luhanhvietnam.com.vn`). Các site này viết
nội dung du lịch, **không có quy trình kiểm chứng như báo chí hay bách khoa** — đây
chính là chỗ rủi ro R2 tập trung.

**21 tỉnh rủi ro cao nhất:** Bắc Kạn, Bạc Liêu, Bình Dương, Cao Bằng, Đà Nẵng,
Đắk Lắk, Điện Biên, Đồng Nai, Hà Giang, Hòa Bình, Kon Tum, Lai Châu, Lạng Sơn,
Long An, Nam Định, Nghệ An, Phú Thọ, Quảng Bình, Tuyên Quang, Vĩnh Phúc, Yên Bái.

---

## 2. 🔴 Link nguồn đã chết — phát hiện bằng máy

Đã kiểm **toàn bộ 213 URL duy nhất**. Kết quả: **191 OK**, 22 có vấn đề — trong đó
sau khi thử lại bằng User-Agent trình duyệt, **3 link chết thật**:

| Tỉnh | Món | Link hỏng | Lỗi |
|---|---|---|---|
| Hải Phòng | Ốc Hải Phòng | `sunparadiseland.com/...` | **404** |
| Quảng Trị | Bánh ướt Phương Lang | `ipa.quangtri.gov.vn/...` | **404** *(cổng TTĐT tỉnh)* |
| Thái Nguyên | Bánh chưng Bờ Đậu | `khuyennong.thainguyen.gov.vn/...` | **404** |

Các trường hợp còn lại là **chặn bot / lỗi chứng chỉ SSL của site**, không phải link
sai: `vietnamnet.vn` (7 link, chặn request tự động), `vinpearl.com` (403),
`hanam.gov.vn` + `laocaitourism.vn` (chứng chỉ hết hạn), v.v. — mở bằng trình duyệt
vẫn vào được.

> **Ý nghĩa cho hồ sơ:** zod ép **có** `sourceRef` nhưng không kiểm nguồn **còn sống**.
> Đây là khoảng trống thật giữa "validate PASS" và "nội dung đáng tin". Ghi vào
> `DEVBOOK.md` + `RISK-LF.md` R2.

---

## 3. Phiếu spot-check — 5 tỉnh chọn ngẫu nhiên

**Cách chọn:** bốc ngẫu nhiên từ **21 tỉnh rủi ro cao nhất** (không phải từ cả 63),
với seed cố định `20260906` để ai chạy lại cũng ra đúng mẫu này — tránh vô tình
chọn toàn tỉnh dễ.

**Mẫu:** Tuyên Quang · Kon Tum · Long An · Đồng Nai · Cao Bằng

### Cách làm (khoảng 30–40 phút)

Với mỗi món, đọc phần "Nội dung cần soi" và tự hỏi:

1. **Món này có thật là đặc sản của tỉnh đó không**, hay là món phổ biến cả nước bị
   gán nhầm cho một tỉnh?
2. **Nguyên liệu và cách ăn có đúng** với hiểu biết của bạn không? Có chi tiết nào
   nghe "sai sai" không?
3. **Bấm thử link nguồn** — trang đó có thực sự nói về món này không, hay chỉ là bài
   liệt kê chung chung không đủ chống lưng cho các chi tiết đã viết?

Đánh dấu cột cuối: `✅` đúng · `⚠️` ngờ ngợ, cần tra thêm · `❌` sai rõ ràng.

---

### Tuyên Quang

**Tóm tắt tỉnh:** Tuyên Quang nằm bên dòng sông Lô, sông Gâm, là nơi cộng cư của người Tày, Nùng với nền ẩm thực gắn liền với sông nước và bánh trái truyền thống. Bánh gai Chiêm Hóa, vịt bầu Minh Hương và cá lăng sông Lô là những sản vật tiêu biểu, kết tinh từ nguồn nguyên liệu bản địa và bàn tay khéo léo của người dân nơi đây.

*Nguồn tóm tắt:* [Bánh gai Chiêm Hóa vào mùa - Báo Tuyên Quang](https://baotuyenquang.com.vn/banh-gai-chiem-hoa-vao-mua-179493.html)

| # | Món | Nội dung cần soi | Nguồn | Đúng? |
|---|---|---|---|---|
| 1 | **Bánh gai Chiêm Hóa** ⭐ | **Mô tả:** Bánh gai Chiêm Hóa là sản vật nổi tiếng của người Tày huyện Chiêm Hóa, Tuyên Quang, làm từ gạo nếp hoa vàng và lá gai phơi khô, tước gân, thái nhỏ, luộc rồi giã nhuyễn trộn vào bột làm vỏ bánh. Nhân bánh gồm đậu xanh, dừa tươi, mỡ lợn ướp đường tạo độ giòn béo mà không ngấy, gói ngoài bằng lá chuối khô thơm đặc trưng. Bánh thường được làm nhiều vào dịp Rằm tháng Bảy để dâng cúng tổ tiên, thể hiện lòng hiếu thảo của các gia đình người Tày, Nùng.<br><br>**Nguyên liệu:** gạo nếp hoa vàng, lá gai, đậu xanh, dừa tươi, mỡ lợn, lá chuối khô gói bánh<br><br>**Cách ăn:** Bánh gai bóc bỏ lớp lá chuối, ăn nguội, thường được bày trên mâm cúng tổ tiên dịp Rằm tháng Bảy hoặc dùng làm quà biếu mang đậm hương vị quê hương. | [Bánh gai Chiêm Hóa vào mùa - Báo Tuyên Quang](https://baotuyenquang.com.vn/banh-gai-chiem-hoa-vao-mua-179493.html) | ☐ |
| 2 | **Vịt bầu Minh Hương** | **Mô tả:** Vịt bầu Minh Hương, còn gọi là vịt suối, là giống vịt bản địa lâu đời của xã Minh Hương, huyện Hàm Yên, Tuyên Quang, được nuôi thả tự nhiên ở các khe suối nên thịt chắc, ngọt và ít mỡ. Năm 2016, nhãn hiệu "Vịt bầu Minh Hương" đã được Cục Sở hữu trí tuệ công nhận, trở thành niềm tự hào ẩm thực của vùng đất Hàm Yên. Vịt thường được luộc hoặc hấp cùng xôi nếp để giữ trọn vị ngọt tự nhiên của thịt.<br><br>**Nguyên liệu:** vịt bầu Minh Hương, gạo nếp thơm, sả, rau răm, nước mắm, tỏi<br><br>**Cách ăn:** Vịt bầu Minh Hương ăn nóng ngay sau khi chặt, dùng kèm xôi nếp và chấm nước mắm gừng hoặc mắm rau răm. | [Vịt bầu Minh Hương Tuyên Quang vì sao lại nổi tiếng?](https://dulichnahang.com/vit-bau-minh-huong-tuyen-quang-vi-sao-lai-noi-tieng-gia-ca-va-noi-ban-bid107.html) | ☐ |
| 3 | **Cá lăng sông Lô** | **Mô tả:** Cá lăng là loài cá da trơn có râu, sống ở tầng đáy sông Lô đoạn chảy qua Tuyên Quang, nơi nhiều phù sa bồi đắp giúp cá phát triển thịt chắc và thơm ngon. Đây là loài cá có giá trị kinh tế cao, giàu dinh dưỡng và được người dân địa phương chế biến thành nhiều món như nướng, om chuối đậu hay nấu canh chua, trở thành sản vật tiêu biểu gắn với dòng sông Lô hiền hòa.<br><br>**Nguyên liệu:** cá lăng sông Lô, chuối xanh, đậu phụ (khi om), nghệ, mẻ, riềng, rau thơm, thì là<br><br>**Cách ăn:** Cá lăng sông Lô ngon nhất khi ăn nóng, chấm cùng nước mắm gừng nếu nướng, hoặc dùng kèm bún, cơm khi chế biến thành món om, canh chua. | [Tuyên Quang: Các loài cá quý hiếm trên sông Lô, sông Gâm - Tạp chí Thủy sản Việt Nam](https://thuysanvietnam.com.vn/tuyen-quang-cac-loai-ca-quy-hiem-tren-song-lo-song-gam/) | ☐ |

### Kon Tum

**Tóm tắt tỉnh:** Kon Tum là tỉnh cực Bắc Tây Nguyên, nơi sinh sống của nhiều dân tộc Bahnar, Xơ Đăng, Giẻ Triêng với nền ẩm thực gắn liền rừng núi. Ẩm thực Kon Tum nổi bật với các món ăn nhiều rau lá rừng, thịt heo bản địa và các đặc sản mới phát triển ở vùng khí hậu mát mẻ Măng Đen như cá tầm.

*Nguồn tóm tắt:* [Đặc sản gỏi lá Kon Tum – Dân tộc và Phát triển (VietNamNet)](https://dantocphattrien.vietnamnet.vn/dac-san-goi-la-kon-tum-65711.html)

| # | Món | Nội dung cần soi | Nguồn | Đúng? |
|---|---|---|---|---|
| 1 | **Gỏi lá Kon Tum** ⭐ | **Mô tả:** Gỏi lá là món ăn đặc trưng và được xem là 'quốc hồn' ẩm thực Kon Tum, quy tụ từ 30 đến hơn 60 loại lá khác nhau như lá lộc vừng, lá sung, lá ổi, lá xoài non, chùm ruột, đinh lăng... cuộn cùng thịt heo, tôm và bì heo, chấm với nước chấm lên men đặc biệt nấu từ gạo nếp và tôm khô.<br><br>**Nguyên liệu:** 30-60 loại lá rừng (lộc vừng, sung, ổi, đinh lăng...), thịt ba chỉ luộc, tôm, bì heo trộn thính, nước chấm lên men từ gạo nếp, tôm khô, thịt băm<br><br>**Cách ăn:** Chọn vài loại lá cuốn thành phễu, cho thịt, tôm, bì heo vào giữa, chấm ngập nước chấm lên men rồi ăn trọn miếng, nên đổi nhiều loại lá khác nhau trong một bữa để cảm nhận đủ vị chát – chua – bùi – cay. | [Đặc sản gỏi lá Kon Tum – Dân tộc và Phát triển (VietNamNet)](https://dantocphattrien.vietnamnet.vn/dac-san-goi-la-kon-tum-65711.html) | ☐ |
| 2 | **Heo Măng Đen nướng** | **Mô tả:** Heo Măng Đen là giống heo bản địa được người dân tộc thiểu số ở vùng cao nguyên Măng Đen (huyện Kon Plông) nuôi thả rông tự nhiên, ăn rau củ và côn trùng rừng nên thịt săn chắc, ít mỡ và có vị ngọt tự nhiên, khác hẳn heo nuôi công nghiệp.<br><br>**Nguyên liệu:** thịt heo Măng Đen (heo sọc dưa), mắc khén, tiêu rừng, sả, ớt, lá é hoặc lá rừng<br><br>**Cách ăn:** Ăn nóng ngay khi vừa nướng xong, chấm muối tiêu rừng hoặc muối é, thường dùng kèm rượu cần trong các bữa tiệc cộng đồng. | [Top 10 món ăn ngon ở Măng Đen (nguồn tham khảo du lịch, không phải Wikipedia)](https://khamphamangden.vn/mon-ngon-mang-den/) | ☐ |
| 3 | **Cá tầm Măng Đen** | **Mô tả:** Nhờ khí hậu mát lạnh quanh năm giống Đà Lạt, vùng Măng Đen phát triển nghề nuôi cá tầm nước lạnh trong những năm gần đây, trở thành một đặc sản mới nổi thu hút du khách. Cá tầm được chế biến thành các món nướng, lẩu hoặc hấp, thịt chắc, ít xương dăm và giàu dinh dưỡng.<br><br>**Nguyên liệu:** cá tầm nuôi Măng Đen, sả, nghệ, măng chua (nếu nấu lẩu), rau rừng ăn kèm, muối ớt xanh<br><br>**Cách ăn:** Ăn nóng, chấm muối ớt xanh nếu nướng, hoặc nhúng lẩu cùng rau rừng và bún nếu chế biến kiểu lẩu chua. | [Top 10 món ăn ngon ở Măng Đen (nguồn tham khảo du lịch, không phải Wikipedia)](https://khamphamangden.vn/mon-ngon-mang-den/) | ☐ |

### Long An

**Tóm tắt tỉnh:** Long An là cửa ngõ giữa Đông Nam Bộ và Đồng bằng sông Cửu Long, nơi những cánh đồng lúa và kênh rạch trù phú nuôi dưỡng một nền ẩm thực đậm chất sông nước miền Tây. Lạp xưởng tươi Cần Đước, cá lóc nướng trui và các món canh chua, lẩu mắm là những món ăn gắn bó lâu đời với đời sống người dân nơi đây.

*Nguồn tóm tắt:* [Lạp xưởng tươi Cần Đước Long An (Hút Chân Không Xanh) — nguồn báo chí, chưa có bài Wikipedia riêng](https://hutchankhongxanh.com/lap-xuong-tuoi-can-duoc-long-an/)

| # | Món | Nội dung cần soi | Nguồn | Đúng? |
|---|---|---|---|---|
| 1 | **Lạp xưởng tươi Cần Đước** ⭐ | **Mô tả:** Lạp xưởng tươi Cần Đước là đặc sản gắn liền với vùng Rạch Kiến, huyện Cần Đước, Long An, có lịch sử hơn 300 năm bắt nguồn từ một gia đình người Hoa làm nghề mổ heo lập nghiệp tại đây. Khác với lạp xưởng khô phơi nắng lâu ngày, lạp xưởng tươi Cần Đước có vị chua ngọt đặc trưng, bề mặt còn hơi ẩm, điểm những hạt mỡ đỏ hồng như hạt lựu, không cần phơi khô hoàn toàn nên giữ được độ mềm và vị ngọt tự nhiên của thịt.<br><br>**Nguyên liệu:** Thịt heo nạc vai tươi, Mỡ heo thái hạt lựu, Ruột heo non làm vỏ bọc, Đường, muối, rượu trắng, ngũ vị hương, Tiêu hạt<br><br>**Cách ăn:** Lạp xưởng tươi được chiên, nướng hoặc chưng cách thủy đến khi chín vàng, cắt lát xiên chéo, ăn kèm dưa chua, rau sống và cơm nóng hoặc bánh mì. | [Lạp xưởng tươi Cần Đước Long An (Hút Chân Không Xanh) — nguồn báo chí, chưa có bài Wikipedia riêng](https://hutchankhongxanh.com/lap-xuong-tuoi-can-duoc-long-an/) | ☐ |
| 2 | **Cá lóc nướng trui Long An** | **Mô tả:** Cá lóc nướng trui là món ăn dân dã, mộc mạc bậc nhất của người dân Long An và cả vùng Tây Nam Bộ, được xem là dễ chế biến nhất mà vẫn giữ trọn vị ngọt tự nhiên của cá đồng. Cá lóc vừa bắt lên còn tươi, không cần đánh vảy hay làm ruột, được xiên que từ đầu đến đuôi rồi vùi trong đống rơm đốt cho đến khi cháy xém lớp vảy ngoài, thịt bên trong chín thơm ngọt.<br><br>**Nguyên liệu:** Cá lóc đồng tươi (còn sống hoặc vừa bắt), Rơm khô để nướng, Bún tươi, bánh tráng, Rau sống các loại mọc dại (rau đắng, húng, diếp cá...), Nước mắm me hoặc muối ớt chấm kèm<br><br>**Cách ăn:** Cá lóc nướng trui được gỡ thịt, cuốn cùng bánh tráng nhúng nước, bún tươi và rau sống, chấm vào chén mắm me hoặc muối ớt chanh. | [Cá lóc nướng trui Long An (Bazan Travel) — nguồn báo chí, chưa có bài Wikipedia riêng](https://bazantravel.com/ca-loc-nuong-trui-long-an/) | ☐ |
| 3 | **Lẩu mắm Long An** | **Mô tả:** Lẩu mắm là món ăn dân dã nhưng chứa đựng nét văn hóa ẩm thực truyền thống lâu đời của người dân Long An, vùng đất giáp ranh giữa Đông Nam Bộ và Đồng bằng sông Cửu Long. Nước lẩu được nấu từ mắm cá linh hoặc mắm cá sặc hòa cùng nước hầm xương, dậy mùi thơm nồng đặc trưng, vị cay của ớt và vị ngọt của hải sản, thịt heo hòa quyện tạo nên món lẩu đậm đà khó quên.<br><br>**Nguyên liệu:** Mắm cá linh hoặc mắm cá sặc, Nước hầm xương heo, Cá lóc, tôm, mực, thịt heo ba chỉ, Cà tím, đậu bắp, Sả, tỏi, ớt, Rau ăn kèm: bông súng, bông điên điển, rau đắng, rau muống<br><br>**Cách ăn:** Nồi lẩu được giữ sôi trên bếp, thực khách nhúng cá, tôm, mực, thịt và rau vào nước lẩu đang sôi, ăn kèm bún tươi và chấm thêm nước mắm ớt. | [Top đặc sản Long An: lẩu mắm (iVIVU) — nguồn báo chí, chưa có bài Wikipedia riêng](https://www.ivivu.com/blog/2023/05/top-9-dac-san-long-an-mang-huong-vi-mien-que-ngon-tru-danh/) | ☐ |

### Đồng Nai

**Tóm tắt tỉnh:** Đồng Nai nằm bên dòng sông Đồng Nai và nổi tiếng với làng bưởi Tân Triều trăm năm tuổi, tạo nên một nền ẩm thực kết hợp giữa thủy sản nước ngọt và trái cây đặc sản. Gỏi cá Biên Hòa, các món chế biến từ bưởi và những đặc sản của vùng Long Khánh làm nên bản sắc ẩm thực đa dạng của tỉnh.

*Nguồn tóm tắt:* [Bưởi Tân Triều – sản vật nức tiếng của vùng đất Đồng Nai (Bộ Công Thương)](https://moit.gov.vn/tu-hao-hang-viet-nam/buoi-tan-trieu-san-vat-nuc-tieng-cua-vung-dat-dong-nai.html)

| # | Món | Nội dung cần soi | Nguồn | Đúng? |
|---|---|---|---|---|
| 1 | **Gỏi cá Biên Hòa** ⭐ | **Mô tả:** Gỏi cá Biên Hòa là đặc sản lâu đời của thành phố Biên Hòa, tận dụng nguồn cá lóc đồng tươi ngon đánh bắt từ sông Đồng Nai. Cá được lóc da, lọc bỏ xương, thái lát mỏng, ướp cùng muối, tiêu, đường, chanh, ớt rồi trộn với rất nhiều loại rau thơm và nước sốt chua ngọt, tạo nên món gỏi tươi mát, đậm đà rất riêng của vùng đất ven sông này.<br><br>**Nguyên liệu:** Cá lóc đồng tươi (đánh bắt từ sông Đồng Nai), Muối, tiêu, đường, chanh, ớt để ướp, Rau thơm: đinh lăng, húng quế, ngò gai, tía tô, diếp cá, Đậu phộng rang, bánh tráng, Nước mắm chua ngọt pha sốt đặc<br><br>**Cách ăn:** Dùng bánh tráng hoặc lá rau cuốn miếng cá đã ướp cùng các loại rau thơm, cuộn chặt lại rồi chấm ngập vào chén nước sốt chua ngọt, có thể rắc thêm đậu phộng rang lên trên. | [Gỏi cá Biên Hòa – món đặc sản của Đồng Nai (Việt Giải Trí) — nguồn báo chí, chưa có bài Wikipedia riêng](https://vietgiaitri.com/goi-ca-bien-hoa-mon-dac-san-ngon-tuyet-cua-dong-nai-20211108i6142826/) | ☐ |
| 2 | **Gỏi bưởi Tân Triều** | **Mô tả:** Gỏi bưởi là món ăn tận dụng đặc sản bưởi Tân Triều — giống bưởi vỏ xanh, mỏng, vị ngọt thanh không đắng của vùng Tân Triều, Vĩnh Cửu, Đồng Nai. Múi bưởi được tách tơi ra rồi trộn cùng tôm, thịt hoặc chỉ đơn giản với rau thơm và nước mắm chua ngọt, tạo nên món gỏi thanh mát, chua ngọt hài hòa, thường xuất hiện trong các bữa cơm gia đình và tại khu du lịch làng bưởi.<br><br>**Nguyên liệu:** Bưởi Tân Triều (tách múi, tơi thịt), Tôm luộc hoặc thịt ba chỉ luộc, Cà rốt bào sợi, Rau răm, húng quế, Đậu phộng rang, Nước mắm chua ngọt pha tỏi ớt<br><br>**Cách ăn:** Gỏi bưởi được ăn kèm bánh phồng tôm chiên giòn để xúc, rắc thêm đậu phộng rang lên trên trước khi thưởng thức. | [Làng bưởi Tân Triều với đặc sản nức tiếng Đồng Nai (Mia.vn) — nguồn báo chí, chưa có bài Wikipedia riêng](https://mia.vn/cam-nang-du-lich/lang-buoi-tan-trieu-nuc-tieng-dong-nai-14216) | ☐ |
| 3 | **Gà hấp bưởi Tân Triều** | **Mô tả:** Gà hấp bưởi là món ăn sáng tạo của người dân vùng Tân Triều nhằm tận dụng lá và vỏ bưởi thơm đặc trưng của địa phương. Gà ta được hấp cùng lá bưởi hoặc vỏ bưởi bào mỏng, giúp thịt gà thấm mùi thơm the dịu rất riêng, khác hẳn với gà hấp lá chanh hay hấp muối thông thường.<br><br>**Nguyên liệu:** Gà ta, Lá bưởi hoặc vỏ bưởi Tân Triều bào mỏng, Sả, gừng, Muối, hạt nêm, Rau răm ăn kèm<br><br>**Cách ăn:** Gà hấp bưởi được chặt miếng, ăn kèm rau răm và chấm muối tiêu chanh hoặc muối ớt, thường dùng trong các bữa tiệc gia đình. | [Top món đặc sản Đồng Nai: gà hấp bưởi Tân Triều (Mia.vn) — nguồn báo chí, chưa có bài Wikipedia riêng](https://mia.vn/cam-nang-du-lich/dac-san-dong-nai-12294) | ☐ |

### Cao Bằng

**Tóm tắt tỉnh:** Cao Bằng là tỉnh biên giới địa đầu Đông Bắc, nơi cộng cư của người Tày, Nùng với nền ẩm thực đậm chất núi rừng, gắn liền với mắc mật, thịt vịt và các món chế biến từ bột gạo. Phở chua trộn khô, vịt quay bảy vị và bánh cuốn chan canh xương là những món ăn tiêu biểu làm nên bản sắc riêng của vùng đất non nước Cao Bằng.

*Nguồn tóm tắt:* [Hương vị phở chua Cao Bằng - Báo Cao Bằng điện tử](https://baocaobang.vn/Huong-vi-pho-chua-Cao-Bang-38371.html)

| # | Món | Nội dung cần soi | Nguồn | Đúng? |
|---|---|---|---|---|
| 1 | **Phở chua Cao Bằng** ⭐ | **Mô tả:** Phở chua là món ăn đặc trưng và lâu đời của Cao Bằng, khác hẳn phở nước quen thuộc vì đây là món phở trộn khô, ăn nguội. Bánh phở Cao Bằng dẻo và dai đặc trưng được trộn cùng thịt ba chỉ rán giòn, khoai tàu chiên (loại củ chỉ có ở Cao Bằng, Bắc Kạn), gan, dạ dày lợn, thịt vịt quay và rau thơm, sau đó rưới nước sốt chua ngọt lên trên. Món ăn thường xuất hiện vào mùa hè vì tính mát và thanh, được xem là niềm tự hào ẩm thực của người dân xứ Lạng núi.<br><br>**Nguyên liệu:** bánh phở Cao Bằng, thịt ba chỉ rán, khoai tàu chiên, gan, dạ dày lợn, thịt vịt quay, nước sốt chua ngọt, rau thơm, lạc rang<br><br>**Cách ăn:** Phở chua ăn nguội, trộn đều tất cả nguyên liệu với nước sốt ngay trước khi ăn, thường dùng làm món khai vị hoặc quà chiều tại các quán vỉa hè thành phố Cao Bằng. | [Hương vị phở chua Cao Bằng - Báo Cao Bằng điện tử](https://baocaobang.vn/Huong-vi-pho-chua-Cao-Bang-38371.html)<br>[Phở chua, trải nghiệm ẩm thực vùng cao - Sức khỏe & Đời sống](https://suckhoedoisong.vn/pho-chua-trai-nghiem-am-thuc-vung-cao-169240829154236004.htm) | ☐ |
| 2 | **Vịt quay 7 vị Cao Bằng** | **Mô tả:** Vịt quay 7 vị là đặc sản trứ danh của Cao Bằng, chế biến từ vịt bầu nuôi thả tự nhiên, thịt chắc và ít mỡ. Vịt được nhồi lá mắc mật cùng bảy loại gia vị gồm gừng, tỏi, hành khô, hạt tiêu, mật ong, đậu phụ và quả mắc mật, sau đó quay trên than hoa và phết mật ong nhiều lần để lớp da vàng bóng, giòn rụm. Vị chua nhẹ của mắc mật hòa cùng vị ngọt của mật ong tạo nên hương vị đặc trưng không lẫn với vịt quay ở bất cứ vùng nào khác.<br><br>**Nguyên liệu:** vịt bầu Cao Bằng, lá và quả mắc mật, mật ong, gừng, tỏi, hành khô, hạt tiêu, đậu phụ<br><br>**Cách ăn:** Vịt quay chặt miếng vừa ăn, chấm với nước mắm pha gừng hoặc nước lòng vịt chua ngọt, thường ăn kèm cơm hoặc dùng làm nhân bánh cuốn, phở chua. | [Món vịt quay 7 vị - Đặc sản Cao Bằng - Mytour](https://mytour.vn/vi/blog/bai-viet/vit-quay-7-vi-hoa-quyen-huong-vi-cuon-hut-long-nguoi.html) | ☐ |
| 3 | **Bánh cuốn canh Cao Bằng** | **Mô tả:** Bánh cuốn Cao Bằng là món ăn dân dã của người Tày, làm từ bột gạo địa phương xay mịn, tráng mỏng rồi cuộn với nhân thịt băm hoặc trứng gà. Điểm khác biệt lớn nhất so với bánh cuốn các vùng khác là người Cao Bằng không chấm nước mắm chua ngọt mà chan bánh cuốn với bát nước canh ninh từ xương lợn, thêm măng chua và ớt, tạo nên một món ăn sáng ấm nóng đặc trưng của vùng cao.<br><br>**Nguyên liệu:** bột gạo Cao Bằng, thịt lợn băm hoặc trứng gà, xương lợn ninh nước dùng, măng chua, rau mùi, húng, ớt<br><br>**Cách ăn:** Bánh cuốn ăn nóng, chan cùng nước canh xương thay vì chấm nước mắm, rắc thêm rau mùi, húng và ớt tươi tùy khẩu vị, phổ biến làm món điểm tâm sáng ở thành phố Cao Bằng. | [Độc đáo món bánh cuốn chan nước canh ở Cao Bằng - VTC News](https://vtcnews.vn/doc-dao-mon-banh-cuon-chan-nuoc-canh-o-cao-bang-dac-san-dan-da-da-an-la-nho-mai-ar672976.html) | ☐ |


---

## 4. Kết luận sau khi kiểm (PM điền)

| Chỉ số | Kết quả |
|---|---|
| Số món đã soi | 15 |
| ✅ Đúng | ______ |
| ⚠️ Cần tra thêm | ______ |
| ❌ Sai rõ ràng | ______ |

**Suy rộng ra toàn bộ 197 món:** nếu tỉ lệ sai trong mẫu là `X%`, thì kỳ vọng có
khoảng `197 × X%` món có vấn đề trên toàn site. Ghi con số này vào `WEEKLY-LF.md`
và nói thẳng ở viva — đó là **ước lượng có phương pháp**, tốt hơn nhiều so với
"tôi tin là nội dung đúng".

**Ngưỡng đề xuất để quyết định:**

- **0 ❌** → R2 hạ xuống mức chấp nhận được, ghi rõ đã spot-check 15/197 món (7,6%).
- **1–2 ❌** → sửa ngay các món sai, mở rộng spot-check thêm 5 tỉnh nữa.
- **≥3 ❌** → vấn đề mang tính hệ thống, không phải cá biệt. Cần rà lại toàn bộ nhóm
  21 tỉnh rủi ro cao trước khi nộp bài, và ghi rõ hạn chế này trong hồ sơ viva.

---

## 🔒 Cổng hiểu — spot-check

1. Sau khi soi xong, **nói được ít nhất 1 chi tiết cụ thể** mà bạn đã tự kiểm chứng
   (đúng hoặc sai) — không phải "đọc thấy ổn".
2. Nếu **không tìm thấy lỗi nào**, hãy tự hỏi: mẫu này đã đủ khó chưa? 5/63 tỉnh và
   15/197 món là **7,6%** — đó là mẫu nhỏ, không phải bằng chứng toàn site. Nói đúng
   phạm vi đã kiểm khi trình bày, đừng khái quát quá.

---

## 5. ✅ Kết quả — PM ghi nhận 2026-09-06

**Mức độ đã kiểm: đọc lướt 15 món, không thấy chi tiết nào bất thường. Chưa đối
chiếu từng chi tiết với nguồn.**

Ghi đúng như vậy, **không nâng thành "đã spot-check kỹ, 0 lỗi"** — vì cổng hiểu của
bước này yêu cầu nói được ít nhất 1 chi tiết cụ thể đã tự kiểm chứng, và điều đó chưa
xảy ra. Ghi quá lên chính là **R3 (rubber-stamping)** — rủi ro mà PM đã bắt AI mắc ở
ngay đầu dự án.

| Chỉ số | Kết quả |
|---|---|
| Số món đã đọc lướt | 15 / 197 (7,6%) |
| Số món đã đối chiếu chi tiết với nguồn | **0** |
| ❌ Sai rõ ràng phát hiện được | 0 |

**Giá trị thật của kết quả này:** đủ để nói *"đọc qua không thấy gì bất thường"*,
**không đủ** để nói *"nội dung đã được kiểm chứng"*. Ở viva nên phát biểu đúng mức đó.

### Quyết định của PM về R2

> *"Nếu có sai thì phần review sẽ có người vào comment, lúc ấy ghi nhận và update."*

Chuyển hướng mitigation từ **kiểm trước khi nộp** sang **phát hiện sau khi vận hành**
(crowdsourcing). Đây là lựa chọn hợp lý cho dự án học thuật có deadline, **với điều
kiện** phải thừa nhận 3 giới hạn:

1. **Cần có người dùng thật.** Site vừa deploy 2026-09-06, chưa ai biết tới. Đám đông
   để crowdsource hiện tại bằng 0 → mitigation này **chưa hoạt động vào lúc nộp bài**.
2. **Cần kênh báo lỗi phù hợp.** Form đánh giá là để chấm sao món ăn, không phải để
   báo "nguyên liệu này sai". → **Đã xử lý:** bổ sung US-15 (nút *Báo nội dung sai*).
3. **Cần cơ chế để PM biết có báo lỗi.** Không có thông báo thì báo lỗi nằm im trong
   database. → Hiện PM phải chủ động xem Supabase dashboard; ghi rõ là hạn chế.

**Phát biểu trung thực ở viva:** *"Tôi spot-check ở mức đọc lướt trên mẫu 15/197 món
chọn ngẫu nhiên từ nhóm rủi ro cao nhất, không phát hiện sai rõ ràng. Tôi không tuyên
bố nội dung đã được kiểm chứng đầy đủ — thay vào đó tôi mở kênh cho người đọc báo nội
dung sai, và chấp nhận đây là mitigation vận hành chứ chưa phải bảo đảm trước khi nộp."*
