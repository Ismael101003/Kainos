/* Personaliza estos datos antes de publicar el sitio. */
const KAINOS_CONFIG = {
  whatsappNumber: '529131035238', // México: 52 + número de 10 dígitos, sin + ni espacios
  email: 'ismaelmara1010@gmail.com',
  github: '#',
  instagram: '#',
  facebook: '#'
};

const whatsappUrl = (message = 'Hola, me gustaría conocer las soluciones de KAINOS.') =>
  `https://wa.me/${KAINOS_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;

document.querySelectorAll('.whatsapp-link').forEach(link => link.href = whatsappUrl());
document.querySelectorAll('.email-link').forEach(link => link.href = `mailto:${KAINOS_CONFIG.email}`);
document.querySelectorAll('.github-link').forEach(link => link.href = KAINOS_CONFIG.github);
document.querySelectorAll('.instagram-link').forEach(link => link.href = KAINOS_CONFIG.instagram);
document.querySelectorAll('.facebook-link').forEach(link => link.href = KAINOS_CONFIG.facebook);

// El formulario se envía de forma real a WhatsApp. Este enlace abre el cliente
// de correo del visitante, ya dirigido al correo de KAINOS, sin simular un envío.
const contactEmail = document.querySelector('.contact-email');
if (contactEmail) contactEmail.textContent = KAINOS_CONFIG.email;

const contactIntro = document.querySelector('.contact-intro');
if (contactIntro) {
  const contactPhone = document.createElement('a');
  contactPhone.className = 'contact-phone';
  contactPhone.href = whatsappUrl();
  contactPhone.target = '_blank';
  contactPhone.rel = 'noopener';
  contactPhone.textContent = 'WhatsApp: 9131 035 238';
  contactIntro.append(contactPhone);
}

const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
  menuButton.querySelector('.sr-only').textContent = isOpen ? 'Cerrar menú' : 'Abrir menú';
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false');
}));

const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = `Hola, soy ${data.get('name')}.\n\nCorreo: ${data.get('email')}\nTeléfono: ${data.get('phone')}\n\nNecesito: ${data.get('message')}`;
  window.open(whatsappUrl(message), '_blank', 'noopener');
});

const emailButton = document.createElement('button');
emailButton.type = 'button';
emailButton.className = 'form-email-button';
emailButton.textContent = 'Preparar correo';
emailButton.addEventListener('click', () => {
  if (!contactForm.reportValidity()) return;
  const data = new FormData(contactForm);
  const body = `Nombre: ${data.get('name')}\nCorreo: ${data.get('email')}\nTeléfono: ${data.get('phone')}\n\nMensaje:\n${data.get('message')}`;
  window.location.href = `mailto:${KAINOS_CONFIG.email}?subject=${encodeURIComponent('Solicitud desde KAINOS')}&body=${encodeURIComponent(body)}`;
});
contactForm.querySelector('.form-note').before(emailButton);

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
