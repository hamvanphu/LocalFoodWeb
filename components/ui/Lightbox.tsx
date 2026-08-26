"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageOff, X } from "lucide-react";
import Image from "next/image";
import type { DishImage } from "@/lib/types";

export default function Lightbox({
  image,
  alt,
  onClose,
}: {
  image: DishImage | null;
  alt: string;
  onClose: () => void;
}) {
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    if (image) setFailed(false);
  }, [image]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-h-[85vh] w-full max-w-3xl"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 26, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Đóng ảnh"
              onClick={onClose}
              className="absolute -top-11 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-card bg-black">
              {failed ? (
                <div className="flex flex-col items-center gap-2 text-white/70">
                  <ImageOff className="h-8 w-8" />
                  <span className="text-sm">Ảnh tạm thời không tải được</span>
                </div>
              ) : (
                <Image
                  src={image.url}
                  alt={alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                  onError={() => setFailed(true)}
                />
              )}
            </div>
            <p className="mt-2 text-center text-xs text-white/70">
              {image.attribution} · {image.license}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
