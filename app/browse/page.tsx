import type { Metadata } from "next";
import BrowseView from "@/components/pages/BrowseView";

export const metadata: Metadata = {
  title: "Tất cả tỉnh thành | Local Food",
  description:
    "Danh sách đầy đủ các tỉnh thành có món ăn địa phương trên Local Food, nhóm theo vùng miền.",
  alternates: { languages: { vi: "/browse", en: "/en/browse" } },
};

export default function BrowsePage() {
  return <BrowseView locale="vi" />;
}
