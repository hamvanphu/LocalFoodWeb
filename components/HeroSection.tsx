"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
import HeroPhotoBackground from "./HeroPhotoBackground";
import MagneticButton from "./effects/MagneticButton";
import Marquee from "./effects/Marquee";
import { t } from "@/lib/ui-strings";
import type { Locale } from "@/lib/locale";

export default function HeroSection({
  heroPhotoUrl,
  marqueeItems,
  locale = "vi",
}: {
  heroPhotoUrl?: string;
  marqueeItems: string[];
  locale?: Locale;
}) {
  // Tách theo từ để giữ hiệu ứng chữ bay lên từng chữ ở cả hai ngôn ngữ
  const headlineWords = t(locale, "hero.headline").split(" ");
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={sectionRef}>
      <section
        className="relative flex min-h-[88vh] flex-col justify-end overflow-hidden"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)" }}
      >
        {heroPhotoUrl && (
          <motion.div style={{ y: imageY }} className="absolute inset-0">
            <HeroPhotoBackground url={heroPhotoUrl} />
          </motion.div>
        )}

        <motion.div
          style={{ y: textY, opacity }}
          className="relative mx-auto w-full max-w-6xl px-6 pb-16"
        >
          <h1 className="font-display font-semibold text-ink" style={{ fontSize: "clamp(2.75rem, 9vw, 6.5rem)", lineHeight: 1.02 }}>
            {headlineWords.map((word, i) => (
              <motion.span
                key={word}
                className="mr-4 inline-block last:mr-0"
                initial={{ y: "110%", rotate: 4, opacity: 0 }}
                animate={{ y: "0%", rotate: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.span>
            ))}
            <br />
            <motion.span
              className="inline-block text-chili"
              initial={{ y: "110%", rotate: 4, opacity: 0 }}
              animate={{ y: "0%", rotate: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: headlineWords.length * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              {t(locale, "hero.headlineAccent")}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-6 max-w-xl text-lg text-ink/70"
          >
            {t(locale, "hero.body")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-8 flex items-center gap-4"
          >
            <MagneticButton
              onClick={() =>
                document.getElementById("map-section")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t(locale, "hero.cta")}
              <ChevronDown className="ml-2 h-4 w-4" />
            </MagneticButton>
          </motion.div>
        </motion.div>
      </section>

      <Marquee items={marqueeItems} />
    </div>
  );
}
