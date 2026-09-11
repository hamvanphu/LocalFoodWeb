import type { Metadata } from "next";
import RecommendView from "@/components/pages/RecommendView";

export const metadata: Metadata = {
  title: "Trưa nay ăn gì? | Local Food",
  description:
    "Bấm một nút, nhận hai món ăn trưa hợp dân văn phòng kèm nguyên liệu và cách làm. Gợi ý món, không phải gợi ý quán.",
  alternates: { languages: { vi: "/goi-y", en: "/en/goi-y" } },
};

export default async function RecommendPage({
  searchParams,
}: {
  searchParams: Promise<{ s?: string }>;
}) {
  const { s } = await searchParams;
  return <RecommendView locale="vi" seed={s} />;
}
