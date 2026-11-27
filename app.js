/* ==========================================================================
   SassoMet Village — Progressive Enhancement JS
   ========================================================================== */

(function () {
  'use strict';

  // 1. Live Open/Closed Status for Casalecchio di Reno (Europe/Rome)
  function updateLiveStatus() {
    const pills = document.querySelectorAll('[data-live-status]');
    if (!pills.length) return;

    const now = new Date();
    const romeFormatter = new Intl.DateTimeFormat('it-IT', {
      timeZone: 'Europe/Rome',
      hour: '2-digit',
      minute: '2-digit',
      month: '2-digit',
      day: '2-digit',
      hour12: false,
    });

    const parts = Object.fromEntries(
      romeFormatter.formatToParts(now).map((p) => [p.type, p.value])
    );

    const mmdd = `${parts.month}-${parts.day}`;
    const closedHolidays = ['01-01', '08-15', '12-25'];
    const minutes = parseInt(parts.hour, 10) * 60 + parseInt(parts.minute, 10);

    // Distributore: 06:00 (360) - 21:45 (1305)
    const isOpen = !closedHolidays.includes(mmdd) && minutes >= 360 && minutes <= 1305;

    pills.forEach((pill) => {
      pill.classList.toggle('status-pill--closed', !isOpen);
      const textEl = pill.querySelector('[data-status-text]');
      if (textEl) {
        textEl.textContent = isOpen
          ? 'Distributore Aperto Ora · fino alle 21:45'
          : 'Distributore Chiuso · riapre alle 06:00';
      }
    });
  }

  updateLiveStatus();

  // 2. Mobile Navigation Drawer
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navMenu = document.querySelector('[data-nav-menu]');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navMenu.classList.toggle('is-open', !expanded);
    });

    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-open');
      });
    });
  }

  // 3. Interactive Service Category Filter
  const filterButtons = document.querySelectorAll('[data-filter]');
  const serviceCards = document.querySelectorAll('[data-category]');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-filter');
      filterButtons.forEach((b) => {
        const active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-pressed', String(active));
      });

      serviceCards.forEach((card) => {
        const cat = card.getAttribute('data-category');
        card.hidden = target !== 'all' && cat !== target;
      });
    });
  });

  // 4. Booking / Info Request Form (cmo-form-cro)
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
      statusBox.textContent = `Grazie ${nome}! La tua richiesta per "${servizio}" è stata registrata. Ti ricontatteremo al più presto oppure chiamaci subito allo 051 6166715.`;
      statusBox.classList.add('is-success');
      form.reset();
    });
  }

  // 5. Lightweight Non-Intrusive Cookie Notice
  const cookieBar = document.querySelector('#cookie-bar');
  const STORAGE_KEY = 'sassomet_cookie_consent_v1';

  if (cookieBar && !localStorage.getItem(STORAGE_KEY)) {
    cookieBar.hidden = false;
    cookieBar.querySelectorAll('[data-cookie-action]').forEach((btn) => {
      btn.addEventListener('click', () => {
        localStorage.setItem(STORAGE_KEY, btn.getAttribute('data-cookie-action'));
        cookieBar.hidden = true;
      });
    });
  }
})();
