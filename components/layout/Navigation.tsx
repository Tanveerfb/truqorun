"use client";

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
import {
  NavLogo,
  NavLink,
  NavDropdown,
  MobileMenu,
  MobileMenuButton,
} from "@/components/layout/navbar";
import type { NavLinkItem } from "@/components/layout/navbar";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // [PLACEHOLDER]: Update these links based on final Truqorun site structure
  const navLinks: NavLinkItem[] = [
    { href: "/", label: "Home", color: "primary" },
    { href: "/about", label: "About", color: "accent" },
    {
      label: "Services",
      color: "success",
      dropdown: [
        { href: "/services", label: "All Services" },
        {
          href: "/services/business-landing-pages",
          label: "Business Landing Pages",
        },
        { href: "/services/e-commerce", label: "E-commerce Websites" },
        {
          href: "/services/content-management-systems",
          label: "Content Management Systems",
        },
        {
          href: "/services/maintenance-support",
          label: "Maintenance & Support",
        },
      ],
    },
    { href: "/portfolio", label: "Portfolio", color: "warning" },
    { href: "/blog", label: "Blog", color: "danger" },
    { href: "/contact", label: "Contact", color: "primary" },
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
              {navLinks.map((link) => {
                if (link.dropdown) {
                  // Render dropdown for items with dropdown property
                  return (
                    <NavDropdown
                      key={link.label}
                      label={link.label}
                      items={link.dropdown}
                      isActive={pathname.startsWith("/services")}
                      color={link.color}
                    />
                  );
                }
                // Regular link
                return (
                  <NavLink
                    key={link.href}
                    href={link.href!}
                    label={link.label}
                    isActive={pathname === link.href}
                    color={link.color}
                  />
                );
              })}
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
