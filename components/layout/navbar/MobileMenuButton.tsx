'use client';

/**
 * MobileMenuButton Component
 * 
 * Hamburger/close button for mobile navigation menu.
 * Animated transition between hamburger and close icons.
 * 
 * Features:
 * - Smooth icon transitions
 * - ARIA attributes for accessibility
 * - Keyboard accessible
 * - Hover effects
 * - Dark mode compatible
 * 
 * @example
 * ```tsx
 * <MobileMenuButton 
 *   isOpen={isMobileMenuOpen} 
 *   onClick={toggleMobileMenu}
 * />
 * ```
 * 
 * @module components/layout/navbar/MobileMenuButton
 */

import { MobileMenuButtonProps } from './types';

export const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  isOpen,
  onClick,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`md:hidden p-2 rounded-md hover:bg-surface-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background ${className}`}
      aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      type="button"
    >
      {isOpen ? (
        // Close icon (X)
        <svg
          className="h-6 w-6 transition-transform duration-200"
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
          className="h-6 w-6 transition-transform duration-200"
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
  );
};

export default MobileMenuButton;
