# Getting Started

<cite>
**Referenced Files in This Document**
- [composer.json](file://composer.json)
- [package.json](file://package.json)
- [vite.config.js](file://vite.config.js)
- [tailwind.config.js](file://tailwind.config.js)
- [jsconfig.json](file://jsconfig.json)
- [config/app.php](file://config/app.php)
- [config/database.php](file://config/database.php)
- [config/mail.php](file://config/mail.php)
- [database/migrations/0001_01_01_000000_create_users_table.php](file://database/migrations/0001_01_01_000000_create_users_table.php)
- [database/seeders/DatabaseSeeder.php](file://database/seeders/DatabaseSeeder.php)
- [routes/web.php](file://routes/web.php)
- [.editorconfig](file://.editorconfig)
- [.gitignore](file://.gitignore)
- [.npmrc](file://.npmrc)
- [phpunit.xml](file://phpunit.xml)
- [postcss.config.js](file://postcss.config.js)
</cite>

## Table of Contents
1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Local Development Setup](#local-development-setup)
4. [Environment Configuration](#environment-configuration)
5. [Database Setup and Seeding](#database-setup-and-seeding)
6. [Development Server Startup](#development-server-startup)
7. [Project Exploration](#project-exploration)
8. [Production Deployment Preparation](#production-deployment-preparation)
9. [Troubleshooting Guide](#troubleshooting-guide)
10. [Verification Checklist](#verification-checklist)
11. [Conclusion](#conclusion)

## Introduction
This guide walks you through setting up the EDUfa development environment from scratch. It covers prerequisites, repository setup, dependency installation, environment configuration, database migration and seeding, development server startup, and initial project exploration. It also includes troubleshooting tips and verification steps to ensure everything is working correctly. Whether you're new to Laravel and React or an experienced developer, this guide provides both beginner-friendly explanations and technical depth.

## Prerequisites
Before installing EDUfa, ensure your machine meets the following requirements:

- PHP: Version 8.3 or higher (required by the project)
- Node.js: Latest LTS recommended (used for Vite asset compilation)
- Composer: Latest stable version (PHP dependency manager)
- Database: SQLite (default), or MySQL/MariaDB/PostgreSQL/SQL Server (optional but recommended for production)
- Git: To clone the repository

Notes:
- The project requires PHP 8.3+ as defined in the PHP requirement.
- Node.js and npm are used for frontend asset compilation and development server.
- Composer handles PHP dependencies and provides convenient scripts for setup and development.

**Section sources**
- [composer.json:8-16](file://composer.json#L8-L16)

## Local Development Setup
Follow these steps to prepare your local environment:

1. **Clone the repository**
   - Use Git to clone the repository to your local machine.

2. **Install PHP dependencies**
   - Navigate to the project root and run the Composer install script to install PHP packages.
   - The Composer setup script automates environment initialization, key generation, database migration, and frontend asset installation/build.

3. **Install JavaScript dependencies**
   - Install Node.js packages using npm.
   - Build assets for development or production using the provided npm scripts.

4. **Run the setup script**
   - The Composer setup script performs the following actions automatically:
     - Installs PHP dependencies
     - Copies `.env.example` to `.env` if it does not exist
     - Generates the application key
     - Runs database migrations
     - Installs npm dependencies
     - Builds frontend assets

Key commands:
- Composer setup script: composer run setup
- Development server: composer run dev
- Frontend build: npm run build
- Development assets: npm run dev

**Section sources**
- [composer.json:38-50](file://composer.json#L38-L50)
- [composer.json:51-54](file://composer.json#L51-L54)
- [package.json:5-8](file://package.json#L5-L8)

## Environment Configuration
Configure your environment variables to match your local setup. The application reads configuration from environment files and config files.

Important configuration areas:

- Application settings
  - APP_NAME, APP_ENV, APP_DEBUG, APP_URL, timezone, locale, encryption key, maintenance mode driver/store
- Database connections
  - Default connection (SQLite by default), and optional MySQL/MariaDB/PostgreSQL/SQL Server configurations
- Mail configuration
  - Default mailer, SMTP settings, and other mailer options
- Redis configuration
  - Client, cluster, prefix, persistence, and connection details

Recommended steps:
- Copy `.env.example` to `.env` if it does not exist (automatically handled by the setup script)
- Set APP_ENV to development for local work
- Enable APP_DEBUG during development
- Configure APP_URL to match your local domain or localhost
- Choose a database connection (SQLite default, or configure MySQL/MariaDB/PostgreSQL/SQL Server)
- Configure MAIL_MAILER and related settings for email delivery

Verification:
- Confirm APP_KEY exists after key generation
- Verify database connection settings match your local database credentials
- Test mail configuration if you plan to use email features

**Section sources**
- [config/app.php:16-126](file://config/app.php#L16-L126)
- [config/database.php:20-184](file://config/database.php#L20-L184)
- [config/mail.php:17-89](file://config/mail.php#L17-L89)

## Database Setup and Seeding
The project includes database migrations and seeders to initialize the database with essential data.

Migrations:
- Users table with admin role, password reset tokens, and sessions
- Additional tables for branches, team members, activities, articles, and services

Seeding:
- Creates an admin user with configurable email, name, and password
- Seeds branch and service data

Steps:
1. Run database migrations to create tables
2. Seed the database to create the admin user and initial data
3. Optionally, use the seeder to create additional test data

Verification:
- Confirm the users table has an admin user with verified email
- Verify that branch and service records were created

**Section sources**
- [database/migrations/0001_01_01_000000_create_users_table.php:12-51](file://database/migrations/0001_01_01_000000_create_users_table.php#L12-L51)
- [database/seeders/DatabaseSeeder.php:14-31](file://database/seeders/DatabaseSeeder.php#L14-L31)

## Development Server Startup
EDUfa provides a development script that runs multiple processes concurrently:

- Laravel development server (artisan serve)
- Queue listener for background jobs
- Vite development server for hot-reloadable frontend assets

To start the development environment:
- Run the Composer dev script to launch all services together
- Access the application at the configured APP_URL (default is http://localhost)

Optional:
- Stop the development server cleanly when finished
- Use separate terminals for individual processes if preferred

**Section sources**
- [composer.json:47-50](file://composer.json#L47-L50)

## Project Exploration
Once the environment is running, explore the application structure and key features:

- Routes overview
  - Public pages: home, therapists, branches, activities, articles, and service pages
  - Admin dashboard with statistics and resource management
  - Authentication routes and protected admin routes
- Admin resources
  - Manage branches, team members, activities, and articles
- Frontend architecture
  - React components with Inertia for SPA-like navigation
  - Tailwind CSS for styling with custom color palette
  - Vite for asset bundling and development

Navigation tips:
- Visit the homepage and explore public pages
- Log in as admin using the seeded credentials
- Navigate to the admin dashboard and manage content

**Section sources**
- [routes/web.php:13-137](file://routes/web.php#L13-L137)

## Production Deployment Preparation
Prepare your application for production deployment by focusing on these areas:

- Environment configuration
  - Set APP_ENV to production
  - Disable APP_DEBUG
  - Configure APP_URL appropriately
  - Secure APP_KEY
- Database
  - Choose a production-ready database (MySQL/MariaDB/PostgreSQL/SQL Server)
  - Ensure proper connection settings and SSL/TLS configuration if required
- Asset compilation
  - Build assets for production using the build script
  - Serve compiled assets via your web server
- Queue and background jobs
  - Configure a queue worker for production environments
- Logging and monitoring
  - Set appropriate log levels and channels
  - Configure external logging if needed

Security considerations:
- Keep dependencies updated
- Review and harden configuration files
- Use HTTPS and secure cookies in production

**Section sources**
- [config/app.php:29-126](file://config/app.php#L29-L126)
- [config/database.php:20-184](file://config/database.php#L20-L184)
- [config/mail.php:17-89](file://config/mail.php#L17-L89)

## Troubleshooting Guide
Common setup issues and solutions:

- PHP version mismatch
  - Ensure PHP 8.3+ is installed; lower versions will fail dependency resolution or runtime checks
- Composer errors
  - Clear Composer cache and reinstall dependencies if needed
  - Ensure the setup script completes successfully
- Node/npm issues
  - Use a stable Node.js LTS version
  - Reinstall npm dependencies if builds fail
- Database connection problems
  - Verify database credentials and connection settings
  - For SQLite, ensure the database file path is writable
- Port conflicts
  - Change ports for Laravel, queue, and Vite if they conflict with existing services
- Permission issues
  - Ensure write permissions for storage and bootstrap/cache directories
- Queue worker not processing jobs
  - Start a queue worker process in production
- Vite hot reload not working
  - Check browser console for Vite client errors
  - Verify Vite configuration and network connectivity

**Section sources**
- [composer.json:38-50](file://composer.json#L38-L50)
- [package.json:5-8](file://package.json#L5-L8)
- [vite.config.js:1-14](file://vite.config.js#L1-L14)

## Verification Checklist
After completing setup, verify your installation:

- Application loads in the browser at APP_URL
- Admin login works with the seeded credentials
- Admin dashboard displays correctly
- Database tables are created and seeded
- Frontend assets compile without errors
- Development server hot reloads changes
- Queue worker processes jobs (if applicable)
- Tests pass locally

**Section sources**
- [routes/web.php:68-80](file://routes/web.php#L68-L80)
- [database/seeders/DatabaseSeeder.php:16-24](file://database/seeders/DatabaseSeeder.php#L16-L24)
- [composer.json:51-54](file://composer.json#L51-L54)

## Conclusion
You now have a fully configured EDUfa development environment ready for building and exploring the application. Use the development server for rapid iteration, leverage the admin dashboard for content management, and follow production preparation steps to deploy confidently. Refer back to this guide when encountering setup issues or when expanding the application’s capabilities.