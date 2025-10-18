const navList = document.querySelector('.nav-list');
const toggleBtn = document.querySelector('header button');

toggleBtn.addEventListener('click', () => {
  navList.classList.toggle('show');
});
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    '.fade-in, .fade-in-right, .fade-in-left, .fade-in-up'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  animatedElements.forEach(el => observer.observe(el));
});

