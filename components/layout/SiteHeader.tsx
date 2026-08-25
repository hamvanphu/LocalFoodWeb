import Link from "next/link";
import { UtensilsCrossed } from "lucide-react";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-black/5 bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-display text-xl font-semibold text-ink">
          <UtensilsCrossed className="h-5 w-5 text-chili" />
          Local Food
        </Link>
        <nav className="text-sm text-ink/70">
          <span>63 tỉnh thành · món ăn địa phương</span>
        </nav>
      </div>
    </header>
  );
}
