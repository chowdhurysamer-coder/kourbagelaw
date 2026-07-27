# Law Office of Allison M. Kourbage — Website

A fast, dependency-free static website for the Law Office of Allison M. Kourbage,
a real estate law practice in Melville, NY.

## Structure

```
index.html      # Single-page site (hero, welcome, practice areas, reviews, contact)
css/styles.css  # All styling (responsive)
js/main.js      # Mobile menu and footer year
img/            # Site photography (hero, closing, harbor, office)
```

## Running locally

No build step — open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

then visit http://localhost:8000.

## Deploying

Any static host works (GitHub Pages, Netlify, Vercel, S3). The site is a single
HTML page with one CSS and one JS file; the only external requests are Google
Fonts and the embedded Google Map.

## Contact details used

- Law Office of Allison M. Kourbage
- 1 Schwab Rd, Suite 7, Melville, NY 11747
- Phone: (631) 427-5455
