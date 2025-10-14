// assets/js/script.js
document.addEventListener("DOMContentLoaded", function () {
  // ELEMENTI
  const navToggle = document.getElementById("nav-toggle");
  const mobileNavMenu = document.getElementById("mobile-nav-menu");
  const langBtn = document.getElementById("lang-btn");
  const langSwitcher = document.querySelector(".language-switcher");
  const langDropdown = document.getElementById("lang-dropdown"); // tvoj dropdown
  const navMenu = document.getElementById("nav-menu"); // desktop menu (ako treba)

  // Helper: sigurno menjanje tekstova (ako su data-* atributes)
  function applyLanguage(lang) {
    // Ako koristiš data-lang atribut
    document.querySelectorAll("[data-lang]").forEach((el) => {
      const key = el.getAttribute("data-lang");
      if (translations && translations[key] && translations[key][lang]) {
        el.textContent = translations[key][lang];
      } else {
        // fallback: pokušaj sa data-{lang} (stara metoda)
        const alt = el.getAttribute(`data-${lang}`);
        if (alt) el.textContent = alt;
      }
    });

    // promeni zastavicu unutar langBtn ako postoji
    if (langBtn) {
      const img = langBtn.querySelector("img");
      if (img) {
        const flagMap = {
          sr: "assets/images/flags/rs.png",
          de: "assets/images/flags/de.png",
          es: "assets/images/flags/es.png",
          en: "assets/images/flags/en.png",
        };
        img.src = flagMap[lang] || flagMap.en;
      }
    }
  }

  // Globalna funkcija dostupna iz HTML (ako u HTML pozivaš setLanguage(...))
  window.setLanguage = function (lang) {
    if (!lang) return;
    localStorage.setItem("selectedLanguage", lang);
    applyLanguage(lang);
    // Zatvori dropdown (podržava oba pristupa)
    if (langSwitcher) langSwitcher.classList.remove("active");
    if (langDropdown) langDropdown.classList.remove("active");
  };

  // PRIMENI JEZIK IZ localStorage (ako postoji)
  const savedLang = localStorage.getItem("selectedLanguage");
  if (savedLang) applyLanguage(savedLang);

  // HAMBURGER (mobilni meni)
  if (navToggle && mobileNavMenu) {
    navToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      mobileNavMenu.classList.toggle("active");

      // Ako tvoj CSS koristi #nav-menu .active prikaz, i to je okej.
      // Menja ikonu
      navToggle.textContent = mobileNavMenu.classList.contains("active") ? "✕" : "☰";
    });
  }

  // LANGUAGE DROPDOWN: pokušaj da podržimo oba stila (toggle na switcher ili na dropdown)
  if (langBtn) {
    langBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      // Ako postoji wrapper .language-switcher, toggle na njemu (ovo odgovara CSS-u koji ima `.language-switcher.active .lang-dropdown`)
      if (langSwitcher) {
        langSwitcher.classList.toggle("active");
      }
      // Ako postoji direktno langDropdown i tvoj CSS koristi .lang-dropdown.active, toggle i njega
      if (langDropdown) {
        langDropdown.classList.toggle("active");
      }
    });
  }

  // Ako su u dropdownu linkovi/dugmad za jezike, vežemo ih (podrška i za <button> i za <a>)
  if (langDropdown) {
    // tražimo sve elemente unutar dropdown-a koji imaju data-lang atribut
    langDropdown.querySelectorAll("[data-lang]").forEach((el) => {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        const lang = this.getAttribute("data-lang");
        if (lang) {
          window.setLanguage(lang);
        }
      });
    });
  }

  // Klik izvan: zatvori i mobilni i dropdown
  window.addEventListener("click", function (e) {
    // language
    if (langSwitcher && !langSwitcher.contains(e.target)) {
      langSwitcher.classList.remove("active");
    }
    if (langDropdown && !langDropdown.contains(e.target) && (!langSwitcher || !langSwitcher.contains(e.target))) {
      langDropdown.classList.remove("active");
    }

    // mobile nav
    if (mobileNavMenu && navToggle && !mobileNavMenu.contains(e.target) && !navToggle.contains(e.target)) {
      mobileNavMenu.classList.remove("active");
      navToggle.textContent = "☰";
    }
  });

  // ESC zatvara sve
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (langSwitcher) langSwitcher.classList.remove("active");
      if (langDropdown) langDropdown.classList.remove("active");
      if (mobileNavMenu) mobileNavMenu.classList.remove("active");
      if (navToggle) navToggle.textContent = "☰";
    }
  });

  // DEBUG - samo ako ti treba, možeš da isključiš posle
  // console.log("script loaded: navToggle", !!navToggle, "mobileNavMenu", !!mobileNavMenu, "langBtn", !!langBtn, "langSwitcher", !!langSwitcher, "langDropdown", !!langDropdown);
});

/* ---------- TRANSLATIONS (primer) ----------
   Napravi ključeve koji odgovaraju data-lang atributima u HTML-u.
   Primer: <a href="about.html" data-lang="about_us">About us</a>
*/
const translations = {
  "home": { en: "Home", sr: "Početna", de: "Startseite", es: "Inicio" },
  "about_us": { en: "About us", sr: "O nama", de: "Über uns", es: "Sobre nosotros" },
  "services": { en: "Services", sr: "Usluge", de: "Dienstleistungen", es: "Servicios" },
  "portfolio": { en: "Portfolio", sr: "Portfolio", de: "Portfolio", es: "Portafolio" },
  "blog": { en: "Blog", sr: "Blog", de: "Blog", es: "Blog" },
  "contact_us": { en: "Contact us", sr: "Kontakt", de: "Kontakt", es: "Contacto" },
  // dodaj sve ostale tekstove sa data-lang ključevima
};
