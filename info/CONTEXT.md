# Velox Restro & Cafe — Project Context

## Project Info
- **Goal**: Full restaurant website for uncle's business, learning HTML/CSS
- **Folder**: `C:\Users\DELL\OneDrive\Desktop\velox prototype`
- **Git remote**: `https://github.com/moinkhan-dev/velox-prototype.git`
- **Git status**: master branch, NO commits yet — all files are untracked
- **Available images**: g1.jpg–g44.jpg (40+ food photos), logo.png
- **Fonts**: Playfair Display (headings), Sora (body) — switched from DM Sans
- **Contact form**: FormSubmit at `formsubmit.co/12expertmoin@gmail.com` (was Formspree)
- **Menu data**: Single source of truth in `js/menu-data.js` (132 items, 18 categories)

---

## Files

| File | Lines | Purpose |
|------|-------|---------|
| `index.html` | ~698 | Home page (nav, hero, about, signature, branches, contact, social, footer, schema) |
| `about.html` | ~270 | Dedicated about page (hero, story, mosaic gallery, awards, owner quote, stats, catering) |
| `menu.html` | ~181 | Menu page (veg/non-veg filter, 18 categories, 130+ items, data-driven from menu-data.js) |
| `order.html` | ~404 | Order page (130+ items, cart, order type, payment, WhatsApp order, closing time, data-driven) |
| `css/base.css` | ~52 | Reset, color & typography variables (Playfair + Sora), spacing/container tokens |
| `css/layout.css` | ~605 | Structural grids, section wrappers, hero ornaments, about page sections, catering, gallery mosaic |
| `css/components.css` | ~1582 | Widget styling (navbar, buttons, cards, forms, cart, order type, timing banner, menu items, award cards) |
| `css/responsive.css` | ~480 | All @media queries, about page breakpoints, social brand colors without hover on mobile |
| `css/animations.css` | ~160 | Page fade-in, scroll reveals, staggered grid reveals, hero entrance, dot-pattern drift, micro-interactions |
| `js/reveal.js` | ~58 | Intersection Observer scroll-triggered reveals + hero entrance |
| `js/menu-data.js` | ~1500 | All menu items (name, price, veg status, category) — single source for menu + order pages |
| `images/` | — | Food photos g1–g44, logo.png |
| `velox info.docx` | — | Source info doc (binary) |
| `info/CONTEXT.md` | — | This file |
| `info/TASKS.md` | — | Launch checklist |

**Deleted**: `style.css` (was unlinked), 3 unused images (`763x848_img1.png`, `about section image 1.png`, `g40 (1).jpg`)

---

## Pages Built

### `index.html` (Home)
1. **Navbar** — glass-morphism (fixed, 74px, gold border), hamburger at ≤768px, links: About → about.html, Menu, Branches, Contact, CTA → Order Online
2. **Hero** — split layout with glass card on left (blurred white bg), 3-image collage (g1/g7/g22), L-bracket gold corner ornaments, gold stamp diamond on tagline, gold underline on h1, image-textured background (g3.jpg)
3. **About + Signature (shared bg)** — wrapper div with fixed g22.jpg background, 3-image slideshow (g22→g1→g10, 4s crossfade), dark overlay. About content in frosted glass card. Signature cards also glass style with white text
4. **Chef's Specials** — 4 glass cards (blur 14px), accent borders, image zoom on hover, each card links to order.html
5. **Branches** — 3 mild-glass cards with brackets, embedded Google Maps, section bg uses subtle warm gradient
6. **Contact** — reservation form (FormSubmit) + 3 mild-glass info cards with WhatsApp links, section bg uses warm gradient
7. **Social Media** — dark green section with dot pattern drift, Facebook/Instagram/Zomato/Swiggy links
8. **Footer** — 5-column beige bg (not dark green — visually separates from social), gold top border, dark text
9. **Schema.org** — JSON-LD structured data
10. **Section labels** — all adorned with `◆` diamond characters on both sides

