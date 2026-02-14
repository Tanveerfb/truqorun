/**
 * Card Component
 * 
 * A flexible card container component for displaying grouped content.
 * Features automatic light/dark mode theming with proper shadows and borders.
 * Supports multiple visual variants and interactive states.
 * 
 * @example
 * ```tsx
 * <Card>
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </Card>
 * 
 * <Card variant="elevated" hoverable>
 *   <h3>Interactive Card</h3>
 * </Card>
 * ```
 */

import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Card content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Visual variant of the card */
  variant?: 'default' | 'elevated' | 'outlined' | 'flat';
  /** Whether the card should have hover effects */
  hoverable?: boolean;
}

/**
 * Card component for grouping related content
 */
export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  hoverable = false,
  ...props
}) => {
  const baseStyles = 'rounded-lg p-6 transition-all duration-200';
  
  const variantStyles = {
    default: 'border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800',
    elevated: 'bg-white shadow-lg border-0 dark:bg-gray-800',
    outlined: 'border-2 border-gray-300 bg-transparent dark:border-gray-600',
    flat: 'bg-gray-50 border-0 dark:bg-gray-900',
  };

  const hoverStyles = hoverable
    ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer'
    : variant === 'default'
    ? 'hover:shadow-md'
    : '';

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
