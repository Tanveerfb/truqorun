/**
 * Badge Component
 *
 * A small label component for displaying status indicators, technology tags,
 * and category labels. Supports multiple color variants and sizes.
 *
 * @example
 * ```tsx
 * <Badge variant="success">Active</Badge>
 * <Badge variant="info" size="md">New Feature</Badge>
 * <Badge variant="default">React</Badge>
 * ```
 */

import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color variant of the badge */
  variant?:
    | "default"
    | "primary"
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "accent";
  /** Size of the badge */
  size?: "sm" | "md";
  /** Badge content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Badge component for status labels, tags, and indicators
 */
export const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  size = "sm",
  children,
  className = "",
  ...props
}) => {
  const variantStyles = {
    default:
      "bg-background-secondary text-foreground-secondary border border-border",
    primary: "bg-primary/10 text-primary border border-primary/20",
    success: "bg-success/10 text-success border border-success/20",
    warning: "bg-warning/10 text-warning border border-warning/20",
    danger: "bg-danger/10 text-danger border border-danger/20",
    info: "bg-primary/10 text-primary border border-primary/20",
    accent: "bg-accent/10 text-accent border border-accent/20",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
