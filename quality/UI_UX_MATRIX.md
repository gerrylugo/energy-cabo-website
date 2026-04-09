# Energy Cabo Website — UI/UX Acceptance Matrix

> **Purpose**: Define visual acceptance criteria per component at each breakpoint.
> **Created**: S161 (09 Apr 2026) — V-model alignment (#59)
> **Breakpoints**: Mobile (375px), Tablet (768px), Desktop (1024px+)
> **Status legend**: OK = verified working, FIX = needs work, N/T = not tested

---

## 1. Navigation

| Criteria | Mobile (375px) | Tablet (768px) | Desktop (1024px+) |
|----------|---------------|----------------|-------------------|
| Logo visible | OK | OK | OK |
| Hamburger menu appears | OK (< md) | Hidden (md+) | Hidden |
| Nav links horizontal | Hidden | OK | OK |
| "Get Quote" CTA visible | OK (mobile menu) | OK | OK |
| Scroll-triggered styling | OK | OK | OK |
| Touch targets >= 44px | OK | OK | N/A |

---

## 2. Hero

| Criteria | Mobile (375px) | Tablet (768px) | Desktop (1024px+) |
|----------|---------------|----------------|-------------------|
| Headline readable | OK (text-5xl) | OK (text-7xl) | OK (text-8xl) |
| CTA buttons stack vertically | OK (flex-col) | Side-by-side (sm+) | Side-by-side |
| Stats bar readable | OK (text-2xl) | OK | OK (text-4xl) |
| Mascot hidden | OK (hidden md:block) | Visible (md+) | Visible |
| Background adapts to theme | OK | OK | OK |
| Full viewport height | OK (min-h-screen) | OK | OK |

---

## 3. TrustStrip

| Criteria | Mobile (375px) | Tablet (768px) | Desktop (1024px+) |
|----------|---------------|----------------|-------------------|
| Grid reflows | OK (2-col) | OK (4-col) | OK (4-col) |
| Badge text readable | OK | OK | OK |
| Contrast on dark bg | OK | OK | OK |
| Icons properly sized | OK | OK | OK |

---

## 4. Services

| Criteria | Mobile (375px) | Tablet (768px) | Desktop (1024px+) |
|----------|---------------|----------------|-------------------|
| Cards stack single column | OK (1-col) | OK (2-col) | OK (3-col) |
| Card padding comfortable | OK (p-8) | OK | OK |
| Gradient backgrounds render | OK | OK | OK |
| Scroll animation triggers | OK | OK | OK |

---

## 5. About

| Criteria | Mobile (375px) | Tablet (768px) | Desktop (1024px+) |
|----------|---------------|----------------|-------------------|
| Text above pillars (stacked) | OK (1-col) | OK (1-col) | 2-col (lg+) |
| Pillar grid reflows | OK (1-col) | OK (2x2 sm+) | OK (2x2) |
| Background adapts to theme | OK | OK | OK |
| Trust badges visible | OK | OK | OK |

---

## 6. Projects

| Criteria | Mobile (375px) | Tablet (768px) | Desktop (1024px+) |
|----------|---------------|----------------|-------------------|
| Card width appropriate | OK (85%) | OK (48%) | OK (23.5%) |
| Scroll arrows hidden mobile | OK (hidden md:flex) | Visible (md+) | Visible |
| Stats bar reflows | OK (2x2) | OK (4-col md+) | OK (4-col) |
| Swipe affordance on mobile | OK — "Swipe to explore" hint | N/A | N/A |
| Image aspect ratio maintained | OK (4/5) | OK | OK |

**Issue**: Mobile users see a carousel but no visual cue to swipe. Add swipe indicator or dots.

---

## 7. Testimonials

| Criteria | Mobile (375px) | Tablet (768px) | Desktop (1024px+) |
|----------|---------------|----------------|-------------------|
| Cards stack single column | OK (1-col) | 3-col (md+) | 3-col |
| Rating stars visible | OK | OK | OK |
| Quote text readable | OK | OK | OK |
| Theme-aware styling | OK | OK | OK |

---

## 8. Contact

| Criteria | Mobile (375px) | Tablet (768px) | Desktop (1024px+) |
|----------|---------------|----------------|-------------------|
| Contact cards stack | OK (1-col) | Side-by-side (md+) | Side-by-side |
| CTA button prominent | OK | OK | OK |
| Phone/WA buttons tappable | OK | OK | N/A |
| Coverage text readable | OK | OK | OK |

---

## 9. Footer

| Criteria | Mobile (375px) | Tablet (768px) | Desktop (1024px+) |
|----------|---------------|----------------|-------------------|
| Columns stack | OK (1-col) | 4-col (md+) | 4-col |
| Social icons tappable | OK (w-10 h-10) | OK | OK |
| Bottom bar stacks | OK (flex-col) | Row (md+) | Row |
| Copyright visible | OK | OK | OK |

---

## 10. WhatsAppButton (floating)

| Criteria | Mobile (375px) | Tablet (768px) | Desktop (1024px+) |
|----------|---------------|----------------|-------------------|
| Fixed position works | OK | OK | OK |
| Size >= 44px touch target | OK (56px) | OK | OK |
| Scroll-triggered visibility | OK (400px) | OK | OK |
| Doesn't obstruct content | OK | OK | OK |

---

## 11. ThemeToggle (floating)

| Criteria | Mobile (375px) | Tablet (768px) | Desktop (1024px+) |
|----------|---------------|----------------|-------------------|
| Fixed position works | OK | OK | OK |
| Toggle switches theme | OK | OK | OK |
| Doesn't obstruct content | OK | OK | OK |

---

## Global Issues

| Issue | Severity | Component | Fix |
|-------|----------|-----------|-----|
| ~~`zoom: 0.7` in index.css~~ | ~~CRITICAL~~ | ~~All~~ | **FIXED S161** — removed zoom, scaled text sizes down ~1 step per component |
| ~~No swipe affordance~~ | ~~MEDIUM~~ | ~~Projects~~ | **FIXED S161** — added "Swipe to explore" hint on mobile (`md:hidden`) |

## Changelog

| Date | Change |
|------|--------|
| 09 Apr 2026 (S161) | Initial matrix — 11 components audited at 3 breakpoints. 2 issues found: zoom hack (critical), carousel affordance (medium). |
| 09 Apr 2026 (S161) | Fixed both issues: removed `zoom:0.7`, scaled text sizes ~1 step across 7 components, added swipe hint to Projects carousel. Build clean. |
