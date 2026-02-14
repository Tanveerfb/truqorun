/**
 * NavLogo Component
 * 
 * Logo/branding component for the navigation bar.
 * [PLACEHOLDER]: Replace text logo with actual Truqorun logo image.
 * 
 * @example
 * ```tsx
 * <NavLogo />
 * ```
 * 
 * @module components/layout/navbar/NavLogo
 */

import Link from 'next/link';
import { NavLogoProps } from './types';

export const NavLogo: React.FC<NavLogoProps> = ({ className = '' }) => {
  return (
    <Link 
      href="/" 
      className={`text-xl font-bold hover:text-primary transition-colors ${className}`}
      aria-label="Truqorun home"
    >
      {/* [PLACEHOLDER]: Replace with logo image component */}
      {/* Example implementation:
        <Image 
          src="/logo.svg" 
          alt="Truqorun" 
          width={120} 
          height={40}
          className="h-8 w-auto"
        />
      */}
      Truqorun
    </Link>
  );
};

export default NavLogo;
