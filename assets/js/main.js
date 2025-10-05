const langBtn = document.getElementById('lang-btn');
const langDropdown = document.getElementById('lang-dropdown');

langBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // sprečava zatvaranje dropdowna odmah
  langDropdown.classList.toggle('show');
});

window.addEventListener('click', function() {
  langDropdown.classList.remove('show');
});

function setLanguage(lang) {
  const elements = document.querySelectorAll('[data-en]');
  elements.forEach(el => {
    const newText = el.getAttribute(`data-${lang}`);
    if (newText) el.textContent = newText;
  });

  // Promeni ikonu glavnog dugmeta
  const mainImg = langBtn.querySelector('img');
  mainImg.src = `assets/images/flags/${lang === 'sr' ? 'rs' : lang}.png`;

  langDropdown.classList.remove('show');
}
