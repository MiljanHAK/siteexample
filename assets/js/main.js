// Toggle language dropdown
const langBtn = document.getElementById('lang-btn');
const langDropdown = document.getElementById('lang-dropdown');

langBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // Sprečava propagaciju klika na window
  langDropdown.classList.toggle('show');
});

// Zatvaranje dropdown-a kada se klikne van njega
window.addEventListener('click', (event) => {
  if (!langDropdown.contains(event.target) && event.target !== langBtn) {
    langDropdown.classList.remove('show');
  }
});

// Set language function
function setLanguage(lang) {
  const elements = document.querySelectorAll('[data-en]');
  elements.forEach(el => {
    const newText = el.getAttribute(`data-${lang}`);
    if (newText) {
      el.textContent = newText;
    }
  });

  // Opcionalno: promeni ikonice u dugmetu
  const flagImg = langBtn.querySelector('img');
  if (flagImg) {
    switch(lang) {
      case 'sr': flagImg.src = 'assets/images/flags/rs.png'; break;
      case 'de': flagImg.src = 'assets/images/flags/de.png'; break;
      case 'es': flagImg.src = 'assets/images/flags/es.png'; break;
      default: flagImg.src = 'assets/images/flags/en.png';
    }
  }
}
