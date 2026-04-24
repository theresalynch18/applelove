"use client";

import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/context/cart-context";

export function CartButton() {
  const {
    cart,
    cartOpen,
    setCartOpen,
    cartCount,
    cartTotal,
    updateQuantity,
    removeFromCart,
  } = useCart();

  return (
    <Sheet open={cartOpen} onOpenChange={setCartOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all relative"
          aria-label={`Корзина, товаров: ${cartCount}`}
        >
          <ShoppingCart className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 min-w-[1.25rem] h-5 px-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-xs text-white flex items-center justify-center font-bold">
              {cartCount > 99 ? "99+" : cartCount}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="bg-white border-gray-200 w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="text-gray-900">
            Корзина ({cartCount})
          </SheetTitle>
        </SheetHeader>
        <div className="mt-6 flex flex-col h-[calc(100vh-200px)]">
          <ScrollArea className="flex-1">
            <div className="space-y-4 pr-4">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-400">Корзина пуста</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-contain rounded-lg bg-white p-2"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-900 font-medium truncate">
                        {item.name}
                      </p>
                      <p className="text-blue-600 font-bold">
                        {item.price.toLocaleString("ru-RU")} ₽
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 rounded bg-white hover:bg-gray-100 text-gray-600 border border-gray-200"
                          aria-label="Уменьшить количество"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-gray-900 font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 rounded bg-white hover:bg-gray-100 text-gray-600 border border-gray-200"
                          aria-label="Увеличить количество"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto p-1 rounded text-rose-500 hover:bg-rose-50"
                          aria-label="Удалить из корзины"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </ScrollArea>
          {cart.length > 0 && (
            <div className="pt-4 border-t border-gray-200 space-y-4">
              <div className="flex items-center justify-between text-lg">
                <span className="text-gray-600 font-medium">Итого:</span>
                <span className="text-gray-900 font-bold text-2xl">
                  {cartTotal.toLocaleString("ru-RU")} ₽
                </span>
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 rounded-xl shadow-lg shadow-blue-200">
                Оформить заказ
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
