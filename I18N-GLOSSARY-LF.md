# Quy ước dịch Việt → Anh — Local Food

> Bắt buộc đọc trước khi dịch bất kỳ nội dung nào. Không có quy ước này thì mỗi lượt
> dịch sẽ ra một kiểu, và ẩm thực Việt sẽ bị "dịch phẳng" thành món Tây.
>
> Nguyên tắc gốc, theo yêu cầu PM: **cái gì đặc trưng thì giữ tiếng Việt.**

---

## 1. Nguyên tắc

**Giữ nguyên tiếng Việt, kèm giải thích ngắn ở lần xuất hiện đầu tiên trong mỗi trường.**

> ✅ `nước mắm (Vietnamese fish sauce)` — lần đầu, rồi `nước mắm` ở các lần sau
> ❌ `fish sauce` — mất bản sắc, và không phải mọi fish sauce đều là nước mắm

**Không dịch tên món.** Tên món là danh từ riêng của văn hoá ẩm thực.

> ✅ `Phở bò Hà Nội` · `Bún bò Huế` · `Mì Quảng` · `Cao lầu`
> ❌ `Hanoi Beef Noodle Soup` · `Hue Spicy Beef Noodles`

Trường `name` của món **giữ nguyên 100%**, kể cả ở bản tiếng Anh. Nếu cần chú thích thì
đặt trong `description`, không sửa `name`.

**Không dịch tên tỉnh, tên làng nghề, tên địa danh.**

> ✅ `Thừa Thiên Huế` · `làng Vũ Đại` · `Chợ Huyện` · `Bờ Đậu`

---

## 2. Bảng thuật ngữ — GIỮ tiếng Việt

### Nước chấm, gia vị lên men

| Tiếng Việt | Giải thích kèm lần đầu |
|---|---|
| nước mắm | Vietnamese fish sauce |
| mắm tôm | fermented shrimp paste |
| mắm ruốc | fermented shrimp/krill paste |
| mắm nêm | fermented anchovy sauce |
| mắm bò hóc *(Khmer: prahok)* | fermented fish paste |
| tương | fermented soybean sauce |
| chao | fermented bean curd |
| mẻ | fermented rice starter |

### Gia vị, hương liệu đặc trưng

| Tiếng Việt | Giải thích kèm lần đầu |
|---|---|
| mắc khén | Northwest Vietnamese wild pepper |
| hạt dổi | *doi* seed, an aromatic highland spice |
| thính | roasted ground rice |
| riềng | galangal |
| sả | lemongrass |
| nghệ | turmeric |
| lá lốt | wild betel leaf |
| lá é | a basil variety used in the Central Highlands |
| củ nén | Vietnamese shallot-garlic |
| lá mắc mật | *mac mat* leaf |

### Rau thơm — giữ nguyên, kèm giải thích ngắn

`rau răm` (Vietnamese coriander) · `tía tô` (perilla) · `kinh giới` (Vietnamese balm) ·
`ngò gai` (sawtooth herb) · `húng quế` (Thai basil) · `diếp cá` (fish mint) ·
`rau đắng` (bitter herb) · `lá sung` (young fig leaf) · `đinh lăng` (*dinh lang* leaf)

### Nhóm sợi và bánh — giữ nguyên

`bún` · `phở` · `miến` · `hủ tiếu` · `bánh canh` · `bánh phở` · `bánh đa` ·
`bánh tráng` (rice paper) · `bánh hỏi` · `cơm lam` · `xôi`

### Món/kỹ thuật đặc trưng

`chả` · `giò` · `nem` · `chạo` · `gỏi` · `nộm` · `lẩu` · `kho` · `rim` ·
`nướng trui` · `hấp` · `luộc` · `om`

### Đơn vị, dụng cụ

`ống tre` (bamboo tube) · `nồi đất` (clay pot) · `khuôn đúc` (cast-iron mould) ·
`than hoa` (charcoal) · `lá chuối` (banana leaf) · `lá dong` (*dong* leaf)

---

## 3. Được phép dịch bình thường

Nguyên liệu **phổ thông, không mang bản sắc**:

| Tiếng Việt | English |
|---|---|
| thịt lợn / thịt heo | pork |
| thịt bò | beef |
| thịt gà | chicken |
| tôm | shrimp |
| cua | crab |
| cá (các loại thường) | fish |
| trứng | egg |
| gạo | rice |
| đường | sugar |
| muối | salt |
| tiêu | pepper |
| tỏi | garlic |
| hành | onion / shallot |
| ớt | chilli |
| dừa | coconut |
| đậu xanh | mung bean |

**Cách viết** (`prepOutline`, `howToEat`): dịch tự nhiên sang tiếng Anh, dùng câu mệnh
lệnh ngắn gọn như công thức nấu ăn tiếng Anh thường viết.

---

## 4. Cách viết giải thích kèm

Chỉ giải thích **lần đầu trong mỗi trường**, không lặp lại:

