/**
 * Card Component
 * 
 * A flexible card container component for displaying grouped content.
 * Features automatic light/dark mode theming with proper shadows and borders.
 * 
 * @example
 * ```tsx
 * <Card>
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </Card>
 * ```
 * 
 * [PLACEHOLDER]: Add variants (elevated, outlined, flat) and interactive states
 */

import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Card content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Card component for grouping related content
 */
export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
