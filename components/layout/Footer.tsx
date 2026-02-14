"use client";

/**
 * Footer Component
 *
 * Site-wide footer component with navigation, social links, and copyright.
 * Automatically adapts to light and dark modes with theme-specific logos.
 *
 * @example
 * ```tsx
 * <Footer />
 * ```
 */

import React from "react";
import { Container } from "@/components/ui";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Footer component for site-wide page footer
 */
export const Footer: React.FC<FooterProps> = ({ className = "", ...props }) => {
  const currentYear = new Date().getFullYear();
  const { resolvedTheme, mounted } = useTheme();

  const logoSrc =
    resolvedTheme === "dark"
      ? "/Truqorun - Transparent Neg.png"
      : "/Truqorun - Transparent LogoText.png";

  return (
    <footer
      className={`border-t border-border bg-background-secondary ${className}`}
      {...props}
    >
      <Container>
        <div className="py-12">
          {/* Footer Navigation Grid */}
          <div className="grid gap-8 md:grid-cols-4">
            {/* Company Info */}
            <div>
              <div className="mb-4">
                {mounted ? (
                  <Image
                    src={logoSrc}
                    alt="Truqorun"
                    width={140}
                    height={40}
                    className="h-9 w-auto"
                  />
                ) : (
                  <div className="h-9 w-40" aria-hidden="true" />
                )}
              </div>
              <p className="text-sm text-foreground-secondary">
                Modern web development solutions that drive business growth.
              </p>
              {/* Social Links */}
              <div className="mt-4 flex gap-4">
                <a
                  href="https://github.com/Tanveerfb/truqorun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground-secondary hover:text-primary transition-colors"
                  aria-label="Visit our GitHub repository"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground-secondary">
                Services
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/services"
                    className="text-foreground-secondary hover:text-primary transition-colors"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-foreground-secondary hover:text-primary transition-colors"
                  >
                    E-commerce Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-foreground-secondary hover:text-primary transition-colors"
                  >
                    CMS Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-foreground-secondary hover:text-primary transition-colors"
                  >
                    Maintenance & Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground-secondary">
                Company
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-foreground-secondary hover:text-primary transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="text-foreground-secondary hover:text-primary transition-colors"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-foreground-secondary hover:text-primary transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <a
                    href="https://github.com/Tanveerfb/truqorun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground-secondary hover:text-primary transition-colors"
                  >
                    Open Source
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground-secondary">
                Get in Touch
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/contact"
                    className="text-foreground-secondary hover:text-primary transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:truqorun@proton.me"
                    className="text-foreground-secondary hover:text-primary transition-colors"
                  >
                    truqorun@proton.me
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Tanveerfb/truqorun/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground-secondary hover:text-primary transition-colors"
                  >
                    Report an Issue
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 border-t border-border pt-8">
            <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-foreground-secondary md:flex-row md:text-left">
              <p>© {currentYear} Truqorun. All rights reserved.</p>
              <p>
                Built with <span className="text-red-500">❤</span> using
                Next.js, React, TypeScript & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
