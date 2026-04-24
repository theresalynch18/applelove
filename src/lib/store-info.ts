/** Реквизиты продавца и контакты для сайта (юр. информация). */
export const storeInfo = {
  proprietor: "Кузнецов Евгений Дмитриевич",
  legalForm: "ИП",
  inn: "760607946678",
  ogrnip: "326762700012970",
  email: "shtrabakop@mail.ru",
  /** Как в сообщении; для tel: используется phoneTel */
  phoneDisplay: "+7 (902) 227-82-98",
  phoneTel: "+79022278298",
  address: "пр. Авиаторов, 149, Ярославль, Ярославская обл., 150062",
  hours: "Пн–Вс: 9:00 – 21:00",
} as const;

export function storeLegalLine(): string {
  const { legalForm, proprietor, inn, ogrnip } = storeInfo;
  return `${legalForm} ${proprietor} · ИНН ${inn} · ОГРНИП ${ogrnip}`;
}
