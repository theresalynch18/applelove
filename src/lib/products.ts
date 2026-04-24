export interface Product {
  id: number;
  brand: string;
  name: string;
  rating: number;
  reviews: number;
  price: number;
  oldPrice: number | null;
  discount: number | null;
  isNew: boolean;
  isHit: boolean;
  image: string;
  slug: string;
  description?: string;
  features?: string[];
  specs?: Record<string, string>;
  images?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    brand: "Apple",
    name: "iPhone 15 Pro Max 256GB Natural Titanium",
    rating: 4.9,
    reviews: 234,
    price: 52990,
    oldPrice: 59990,
    discount: 12,
    isNew: true,
    isHit: true,
    image: "https://ext.same-assets.com/1778371482/2464377103.jpeg",
    slug: "iphone-15-pro-max-256gb-natural-titanium",
    description: "iPhone 15 Pro Max — это вершина инноваций Apple. Титановый корпус, мощный чип A17 Pro, революционная камера и самый большой дисплей Super Retina XDR.",
    features: [
      "Титановый корпус aerospace-grade",
      "Чип A17 Pro с 6-ядерным GPU",
      "Камера 48 МП Pro с 5x оптическим зумом",
      "Дисплей Super Retina XDR 6.7 дюйма",
      "Время работы до 29 часов видео",
      "Кнопка действия для быстрых команд"
    ],
    specs: {
      "Дисплей": "6.7\" Super Retina XDR, 120 Гц",
      "Процессор": "Apple A17 Pro",
      "Память": "256 ГБ",
      "Камера": "48 МП + 12 МП + 12 МП",
      "Батарея": "До 29 часов видео",
      "Цвет": "Natural Titanium"
    },
    images: [
      "https://ext.same-assets.com/1778371482/2464377103.jpeg",
      "https://ext.same-assets.com/1778371482/2464377103.jpeg"
    ]
  },
  {
    id: 2,
    brand: "Apple",
    name: 'MacBook Air 15" M3 16GB/512GB Midnight',
    rating: 4.9,
    reviews: 178,
    price: 72990,
    oldPrice: 79990,
    discount: 9,
    isNew: true,
    isHit: false,
    image: "https://ext.same-assets.com/1778371482/3950030087.jpeg",
    slug: "macbook-air-m3-15-512gb-midnight",
    description: "MacBook Air 15 с чипом M3 — невероятно тонкий и мощный ноутбук. Большой дисплей Liquid Retina, до 18 часов работы и бесшумная работа без вентиляторов.",
    features: [
      "Чип Apple M3 с 8-ядерным CPU",
      "Дисплей Liquid Retina 15.3 дюйма",
      "16 ГБ единой памяти",
      "512 ГБ SSD накопитель",
      "До 18 часов работы от батареи",
      "Бесшумная работа без вентиляторов"
    ],
    specs: {
      "Дисплей": "15.3\" Liquid Retina, 2880×1864",
      "Процессор": "Apple M3 (8 ядер)",
      "Память": "16 ГБ",
      "Накопитель": "512 ГБ SSD",
      "Батарея": "До 18 часов",
      "Цвет": "Midnight"
    },
    images: [
      "https://ext.same-assets.com/1778371482/3950030087.jpeg"
    ]
  },
  {
    id: 3,
    brand: "Apple",
    name: "Apple Watch Ultra 2 49mm Titanium",
    rating: 4.8,
    reviews: 112,
    price: 38990,
    oldPrice: null,
    discount: null,
    isNew: false,
    isHit: false,
    image: "https://ext.same-assets.com/1778371482/809301305.jpeg",
    slug: "apple-watch-ultra-2-49mm-titanium",
    description: "Apple Watch Ultra 2 — самые прочные и функциональные смарт-часы Apple для экстремальных условий. Титановый корпус, яркий дисплей и до 36 часов работы.",
    features: [
      "Титановый корпус 49 мм",
      "Самый яркий дисплей Apple Watch",
      "До 36 часов работы от батареи",
      "Глубина погружения до 100 метров",
      "Двухчастотный GPS высокой точности",
      "Кнопка действия для быстрого доступа"
    ],
    specs: {
      "Размер корпуса": "49 мм",
      "Материал": "Титан",
      "Дисплей": "Always-On Retina, 3000 нит",
      "Батарея": "До 36 часов",
      "Водонепроницаемость": "100 метров",
      "GPS": "Двухчастотный"
    },
    images: [
      "https://ext.same-assets.com/1778371482/809301305.jpeg"
    ]
  },
  {
    id: 4,
    brand: "Samsung",
    name: "Samsung Galaxy S24 Ultra 256GB Titanium Gray",
    rating: 4.8,
    reviews: 345,
    price: 54990,
    oldPrice: 62990,
    discount: 13,
    isNew: true,
    isHit: true,
    image: "https://ext.same-assets.com/1778371482/2545412255.jpeg",
    slug: "samsung-galaxy-s24-ultra-256gb-titanium-gray",
    description: "Galaxy S24 Ultra с революционными AI-функциями, 200 МП камерой и S Pen. Титановый корпус, мощный процессор Snapdragon 8 Gen 3 и яркий дисплей Dynamic AMOLED 2X.",
    features: [
      "Титановый корпус премиум-класса",
      "Камера 200 МП с AI Zoom",
      "Процессор Snapdragon 8 Gen 3",
      "S Pen в комплекте",
      "Дисплей Dynamic AMOLED 2X 6.8\"",
      "Galaxy AI с переводом в реальном времени"
    ],
    specs: {
      "Дисплей": "6.8\" Dynamic AMOLED 2X, 120 Гц",
      "Процессор": "Snapdragon 8 Gen 3",
      "Память": "256 ГБ",
      "Камера": "200 МП + 50 МП + 12 МП + 10 МП",
      "Батарея": "5000 мАч",
      "Цвет": "Titanium Gray"
    },
    images: [
      "https://ext.same-assets.com/1778371482/2545412255.jpeg"
    ]
  },
  {
    id: 5,
    brand: "Samsung",
    name: "Samsung Galaxy Z Fold5 256GB Phantom Black",
    rating: 4.6,
    reviews: 123,
    price: 74990,
    oldPrice: null,
    discount: null,
    isNew: false,
    isHit: false,
    image: "https://ext.same-assets.com/1778371482/2083056514.jpeg",
    slug: "samsung-galaxy-z-fold5-256gb-phantom-black",
    description: "Galaxy Z Fold5 — складной смартфон нового поколения. Превращается из компактного телефона в планшет с большим экраном. Flex Mode для многозадачности.",
    features: [
      "Складной дизайн премиум-класса",
      "Основной экран 7.6 дюйма",
      "Внешний экран 6.2 дюйма",
      "Процессор Snapdragon 8 Gen 2",
      "Режим Flex для многозадачности",
      "S Pen совместимость"
    ],
    specs: {
      "Основной дисплей": "7.6\" Dynamic AMOLED 2X",
      "Внешний дисплей": "6.2\" Dynamic AMOLED 2X",
      "Процессор": "Snapdragon 8 Gen 2",
      "Память": "256 ГБ",
      "Камера": "50 МП + 12 МП + 10 МП",
      "Батарея": "4400 мАч"
    },
    images: [
      "https://ext.same-assets.com/1778371482/2083056514.jpeg"
    ]
  },
  {
    id: 6,
    brand: "Apple",
    name: "iPhone 14 128GB Midnight",
    rating: 4.7,
    reviews: 456,
    price: 32990,
    oldPrice: 37990,
    discount: 13,
    isNew: false,
    isHit: true,
    image: "https://ext.same-assets.com/1778371482/1936288658.jpeg",
    slug: "iphone-14-128gb-midnight",
    description: "iPhone 14 — мощный смартфон с передовыми технологиями. Чип A15 Bionic, улучшенная камера и увеличенное время работы.",
    features: [
      "Чип A15 Bionic",
      "Система камер с улучшенной съемкой при слабом освещении",
      "Дисплей Super Retina XDR 6.1\"",
      "До 20 часов видео",
      "Ceramic Shield прочнее любого стекла",
      "Экстренный вызов SOS через спутник"
    ],
    specs: {
      "Дисплей": "6.1\" Super Retina XDR",
      "Процессор": "Apple A15 Bionic",
      "Память": "128 ГБ",
      "Камера": "12 МП + 12 МП",
      "Батарея": "До 20 часов видео",
      "Цвет": "Midnight"
    },
    images: [
      "https://ext.same-assets.com/1778371482/1936288658.jpeg",
    ],
  },
  {
    id: 7,
    brand: "Apple",
    name: "AirPods Pro 2 с USB-C",
    rating: 4.8,
    reviews: 567,
    price: 12990,
    oldPrice: 14990,
    discount: 13,
    isNew: false,
    isHit: true,
    image: "https://ext.same-assets.com/1778371482/4128329083.jpeg",
    slug: "airpods-pro-2-usb-c",
    description: "AirPods Pro 2 поколения с активным шумоподавлением, адаптивным аудио и зарядным кейсом USB-C.",
    features: [
      "Активное шумоподавление нового уровня",
      "Адаптивное аудио",
      "Персонализированный пространственный звук",
      "До 6 часов прослушивания",
      "Зарядный кейс с разъемом USB-C",
      "Поиск через Локатор"
    ],
    specs: {
      "Время работы": "До 6 часов (до 30 с кейсом)",
      "Чип": "H2",
      "Подключение": "Bluetooth 5.3",
      "Зарядка": "USB-C, Qi, MagSafe",
      "Защита": "IPX4",
      "Управление": "Сенсорное"
    }
  },
  {
    id: 8,
    brand: "Samsung",
    name: "Samsung Galaxy Watch6 Classic 47mm Silver",
    rating: 4.5,
    reviews: 89,
    price: 18990,
    oldPrice: 22990,
    discount: 17,
    isNew: false,
    isHit: true,
    image: "https://ext.same-assets.com/1778371482/4278537367.jpeg",
    slug: "samsung-galaxy-watch6-classic-47mm-silver",
    description: "Galaxy Watch6 Classic — премиальные смарт-часы с вращающимся безелем, большим AMOLED дисплеем и расширенными функциями здоровья.",
    features: [
      "Вращающийся безель",
      "Super AMOLED дисплей 1.5\"",
      "Мониторинг сна и здоровья",
      "GPS и NFC",
      "До 40 часов работы",
      "Защита IP68 и MIL-STD-810H"
    ],
    specs: {
      "Размер": "47 мм",
      "Дисплей": "1.5\" Super AMOLED",
      "Батарея": "До 40 часов",
      "Защита": "IP68, MIL-STD-810H",
      "Подключение": "Bluetooth, Wi-Fi, NFC",
      "Датчики": "ЧСС, ЭКГ, давление, SpO2"
    }
  }
];

