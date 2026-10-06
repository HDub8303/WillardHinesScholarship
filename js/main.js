'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  const setMenu = open => {
    if (!toggle || !menu) return;
    menu.classList.toggle('active', open);
    toggle.setAttribute('aria-expanded', String(open));
  };
  toggle?.addEventListener('click', () => setMenu(!menu.classList.contains('active')));
  document.addEventListener('click', event => {
    if (!event.target.closest('.main-nav')) setMenu(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu?.classList.contains('active')) {
      setMenu(false); toggle.focus();
    }
  });
  menu?.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(link => {
    const current = link.getAttribute('href') === page;
    link.classList.toggle('active', current);
    if (current) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  // Defense in depth: incomplete forms never submit or expose data in the URL.
  document.querySelectorAll('form[data-unconfigured]').forEach(form => {
    form.addEventListener('submit', event => event.preventDefault());
  });
});
