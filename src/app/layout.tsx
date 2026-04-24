import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";
import { brandTitleSeo } from "@/lib/brand";

export const metadata: Metadata = {
  title: brandTitleSeo,
  description:
    "Интернет-магазин AppleLove: оригинальная техника Apple и Samsung. iPhone, MacBook, iPad, Samsung Galaxy. Гарантия 12 мес., доставка, trade-in.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
