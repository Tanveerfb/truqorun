"use client";

/**
 * NavLogo Component
 *
 * Logo/branding component for the navigation bar.
 * Displays the Truqorun brand logo with proper sizing and theming.
 * Automatically switches between light and dark mode logos.
 *
 * @example
 * ```tsx
 * <NavLogo />
 * ```
 *
 * @module components/layout/navbar/NavLogo
 */

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeProvider";
import { NavLogoProps } from "./types";

export const NavLogo: React.FC<NavLogoProps> = ({ className = "" }) => {
  const { resolvedTheme, mounted } = useTheme();

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <div className="h-11 w-40" aria-hidden="true" />;
  }

  const logoSrc =
    resolvedTheme === "dark"
      ? "/Truqorun - Transparent Neg.png"
      : "/Truqorun - Transparent LogoText.png";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      <Link
        href="/"
        className={`logo-container ${className}`}
        aria-label="Truqorun home"
      >
        <Image
          src={logoSrc}
          alt="Truqorun"
          width={160}
          height={45}
          className="h-11 w-auto"
          priority
        />
      </Link>
    </motion.div>
  );
};

export default NavLogo;
