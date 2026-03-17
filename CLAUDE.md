# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Cristalina is a bilingual (Spanish/English) website for a water treatment company, built with Astro 6, React 19, Tailwind CSS v4, and DaisyUI 5. Content is managed in Contentful CMS.

## Commands

- `bun dev` - Start dev server at localhost:4321
- `bun build` - Production build to `./dist/`
- `bun preview` - Preview production build locally
- `bun run generate-types-cf` - Fetch Contentful content types and generate TypeScript types into `src/types/contentful/`
- `bun run migrate-cf <env>` - Run pending Contentful migrations against an environment (staging/master)
- `bun run migrate-cf <env> --seed <version>` - Set the migration version tracker manually

## Architecture

### Content Pipeline

1. **Contentful CMS** provides structured content via API (`src/lib/contentful.ts`)
2. In dev, the Preview API is used; in production, the Delivery API is used
3. `src/lib/mapContent.ts` transforms raw Contentful entries/assets into flat, typed objects (stripping Contentful SDK wrappers)
4. Pages fetch content by slug + locale, then render via component resolution

### Routing & i18n

- Default locale is `es`, with `en` as secondary. Both are prefix-routed (`/es/...`, `/en/...`)
- Pages live in `src/pages/es/[slug].astro` and `src/pages/en/[slug].astro` with static paths defined per locale
- Configured in `astro.config.mjs` with `prefixDefaultLocale: true`

### Component Resolution Pattern

`src/components/ComponentResolver.tsx` maps Contentful content type IDs to React components via a `componentMap` registry. To add a new component type: create the React component, then register it in `componentMap`.

### Type Generation

`scripts/generate-types.ts` uses Bun APIs to fetch content type schemas from Contentful and runs `cf-content-types-generator` to produce TypeScript interfaces in `src/types/contentful/`.

## Environment Variables

Requires a `.env` file with:
- `CONTENTFUL_SPACE_ID`
- `CONTENTFUL_DELIVERY_TOKEN`
- `CONTENTFUL_PREVIEW_TOKEN`

## Code Style

- Uses Prettier with single quotes and no trailing commas (`.prettierrc`)
- Package manager is **bun** (not npm/yarn)
- Strict TypeScript config extending `astro/tsconfigs/strict`
- React JSX uses `react-jsx` transform (no React import needed)
