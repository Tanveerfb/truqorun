/**
 * Skeleton Component
 *
 * Loading placeholder component that mimics the shape of content
 * while data is being fetched. Includes preset variants for common layouts.
 *
 * @example
 * ```tsx
 * <Skeleton variant="text" />
 * <Skeleton variant="card" />
 * <Skeleton variant="avatar" />
 * <Skeleton className="h-48 w-full" />
 * ```
 */

import React from "react";

export interface SkeletonProps {
  /** Preset shape variant */
  variant?:
    | "text"
    | "heading"
    | "card"
    | "avatar"
    | "button"
    | "image"
    | "custom";
  /** Number of text lines to render (only for text/heading variants) */
  lines?: number;
  /** Additional CSS classes — use for custom sizing */
  className?: string;
}

/**
 * Skeleton loading placeholder component
 */
export const Skeleton: React.FC<SkeletonProps> = ({
  variant = "custom",
  lines = 1,
  className = "",
}) => {
  const pulse = "animate-pulse bg-background-secondary rounded";

  if (variant === "text") {
    return (
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={`${pulse} h-4 ${i === lines - 1 ? "w-3/4" : "w-full"} ${className}`}
          />
        ))}
      </div>
    );
  }

  if (variant === "heading") {
    return <div className={`${pulse} h-8 w-2/3 ${className}`} />;
  }

  if (variant === "avatar") {
    return <div className={`${pulse} h-12 w-12 rounded-full ${className}`} />;
  }

  if (variant === "button") {
    return <div className={`${pulse} h-10 w-28 rounded-lg ${className}`} />;
  }

  if (variant === "image") {
    return <div className={`${pulse} h-48 w-full rounded-lg ${className}`} />;
  }

  if (variant === "card") {
    return (
      <div
        className={`rounded-lg border border-border bg-card p-6 ${className}`}
      >
        <div className={`${pulse} mb-4 h-48 w-full rounded-lg`} />
        <div className={`${pulse} mb-3 h-6 w-3/4`} />
        <div className="space-y-2">
          <div className={`${pulse} h-4 w-full`} />
          <div className={`${pulse} h-4 w-full`} />
          <div className={`${pulse} h-4 w-2/3`} />
        </div>
        <div className="mt-4 flex gap-2">
          <div className={`${pulse} h-6 w-16 rounded-full`} />
          <div className={`${pulse} h-6 w-16 rounded-full`} />
          <div className={`${pulse} h-6 w-16 rounded-full`} />
        </div>
      </div>
    );
  }

  // Custom variant — just a plain block
  return <div className={`${pulse} ${className}`} />;
};

export default Skeleton;
