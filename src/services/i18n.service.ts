import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from '../locales/en.json';
import translationDE from '../locales/de.json';

const resources = {
  en: {
    translation: translationEN
  },
  de: {
    translation: translationDE
  }
};

const init18n = () => {
  i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });
}

const i18nService = {
  init18n
};

export default i18nService;
