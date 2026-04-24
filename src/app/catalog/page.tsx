"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { categories } from "@/lib/products";
import { SafeImage } from "@/components/safe-image";
import { SiteHeader } from "@/components/site-header";

export default function CatalogIndexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 bg-grid">
      <SiteHeader />
      <div className="container mx-auto px-4 py-10 md:py-14">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Главная
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Каталог</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Каталог
        </h1>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 md:gap-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-4 md:p-6 text-center group transition-all hover:-translate-y-1 border border-gray-100"
            >
              <div className="aspect-square mb-2 md:mb-4 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl" />
                <SafeImage
                  src={category.image}
                  alt={category.name}
                  className="relative w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 p-2"
                />
              </div>
              <h2 className="text-gray-900 font-semibold group-hover:text-blue-600 transition-colors text-xs md:text-base truncate">
                {category.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
