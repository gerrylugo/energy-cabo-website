# Energy Cabo — Logo Generation Prompts (Midjourney)

> Prompts to generate high-resolution versions of the Energy Cabo logo.
> The current logo has: circle + lightning bolt + signal bars icon, "Energy Cabo" text, "Solar Solutions" subtitle.
> These prompts recreate the icon at professional quality for use in:
> - Proposals PDF (cover + headers)
> - Website (header, footer, favicon, og:image)
> - Social media, WhatsApp, email signatures
> - Print materials

---

## Reference

**Current logo elements:**
- Circle (open at top-right) containing a lightning bolt
- Three vertical signal/power bars to the right of the circle
- "Energy" in teal rounded sans-serif, "Cabo" in navy
- Subtitle "Solar Solutions" (was "Logistics Services")

**Brand colors:**
- Navy: #1B3A6B (Mar de Cortez)
- Teal: #50BB9B (Patas del Bobo)
- Teal-to-Navy gradient on lightning bolt

**Target outputs:**
- Icon only (no text): 1024×1024 PNG transparent
- Icon + text horizontal: 2400×800 PNG transparent
- Icon white version (for dark backgrounds): 1024×1024 PNG transparent
- Favicon: 512×512 simplified

---

## L1 — Icon Recreation (circle + bolt + bars)

> **HOW TO USE**: Upload `energy-cabo-logo-removebg-preview.png` to Midjourney Discord chat.
> Copy the image URL from Discord (right-click → Copy Link).
> Replace `[LOGO_URL]` below with that URL.

### L1.1 — Clean vector recreation (START HERE)
```
[LOGO_URL] recreate this exact logo icon in high resolution, circle shape open at top right with lightning bolt inside, three vertical signal bars to the right, navy blue #1B3A6B and teal #50BB9B gradient on bolt, clean geometric flat design, no text no letters, white background, professional energy company logo mark --ar 1:1 --iw 1.5 --style raw --s 50 --v 6.1
```

### L1.2 — Higher fidelity to original
```
[LOGO_URL] high resolution recreation of this exact logo, maintain exact proportions and shapes, circle with lightning bolt and three vertical bars, navy blue and teal colors, crisp vector-quality edges, no text no words no letters, white background --ar 1:1 --iw 2.0 --style raw --s 25 --v 6.1
```

### L1.3 — Refined with subtle depth
```
[LOGO_URL] premium refined version of this logo icon, same circle bolt and bars design, navy #1B3A6B and teal #50BB9B, subtle dimensionality and clean shadows, modern technology aesthetic, no text no letters, white background --ar 1:1 --iw 1.5 --style raw --s 100 --v 6.1
```

### L1.4 — Ultra clean minimal
```
[LOGO_URL] ultra clean minimalist version of this logo, simplified geometric shapes, two-color navy and teal only, flat solid colors, designed to work at any size 32px to 2048px, no text, white background --ar 1:1 --iw 1.5 --style raw --s 25 --v 6.1
```

---

## L2 — Icon White Version (for dark/cover backgrounds)

### L2.1 — White icon for covers
```
[LOGO_URL] recreate this exact logo icon entirely in white color, circle with lightning bolt and three vertical bars, all white, clean geometric flat design, no text, transparent background, suitable for dark background overlay --ar 1:1 --iw 1.5 --style raw --s 50 --v 6.1
```

### L2.2 — White with subtle glow
```
[LOGO_URL] this logo icon in pure white with very subtle soft glow, circular frame with bolt and bars, minimalist geometric, no text no letters, black background for contrast, designed for dark navy overlay --ar 1:1 --iw 1.5 --style raw --s 75 --v 6.1
```

---

## L3 — Full Logo with Text (icon + "Energy Cabo" + "Solar Solutions")

> NOTE: Midjourney struggles with text. These prompts may need post-processing.
> Alternative: Generate icon only (L1/L2) and add text in Figma/Canva with Plus Jakarta Sans ExtraBold.

### L3.1 — Horizontal lockup
```
professional corporate logo, circular icon with lightning bolt on the left, company name "Energy Cabo" in bold rounded sans-serif font on the right, subtitle "Solar Solutions" below in small uppercase, teal and navy blue color scheme, clean white background, premium energy company branding --ar 3:1 --style raw --s 100 --v 6.1
```

