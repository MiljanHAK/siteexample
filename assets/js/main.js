// Toggle language dropdown
const langBtn = document.getElementById('lang-btn');
const langDropdown = document.getElementById('lang-dropdown');

langBtn.addEventListener('click', () => {
  langDropdown.style.display = langDropdown.style.display === 'block' ? 'none' : 'block';
});

// Change language
function setLanguage(lang) {
  const elements = document.querySelectorAll('[data-' + lang + ']');
  elements.forEach(el => {
    el.textContent = el.getAttribute('data-' + lang);
  });
  langDropdown.style.display = 'none';
  const imgSrc = document.querySelector('#lang-dropdown button[onclick="setLanguage(\'' + lang + '\')"] img').src;
  langBtn.innerHTML = `<img src="${imgSrc}" width="20"> ${lang.toUpperCase()} ▼`;
}

// Fix hero height (video full viewport)
function setHeroHeight() {
  const hero = document.querySelector('.hero');
  hero.style.height = window.innerHeight + 'px';
}
window.addEventListener('load', setHeroHeight);
window.addEventListener('resize', setHeroHeight);
