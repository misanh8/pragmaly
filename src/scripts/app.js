// Sticky nav border on scroll
const nav = document.getElementById('nav');
if (nav) {
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 4);
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Subtle reveal on enter viewport (single-shot)
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('is-in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Basic form validation
const form = document.getElementById('contact-form');
if (form) {
  const status = document.getElementById('form-status');
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const data = new FormData(form);
    let ok = true;
    ['nombre', 'negocio', 'mensaje'].forEach((k) => {
      const v = (data.get(k) || '').toString().trim();
      const el = form.querySelector('[name="' + k + '"]');
      el.classList.toggle('field-error', !v);
      if (!v) ok = false;
    });
    if (!ok) {
      status.textContent = '✕ Completa los tres campos.';
      status.style.color = '#B0480E';
      return;
    }
    status.textContent = '✓ Gracias. Te respondemos el mismo día hábil.';
    status.style.color = '#2E7D5B';
    form.reset();
  });
  ['nombre', 'negocio', 'mensaje'].forEach((k) => {
    const el = form.querySelector('[name="' + k + '"]');
    if (el) el.addEventListener('input', () => el.classList.remove('field-error'));
  });
}
