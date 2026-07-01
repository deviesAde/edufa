## Overview

The Edufa Web Platform uses **Laravel's built-in logging system** powered by the **Monolog** PHP library. The logging configuration follows Laravel conventions with no custom logging implementations, middleware, or structured logging extensions.

## System Architecture

### Framework & Library
- **Framework**: Laravel (via `Illuminate\Support\Facades\Log`)
- **Underlying Library**: Monolog (`Monolog\Handler\*`, `Monolog\Processor\PsrLogMessageProcessor`)
- **Configuration File**: `config/logging.php`

### Default Channel Strategy
- **Default channel**: `stack` (controlled by `LOG_CHANNEL` environment variable)
- The `stack` driver aggregates multiple channels defined via `LOG_STACK` env var (defaults to `single`)
- **Log level**: Controlled by `LOG_LEVEL` environment variable, defaults to `debug`

### Available Channels

| Channel | Driver | Description |
|---------|--------|-------------|
| `stack` | stack | Aggregates other channels |
| `single` | single | Single file at `storage/logs/laravel.log` |
| `daily` | daily | Rotating daily logs, retained for 14 days (configurable via `LOG_DAILY_DAYS`) |
| `slack` | slack | Sends critical+ messages to Slack webhook |
| `papertrail` | monolog | Remote syslog via Papertrail service |
| `stderr` | monolog | Outputs to PHP stderr stream |
| `syslog` | syslog | System syslog facility |
| `errorlog` | errorlog | PHP error_log function |
| `null` | monolog | Discards all log messages (NullHandler) |
| `emergency` | - | Fallback emergency log path |

### Deprecation Logging
- Separate channel for PHP/library deprecation warnings
- Controlled by `LOG_DEPRECATIONS_CHANNEL` (defaults to `null` — disabled)
- Stack trace capture controlled by `LOG_DEPRECATIONS_TRACE` (defaults to `false`)

## Key Files

- **`config/logging.php`** — Central logging configuration defining all channels, handlers, and processors
- **`storage/logs/.gitignore`** — Excludes all log files from version control (pattern: `*` except `.gitignore` itself)
- **`bootstrap/app.php`** — Application bootstrap with empty exception handler configuration (no custom `reportable` or `renderable` callbacks)

## Current Usage Patterns

**No explicit logging calls were found** in the application codebase. The grep search across all PHP files for:
- `Log::debug/info/warning/error/critical/alert/emergency/notice`
- `logger()` helper function
- `use Illuminate\Support\Facades\Log`

...returned zero matches. This indicates:
1. The application relies on Laravel's automatic error/exception logging
2. No business-logic-level logging has been implemented yet
3. All observable log output would come from framework internals (exceptions, deprecations, queue failures, etc.)

## Conventions & Developer Guidance

### Log Level Strategy
- Default level is `debug` — captures all severity levels in development
- Production should set `LOG_LEVEL=warning` or higher via `.env`
- Slack integration triggers only at `critical` level and above

### Structured Logging
- `replace_placeholders => true` is enabled on most channels, allowing context placeholder substitution in log messages
- `PsrLogMessageProcessor` is applied to `papertrail` and `stderr` channels for PSR-3 compatibility
- No custom structured fields or JSON formatting is configured

### Rules for Developers
1. **Use the `Log` facade** for any future logging needs: `use Illuminate\Support\Facades\Log;`
2. **Prefer contextual logging**: `Log::info('message', ['key' => 'value'])` rather than string concatenation
3. **Do not commit log files** — `storage/logs/*` is gitignored
4. **For production**, consider switching `LOG_CHANNEL` to `daily` for log rotation, or configure external sinks like `papertrail` or `slack`
5. **Exception handling** in `bootstrap/app.php` has an empty `withExceptions` callback — custom `reportable()` closures can be added here for selective exception logging suppression or enhancement
6. **No custom logger classes exist** — extend via Monolog handlers in `config/logging.php` if needed

## Gaps & Recommendations

- No application-level logging is currently implemented
- No request/response logging middleware exists
- No structured JSON logging for log aggregation systems (e.g., ELK, Datadog)
- Exception handler customization is absent — consider adding `reportable()` callbacks for filtering noisy exceptions