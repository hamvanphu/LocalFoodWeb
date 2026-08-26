import Link from "next/link";
import { MapPinOff } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center bg-texture-warm">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-chili/10 text-chili">
        <MapPinOff className="h-8 w-8" />
      </div>
      <h1 className="mt-6 font-display text-3xl font-semibold text-ink sm:text-4xl">
        Không tìm thấy tỉnh này trên bản đồ
      </h1>
      <p className="mt-3 max-w-md text-ink/70">
        Trang mày tìm không tồn tại — có thể tỉnh này chưa có dữ liệu, hoặc
        đường dẫn bị gõ sai. Quay lại bản đồ để khám phá các tỉnh đã có nhé.
      </p>
      <Link href="/" className="mt-6">
        <Button variant="primary">Về bản đồ ẩm thực</Button>
      </Link>
    </div>
  );
}
