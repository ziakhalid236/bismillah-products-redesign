# Bismillah Textile website

Responsive static website for Bismillah Textile, refreshed with a full editorial-luxury UI pass. The visual system uses deep wine, warm cream and antique gold, led by the Fraunces serif for headings and Jost for body text. All textile and facility photography is bundled locally in `assets/`.

## Pages

- `index.html` — image-led homepage, product families, production overview, leadership, company facts and partners
- `about.html` — company story, vision and philosophy, CEO message, values, research and development, and key team members
- `products.html` — all 28 published product ranges with category filtering
- `manufacturing.html` — company-reported production capabilities, published capacities and a facility gallery
- `quality.html` — quality approach and published certification information
- `partners.html` — product families and company-published brands and retailers
- `contact.html` — enquiry form, company contact details and an embedded location map

## Design system

`styles.css` holds the whole design system as CSS custom properties (`--wine`, `--cream`, `--gold`, `--serif`, `--sans`, shadows, radii, easing) followed by component styles and three responsive breakpoints (1000px, 820px, 520px).

Shared UI pieces:

- Sticky, blur-backed header that condenses on scroll (`.header.scrolled`)
- Asymmetric hero with framed image and stat badge
- `.product-card`, `.range-card`, `.icon-grid`, `.stats` and `.split` blocks reused across pages
- `.leader` and `.ceo-quote` for leadership presentation
- `.gallery-grid` for facility photography and `.logo-wall` for partner logos
- `.cert-grid` for certificate previews
- Scroll-reveal animation on `.reveal` elements, applied only when JavaScript is available (`html.js`) so content stays visible without JS
- `prefers-reduced-motion` disables reveal animation and smooth scrolling

`script.js` adds the mobile navigation toggle, the header scroll state, the `IntersectionObserver` reveal, the product category filter (including `#hash` deep links such as `products.html#fabric`) and the contact-form draft email behaviour.

## Content basis

Company information was carried forward from the previous Bismillah Textiles website source already used in this project, including the 1989 founding date, Faisalabad location, 2,500+ people, manufacturing capacities, product ranges, certification dates and contact details. Imagery, brand logos and certification previews were also taken from that source. Historical partner names are labelled as company-published relationships and should be reconfirmed before use in new marketing or logo material.

## Run locally

```bash
python3 -m http.server 4174
```

Then open `http://127.0.0.1:4174/`.

The contact form opens a draft email to `info@bismillah.com.pk`; it does not store form data on the website.

