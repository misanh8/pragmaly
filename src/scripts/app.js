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

// Contact form: validate, then POST to Apps Script endpoint (no-cors fire-and-forget).
// El endpoint vive en data-endpoint del <form>; viene de site.forms.endpoint.
// Si está vacío, el form valida pero no envía — fallback a WhatsApp/email visibles arriba.
const form = document.getElementById('contact-form');
if (form) {
  const status = document.getElementById('form-status');
  const endpoint = form.dataset.endpoint || '';
  const submitBtn = form.querySelector('button[type="submit"]');

  const setStatus = (msg, color) => {
    status.textContent = msg;
    status.style.color = color;
  };

  form.addEventListener('submit', async (ev) => {
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
      setStatus('✕ Completa los tres campos.', '#B0480E');
      return;
    }

    if (!endpoint) {
      // Sin endpoint configurado: no perdemos el lead en silencio, dirigimos a WhatsApp.
      setStatus('El formulario aún no está conectado. Escríbenos por WhatsApp arriba.', '#B0480E');
      return;
    }

    submitBtn.disabled = true;
    setStatus('Enviando…', '#0E0E0C');

    try {
      // no-cors: no podemos leer la respuesta, pero el POST llega al Apps Script.
      // Mandamos form-encoded porque no-cors no permite Content-Type custom.
      await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams(data),
      });
      setStatus('✓ Gracias. Te respondemos el mismo día hábil.', '#2E7D5B');
      form.reset();
    } catch (err) {
      setStatus('No pudimos enviar. Escríbenos por WhatsApp arriba.', '#B0480E');
    } finally {
      submitBtn.disabled = false;
    }
  });

  ['nombre', 'negocio', 'mensaje'].forEach((k) => {
    const el = form.querySelector('[name="' + k + '"]');
    if (el) el.addEventListener('input', () => el.classList.remove('field-error'));
  });
}
