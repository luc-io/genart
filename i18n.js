import i18next from "./node_modules/i18next/dist/esm/i18next.js";
import HttpBackend from "./node_modules/i18next-http-backend/dist/esm/index.js";


i18next
  .use(HttpBackend)
  .init({
    lng: "en",
    fallbackLng: "en",
    debug: true,
    ns: ["translation"],
    defaultNS: "translation",
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json"
    }
  });

export function applyTranslations() {
  const t = i18next.getFixedT(i18next.language);
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const translation = t(key);

    if (translation) {
      element.textContent = translation;
    }
  });
}

export function initI18n(lang) {
  i18next.changeLanguage(lang, (err) => {
    if (err) {
      console.log('Error changing language:', err);
      return;
    }
    applyTranslations();
  });
}
