# Velox Restro & Cafe — Launch Checklist

## Before Ship

- [ ] **New food photos** — replace `images/g1.jpg`–`g44.jpg` with photoshoot output
- [ ] **About page photos** — update gallery mosaic in `about.html` with new images
- [ ] **Updated menu** — update `js/menu-data.js` with new items, prices, categories from owner
- [ ] **Zomato URL** — replace `href="#"` in social section (all pages) with real profile link
- [ ] **Swiggy URL** — replace `href="#"` in social section (all pages) with real profile link
- [ ] **Form backend** — verify FormSubmit at `formsubmit.co/12expertmoin@gmail.com` is receiving submissions

## Git

- [ ] `git add . && git commit -m "initial site"`
- [ ] `git remote add origin https://github.com/moinkhan-dev/velox-prototype.git`
- [ ] `git push -u origin master`

## Future — Backend Options

- [ ] **Order log** — save orders to a database so uncle doesn't lose them from WhatsApp chat overflow
- [ ] **Real payment gateway** — Razorpay / Cashfree integration with automated confirmation
- [ ] **Menu management** — update items, prices, categories from a simple admin panel instead of editing code
- [ ] **Contact form storage** — store submissions in a database instead of relying on FormSubmit email
