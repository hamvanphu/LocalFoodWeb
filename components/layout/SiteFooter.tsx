import Link from "next/link";
import { UtensilsCrossed, BarChart3 } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-surface-muted">
      <div className="h-[3px] w-full bg-gradient-to-r from-herb via-turmeric to-chili" />
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
            <UtensilsCrossed className="h-5 w-5 text-chili" />
            Local Food
          </div>
          <Link
            href="/telemetry"
            className="mt-3 inline-flex items-center gap-1.5 text-sm text-ink/70 hover:text-chili"
          >
            <BarChart3 className="h-4 w-4" aria-hidden="true" />
            Telemetry — cách dự án này được xây
          </Link>
        </div>
        {/* Nói đúng mức đã kiểm: mỗi món CÓ nguồn (zod ép ở build), nhưng không phải
            món nào cũng đã được đối chiếu tay — 63% món không có nguồn Wikipedia và
            spot-check mới ở mức đọc lướt. Xem SPOTCHECK-LF.md. */}
        <p className="max-w-md text-sm text-ink/70">
          Dự án cá nhân giới thiệu ẩm thực địa phương Việt Nam. Ảnh món ăn dùng
          nguồn Wikimedia Commons theo giấy phép Creative Commons, ghi chú nguồn
          tại từng ảnh. Mỗi món đều kèm nguồn tham chiếu để bạn tự đối chiếu —
          nếu thấy thông tin chưa đúng, dùng nút{" "}
          <strong className="font-medium text-ink">Báo nội dung sai</strong> ở
          trang món ăn để chúng tôi sửa.
        </p>
      </div>
    </footer>
  );
}
