/**
 * CommandMenu (⌘K Search) Component
 *
 * A command palette that allows users to quickly search and navigate
 * the site. Triggered with Ctrl+K (or ⌘K on Mac).
 *
 * @example
 * ```tsx
 * // Place once in the root layout:
 * <CommandMenu />
 * ```
 */

"use client";

import React, { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";

interface SearchItem {
  label: string;
  href: string;
  category: string;
  keywords?: string;
}

const searchItems: SearchItem[] = [
  // Pages
  { label: "Home", href: "/", category: "Pages", keywords: "landing main" },
  {
    label: "About Us",
    href: "/about",
    category: "Pages",
    keywords: "team mission vision company",
  },
  {
    label: "Services",
    href: "/services",
    category: "Pages",
    keywords: "what we do offerings",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    category: "Pages",
    keywords: "projects work examples",
  },
  {
    label: "Blog",
    href: "/blog",
    category: "Pages",
    keywords: "articles posts news",
  },
  {
    label: "Contact",
    href: "/contact",
    category: "Pages",
    keywords: "get in touch quote inquiry form",
  },

  // Services
  {
    label: "Business Landing Pages",
    href: "/services/business-landing-pages",
    category: "Services",
    keywords: "startup product launch portfolio",
  },
  {
    label: "E-commerce Websites",
    href: "/services/e-commerce",
    category: "Services",
    keywords: "shop store online selling cart payments",
  },
  {
    label: "Content Management Systems",
    href: "/services/content-management-systems",
    category: "Services",
    keywords: "cms blog documentation",
  },
  {
    label: "Maintenance & Support",
    href: "/services/maintenance-support",
    category: "Services",
    keywords: "hosting updates bugs performance",
  },

  // Quick Actions
  {
    label: "Get a Free Quote",
    href: "/contact",
    category: "Actions",
    keywords: "start project begin consultation",
  },
  {
    label: "View Our Work",
    href: "/portfolio",
    category: "Actions",
    keywords: "see projects examples",
  },
];

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Listen for Ctrl+K / ⌘+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSelect = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-200">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Command Palette */}
      <div className="absolute left-1/2 top-[20%] w-full max-w-lg -translate-x-1/2">
        <Command
          className="rounded-xl border border-border bg-card shadow-2xl overflow-hidden"
          label="Search the site"
        >
          <div className="flex items-center gap-2 border-b border-border px-4">
            <svg
              className="h-4 w-4 shrink-0 text-foreground-muted"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <Command.Input
              placeholder="Search pages, services, or actions..."
              className="w-full border-0 bg-transparent py-4 text-sm text-foreground placeholder:text-foreground-muted focus:outline-none"
            />
            <kbd className="hidden sm:inline-flex shrink-0 items-center gap-1 rounded border border-border bg-background-secondary px-1.5 py-0.5 text-[10px] font-medium text-foreground-muted">
              ESC
            </kbd>
          </div>

          <Command.List className="max-h-80 overflow-y-auto p-2">
            <Command.Empty className="py-8 text-center text-sm text-foreground-muted">
              No results found.
            </Command.Empty>

            {["Pages", "Services", "Actions"].map((category) => {
              const items = searchItems.filter(
                (item) => item.category === category,
              );
              if (!items.length) return null;

              return (
                <Command.Group
                  key={category}
                  heading={category}
                  className="**:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group-heading]]:text-foreground-muted"
                >
                  {items.map((item) => (
                    <Command.Item
                      key={item.href}
                      value={`${item.label} ${item.keywords || ""}`}
                      onSelect={() => handleSelect(item.href)}
                      className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors data-[selected=true]:bg-background-secondary"
                    >
                      {category === "Actions" ? (
                        <svg
                          className="h-4 w-4 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-4 w-4 text-foreground-muted"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      )}
                      {item.label}
                    </Command.Item>
                  ))}
                </Command.Group>
              );
            })}
          </Command.List>

          <div className="border-t border-border px-4 py-2 flex items-center gap-4 text-[10px] text-foreground-muted">
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-border bg-background-secondary px-1 py-0.5">
                ↑↓
              </kbd>
              Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-border bg-background-secondary px-1 py-0.5">
                ↵
              </kbd>
              Select
            </span>
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-border bg-background-secondary px-1 py-0.5">
                Esc
              </kbd>
              Close
            </span>
          </div>
        </Command>
      </div>
    </div>
  );
}

export default CommandMenu;
