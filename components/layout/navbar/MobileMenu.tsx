'use client';

/**
 * MobileMenu Component
 * 
 * Mobile-responsive navigation menu with slide-down animation.
 * Displays navigation links in a vertical layout for small screens.
 * 
 * Features:
 * - Smooth slide-down/up animations
 * - Active link highlighting
 * - Auto-close on navigation
 * - Keyboard accessible
 * - Dark mode compatible
 * - Touch-friendly spacing
 * 
 * @example
 * ```tsx
 * <MobileMenu 
 *   isOpen={isMobileMenuOpen}
 *   navLinks={navLinks}
 *   activePath={pathname}
 *   onClose={closeMobileMenu}
 * />
 * ```
 * 
 * @module components/layout/navbar/MobileMenu
 */

import { NavLink } from './NavLink';
import { MobileMenuProps } from './types';

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  navLinks,
  activePath = '',
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div 
      id="mobile-menu"
      className="md:hidden py-4 border-t border-border animate-in slide-in-from-top-2 duration-200"
      role="navigation"
      aria-label="Mobile navigation"
    >
      <div className="flex flex-col gap-4">
        {navLinks.map((link) => (
          <NavLink
            key={link.href}
            href={link.href}
            label={link.label}
            isActive={activePath === link.href}
            onClick={onClose}
            className="py-2"
          />
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
