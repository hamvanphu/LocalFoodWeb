import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Client Supabase cho tính năng review/rating (ARCH-LF.md D3).
 *
 * Chỉ dùng anon key — key này lộ công khai trong bundle client đúng theo thiết kế
 * của Supabase, nên **toàn bộ việc bảo vệ dữ liệu nằm ở RLS phía database**
 * (RISK-LF.md R11), không nằm ở việc giấu key.
 */

export const REVIEW_MAX_COMMENT = 500;
export const REVIEW_MAX_NAME = 50;

export interface DishReview {
  id: string;
  province_slug: string;
  dish_slug: string;
  author_name: string;
  rating: number;
  comment: string | null;
  created_at: string;
}

export interface NewReview {
  provinceSlug: string;
  dishSlug: string;
  authorName: string;
  rating: number;
  comment: string;
}

let client: SupabaseClient | null = null;

/**
 * Trả về `null` khi thiếu biến môi trường, thay vì throw — để trang món ăn vẫn
 * render bình thường khi chưa cấu hình Supabase (AC của US-14: Supabase lỗi thì
 * chỉ khu vực đánh giá hỏng, không làm hỏng cả trang).
 */
export function getReviewClient(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;

  if (!client) {
    client = createClient(url, key, {
      auth: { persistSession: false }, // không có đăng nhập, không cần giữ session
    });
  }
  return client;
}

export function isReviewEnabled(): boolean {
  return getReviewClient() !== null;
}

/** Lỗi đã được diễn giải sang tiếng Việt để hiển thị thẳng cho người dùng. */
export class ReviewError extends Error {}

export async function fetchReviews(
  provinceSlug: string,
  dishSlug: string,
): Promise<DishReview[]> {
  const supabase = getReviewClient();
  if (!supabase) throw new ReviewError("Chưa cấu hình Supabase.");

  const { data, error } = await supabase
    .from("dish_reviews")
    .select("id, province_slug, dish_slug, author_name, rating, comment, created_at")
    .eq("province_slug", provinceSlug)
    .eq("dish_slug", dishSlug)
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) throw new ReviewError("Không tải được đánh giá.");
  return (data ?? []) as DishReview[];
}

/**
 * Kiểm tra phía client. Đây là lớp thứ nhất cho trải nghiệm tốt — lớp thật sự
 * bảo vệ dữ liệu là `check` constraint + RLS policy trong `supabase/schema.sql`.
 */
export function validateReview(input: NewReview): string | null {
  if (!Number.isInteger(input.rating) || input.rating < 1 || input.rating > 5) {
    return "Hãy chọn số sao từ 1 đến 5.";
  }
  const name = input.authorName.trim();
  if (!name) return "Hãy nhập tên của bạn.";
  if (name.length > REVIEW_MAX_NAME) {
    return `Tên tối đa ${REVIEW_MAX_NAME} ký tự.`;
  }
  if (input.comment.length > REVIEW_MAX_COMMENT) {
    return `Bình luận tối đa ${REVIEW_MAX_COMMENT} ký tự.`;
  }
  return null;
}

export async function submitReview(input: NewReview): Promise<DishReview> {
  const supabase = getReviewClient();
  if (!supabase) throw new ReviewError("Chưa cấu hình Supabase.");

  const invalid = validateReview(input);
  if (invalid) throw new ReviewError(invalid);

  const comment = input.comment.trim();

  // Cố tình KHÔNG gửi id/created_at/status: quyền ghi các cột đó đã bị thu hồi
  // ở cấp cột trong schema.sql, database tự sinh giá trị.
  const { data, error } = await supabase
    .from("dish_reviews")
    .insert({
      province_slug: input.provinceSlug,
      dish_slug: input.dishSlug,
      author_name: input.authorName.trim(),
      rating: input.rating,
      comment: comment.length > 0 ? comment : null,
    })
    .select("id, province_slug, dish_slug, author_name, rating, comment, created_at")
    .single();

  if (error) throw new ReviewError("Gửi đánh giá thất bại. Thử lại sau nhé.");
  return data as DishReview;
}

export function averageRating(reviews: DishReview[]): number | null {
  if (reviews.length === 0) return null;
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  return Math.round((sum / reviews.length) * 10) / 10;
}

/** "3 ngày trước", "vừa xong"… — tránh kéo thêm thư viện ngày tháng chỉ cho việc này. */
export function relativeTime(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const min = Math.floor(diff / 60000);
  if (min < 1) return "vừa xong";
  if (min < 60) return `${min} phút trước`;
  const hour = Math.floor(min / 60);
  if (hour < 24) return `${hour} giờ trước`;
  const day = Math.floor(hour / 24);
  if (day < 30) return `${day} ngày trước`;
  return new Date(iso).toLocaleDateString("vi-VN");
}
