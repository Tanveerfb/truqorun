/**
 * Header Component
 *
 * Site-wide header component that wraps the navigation bar.
 * Provides consistent header layout across all pages.
 *
 * @example
 * ```tsx
 * <Header>
 *   <Navigation />
 * </Header>
 * ```
 */

import React from "react";

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Header content (typically navigation) */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Header component for site-wide page headers
 */
export const Header: React.FC<HeaderProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <header
      className={`sticky top-0 z-50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 ${className}`}
      {...props}
    >
      {children}
    </header>
  );
};

export default Header;
