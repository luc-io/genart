import { initI18n } from "./i18n.js";

let currentLanguage = "en";

function toggleLanguage() {
  const lang = document.documentElement.lang === "en" ? "es" : "en";
  document.documentElement.lang = lang;
  initI18n(lang);

  // Update the button text to reflect the new language
  const languageToggle = document.getElementById("languageToggle");
  languageToggle.textContent = lang === "en" ? "Español" : "English";
}

// Attach the event listener to the button
document.getElementById("languageToggle").addEventListener("click", toggleLanguage);

// Call the initI18n function when the page loads:
document.addEventListener("DOMContentLoaded", () => {
  initI18n("en"); // Assuming "en" as the default language
});
