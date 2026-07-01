## Overview

This Laravel monolith with Inertia.js/React frontend uses **standard Laravel validation exceptions** and **HTTP abort helpers** for error handling. There is no custom exception hierarchy, dedicated error handling middleware, or centralized error boundary system.

## System Approach

### Backend (Laravel)

The application relies on Laravel's built-in error mechanisms:

1. **ValidationException** — Used extensively for form validation failures. Controllers throw `Illuminate\Validation\ValidationException::withMessages()` when authentication fails, rate limits are exceeded, or password confirmation is invalid.

2. **abort() helper** — Used for HTTP-level errors:
   - `abort(403)` in `AdminOnly` middleware for unauthorized access
   - `abort(404)` in `GuestController::pelayanan()` for unknown service types

3. **firstOrFail()** — Eloquent method used in `GuestController::showArtikel()` which throws `ModelNotFoundException` if an article slug is not found (handled by Laravel's default exception handler).

4. **Form Request Validation** — The `LoginRequest` class extends `FormRequest` and uses Laravel's automatic validation pipeline. Validation rules are defined in the `rules()` method, and failures automatically produce `ValidationException` responses.

### Frontend (Inertia.js + React)

Error display follows a consistent pattern across all pages:

1. **useForm hook errors object** — All admin forms use Inertia's `useForm()` hook which provides an `errors` object containing field-specific validation messages returned from the backend.

2. **Inline error rendering** — Errors are displayed directly below input fields using conditional rendering:
   ```jsx
   {errors.email && <p className="text-xs font-bold text-rose-500">{errors.email}</p>}
   ```

3. **InputError component** — A reusable component (`resources/js/Components/InputError.jsx`) that renders error messages with red styling when a message prop is provided.

4. **Status messages** — Success/info flash messages are passed as props (e.g., `{status}` in Login page) and rendered conditionally.

## Key Files

| File | Role |
|------|------|
| `app/Http/Requests/Auth/LoginRequest.php` | Demonstrates ValidationException throwing for auth failures and rate limiting |
| `app/Http/Controllers/Auth/ConfirmablePasswordController.php` | Shows ValidationException usage for password confirmation |
| `app/Http/Middleware/AdminOnly.php` | Uses `abort(403)` for authorization failures |
| `app/Http/Controllers/GuestController.php` | Uses `abort(404)` and `firstOrFail()` for resource-not-found scenarios |
| `app/Http/Controllers/BranchController.php` | Example of standard controller relying on automatic validation (no explicit try-catch) |
| `resources/js/Components/InputError.jsx` | Reusable error display component |
| `resources/js/Pages/Auth/Login.jsx` | Example of inline error rendering with useForm hook |
| `app/Http/Middleware/HandleInertiaRequests.php` | Shares auth state; no custom error sharing |

## Architecture and Conventions

### No Custom Exception Classes

There is **no `app/Exceptions/` directory**. The application does not define any custom exception types. All error handling delegates to Laravel's framework defaults.

### No Try-Catch in Controllers

Controllers do **not** use explicit `try-catch` blocks. They rely on:
- Laravel's automatic validation exception handling
- Inertia.js's built-in error response processing
- Laravel's global exception handler (configured in framework defaults)

### Validation Strategy

Two approaches are used:
1. **Inline validation** in controllers via `$request->validate([...])` — seen in `BranchController`
2. **Form Request classes** — seen in `LoginRequest` for more complex validation logic with custom error throwing

### Error Propagation Flow

```
Backend Validation Failure
    → ValidationException thrown
    → Laravel converts to 422 response with errors JSON
    → Inertia.js intercepts and populates useForm().errors
    → React component renders errors inline

HTTP Error (403/404)
    → abort() called or ModelNotFoundException
    → Laravel renders error page or Inertia error response
```

## Rules for Developers

1. **Use ValidationException for business logic failures** — When authentication, authorization, or business rules fail, throw `ValidationException::withMessages(['field' => 'message'])` rather than returning custom responses.

2. **Use abort() for HTTP-level errors** — For 403 (forbidden) and 404 (not found) scenarios, use Laravel's `abort()` helper.

3. **Display errors inline using useForm().errors** — In React components, access field-specific errors from the `errors` object returned by `useForm()` and render them conditionally below the relevant input.

4. **Do not add try-catch in controllers** — Let Laravel's exception handler manage unexpected errors. Only catch exceptions when you need specific recovery behavior.

5. **No custom exception classes needed** — For this application's scope, Laravel's built-in exceptions are sufficient. Do not create custom exception types unless there is a clear cross-cutting need.

6. **Use firstOrFail() for required resources** — When a resource must exist (e.g., article detail page), use `firstOrFail()` to let Laravel handle the 404 automatically.

7. **Flash success messages via Redirect::back()->with()** — For successful operations, use session flash messages rather than throwing or returning special responses.

## Confidence

**medium** — The error handling system is functional and consistent but informal. It relies entirely on Laravel/Inertia framework defaults without any custom error handling infrastructure, dedicated error types, or documented conventions. Patterns are evident through code inspection but not explicitly codified.