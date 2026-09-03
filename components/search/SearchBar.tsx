"use client";

import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, UtensilsCrossed, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import type { SearchEntry } from "@/lib/searchIndex";

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // bỏ dấu để tìm không phân biệt có dấu/không dấu
    .replace(/đ/g, "d");
}

export default function SearchBar({ index }: { index: SearchEntry[] }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return [];
    return index.filter((entry) => normalize(entry.label).includes(q)).slice(0, 8);
  }, [query, index]);

  function goTo(href: string) {
    setOpen(false);
    setQuery("");
    router.push(href);
  }

  return (
    <div className="relative w-full max-w-xs">
      <div className="flex items-center gap-2 rounded-pill border border-border bg-surface px-3 py-1.5 shadow-soft focus-within:border-chili focus-within:ring-2 focus-within:ring-chili/30">
        <Search className="h-4 w-4 shrink-0 text-ink/60" />
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 120)}
          placeholder="Tìm món ăn, tỉnh thành…"
          className="w-full bg-transparent text-sm text-ink placeholder:text-ink/40 focus:outline-none"
        />
        {query && (
          <button
            aria-label="Xoá tìm kiếm"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            className="shrink-0 text-ink/70 hover:text-ink"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {open && results.length > 0 && (
          <motion.ul
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-control border border-border bg-surface shadow-lifted"
          >
            {results.map((entry) => (
              <li key={entry.href + entry.label}>
                <button
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => goTo(entry.href)}
                  className="flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left text-sm hover:bg-surface-muted"
                >
                  {entry.type === "province" ? (
                    <MapPin className="h-4 w-4 shrink-0 text-chili" />
                  ) : (
                    <UtensilsCrossed className="h-4 w-4 shrink-0 text-amber-dark" />
                  )}
                  <span>
                    <span className="font-medium text-ink">{entry.label}</span>
                    <span className="ml-1.5 text-ink/65">{entry.subtitle}</span>
                  </span>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
