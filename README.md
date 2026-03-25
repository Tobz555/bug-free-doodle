# Sema Data — Kenyan Political Fact-Checking

> **Facts. Not Noise.**
> Data-driven political fact-checking for Kenya's next generation.

🌍 **Live site:** https://tobz555.github.io/bug-free-doodle/

---

## What Is Sema Data?

Sema Data is a Kenyan political fact-checking platform built for young people who want receipts, not spin. We verify claims made by politicians and public figures, decode budgets, and publish data-driven analysis.

---

## Features

| Feature | Description |
|---|---|
| 🔍 **Fact-Check Grid** | Filterable cards with color-coded verdict badges (False / True / Misleading / Missing Evidence) |
| 👤 **Politician Tracker** | Accuracy scorecards per public figure, updated monthly |
| 📊 **Interactive Charts** | Chart.js bar + donut charts using real KNBS/fact-check data |
| 🌙 **Dark Mode** | Full site theme toggle |
| 🗺️ **Kenya Map Hero** | SVG map silhouette in hero background |
| 📈 **Scroll Progress Bar** | Tri-color gradient (red → gold → green) progress indicator |
| 🔎 **Live Search** | Instant fact-check filtering with verdict badges in dropdown |
| 📰 **Breaking Ticker** | Auto-scrolling news ticker (pauses on hover) |
| 📬 **Newsletter Popup** | Appears after 9 seconds, dismissible |
| 🔢 **Animated Counters** | Hero stats count up on scroll into view |
| 🍔 **Mobile Menu** | Fully working hamburger with animated ✕ |
| 📚 **Gen Z Glossary** | Political terms explained in plain language |
| 🔥 **Trending Sidebar** | Most-shared articles with share counts |

---

## Project Structure

```
bug-free-doodle/
├── index.html          ← Main page (clean HTML, no inline styles)
├── css/
│   └── styles.css      ← All styles (design tokens, components, responsive)
├── js/
│   └── main.js         ← All interactivity (charts, search, counters, etc.)
└── README.md
```

---

## Tech Stack

- **HTML5** — semantic markup, ARIA labels
- **CSS3** — custom properties, grid, flexbox, animations
- **Vanilla JS** — zero framework dependencies
- **Chart.js 4.4** — bar + donut charts via CDN
- **Google Fonts** — Playfair Display · DM Sans · Fira Code

---

## Design System

### Colors
| Token | Value | Usage |
|---|---|---|
| `--red`   | `#c8102e` | False verdicts, CTAs, accents |
| `--green` | `#006b3f` | True verdicts, highlights |
| `--gold`  | `#d4a72c` | Misleading verdicts, data |
| `--black` | `#0a0a0a` | Nav, hero, dark sections |
| `--white` | `#f5f0e8` | Warm white backgrounds |

### Typography
- **Playfair Display** — headlines, section titles (serif authority)
- **DM Sans** — body copy, UI labels (clean, modern)
- **Fira Code** — numbers, data, monospace stats

---

## Deploying to GitHub Pages

1. Push all files to the `main` branch
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)`
4. Your site will be live at `https://tobz555.github.io/bug-free-doodle/`

---

## Local Development

No build step needed. Just open `index.html` in a browser or use any static server:

```bash
# Python
python3 -m http.server 8000

# Node (npx)
npx serve .

# VS Code
# Install "Live Server" extension → right-click index.html → Open with Live Server
```

---

## Content Notes

All fact-check data, politician scores, and statistics in this demo are illustrative examples. In production, connect to a CMS or API (e.g. Contentful, Strapi, or a simple JSON file) to manage real content.

---

## License

MIT — free to use, adapt, and build on.

---

*Built with 🇰🇪 for Kenya's next generation.*
