"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChevronRight,
  Truck,
  Shield,
  RefreshCw,
  Headphones,
  Star,
  ArrowRight,
  Check,
  Users,
  Zap,
  Send,
} from "lucide-react";
import { categories, getRecommendedProducts, getBestsellers } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/lib/products";
import { SafeImage } from "@/components/safe-image";
import { useCart } from "@/context/cart-context";
import { storeInfo, storeLegalLine } from "@/lib/store-info";
import { SiteHeader } from "@/components/site-header";
import { brandLetter, brandName } from "@/lib/brand";

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
  };

  const recommended = getRecommendedProducts();
  const bestsellers = getBestsellers();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 bg-grid">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/50 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-[150px] opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200 px-4 py-1.5 text-sm font-semibold">
              <Zap className="w-4 h-4 mr-2" />
              Новая коллекция 2025
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight">
              Техника будущего.
              <br />
              <span className="gradient-text">Уже сегодня.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Премиальная техника Apple и Samsung с гарантией, бесплатной доставкой и лучшими ценами в России.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-xl shadow-blue-200" asChild>
                <Link href="/catalog" className="inline-flex items-center justify-center gap-2">
                  Перейти в каталог
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 px-8 py-6 text-lg rounded-xl bg-white">
                Trade-in со скидкой
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <AnimatedSection delay={100}>
        <section className="py-8 border-y border-gray-200 bg-white/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { icon: Truck, title: "Бесплатная доставка", desc: "При заказе от 5 000 ₽" },
                { icon: Shield, title: "Гарантия 12 мес.", desc: "Официальная гарантия" },
                { icon: RefreshCw, title: "Trade-in", desc: "Обменяй старое на новое" },
                { icon: Headphones, title: "Поддержка 24/7", desc: "Всегда на связи" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-center gap-3 md:gap-4">
                  <div className="p-2 md:p-3 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex-shrink-0">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm md:text-base">{title}</p>
                    <p className="text-gray-500 text-xs md:text-sm hidden sm:block">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Categories */}
      <AnimatedSection delay={200}>
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Категории</h2>
              <Link href="/catalog" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors text-sm md:text-base font-semibold">
                Все категории <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 md:gap-4">
              {categories.map((category, index) => (
                <AnimatedSection key={category.name} delay={50 * index}>
                  <Link href={category.href} className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-4 md:p-6 text-center group transition-all hover:-translate-y-1 border border-gray-100">
                    <div className="aspect-square mb-2 md:mb-4 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl" />
                      <SafeImage src={category.image} alt={category.name} className="relative w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 p-2" />
                    </div>
                    <h3 className="text-gray-900 font-semibold group-hover:text-blue-600 transition-colors text-xs md:text-base truncate">{category.name}</h3>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Recommended Products */}
      <AnimatedSection delay={300}>
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Рекомендуем</h2>
              <p className="text-gray-600">Лучшие предложения этой недели</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {recommended.map((product, index) => (
                <AnimatedSection key={product.id} delay={50 * index}>
                  <ProductCard product={product} onAddToCart={handleAddToCart} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Trade-in Banner */}
      <AnimatedSection delay={400}>
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl overflow-hidden p-8 md:p-16 text-white shadow-2xl">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />

              <div className="relative z-10 max-w-xl">
                <p className="text-blue-100 text-sm uppercase tracking-wider mb-4 font-semibold">Trade-in программа</p>
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Обменяй старое устройство на новое</h2>
                <p className="text-blue-50 mb-8 text-lg">Получите до 40% скидки при сдаче вашего устройства в trade-in. Быстрая оценка, честная цена.</p>
                <Button className="bg-white text-blue-600 hover:bg-blue-50 border-0 px-6 py-3 rounded-xl font-semibold text-lg shadow-lg">Узнать больше</Button>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Bestsellers */}
      <AnimatedSection delay={500}>
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-10">Хиты продаж</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {bestsellers.map((product, index) => (
                <AnimatedSection key={`bestseller-${product.id}`} delay={50 * index}>
                  <ProductCard product={product} onAddToCart={handleAddToCart} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Why Choose Us */}
      <AnimatedSection delay={600}>
        <section className="py-12 md:py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10 md:mb-12">Почему выбирают {brandName}</h2>

            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {[
                { icon: Check, title: "100% оригинальная техника", desc: "Только сертифицированные устройства от официальных поставщиков" },
                { icon: Users, title: "12 000+ довольных клиентов", desc: "Средняя оценка магазина — 4.9 из 5 по отзывам покупателей" },
                { icon: Truck, title: "Быстрая доставка по России", desc: "Отправляем в день заказа. Доставка 2-5 дней в любой город" },
              ].map(({ icon: Icon, title, desc }, index) => (
                <AnimatedSection key={title} delay={100 * index}>
                  <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 text-center border border-gray-100">
                    <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{title}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Newsletter */}
      <AnimatedSection delay={700}>
        <section className="py-12 md:py-16 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-3xl border border-blue-100">
              <div className="text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Будьте в курсе новинок</h2>
                <p className="text-gray-600">Подпишитесь и получите скидку 5% на первый заказ</p>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <Input type="email" placeholder="Ваш email" className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 rounded-xl px-5 py-3 flex-1 md:min-w-[280px]" />
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 md:px-6 rounded-xl flex-shrink-0 shadow-lg shadow-blue-200">
                  <Send className="w-5 h-5 md:mr-2" />
                  <span className="hidden md:inline">Подписаться</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer */}
      <footer className="py-12 md:py-16 border-t border-gray-200 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10 mb-12">
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl">{brandLetter}</div>
                <span className="text-gray-900 text-xl font-bold tracking-tight">{brandName}</span>
              </Link>
              <p className="text-gray-600 text-sm">Премиальная техника Apple и Samsung с гарантией</p>
            </div>

            <div>
              <h4 className="text-gray-900 font-bold mb-4">Каталог</h4>
              <ul className="space-y-2">
                {[
                  { label: "iPhone", href: "/catalog/iphone" },
                  { label: "MacBook", href: "/catalog/macbook" },
                  { label: "iPad", href: "/catalog/ipad" },
                  { label: "Samsung", href: "/catalog/samsung" },
                  { label: "Аксессуары", href: "/catalog/accessories" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-gray-900 font-bold mb-4">Покупателям</h4>
              <ul className="space-y-2">
                {["Доставка и оплата", "Гарантия", "Trade-in", "FAQ"].map(item => (
                  <li key={item}><Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">{item}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-gray-900 font-bold mb-4">Компания</h4>
              <ul className="space-y-2">
                {["О нас", "Контакты", "Конфиденциальность", "Соглашение"].map(item => (
                  <li key={item}><Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">{item}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-gray-900 font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>
                  <a href={`tel:${storeInfo.phoneTel}`} className="hover:text-blue-600 transition-colors">
                    {storeInfo.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${storeInfo.email}`} className="hover:text-blue-600 transition-colors break-all">
                    {storeInfo.email}
                  </a>
                </li>
                <li className="text-gray-600">{storeInfo.address}</li>
                <li>{storeInfo.hours}</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm text-center mb-4 max-w-4xl mx-auto leading-relaxed">
              {storeLegalLine()}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-sm">© {new Date().getFullYear()} {brandName}. Все права защищены.</p>
              <div className="flex items-center gap-4 text-gray-500 text-sm">
                <span>Visa</span>
                <span>Mastercard</span>
                <span>Apple Pay</span>
                <span>Google Pay</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
