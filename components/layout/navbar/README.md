# Navbar Module

A modular, accessible, and responsive navigation component system for Truqorun.

## Overview

The Navbar module provides a complete navigation solution with:
- **Modular Architecture**: Individual, reusable components
- **Active State Highlighting**: Visual indication of current page
- **Mobile Responsive**: Slide-down menu for small screens
- **Accessibility**: Full WCAG 2.1 AA compliance with keyboard navigation
- **Dark Mode**: Seamless theme switching support
- **Type-Safe**: Full TypeScript definitions

## Components

### Navigation

The main navigation component that orchestrates all sub-components.

```tsx
import { Navigation } from '@/components/layout';

<Navigation />
```

**Features:**
- Pathname detection for active link highlighting
- Mobile menu state management
- Skip-to-content link for accessibility
- Responsive design (desktop/mobile layouts)

### NavLogo

Logo/branding component for the navigation bar.

```tsx
import { NavLogo } from '@/components/layout/navbar';

<NavLogo />
```

**[PLACEHOLDER]**: Currently displays text "Truqorun". Replace with actual logo image:

```tsx
// Example logo implementation
<Image 
  src="/logo.svg" 
  alt="Truqorun" 
  width={120} 
  height={40}
  className="h-8 w-auto"
/>
```

### NavLink

Reusable navigation link with active state support.

```tsx
import { NavLink } from '@/components/layout/navbar';

<NavLink 
  href="/about" 
  label="About" 
  isActive={pathname === '/about'}
/>
```

**Props:**
- `href`: Link destination
- `label`: Display text
- `isActive`: Whether this is the current page
- `onClick`: Optional click handler (for mobile menu close)
- `className`: Additional CSS classes

### MobileMenu

Mobile-responsive menu with slide animation.

```tsx
import { MobileMenu } from '@/components/layout/navbar';

<MobileMenu 
  isOpen={isMobileMenuOpen}
  navLinks={navLinks}
  activePath={pathname}
  onClose={closeMobileMenu}
/>
```

**Props:**
- `isOpen`: Menu visibility state
- `navLinks`: Array of navigation items
- `activePath`: Current pathname for highlighting
- `onClose`: Handler to close menu

### MobileMenuButton

Hamburger/close toggle button for mobile menu.

```tsx
import { MobileMenuButton } from '@/components/layout/navbar';

<MobileMenuButton 
  isOpen={isMobileMenuOpen} 
  onClick={toggleMobileMenu}
/>
```

**Props:**
- `isOpen`: Current menu state
- `onClick`: Toggle handler
- `className`: Additional CSS classes

## Types

```typescript
interface NavLinkItem {
  href: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  external?: boolean;
}
```

## Customization

### Adding Navigation Links

Edit the `navLinks` array in `components/layout/Navigation.tsx`:

```tsx
const navLinks: NavLinkItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  // Add more links here
];
```

**[PLACEHOLDER]**: Update these links with final Truqorun site structure.

### Styling

All components use Tailwind CSS utility classes and respect Truqorun's design tokens:

- `--color-primary`: Primary brand color
- `--color-foreground-secondary`: Secondary text color
- `--color-border`: Border color
- `--color-surface-secondary`: Secondary surface color

### Adding a Logo

1. Add your logo file to `/public/` directory
2. Update `NavLogo.tsx` to use Next.js Image component
3. Replace the text "Truqorun" with the image

Example:
```tsx
import Image from 'next/image';

export const NavLogo: React.FC<NavLogoProps> = ({ className = '' }) => {
  return (
    <Link href="/" className={className} aria-label="Truqorun home">
      <Image 
        src="/logo.svg" 
        alt="Truqorun" 
        width={120} 
        height={40}
        priority
      />
    </Link>
  );
};
```

## Accessibility Features

- **Skip Link**: Allows keyboard users to skip directly to main content
- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Full keyboard support with focus indicators
- **Active State**: `aria-current="page"` for current page indication
- **Semantic HTML**: Uses `<nav>`, proper heading hierarchy
- **Focus Management**: Visible focus rings with proper contrast

## Mobile Responsiveness

### Breakpoints
- **Desktop**: `md:` (768px and up) - Horizontal navigation links
- **Mobile**: Below 768px - Hamburger menu with slide-down animation

### Touch Targets
- All interactive elements meet minimum 44x44px touch target size
- Adequate spacing between mobile menu items

## Dark Mode

All components automatically adapt to light/dark theme:
- Theme toggle integrated in navigation bar
- Proper contrast ratios maintained in both modes
- Border and background colors adjust automatically

## Performance

- **Code Splitting**: Each component is separately importable
- **Tree Shaking**: Unused components are not included in bundle
- **Optimized Re-renders**: Minimal state updates with proper memoization

## File Structure

```
components/layout/navbar/
├── index.ts              # Barrel export
├── types.ts              # TypeScript definitions
├── NavLogo.tsx          # Logo component
├── NavLink.tsx          # Link component
├── MobileMenu.tsx       # Mobile menu
├── MobileMenuButton.tsx # Toggle button
└── README.md            # This file

components/layout/
└── Navigation.tsx       # Main navigation component
```

## Testing

Test navigation with:

1. **Desktop Layout**
   - Navigate to different pages
   - Verify active link highlighting
   - Test hover states

2. **Mobile Layout**
   - Toggle mobile menu
   - Navigate and verify menu closes
   - Test touch interactions

3. **Accessibility**
   - Tab through navigation with keyboard
   - Test with screen reader
   - Verify skip link functionality

4. **Dark Mode**
   - Toggle theme
   - Verify contrast and visibility

## Future Enhancements

Potential improvements for future iterations:

- [ ] Dropdown/mega menu support for nested navigation
- [ ] Sticky navigation with scroll behavior
- [ ] Search integration
- [ ] User profile menu for authenticated users
- [ ] Notification badges
- [ ] Breadcrumb integration
- [ ] Multi-language support

## Contributing

When modifying the navbar:

1. Maintain accessibility features
2. Test on multiple devices/browsers
3. Ensure dark mode compatibility
4. Update this documentation
5. Add TypeScript types for new props

## Questions?

For questions or suggestions, open an issue on [GitHub](https://github.com/Tanveerfb/truqorun/issues).
