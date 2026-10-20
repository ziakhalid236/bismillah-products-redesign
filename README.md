# Bismillah Textile website

Responsive static website for Bismillah Textile, refreshed from the latest Google Drive design ZIP and demo reference. The visual system uses the burgundy, cream, gold and serif-led direction shown in the supplied demo, with new local textile images bundled in `assets/`.

## Pages

- `index.html` — image-led homepage, product families, production overview and company facts
- `products.html` — filterable product families for home textiles, fabric, hospitality and apparel
- `manufacturing.html` — company-reported production capabilities and published capacities
- `quality.html` — quality approach and published certification information
- `partners.html` — product families and historical company-reported brands/retailers
- `contact.html` — enquiry form and company contact details

## Content basis

Company information was carried forward from the previous Bismillah Textiles website source already used in this project, including the 1989 founding date, Faisalabad location, 2,500+ people, manufacturing capacities, product ranges, certification dates and contact details. Historical partner names are labelled as company-reported relationships and should be reconfirmed before use in new marketing or logo material.

The latest Drive ZIP supplied the visual design, CSS, JavaScript and image assets. The bundled images are used locally so the site does not depend on remote image URLs.

## Run locally

```bash
python3 -m http.server 4174
```

Then open `http://127.0.0.1:4174/`.

The contact form opens a draft email to `info@bismillah.com.pk`; it does not store form data on the website.
