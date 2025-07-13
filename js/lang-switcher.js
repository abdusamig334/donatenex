// lang-switcher.js – Multilingual Support System for DonateNex

const langSelect = document.getElementById("langSwitcher");
const defaultLang = localStorage.getItem("dnx-lang") || "en";
const supportedLangs = ["uz", "ru", "en", "tr", "de", "es"];

langSelect.value = defaultLang;

async function loadLanguage(lang) {
  try {
    if (!supportedLangs.includes(lang)) lang = "en";
    const res = await fetch(`/lang/${lang}.json`);
    const data = await res.json();

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (data[key]) el.innerHTML = data[key];
    });

    localStorage.setItem("dnx-lang", lang);
  } catch (err) {
    console.error("Language load error:", err);
  }
}

langSelect.addEventListener("change", (e) => {
  const selectedLang = e.target.value;
  loadLanguage(selectedLang);
});

window.addEventListener("DOMContentLoaded", () => {
  loadLanguage(defaultLang);
});
