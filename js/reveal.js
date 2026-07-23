/* ── reveal.js ──
   Scroll-triggered reveal animations using Intersection Observer.

   How it works:
   1. Finds every element with [data-reveal] attribute.
   2. Watches them with an IntersectionObserver.
   3. When an element enters the viewport, adds class "is-visible".
   4. Also triggers hero entrance on page load.

   Usage in HTML:
     <section data-reveal class="reveal">...</section>
     <div data-reveal class="reveal-left">...</div>
   The "data-reveal" attr tells JS to watch it; the class
   (reveal / reveal-left / reveal-right) defines the animation.

   Hero entrance:
     On load, adds "hero-in-view" class to the .hero element.
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  // ── 1. Scroll reveals ──
  if (typeof IntersectionObserver !== 'undefined') {
    const revealElements = document.querySelectorAll('[data-reveal]');

    if (revealElements.length > 0) {
      const observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.15,
        }
      );

      revealElements.forEach(function (el) {
        observer.observe(el);
      });
    }
  } else {
    // Fallback: reveal everything immediately if IntersectionObserver unavailable
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // ── 2. Hero entrance (page-load animation) — wait for images ──
  window.addEventListener('load', function () {
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.classList.add('hero-in-view');
    }
  });
});
