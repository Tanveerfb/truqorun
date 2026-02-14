'use client';

/**
 * Navigation Component
 * 
 * Enhanced responsive site navigation bar with modular components.
 * 
 * Features:
 * - Modular component architecture (NavLogo, NavLink, MobileMenu, etc.)
 * - Active page highlighting with pathname detection
 * - Branding and page links
 * - Theme toggle integration
 * - Mobile hamburger menu with animations
 * - Full accessibility (skip link, ARIA labels, keyboard navigation)
 * - Dark mode compatible throughout
 * - Smooth transitions and hover effects
 * 
 * [PLACEHOLDER]: Update navLinks array with final Truqorun page links
 * [PLACEHOLDER]: Replace NavLogo text with actual logo image when available
 * 
 * @example
 * ```tsx
 * <Navigation />
 * ```
 * 
 * @module components/layout/Navigation
 */

import { Container } from "@/components/ui";
import { ThemeToggle } from "@/components/layout";
import { NavLogo, NavLink, MobileMenu, MobileMenuButton } from "@/components/layout/navbar";
import type { NavLinkItem } from "@/components/layout/navbar";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // [PLACEHOLDER]: Update these links based on final Truqorun site structure
  const navLinks: NavLinkItem[] = [
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
            {/* Logo/Brand - Modular component */}
            <NavLogo />

            {/* Navigation Links - Desktop */}
            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  isActive={pathname === link.href}
                />
              ))}
            </div>

            {/* Mobile Menu Button + Theme Toggle */}
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button - Modular component */}
              <MobileMenuButton
                isOpen={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              />

              {/* Theme Toggle */}
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu - Modular component */}
          <MobileMenu
            isOpen={isMobileMenuOpen}
            navLinks={navLinks}
            activePath={pathname}
            onClose={closeMobileMenu}
          />
        </Container>
      </nav>
    </>
  );
}

export default Navigation;
