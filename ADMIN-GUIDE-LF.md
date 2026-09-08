# Hướng dẫn quản trị — Local Food

> Dành cho PM. Nơi quản lý là **Supabase Dashboard**, không phải trang admin trên site.
>
> **Vì sao không làm trang /admin:** để đọc và sửa báo lỗi phải vượt qua RLS, tức cần
> `service_role` key. Key đó lọt vào code chạy phía trình duyệt là **bất kỳ ai cũng xoá
> sạch được database** — nặng hơn nhiều so với sự bất tiện phải mở Dashboard. Dashboard
> dùng key đó phía máy chủ của Supabase nên an toàn sẵn. Nếu sau này cần trang riêng,
> xem mục 4.

**Dashboard:** https://supabase.com/dashboard → project `local-food` → **SQL Editor**

---

## 1. Việc hằng ngày — xem có ai báo nội dung sai không

```sql
-- Báo lỗi nội dung CHƯA xử lý, mới nhất trước
select
  created_at at time zone 'Asia/Ho_Chi_Minh' as thoi_gian,
  province_slug  as tinh,
  dish_slug      as mon,
  author_name    as nguoi_bao,
  comment        as noi_dung_bao_loi
from dish_reviews
where kind = 'content_report'
  and status = 'visible'
order by created_at desc;
```

> 💡 Bấm **Save** để lưu câu này lại — lần sau chỉ cần mở và chạy.

**Quy ước trạng thái** *(không cần thêm cột mới)*:

| `status` | Với báo lỗi (`content_report`) | Với đánh giá (`review`) |
|---|---|---|
| `visible` | **Chưa xử lý** | Đang hiện công khai |
| `hidden` | **Đã xử lý xong** | Đã ẩn khỏi site (spam/không phù hợp) |

## 2. Sau khi sửa nội dung xong — đánh dấu đã xử lý

```sql
-- Thay <id> bằng id của báo lỗi (cột id trong kết quả câu 1)
update dish_reviews
set status = 'hidden'
where id = '<id>' and kind = 'content_report';
```

Hoặc xử lý gọn cả cụm cùng một món:

```sql
update dish_reviews
set status = 'hidden'
where kind = 'content_report'
  and province_slug = 'ten-tinh'
  and dish_slug = 'ten-mon';
```

## 3. Xử lý đánh giá spam hoặc không phù hợp

Không có kiểm duyệt trước khi đăng (rủi ro **R10**, đã chấp nhận công khai), nên phải
ẩn thủ công khi phát hiện.

```sql
-- Xem đánh giá công khai mới nhất
select
  id,
  created_at at time zone 'Asia/Ho_Chi_Minh' as thoi_gian,
  province_slug, dish_slug, author_name, rating, comment
from dish_reviews
where kind = 'review' and status = 'visible'
order by created_at desc
limit 50;
```

```sql
-- Ẩn một đánh giá khỏi site (KHÔNG xoá, giữ lại để đối chiếu nếu cần)
update dish_reviews set status = 'hidden' where id = '<id>';
```

> ⚠️ **Hạn chế đã biết:** không có thông báo tự động, nên spam có thể nằm trên site
> đến khi bạn tình cờ vào xem. Với site ít người truy cập thì chấp nhận được; đông lên
> thì cần bật thông báo ở mục 4.

## 4. Bật thông báo khi có báo lỗi mới *(chưa làm — chờ chọn kênh)*

Đây là khoảng trống **G4** trong `TRANSFORMATION-PLAN-LF.md`: hiện bạn chỉ biết có báo
lỗi khi chủ động chạy câu SQL ở mục 1.

**Cách làm — Supabase Database Webhook**, không cần viết thêm code phía server:

1. Dashboard → **Database** → **Webhooks** → **Create a new hook**
2. Table: `dish_reviews` · Events: **Insert**
3. Type: **HTTP Request** · Method: `POST` · URL: *(tuỳ kênh bạn chọn)*
4. Thêm điều kiện chỉ bắn khi là báo lỗi, không bắn với mọi đánh giá:
   ```
   record.kind = 'content_report'
   ```

**Chọn kênh — quyết định khi cần:**

| Kênh | Cần chuẩn bị | Đánh giá |
|---|---|---|
| **Discord / Slack** | Tạo Incoming Webhook trong kênh chat, lấy URL, dán vào bước 3 | **Đơn giản nhất** — không phải đăng ký dịch vụ nào, khoảng 10 phút |
| **Email** | Đăng ký dịch vụ gửi mail (Resend có gói miễn phí), lấy API key, cần một endpoint trung gian để đổi webhook thành email | Tiện nếu bạn ít dùng chat, nhưng nhiều bước hơn |

Khi đã chọn, báo để dựng nốt — phần khó (điều kiện lọc, định dạng nội dung thông báo)
đã nêu sẵn ở trên.

## 5. Dọn dữ liệu kiểm thử

Site hiện còn vài đánh giá do kiểm thử tự động sinh ra (`Kiem thu RLS`, `KT-…`,
`Nguoi kiem thu`, `US15-…`). PM đã chọn **giữ lại** cho site đỡ trống. Nếu muốn dọn hoặc
đổi tên cho tự nhiên hơn:

```sql
-- Xem trước cái sẽ bị ảnh hưởng
select id, author_name, rating, comment from dish_reviews
where author_name in ('Kiem thu RLS','Nguoi kiem thu','KT US15')
   or author_name like 'KT-%' or author_name like 'US15-%'
   or province_slug = '__test__';

-- Đổi tên cho tự nhiên (giữ lại nội dung)
update dish_reviews set author_name = 'Khách ghé thăm'
where author_name like 'KT-%' or author_name like 'US15-%';

-- Hoặc xoá hẳn
delete from dish_reviews
where author_name in ('Kiem thu RLS','Nguoi kiem thu','KT US15')
   or author_name like 'KT-%' or author_name like 'US15-%'
   or province_slug = '__test__';
```

> Phải làm từ Dashboard vì anon key **cố ý không có quyền** `UPDATE`/`DELETE` — đó là
> RLS đang làm đúng việc, không phải thiếu sót.

## 6. Kiểm tra định kỳ sức khoẻ bảo mật

Chạy lại bất cứ lúc nào để chắc RLS còn nguyên:

```sql
-- Phải trả về true
select relrowsecurity from pg_class where relname = 'dish_reviews';

-- Phải đúng 2 policy: 1 SELECT, 1 INSERT. Không được có UPDATE/DELETE
select policyname, cmd from pg_policies where tablename = 'dish_reviews';
```

Nếu thấy xuất hiện policy `UPDATE` hoặc `DELETE` cho vai trò `anon` thì **dừng lại
kiểm tra ngay** — nghĩa là ai đó (hoặc một migration) đã mở quyền cho người ngoài
sửa/xoá dữ liệu.
