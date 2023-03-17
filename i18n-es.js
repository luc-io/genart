const translations = {
    es: {
      title: "La belleza de los campos de flujo matemáticos",
      subtitle: "Una danza armoniosa de partículas",
      // Add all other translations here
    },
  };
  
  function applyTranslations() {
    const t = translations.es;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const translation = t[key];
  
      if (translation) {
        element.textContent = translation;
      }
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const languageToggle = document.getElementById("languageToggle");
    languageToggle.addEventListener("click", applyTranslations);
  });
  