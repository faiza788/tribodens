/* TriboDENS - Main JS | Built by Prezlox */
(function () {
  'use strict';

  // Sticky navbar
  var navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('sticky', window.scrollY > 50);
    });
  }

  // Hamburger
  var ham = document.querySelector('.hamburger');
  var nav = document.querySelector('.nav-links');
  if (ham && nav) {
    ham.addEventListener('click', function () {
      nav.classList.toggle('open');
      var bars = ham.querySelectorAll('span');
      ham.classList.toggle('is-open');
    });
    document.addEventListener('click', function (e) {
      if (!ham.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('open');
        ham.classList.remove('is-open');
      }
    });
  }

  // Fade-in on scroll
  var els = document.querySelectorAll(
    '.trl-card, .trl46-card, .news-card, .phenix-item, .demo-item, .test-step, .facility-item'
  );
  if ('IntersectionObserver' in window && els.length) {
    els.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(18px)';
      el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    els.forEach(function (el) { io.observe(el); });
  }
})();
