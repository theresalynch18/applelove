"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Star,
  ChevronLeft,
  ShoppingCart,
  Heart,
  Check,
  Truck,
  Shield,
  RefreshCw,
  Share2,
} from "lucide-react";
import { getProductBySlug, products } from "@/lib/products";
import { CartButton } from "@/components/cart-button";
import { SafeImage } from "@/components/safe-image";
import { useCart } from "@/context/cart-context";

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const { addToCart } = useCart();

  const product = getProductBySlug(slug);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Товар не найден</h1>
          <Button onClick={() => router.push("/")} className="bg-gradient-to-r from-blue-600 to-purple-600">
            На главную
          </Button>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(
    p => p.brand === product.brand && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                N
              </div>
              <span className="text-gray-800 text-xl font-bold tracking-tight">NOVA</span>
            </Link>

            <CartButton />
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">Главная</Link>
          <span>/</span>
          <Link href="/catalog" className="hover:text-blue-600 transition-colors">Каталог</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">{product.name}</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-3xl bg-white p-8 shadow-xl shadow-blue-100">
              {product.discount && (
                <Badge className="absolute top-6 left-6 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-2 text-base">
                  -{product.discount}%
                </Badge>
              )}
              {product.isNew && (
                <Badge className="absolute top-6 right-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 text-base">
                  Новинка
                </Badge>
              )}
              <SafeImage
                src={product.images?.[0] ?? product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                  {product.brand}
                </span>
                {product.isHit && (
                  <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                    Хит продаж
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-amber-400 text-amber-400"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-900 font-semibold">{product.rating}</span>
                <span className="text-gray-500">({product.reviews} отзывов)</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
              <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {product.price.toLocaleString("ru-RU")} ₽
              </span>
              {product.oldPrice && (
                <span className="text-2xl text-gray-400 line-through">
                  {product.oldPrice.toLocaleString("ru-RU")} ₽
                </span>
              )}
            </div>

            {/* Description */}
            {product.description && (
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>
            )}

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex items-center border-2 border-gray-300 rounded-xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 hover:bg-gray-100 transition-colors"
                  >
                    −
                  </button>
                  <span className="px-6 py-3 font-semibold">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>

                <Button
                  type="button"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg rounded-xl shadow-lg shadow-blue-200"
                  onClick={() => {
                    addToCart(product, quantity);
                    setQuantity(1);
                  }}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Добавить в корзину
                </Button>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 py-6 rounded-xl">
                  <Heart className="w-5 h-5 mr-2" />
                  В избранное
                </Button>
                <Button variant="outline" size="icon" className="border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 w-14 h-14 rounded-xl">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Truck, text: "Бесплатная доставка" },
                { icon: Shield, text: "Гарантия 12 мес." },
                { icon: RefreshCw, text: "Trade-in доступен" },
                { icon: Check, text: "100% оригинал" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow">
                  <div className="p-2 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features & Specs Tabs */}
        <div className="mt-16 space-y-8">
          {/* Features */}
          {product.features && product.features.length > 0 && (
            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Основные характеристики
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 p-1 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full">
                        <Check className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Specifications */}
          {product.specs && (
            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Технические характеристики
                </h2>
                <div className="space-y-3">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0"
                    >
                      <span className="text-gray-600 font-medium">{key}</span>
                      <span className="text-gray-900 font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Похожие товары</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <Link
                  key={p.id}
                  href={`/product/${p.slug}`}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-4"
                >
                  <div className="aspect-square mb-4 relative">
                    <SafeImage
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <p className="text-sm text-blue-600 font-medium mb-1">{p.brand}</p>
                  <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-2">
                    {p.name}
                  </h3>
                  <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {p.price.toLocaleString("ru-RU")} ₽
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
