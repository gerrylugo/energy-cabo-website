# Energy Cabo Website — Sections Specification

> **Purpose**: Define what each section does, its content, and responsive behavior.
> **Created**: S161 (09 Apr 2026) — V-model alignment (#59)
> **Stack**: React 18 + Vite + Tailwind CSS 3.4 + TypeScript

---

## Theme System

Two themes, toggled via ThemeToggle (bottom-left button):

| Property | Techno (Luxury) | Funky (Fun) |
|----------|----------------|-------------|
| Primary | Navy #1B3A6B | Pink #D4519A |
| Accent | Teal #50BB9B | Purple #5B6DB0 |
| Hero bg | Photo (El Arco) | Gradient |
| About bg | Photo | Solid color |
| Overall feel | Premium, professional | Warm, approachable |

Colors defined as CSS variables in `tailwind.config.js`, switched by `ThemeProvider` context.

---

## Section Order (render sequence in App.tsx)

| # | Component | Purpose | Responsive strategy |
|---|-----------|---------|-------------------|
| 1 | Navigation | Fixed header, hamburger on mobile | `hidden md:flex` for nav links |
| 2 | Hero | Full-screen intro with CTA + stats | Text scales 5xl→8xl, CTAs stack on mobile |
| 3 | TrustStrip | 4 trust badges on dark strip | `grid-cols-2 md:grid-cols-4` |
| 4 | Services | 6 service cards with gradients | `grid-cols-1 md:2 lg:3` |
| 5 | About | Brand story + 4 pillars | `grid-cols-1 lg:grid-cols-2` |
| 6 | Projects | Horizontal carousel + stats | Card width scales per breakpoint |
| 7 | Testimonials | 3 testimonial cards | `grid-cols-1 md:grid-cols-3` |
| 8 | Contact | CTA + 2 regional contact cards | `grid-cols-1 md:grid-cols-2` |
| 9 | Footer | Brand, links, contact, social | `grid-cols-1 md:grid-cols-4` |
| F | WhatsAppButton | Floating WA link (scroll-triggered) | Fixed position, all breakpoints |
| F | ThemeToggle | Theme switcher pill | Fixed position, all breakpoints |

---

## Breakpoint Strategy

| Breakpoint | Width | Tailwind prefix | Layout |
|-----------|-------|-----------------|--------|
| Mobile | < 640px | (default) | Single column, stacked |
| Small | 640px | `sm:` | Minor adjustments (CTA row, pillar grid) |
| Tablet | 768px | `md:` | Multi-column grids, nav horizontal |
| Desktop | 1024px | `lg:` | Full layouts, About 2-col, large typography |
| Wide | 1280px | `xl:` | Extra padding only |

**Rule**: Mobile-first. Default styles are mobile. Breakpoint prefixes ADD desktop behavior.

---

## Content Specification

### Navigation
- **Logo**: Energy Cabo icon + "Energy Cabo" text
- **Links**: Home, Services, Our Work, About, Contact (anchor scroll)
- **CTA**: "Get Quote" button → scrolls to Contact section
- **Behavior**: Transparent on top, solid bg on scroll (50px threshold)

### Hero
- **Headline**: "Energy Solutions for Baja California Sur"
- **Subheading**: Premium energy independence messaging
- **CTAs**: "Get Your Free Quote" (primary) + "Our Projects" (secondary)
- **Stats bar**: 3 metrics — installed capacity, projects, client satisfaction
- **Mascot**: "Bobo" character, visible on md+ only (right side)

### TrustStrip
- **Badges**: CFE Certified, Marine-Grade Equipment, Hurricane Resistant, Extended Warranty
- **Style**: Dark background strip, icon + title + description per badge

### Services
- **Cards** (6): Grid Savings, Smart Generation, Always On, Complete Solution, Total Independence, Surge Shield
- **Each card**: Icon + title + description + gradient background
- **Animation**: Scroll-triggered fade-in with stagger

### About
- **Left**: Brand narrative ("Why Energy Cabo") + descriptive text
- **Right**: 4 pillars (Premium Equipment, Professional Installation, Engineering & Design, Project Management)
- **Each pillar**: Colored accent bar + title + description

### Projects
- **Carousel**: Horizontal scroll of project cards (image + title + location + capacity)
- **Stats**: 4 metrics (capacity, projects, savings, satisfaction)
- **Navigation**: Left/right arrows on md+, swipe on mobile

### Testimonials
- **Cards** (3): 5-star rating + quote + client name + location
- **Style**: Theme-aware (frosted glass techno, warm bg funky)

### Contact
- **CTA**: "Make A Quote" large button
- **Cards** (2): Regional contacts — Salo (Los Cabos/La Paz) + Alex (Todos Santos)
- **Each card**: Photo + name + title + region + phone + WhatsApp button

### Footer
- **Brand column** (2-col wide): Logo + tagline + social icons
- **Quick Links**: Same as nav links
- **Contact**: Address, phone, email
- **Bottom bar**: Copyright + Privacy Policy link

---

## Known Issues (to fix in #62)

1. **CRITICAL**: `zoom: 0.7` in `src/index.css` — remove completely
2. **MEDIUM**: Projects carousel needs mobile swipe affordance (dots or hint text)

## Business Rules

- **BR-WEB-001**: "Energy solutions" not "solar" in all text (per CLAUDE.md)
- **BR-WEB-002**: ALL UI text in English (decided S64)
- **BR-WEB-003**: Brand colors from `tailwind.config.js` CSS variables — never hardcode hex
- **BR-WEB-004**: Theme toggle always available — both themes are production-ready
- **BR-WEB-005**: Contact cards show real team members (Salo + Alex) with real phone numbers
