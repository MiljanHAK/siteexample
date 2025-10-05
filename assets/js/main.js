<script>
  // Hamburger toggle
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Language dropdown
  const langBtn = document.getElementById('lang-btn');
  const langDropdown = document.getElementById('lang-dropdown');
  const langSwitcher = document.querySelector('.language-switcher');

  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('show');
  });

  window.addEventListener('click', (e) => {
    if (!langSwitcher.contains(e.target)) {
      langDropdown.classList.remove('show');
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
    langDropdown.classList.remove('show');
  }
</script>

</body>
</html>
