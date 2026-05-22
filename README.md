# Pragmaly · Landing

Astro + Tailwind. Single-page scroll. Mobile-first. Listo para Vercel/Netlify.

## Antes de deploy — edita esto

Todo el contenido editable vive en **`src/data/site.ts`**. Cambia ahí:

- `contact.whatsapp` — número internacional sin signos, ej. `5215512345678`
- `contact.whatsappDisplay` — el mismo bonito, ej. `+52 55 1234 5678`
- `contact.email` — correo de contacto
- `team[0].name` y `team[1].name` — nombres reales de los socios
- `team[*].linkedin` — URLs de LinkedIn
- (opcional) `brand.domain` — el dominio definitivo

Cuando cambies algo, los componentes leen del config automáticamente — no toques nada más.

## Comandos

```bash
npm install
npm run dev       # http://localhost:4321
npm run build
npm run preview
```

## Estructura

```
src/
  pages/index.astro          # arma todo
  layouts/Base.astro         # html shell + fonts + meta
  data/site.ts               # 👈 EDITA AQUÍ
  components/                # una sección por archivo
    Nav.astro
    Hero.astro
    Audience.astro
    Services.astro
    Automation.astro
    Custom.astro
    Process.astro
    Team.astro
    Cases.astro
    Contact.astro
    Footer.astro
  styles/global.css          # tokens, base, componentes (.btn, .card, etc)
  scripts/app.js             # sticky nav + reveal + validación form
```

## Paleta (en `tailwind.config.mjs`)

| Token | Hex | Uso |
|---|---|---|
| `paper` | #FAFAF7 | fondo |
| `paper-2` | #F4F2EB | fondo alt |
| `ink` | #0E0E0C | texto principal |
| `ink-2` | #4A4A47 | texto secundario |
| `navy` | #0F2A44 | títulos y CTA secundario |
| `terracota` | #C45B2D | acento — solo CTA primario |

## Deploy

**Vercel:** importa el repo. Framework preset = Astro. Sin configuración extra.
**Netlify:** build command `npm run build`, publish dir `dist`.