### `about.html` (About Us)
1. **Hero** — "Our Story" with subtitle (described layout: 4-col desktop, 2-col tablet, 1-col phone)
2. **Story** — double-column: full restaurant history + featured image (g22.jpg)
3. **Photo Gallery** — mosaic grid (8 images, varied aspect ratios: wide/tall cards with gallery labels)
4. **Awards** — 4 award cards on dark olive background with hover lift
5. **Owner Quote** — large Playfair italic quote block with 4-stat grid (3 Branches / 88+ Dishes / 12PM Opens / 11:30PM Closes)
6. **Catering** — dark overlay section with catering description + CTA
7. **Footer** — matching other pages

### `menu.html` (Menu)
- 130 items across 18 categories
- Sticky pill nav with glassmorphism (scrolls horizontally on mobile, scroll-snap)
- Veg/Non-Veg/All filter buttons with JS filtering
- FSSAI veg/non-veg markers via CSS pseudo-element dots
- 2-col grid on desktop, 1-col on mobile
- Menu section titles with gold underline

### `order.html` (Order Online)
- All 130+ items with 18 category headings matching menu.html
- Filterable item grid (All / Veg / Non-Veg)
- **Order type selector** — radio buttons: Delivery / Takeaway / Dine-In
- Sticky glassmorphism cart sidebar with quantity controls
- Cart with + / - buttons, total, item count
- **Closing time check** — JS disables ordering before 12 PM and after 11 PM (shows red/green banner)
- Checkout flow with payment method selection (COD / Online with UPI details)
- Place order → opens WhatsApp with order summary including order type + payment method
- Delivery notice strip

---

## Design System (Stitch DESIGN.md Tokens)

**Source**: `C:\Downloads\stitch_velox_restro_digital_platform\velox_restro_cafe\DESIGN.md`

### CSS Variables (base.css) — Current Palette
| Variable | Hex | Use |
|----------|-----|-----|
| `--primary` | `#8fb380` | Soft sage green — buttons, borders, active states |
| `--primary-dark` | `#5c8248` | Medium muted green — section backgrounds, headings |
| `--bg-warm` | `#f8f5ee` | Soft ivory — page background |
| `--bg-card` | `#ffffff` | Card backgrounds (legacy, most cards now use glass) |
| `--text-body` | `#44483c` | Warm dark olive — body text |
| `--accent` | `#debb7c` | Soft warm gold — prices, highlights, labels |
| `--section-py` | `120px` | Vertical section padding |
| `--section-px` | `60px` | Horizontal section padding |
| `--container-max` | `1280px` | Max content width |
| `--font-display` | `Playfair Display` | Serif — headings |
| `--font-body` | `Sora` | Modern sans-serif — body text |
| `--fs-display` | `3.75rem` | Hero heading size |
| `--fs-headline` | `2.5rem` | Section heading size |
| `--fs-label` | `0.8125rem` | Label/small text |

### Typography
- **Headings**: Playfair Display (700/600)
- **Body**: Sora (400/500/600/700), base 17px, line-height 1.6
- **Labels**: Sora 600, 0.8125rem, uppercase, 3px letter-spacing

### rgba Values (across CSS files)
- `rgba(92, 130, 72, X)` — primary-dark at various opacities (shadows, borders)
- `rgba(255, 248, 240, X)` — bg-warm at various opacities
- `rgba(222, 187, 124, X)` — accent at various opacities (borders, glass edges)
- `rgba(255, 255, 255, X)` — glass card backgrounds

---

## Responsive Breakpoints
- **Footer**: 768px → 2 cols, 480px → 1 col
- **Menu**: 768px → 1-col grid, scroll-snap pills
- **Branches**: 1100px → 2 cols, 700px → 1 col
- **Home**: 768px tablet, 480px phone — Hero, About, Signature, Contact, Social
- **Order**: 900px → single column, cart on top; 480px → 1-col grid
- **Social**: ≤768px — brand colors always visible (no hover needed on touch)
- **About page**: 900px → story/gallery/owner/catering stack; 768px → awards 2-col; 600px → mosaic condensed; 480px → full stack

---

## Branch Data

| Branch | Anchor ID | Phone | WhatsApp | Map |
|--------|-----------|-------|----------|-----|
| Daryaganj (flagship) | #branch-daryaganj | 7303390043 | ✅ wa.me/917303390043 | ✅ embed |
| Vijay Park | #branch-vijaypark | 7303390042 | ✅ wa.me/917303390042 | ✅ embed |
| Faridabad (Indian Heritage Cuisine) | #branch-faridabad | 9654515131 | ✅ wa.me/919654515131 | ✅ embed |

