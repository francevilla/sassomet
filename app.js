/* ==========================================================================
   SassoMet Village — 3D Tilt, Scroll Choreography & Live Status
   ========================================================================== */

(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Live Open/Closed Status (Europe/Rome)
  function updateLiveStatus() {
    const pills = document.querySelectorAll('[data-live-status]');
    if (!pills.length) return;

    const now = new Date();
    const parts = Object.fromEntries(
      new Intl.DateTimeFormat('it-IT', {
        timeZone: 'Europe/Rome',
        hour: '2-digit',
        minute: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour12: false,
      })
        .formatToParts(now)
        .map((p) => [p.type, p.value])
    );

    const mmdd = `${parts.month}-${parts.day}`;
    const holidays = ['01-01', '08-15', '12-25'];
    const mins = parseInt(parts.hour, 10) * 60 + parseInt(parts.minute, 10);
    const isOpen = !holidays.includes(mmdd) && mins >= 360 && mins <= 1305;

    pills.forEach((pill) => {
      pill.classList.toggle('is-closed', !isOpen);
      const label = pill.querySelector('[data-status-text]');
      if (label) {
        label.textContent = isOpen ? 'Aperto ora · fino 21:45' : 'Chiuso · riapre 06:00';
      }
    });
  }
  updateLiveStatus();

  // 2. Scroll Progress Bar & Hero 3D Parallax
  const progressBar = document.querySelector('.scroll-progress');
  const heroMedia = document.querySelector('[data-parallax]');

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (progressBar && maxScroll > 0) {
        progressBar.style.transform = `scaleX(${Math.min(1, Math.max(0, scrollY / maxScroll))})`;
      }

      if (!prefersReduced && heroMedia && scrollY < window.innerHeight * 1.2) {
        const translateY = scrollY * 0.22;
        const scale = 1 + scrollY * 0.00018;
        heroMedia.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
      }
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 3. Scroll-Triggered 3D Perspective Reveals
  const revealEls = document.querySelectorAll('[data-reveal], .timeline-wrap');
  if (!prefersReduced && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  // 4. Interactive 3D Perspective Tilt + Specular Glare
  if (!prefersReduced && window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('[data-tilt]').forEach((card) => {
      const maxTilt = parseFloat(card.getAttribute('data-tilt')) || 6;

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const rotateY = (x - 0.5) * maxTilt * 2;
        const rotateX = (0.5 - y) * maxTilt * 2;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(6px)`;
        card.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`);
        card.style.setProperty('--my', `${(y * 100).toFixed(1)}%`);
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
      });
    });
  }

  // 5. Mobile Navigation Drawer
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navMenu = document.querySelector('[data-nav-menu]');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const open = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!open));
      navMenu.classList.toggle('is-open', !open);
    });
    navMenu.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-open');
      });
    });
  }

  // 6. Booking Form
  const form = document.querySelector('#booking-form');
  const statusBox = document.querySelector('#form-status');
  if (form && statusBox) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const nome = form.querySelector('#nome').value.trim();
      const servizio = form.querySelector('#servizio').value;
      statusBox.textContent = `Grazie ${nome}! Richiesta ricevuta per "${servizio}". Ti ricontatteremo al più presto oppure chiamaci allo 051 6166715.`;
      statusBox.classList.add('is-success');
      form.reset();
    });
  }

  // 7. Cookie Bar
  const cookieBar = document.querySelector('#cookie-bar');
  const KEY = 'sassomet_cookie_v2';
  if (cookieBar && !localStorage.getItem(KEY)) {
    cookieBar.hidden = false;
    cookieBar.querySelectorAll('[data-cookie-action]').forEach((btn) => {
      btn.addEventListener('click', () => {
        localStorage.setItem(KEY, btn.getAttribute('data-cookie-action'));
        cookieBar.hidden = true;
      });
    });
  }
})();
