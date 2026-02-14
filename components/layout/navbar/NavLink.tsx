"use client";

/**
 * NavLink Component
 *
 * Reusable navigation link with active state highlighting.
 * Supports both desktop and mobile layouts.
 *
 * Features:
 * - Active state styling
 * - Hover effects
 * - Smooth transitions with framer-motion
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

import Link from "next/link";
import { motion } from "framer-motion";
import { NavLinkProps } from "./types";

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  isActive = false,
  onClick,
  className = "",
  color = "primary",
}) => {
  // Map color to Tailwind classes for hover and active states
  const colorClasses = {
    primary:
      "hover:bg-primary hover:text-black data-[active=true]:bg-primary data-[active=true]:text-black",
    accent:
      "hover:bg-accent hover:text-black data-[active=true]:bg-accent data-[active=true]:text-black",
    success:
      "hover:bg-success hover:text-black data-[active=true]:bg-success data-[active=true]:text-black",
    warning:
      "hover:bg-warning hover:text-black data-[active=true]:bg-warning data-[active=true]:text-black",
    danger:
      "hover:bg-danger hover:text-white data-[active=true]:bg-danger data-[active=true]:text-white",
  };

  const baseStyles =
    "text-sm font-medium transition-all duration-200 px-3 py-2 rounded-md";
  const defaultTextColor = isActive ? "" : "text-foreground-secondary";
  const focusStyles =
    "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background";

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Link
        href={href}
        onClick={onClick}
        className={`${baseStyles} ${defaultTextColor} ${colorClasses[color]} ${focusStyles} ${className}`}
        aria-current={isActive ? "page" : undefined}
        data-active={isActive}
      >
        {label}
      </Link>
    </motion.div>
  );
};

export default NavLink;
