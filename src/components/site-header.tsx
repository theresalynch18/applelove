"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Search,
  Heart,
  User,
  ChevronDown,
  Menu,
} from "lucide-react";
import { products } from "@/lib/products";
import { CartButton } from "@/components/cart-button";
import { SafeImage } from "@/components/safe-image";
import { storeInfo } from "@/lib/store-info";
import { brandLetter, brandName } from "@/lib/brand";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="hidden md:block border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-4 text-gray-600">
            <span>Бесплатная доставка от 5 000 ₽</span>
            <span className="text-gray-300">·</span>
            <span>Гарантия 12 мес.</span>
            <span className="text-gray-300">·</span>
            <span>г. Ярославль</span>
          </div>
          <div className="flex items-center gap-6 text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Доставка
            </Link>
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Гарантия
            </Link>
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Контакты
            </Link>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="bg-white border-gray-200 w-80"
              >
                <SheetHeader>
                  <SheetTitle className="text-gray-900 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                      {brandLetter}
                    </div>
                    {brandName}
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-8 flex flex-col gap-4">
                  <Link
                    href="/catalog/iphone"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                  >
                    iPhone
                  </Link>
                  <Link
                    href="/catalog/macbook"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                  >
                    MacBook
                  </Link>
                  <Link
                    href="/catalog/ipad"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                  >
                    iPad
                  </Link>
                  <Link
                    href="/catalog/samsung"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                  >
                    Samsung
                  </Link>
                  <Link
                    href="/catalog/accessories"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                  >
                    Аксессуары
                  </Link>
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                  >
                    Trade-in
                  </Link>
                  <div className="pt-4 space-y-2 text-sm text-gray-500">
                    <p>
                      <a
                        href={`tel:${storeInfo.phoneTel}`}
                        className="hover:text-blue-600"
                      >
                        {storeInfo.phoneDisplay}
                      </a>
                    </p>
                    <p>{storeInfo.hours}</p>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                {brandLetter}
              </div>
              <span className="text-gray-900 text-xl font-bold tracking-tight hidden sm:inline">
                {brandName}
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <div className="relative group">
                <button
                  type="button"
                  className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  Apple <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[200px]">
                    <Link
                      href="/catalog/iphone"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      iPhone
                    </Link>
                    <Link
                      href="/catalog/macbook"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      MacBook
                    </Link>
                    <Link
                      href="/catalog/ipad"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      iPad
                    </Link>
                    <Link
                      href="/catalog/apple-watch"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Apple Watch
                    </Link>
                    <Link
                      href="/catalog/airpods"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      AirPods
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button
                  type="button"
                  className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  Samsung <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[220px]">
                    <Link
                      href="/catalog/samsung-smartphones"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Смартфоны
                    </Link>
                    <Link
                      href="/catalog/samsung-tablets"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Планшеты
                    </Link>
                    <Link
                      href="/catalog/samsung-watches"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Часы
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                href="/catalog/accessories"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Аксессуары
              </Link>
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Trade-in
              </Link>
            </nav>

            <div className="flex items-center gap-2 sm:gap-4">
              <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                </DialogTrigger>
                <DialogContent className="bg-white border-gray-200 max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-gray-900">
                      Поиск товаров
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="Введите название товара..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-gray-50 border-gray-200 text-gray-900 pl-10 py-6 text-lg rounded-xl"
                        autoFocus
                      />
                    </div>
                    {searchQuery && (
                      <ScrollArea className="h-[300px]">
                        <div className="space-y-2">
                          {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                              <Link
                                key={product.id}
                                href={`/product/${product.slug}`}
                                onClick={() => setSearchOpen(false)}
                                className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                              >
                                <SafeImage
                                  src={product.image}
                                  alt={product.name}
                                  className="w-16 h-16 object-contain bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-2"
                                />
                                <div className="flex-1">
                                  <p className="text-blue-600 text-sm font-medium">
                                    {product.brand}
                                  </p>
                                  <p className="text-gray-900 font-medium">
                                    {product.name}
                                  </p>
                                  <p className="text-blue-600 font-bold">
                                    {product.price.toLocaleString("ru-RU")} ₽
                                  </p>
                                </div>
                              </Link>
                            ))
                          ) : (
                            <p className="text-gray-400 text-center py-8">
                              Ничего не найдено
                            </p>
                          )}
                        </div>
                      </ScrollArea>
                    )}
                  </div>
                </DialogContent>
              </Dialog>

              <button
                type="button"
                className="hidden sm:flex p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all"
              >
                <Heart className="w-5 h-5" />
              </button>

              <CartButton />

              <button
                type="button"
                className="hidden sm:flex p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all"
              >
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
