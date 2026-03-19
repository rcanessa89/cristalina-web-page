# Cristalina CR

Bilingual (ES/EN) website for Cristalina, a water treatment company based in Costa Rica. Built with Astro 6, Tailwind CSS v4, DaisyUI 5, and Contentful CMS.

**Live site:** [cristalina-cr.netlify.app](https://cristalina-cr.netlify.app)

## Tech Stack

- **Framework:** Astro 6 (static site generation)
- **Styling:** Tailwind CSS v4 + DaisyUI 5
- **CMS:** Contentful (Delivery + Preview APIs)
- **Hosting:** Netlify
- **Icons:** Lucide (server-rendered SVGs)
- **Fonts:** Outfit + Plus Jakarta Sans (self-hosted woff2)

## Getting Started

```sh
bun install
cp .env.example .env  # Add your Contentful credentials
bun dev               # Start dev server at localhost:4321
```

### Environment Variables

```
CONTENTFUL_SPACE_ID=
CONTENTFUL_DELIVERY_TOKEN=
CONTENTFUL_PREVIEW_TOKEN=
```

## Commands

| Command | Action |
| :--- | :--- |
| `bun dev` | Start dev server (uses Preview API) |
| `bun build` | Production build to `./dist/` (uses Delivery API) |
| `bun preview` | Preview production build locally |
| `bun run generate-types-cf` | Generate TypeScript types from Contentful |
| `bun run migrate-cf <env>` | Run pending Contentful migrations |

## Architecture

```
Contentful CMS
  ↓ (API)
src/lib/contentful.ts      → fetch by slug + locale
  ↓
src/lib/mapContent.ts      → transform to flat typed objects
  ↓
src/pages/{es,en}/[slug].astro → static paths per locale
  ↓
ComponentResolver.astro    → maps content types to .astro components
  ↓
Individual components      → Hero, Stats, CardList, FeatureList, etc.
```

### Routing & i18n

- Prefix-routed: `/es/...` and `/en/...`
- Root `/` redirects based on browser language (netlify.toml)
- English speakers → `/en/home`, everyone else → `/es/inicio`
- 7 pages per locale: Home, Water-Tec Premium, Water-Tec Pro, How It Works, Maintenance, About Us, Contact

### Components

All pure `.astro` files — zero client-side framework JS. Interactivity via vanilla JS `<script>` tags.

| Component | Description |
| :--- | :--- |
| Hero | Full carousel or compact gradient CTA |
| Stats | Animated count-up counters |
| CardList | Grid (few items) or alternating layout (many) |
| FeatureList | Card grid (default) or checklist (compact variant) |
| ProductSpecs | Image + specs grid split layout |
| ProcessSteps | Vertical timeline with optional step labels |
| ContactSection | Contact info + Netlify Forms (locale-aware) |
| CtaBanner | Gradient call-to-action banner |
| LogoBar | Infinite marquee scroll |
| Navigation | Desktop links, dropdown, locale switcher, mobile menu |
| Footer | 3-column with social icons (locale-aware) |

### Image Optimization

- Astro `<Image>` component with Netlify Image CDN
- Auto WebP/AVIF conversion, CLS prevention via width/height
- Remote patterns configured for `**.ctfassets.net`

### SEO

- Meta tags, Open Graph, Twitter Cards
- Hreflang alternate links, canonical URLs
- XML Sitemap, robots.txt, llms.txt
- Structured data: Organization, LocalBusiness, Product, BreadcrumbList, HowTo, AboutPage, ContactPage
- Security headers in netlify.toml

### Contact Form

- Netlify Forms with honeypot anti-spam + Akismet
- Async submit with loading/error/success states
- No reCAPTCHA needed

## Contentful Migrations

Migrations live in `migrations-cf/` and are tracked via a `versionTracking` content type.

```sh
bun run migrate-cf staging    # Run pending migrations
bun run migrate-cf staging --seed 24  # Set version manually
```
