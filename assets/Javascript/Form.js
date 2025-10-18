document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // prevent default form submission

  const name = encodeURIComponent(document.getElementById('name').value);
  const phone = encodeURIComponent(document.getElementById('phone').value);
  const email = encodeURIComponent(document.getElementById('email').value);
  const message = encodeURIComponent(document.getElementById('message').value);

  // WhatsApp number in international format without + or 0
  const waNumber = "918591036502";

  // Predefined message
  const waMessage = `Hello Cancervista Team,%0A%0AName: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AMessage: ${message}`;

  // Open WhatsApp chat in new tab
  window.open(`https://wa.me/${waNumber}?text=${waMessage}`, '_blank');
});