export const categories = [
  { name: "iPhone", image: "https://ext.same-assets.com/1778371482/1786553905.jpeg", href: "/catalog/iphone" },
  { name: "MacBook", image: "https://ext.same-assets.com/1778371482/777578308.jpeg", href: "/catalog/macbook" },
  { name: "iPad", image: "https://ext.same-assets.com/1778371482/3316711171.jpeg", href: "/catalog/ipad" },
  { name: "Apple Watch", image: "https://ext.same-assets.com/1778371482/1130834709.jpeg", href: "/catalog/apple-watch" },
  { name: "AirPods", image: "https://ext.same-assets.com/1778371482/3389515635.jpeg", href: "/catalog/airpods" },
  { name: "Samsung Смартфоны", image: "https://ext.same-assets.com/1778371482/1199231353.jpeg", href: "/catalog/samsung-smartphones" },
  { name: "Samsung Планшеты", image: "https://ext.same-assets.com/1778371482/3187358711.jpeg", href: "/catalog/samsung-tablets" },
  { name: "Samsung Часы", image: "https://ext.same-assets.com/1778371482/634113894.jpeg", href: "/catalog/samsung-watches" },
  { name: "Аксессуары", image: "https://ext.same-assets.com/1778371482/2907362425.jpeg", href: "/catalog/accessories" },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getRecommendedProducts() {
  return products.slice(0, 5);
}

export function getBestsellers() {
  return products.filter(p => p.isHit);
}
