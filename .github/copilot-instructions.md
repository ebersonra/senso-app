# Senso-app AI Coding Agent Instructions

## Project Architecture
This is a **psychology clinic website** with a custom **SPA (Single Page Application)** architecture using vanilla JavaScript, built for performance and SEO optimization.

### Core Components
- **SimpleRouter** (`static/js/main.js`): Custom SPA router that intercepts internal links and removes `.html` extensions from URLs
- **SITE_CONFIG** (`static/js/config.js`): Centralized configuration for form URLs, social media links, contact info
- **WebP Detection** (`static/js/webp-detect.js`): Automatic format detection adding `.webp` or `.no-webp` classes
- **Version System** (`static/js/version.js`): Dynamic versioning updated by CI/CD (`window.SITE_VERSION = 'v1.3.9'`)

### SPA Navigation Pattern
The router handles legal pages (`politica-privacidade`, `termos-uso`, `codigo-etica`, `cookies`) by:
1. Intercepting clicks on internal links without target attribute
2. Using `fetch()` to load page content
3. Replacing `document.body.innerHTML` with new content
4. Re-initializing all scripts via `reinitializeScripts()`

**Critical**: When adding new routes, update the `routes` object in `SimpleRouter` constructor.

## Build & Deploy Workflow

### Tag-Based Deployment
- **Production deploys ONLY** on git tags starting with `v*` (e.g., `v1.3.9`)
- Manual release workflow: `.github/workflows/release.yml` (triggered manually)
- Auto-deploy workflow: `.github/workflows/build-and-deploy.yml` (triggered by tags)

### Build Process
1. **Minification**: `npm run build` creates minified CSS/JS with MD5 hash suffixes
2. **Hash Versioning**: Files become `style.min.{hash}.css` and `main.min.{hash}.js`
3. **HTML Updates**: Build process replaces references in all `*.html` files
4. **Distribution**: Creates `/dist` folder with optimized assets

### Key Commands
```bash
npm run dev           # Python server on :8081 (not Node.js!)
npm run build         # Full build with hash versioning
npm run build:css     # CSS with Brotli/Gzip compression
npm run lint          # ESLint validation
```

## Styling & Assets

### CSS Architecture
- **CSS Variables** in `:root` for theme colors (`--primary-color: #3C59A2`)
- **WebP Conditional**: Use `.webp` and `.no-webp` classes for background images
- **Responsive Design**: Mobile-first with specific breakpoints for Swiper
- **Custom Fonts**: CreatoDisplay family with `font-display: swap`

### Image Optimization
- **WebP First**: Always provide WebP with fallback using `<picture>` elements
- **Python Scripts**: `compress_images.py` (max 800KB), `resize_logo.py`, `generate_favicons.py`
- **Lazy Loading**: Use `fetchpriority="high"` for above-fold images

## External Integrations

### Google Analytics & Ads
- **GTM**: `static/js/gtm-start.js` with ID `GTM-5JBN3X75`
- **Analytics**: `static/js/gtag-init.js` with ID `AW-17413746282`
- **CSP Headers**: `_headers` file configured for Google services domains

### Third-Party Libraries
- **Swiper.js**: CDN-loaded with integrity checks, re-initialized on SPA navigation
- **DOMPurify**: Security library for content sanitization

## Development Patterns

### Event Handling
- **Form Buttons**: Use `data-form-url` attribute, handled by `initFormButtons()`
- **Social Links**: Use `data-instagram-link` attribute, handled by `initSocialLinks()`
- **Menu**: Hamburger menu with `aria-expanded` and overlay pattern

### Content Updates
- **Dynamic Content**: Footer year, version display, legal dates auto-updated
- **Configuration**: Centralize URLs and settings in `SITE_CONFIG`
- **Re-initialization**: All interactive elements must be re-bound after SPA navigation

### Code Style
- **ESLint**: ES2021 browser environment, recommended rules
- **Prettier**: Single quotes, 100 char width, semicolons
- **Naming**: Portuguese for user-facing content, English for technical code

## Key Files for Context
- `static/js/main.js` - SPA router and all interactive behaviors
- `static/js/config.js` - Site configuration constants
- `index.html` - Main template with legal page structure
- `_headers` - Security headers and CSP for Google services
- `_redirects` - Clean URL mappings for legal pages
- `.github/workflows/` - Release and deployment automation

## Common Tasks
1. **Adding new legal page**: Update `SimpleRouter.routes`, create HTML file, add redirect in `_redirects`
2. **Updating analytics**: Modify tracking IDs in `gtag-init.js` and `gtm-start.js`
3. **Asset optimization**: Run Python scripts in root directory for image processing
4. **Release**: Use GitHub Actions "Create Release" workflow, never commit version bumps manually