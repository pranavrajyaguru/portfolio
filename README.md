# Pranav Rajyaguru Portfolio

Static personal portfolio website built with HTML5, Tailwind CSS CDN, and JavaScript.

This version is ready for free hosting on GitHub Pages.

## Folder Structure

```text
pranav-portfolio-github-pages/
  index.html
  style.css
  script.js
  .nojekyll
  README.md
  assets/
    profile-round.jpg
    profile.jpeg
```

## Run Locally

Open a terminal in this folder and run:

```bash
python -m http.server 4173
```

If `python` does not work on Windows, try:

```bash
py -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173/
```

You can also open `index.html` directly in a browser, but localhost is better for testing.

## Host Free On GitHub Pages

1. Go to [GitHub](https://github.com/) and create a new public repository.
2. Upload all files from this folder into the repository root:

```text
index.html
style.css
script.js
.nojekyll
README.md
assets/
```

3. Open the repository on GitHub.
4. Go to `Settings`.
5. Go to `Pages`.
6. Under `Build and deployment`, choose:

```text
Source: Deploy from a branch
Branch: main
Folder: /root
```

7. Click `Save`.
8. Wait a minute, then GitHub will show your live website link.

The link usually looks like:

```text
https://your-github-username.github.io/repository-name/
```

## Files To Edit

- `index.html` - edit text, links, project cards, logos, and page content.
- `style.css` - edit colors, layout, spacing, and photo styling.
- `script.js` - edit dark mode and project filtering.
- `assets/` - store profile photos and other images.

## Important Notes

- Keep `index.html` in the root folder for GitHub Pages.
- Do not rename `assets` unless you also update image paths in `index.html`.
- Tailwind CSS and icons load from online CDNs, so the hosted site needs internet access.
- Last updated June 2026.
