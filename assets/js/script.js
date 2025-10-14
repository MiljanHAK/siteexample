// assets/js/script.js
document.addEventListener("DOMContentLoaded", function () {
  // ELEMENTI
  const navToggle = document.getElementById("nav-toggle");
  const mobileNavMenu = document.getElementById("mobile-nav-menu");
  const langBtn = document.getElementById("lang-btn");
  const langSwitcher = document.getElementById("language-switcher");
  const langDropdown = document.getElementById("lang-dropdown");

  // Funkcija za primenu jezika
  function applyLanguage(lang) {
    // Ažuriraj sve elemente sa data-* atributima
    document.querySelectorAll("[data-en]").forEach(element => {
      if (element.getAttribute(`data-${lang}`)) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.value = element.getAttribute(`data-${lang}`);
        } else {
          element.textContent = element.getAttribute(`data-${lang}`);
        }
      }
    });

    // Ažuriraj aktivne linkove u navigaciji
    document.querySelectorAll('nav a').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === window.location.pathname.split('/').pop() || 
          (link.getAttribute('href') === 'index.html' && window.location.pathname.endsWith('/'))) {
        link.classList.add('active');
      }
    });

    // Promeni zastavicu
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
        img.alt = lang.toUpperCase();
      }
    }

    // Sačuvaj izabrani jezik
    localStorage.setItem("selectedLanguage", lang);
    
    // Ažuriraj html lang atribut
    document.documentElement.lang = lang;
  }

  // Globalna funkcija za promenu jezika
  window.setLanguage = function (lang) {
    applyLanguage(lang);
    // Zatvori dropdown
    if (langSwitcher) langSwitcher.classList.remove("active");
    if (langDropdown) langDropdown.classList.remove("active");
  };

  // Primena sačuvanog jezika ili podrazumevanog
  const savedLang = localStorage.getItem("selectedLanguage") || 'en';
  applyLanguage(savedLang);

  // HAMBURGER MENI
  if (navToggle && mobileNavMenu) {
    navToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      const isActive = mobileNavMenu.classList.toggle("active");
      navToggle.textContent = isActive ? "✕" : "☰";
      
      // Zatvori language dropdown kada se otvori mobilni meni
      if (langSwitcher) langSwitcher.classList.remove("active");
    });
  }

  // LANGUAGE DROPDOWN
  if (langBtn && langSwitcher) {
    langBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      langSwitcher.classList.toggle("active");
      
      // Zatvori mobilni meni kada se otvori language dropdown
      if (mobileNavMenu) {
        mobileNavMenu.classList.remove("active");
        if (navToggle) navToggle.textContent = "☰";
      }
    });
  }

  // Klik izvan zatvara dropdown i mobilni meni
  document.addEventListener("click", function (e) {
    // Zatvori language dropdown
    if (langSwitcher && !langSwitcher.contains(e.target)) {
      langSwitcher.classList.remove("active");
    }
    
    // Zatvori mobilni meni
    if (mobileNavMenu && navToggle && 
        !mobileNavMenu.contains(e.target) && 
        !navToggle.contains(e.target) &&
        mobileNavMenu.classList.contains("active")) {
      mobileNavMenu.classList.remove("active");
      navToggle.textContent = "☰";
    }
  });

  // ESC zatvara sve
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (langSwitcher) langSwitcher.classList.remove("active");
      if (mobileNavMenu) {
        mobileNavMenu.classList.remove("active");
        if (navToggle) navToggle.textContent = "☰";
      }
    }
  });

  // Zatvori meni kada se klikne na link (za mobilni)
  if (mobileNavMenu) {
    mobileNavMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNavMenu.classList.remove("active");
        if (navToggle) navToggle.textContent = "☰";
      });
    });
  }
});
