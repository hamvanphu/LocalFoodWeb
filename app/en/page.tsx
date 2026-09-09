import type { Metadata } from "next";
import HomeView from "@/components/pages/HomeView";

export const metadata: Metadata = {
  title: "Local Food — Vietnamese regional dishes, province by province",
  description:
    "An interactive map of signature dishes from all 63 pre-2025 provinces of Vietnam, with ingredients, method and how to eat them.",
  alternates: { languages: { vi: "/", en: "/en" } },
};

export default function HomePageEn() {
  return <HomeView locale="en" />;
}
