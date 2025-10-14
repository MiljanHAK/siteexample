// ✅ Čekamo da se ceo DOM učita
document.addEventListener("DOMContentLoaded", function () {
  console.log("✅ JS učitan i DOM spreman!");

  // 🔹 ELEMENTI
  const navToggle = document.getElementById("nav-toggle");
  const mobileNavMenu = document.getElementById("mobile-nav-menu");
  const langBtn = document.getElementById("lang-btn");
  const langDropdown = document.getElementById("lang-dropdown");
  const langSwitcher = document.querySelector(".language-switcher");

  if (!navToggle || !mobileNavMenu || !langBtn || !langSwitcher) {
    console.warn("⚠️ Neki od elemenata nisu pronađeni u DOM-u!");
    return;
  }

  // 🔹 Hamburger meni toggle (mobilni)
  navToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileNavMenu.classList.toggle("active");
    console.log("📱 Mobilni meni:", mobileNavMenu.classList.contains("active") ? "otvoren" : "zatvoren");

    // Menja ikonu ☰ ↔ ✕
    navToggle.textContent = mobileNavMenu.classList.contains("active") ? "✕" : "☰";
  });

  // 🔹 Jezički dropdown toggle
  langBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    langSwitcher.classList.toggle("active");
    console.log("🌐 Jezički meni:", langSwitcher.classList.contains("active") ? "otvoren" : "zatvoren");
  });

  // 🔹 Klik bilo gde zatvara meni i dropdown
  window.addEventListener("click", (e) => {
    if (!langSwitcher.contains(e.target)) {
      langSwitcher.classList.remove("active");
    }

    if (!mobileNavMenu.contains(e.target) && !navToggle.contains(e.target)) {
      mobileNavMenu.classList.remove("active");
      navToggle.textContent = "☰";
    }
  });

  // 🔹 ESC zatvara sve
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      langSwitcher.classList.remove("active");
      mobileNavMenu.classList.remove("active");
      navToggle.textContent = "☰";
    }
  });

  // 🔹 Funkcija za promenu jezika
  window.setLanguage = function (lang) {
    console.log("🔄 Promena jezika na:", lang);

    const elements = document.querySelectorAll("[data-en]");
    elements.forEach((el) => {
      const newText = el.getAttribute(`data-${lang}`);
      if (newText) el.textContent = newText;
    });

    // Menja zastavicu
    const mainImg = langBtn.querySelector("img");
    const flagPaths = {
      sr: "assets/images/flags/rs.png",
      de: "assets/images/flags/de.png",
      es: "assets/images/flags/es.png",
      en: "assets/images/flags/en.png",
    };
    mainImg.src = flagPaths[lang] || flagPaths.en;

    // Zatvara dropdown posle izbora
    langSwitcher.classList.remove("active");
  };
});
