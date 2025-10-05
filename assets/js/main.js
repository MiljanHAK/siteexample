<!-- JS -->
<script>
// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Language dropdown
const langBtn = document.getElementById('lang-btn');
const langDropdown = document.getElementById('lang-dropdown');

langBtn.addEventListener('click', function(e) {
  e.stopPropagation(); // sprečava zatvaranje odmah
  langDropdown.classList.toggle('show');
});

window.addEventListener('click', function() {
  langDropdown.classList.remove('show'); // klik van dropdowna zatvara
});

function setLanguage(lang) {
  const elements = document.querySelectorAll('[data-en]');
  elements.forEach(el => {
    const newText = el.getAttribute(`data-${lang}`);
    if (newText) el.textContent = newText;
  });

  const mainImg = langBtn.querySelector('img');
  mainImg.src = `assets/images/flags/${lang === 'sr' ? 'rs' : lang}.png`;

  langDropdown.classList.remove('show');
}
</script>
