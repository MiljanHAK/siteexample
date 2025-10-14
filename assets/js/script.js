document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const langBtn = document.getElementById("lang-btn");
  const langDropdown = document.getElementById("lang-dropdown");

  // Hamburger toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // Language dropdown
  if (langBtn && langDropdown) {
    langBtn.addEventListener("click", () => {
      langDropdown.classList.toggle("active");
    });

    // Klik izvan dropdown-a ga zatvara
    document.addEventListener("click", (e) => {
      if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
        langDropdown.classList.remove("active");
      }
    });

    // Promena jezika
    langDropdown.querySelectorAll("a").forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const lang = item.getAttribute("data-lang");
        changeLanguage(lang);
        localStorage.setItem("selectedLanguage", lang);
        langDropdown.classList.remove("active");
      });
    });
  }

  // Ako je jezik ranije izabran — učitaj ga
  const savedLang = localStorage.getItem("selectedLanguage");
  if (savedLang) {
    changeLanguage(savedLang);
  }
});

// 👇 Dodaj svoje prevode ovde
const translations = {
  "home": { "en": "Home", "sr": "Početna", "de": "Startseite" },
  "about_us": { "en": "About us", "sr": "O nama", "de": "Über uns" },
  "contact_us": { "en": "Contact us", "sr": "Kontakt", "de": "Kontakt" },
  // Dodaj sve ostale tekstove sa atributom data-lang="..."
};

function changeLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach((el) => {
    const key = el.getAttribute("data-lang");
    if (translations[key] && translations[key][lang]) {
      el.textContent = translations[key][lang];
    }
  });
}
