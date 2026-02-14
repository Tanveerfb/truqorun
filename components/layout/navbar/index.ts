/**
 * Navbar Components Barrel Export
 *
 * Centralized export for all navigation bar sub-components.
 * Provides modular, reusable navigation components.
 *
 * Components:
 * - NavLogo: Brand/logo component
 * - NavLink: Individual navigation link with active state
 * - NavDropdown: Dropdown menu for navigation items with submenus
 * - MobileMenu: Mobile navigation menu
 * - MobileMenuButton: Hamburger/close button
 *
 * @example
 * ```tsx
 * import { NavLogo, NavLink, NavDropdown, MobileMenu } from '@/components/layout/navbar';
 * ```
 *
 * @module components/layout/navbar
 */

export { NavLogo } from "./NavLogo";
export { NavLink } from "./NavLink";
export { NavDropdown } from "./NavDropdown";
export { MobileMenu } from "./MobileMenu";
export { MobileMenuButton } from "./MobileMenuButton";
export type {
  NavLinkItem,
  NavLinkProps,
  NavLogoProps,
  MobileMenuButtonProps,
  MobileMenuProps,
  NavDropdownProps,
  DropdownItem,
} from "./types";
