# Yogeshwaran K — Minimal High-Contrast Portfolio

A minimal, ultra-high-contrast personal developer & researcher portfolio website engineered with **Vite**, **React**, and **Tailwind CSS**. Configured for zero-friction automated deployment to **GitHub Pages** via **GitHub Actions**.

---

## ✦ Design System & Palette

- **Base Colors:** Pure White (`#FFFFFF`) and Deep Obsidian Black (`#0A0A0A`).
- **Accent Highlight ("Violent Red"):** Neon Crimson (`#FF0033` / hover `#E60026`).
- **Typography:** [Open Sans](https://fonts.google.com/specimen/Open+Sans) (weights 300 through 800) for punchy headlines and readable body copy.
- **Routing:** `HashRouter` ensuring sub-route refreshes never produce 404 errors on GitHub Pages.
- **Assets Base:** Configured with relative base path (`./`) in `vite.config.js` to ensure compatibility with any GitHub repository name.

---

## ✦ Architecture & Page Routes

| Route | Page | Description |
|---|---|---|
| `#/` | **Home** | High-impact hero introducing Yogeshwaran K, positioning statement, focus pillars, featured project highlights, and CTA banner. |
| `#/about` | **About** | Expanded biographical narrative, research themes, stark-bordered skills matrix, and career milestones timeline. |
| `#/projects` | **Projects** | Category-filtered catalog of technical projects using reusable `ProjectCard` components with code and demo links. |

---

## ✦ Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions CI/CD to GitHub Pages
├── public/                   # Static assets
├── src/
│   ├── components/
│   │   ├── Footer.jsx        # Persistent minimal footer with social links
│   │   ├── Layout.jsx        # App layout wrapper
│   │   ├── Navbar.jsx        # Responsive navigation with violent red active indicators
│   │   └── ProjectCard.jsx   # High-contrast project card component
│   ├── pages/
│   │   ├── About.jsx         # Expanded bio & skills breakdown
│   │   ├── Home.jsx          # Hero, focus pillars, and featured highlights
│   │   └── Projects.jsx      # Filterable project catalog
│   ├── App.jsx               # HashRouter setup & route definitions
│   ├── index.css             # Tailwind directives & high-contrast styling
│   └── main.jsx              # React entry point
├── index.html                # HTML entry with Open Sans font preconnect
├── package.json              # Project scripts and dependencies
├── postcss.config.js         # PostCSS pipeline
├── tailwind.config.js        # Custom colors & font configuration
└── vite.config.js            # Vite configuration with relative base
```

---

## ✦ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser.

### 3. Production Build & Local Preview
```bash
npm run build
npm run preview
```

---

## ✦ Customizing Your Information

All content uses structured, professional placeholders designed to be easily swapped with your actual data:

1. **Name & Social Links**:
   - Update branding in `src/components/Navbar.jsx` and `src/components/Footer.jsx`.
   - Update social links (`github.com/...`, `linkedin.com/...`, email) in `src/components/Footer.jsx`.
2. **Hero Statement & Positioning**:
   - Edit headlines, summary, and focus pillars in `src/pages/Home.jsx`.
3. **Biography, Skills & Milestones**:
   - Update narrative text, research interests, skill arrays, and milestone list in `src/pages/About.jsx`.
4. **Projects & Publications**:
   - Add, edit, or remove project objects in `src/pages/Projects.jsx` and the featured subset in `src/pages/Home.jsx`.

---

## ✦ Deploying to GitHub Pages

This repository includes a ready-to-use GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### Enabling Automated Deployments:
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Yogeshwaran K portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. In your GitHub repository, navigate to **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. Every push to the `main` branch will automatically trigger the workflow, build the site, and publish it to GitHub Pages.
