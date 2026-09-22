/* Personaliza estos datos antes de publicar el sitio. */
const KAINOS_CONFIG = {
  whatsappNumber: '525500000000', // Formato internacional, sin + ni espacios
  email: 'contacto@kainos.mx',
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

document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = `Hola, soy ${data.get('name')}.\n\nCorreo: ${data.get('email')}\nTeléfono: ${data.get('phone')}\n\nNecesito: ${data.get('message')}`;
  window.open(whatsappUrl(message), '_blank', 'noopener');
});

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