### L3.2 — Stacked lockup
```
corporate logo stacked layout, circular lightning bolt icon on top, "Energy Cabo" text below in bold font, "Solar Solutions" subtitle in small uppercase letters, navy blue and teal colors, white background, modern premium energy branding --ar 1:1 --style raw --s 100 --v 6.1
```

---

## L4 — Favicon / App Icon (simplified)

### L4.1 — Simplified bolt from original
```
[LOGO_URL] extremely simplified version of this logo, only the lightning bolt on a navy blue circle, no bars no ring, must be readable at 16px, flat solid colors teal and navy, no text --ar 1:1 --iw 1.0 --style raw --s 25 --v 6.1
```

### L4.2 — EC monogram
```
minimalist monogram logo, letters E and C intertwined, navy blue #1B3A6B and teal #50BB9B, modern geometric sans-serif, clean simple mark suitable for favicon, no other text, white background --ar 1:1 --style raw --s 50 --v 6.1
```

### L4.3 — Circle + bolt micro
```
[LOGO_URL] micro icon version of this logo, only essential shapes, circle and bolt, navy and teal, recognizable at 32x32 pixels, ultra simplified, no text, flat solid colors only --ar 1:1 --iw 1.0 --style raw --s 25 --v 6.1
```

---

## L5 — Social Media Profile Picture

### L5.1 — Icon on navy background (Instagram/WhatsApp)
```
[LOGO_URL] this logo icon centered on dark navy blue background #1B3A6B, icon in teal and white, clean centered composition, suitable for WhatsApp and Instagram profile picture, no text --ar 1:1 --iw 1.5 --style raw --s 75 --v 6.1
```

### L5.2 — Icon on gradient background
```
[LOGO_URL] this logo icon centered, background gradient from navy #1B3A6B to dark blue #0d2240, icon in teal #50BB9B, modern premium feel, no text --ar 1:1 --iw 1.5 --style raw --s 100 --v 6.1
```

---

## L6 — OG Image / Social Share Card (website)

### L6.1 — Wide format with landscape
```
social media share card for energy company, left side: teal lightning bolt logo on navy, right side: aerial view of Los Cabos coastline with solar panels on luxury villa roof, text overlay area clear on left third, warm golden hour lighting, premium composition --ar 1200:630 --style raw --s 150 --v 6.1
```

### L6.2 — Minimal wide
```
wide social share card, navy blue #1B3A6B background, teal lightning bolt logo mark centered, clean minimal professional design, energy company branding, no text --ar 1200:630 --style raw --s 50 --v 6.1
```

---

## Workflow

1. **Start with L1.1 and L1.2** — generate 4 variations each, pick the best icon
2. **Refine winner** with `/describe` + manual tweaks
3. **Generate L2.1** from the winner — white version for covers
4. **For text versions**: Use Figma/Canva to pair the Midjourney icon with:
   - "Energy" in Plus Jakarta Sans ExtraBold, color #50BB9B
   - "Cabo" in Plus Jakarta Sans ExtraBold, color #1B3A6B  
   - "SOLAR SOLUTIONS" in Plus Jakarta Sans Bold, 7pt, uppercase, letter-spacing 2px, color #50BB9B
5. **Generate L4.1-L4.3** for favicon
6. **Generate L5.1-L5.2** for social media profiles
7. **Export final assets** to `energy-cabo-website/assets/brand/logo/`:
   - `energy-cabo-icon-color.png` (1024×1024, transparent)
   - `energy-cabo-icon-white.png` (1024×1024, transparent)
   - `energy-cabo-logo-horizontal.png` (2400×800, transparent — icon + text)
   - `energy-cabo-logo-stacked.png` (1200×1200, transparent — icon + text)
   - `energy-cabo-favicon.png` (512×512)
   - `energy-cabo-social.png` (1080×1080, navy background)
   - `energy-cabo-og.png` (1200×630)

---

## Post-processing Notes

- Midjourney outputs need background removal (remove.bg or Photoshop)
- Text versions should ALWAYS be composed in Figma/Canva, not generated by Midjourney (AI text is unreliable)
- Upscale winners with Midjourney's `--upscale` or Topaz AI for print quality
- Final SVG trace: use Vectorizer.ai or Adobe Illustrator's Image Trace on the best PNG for a true vector version
