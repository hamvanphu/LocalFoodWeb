"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, AlertCircle, Loader2, Send } from "lucide-react";
import StarRating from "./StarRating";
import {
  fetchReviews,
  submitReview,
  validateReview,
  averageRating,
  relativeTime,
  isReviewEnabled,
  REVIEW_MAX_COMMENT,
  REVIEW_MAX_NAME,
  type DishReview,
} from "@/lib/reviews";

interface DishReviewsProps {
  provinceSlug: string;
  dishSlug: string;
  dishName: string;
}

/** Chặn gửi lặp liên tiếp — rào chắn tối thiểu cho RISK R10 (không có pre-moderation). */
const COOLDOWN_MS = 30_000;
const cooldownKey = (p: string, d: string) => `lf-review-sent:${p}:${d}`;

export default function DishReviews({ provinceSlug, dishSlug, dishName }: DishReviewsProps) {
  const enabled = isReviewEnabled();

  const [reviews, setReviews] = useState<DishReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [justSent, setJustSent] = useState(false);

  const load = useCallback(async () => {
    if (!enabled) {
      setLoading(false);
      return;
    }
    try {
      setReviews(await fetchReviews(provinceSlug, dishSlug));
      setLoadError(false);
    } catch {
      setLoadError(true);
    } finally {
      setLoading(false);
    }
  }, [enabled, provinceSlug, dishSlug]);

  useEffect(() => {
    void load();
  }, [load]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError(null);

    const input = { provinceSlug, dishSlug, authorName: name, rating, comment };
    const invalid = validateReview(input);
    if (invalid) {
      setFormError(invalid);
      return;
    }

    // localStorage có thể ném lỗi (chế độ riêng tư, chặn site data) — không để
    // việc kiểm tra chống spam làm hỏng hẳn chức năng gửi.
    try {
      const last = window.localStorage.getItem(cooldownKey(provinceSlug, dishSlug));
      if (last && Date.now() - Number(last) < COOLDOWN_MS) {
        setFormError("Bạn vừa gửi đánh giá cho món này. Đợi một chút rồi thử lại nhé.");
        return;
      }
    } catch {
      /* bỏ qua, vẫn cho gửi */
    }

    setSending(true);
    try {
      const saved = await submitReview(input);
      setReviews((prev) => [saved, ...prev]);
      setRating(0);
      setName("");
      setComment("");
      setJustSent(true);
      setTimeout(() => setJustSent(false), 4000);
      try {
        window.localStorage.setItem(cooldownKey(provinceSlug, dishSlug), String(Date.now()));
      } catch {
        /* bỏ qua */
      }
    } catch (err) {
      setFormError(err instanceof Error ? err.message : "Gửi đánh giá thất bại.");
    } finally {
      setSending(false);
    }
  }

  // Chưa cấu hình Supabase: ẩn hẳn khối này, phần nội dung món vẫn nguyên vẹn.
  if (!enabled) return null;

  const avg = averageRating(reviews);

  return (
    <section className="mt-8 border-t border-border pt-6" aria-labelledby={`reviews-${dishSlug}`}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h4
          id={`reviews-${dishSlug}`}
          className="flex items-center gap-2 font-display text-lg font-semibold text-ink"
        >
          <MessageSquare className="h-5 w-5 text-chili" aria-hidden="true" />
          Đánh giá món này
        </h4>
        {avg !== null && (
          <div className="flex items-center gap-2 text-sm">
            <StarRating value={Math.round(avg)} readOnly size={16} label={`Trung bình ${avg} trên 5 sao`} />
            <span className="font-medium text-ink">{avg}</span>
            <span className="text-ink/70">({reviews.length} đánh giá)</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="mt-4 rounded-card bg-surface-muted p-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-medium text-ink">Bạn thấy món này thế nào?</span>
          <StarRating
            value={rating}
            onChange={setRating}
            label={`Chấm điểm cho ${dishName}`}
          />
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-[minmax(0,14rem)_1fr]">
          <label className="block">
            <span className="sr-only">Tên của bạn</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={REVIEW_MAX_NAME}
              placeholder="Tên của bạn"
              className="w-full rounded-control border border-border bg-surface px-3 py-2 text-sm text-ink placeholder:text-ink/50 focus:border-chili focus:ring-2 focus:ring-chili/30 focus:outline-none"
            />
          </label>
          <label className="block">
            <span className="sr-only">Bình luận</span>
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              maxLength={REVIEW_MAX_COMMENT}
              placeholder="Cảm nhận của bạn (không bắt buộc)"
              className="w-full rounded-control border border-border bg-surface px-3 py-2 text-sm text-ink placeholder:text-ink/50 focus:border-chili focus:ring-2 focus:ring-chili/30 focus:outline-none"
            />
          </label>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-ink/65">
            {comment.length}/{REVIEW_MAX_COMMENT} ký tự
          </span>
          <button
            type="submit"
            disabled={sending}
            className="flex items-center gap-2 rounded-pill bg-chili px-4 py-2 text-sm font-medium text-white shadow-soft transition hover:bg-chili-dark disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chili"
          >
            {sending ? (
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            ) : (
              <Send className="h-4 w-4" aria-hidden="true" />
            )}
            {sending ? "Đang gửi…" : "Gửi đánh giá"}
          </button>
        </div>

        {/* role="alert" để trình đọc màn hình thông báo ngay, không chỉ đổi màu chữ */}
        {formError && (
          <p role="alert" className="mt-3 flex items-center gap-2 text-sm text-chili-dark">
            <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            {formError}
          </p>
        )}
        {justSent && (
          <p role="status" className="mt-3 text-sm text-herb-dark">
            Cảm ơn bạn đã đánh giá!
          </p>
        )}
      </form>

      <div className="mt-5">
        {loading ? (
          <p className="text-sm text-ink/70">Đang tải đánh giá…</p>
        ) : loadError ? (
          <p className="flex items-center gap-2 text-sm text-ink/70">
            <AlertCircle className="h-4 w-4 shrink-0 text-amber-dark" aria-hidden="true" />
            Chưa tải được đánh giá lúc này. Nội dung món ăn phía trên vẫn xem bình thường.
          </p>
        ) : reviews.length === 0 ? (
          <p className="text-sm text-ink/70">
            Chưa có đánh giá nào cho món này — bạn là người đầu tiên nhé!
          </p>
        ) : (
          <ul className="space-y-3">
            <AnimatePresence initial={false}>
              {reviews.map((r) => (
                <motion.li
                  key={r.id}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-card border border-border bg-surface p-3"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <StarRating value={r.rating} readOnly size={14} />
                    <span className="text-sm font-medium text-ink">{r.author_name}</span>
                    <span className="text-xs text-ink/65">{relativeTime(r.created_at)}</span>
                  </div>
                  {r.comment && <p className="mt-1.5 text-sm text-ink/80">{r.comment}</p>}
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        )}
      </div>
    </section>
  );
}