> ✅ `"Bún chả gồm bún, chả nướng và nước chấm pha từ nước mắm (Vietnamese fish sauce). Nước mắm ở đây pha loãng hơn miền Nam."`
> ❌ `"…nước mắm (Vietnamese fish sauce)… nước mắm (Vietnamese fish sauce)…"`

Với **tên món trong `description`**, chú thích ngắn bằng loại món:

> `"Cao lầu, a noodle dish found only in Hội An, …"`

---

## 4b. ⚠️ Không tra bảng một cách máy móc — kiểm ngữ cảnh trước

Bản dịch thử tỉnh Hà Nội phát hiện **ba chỗ mà tra bảng mù sẽ dịch sai**. Đọc kỹ:

| Từ | Bẫy | Xử lý đúng |
|---|---|---|
| **chao** | Bảng ghi `chao` = fermented bean curd (**danh từ**). Nhưng trong "chao mỡ" thì `chao` là **động từ** — nhúng/đảo nhanh trong mỡ nóng | Dịch theo nghĩa động từ: *swirl / dip in hot fat*. **Không** thành "fermented bean curd" |
| **bánh tráng** | Bảng ghi `bánh tráng` (rice paper) — đúng với **bánh tráng khô** để cuốn. Nhưng trong bánh cuốn, đó là **lá bánh ướt vừa hấp**, không phải rice paper | Dùng *steamed rice sheet*, hoặc giữ `bánh tráng` nhưng gloss đúng loại. Không gán nhầm "rice paper" |
| **Tên loài cá cụ thể** | Mục 3 ghi "cá (các loại thường) → fish", dễ bị hiểu là dịch phẳng mọi loại cá | Loài có tên riêng thì **giữ tiếng Việt + gloss**: `cá lăng` (river catfish), `cá lóc` (snakehead), `cá nhệch` (rice-paddy eel), `cá bống` (goby), `cá mai` (silverside). Chỉ "cá" chung chung mới dịch thành *fish* |

**Nguyên tắc rút ra:** bảng thuật ngữ là **gợi ý theo nghĩa**, không phải lệnh thay thế
chuỗi. Trước khi giữ nguyên một từ trong bảng, hỏi: *ở câu này nó có đúng nghĩa đó không?*

**Bổ sung vào bảng giữ tiếng Việt:**

`quất` (a Vietnamese kumquat) · `cá lăng` (river catfish) · `cá lóc` (snakehead fish) ·
`cá nhệch` (rice-paddy eel) · `cá bống` (goby) · `cá mai` (silverside) ·
`chả lụa` / `giò` (Vietnamese pork sausage) · `bún lá` · `bún rối`

**Được dịch bình thường** (không nằm trong bảng, không mang bản sắc riêng):
`thì là` → dill · `hành phi` → fried shallot · `thúng` → basket

**Tên người theo địa phương:** dùng *"<Tên tỉnh> locals"*, không tạo từ phái sinh kiểu
"Hanoians" — vì nó làm biến dạng tên tỉnh vốn phải giữ nguyên.

## 4c. Bẫy phát hiện thêm khi dịch 62 tỉnh còn lại *(2026-09-09)*

Mười agent dịch song song đã đâm vào **bốn bẫy nữa** cùng dạng với mục 4b — cùng một mặt
chữ nhưng khác nghĩa theo ngữ cảnh:

| Từ | Bẫy | Xử lý đúng |
|---|---|---|
| **cao lâu** | Mục 1 của chính tài liệu này lấy `Cao lầu` làm ví dụ **tên món phải giữ nguyên**. Nhưng trong Nam Định, "các tiệm cao lâu của Hoa kiều" nghĩa là **tiệm ăn kiểu người Hoa** (酒樓) — không liên quan gì tới món Hội An | `cao lâu (Chinese-style restaurants)`. Giữ nguyên mà không gloss ở đây sẽ thành vô nghĩa |
| **mắm** | Cà Mau: "sống dưới gốc đước, mắm" — `đước` và `mắm` ở đây là **hai loài cây ngập mặn**, không phải nước chấm lên men | *the roots of đước and mắm mangroves*. Tra bảng mù sẽ ra "fermented sauce tree" |
| **nước mắm** | Cần Thơ, lẩu mắm: "hoà với nước mắm đã lọc" trỏ ngược về **nước cốt mắm cá đã lọc ở bước trên**, không phải nước mắm | *the strained mắm liquid*. Nước mắm thật xuất hiện ở `howToEat` và được gloss ở đó |
| **tráng** | Cao Bằng: "tráng mỏng" là **động từ** — tráng bột thành lá mỏng. Cùng dạng bẫy với `chao mỡ` | *spread thin*. Không dính dáng tới `bánh tráng` |

**Về `bánh tráng` — cả hai nghĩa đều xuất hiện thật trong dữ liệu:**

- `bánh mướt`, `bánh cuốn trứng` → **lá bánh ướt vừa hấp** (*steamed rice sheet*)
- `cá lóc nướng trui` (cuốn), `don Quảng Ngãi` (bẻ vào canh) → **bánh tráng khô thật**,
  *rice paper* là đúng

