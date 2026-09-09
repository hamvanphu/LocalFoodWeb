import HomeView from "@/components/pages/HomeView";

export const metadata = {
  alternates: { languages: { vi: "/", en: "/en" } },
};

export default function HomePage() {
  return <HomeView locale="vi" />;
}
