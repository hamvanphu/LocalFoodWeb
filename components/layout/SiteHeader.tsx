import Link from "next/link";
import { UtensilsCrossed } from "lucide-react";
import SearchBar from "@/components/search/SearchBar";
import { buildSearchIndex } from "@/lib/searchIndex";

export default function SiteHeader() {
  const index = buildSearchIndex();

  return (
    <header className="sticky top-0 z-20 bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex shrink-0 items-center gap-2 font-display text-xl font-semibold text-ink">
          <UtensilsCrossed className="h-5 w-5 text-chili" />
          Local Food
        </Link>
        <SearchBar index={index} />
        <nav className="hidden shrink-0 text-sm text-ink/70 lg:block">
          <span>63 tỉnh thành · món ăn địa phương</span>
        </nav>
      </div>
      <div className="h-[3px] w-full bg-gradient-to-r from-chili via-turmeric to-herb" />
    </header>
  );
}
