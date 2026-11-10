/* Akhir Satya — portfolio behaviour. Normal content updates happen in content.js, not here. */
(function () {
  'use strict';

  var SITE = window.SITE || { contact: {}, projects: [] };
  var C = SITE.contact || {};
  var projects = (SITE.projects || []).filter(function (p) { return !p.hidden; });

  /* ---------- tiny helpers ---------- */
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }
  function img(src, alt, cls) {
    var i = document.createElement('img');
    i.src = src;
    i.alt = alt || '';
    i.loading = 'lazy';
    i.decoding = 'async';
    if (cls) i.className = cls;
    return i;
  }

  /* ---------- floating contact (injected on every page) ---------- */
  var FAB_HTML =
    '<aside class="panel" id="contact-panel" aria-label="Contact options" hidden>' +
      '<div class="panel-head"><h2>Let\u2019s talk</h2><p>Tell me about your project.</p></div>' +
      '<a class="crow" href="#" data-link="email" data-subject="Project inquiry">' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111111" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M3 7l9 6 9-6"></path></svg>' +
        '<span class="l"><b>Email</b><span data-text="email"></span></span>' +
      '</a>' +
      '<a class="crow" href="#" data-link="whatsapp" data-message="Hi Akhir, I\'d like to discuss a project.">' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111111" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8.5 8.5 0 0 1-12.4 7.5L3 21l1.6-5.4A8.5 8.5 0 1 1 21 12z"></path></svg>' +
        '<span class="l"><b>WhatsApp</b><span data-text="whatsappLabel"></span></span>' +
      '</a>' +
      '<a class="crow" href="#" data-link="linkedin">' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111111" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="8" width="18" height="12" rx="2"></rect><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>' +
        '<span class="l"><b>LinkedIn</b><span data-text="linkedinLabel"></span></span>' +
      '</a>' +
    '</aside>' +
    '<button type="button" class="fab" id="fab" aria-expanded="false" aria-controls="contact-panel">' +
      '<span class="fab-icon">' +
        '<svg class="ic ic-chat" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FAFAF8" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8.5 8.5 0 0 1-12.4 7.5L3 21l1.6-5.4A8.5 8.5 0 1 1 21 12z"></path><circle class="dot" style="--i:0" cx="8.5" cy="12" r="1.15" fill="#FAFAF8" stroke="none"></circle><circle class="dot" style="--i:1" cx="12.5" cy="12" r="1.15" fill="#FAFAF8" stroke="none"></circle><circle class="dot" style="--i:2" cx="16.5" cy="12" r="1.15" fill="#FAFAF8" stroke="none"></circle></svg>' +
        '<svg class="ic ic-x" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FAFAF8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"></path></svg>' +
      '</span>' +
      '<span id="fab-label">Get in touch</span>' +
    '</button>';

  var fabWrap = el('div', 'fabwrap');
  fabWrap.innerHTML = FAB_HTML;
  document.body.appendChild(fabWrap);

  /* ---------- project cards (home page) ---------- */
  var grid = document.getElementById('project-grid');
  if (grid) {
    var count = document.getElementById('work-count');
    if (count) count.textContent = projects.length + (projects.length === 1 ? ' project' : ' projects');

    projects.forEach(function (p) {
      var hasCase = !!p.caseStudy;
      var card = el(hasCase ? 'a' : 'div', 'card' + (hasCase ? '' : ' soon'));
      if (hasCase) card.href = 'project.html?p=' + encodeURIComponent(p.id);

      if (p.cover) {
        card.appendChild(img(p.cover, p.coverAlt || p.title, 'card-media'));
      } else {
        card.appendChild(el('div', 'card-media'));
      }

      var body = el('div', 'card-body');
      var top = el('div', 'card-top');
      top.appendChild(el('h3', 'card-title', p.title));
      if (p.year) top.appendChild(el('span', 'card-year', p.year));
      body.appendChild(top);
      var meta = [p.type];
      if (!hasCase) meta.push('Case study coming soon');
      body.appendChild(el('p', 'card-meta', meta.filter(Boolean).join(' \u00b7 ')));
      card.appendChild(body);
      grid.appendChild(card);
    });

    if (SITE.showMoreCard) {
      var more = el('div', 'card card-more');
      more.appendChild(el('div', 'card-media', 'More case studies coming soon'));
      grid.appendChild(more);
    }
  }

  /* ---------- case study page ---------- */
  var caseRoot = document.getElementById('case');
  if (caseRoot) {
    var id = new URLSearchParams(window.location.search).get('p');
    var cases = projects.filter(function (p) { return p.caseStudy; });
    var project = cases.filter(function (p) { return p.id === id; })[0];

    if (!project) {
      var nf = el('section', 'wrap cs-title');
      nf.appendChild(el('h1', '', 'Case study not found'));
      nf.appendChild(el('p', 'cs-summary', 'This case study is not available yet.'));
      var back = el('a', 'backlink', '\u2190 Back to all work');
      back.href = 'index.html#work';
      nf.appendChild(back);
      caseRoot.appendChild(nf);
    } else {
      var cs = project.caseStudy;
      document.title = project.title + ' \u2014 Akhir Satya';

      var head = el('section', 'wrap cs-title');
      head.appendChild(el('span', 'eyebrow', 'Case study'));
      head.appendChild(el('h1', '', project.title));
      if (cs.summary) head.appendChild(el('p', 'cs-summary', cs.summary));
      caseRoot.appendChild(head);

      if (cs.hero) {
        var hero = el('section', 'wrap cs-hero');
        hero.appendChild(img(cs.hero, cs.heroAlt || project.title));
        caseRoot.appendChild(hero);
      }

      var metaItems = Object.keys(cs.meta || {}).filter(function (k) { return cs.meta[k]; });
      if (metaItems.length) {
        var metaSec = el('section', 'wrap cs-meta');
        var row = el('div', 'cs-meta-row');
        metaItems.forEach(function (k) {
          var it = el('div', 'cs-meta-item');
          it.appendChild(el('span', 'k', k));
          it.appendChild(el('span', 'v', cs.meta[k]));
          row.appendChild(it);
        });
        metaSec.appendChild(row);
        caseRoot.appendChild(metaSec);
      }

      var secs = (cs.sections || []).filter(function (s) {
        return s && ((s.text && s.text.length) || (s.images && s.images.length));
      });
      if (secs.length) {
        var wrap = el('section', 'wrap cs-sections');
        secs.forEach(function (s) {
          var sec = el('div', 'cs-section');
          if (s.title) sec.appendChild(el('h2', '', s.title));
          var body = el('div', 'cs-body');
          (s.text || []).forEach(function (t) { body.appendChild(el('p', '', t)); });
          (s.images || []).forEach(function (im) { body.appendChild(img(im.src, im.alt)); });
          sec.appendChild(body);
          wrap.appendChild(sec);
        });
        caseRoot.appendChild(wrap);
      }

      var idx = cases.indexOf(project);
      var next = cases.length > 1 ? cases[(idx + 1) % cases.length] : null;
      var nextSec = el('section', 'wrap cs-next');
      var nl = el('a');
      if (next) {
        nl.href = 'project.html?p=' + encodeURIComponent(next.id);
        nl.appendChild(el('span', 'eyebrow', 'Next project'));
        nl.appendChild(el('span', 't', next.title + ' \u2192'));
      } else {
        nl.href = 'index.html#work';
        nl.appendChild(el('span', 'eyebrow', 'More work'));
        nl.appendChild(el('span', 't', 'All projects \u2192'));
      }
      nextSec.appendChild(nl);
      var foot = el('div', 'footer');
      foot.appendChild(el('span', '', '\u00a9 ' + new Date().getFullYear() + ' Akhir Satya'));
      var home = el('a', '', 'All work');
      home.href = 'index.html#work';
      foot.appendChild(home);
      nextSec.appendChild(foot);
      caseRoot.appendChild(nextSec);
    }
  }

  /* ---------- contact links and text (filled from content.js) ---------- */
  document.querySelectorAll('[data-link]').forEach(function (a) {
    var kind = a.getAttribute('data-link');
    var href = '#';
    if (kind === 'email') {
      href = 'mailto:' + (C.email || '');
      var subj = a.getAttribute('data-subject');
      if (subj) href += '?subject=' + encodeURIComponent(subj);
    } else if (kind === 'whatsapp') {
      href = 'https://wa.me/' + (C.whatsapp || '');
      var msg = a.getAttribute('data-message');
      if (msg) href += '?text=' + encodeURIComponent(msg);
      a.target = '_blank';
      a.rel = 'noopener';
    } else if (kind === 'linkedin') {
      href = C.linkedin || '#';
      a.target = '_blank';
      a.rel = 'noopener';
    }
    a.setAttribute('href', href);
  });
  document.querySelectorAll('[data-text]').forEach(function (n) {
    n.textContent = C[n.getAttribute('data-text')] || '';
  });
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- mobile menu ---------- */
  var burger = document.getElementById('burger');
  var menu = document.getElementById('mobile-menu');
  function setMenu(open) {
    if (!burger || !menu) return;
    menu.hidden = !open;
    burger.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  if (burger && menu) {
    burger.addEventListener('click', function () { setMenu(menu.hidden); });
    menu.addEventListener('click', function (e) {
      if (e.target.closest && e.target.closest('a')) setMenu(false);
    });
  }

  /* ---------- floating contact toggle ---------- */
  var fab = document.getElementById('fab');
  var panel = document.getElementById('contact-panel');
  var fabLabel = document.getElementById('fab-label');
  function setPanel(open) {
    panel.hidden = !open;
    fab.classList.toggle('is-open', open);
    fab.setAttribute('aria-expanded', open ? 'true' : 'false');
    fabLabel.textContent = open ? 'Close' : 'Get in touch';
  }
  fab.addEventListener('click', function () { setPanel(panel.hidden); });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { setPanel(false); setMenu(false); }
  });
  document.addEventListener('click', function (e) {
    if (!panel.hidden && !fabWrap.contains(e.target)) setPanel(false);
  });
})();
