const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');

let current = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) => t.classList.toggle('active', i === index));
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
  current = index;
}

// Auto-slide every 5 seconds
setInterval(() => {
  let next = (current + 1) % testimonials.length;
  showTestimonial(next);
}, 5000);

// Dot click
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const index = parseInt(dot.dataset.index);
    showTestimonial(index);
  });
});
