"use client";

import { useState } from "react";
import Image from "next/image";

/** Ảnh nền trang trí cho hero — nếu lỗi tải (mạng/rate-limit), tự ẩn để lộ gradient nền thay vì hiện icon vỡ. */
export default function HeroPhotoBackground({ url }: { url: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;

  return (
    <div className="absolute inset-0">
      <Image
        src={url}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        onError={() => setFailed(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
    </div>
  );
}
