import type { Metadata } from "next";
import RecommendView from "@/components/pages/RecommendView";

export const metadata: Metadata = {
  title: "What's for lunch? | Local Food",
  description:
    "One tap, two Vietnamese dishes that work for a workday lunch, with ingredients and method. Suggests a dish, not a restaurant.",
  alternates: { languages: { vi: "/goi-y", en: "/en/goi-y" } },
};

export default async function RecommendPageEn({
  searchParams,
}: {
  searchParams: Promise<{ s?: string }>;
}) {
  const { s } = await searchParams;
  return <RecommendView locale="en" seed={s} />;
}
