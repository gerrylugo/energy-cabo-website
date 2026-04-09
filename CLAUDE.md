# Energy Cabo Website — Claude Code Rules

> React + Vite + Tailwind CSS marketing website for Energy Cabo.
> This is the NEW website (replacing WordPress at energycabo.com).
> Currently deployed at energy-cabo-website.vercel.app (preview only).

## Critical

- **Branch**: `master` — push here for Vercel auto-deploy
- **Deploy**: Vercel auto-deploys on push to master. Preview URL: energy-cabo-website.vercel.app
- **Domain cutover**: NOT YET — energycabo.com still points to WordPress. Do NOT announce the Vercel URL to clients.
- **Theme system**: Two themes (Techno/Funky) via ThemeProvider context. Both must work — test changes in both themes.

## Code discipline

- **ALL UI text in English** (decided S64)
- **"Energy solutions"** not "solar" — Energy Cabo is energy solutions, not just solar
- **Brand colors**: Use Tailwind CSS variables (`text-primary`, `bg-accent`), NEVER hardcode hex values
- **Mobile-first**: Default Tailwind classes are mobile. Use `sm:`, `md:`, `lg:` to ADD desktop behavior.
- **No zoom hacks**: Do NOT use `zoom` CSS property. Use proper Tailwind responsive sizing instead.

## Dev environment

- **Install**: `npm install`
- **Dev server**: `npm run dev` (Vite, port 5173)
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Type check**: `npm run typecheck`
- **No test framework** — visual testing via Chrome DevTools responsive mode

## Quality system (Light V-model)

- `quality/UI_UX_MATRIX.md` — visual acceptance criteria per component at 3 breakpoints
- `quality/WEBSITE_SECTIONS_SPEC.md` — section content, order, responsive strategy, business rules
- Update matrix when modifying any component's responsive behavior
- No REQ/ARCH/TC overhead — this is a marketing website, not a CRM

## Breakpoints

| Width | Prefix | Use |
|-------|--------|-----|
| < 640px | (default) | Mobile — single column, stacked |
| 640px | `sm:` | Minor adjustments |
| 768px | `md:` | Multi-column grids, horizontal nav |
| 1024px | `lg:` | Full layouts, large typography |

## Assets

- Brand images: `assets/brand/midjourney/` (Midjourney-generated BCS photography)
- Logos: `assets/brand/logo/`
- Fonts: Plus Jakarta Sans (Google Fonts, loaded via CSS)
