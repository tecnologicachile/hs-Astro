# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

This is an Astro project with React integration using pnpm as the package manager.

| Command | Purpose |
|---------|---------|
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start development server at localhost:4321 |
| `pnpm build` | Build production site to ./dist/ |
| `pnpm preview` | Preview production build locally |

## Project Architecture

This is a hosting services website built with Astro v5 and React v19, deployed to Cloudflare Pages.

### Tech Stack
- **Framework**: Astro with React integration (`@astrojs/react`)
- **Styling**: Tailwind CSS with custom HS brand colors (`hs-blue`, `hs-blue-light`, `hs-blue-lighter`)
- **Typography**: Poppins font family with `@tailwindcss/typography` plugin
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: Resend API for contact form handling
- **Storage**: Supabase Storage for file management and PDFs

### Key Architecture Patterns

**Hybrid Components**: The project uses both Astro components (.astro) for static content and React components (.tsx) for interactive features. React components require `client:load` directive in Astro files.

**Content Collections**: Blog content is managed through Astro's content collections system with TypeScript schemas (src/content/config.ts). Blog posts support categories: WooCommerce, Softland ERP, Seguridad, Cloud Computing, Tutoriales, Tendencias.

**Layout Structure**: 
- Main layout: `src/layouts/Layout.astro` (HTML document structure)
- Component layout: `src/components/Layout.tsx` (Header/Footer wrapper)
- All pages use both layouts in sequence

**API Functions**: Contact form handled by Cloudflare Functions in `functions/api/contact.js` using Resend API. Requires `RESEND_API_KEY` environment variable.

**Environment Variables**: 
- `RESEND_API_KEY`: For email functionality
- `SUPABASE_URL`: https://ghdqgcnsaglvrwdtklkq.supabase.co (for storage and database)
- `SUPABASE_ANON_KEY`: For Supabase authentication and storage access

### Directory Organization
- `src/components/` - React components, with `services/` subfolder for service-specific components
- `src/pages/` - Astro pages with `servicios/` and `blog/` subfolders  
- `src/content/blog/` - Markdown blog posts with frontmatter
- `functions/api/` - Cloudflare Functions for server-side functionality
- `public/logos/` - Client logos and images

### Build Configuration
- Output: Static site generation
- Site URL: `https://hs-astro.pages.dev`
- Build format: Directory structure
- TypeScript config extends Astro strict settings with React JSX support

### Brand Guidelines
- Primary colors defined in Tailwind config (hs-blue variants)
- Poppins font family for consistent typography
- Spanish language content (lang="es")