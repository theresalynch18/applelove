import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "NOVA Store — Премиальная техника Apple и Samsung в России",
  description: "Интернет-магазин оригинальной техники Apple и Samsung. iPhone, MacBook, iPad, Samsung Galaxy. Гарантия 12 мес., бесплатная доставка, trade-in.",
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