---

## Social Links
- **Facebook**: https://www.facebook.com/profile.php?id=100083305211165
- **Instagram**: https://instagram.com/veloxrestrocafe?igshid=YmMyMTA2M2Y=
- **Zomato**: `href="#"` placeholder ❌
- **Swiggy**: `href="#"` placeholder ❌

---

## What Has Been Built (Owner's Requests)

1. ✅ **Order Online page** — order.html with cart, filters, order type, payment, WhatsApp order flow
2. ✅ **Detailed About section** — moved to about.html with full photo layout, awards, owner quote, stats, catering
3. ✅ **Color palette** — lighter sage/olive + soft gold, airy feel
4. ⏳ **Updated menu** — coming from owner; update `js/menu-data.js`
5. ✅ **Veg/Non-Veg filter** — on both menu.html and order.html
6. ✅ **Mobile responsive** — all sections fully responsive across breakpoints
7. ✅ **Signature dish section** — Chef's Specials with glass cards + gold accents
8. ✅ **Social media section** — dedicated section on home page
9. ✅ **Full menu on order page** — data-driven from menu-data.js
10. ✅ **CSS split complete** — style.css → 5 files, all wired into HTML
11. ✅ **Scroll animations** — page fade-in, scroll reveals, staggered grids, hero entrance, micro-interactions
12. ✅ **Faridabad phone** — +919654515131 added to branch card + contact card
13. ✅ **Code cleanup** — unused CSS, images, dead code removed
14. ✅ **Design refinements** — 120px spacing, ornamental brackets, glassmorphism, softer shadows, royal accents
15. ✅ **Closing time check** — JS disables ordering before 12 PM / after 11 PM
16. ✅ **Order type selector** — Delivery/Takeaway/Dine-In radio buttons in cart, included in WhatsApp order
17. ✅ **UPI payment details** — real UPI ID and bank info shown on online payment selection
18. ✅ **Form backend** — FormSubmit endpoint active (formsubmit.co/12expertmoin@gmail.com)
19. ✅ **Menu data extracted** — `js/menu-data.js`: 132 items, 18 categories; menu.html + order.html render from it
20. ✅ **Glass card theme** — about, signature, branches, contact sections use frosted glass with blur
21. ✅ **Shared slideshow background** — about + signature share one bg with 3-image crossfade (g22→g1→g10)
22. ✅ **Royal accents** — gold stamp diamond on hero, `◆` diamond characters on section labels, gold underline on h1
23. ✅ **Footer separated** — beige bg instead of dark green, visually distinct from social section
24. ✅ **Accessibility** — aria-labels, alt text, tel: links with country code, meta/OG tags, prefers-reduced-motion

---

## Known Issues

1. ❌ **Zomato/Swiggy URLs** — `href="#"` placeholders, need real profiles
2. ❌ **Payment gateway** — UPI flow is manual (shows ID for customer to pay); real automated payment needs backend
3. ❌ **Git not committed** — needs initial commit + push
4. ⏳ **New food photos** — photoshoot pending; replace g1.jpg–g44.jpg when ready

---

## Stitch Design Elements — Status

| Element | Status |
|---------|--------|
| Ornamental L-brackets on cards | ✅ Done |
| Gold accent colors | ✅ Done |
| Stamp seal (hero diamond) | ✅ Done |
| Diamond section dividers | ✅ Done (section-label diamonds) |
| Glassmorphism elements | ✅ Done (hero, about, signature, branches, contact) |
| Parallax-layered backgrounds | ✅ Done (shared bg with slideshow) |
| "Fill-up" hover animation | ❌ Skipped — reverted to simple hover |
| Floating glass widget | ❌ Not implemented |

---

## Notes for Next Session
- New food photos + updated menu from owner needed before launch
- Real Zomato/Swiggy URLs needed from owner
- Git push after photos/menu arrive
- Stitch DESIGN.md at `C:\Downloads\stitch_velox_restro_digital_platform\velox_restro_cafe\DESIGN.md`
