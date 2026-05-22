// =============================================================
//  👋  EDITA AQUÍ ANTES DE DEPLOY
//      Todos los componentes leen de este archivo.
// =============================================================

export const site = {
  brand: {
    name: 'Pragmaly',
    tagline: 'Ordenamos cómo opera tu negocio y hacemos visibles tus datos.',
    conceptLine: 'De la oportunidad a la solución',
    domain: 'pragmaly.mx', // TODO: confirmar dominio final
  },

  contact: {
    // TODO: número internacional sin signos (ej. "5215512345678")
    whatsapp: '52XXXXXXXXXX',
    // TODO: mismo número con formato bonito
    whatsappDisplay: '+52 XXX XXX XXXX',
    // TODO: correo definitivo
    email: 'hola@pragmaly.mx',
  },

  location: {
    city: 'Jilotepec, Estado de México',
    region: 'corredor MX–QRO',
  },

  nav: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ],

  audiences: [
    {
      tag: 'Tipo A · Industria',
      title: 'Empresas industriales medianas',
      desc: '15 a 80 empleados, manufactura, proveedores del Parque Industrial. Necesitan procesos formales, indicadores claros y muchas veces certificación ISO.',
      meta: ['15–80 empleados', 'Manufactura', 'ISO 9001', 'KPIs operativos'],
    },
    {
      tag: 'Tipo B · Local',
      title: 'Comercios y servicios locales',
      desc: 'Clínicas, distribuidoras, restaurantes con domicilio, despachos. Ya tienen clientes pero pierden ventas por atención manual, sin web o sin métricas.',
      meta: ['Clínicas', 'Distribuidoras', 'Restaurantes', 'Despachos'],
    },
  ],

  servicesIntro: {
    title: 'Cuatro servicios, todos conectados',
    body: 'Cada uno se sostiene solo. Juntos cierran el ciclo donde el negocio se atora: ordenar el proceso, ver los datos, mejorar la operación, llegar a más clientes. Es el punto donde los obstáculos se disuelven y el día a día deja de pelear contigo.',
  },

  services: [
    {
      id: 'diag',
      num: '01 · Diagnóstico',
      title: 'Diagnóstico operativo + tablero de control',
      desc: 'Mapeamos tu proceso clave y dejamos funcionando un tablero con tus indicadores.',
    },
    {
      id: 'opt',
      num: '02 · Optimización',
      title: 'Optimización de un proceso clave',
      desc: 'Rediseñamos cómo se hace, documentamos y capacitamos al equipo.',
    },
    {
      id: 'digital',
      num: '03 · Presencia digital',
      title: 'Presencia digital esencial',
      desc: 'Web + WhatsApp + Google + reseñas funcionando como un solo sistema.',
    },
    {
      id: 'metrics',
      num: '04 · Métricas',
      title: 'Tablero de métricas para negocio',
      desc: 'Conectamos tus datos de ventas/inventario y los volvemos un dashboard útil.',
    },
  ],

  automations: [
    { id: 'wa',      title: 'WhatsApp con respuestas automáticas',     desc: 'Tu cliente pregunta horario, precio o disponibilidad y obtiene respuesta sin esperar al equipo.' },
    { id: 'inv',     title: 'Alertas de inventario bajo',              desc: 'Te avisa por WhatsApp o correo antes de quedarte sin producto, no después de perder la venta.' },
    { id: 'pdf',     title: 'Lectura automática de facturas',          desc: 'Subes el PDF, el sistema extrae datos clave y los registra en tu tablero. Cero captura manual.' },
    { id: 'report',  title: 'Reporte semanal a tu correo',             desc: 'Cada lunes a las 8am: ventas, pendientes, alertas. Sin abrir nada, sin pelearte con un dashboard.' },
    { id: 'quotes',  title: 'Cotizaciones desde plantilla',            desc: 'Capturas 3 datos, el sistema genera un PDF listo para enviar. Mismo formato siempre.' },
    { id: 'classif', title: 'Pedidos clasificados por canal',          desc: 'Lo que entra por WhatsApp, web o teléfono cae al mismo lugar, etiquetado y trazado.' },
  ],

  stackChips: ['Python', 'Next.js', 'FastAPI', 'Postgres', 'OpenAI', 'Sheets / Excel', 'WhatsApp Cloud API', 'Looker / Metabase', 'n8n / Zapier', 'Notion'],

  customFeatures: [
    'App de toma de pedidos para vendedores en ruta',
    'Portal donde tu cliente ve el estado de su orden',
    'Control interno de producción y trazabilidad',
    'Calculadora de cotizaciones con tu lógica de precios',
  ],

  process: [
    { num: '01', title: 'Escuchamos',             desc: 'Una conversación de 30 minutos. Sin compromiso. Entendemos tu operación y dónde duele.' },
    { num: '02', title: 'Diagnosticamos',         desc: 'Te entregamos una propuesta de una página con alcance, fechas y precio claro. Tú decides.' },
    { num: '03', title: 'Implementamos contigo',  desc: 'Trabajamos en sitio y a distancia con tu equipo. Al cerrar, todo queda funcionando y documentado.' },
  ],

  team: [
    {
      // TODO: nombre real
      name: 'Socio 1 · Nombre por confirmar',
      role: 'Ingeniero industrial · operaciones, ISO y mejora continua',
      bio: '20 años dirigiendo operaciones, calidad y sistemas de gestión ISO (9001, 14001, 22000) en empresas industriales medianas y grandes. Especialista en Kaizen, Lean Manufacturing y Six Sigma. Trayectoria adicional en comercialización de insumos industriales (Óxido de Zinc, Litargirio, entre otros).',
      tags: ['ISO 9001 / 14001 / 22000', 'Kaizen · Lean · Six Sigma', 'Dirección operativa', 'Insumos industriales'],
      // TODO: url de LinkedIn
      linkedin: 'https://www.linkedin.com/in/socio-1/',
      monogram: 'S1',
      avatarStyle: 'navy' as const,
    },
    {
      // TODO: nombre real
      name: 'Socio 2 · Nombre por confirmar',
      role: 'Datos · IA aplicada · automatización',
      bio: 'Asesoría, desarrollo e implementación de IA, dashboards, Python e integraciones. Hacemos que los datos del negocio dejen de vivir en cabezas y archivos sueltos, y que la IA resuelva tareas reales en vez de quedarse en demo.',
      tags: ['IA aplicada', 'Python · Automatización', 'Dashboards', 'Web & WhatsApp'],
      // TODO: url de LinkedIn
      linkedin: 'https://www.linkedin.com/in/socio-2/',
      monogram: 'S2',
      avatarStyle: 'terracota' as const,
    },
  ],

  cases: {
    title: 'Casos',
    cta: 'Quiero resultados así →',
    list: [
      {
        client: 'Bengali Jewelry',
        segment: 'Joyería de autor · Comercio local',
        service: 'Presencia digital + automatización',
        status: 'en curso' as const,
        challenge: 'Negocio de una sola persona que vendía únicamente por WhatsApp. Sin catálogo online, fotos inconsistentes con mala iluminación, proceso de venta completamente manual y sin métricas.',
        solution: 'Diseñamos y construimos un catálogo web conectado a Google Sheets como CMS. Un pipeline con n8n procesa cada nueva pieza: extrae piedra, color, tipo y etiquetas, renombra las fotos automáticamente y actualiza el catálogo en vivo. Integración con PayPal, políticas claras y soporte en segmentación de Meta Ads.',
        result: 'La web reemplaza la fricción del WhatsApp con un catálogo navegable y profesional. Actualmente ampliando el inventario fotográfico y afinando la automatización del flujo de ventas.',
        tags: ['Catálogo web', 'Google Sheets CMS', 'n8n', 'PayPal', 'Meta Ads'],
        url: 'https://bengalijewelry.com',
      },
    ],
  },

  footer: {
    year: 2026,
  },
};

export type SiteConfig = typeof site;

// Derived helpers
export const waUrl = (msg?: string) => {
  const base = `https://wa.me/${site.contact.whatsapp.replace(/\D/g, '')}`;
  return msg ? `${base}?text=${encodeURIComponent(msg)}` : base;
};
