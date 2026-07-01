## Styling Architecture

The Edufa Web Platform uses a **Tailwind CSS v3** utility-first approach combined with the **shadcn/ui** component pattern for building reusable, accessible UI components. The styling system is built on React (via Inertia.js) with Vite as the build tool.

### Core Technology Stack

- **CSS Framework**: Tailwind CSS v3.2.1 with PostCSS and Autoprefixer
- **Component Pattern**: shadcn/ui (unstyled Radix UI primitives styled with Tailwind)
- **Animation Library**: Framer Motion for page transitions, micro-interactions, and entrance animations
- **Icon System**: Lucide React for consistent iconography
- **Utility Helpers**: `clsx` + `tailwind-merge` via a `cn()` utility function for conditional class composition
- **Typography Plugin**: `@tailwindcss/typography` for rich text content rendering
- **Forms Plugin**: `@tailwindcss/forms` for normalized form element styling

### Design Token System

#### Brand Color Palette (`tailwind.config.js`)

Custom brand colors are defined under the `edufa` namespace:

```js
colors: {
  edufa: {
    blue: '#1A1953',    // Primary brand color (deep navy)
    yellow: '#ffd900',  // Accent / CTA color
    green: '#6cc02f',   // Success / positive indicator
    red: '#ff0000',     // Destructive / error state
  }
}
```

#### Sidebar Theme Variables (CSS Custom Properties)

Sidebar theming uses HSL-based CSS custom properties defined in `resources/css/app.css`, supporting both light and dark modes:

- `--sidebar-background`: Panel background
- `--sidebar-foreground`: Text color
- `--sidebar-primary` / `--sidebar-primary-foreground`: Active item styling
- `--sidebar-accent` / `--sidebar-accent-foreground`: Hover states
- `--sidebar-border` / `--sidebar-ring`: Borders and focus rings

Dark mode variants are scoped under the `.dark` class selector.

#### Typography

- **Primary Font**: Figtree (extended over Tailwind's default sans stack)
- **Font Weight Conventions**: Heavy use of `font-black`, `font-bold`, and `font-semibold` for visual hierarchy
- **Tracking**: Uppercase labels use `tracking-widest` or `tracking-[0.2em]` for emphasis

### Component Architecture

#### shadcn/ui Pattern

UI components follow the shadcn/ui convention:

1. **Location**: `resources/js/Components/ui/` contains primitive components (Button, Card, Input, Label, Separator, Sheet, Sidebar, Skeleton, Tooltip, Avatar)
2. **Composition**: Components use `class-variance-authority` (CVA) for variant/size polymorphism
3. **Forward Refs**: All components use `React.forwardRef` for proper ref forwarding
4. **Slot Support**: Interactive components support `asChild` prop via Radix UI's `Slot` for composability
5. **Class Merging**: The `cn()` utility merges user-provided classes with defaults using `tailwind-merge`

Example Button variants:
- `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
- Sizes: `default`, `sm`, `lg`, `icon`

#### Layout Components

- **GuestLayout**: Public-facing pages with `Header` navigation and hero sections
- **AuthenticatedLayout**: Admin dashboard with collapsible sidebar (`SidebarProvider` + `AppSidebar` + `SidebarInset`)

#### Animation Patterns

Framer Motion is used extensively for:
- Page entrance animations (`initial`/`animate`/`transition` props)
- Modal/sheet open/close transitions via `AnimatePresence`
- Hover/tap micro-interactions (`whileHover`, `whileTap`)
- Staggered list item reveals with `delay` offsets
- Spring physics for natural motion feel

### Responsive Strategy

- **Breakpoint Usage**: Standard Tailwind breakpoints (`sm`, `md`, `lg`, `xl`)
- **Mobile-First**: Components default to mobile layouts, enhanced for larger screens
- **Fluid Typography**: `clamp()` used for responsive font sizing in hero sections
- **Conditional Rendering**: Mobile hamburger menu vs. desktop horizontal nav in `Header.jsx`
- **Sidebar Behavior**: Collapses to sheet/drawer on mobile, persistent sidebar on desktop

### File Structure Conventions

```
resources/
├── css/
│   └── app.css              # Tailwind directives + CSS custom properties (design tokens)
├── js/
│   ├── Components/
│   │   ├── ui/              # shadcn/ui primitive components (button, card, sidebar, etc.)
│   │   ├── Header.jsx       # Public navigation with animated dropdowns
│   │   ├── Hero.jsx         # Landing page hero with video background and modals
│   │   ├── NavLink.jsx      # Active-state aware navigation links
│   │   └── ...              # Domain-specific components (ServiceCards, BranchSection, etc.)
│   ├── Layouts/
│   │   ├── GuestLayout.jsx  # Public page wrapper
│   │   └── AuthenticatedLayout.jsx  # Admin dashboard wrapper with sidebar
│   ├── lib/
│   │   └── utils.js         # cn() utility (clsx + tailwind-merge)
│   └── hooks/
│       └── use-mobile.js    # Responsive breakpoint hook for sidebar behavior
```

### Developer Guidelines

1. **Always use `cn()` for class composition**: Never concatenate class strings manually. Use `cn(defaultClasses, className)` to allow proper override merging.

2. **Prefer CVA for variant-driven components**: When creating new interactive components, use `cva()` from `class-variance-authority` to define variant and size options.

3. **Use brand colors via Tailwind classes**: Reference `bg-edufa-blue`, `text-edufa-yellow`, etc., rather than hardcoding hex values.

4. **Leverage Radix primitives for accessibility**: For dialogs, tooltips, sheets, and other interactive widgets, use the existing `ui/` components which wrap Radix UI primitives.

5. **Animate with Framer Motion**: Use `motion.div` (or other motion components) for entrance animations and `AnimatePresence` for exit animations. Avoid CSS keyframe animations unless necessary.

6. **Follow shadcn/ui naming conventions**: New UI primitives should be placed in `Components/ui/` and exported with both the component and its variants (e.g., `Button` and `buttonVariants`).

7. **Responsive design with Tailwind breakpoints**: Use `sm:`, `md:`, `lg:` prefixes for responsive adjustments. Test mobile-first.

8. **Dark mode support**: Sidebar theme variables already support dark mode via the `.dark` class. Extend this pattern when adding new themed components.