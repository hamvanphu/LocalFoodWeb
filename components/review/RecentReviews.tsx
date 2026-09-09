"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { MessageSquareQuote, ArrowRight } from "lucide-react";
import StarRating from "./StarRating";
import {
  fetchRecentReviews,
  relativeTime,
  isReviewEnabled,
  type DishReview,
} from "@/lib/reviews";
import { localePath, type Locale } from "@/lib/locale";
import { t } from "@/lib/ui-strings";

/** Tra tên hiển thị từ slug — dựng ở server rồi truyền xuống, tránh gọi lại dữ liệu tỉnh ở client. */
export interface DishLookup {
  [key: string]: { provinceName: string; dishName: string };
}

interface RecentReviewsProps {
  lookup: DishLookup;
  locale?: Locale;
}

export default function RecentReviews({ lookup, locale = "vi" }: RecentReviewsProps) {
  const enabled = isReviewEnabled();
  const [reviews, setReviews] = useState<DishReview[]>([]);
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    if (!enabled) return;
    let alive = true;
    // Lấy dư rồi lọc: đánh giá trỏ tới tỉnh/món không còn tồn tại (slug đã đổi, hoặc
    // bản ghi kiểm thử) sẽ tạo link 404 — loại bỏ thay vì hiện link hỏng ở trang chủ.
    fetchRecentReviews(24)
      .then((r) => {
        if (!alive) return;
        setReviews(r.filter((x) => lookup[`${x.province_slug}/${x.dish_slug}`]).slice(0, 6));
        setState("ready");
      })
      .catch(() => alive && setState("error"));
    return () => {
      alive = false;
    };
  }, [enabled, lookup]);

  // Chưa cấu hình Supabase, hoặc lỗi tải, hoặc chưa ai đánh giá → ẩn hẳn khối này.
  // Trang chủ là nơi gây ấn tượng đầu: một khối trống hoặc báo lỗi ở đây tệ hơn là
  // không có khối nào. Người dùng vẫn đánh giá được ở trang món.
  if (!enabled || state === "error") return null;
  if (state === "ready" && reviews.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="flex items-center gap-2 font-display text-2xl font-semibold text-ink">
            <MessageSquareQuote className="h-6 w-6 text-chili" aria-hidden="true" />
            {t(locale, "home.recentReviews")}
          </h2>
          <p className="mt-1 text-sm text-ink/70">
            {t(locale, "home.recentReviewsHint")}
          </p>
        </div>
      </div>

      {state === "loading" ? (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-32 animate-pulse rounded-card border border-border bg-surface-muted"
            />
          ))}
        </div>
      ) : (
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => {
            // Đã lọc ở trên nên chắc chắn tra được
            const info = lookup[`${r.province_slug}/${r.dish_slug}`];
            return (
              <motion.li
                key={r.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                <Link
                  href={localePath(locale, `/provinces/${r.province_slug}#${r.dish_slug}`)}
                  className="group flex h-full flex-col rounded-card border border-border bg-surface p-4 shadow-soft transition hover:border-chili/40 hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chili"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    {r.rating !== null && <StarRating value={r.rating} readOnly size={14} />}
                    <span className="text-xs text-ink/65">{relativeTime(r.created_at, locale)}</span>
                  </div>

                  {r.comment && (
                    <p className="mt-2 line-clamp-3 text-sm text-ink/85">“{r.comment}”</p>
                  )}

                  <div className="mt-auto pt-3">
                    <p className="text-sm font-medium text-ink">{r.author_name}</p>
                    <p className="mt-0.5 flex items-center gap-1 text-xs text-ink/70">
                      <span className="truncate">
                        {info.dishName} · {info.provinceName}
                      </span>
                      <ArrowRight
                        className="h-3 w-3 shrink-0 text-chili opacity-0 transition group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </p>
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
