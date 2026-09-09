"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, AlertCircle, Loader2, Send, Star, Flag } from "lucide-react";
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
  type ReviewKind,
} from "@/lib/reviews";
import { t } from "@/lib/ui-strings";
import type { Locale } from "@/lib/locale";

interface DishReviewsProps {
  provinceSlug: string;
  dishSlug: string;
  dishName: string;
  locale?: Locale;
}

/** Chặn gửi lặp liên tiếp — rào chắn tối thiểu cho RISK R10 (không có pre-moderation). */
const COOLDOWN_MS = 30_000;
// Tách theo `kind`: vừa chấm sao xong mà phát hiện nội dung sai thì vẫn báo được ngay,
// không bị chặn oan bởi cooldown của hành động khác.
const cooldownKey = (p: string, d: string, k: ReviewKind) => `lf-review-sent:${k}:${p}:${d}`;

export default function DishReviews({
  provinceSlug,
  dishSlug,
  dishName,
  locale = "vi",
}: DishReviewsProps) {
  const enabled = isReviewEnabled();

  const [reviews, setReviews] = useState<DishReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  const [kind, setKind] = useState<ReviewKind>("review");
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [justSent, setJustSent] = useState<ReviewKind | null>(null);

  const isReport = kind === "content_report";

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

    const input = {
      provinceSlug,
      dishSlug,
      authorName: name,
      rating: isReport ? null : rating,
      comment,
      kind,
    };
    const invalid = validateReview(input, locale);
    if (invalid) {
      setFormError(invalid);
      return;
    }

    // localStorage có thể ném lỗi (chế độ riêng tư, chặn site data) — không để
    // việc kiểm tra chống spam làm hỏng hẳn chức năng gửi.
    try {
      const last = window.localStorage.getItem(cooldownKey(provinceSlug, dishSlug, kind));
      if (last && Date.now() - Number(last) < COOLDOWN_MS) {
        setFormError(
          t(locale, isReport ? "review.cooldownReport" : "review.cooldownReview"),
        );
        return;
      }
    } catch {
      /* bỏ qua, vẫn cho gửi */
    }

    setSending(true);
    try {
      const saved = await submitReview(input);
      // Báo nội dung sai trả về null (không đọc lại được, đúng thiết kế) —
      // chỉ thêm vào danh sách khi đó là đánh giá thật.
      if (saved) setReviews((prev) => [saved, ...prev]);
      setRating(0);
      setName("");
      setComment("");
      setJustSent(kind);
      setTimeout(() => setJustSent(null), 5000);
      try {
        window.localStorage.setItem(cooldownKey(provinceSlug, dishSlug, kind), String(Date.now()));
      } catch {
        /* bỏ qua */
      }
    } catch (err) {
      setFormError(err instanceof Error ? err.message : t(locale, "review.failed"));
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
          {t(locale, "review.title")}
        </h4>
        {avg !== null && (
          <div className="flex items-center gap-2 text-sm">
            <StarRating value={Math.round(avg)} readOnly size={16} label={t(locale, "review.avgLabel", { avg })} />
            <span className="font-medium text-ink">{avg}</span>
            <span className="text-ink/70">{t(locale, "review.count", { n: reviews.length })}</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="mt-4 rounded-card bg-surface-muted p-4">
        {/* Tách "chấm sao món ăn" khỏi "báo nội dung sai": người muốn báo bài viết
            sai không nên bị buộc chấm sao thấp, làm hỏng điểm của chính món ăn. */}
        <div className="flex flex-wrap gap-2" role="tablist" aria-label={t(locale, "review.kindLabel")}>
          {([
            { k: "review" as const, icon: Star, text: t(locale, "review.tabReview") },
            { k: "content_report" as const, icon: Flag, text: t(locale, "review.tabReport") },
          ]).map(({ k, icon: Icon, text }) => (
            <button
              key={k}
              type="button"
              role="tab"
              aria-selected={kind === k}
              onClick={() => {
                setKind(k);
                setFormError(null);
              }}
              className={`flex items-center gap-1.5 rounded-pill px-3 py-1.5 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chili ${
                kind === k
                  ? "bg-chili text-white shadow-soft"
                  : "bg-surface text-ink/75 hover:text-ink"
              }`}
            >
              <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              {text}
            </button>
          ))}
        </div>

        {isReport ? (
          <p className="mt-3 text-sm text-ink/75">
            {t(locale, "review.reportLead")}{" "}
            <strong className="text-ink">{dishName}</strong>?{" "}
            {t(locale, "review.reportPrompt")}
          </p>
        ) : (
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-ink">{t(locale, "review.prompt")}</span>
            <StarRating
              value={rating}
              onChange={setRating}
              label={t(locale, "review.rateLabel", { name: dishName })}
            />
          </div>
        )}

        <div className="mt-3 grid gap-3 sm:grid-cols-[minmax(0,14rem)_1fr]">
          <label className="block">
            <span className="sr-only">{t(locale, "review.name")}</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={REVIEW_MAX_NAME}
              placeholder={t(locale, "review.name")}
              className="w-full rounded-control border border-border bg-surface px-3 py-2 text-sm text-ink placeholder:text-ink/50 focus:border-chili focus:ring-2 focus:ring-chili/30 focus:outline-none"
            />
          </label>
          <label className="block">
            <span className="sr-only">
              {t(locale, isReport ? "review.reportLabel" : "review.commentLabel")}
            </span>
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              maxLength={REVIEW_MAX_COMMENT}
              placeholder={
                t(locale, isReport ? "review.reportPlaceholder" : "review.comment")
              }
              className="w-full rounded-control border border-border bg-surface px-3 py-2 text-sm text-ink placeholder:text-ink/50 focus:border-chili focus:ring-2 focus:ring-chili/30 focus:outline-none"
            />
          </label>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-ink/65">
            {t(locale, "review.chars", { n: comment.length, max: REVIEW_MAX_COMMENT })}
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
            {sending
              ? t(locale, "review.sending")
              : t(locale, isReport ? "review.submitReport" : "review.submit")}
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
            {t(locale, justSent === "content_report" ? "review.reportThanks" : "review.thanks")}
          </p>
        )}
      </form>

      <div className="mt-5">
        {loading ? (
          <p className="text-sm text-ink/70">{t(locale, "review.loading")}</p>
        ) : loadError ? (
          <p className="flex items-center gap-2 text-sm text-ink/70">
            <AlertCircle className="h-4 w-4 shrink-0 text-amber-dark" aria-hidden="true" />
            {t(locale, "review.loadError")}
          </p>
        ) : reviews.length === 0 ? (
          <p className="text-sm text-ink/70">
            {t(locale, "review.none")}
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
                    {/* Danh sách chỉ chứa kind='review' (RLS lọc sẵn) nên rating
                        luôn có; vẫn phòng null để type an toàn. */}
                    {r.rating !== null && <StarRating value={r.rating} readOnly size={14} />}
                    <span className="text-sm font-medium text-ink">{r.author_name}</span>
                    <span className="text-xs text-ink/65">{relativeTime(r.created_at, locale)}</span>
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
