import { products, categories, type Product } from "@/lib/products";

const slugTitles: Record<string, string> = {
  iphone: "iPhone",
  macbook: "MacBook",
  ipad: "iPad",
  "apple-watch": "Apple Watch",
  airpods: "AirPods",
  "samsung-smartphones": "Samsung — смартфоны",
  "samsung-tablets": "Samsung — планшеты",
  "samsung-watches": "Samsung — часы",
  accessories: "Аксессуары",
  samsung: "Samsung",
};

export function getCatalogTitle(slug: string): string {
  return slugTitles[slug.toLowerCase()] ?? slug;
}

export function isKnownCatalogSlug(slug: string): boolean {
  const s = slug.toLowerCase();
  if (slugTitles[s]) return true;
  return categories.some((c) => c.href === `/catalog/${s}`);
}

export function getProductsByCatalogSlug(slug: string): Product[] {
  const s = slug.toLowerCase();

  switch (s) {
    case "iphone":
      return products.filter(
        (p) => p.brand === "Apple" && /iphone/i.test(p.name)
      );
    case "macbook":
      return products.filter((p) => /macbook/i.test(p.name));
    case "ipad":
      return products.filter((p) => /ipad/i.test(p.name));
    case "apple-watch":
      return products.filter(
        (p) => p.brand === "Apple" && /watch/i.test(p.name)
      );
    case "airpods":
      return products.filter((p) => /airpods/i.test(p.name));
    case "samsung-smartphones":
      return products.filter(
        (p) =>
          p.brand === "Samsung" &&
          !/tab|watch/i.test(p.name)
      );
    case "samsung-tablets":
      return products.filter(
        (p) => p.brand === "Samsung" && /tab/i.test(p.name)
      );
    case "samsung-watches":
      return products.filter(
        (p) => p.brand === "Samsung" && /watch/i.test(p.name)
      );
    case "accessories":
      return [];
    case "samsung":
      return products.filter((p) => p.brand === "Samsung");
    default:
      return [];
  }
}
