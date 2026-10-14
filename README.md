# Syed Walid Taher — Portfolio

Static portfolio site. Plain HTML, CSS and a few lines of JavaScript. No build step.

## Structure

```
index.html            the page
404.html              shown for unknown URLs
assets/css/style.css  all styles (light and dark themes)
assets/js/main.js     copy-email button
assets/favicon.svg    site icon
.nojekyll             tells GitHub Pages to serve files as-is
robots.txt
```

## Publish on GitHub Pages

1. Create a new repository on GitHub.
   - For a root address of `https://<username>.github.io/`, name it exactly `<username>.github.io`.
   - Any other name works too; the site then lives at `https://<username>.github.io/<repo-name>/`.
2. Upload everything in this folder to the repository root (drag and drop in the web UI works, or use git).
3. Open **Settings → Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose **main** and **/ (root)**, then Save.
4. After a minute or two the site is live at the address shown on that page.

### With git

```bash
git init
git add .
git commit -m "Add portfolio"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

## Edit

Open `index.html` to change text and links. Colors and fonts are CSS variables at the top of `assets/css/style.css`.
