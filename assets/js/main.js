// NAV TOGGLE
const toggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// SCROLL REVEAL ANIMATION (basic)
window.addEventListener("scroll", () => {
  document.querySelectorAll(".service-card, .portfolio-item, .blog-post").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});
