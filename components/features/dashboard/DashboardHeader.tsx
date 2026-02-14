/**
 * Dashboard Header Component
 *
 * Header for the dashboard with navigation and actions.
 *
 * [PLACEHOLDER]: Add logout functionality and user menu
 *
 * @module components/features/dashboard/DashboardHeader
 */

"use client";

import React from "react";
import Link from "next/link";

export const DashboardHeader: React.FC = () => {
  return (
    <header className="border-b border-input-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-primary">
              Truqorun
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/dashboard"
                className="text-sm font-medium text-foreground hover:text-primary"
              >
                Submissions
              </Link>
              {/* [PLACEHOLDER]: Add more navigation items */}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {/* [PLACEHOLDER]: Add user menu and logout */}
            <Link
              href="/"
              className="text-sm text-foreground-secondary hover:text-foreground"
            >
              Back to Site
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
