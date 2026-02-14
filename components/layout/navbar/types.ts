/**
 * Navbar Component Types
 *
 * Type definitions for navigation components.
 * Provides type safety for navigation items and component props.
 *
 * @module components/layout/navbar/types
 */

/**
 * Dropdown menu item
 */
export interface DropdownItem {
  /** Link URL/path */
  href: string;
  /** Display label */
  label: string;
}

/**
 * Navigation link item
 */
export interface NavLinkItem {
  /** Link URL/path */
  href?: string;
  /** Display label */
  label: string;
  /** Optional icon component */
  icon?: React.ComponentType<{ className?: string }>;
  /** Whether link opens in new tab */
  external?: boolean;
  /** Background color on hover/active */
  color?: "primary" | "accent" | "success" | "warning" | "danger";
  /** Optional dropdown items (makes this a dropdown menu) */
  dropdown?: DropdownItem[];
}

/**
 * Props for NavLink component
 */
export interface NavLinkProps {
  /** Link URL/path */
  href: string;
  /** Display label */
  label: string;
  /** Whether this is the active/current page */
  isActive?: boolean;
  /** Click handler (for mobile menu close) */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Background color on hover/active */
  color?: "primary" | "accent" | "success" | "warning" | "danger";
}

/**
 * Props for NavLogo component
 */
export interface NavLogoProps {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Props for MobileMenuButton component
 */
export interface MobileMenuButtonProps {
  /** Whether mobile menu is open */
  isOpen: boolean;
  /** Click handler to toggle menu */
  onClick: () => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Props for MobileMenu component
 */
export interface MobileMenuProps {
  /** Whether menu is open */
  isOpen: boolean;
  /** Navigation links to display */
  navLinks: NavLinkItem[];
  /** Current active path */
  activePath?: string;
  /** Close menu handler */
  onClose: () => void;
}

/**
 * Props for NavDropdown component
 */
export interface NavDropdownProps {
  /** Display label */
  label: string;
  /** Dropdown menu items */
  items: DropdownItem[];
  /** Whether this section is active */
  isActive?: boolean;
  /** Background color on hover/active */
  color?: "primary" | "accent" | "success" | "warning" | "danger";
}
