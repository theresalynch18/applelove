"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { ProductCard } from "@/components/ProductCard";
import {
  getProductsByCatalogSlug,
  getCatalogTitle,
  isKnownCatalogSlug,
} from "@/lib/catalog";
import type { Product } from "@/lib/products";
import { useCart } from "@/context/cart-context";

export default function CatalogCategoryPage() {
  const params = useParams();
  const slug = (params.slug as string) ?? "";
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
  };

  const known = isKnownCatalogSlug(slug);
  const list = known ? getProductsByCatalogSlug(slug) : [];
  const title = getCatalogTitle(slug);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 bg-grid">
      <SiteHeader />
      <div className="container mx-auto px-4 py-10 md:py-14">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8 flex-wrap">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Главная
          </Link>
          <span>/</span>
          <Link href="/catalog" className="hover:text-blue-600 transition-colors">
            Каталог
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{title}</span>
        </div>

        {!known ? (
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Раздел не найден
            </h1>
            <Link
              href="/catalog"
              className="text-blue-600 font-semibold hover:underline"
            >
              Все категории
            </Link>
          </div>
        ) : (
          <>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h1>
            <p className="text-gray-600 mb-10">
              {list.length > 0
                ? `Найдено товаров: ${list.length}`
                : "В этой категории пока нет товаров — загляните в другие разделы."}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {list.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
            {list.length === 0 && (
              <div className="mt-8">
                <Link
                  href="/catalog"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline"
                >
                  Все категории
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
