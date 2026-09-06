-- =====================================================================
-- Local Food — bảng review/rating cho món ăn
-- Thiết kế theo ARCH-LF.md quyết định D3. Rủi ro liên quan: RISK-LF.md R10, R11.
--
-- CÁCH DÙNG: dán toàn bộ file này vào Supabase → SQL Editor → Run.
-- Chạy lại nhiều lần được (idempotent).
-- =====================================================================

-- ---------------------------------------------------------------------
-- 1. Bảng dish_reviews
-- ---------------------------------------------------------------------
create table if not exists public.dish_reviews (
  id            uuid primary key default gen_random_uuid(),

  -- Khoá "mềm" trỏ tới dữ liệu tĩnh trong data/provinces/*.json.
  -- Không có FK vì nội dung món ăn nằm ở file JSON, không nằm trong DB (D3).
  province_slug text        not null check (char_length(province_slug) between 1 and 60),
  dish_slug     text        not null check (char_length(dish_slug)     between 1 and 60),

  -- Không có đăng nhập → tên là tự khai, không xác thực được (D3).
  author_name   text        not null check (char_length(author_name) between 1 and 50),

  rating        int         not null check (rating between 1 and 5),
  comment       text                 check (char_length(comment) <= 500),

  created_at    timestamptz not null default now(),

  -- 'hidden' để PM tự ẩn thủ công qua dashboard khi gặp spam.
  -- KHÔNG có kiểm duyệt trước khi đăng — rủi ro đã chấp nhận, xem RISK R10.
  status        text        not null default 'visible'
                            check (status in ('visible', 'hidden'))
);

-- Truy vấn chính: lấy review của 1 món, mới nhất trước.
create index if not exists dish_reviews_lookup_idx
  on public.dish_reviews (province_slug, dish_slug, created_at desc);

-- ---------------------------------------------------------------------
-- 2. Row Level Security — BẮT BUỘC, không phải tuỳ chọn (RISK R11)
--
-- anon key luôn lộ công khai trong bundle client (đúng thiết kế Supabase).
-- Không bật RLS = bất kỳ ai cầm key đó đọc/sửa/xoá được toàn bộ bảng.
-- ---------------------------------------------------------------------
alter table public.dish_reviews enable row level security;

drop policy if exists "doc review dang hien" on public.dish_reviews;
create policy "doc review dang hien"
  on public.dish_reviews
  for select
  to anon, authenticated
  using (status = 'visible');   -- review bị ẩn thì người ngoài không đọc được

drop policy if exists "ai cung gui duoc review" on public.dish_reviews;
create policy "ai cung gui duoc review"
  on public.dish_reviews
  for insert
  to anon, authenticated
  with check (
    status = 'visible'          -- chặn tự đăng thẳng vào trạng thái 'hidden'
    and rating between 1 and 5
    and char_length(author_name) between 1 and 50
    and char_length(coalesce(comment, '')) <= 500
  );

-- KHÔNG tạo policy UPDATE và DELETE.
-- Không có policy = thao tác đó bị từ chối. Người ngoài không sửa/xoá được
-- review của người khác. Việc ẩn review do PM làm thủ công trong dashboard
-- (dashboard dùng service key, bỏ qua RLS).

-- ---------------------------------------------------------------------
-- 3. Giới hạn quyền theo CỘT
--
-- RLS kiểm soát được DÒNG nào, nhưng không chặn được client tự ghi đè
-- id/created_at/status. Phải dùng GRANT ở cấp cột (đúng yêu cầu "giới hạn
-- field" trong D3).
-- ---------------------------------------------------------------------
revoke all on public.dish_reviews from anon, authenticated;

grant select on public.dish_reviews to anon, authenticated;

-- Chỉ 5 cột này được ghi. id / created_at / status luôn dùng giá trị default.
grant insert (province_slug, dish_slug, author_name, rating, comment)
  on public.dish_reviews to anon, authenticated;

-- ---------------------------------------------------------------------
-- 4. Kiểm tra sau khi chạy
-- ---------------------------------------------------------------------
-- Chạy 2 câu dưới để tự xác nhận, đừng tin là "chắc xong rồi":
--
--   select relrowsecurity from pg_class where relname = 'dish_reviews';
--     -> phải trả về  true
--
--   select policyname, cmd from pg_policies where tablename = 'dish_reviews';
--     -> phải có ĐÚNG 2 dòng: 1 SELECT, 1 INSERT. Nếu thấy UPDATE/DELETE
--        thì có gì đó sai, dừng lại kiểm tra.
