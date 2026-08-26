"use client";

import { motion } from "motion/react";

/** Băng chữ chạy vô tận — dùng cho danh sách tên tỉnh/món, tạo nhịp điệu sống động ngay dưới hero. */
export default function Marquee({ items }: { items: string[] }) {
  const track = [...items, ...items]; // nhân đôi để loop liền mạch

  return (
    <div className="overflow-hidden border-y border-border bg-ink py-3">
      <motion.div
        className="flex w-max gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display text-lg text-white/80"
          >
            {item} <span className="text-turmeric">✺</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
