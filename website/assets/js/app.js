/* =========================================================================
   S. Kiefer GmbH Dentallabor — Unternehmensseite
   Ein einziges klassisches Script (IIFE). Kein Modul, kein fetch, kein CDN —
   laeuft unveraendert per file:// und spaeter auf dem Webserver.
   Basis: Design-System der Karriereseite.
   ========================================================================= */

(function () {
  'use strict';

  /* -----------------------------------------------------------------------
     Konfiguration
     Solange endpoint === null laeuft das Kontaktformular im Demo-Modus:
     Es oeffnet das E-Mail-Programm mit vorausgefuellter Anfrage und zeigt
     die Zusammenfassung an. Sobald die Seite auf einem Server liegt, hier
     die Formular-URL eintragen. Die Ziel-Adresse ist ein PLATZHALTER und
     wird vor Livegang mit dem Labor geklaert.
     ----------------------------------------------------------------------- */
  var CONFIG = {
    endpoint: null,
    mail: 'info@dental-kiefer.de',
    telefon: '+4972317798200'
  };

  var reduziert = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  /* ---------------------------------------------------------------------
     Header: Schatten + Lesefortschritt
     --------------------------------------------------------------------- */
  var kopf = $('.kopf');
  var fortschritt = $('.fortschritt');

  function beiScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;
    if (kopf) kopf.classList.toggle('gescrollt', y > 8);

    if (fortschritt) {
      var hoehe = document.documentElement.scrollHeight - window.innerHeight;
      var anteil = hoehe > 0 ? Math.min(y / hoehe, 1) : 0;
      fortschritt.style.transform = 'scaleX(' + anteil + ')';
    }

    var bar = $('.sticky-bar');
    if (bar) bar.classList.toggle('an', y > window.innerHeight * 0.55);
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () { beiScroll(); ticking = false; });
  }, { passive: true });
  beiScroll();

  /* ---------------------------------------------------------------------
     Mobile Navigation
     --------------------------------------------------------------------- */
  var burger = $('.burger');
  var nav = $('.nav');

  if (burger && nav) {
    burger.addEventListener('click', function () {
      var auf = nav.classList.toggle('auf');
      burger.setAttribute('aria-expanded', auf ? 'true' : 'false');
    });
    $$('a', nav).forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('auf');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------------------------------------------------------------------
     Scroll-Reveal
     --------------------------------------------------------------------- */
  var zuZeigen = $$('.rein, .rein-kind');

  if (reduziert || !('IntersectionObserver' in window)) {
    zuZeigen.forEach(function (el) { el.classList.add('sichtbar'); });
  } else {
    var beobachter = new IntersectionObserver(function (eintraege) {
      eintraege.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('sichtbar');
        if (e.target.hasAttribute('data-zaehler')) starteZaehler(e.target);
        beobachter.unobserve(e.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    zuZeigen.forEach(function (el) { beobachter.observe(el); });
  }

  /* ---------------------------------------------------------------------
     Zahlen-Counter
     --------------------------------------------------------------------- */
  function starteZaehler(wurzel) {
    $$('[data-wert]', wurzel).forEach(function (el) {
      var ziel = parseInt(el.getAttribute('data-wert'), 10);
      if (isNaN(ziel)) return;

      if (reduziert) { el.textContent = String(ziel); return; }

      var dauer = 1500;
      var start = null;

      function schritt(zeit) {
        if (start === null) start = zeit;
        var p = Math.min((zeit - start) / dauer, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = String(Math.round(ziel * eased));
        if (p < 1) window.requestAnimationFrame(schritt);
      }
      window.requestAnimationFrame(schritt);
    });
  }

  var zaehlerBlock = $('[data-zaehler]');
  if (zaehlerBlock && (reduziert || !('IntersectionObserver' in window))) starteZaehler(zaehlerBlock);

  /* ---------------------------------------------------------------------
     FAQ-Akkordeon
     --------------------------------------------------------------------- */
  $$('.frage__knopf').forEach(function (knopf) {
    knopf.addEventListener('click', function () {
      var offen = knopf.getAttribute('aria-expanded') === 'true';
      $$('.frage__knopf').forEach(function (k) { k.setAttribute('aria-expanded', 'false'); });
      knopf.setAttribute('aria-expanded', offen ? 'false' : 'true');
    });
  });

  /* =====================================================================
     Kontaktformular — Anfrage fuer Zahnarztpraxen
     ===================================================================== */

  var formular = $('#kontaktformular');
  if (!formular) return;

  var erfolg = $('#kontakt-erfolg');

  function feldWert(id) {
    var el = $('#' + id);
    return el ? el.value.trim() : '';
  }

  function pruefeFelder() {
    var ok = true;

    [['k-name', function (v) { return v.length > 1; }],
     ['k-praxis', function (v) { return v.length > 1; }],
     ['k-email', function (v) { return /.+@.+\..+/.test(v); }],
     ['k-telefon', function (v) { return /^[\d\s/+()-]{6,}$/.test(v); }]
    ].forEach(function (paar) {
      var el = $('#' + paar[0]);
      if (!el) return;
      var huelle = el.closest('.feld');
      var gueltig = paar[1](el.value.trim());
      if (huelle) huelle.classList.toggle('ungueltig', !gueltig);
      if (!gueltig) ok = false;
    });

    return ok;
  }

  function textFassung() {
    var z = [];
    z.push('Anfrage ueber die Webseite');
    z.push('');
    z.push('Praxis:          ' + feldWert('k-praxis'));
    z.push('Ansprechpartner: ' + feldWert('k-name'));
    z.push('E-Mail:          ' + feldWert('k-email'));
    z.push('Telefon:         ' + feldWert('k-telefon'));
    z.push('Anliegen:        ' + (feldWert('k-anliegen') || 'Allgemeine Anfrage'));
    if (feldWert('k-nachricht')) {
      z.push('');
      z.push('Nachricht:');
      z.push(feldWert('k-nachricht'));
    }
    return z.join('\n');
  }

  function oeffneMail(betreff, text) {
    var url = 'mailto:' + CONFIG.mail +
      '?subject=' + encodeURIComponent(betreff) +
      '&body=' + encodeURIComponent(text);
    window.location.href = url;
  }

  formular.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!pruefeFelder()) return;

    var text = textFassung();
    var betreff = 'Anfrage: ' + feldWert('k-praxis') + ' - ' + feldWert('k-name');

    if (erfolg) {
      var dl = $('#kontakt-zusammenfassung');
      if (dl) {
        dl.innerHTML = '' +
          '<dt>Praxis</dt><dd>' + esc(feldWert('k-praxis')) + '</dd>' +
          '<dt>Ansprechpartner</dt><dd>' + esc(feldWert('k-name')) + '</dd>' +
          '<dt>E-Mail</dt><dd>' + esc(feldWert('k-email')) + '</dd>' +
          '<dt>Telefon</dt><dd>' + esc(feldWert('k-telefon')) + '</dd>' +
          '<dt>Anliegen</dt><dd>' + esc(feldWert('k-anliegen') || 'Allgemeine Anfrage') + '</dd>';
      }
      formular.hidden = true;
      erfolg.hidden = false;
      erfolg.scrollIntoView({ behavior: reduziert ? 'auto' : 'smooth', block: 'center' });
    }

    if (CONFIG.endpoint) {
      var daten = new FormData(formular);
      fetch(CONFIG.endpoint, { method: 'POST', body: daten })['catch'](function () {
        oeffneMail(betreff, text);
      });
    } else {
      window.setTimeout(function () { oeffneMail(betreff, text); }, 700);
    }

    var nochmal = $('#mail-nochmal');
    if (nochmal) {
      nochmal.onclick = function (ev) {
        ev.preventDefault();
        oeffneMail(betreff, text);
      };
    }
    var kopieren = $('#kopieren');
    if (kopieren) {
      kopieren.onclick = function () { kopiereText(text, kopieren); };
    }
  });

  function kopiereText(text, knopf) {
    function fertig() {
      var alt = knopf.innerHTML;
      knopf.innerHTML = 'Kopiert';
      window.setTimeout(function () { knopf.innerHTML = alt; }, 1800);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(fertig)['catch'](function () { fallback(text, fertig); });
    } else {
      fallback(text, fertig);
    }
  }

  function fallback(text, danach) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); danach(); } catch (e) { /* still */ }
    document.body.removeChild(ta);
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
})();
