# {{PROJECT_NAME}} — Image Generation Prompts

> For Google AI Studio / Midjourney / Leonardo AI / DALL-E
> Colors: {{PRIMARY}} {{ACCENT}} {{DARK}} {{WARM}}

---

## 0. SYSTEM INSTRUCTIONS (paste once)

```
You are a brand designer for {{PROJECT_NAME}}, a {{ONE_LINE_DESCRIPTION}}.

Brand identity:
- {{BRAND_MEANING — what the name means, etymology, vibe}}
- Visual themes: {{LIST 4-6 VISUAL THEMES — e.g. "sun, aura, desert, sound waves"}}

Color palette (STRICT — use only these):
- Primary: {{HEX1}}, {{HEX2}}, {{HEX3}}
- Accent: {{HEX4}}, {{HEX5}}
- Warm/Secondary: {{HEX6}}
- Dark base: {{HEX7}}, {{HEX8}}
- Light (when needed): {{HEX9}}

Rules:
- NEVER generate text, words, letters, or watermarks in images
- Keep compositions clean and minimal
- Icons must work at small sizes (32px to 512px)
- Dark backgrounds by default unless specified otherwise
- {{PRIMARY_COLOR_NAME}} is always dominant, {{ACCENT_COLOR_NAME}} is accent
```

### Temperature Settings
| Asset type | Temperature | Why |
|-----------|-------------|-----|
| App icon | 0.6-0.8 | Controlled, consistent |
| Splash/Hero | 1.0-1.2 | Creative, dramatic |
| UI Background | 0.4-0.6 | Subtle, predictable |
| Social/Promo | 1.0-1.4 | Most creative freedom |
| Favicon | 0.4-0.6 | Ultra simple |

### Aspect Ratios
| Asset | Ratio |
|-------|-------|
| App icon / Favicon | 1:1 |
| Splash / Hero / UI bg | 16:9 |
| IG post | 1:1 |
| IG story | 9:16 |

---

## 1. APP ICON (Concepts x Styles = up to 64 combos)

### Define your axes:

**Concepts (pick 4-8 that fit your brand):**
- A: {{CONCEPT — e.g. "Sun with oracle eye center"}}
- B: {{CONCEPT — e.g. "Letter X made of light rays"}}
- C: {{CONCEPT — e.g. "Abstract eclipse with accent corona"}}
- D: {{CONCEPT — e.g. "Sound wave forming circular shape"}}
- E: {{CONCEPT — e.g. "Landscape horizon with rising element"}}
- F: {{CONCEPT — e.g. "Compass or symbolic icon"}}
- G: {{CONCEPT — e.g. "Industry-specific object (wheel, gear, etc)"}}
- H: {{CONCEPT — e.g. "Classic object reimagined (vinyl, book, etc)"}}

**Styles (pick 4-8):**
1. flat vector
2. 3D glossy
3. glassmorphism
4. neon glow
5. metallic emboss
6. low-poly geometric
7. line art
8. gradient mesh

**Moods (pick 3-4):**
- warm and inviting
- mystical and powerful
- sleek and techy
- organic and flowing

### Prompt formula:

```
[Asset type], [concept description], [style], dark [base color] background [hex],
colors [primary hex] [accent hex], [mood] mood, square 1:1,
no text no words no letters
```

### Example — Concept A, all 8 styles:

```
A1. Minimalist app icon, [concept A description], [primary color] main element,
[accent color] secondary element, flat vector style, dark background [dark hex],
colors [primary hex] [accent hex], warm and inviting mood, square 1:1,
no text no words no letters
```

```
A2. [Same concept], 3D glossy style with subtle reflections, [same colors/bg],
mystical and powerful mood, square 1:1, no text no words no letters
```

```
A3. [Same concept], glassmorphism style with frosted glass effect, [same colors/bg],
sleek and techy mood, square 1:1, no text no words no letters
```

(... repeat for styles 4-8, varying mood to match style ...)

---

## 2. SPLASH / HERO (Scenes x Styles = 16 combos)

**Scenes (pick 4):**
- I: {{SCENE — e.g. "Desert sunset with sound waves in sky"}}
- J: {{SCENE — e.g. "Symbolic object in dramatic setting"}}
- K: {{SCENE — e.g. "Abstract particles as energy/data"}}
- L: {{SCENE — e.g. "Product in use, lifestyle shot"}}

**Styles:** photorealistic, digital painting, abstract minimal, cinematic concept art

### Prompt formula:

```
[Scene description], [key visual details], [color references],
[style], wide 16:9, no text no words no letters
```

---

## 3. UI BACKGROUNDS (8 options)

### Must be subtle — not distracting behind UI elements

```
BG1. Subtle dark abstract background, [subtle element — e.g. "golden dust particles"],
very low opacity, dark [base color hex] base, minimal, suitable for dark UI,
no focal point, seamless, no text no words no letters
```

(... create 6-8 variations with different subtle textures:
particles, nebula wisps, faint texture, gradient mesh, concentric circles,
topographic lines, starfield, flowing fabric ...)

---

## 4. SOCIAL / PROMO (8 lifestyle shots)

```
S1. [Lifestyle scene with your product/domain], [primary color] lighting,
[accent color] ambient light, [photography style], no text no words no letters
```

(... create 6-8 with different scenes: close-ups, aerial, silhouettes,
studio shots, outdoor, abstract macro ...)

---

## 5. FAVICON (8 ultra-simple options)

### Must work at 32x32px

```
FV1. Ultra simple geometric [main symbol] icon, solid [primary color] center,
dark background, flat design, single color [primary hex],
suitable for 32x32 pixel favicon, no text no words no letters
```

---

## 6. REFINEMENT PROMPTS (use as follow-ups when result is ~80% good)

### Color
```
Same image but more [primary color], increase warmth
Same image but more [accent] accent, make [element] more visible
Same image but darker background, more contrast
```

### Composition
```
Same concept but simpler, fewer details, must work at 32px
Same concept but more detailed, add subtle texture
Same concept but zoom in closer
Same concept but add more negative space
```

### Style
```
Same concept but more modern and techy
Same concept but more organic and warm
Same concept but more like a premium luxury brand
```

### Mixing winners
```
Combine the [element] from [image A] with the [element] from [image B]
Use the composition from [image A] but apply the style from [image B]
```

---

## 7. NEGATIVE PROMPTS (Leonardo / Midjourney --no)

```
text, words, letters, watermark, signature, blurry, low quality,
photorealistic face, human, person, busy background, cluttered,
cartoon, childish, clip art
```

---

## Quick Reference

| Category | Count | Temperature | Aspect |
|----------|-------|-------------|--------|
| App Icon | up to 64 | 0.6-0.8 | 1:1 |
| Splash/Hero | 16 | 1.0-1.2 | 16:9 |
| UI Backgrounds | 8 | 0.4-0.6 | 16:9 |
| Social/Promo | 8 | 1.0-1.4 | varies |
| Favicon | 8 | 0.4-0.6 | 1:1 |
| Refinements | 12 | same | same |

## Workflow

1. Set System Instructions once (Section 0)
2. Start with icons — try your strongest 4-5 concepts first
3. Generate 4 per prompt — pick best elements
4. Refine winners with Section 6 follow-ups
5. Move to splash once icon direction is locked
6. Save as `[prompt_id]_v[number].png` (e.g., A4_v1.png)
