import type { Metadata } from "next";
import { Be_Vietnam_Pro, Lora } from "next/font/google";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import MotionProvider from "@/components/motion/MotionProvider";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["vietnamese", "latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Local Food — Bản đồ ẩm thực Việt Nam",
  description:
    "Khám phá món ăn đặc trưng của 63 tỉnh thành Việt Nam qua bản đồ tương tác, công thức và cách thưởng thức chuẩn vị địa phương.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${beVietnamPro.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <MotionProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
