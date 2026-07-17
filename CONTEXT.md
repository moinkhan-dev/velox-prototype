# Velox Restro & Cafe — Project Context

## Project Info
- **Goal**: Full restaurant website for uncle's business, learning HTML/CSS
- **Folder**: `C:\Users\DELL\OneDrive\Desktop\velox website`
- **Git remote**: `https://github.com/moinkhan-dev/velox-prototype.git`
- **Last commit**: `39229c8` — Velox website prototype
- **Available images**: g1.jpg–g44.jpg, logo.png (40+ food photos)

---

## Pages Built

### `index.html` (Home page)
Sections in order:
1. **Navbar** — cream glass-morphism, "Menu" links to menu.html, "Branches" links to #branches, "Contact" links to #contact
2. **Hero** — split layout, image collage (g1.jpg, g7.jpg, g22.jpg), two buttons → menu.html / #contact
3. **About** — dark olive overlay on g22.jpg, stats (3 Branches / 50+ Dishes / 12PM), "Book a Table"
4. **Signature Dishes** — 4 white cards on dark olive, g7/g10/g24/g4, prices in accent green
5. **Branches** — 3 branch cards with embedded Google Maps (Daryaganj flagship, Vijay Park, Faridabad), per-branch anchors (#branch-daryaganj, #branch-vijaypark, #branch-faridabad)
6. **Contact** — reservation form (name, phone, branch select, date, time, guests, message) + contact info cards with WhatsApp links for each branch
7. **Footer** — 5-column: Brand / Quick Links / Locations / Contact / Connect

### `menu.html` (Menu page)
- 88 items across 18 categories, sticky pill nav, FSSAI veg/non-veg markers
- Links home → index.html#..., Branches → index.html#branches

---

## Design System
- **Colors**: --bg-warm (#f2ede1), --bg-card (#ffffff), --olive (#4a5d3a), --olive-dark (#2f3d24), --text-body (#5c5a4f), --accent (#8a9a5b)
- **Fonts**: Fraunces (serif headings), Inter (sans-serif body)
- `style.css` has all styles with inline comments explaining the WHY

---

## Branch Data

| Branch | Anchor ID | Phone | WhatsApp |
|--------|-----------|-------|----------|
| Daryaganj (flagship) | #branch-daryaganj | 7303390043 | ✅ |
| Vijay Park | #branch-vijaypark | 7303390042 | ✅ |
| Faridabad (Indian Heritage Cuisine) | #branch-faridabad | **MISSING** | **MISSING** |

---

## Social Links (Use These)
- **Facebook**: https://www.facebook.com/profile.php?id=100083305211165
- **Instagram**: https://instagram.com/veloxrestrocafe?igshid=YmMyMTA2M2Y=

---

## Known Issues

- Faridabad branch phone number missing — Call button omitted from card, WhatsApp link broken
- Zomato/Swiggy links in footer are `href="#"` placeholders
- Stats in About section say "50+ Dishes" but menu has 88 items — might want to update
- No responsive styles for the home page sections (Hero, About, Signature, Contact form) — only menu page and footer have responsive
- `about section image 1.png` and `763x848_img1.png` in folder — unused, possibly deletable

---

## What's Next (Discuss with Uncle for Feedback)

1. **Feedback on the prototype** — ask uncle/family what they want added, removed, or changed
2. **Faridabad phone number** — needed to complete that branch card and WhatsApp link
3. **Zomato/Swiggy URLs** — if uncle wants them linked, get real URLs
4. **Responsive media queries** — mobile support for Hero, About, Signature, Contact sections
5. **WhatsApp order flow** — menu items → cart → WhatsApp message (requires JS)
6. **Deploy** — Netlify/Vercel with custom domain

---

## Notes for Next Session
- User is learning — explain WHY code works
- User prefers real content (menu data, photos, reviews from uncle's site)
- User wants to avoid looking like Petpooja template
- User started web dev course and will begin learning JavaScript in 4-5 days
- Available AI models: DeepSeek V4 Flash Free, Nemotron 3 Ultra Free, North Mini Code Free
