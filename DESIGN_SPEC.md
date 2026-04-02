# Energy Cabo Website — Design Spec

> Reverse-engineered from code + branding decisions. Source of truth for visual design.

## Dual Theme System

Toggle: bottom-left corner, "Luxury" / "Fun" labels, 600ms crossfade transition.

---

## Theme: Luxury (code: `techno`)

**Identity**: Premium, professional, real photography of Los Cabos.

### Palette
| Token | Hex | Usage |
|-------|-----|-------|
| primary | `#1B3A6B` | Navy — text, headers, nav |
| primary-dark | `#122A4F` | Deeper navy — surfaces |
| accent | `#50BB9B` | Teal — CTAs, links, highlights |
| gold | `#D4A855` | Testimonials label, accents |
| torote | `#C4883A` | About section pillar accent |

### Backgrounds by Section
| Section | Technique | Image | Overlay |
|---------|-----------|-------|---------|
| Hero | Full-bleed photo | `hero-arco-techno.png` (El Arco) | None (removed) |
| About | Photo + white gradient L→R | `torote-desert-techno.png` | 85%→10% white left-to-right |
| Testimonials | Photo + glassmorphism cards | `water-teal-texture.png` | `bg-[#0a1628]/15` (15%) |
| Services | Solid `bg-theme-bg` | None | None |
| Projects | Solid `bg-theme-bg-alt` | None | None |
| Contact | Solid `bg-theme-bg` | None | None |

### Text Techniques
- Headlines: `text-white drop-shadow-lg` (over images)
- Subtitles: `text-white font-semibold drop-shadow-lg` (over images)
- Testimonials header: Gold `#F5A623` + `text-shadow: 0 0 15px rgba(0,0,0,0.8)`
- Stats labels: `text-white/80 drop-shadow-md`

### Card Styles
- Testimonials: `bg-white/15 backdrop-blur-md border-white/20` (glassmorphism)
- About pillars: `bg-theme-surface` + 4px colored left border + hover tint
- Services: `bg-theme-surface` + gradient hover backgrounds

### Special Elements
- No mascot in Luxury
- CardinalWire decorative element (both themes)

---

## Theme: Fun (code: `funky`)

**Identity**: Colorful, playful, BCS sunset vibes. Illustrated/cartoon art (NOT real photos).

### Palette
| Token | Hex | Usage |
|-------|-----|-------|
| primary | `#D4519A` | Choya pink — headers, nav |
| primary-dark | `#B03D7E` | Deep pink — surfaces |
| accent | `#5B6DB0` | Indigo-blue — CTAs, links (Salo's sunset blue) |
| coral | `#E8735A` | Warm accent, hero gradient start |
| sunset-purple | `#8B6DB0` | Secondary purple accent |

### Hero Gradient (full BCS sunset)
```
coral #E8735A → choya pink #D4519A → indigo-blue #1B2A5C
```
Plus: centered 800px blur glow circle in pink.

### Backgrounds by Section
| Section | Technique |
|---------|-----------|
| Hero | CSS gradient (sunset) — NO photo |
| About | Solid `bg-theme-bg-warm/50` |
| Testimonials | Solid `bg-theme-bg` |
| All others | Theme CSS variables |

### Special Elements
- **Bobo mascot**: Hero section, bottom-right, only in Fun mode. `bobo-hero.png`, hover:scale-105
- **Future**: Cartoon illustrations of BCS flora/fauna (Midjourney)

### Art Direction (pending Midjourney)
Fun theme should use **cartoon/caricature illustrations**, not photos:
- El Arco as a playful cartoon landmark
- Bobo (blue-footed booby) in various poses
- Cardones (cacti) with personality
- Torote trees as characters
- Choya with pink flowers
- Marine life (whale, manta ray) as fun elements
- Style reference: colorful, warm, approachable — like a Pixar version of Baja

### Mascot Hover Interaction (branding requirement)
On hover, mascots/characters switch to a **beach look** version (sunglasses, hawaiian shirt, flip-flops, surfboard, etc.). Each mascot needs two states:
- **Default**: normal cartoon character
- **Hover**: same character in beach/vacation mode
This applies to ALL mascot illustrations in Fun theme (Bobo, Cardinal, future characters).

---

## Shared Design Patterns

### Scroll Animations
- `animate-on-scroll`: fade-in + translateY(30px), 0.8s
- `animate-on-scroll-left/right`: translateX(40px), 0.8s
- `stagger-children`: 0.1s delay between siblings

### Theme Transition
- 600ms crossfade via `html.theme-transitioning` class
- Transitions: background-color, color, border-color, box-shadow, fill, stroke

### Images in Repo
| File | Used in | Theme |
|------|---------|-------|
| `hero-arco-techno.png` | Hero | Luxury |
| `torote-desert-techno.png` | About | Luxury |
| `water-teal-texture.png` | Testimonials | Luxury |
| `bobo-hero.png` | Hero (mascot) | Fun |
| `cardinal-wire.png` | CardinalWire (decoration) | Both |
