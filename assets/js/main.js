
// Toggle language dropdown
const langBtn = document.getElementById('lang-btn');
const langDropdown = document.getElementById('lang-dropdown');

langBtn.addEventListener('click', () => {
  langDropdown.classList.toggle('show');
});

window.onclick = function(event) {
  if (!event.target.matches('#lang-btn')) {
    if (langDropdown.classList.contains('show')) {
      langDropdown.classList.remove('show');
    }
  }
}

// Set language function
function setLanguage(lang) {
  const elements = document.querySelectorAll('[data-en]');
  elements.forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}
