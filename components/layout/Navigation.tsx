'use client';

/**
 * Navigation Component
 * 
 * Site navigation bar with branding, page links, and theme toggle.
 * This is a client component to support interactive theme switching.
 * Displays all core pages with WIP indicators where appropriate.
 * 
 * @example
 * ```tsx
 * <Navigation />
 * ```
 */

import { Container } from "@/components/ui";
import { ThemeToggle } from "@/components/layout";
import Link from "next/link";

export function Navigation() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="border-b border-border">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <Link href="/" className="text-xl font-bold hover:text-primary transition-colors">
            Truqorun
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground-secondary hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center gap-4">
            {/* [PLACEHOLDER]: Add mobile menu button for responsive navigation */}
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navigation;
