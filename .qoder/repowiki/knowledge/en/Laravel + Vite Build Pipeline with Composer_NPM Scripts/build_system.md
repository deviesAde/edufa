## Build System Overview

The Edufa Web Platform uses a **dual-package-manager build system** combining Composer (PHP) and NPM (JavaScript), orchestrated through Laravel's conventional tooling. There is no Docker, CI/CD pipeline, or Makefile — the project relies entirely on framework-standard scripts.

## Core Build Tools

### Backend (PHP/Laravel)
- **Dependency Manager**: Composer (`composer.json`)
- **PHP Version**: ^8.3
- **Framework**: Laravel ^13.0 with Inertia.js ^2.0 for SSR/SPA hybrid rendering
- **Key Packages**: `laravel/sanctum` (API auth), `spatie/laravel-sitemap` (SEO), `tightenco/ziggy` (route helpers)
- **CLI Entry Point**: `artisan` executable bootstraps the Laravel application via `bootstrap/app.php`

### Frontend (React/Vite)
- **Build Tool**: Vite ^7.0 with `laravel-vite-plugin` and `@vitejs/plugin-react`
- **Entry Point**: `resources/js/app.jsx`
- **Styling**: Tailwind CSS ^3.2.1 with PostCSS and Autoprefixer
- **UI Libraries**: Radix UI primitives, Framer Motion, GSAP animations, Tiptap rich-text editor, Leaflet maps
- **Development Server**: Concurrently runs PHP server, queue listener, and Vite dev server

## Key Build Scripts

### Composer Scripts (`composer.json`)
```json
"setup": [
  "composer install",
  "php artisan key:generate",
  "php artisan migrate --force",
  "npm install --ignore-scripts",
  "npm run build"
],
"dev": [
  "php artisan serve",
  "php artisan queue:listen --tries=1 --timeout=0",
  "npm run dev"
],
"test": [
  "php artisan config:clear",
  "php artisan test"
]
```

### NPM Scripts (`package.json`)
```json
"build": "vite build",    // Production bundle to public/build/
"dev": "vite"              // HMR-enabled dev server
```

## Testing Configuration

- **Test Framework**: PHPUnit ^12.5.12
- **Config**: `phpunit.xml` with separate Unit/Feature test suites
- **Test Database**: SQLite in-memory (`:memory:`) for isolation
- **Test Environment**: Minimal services (array cache, sync queue, null broadcast)
- **Coverage Source**: `app/` directory only

## Asset Compilation Flow

1. **Vite Plugin** (`vite.config.js`) processes `resources/js/app.jsx` as the single entry point
2. **Tailwind CSS** scans Blade templates (`storage/framework/views/*.php`, `resources/views/**/*.blade.php`) and React components (`resources/js/**/*.jsx`) for class usage
3. **Production builds** output to `public/build/` with hashed filenames for cache-busting
4. **Blade template** (`resources/views/app.blade.php`) includes Vite-generated asset tags via `@vite` directive

## Development Workflow

The `composer dev` script uses `concurrently` to run three processes:
1. **PHP development server** (`php artisan serve`) on default port 8000
2. **Queue worker** (`php artisan queue:listen`) for background jobs
3. **Vite dev server** (`npm run dev`) with HMR on port 5173

This enables full-stack hot-reload during development without manual restarts.

## Deployment Considerations

No containerization or CI/CD configuration exists. Deployment would require:
1. Running `composer setup` (installs deps, generates app key, runs migrations, builds assets)
2. Ensuring `public/` is the web root
3. Configuring `.env` for production database, mail, and session settings
4. Running `php artisan config:cache` and `php artisan route:cache` for performance

## Missing Infrastructure

- No `Dockerfile` or `docker-compose.yml`
- No `.github/workflows/` or other CI configuration
- No `Makefile` for task automation beyond Composer scripts
- No version tagging or release automation
- The `app.zip` file at root suggests manual archive-based deployment may be in use