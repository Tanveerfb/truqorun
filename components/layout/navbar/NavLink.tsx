'use client';

/**
 * NavLink Component
 * 
 * Reusable navigation link with active state highlighting.
 * Supports both desktop and mobile layouts.
 * 
 * Features:
 * - Active state styling
 * - Hover effects
 * - Smooth transitions
 * - Keyboard accessible
 * - Dark mode compatible
 * 
 * @example
 * ```tsx
 * <NavLink 
 *   href="/about" 
 *   label="About" 
 *   isActive={pathname === '/about'}
 * />
 * ```
 * 
 * @module components/layout/navbar/NavLink
 */

import Link from 'next/link';
import { NavLinkProps } from './types';

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  isActive = false,
  onClick,
  className = '',
}) => {
  const baseStyles = 'text-sm font-medium transition-colors';
  const activeStyles = isActive 
    ? 'text-primary' 
    : 'text-foreground-secondary hover:text-primary';
  const focusStyles = 'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm';

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${activeStyles} ${focusStyles} ${className}`}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </Link>
  );
};

export default NavLink;
