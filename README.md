# ORIPHIM - Research-Indicator Delivery & Strategy IP Licensing

Professional landing page for Oriphim Labs LLC, providing proprietary signal engines and market indicators to institutional clients.

## 🚀 Deployment

This site is designed for deployment on **Cloudflare Pages**.

### Cloudflare Pages Setup

1. **Connect Repository**
   - Go to [Cloudflare Pages](https://pages.cloudflare.com)
   - Click "Create a project"
   - Connect your GitHub account and select this repository

2. **Build Configuration**
   - **Framework preset**: None (Static HTML)
   - **Build command**: (leave empty)
   - **Build output directory**: `/`
   - **Root directory**: `/`

3. **Deploy**
   - Click "Save and Deploy"
   - Your site will be live at `https://your-project.pages.dev`

### Custom Domain

To add a custom domain (e.g., `oriphim.com`):

1. Go to your Cloudflare Pages project
2. Navigate to "Custom domains"
3. Click "Set up a custom domain"
4. Follow the DNS configuration instructions

## 📁 Project Structure

```
/
├── index.html              # Main landing page
├── favicon.ico             # Root favicon
├── assets/
│   ├── icons/             # Favicon files (multiple sizes)
│   └── images/            # Site images
├── pages/                 # Static pages
│   ├── legal.html         # Legal & Terms
│   ├── privacy.html       # Privacy Policy
│   └── sla.html           # Service Level Agreement
├── docs/                  # Source markdown files
├── _redirects             # Cloudflare Pages routing
└── _headers               # Security headers
```

## 🔧 Local Development

Simply open `index.html` in a browser, or use a local server:

```bash
# Python 3
python -m http.server 8000

# Node.js (with http-server)
npx http-server -p 8000

# PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000`

## 🔒 Security Features

- Security headers configured via `_headers`
- Content Security Policy (CSP)
- XSS Protection
- Frame Options
- HTTPS enforced by Cloudflare

## 📄 Pages

- **Home** (`/`) - Main landing page
- **Legal** (`/legal`) - Terms of Use & Licensing
- **Privacy** (`/privacy`) - Privacy Policy
- **SLA** (`/sla`) - Service Level Agreement

## 🎨 Tech Stack

- Pure HTML/CSS with React (via CDN)
- Tailwind CSS for styling
- No build process required
- Static file hosting

## 📞 Contact

For inquiries: support@oriphim.com

---

© 2026 Oriphim Labs LLC. All rights reserved.
