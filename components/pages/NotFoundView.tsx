"use client";

import Link from "next/link";
import { MapPinOff } from "lucide-react";
import Button from "@/components/ui/Button";
import { useLocale } from "@/lib/useLocale";
import { localePath } from "@/lib/locale";
import { t } from "@/lib/ui-strings";

export default function NotFoundView() {
  const locale = useLocale();

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center bg-texture-warm">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-chili/10 text-chili">
        <MapPinOff className="h-8 w-8" />
      </div>
      <h1 className="mt-6 font-display text-3xl font-semibold text-ink sm:text-4xl">
        {t(locale, "notFound.title")}
      </h1>
      <p className="mt-3 max-w-md text-ink/70">{t(locale, "notFound.body")}</p>
      <Link href={localePath(locale, "/")} className="mt-6">
        <Button variant="primary">{t(locale, "notFound.cta")}</Button>
      </Link>
    </div>
  );
}
