import Link from "next/link";
import { SafeImage } from "@/components/safe-image";
import { Badge } from "./ui/badge";
import { Star, ShoppingCart, Heart } from "lucide-react";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 hover:-translate-y-1">
      {/* Badges */}
      <div className="absolute top-6 left-6 z-10 flex flex-col gap-2">
        {product.isNew && (
          <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1">
            Новинка
          </Badge>
        )}
        {product.discount && (
          <Badge className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-3 py-1">
            -{product.discount}%
          </Badge>
        )}
        {product.isHit && (
          <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1">
            Хит
          </Badge>
        )}
      </div>

      {/* Favorite button */}
      <button
        type="button"
        className="absolute top-6 right-6 z-10 p-2.5 rounded-full bg-white/90 hover:bg-rose-50 border border-gray-200 transition-all hover:border-rose-300"
      >
        <Heart className="w-5 h-5 text-gray-400 hover:text-rose-500 transition-colors" />
      </button>

      {/* Image - Link to product page */}
      <Link href={`/product/${product.slug}`} className="block">
        <div className="aspect-square relative mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-purple-50">
          <SafeImage
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="space-y-2">
        <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full inline-block">
          {product.brand}
        </span>

        <Link href={`/product/${product.slug}`}>
          <h3 className="text-gray-900 font-semibold line-clamp-2 min-h-[2.5rem] group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-gray-900 text-sm font-semibold">{product.rating}</span>
          </div>
          <span className="text-gray-500 text-sm">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex flex-col">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {product.price.toLocaleString("ru-RU")} ₽
            </span>
            {product.oldPrice && (
              <span className="text-gray-400 text-sm line-through">
                {product.oldPrice.toLocaleString("ru-RU")} ₽
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all hover:scale-105 shadow-lg shadow-blue-200"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
