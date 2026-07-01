The Edufa Web Platform utilizes the standard Laravel configuration system, which relies on a centralized `config/` directory and environment variable injection via `.env` files.

### Core Approach
- **Environment Variables**: Runtime configuration is primarily managed through a `.env` file at the project root. This file contains sensitive credentials (database passwords, API keys) and environment-specific settings (debug mode, app URL).
- **Config Files**: PHP return arrays in the `config/` directory define the structure and defaults for various subsystems (database, mail, cache, etc.). These files use the `env()` helper to pull values from the environment, providing fallback defaults for safety.
- **Bootstrap**: The application entry point `bootstrap/app.php` uses the `Application::configure()` method to set up routing, middleware, and exception handling, relying on the loaded configuration.

### Key Configuration Areas
1. **Database**: Configured in `config/database.php`. The `.env` file specifies `DB_CONNECTION=mysql` with local host credentials. SQLite is also configured as an alternative default.
2. **Cache & Session**: Both are configured to use the `database` driver by default in `.env`, ensuring persistence across requests without requiring external services like Redis in the local environment.
3. **Mail**: Set to `log` driver in `.env` for local development, preventing accidental email sends. Credentials for SMTP, SES, and Postmark are pre-configured in `config/mail.php` and `config/services.php`.
4. **Filesystem**: Uses `local` disk by default, storing files in `storage/app/private`. A `public` disk is configured for web-accessible assets via symbolic links.
5. **Logging**: Configured to use a `stack` channel that defaults to a `single` log file (`storage/logs/laravel.log`) with `debug` level verbosity in local environments.

### Conventions & Rules
- **Never commit `.env`**: Sensitive data is kept out of version control. A `.env.example` is typically used for sharing structure.
- **Use `config()` helper**: Access configuration values in code using `config('key.path')` rather than calling `env()` directly outside of config files. This ensures proper caching behavior in production.
- **Fallback Defaults**: All `env()` calls in config files should include sensible defaults to prevent errors if an environment variable is missing.