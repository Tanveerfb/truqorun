/**
 * Footer Component
 * 
 * Site-wide footer component with copyright and branding information.
 * Automatically adapts to light and dark modes.
 * 
 * @example
 * ```tsx
 * <Footer />
 * ```
 * 
 * [PLACEHOLDER]: Add social media links and newsletter signup
 */

import React from 'react';
import { Container } from '@/components/ui';
import Link from 'next/link';

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Footer component for site-wide page footer
 */
export const Footer: React.FC<FooterProps> = ({
  className = '',
  ...props
}) => {
  const currentYear = new Date().getFullYear();

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
              <h3 className="mb-4 text-lg font-semibold">Truqorun</h3>
              <p className="text-sm text-foreground-secondary">
                Modern web development solutions that drive business growth.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground-secondary">
                Services
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/services" className="text-foreground-secondary hover:text-primary transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-foreground-secondary hover:text-primary transition-colors">
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-foreground-secondary hover:text-primary transition-colors">
                    Consulting
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
                  <Link href="/about" className="text-foreground-secondary hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-foreground-secondary hover:text-primary transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-foreground-secondary hover:text-primary transition-colors">
                    Blog
                  </Link>
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
                  <Link href="/contact" className="text-foreground-secondary hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
                {/* [PLACEHOLDER]: Add social media links */}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 border-t border-border pt-8 text-center text-sm text-foreground-secondary">
            <p>© {currentYear} Truqorun. All rights reserved.</p>
            <p className="mt-2">
              Built with Next.js, React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
