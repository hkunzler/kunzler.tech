import i18n from "i18next";
import { initReactI18next } from "react-i18next"; // if you are using React
import enTranslations from "./locales/en.json";

i18n
  // if you're using React:
  .use(initReactI18next)
  // without React, you don't need the above .use() line
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
    },
    lng: "en", // if you're using a language detector, you can remove this line
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;

export const $t = (key: string) => i18n.t(key);
