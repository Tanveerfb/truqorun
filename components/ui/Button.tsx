/**
 * Button Component
 *
 * A reusable button component with support for different variants, sizes, and loading states.
 * Supports light and dark mode theming out of the box.
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md" onClick={() => console.log('Clicked')}>
 *   Click me
 * </Button>
 *
 * <Button variant="outline" size="lg" loading>
 *   Loading...
 * </Button>
 * ```
 */

import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant of the button */
  variant?: "primary" | "secondary" | "danger" | "outline" | "ghost";
  /** Size of the button */
  size?: "sm" | "md" | "lg";
  /** Button content */
  children: React.ReactNode;
  /** Loading state - shows spinner and disables button */
  loading?: boolean;
}

/**
 * Button component for user interactions
 */
export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  loading = false,
  disabled,
  ...props
}) => {
  const baseStyles =
    "rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2";

  const variantStyles = {
    primary:
      "bg-primary text-primary-foreground hover:opacity-90 focus:ring-primary hover:shadow-lg",
    secondary:
      "bg-background-secondary text-foreground hover:bg-border focus:ring-border border border-border",
    danger:
      "bg-danger text-white hover:opacity-90 focus:ring-danger hover:shadow-lg",
    outline:
      "border-2 border-primary text-primary hover:bg-primary/10 focus:ring-primary",
    ghost:
      "text-foreground-secondary hover:bg-background-secondary focus:ring-border",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const spinnerSizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          className={`animate-spin ${spinnerSizes[size]}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
