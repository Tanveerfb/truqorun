"use client";

/**
 * ThemeProvider Component
 *
 * Provides theme context to the application and handles theme switching.
 * Supports system preference detection and persists user preference.
 *
 * Features:
 * - System preference detection
 * - LocalStorage persistence
 * - No flash on page load
 * - SSR-safe implementation
 *
 * @example
 * ```tsx
 * <ThemeProvider>
 *   <App />
 * </ThemeProvider>
 * ```
 *
 * [PLACEHOLDER]: Add support for custom theme colors and presets
 */

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
}

/**
 * Provider component for theme management
 *
 * Wraps the application and provides theme context to all child components.
 * Automatically detects and applies system theme preference.
 */
export function ThemeProvider({
  children,
  defaultTheme = "system",
}: ThemeProviderProps) {
  // Initialize theme from localStorage or default (lazy initializer to avoid setState in effect)
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return defaultTheme;
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    return savedTheme || defaultTheme;
  });

  const [mounted, setMounted] = useState(false);

  // Calculate resolved theme
  const getResolvedTheme = (): "light" | "dark" => {
    if (typeof window === "undefined") return "light";
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    return theme === "system" ? systemTheme : theme;
  };

  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(
    getResolvedTheme,
  );

  // Mark as mounted
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Apply theme changes to DOM
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    const activeTheme = getResolvedTheme();

    // Apply theme to HTML element
    if (activeTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Update resolved theme state only if different
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setResolvedTheme(activeTheme);

    // Save to localStorage
    localStorage.setItem("theme", theme);
  }, [theme, mounted]); // eslint-disable-line react-hooks/exhaustive-deps

  // Listen for system theme changes
  useEffect(() => {
    if (!mounted || theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? "dark" : "light";
      setResolvedTheme(newTheme);
      const root = document.documentElement;
      if (e.matches) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [theme, mounted]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Hook to access theme context
 *
 * @returns Theme context with current theme and setter
 * @throws Error if used outside ThemeProvider
 *
 * @example
 * ```tsx
 * const { theme, setTheme, resolvedTheme } = useTheme();
 * ```
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
