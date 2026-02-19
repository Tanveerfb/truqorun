/**
 * Toast Provider Component
 *
 * Integrates the Sonner toast library with the app's theme system.
 * Place this once in the root layout to enable toast notifications
 * everywhere via the `toast()` function.
 *
 * @example
 * ```tsx
 * // In layout.tsx:
 * <ToastProvider />
 *
 * // Anywhere in the app:
 * import { toast } from 'sonner';
 * toast.success('Form submitted!');
 * ```
 */

"use client";

import { Toaster } from "sonner";
import { useTheme } from "@/components/layout/ThemeProvider";

export function ToastProvider() {
  const { resolvedTheme } = useTheme();

  return (
    <Toaster
      theme={resolvedTheme as "light" | "dark"}
      position="bottom-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: "rgb(var(--card))",
          color: "rgb(var(--foreground))",
          border: "1px solid rgb(var(--border))",
        },
      }}
      richColors
      closeButton
    />
  );
}

export default ToastProvider;
