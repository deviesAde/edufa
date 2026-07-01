## Overview

The Edufa Web Platform uses a dual-package-manager approach typical of modern Laravel applications with React frontends:

- **PHP dependencies**: Managed by **Composer** (`composer.json` + `composer.lock`)
- **JavaScript/React dependencies**: Managed by **npm** (`package.json` + `package-lock.json`)

Both ecosystems use lockfiles for deterministic builds and pull from public registries (Packagist for PHP, npm registry for JavaScript).

---

## PHP Dependencies (Composer)

### Key Configuration (`composer.json`)

**Runtime dependencies:**
- `laravel/framework` ^13.0 — Core framework
- `inertiajs/inertia-laravel` ^2.0 — Server-side Inertia adapter
- `tightenco/ziggy` ^2.0 — Route helper for JS
- `laravel/sanctum` ^4.0 — API authentication
- `spatie/laravel-sitemap` ^8.1 — SEO sitemap generation
- `php` ^8.3 — Minimum PHP version

**Development dependencies:**
- `laravel/breeze` ^2.4 — Authentication scaffolding
- `phpunit/phpunit` ^12.5.12 — Testing framework
- `laravel/pint` ^1.27 — Code style fixer
- `fakerphp/faker` ^1.23 — Test data generation
- `mockery/mockery` ^1.6 — Mocking library
- `nunomaduro/collision` ^8.6 — Error handler for CLI

### Composer Scripts

Custom scripts automate common workflows:
- `composer run setup` — Full project initialization (install deps, create `.env`, generate key, migrate DB, install npm deps, build assets)
- `composer run dev` — Concurrently runs PHP server, queue listener, and Vite dev server via `concurrently`
- `composer run test` — Clears config and runs PHPUnit

### Autoloading

PSR-4 autoloading configured for:
- `App\` → `app/`
- `Database\Factories\` → `database/factories/`
- `Database\Seeders\` → `database/seeders/`
- `Tests\` → `tests/` (dev only)

### Composer Config

- `optimize-autoloader: true` — Optimizes classmap for production
- `preferred-install: dist` — Prefers zip archives over source clones
- `sort-packages: true` — Keeps dependency list sorted
- `allow-plugins` — Explicitly allows `pestphp/pest-plugin` and `php-http/discovery`
- `minimum-stability: stable` — Only stable releases
- `prefer-stable: true` — Prefers stable versions when possible

### Lockfile Strategy

`composer.lock` pins all transitive dependencies to exact versions (8,638 lines). The `content-hash` field ensures integrity. This file **must be committed** to version control for reproducible builds.

---

## JavaScript Dependencies (npm)

### Key Configuration (`package.json`)

**Production dependencies (frontend runtime):**
- `@inertiajs/react` ^2.0.0 — Client-side Inertia adapter
- `react` ^18.2.0 / `react-dom` ^18.2.0 — React core
- `@radix-ui/*` — Accessible UI primitives (avatar, dialog, label, separator, slot, tooltip)
- `@tiptap/*` ^3.22.5 — Rich text editor (pm, react, starter-kit)
- `framer-motion` ^12.38.0 — Animation library
- `gsap` ^3.15.0 / `@gsap/react` ^2.1.2 — GreenSock animations
- `leaflet` ^1.9.4 / `react-leaflet` ^4.2.1 — Interactive maps
- `lucide-react` ^1.8.0 — Icon library
- `tailwind-merge` ^3.5.0 / `clsx` ^2.1.1 / `class-variance-authority` ^0.7.1 — Tailwind utility composition
- `next-themes` ^0.4.6 — Theme switching
- `usehooks-ts` ^3.1.1 — React hooks collection
- `@tailwindcss/typography` ^0.5.19 — Typography plugin

**Development dependencies:**
- `vite` ^7.0.0 — Build tool and dev server
- `laravel-vite-plugin` ^2.0.0 — Laravel integration for Vite
- `@vitejs/plugin-react` ^4.2.0 — React support for Vite
- `tailwindcss` ^3.2.1 — CSS framework
- `@tailwindcss/forms` ^0.5.3 / `@tailwindcss/vite` ^4.0.0 — Tailwind plugins
- `autoprefixer` ^10.4.12 — CSS vendor prefixing
- `postcss` ^8.4.31 — CSS processing
- `@headlessui/react` ^2.0.0 — Headless UI components
- `concurrently` ^9.0.1 — Run multiple commands in parallel

### npm Configuration (`.npmrc`)

```
ignore-scripts=true
```

This disables post-install scripts for security and performance. No custom registries or private packages are configured — all dependencies resolve from the public npm registry.

### Lockfile Strategy

`package-lock.json` (lockfileVersion 3) pins the entire dependency tree with integrity hashes. This file **must be committed** for reproducible builds across environments.

---

## Build Tooling Integration

### Vite Configuration (`vite.config.js`)

Vite serves as the frontend build tool, configured with:
- `laravel-vite-plugin` — Handles asset compilation and hot module replacement for Laravel
- `@vitejs/plugin-react` — Enables React JSX transformation
- Input: `resources/js/app.jsx`
- Hot refresh enabled

### Development Workflow

The `composer run dev` script orchestrates three concurrent processes:
1. `php artisan serve` — Laravel development server
2. `php artisan queue:listen` — Queue worker for background jobs
3. `npm run dev` — Vite dev server with HMR

---

## Additional Tooling

### `skills-lock.json`

A non-standard lockfile tracking AI agent skill references from GitHub repositories (e.g., `anthropics/skills`, `vercel-labs/agent-skills`). This is used by AI coding assistants, not by the application runtime.

---

## Rules for Developers

1. **Always commit lockfiles** — Both `composer.lock` and `package-lock.json` must be committed to ensure reproducible builds across team members and CI/CD pipelines.

2. **Use Composer scripts for workflow** — Run `composer run setup` for fresh installs and `composer run dev` for local development rather than invoking individual tools manually.

3. **No private registries** — All dependencies come from public sources (Packagist, npm registry). Do not add private package sources without team consensus.

4. **Post-install scripts disabled** — The `.npmrc` setting `ignore-scripts=true` prevents arbitrary code execution during `npm install`. If a package requires post-install scripts, evaluate security implications before enabling.

5. **Version constraints follow caret notation** — Both `composer.json` and `package.json` use `^` (caret) versioning, allowing minor/patch updates while preventing breaking major version changes.

6. **Stable-only policy** — Composer is configured with `minimum-stability: stable` and `prefer-stable: true`. Avoid adding alpha/beta/rc packages unless explicitly approved.

7. **Plugin allowlist** — Composer's `allow-plugins` configuration restricts which Composer plugins can execute. Any new plugin must be added to this allowlist.