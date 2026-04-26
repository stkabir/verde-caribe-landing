# Verde Caribe - Proyecto

Sitio web para Verde Caribe, empresa de pastos vivos ubicada en Cancún, México. Servicio en toda la Riviera Maya: Cancún, Playa del Carmen, Puerto Morelos, Tulum.

## Tech Stack

- **Framework**: Astro v6 (static site generation)
- **Styling**: Tailwind CSS v4 con @tailwindcss/vite
- **Animations**: GSAP + ScrollTrigger
- **Fonts**: Playfair Display (headings), Source Sans 3 (body)

## Project Structure

```
verde-caribe/
├── src/
│   ├── components/
│   │   ├── Navbar.astro      # Navegación sticky con mobile menu
│   │   └── Footer.astro      # Footer con border-radius top
│   ├── data/
│   │   └── pastos.ts         # Datos de variedades de pasto
│   ├── layouts/
│   │   └── Layout.astro      # Layout base con fonts y meta tags
│   ├── pages/
│   │   └── index.astro       # SPA completa (todas las secciones)
│   ├── styles/
│   │   └── global.css        # Tailwind + design tokens + animaciones
│   └── utils/
│       └── animations.ts     # Utilidades GSAP (no usado directamente)
├── public/
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Design System (Botanical/Organic)

### Colors
```css
--color-bg: #F9F8F4           /* Warm Alabaster - background */
--color-surface: #FFFFFF       /* White - cards */
--color-foreground: #2D3A31    /* Deep Forest Green - text */
--color-text-secondary: #4A5568
--color-sage: #8C9A84          /* Sage Green - accent, buttons */
--color-clay: #DCCFC2          /* Soft Clay - secondary bg */
--color-border: #E6E2DA        /* Stone - borders */
--color-terracotta: #C27B66    /* Terracotta - hover CTA */
--color-forest: #2D3A31        /* Deep Forest - primary buttons */
```

### Typography
- **Headings**: Playfair Display (serif), weight 600-700
- **Body**: Source Sans 3 (sans-serif), weight 400-500
- **Italics**: Usar para énfasis en headlines y palabras clave

### Spacing
- Sections: `py-24 lg:py-32` (96-128px vertical)
- Container: `max-w-7xl` (80rem)
- Card gaps: `gap-8 lg:gap-12`
- Card padding: `p-6 lg:p-8`

### Components

#### Buttons
```html
<a class="btn btn-primary">Primary (forest bg)</a>
<a class="btn btn-secondary">Secondary (outline sage)</a>
```
- Pill shape: `rounded-full`
- Padding: `px-6 py-3` (~44px height)
- Hover: `translateY(-2px)` + shadow

#### Cards
- Border-radius: `rounded-3xl` (24px)
- Shadow: `shadow-soft` / `shadow-medium`
- Hover: `translateY(-0.5rem)` + shadow bloom

#### Forms
- Inputs: `rounded-xl border border-border bg-surface-muted`
- Focus: `ring-2 focus:ring-sage focus:ring-offset-2`

### Animations (GSAP + ScrollTrigger)

#### Hero
- Title: character-by-character reveal, stagger 0.04s, rotation 2°
- Subtitle: word-by-word fade-up, stagger 0.1s
- Image: parallax y: 15% on scroll

#### Scroll Animations
- Cards: fade up + scale 0.95→1, stagger 0.15s
- Section headers: opacity 0→1, y: 40→0
- Stats: fade up, stagger 0.15s
- Features: slide from left, stagger 0.12s
- Gallery/About: slide from sides

#### Easing
- Drama (H1): `expo.out`
- Elegance: `power3.out`
- Natural: `power2.out`

## Commands

```bash
# Development
pnpm dev

# Build
pnpm build

# Preview
pnpm preview
```

## Data Structure (pastos.ts)

```typescript
interface Grass {
  slug: string;
  name: string;
  headline: string;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  recommendedFor: string;
  image: string;
  color: string;    // Card background
  accent: string;   // Badge, icons, links
}
```

## Sections (index.astro)

1. **#inicio** - Hero con título animado y parallax
2. **#pastos** - Grid de 3 cards con pastos
3. **#nosotros** - Stats y galería
4. **#pedidos** - Formulario de cotización
5. **#contacto** - Información y formulario

## Notes

- El footer tiene `rounded-t-[60px]` en las esquinas superiores
- El body tiene `min-h-screen flex flex-col` para empujar footer
- Paper grain overlay con `opacity-[0.015]` en `position: fixed`
- Mobile menu slide-in desde derecha
- Accesibilidad: `prefers-reduced-motion` respetado en todas las animaciones