**Từ ghép: không áp máy móc nghĩa của từ đơn.**

| Từ ghép | Đúng |
|---|---|
| `tương ớt` | chilli sauce — **không** phải fermented soybean sauce |
| `tương đen` | giữ nguyên + *dark fermented soybean sauce* |
| `tương xay` | giữ nguyên + *thick ground fermented soybean sauce* (ở đây `tương` **đúng** là đậu tương) |
| `mắm tôm chà` | giữ nguyên cả cụm — **khác** `mắm tôm`, là mắm tôm đã chà qua rây |
| `nước mắm me` | giữ nguyên cả cụm + *a tamarind dip made with Vietnamese fish sauce* |
| `cá thính` | cá ướp `thính`, **không** phải một loài cá |

**Quy tắc đặt tên loài: không bịa tên tiếng Anh.** Loài có tên tiếng Anh chắc chắn thì
gloss (`cá lóc` snakehead, `cá sặc bổi` snakeskin gourami, `cá hồi vân` rainbow trout).
Loài **không** có tên tương ứng đáng tin thì gloss đúng những gì bản gốc nói, không hơn:
`cá linh` → *a small Mekong river fish*, `cá cháy` → *a rare brackish-water fish*,
`khoai tàu` → *a tuber found only in Cao Bằng and Bắc Kạn*. Bịa tên loài là bịa thông tin
(vi phạm mục 5.2).

**Sửa một mục trong bảng:** gloss của `mắc khén` ở mục 2 ghi *"Northwest Vietnamese wild
pepper"*, nhưng nó cũng xuất hiện ở Đắk Lắk (Tây Nguyên) — dùng gloss trung tính về địa
lý: ***a wild Vietnamese mountain pepper***.

**Bổ sung vào nhóm giữ tiếng Việt** (gom từ 10 lượt dịch): `một nắng` · `ba khía` ·
`mực ống` · `mực lá` · `bông súng` · `bông điên điển` · `kèo nèo` · `rau đắng` ·
`lá bép` · `đọt mây` · `cà đắng` · `rêu đá` · `hoa ban` · `chẩm chéo` · `lá vông` ·
`ấu tẩu` · `đường phên` · `nước hàng` · `nước màu` · `mạch nha` · `lá gai` · `lá cẩm` ·
`lá cách` · `cát lồi` · `củ kiệu` · `dưa món` · `hành tăm` · `cải mèo` · `tiêu rừng` ·
`địa điền` · `sá sùng` · `kiến vàng` · `muối kiến vàng` · `muối tôm` · `sa tế` ·
`riêu cua` · `cơm tấm` · `quẩy` · `lạp xưởng` · `măng chua` · `thính` · `vịt bầu` ·
`gà ta` · `chuối sứ` · `chuối chát` · `ốc gạo` · `hến` · `lươn đồng` · `tràm`.

**Epithet vùng miền = tên riêng, giữ nguyên:** `xứ Lạng` · `thành Nam` · `xứ Nghệ` ·
`đất mỏ` · `núi Ấn sông Trà`.

**Bổ sung nhóm dịch bình thường:** `khoai môn` → taro · `ngũ vị hương` → five-spice ·
`mộc nhĩ` → wood ear · `giá đỗ` → bean sprouts · `củ sắn` → jicama · `cà tím` → aubergine ·
`đậu bắp` → okra · `lá chanh` → lime leaf · `bột năng` → tapioca starch ·
`tam giác mạch` → buckwheat · `atiso` → artichoke.

## 5. Điều tuyệt đối không làm

1. **Không "Tây hoá" món ăn.** `bánh xèo` không phải "Vietnamese pancake" — nó là
   `bánh xèo`, một loại bánh chiên giòn nhân tôm thịt.
2. **Không bịa thông tin khi dịch.** Nếu bản tiếng Việt không nói món này ăn kèm gì thì
   bản tiếng Anh **cũng không được thêm vào**. Dịch là dịch, không phải viết lại.
3. **Không đổi `sourceRefs`.** Nguồn tham chiếu giữ nguyên URL và nhãn gốc — chúng trỏ
   tới bài viết tiếng Việt.
4. **Không đổi số lượng phần tử** trong `keyIngredients` và `prepOutline`. Bao nhiêu
   mục tiếng Việt thì đúng bấy nhiêu mục tiếng Anh, cùng thứ tự — để đối chiếu được.
5. **Không dịch `name` của món và tỉnh.**

---

## 6. Kiểm chất lượng bản dịch

Sau khi dịch, mỗi tỉnh phải thoả:

- [ ] `name` món và tỉnh **y hệt** bản tiếng Việt
- [ ] Số phần tử `keyIngredients` và `prepOutline` **khớp** bản tiếng Việt
- [ ] Thuật ngữ trong bảng mục 2 **được giữ nguyên**, không bị dịch phẳng
- [ ] Không thêm thông tin không có trong bản gốc
- [ ] Đọc lên tự nhiên với người nói tiếng Anh, không phải dịch từng chữ
