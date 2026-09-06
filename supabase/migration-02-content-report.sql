-- =====================================================================
-- Migration 02 — thêm kênh "Báo nội dung sai" (US-15)
--
-- Bối cảnh: PM chốt hướng xử lý RISK R2 là phát hiện sai sót qua phản hồi
-- người đọc. Form đánh giá hiện tại chỉ để chấm sao món ăn, không phù hợp
-- để báo "nguyên liệu này viết sai" — nên tách thành một loại bản ghi riêng.
--
-- CÁCH DÙNG: dán toàn bộ file này vào Supabase → SQL Editor → Run.
-- Chạy lại nhiều lần được (idempotent). Chạy SAU `schema.sql`.
-- =====================================================================

-- ---------------------------------------------------------------------
-- 1. Thêm cột phân loại bản ghi
-- ---------------------------------------------------------------------
alter table public.dish_reviews
  add column if not exists kind text not null default 'review';

-- Ràng buộc đặt rời để chạy lại không lỗi "constraint đã tồn tại"
alter table public.dish_reviews
  drop constraint if exists dish_reviews_kind_check;
alter table public.dish_reviews
  add constraint dish_reviews_kind_check
  check (kind in ('review', 'content_report'));

-- Báo nội dung sai thì rating không bắt buộc (người báo lỗi không chấm điểm món),
-- nhưng đánh giá món thì vẫn bắt buộc có sao. Ràng buộc này ép đúng cả 2 chiều.
alter table public.dish_reviews
  alter column rating drop not null;

alter table public.dish_reviews
  drop constraint if exists dish_reviews_rating_by_kind_check;
alter table public.dish_reviews
  add constraint dish_reviews_rating_by_kind_check
  check (
    (kind = 'review'         and rating is not null and rating between 1 and 5)
    or
    (kind = 'content_report' and rating is null)
  );

-- Báo lỗi mà không mô tả gì thì vô dụng → bắt buộc có nội dung
alter table public.dish_reviews
  drop constraint if exists dish_reviews_report_needs_comment_check;
alter table public.dish_reviews
  add constraint dish_reviews_report_needs_comment_check
  check (
    kind <> 'content_report'
    or (comment is not null and char_length(trim(comment)) >= 10)
  );

-- ---------------------------------------------------------------------
-- 2. Cập nhật RLS
--
-- Báo lỗi KHÔNG hiện công khai: chỉ PM đọc qua dashboard (dashboard dùng
-- service key nên bỏ qua RLS). Vừa tránh làm rối người đọc, vừa tránh biến
-- kênh báo lỗi thành chỗ spam hiển thị công khai.
-- ---------------------------------------------------------------------
drop policy if exists "doc review dang hien" on public.dish_reviews;
create policy "doc review dang hien"
  on public.dish_reviews
  for select
  to anon, authenticated
  using (status = 'visible' and kind = 'review');

drop policy if exists "ai cung gui duoc review" on public.dish_reviews;
create policy "ai cung gui duoc review"
  on public.dish_reviews
  for insert
  to anon, authenticated
  with check (
    status = 'visible'
    and kind in ('review', 'content_report')
    and char_length(author_name) between 1 and 50
    and char_length(coalesce(comment, '')) <= 500
    and (
      (kind = 'review'         and rating between 1 and 5)
      or
      (kind = 'content_report' and rating is null
                               and char_length(trim(coalesce(comment, ''))) >= 10)
    )
  );

-- ---------------------------------------------------------------------
-- 3. Cho phép ghi cột `kind` (các cột khác giữ nguyên như schema.sql)
-- ---------------------------------------------------------------------
grant insert (province_slug, dish_slug, author_name, rating, comment, kind)
  on public.dish_reviews to anon, authenticated;

-- ---------------------------------------------------------------------
-- 4. Kiểm tra sau khi chạy — đừng bỏ qua
-- ---------------------------------------------------------------------
-- 4.1 Cột kind đã có và có ràng buộc:
--   select column_name, is_nullable, column_default
--   from information_schema.columns
--   where table_name = 'dish_reviews' and column_name in ('kind','rating');
--     -> kind: NOT NULL, default 'review'   |   rating: YES (cho phép null)
--
-- 4.2 Vẫn đúng 2 policy:
--   select policyname, cmd from pg_policies where tablename = 'dish_reviews';
--     -> 1 SELECT, 1 INSERT. Không có UPDATE/DELETE.
--
-- 4.3 Xem các báo lỗi nội dung người đọc đã gửi (PM chạy định kỳ):
--   select created_at, province_slug, dish_slug, author_name, comment
--   from dish_reviews
--   where kind = 'content_report'
--   order by created_at desc;
