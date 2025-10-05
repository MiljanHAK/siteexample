const langBtn = document.getElementById('lang-btn');
const langDropdown = document.getElementById('lang-dropdown');

// Toggle dropdown
langBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  langDropdown.classList.toggle('show');
});

// Close dropdown on outside click
window.addEventListener('click', (event) => {
  if (!langDropdown.contains(event.target) && event.target !== langBtn) {
    langDropdown.classList.remove('show');
  }
});

// Set language
function setLanguage(lang) {
  const elements = document.querySelectorAll('[data-en]');
  elements.forEach(el => {
    const newText = el.getAttribute(`data-${lang}`);
    if (newText) el.textContent = newText;
  });

  // Update button flag and text
  const flagImg = langBtn.querySelector('img');
  let label = '';
  switch(lang) {
    case 'sr': flagImg.src = 'assets/images/flags/rs.png'; label = 'SR'; break;
    case 'de': flagImg.src = 'assets/images/flags/de.png'; label = 'DE'; break;
    case 'es': flagImg.src = 'assets/images/flags/es.png'; label = 'ES'; break;
    default: flagImg.src = 'assets/images/flags/en.png'; label = 'EN'; break;
  }
  langBtn.innerHTML = `<img src="${flagImg.src}" width="15"> ${label} ▼`;
}
