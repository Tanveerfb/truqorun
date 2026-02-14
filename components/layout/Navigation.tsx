'use client';

/**
 * Navigation Component
 * 
 * Responsive site navigation bar with:
 * - Branding and page links
 * - Theme toggle
 * - Mobile hamburger menu
 * - Accessibility features (skip link, aria labels)
 * 
 * @example
 * ```tsx
 * <Navigation />
 * ```
 */

import { Container } from "@/components/ui";
import { ThemeToggle } from "@/components/layout";
import Link from "next/link";
import { useState } from "react";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md"
      >
        Skip to main content
      </a>

      <nav className="border-b border-border" aria-label="Main navigation">
        <Container>
          <div className="flex h-16 items-center justify-between">
            {/* Logo/Brand */}
            <Link 
              href="/" 
              className="text-xl font-bold hover:text-primary transition-colors"
              aria-label="Truqorun home"
            >
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

            {/* Mobile Menu Button + Theme Toggle */}
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-md hover:bg-surface-secondary transition-colors"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? (
                  // Close icon
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  // Hamburger icon
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>

              {/* Theme Toggle */}
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div 
              id="mobile-menu"
              className="md:hidden py-4 border-t border-border"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="text-sm font-medium text-foreground-secondary hover:text-primary transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </nav>
    </>
  );
}

export default Navigation;
