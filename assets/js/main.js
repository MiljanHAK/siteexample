<script>
  // Hamburger toggle za MOBILNI meni
  const navToggle = document.getElementById('nav-toggle');
  const mobileNavMenu = document.getElementById('mobile-nav-menu'); // promenjeno na mobile-nav-menu
  
  navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileNavMenu.classList.toggle('active');
    
    // Menja ikonu ☰ ↔ ✕
    if (mobileNavMenu.classList.contains('active')) {
      navToggle.innerHTML = '✕';
    } else {
      navToggle.innerHTML = '☰';
    }
  });

  // Language dropdown
  const langBtn = document.getElementById('lang-btn');
  const langDropdown = document.getElementById('lang-dropdown');
  const langSwitcher = document.querySelector('.language-switcher');

  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langSwitcher.classList.toggle('active'); // promenjeno na .active umesto .show
  });

  // Zatvaranje dropdown-a i mobilnog menija kada se klikne bilo gde drugde
  window.addEventListener('click', (e) => {
    // Zatvori language dropdown
    if (!langSwitcher.contains(e.target)) {
      langSwitcher.classList.remove('active');
    }
    
    // Zatvori mobilni meni
    if (!mobileNavMenu.contains(e.target) && !navToggle.contains(e.target)) {
      mobileNavMenu.classList.remove('active');
      navToggle.innerHTML = '☰';
    }
  });

  // Zatvaranje na ESC tipku
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      langSwitcher.classList.remove('active');
      mobileNavMenu.classList.remove('active');
      navToggle.innerHTML = '☰';
    }
  });

  function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(el => {
      const newText = el.getAttribute(`data-${lang}`);
      if (newText) el.textContent = newText;
    });

    const mainImg = langBtn.querySelector('img');
    switch (lang) {
      case 'sr': mainImg.src = 'assets/images/flags/rs.png'; break;
      case 'de': mainImg.src = 'assets/images/flags/de.png'; break;
      case 'es': mainImg.src = 'assets/images/flags/es.png'; break;
      default: mainImg.src = 'assets/images/flags/en.png';
    }
    
    // Zatvori dropdown nakon izbora jezika
    langSwitcher.classList.remove('active');
  }
</script>
