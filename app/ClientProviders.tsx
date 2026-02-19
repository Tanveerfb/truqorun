/**
 * Client Providers
 *
 * Wraps client-only providers (ToastProvider, CommandMenu)
 * that need to be included in the root layout but require "use client".
 */

"use client";

import { ToastProvider } from "@/components/layout/ToastProvider";
import { CommandMenu } from "@/components/features/CommandMenu";

export function ClientProviders() {
  return (
    <>
      <ToastProvider />
      <CommandMenu />
    </>
  );
}
