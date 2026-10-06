'use strict';
document.documentElement.classList.add('js');
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
  document.querySelectorAll('.photo-viewer').forEach(viewer => {
    const thumbs = [...viewer.querySelectorAll('.viewer-thumb')];
    const image = viewer.querySelector('.viewer-image');
    const caption = viewer.querySelector('.viewer-caption');
    const position = viewer.querySelector('.viewer-position');
    let current = 0;
    const select = (index, reveal = false) => {
      current = (index + thumbs.length) % thumbs.length;
      const thumb = thumbs[current];
      image.src = thumb.dataset.image;
      image.alt = thumb.dataset.caption;
      caption.textContent = thumb.dataset.caption;
      position.textContent = `${current + 1} / ${thumbs.length}`;
      thumbs.forEach((button, i) => button.setAttribute('aria-pressed', String(i === current)));
      if (reveal) {
        const strip = viewer.querySelector('.viewer-thumbnails');
        strip.scrollLeft = thumb.offsetLeft - strip.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2;
      }
    };
    thumbs.forEach((thumb, i) => thumb.addEventListener('click', () => select(i)));
    viewer.querySelector('.viewer-prev').addEventListener('click', () => select(current - 1, true));
    viewer.querySelector('.viewer-next').addEventListener('click', () => select(current + 1, true));
  });
  // Defense in depth: incomplete forms never submit or expose data in the URL.
  document.querySelectorAll('form[data-unconfigured]').forEach(form => {
    form.addEventListener('submit', event => event.preventDefault());
  });
});
