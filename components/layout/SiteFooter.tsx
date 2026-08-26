import { UtensilsCrossed } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-surface-muted">
      <div className="h-[3px] w-full bg-gradient-to-r from-herb via-turmeric to-chili" />
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
          <UtensilsCrossed className="h-5 w-5 text-chili" />
          Local Food
        </div>
        <p className="max-w-md text-sm text-ink/60">
          Dự án cá nhân giới thiệu ẩm thực địa phương Việt Nam. Ảnh món ăn
          dùng nguồn Wikimedia Commons theo giấy phép Creative Commons, ghi
          chú nguồn tại từng ảnh. Nội dung đối chiếu nguồn tham chiếu chính
          thống trước khi công bố.
        </p>
      </div>
    </footer>
  );
}
