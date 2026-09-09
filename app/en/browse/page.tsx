import type { Metadata } from "next";
import BrowseView from "@/components/pages/BrowseView";

export const metadata: Metadata = {
  title: "All provinces | Local Food",
  description:
    "Every province on Local Food that has dish data, grouped by region.",
  alternates: { languages: { vi: "/browse", en: "/en/browse" } },
};

export default function BrowsePageEn() {
  return <BrowseView locale="en" />;
}
