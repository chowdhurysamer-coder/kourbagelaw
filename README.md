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

## Live site

The site is deployed at **https://kourbage-law.higgsfield.app**

## Deploying

Any static host works (GitHub Pages, Netlify, Vercel, S3). The site is a single
HTML page with one CSS and one JS file; the only external requests are Google
Fonts and the embedded Google Map.

- `.github/workflows/deploy-pages.yml` publishes the site to the `gh-pages`
  branch on every push. To serve it at
  `https://chowdhurysamer-coder.github.io/kourbagelaw/`, enable Pages once in
  **Settings → Pages → Source: Deploy from a branch → `gh-pages` / (root)**.
- The current live deployment is hosted on Higgsfield at the URL above and can
  be redeployed after content changes.

## Contact details used

- Law Office of Allison M. Kourbage
- 1 Schwab Rd, Suite 7, Melville, NY 11747
- Phone: (631) 427-5455
