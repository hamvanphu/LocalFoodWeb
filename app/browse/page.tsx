import type { Metadata } from "next";
import BrowseProvinces from "@/components/province/BrowseProvinces";
import { getAllProvinces } from "@/lib/provinces";

export const metadata: Metadata = {
  title: "Tất cả tỉnh thành | Local Food",
  description: "Danh sách đầy đủ các tỉnh thành có món ăn địa phương trên Local Food, nhóm theo vùng miền.",
};

export default function BrowsePage() {
  const provinces = getAllProvinces();

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
        Tất cả tỉnh thành
      </h1>
      <p className="mt-2 max-w-2xl text-ink/70">
        Hiện có {provinces.length}/63 tỉnh thành trước sáp nhập đã có dữ liệu món ăn — danh sách sẽ mở rộng dần.
      </p>
      <div className="mt-8">
        <BrowseProvinces provinces={provinces} />
      </div>
    </div>
  );
}
