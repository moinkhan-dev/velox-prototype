(function () {
  const slides = document.querySelectorAll('.bg-slide');
  if (!slides.length) return;

  let current = 0;
  window.setInterval(function () {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 4000);
})();
