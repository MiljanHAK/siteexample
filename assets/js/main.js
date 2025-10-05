<!-- JS -->
<script src="assets/js/main.js"></script>

<script>
  // Toggle nav menu on mobile
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Language dropdown
  const langBtn = document.getElementById('lang-btn');
  const langDropdown = document.getElementById('lang-dropdown');

  langBtn.addEventListener('click', () => {
    langDropdown.classList.toggle('show');
  });

  window.addEventListener('click', function(event) {
    if (!event.target.closest('.language-switcher')) {
      langDropdown.classList.remove('show');
    }
  });

  function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(el => {
      const newText = el.getAttribute(`data-${lang}`);
      if (newText) el.textContent = newText;
    });

    // Promeni samo ikonu u glavnom dugmetu
    const mainImg = langBtn.querySelector('img');
    mainImg.src = `assets/images/flags/${lang === 'sr' ? 'rs' : lang}.png`;

    langDropdown.classList.remove('show'); // zatvori dropdown
  }
</script>

</body>
</html>
