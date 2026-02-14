"use client";

/**
 * ThemeToggle Component
 *
 * A button component that allows users to switch between light, dark, and system themes.
 * Features smooth transitions and accessible icons.
 *
 * @example
 * ```tsx
 * <ThemeToggle />
 * ```
 *
 * [PLACEHOLDER]: Add animated icon transitions and custom styling options
 */

import React from "react";
import { useTheme } from "./ThemeProvider";

/**
 * Theme toggle button component
 *
 * Cycles through light -> dark -> system themes.
 * Shows appropriate icon for current theme.
 */
export function ThemeToggle() {
  const { theme, setTheme, mounted } = useTheme();

  const cycleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  const getIcon = () => {
    if (theme === "light") {
      return (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      );
    } else if (theme === "dark") {
      return (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      );
    } else {
      return (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      );
    }
  };

  const getLabel = () => {
    if (theme === "light") return "Switch to dark mode";
    if (theme === "dark") return "Switch to system theme";
    return "Switch to light mode";
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <div className="h-9 w-9" aria-hidden="true" />;
  }

  return (
    <button
      onClick={cycleTheme}
      className="rounded-lg p-2 text-foreground bg-background-secondary border border-border transition-colors hover:bg-border hover:border-primary/50 "
      aria-label={getLabel()}
      title={getLabel()}
    >
      {getIcon()}
    </button>
  );
}

export default ThemeToggle;
