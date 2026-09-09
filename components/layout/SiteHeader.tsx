import HeaderBar from "./HeaderBar";
import { buildSearchIndex } from "@/lib/searchIndex";

export default function SiteHeader() {
  // Dựng ở server: đọc file dữ liệu 63 tỉnh, không đẩy việc đó sang trình duyệt.
  const index = buildSearchIndex();

  return (
    <header className="sticky top-0 z-20 bg-surface/80 backdrop-blur-md">
      <HeaderBar index={index} />
      <div className="h-[3px] w-full bg-gradient-to-r from-chili via-turmeric to-herb" />
    </header>
  );
}
