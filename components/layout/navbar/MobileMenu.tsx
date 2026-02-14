"use client";

/**
 * MobileMenu Component
 *
 * Mobile-responsive navigation menu with slide-down animation.
 * Displays navigation links in a vertical layout for small screens.
 *
 * Features:
 * - Smooth slide-down/up animations with framer-motion
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

import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "./NavLink";
import { MobileMenuProps } from "./types";

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  navLinks,
  activePath = "",
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-menu"
          className="md:hidden py-4 border-t border-border"
          role="navigation"
          aria-label="Mobile navigation"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.div
            className="flex flex-col gap-4"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
              hidden: {},
            }}
          >
            {navLinks.map((link, linkIndex) => {
              // If link has dropdown items, render them
              if (link.dropdown) {
                return (
                  <motion.div
                    key={link.label}
                    className="flex flex-col gap-2"
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: -20 },
                    }}
                  >
                    <div className="text-sm font-semibold text-foreground px-3 py-2">
                      {link.label}
                    </div>
                    <div className="flex flex-col gap-2 pl-4">
                      {link.dropdown.map((dropdownItem) => (
                        <NavLink
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          label={dropdownItem.label}
                          isActive={activePath === dropdownItem.href}
                          onClick={onClose}
                          className="py-2"
                          color={link.color}
                        />
                      ))}
                    </div>
                  </motion.div>
                );
              }

              // Regular link
              return (
                <motion.div
                  key={link.href}
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -20 },
                  }}
                >
                  <NavLink
                    href={link.href!}
                    label={link.label}
                    isActive={activePath === link.href}
                    onClick={onClose}
                    className="py-2"
                    color={link.color}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
