# Team Care Support - Project CLAUDE.md

## Overview
Website for **Team Care Domiciliary Support Ltd** (trading as **Team Care Support & Accommodation**), a Nottingham-based provider of domiciliary care and supported living services.

## Tech Stack
- **Astro 5.x** (static output, file-based routing)
- **Tailwind CSS v4** (utility-first, design tokens via CSS variables)
- **TypeScript**
- **astro-icon** + `@iconify-json/tabler` (Tabler icon library)
- **Preline** (accessible UI components - collapse, mobile menu)
- **astro-seo** + **astro-seo-schema** (SEO meta + Schema.org)
- **sharp** (image optimization)
- **Inter** font (Google Fonts via Astro font optimization)

## Key Conventions

### Layout System (Two-Tier)
- `TechnicalLayout.astro` → base HTML, fonts, global schema, CSS imports
- `SiteLayout.astro` → wraps TechnicalLayout, adds Header + Footer + main
- Pages import `SiteLayout` and pass `metadata` object

### Page Pattern
```astro
---
import SiteLayout from '@layouts/SiteLayout.astro';
const metadata = {
  title: 'Page Title - Team Care Support',
  description: 'Meta description...',
  schema: { '@context': 'https://schema.org', '@type': 'WebPage', ... }
};
---
<SiteLayout metadata={metadata}>
  <!-- page content -->
</SiteLayout>
```

### Colour Tokens
Design tokens in `src/styles/global.css` using oklch format. Key tokens:
- `--primary`: Soft Teal (#6BBED2) - main brand, CTAs, links
- `--accent`: Mint Green (#9ED9C3) - secondary highlights
- `--secondary`: Soft Coral (#F2A3A0) - warm backgrounds
- `--foreground`: Charcoal (#2E2E2E) - body text

### Path Aliases
- `@/*` → `src/*`
- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@assets/*` → `src/assets/*`

### Images
- Optimised images go in `src/assets/` (use `<Image>` from `astro:assets`)
- Static/unprocessed assets in `public/`
- Logo SVG: `src/assets/logo.svg`

## Site Structure

### Pages
| Route | File | Purpose |
|-------|------|---------|
| `/` | `index.astro` | Homepage |
| `/supported-living` | `supported-living.astro` | Supported Living service |
| `/care-at-home` | `care-at-home.astro` | Domiciliary care service |
| `/virtual-support` | `virtual-support.astro` | Remote/blended support |
| `/group-activities` | `group-activities.astro` | Group activities & skills |
| `/about` | `about.astro` | About, values, team |
| `/contact` | `contact.astro` | Contact info & form |
| `/referral` | `referral.astro` | Make a referral |
| `/quality` | `quality.astro` | Quality & compliance |
| `/feedback` | `feedback.astro` | Feedback & complaints |

### Navigation
- **Header**: Supported Living, Care at Home, Virtual Support, Group Activities, About Us, Contact
- **CTA button**: Make a Referral → `/referral`
- **Footer links**: Quality & Compliance, Feedback & Complaints, Privacy Policy

## Business Info
- **Legal name**: Team Care Domiciliary Support Ltd (Reg: 16012175)
- **Trading name**: Team Care Support & Accommodation
- **Director/RM**: Kerry Gail McCulloch
- **Location**: Foxhall Lodge, Foxhall Road, Forest Fields, Nottingham NG7 6LH
- **Business address**: Office Suite 2, Renewal House, Foxhill Road, Carlton, Nottingham NG4 1RZ
- **Phone**: 0115 845 0220 ext 2535
- **Email**: help@teamcaresupport.com
- **Values**: TEAM CARE (Trust, Empathy, Accountability, Motivation, Collaboration, Attentiveness, Respect, Empowerment)

## Commands
- `pnpm dev` — dev server
- `pnpm build` — production build
- `pnpm lint` — lint check
- `pnpm preview` — preview build output
