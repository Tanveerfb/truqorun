"use client";

/**
 * NavDropdown Component
 *
 * Dropdown menu for navigation items with submenus.
 * Supports click-to-open behavior with outside click detection.
 *
 * Features:
 * - Click to toggle (not hover)
 * - Closes on outside click
 * - Closes on route navigation
 * - Respects parent color theme
 * - Smooth animations with framer-motion
 * - Keyboard accessible
 * - Dark mode compatible
 *
 * @example
 * ```tsx
 * <NavDropdown
 *   label="Services"
 *   color="success"
 *   isActive={pathname.startsWith('/services')}
 *   items={[
 *     { href: '/services/web', label: 'Web Development' },
 *     { href: '/services/mobile', label: 'Mobile Apps' }
 *   ]}
 * />
 * ```
 *
 * @module components/layout/navbar/NavDropdown
 */

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import type { NavDropdownProps } from "./types";

export const NavDropdown: React.FC<NavDropdownProps> = ({
  label,
  items,
  isActive = false,
  color = "primary",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Map color to Tailwind classes for hover and active states
  const colorClasses = {
    primary:
      "hover:bg-primary hover:text-white data-[active=true]:bg-primary data-[active=true]:text-white",
    accent:
      "hover:bg-accent hover:text-white data-[active=true]:bg-accent data-[active=true]:text-white",
    success:
      "hover:bg-success hover:text-black data-[active=true]:bg-success data-[active=true]:text-black",
    warning:
      "hover:bg-warning hover:text-white data-[active=true]:bg-warning data-[active=true]:text-white",
    danger:
      "hover:bg-danger hover:text-white data-[active=true]:bg-danger data-[active=true]:text-white",
  };

  // Background color classes for dropdown items (match parent color)
  const dropdownItemColorClasses = {
    primary: "hover:bg-primary hover:text-white",
    accent: "hover:bg-accent hover:text-black",
    success: "hover:bg-success hover:text-black",
    warning: "hover:bg-warning hover:text-white",
    danger: "hover:bg-danger hover:text-white",
  };

  const baseStyles =
    "text-sm font-medium transition-all duration-200 px-3 py-2 rounded-md cursor-pointer";
  const defaultTextColor = isActive ? "" : "text-foreground-secondary";
  const focusStyles =
    "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background";

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close dropdown when pathname changes (navigation occurred)
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Button */}
      <motion.button
        onClick={toggleDropdown}
        className={`${baseStyles} ${defaultTextColor} ${colorClasses[color]} ${focusStyles} flex items-center gap-1`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        data-active={isActive}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        {label}
        <motion.svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg py-2 z-50"
            role="menu"
            aria-label={`${label} submenu`}
          >
            {items.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
              >
                <Link
                  href={item.href}
                  className={`block px-4 py-2 text-sm text-foreground transition-colors duration-200 ${dropdownItemColorClasses[color]}`}
                  role="menuitem"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavDropdown;
