document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navbar = document.querySelector('.navbar');
  if (!hamburger || !navbar) return;

  hamburger.addEventListener('click', function () {
    const isOpen = navbar.classList.toggle('nav-open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      navbar.classList.remove('nav-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
});
