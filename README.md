# Verde Caribe

Sitio web para Verde Caribe, empresa de pastos vivos ubicada en Cancún, México. Servicio en toda la Riviera Maya: Cancún, Playa del Carmen, Puerto Morelos y Tulum.

## 🚀 Quick Start

```bash
# Instalar dependencias
pnpm install

# Desarrollo local
pnpm dev

# Build para producción
pnpm build

# Preview del build
pnpm preview
```

## Tech Stack

- **Framework**: Astro v6
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP + ScrollTrigger
- **Fonts**: Playfair Display, Source Sans 3

## Deploy a Netlify

Este proyecto está listo para deploy en Netlify:

1. Conecta tu repositorio Git en [Netlify](https://netlify.com)
2. Netlify detectará automáticamente la configuración en `netlify.toml`
3. Deploy automático en cada push

O usa el CLI:

```bash
npm install -g netlify-cli
netlify deploy --prod
```

## Proyecto

- Diseño botanical/organic con colores tierra y tipografía serif
- SPA completa con todas las secciones en una página
- Animaciones scroll con GSAP
- Mobile-first responsive

## Estructura

```
src/
├── components/    # Navbar, Footer
├── data/         # Datos de pastos
├── layouts/      # Layout base
├── pages/        # index.astro (página principal)
├── styles/       # CSS global + Tailwind
└── utils/        # Utilidades (animations)
```
