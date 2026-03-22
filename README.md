# Wikholm Ortodonti

Professional static website for **Wikholm Ortodonti** — Dr. André Wikholm's orthodontic practice specializing in Invisalign and ClearCorrect treatments.

## Overview

A single-page, fully responsive website built with vanilla HTML, CSS, and JavaScript. Designed for hosting on GitHub Pages with a custom domain.

## Features

- **Bilingual** — Full Swedish and English translations with a language switcher (SV/EN)
- **Dark / Light theme** — Toggle between themes; respects system preference by default
- **Responsive design** — Mobile-first, works across all screen sizes
- **Scroll animations** — Subtle reveal animations using Intersection Observer (respects `prefers-reduced-motion`)
- **FAQ accordion** — Expandable questions and answers section
- **Blog / News section** — Article cards with categories, dates, and excerpts
- **No dependencies** — Zero frameworks, no build step, just static files

## Sections

| Section | Description |
|---|---|
| Hero | Introduction with portrait and call-to-action |
| About Invisalign | Overview of Invisalign technology |
| ClearCorrect | Alternative treatment option |
| Process | 4-step treatment walkthrough |
| Benefits | Advantages of clear aligner treatment |
| Dr. Wikholm | Bio, credentials, and LinkedIn links |
| Clinics | Placeholder cards for clinic locations |
| News & Tips | Blog-style article cards |
| FAQ | Common questions with expandable answers |
| Contact CTA | Call-to-action with LinkedIn link |

## File Structure

```
├── index.html          # Main page
├── styles.css          # All styles (light + dark theme)
├── script.js           # Language switcher, theme toggle, animations, FAQ accordion
├── images/
│   ├── andre.jpg                       # Dr. Wikholm portrait
│   └── wikholm_ortodonti_ab_logo.jpg   # Company logo (also used as favicon)
├── .gitignore
└── README.md
```

## Setup

1. Clone the repository
2. Open `index.html` in a browser — no build step required
3. To deploy: enable GitHub Pages in repository settings (source: `main` branch, root `/`)

## Customization

### Clinics
Update the three clinic placeholder cards in `index.html` (search for `clinic1Name`, `clinic2Name`, `clinic3Name`). Update the `href` attributes on the `<a class="clinic-card">` elements with real URLs.

Also update the corresponding translation keys in `script.js` for both `sv` and `en` blocks.

### Blog articles
The blog section currently contains placeholder articles. Replace the content in `index.html` and update matching translation keys in `script.js`.

### Custom domain
1. Purchase a domain
2. Add a `CNAME` file to the repository root with the domain name
3. Configure DNS records as per [GitHub Pages documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## Links

- [Dr. André Wikholm — LinkedIn](https://www.linkedin.com/in/andr%C3%A9-w-879b9b80/)
- [Wikholm Ortodonti AB — LinkedIn](https://www.linkedin.com/company/wikholm-ortodonti-ab/)
- [Invisalign Sweden](https://www.invisalign.se/)
