'use client';

/**
 * Navigation Component
 * 
 * Site navigation bar with branding and theme toggle.
 * This is a client component to support interactive theme switching.
 * 
 * @example
 * ```tsx
 * <Navigation />
 * ```
 */

import { Container } from "@/components/ui";
import { ThemeToggle } from "@/components/layout";

export function Navigation() {
  return (
    <nav className="border-b border-border">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <h1 className="text-xl font-bold">Truqorun</h1>
          <ThemeToggle />
        </div>
      </Container>
    </nav>
  );
}

export default Navigation;
