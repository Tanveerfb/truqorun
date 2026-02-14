/**
 * Container Component
 * 
 * A responsive container component that centers content and applies max-width constraints.
 * Used for consistent page layout and responsive design.
 * 
 * @example
 * ```tsx
 * <Container size="lg">
 *   <h1>Page content</h1>
 * </Container>
 * ```
 * 
 * [PLACEHOLDER]: Add support for fluid containers and custom breakpoints
 */

import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Container size variant */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Container content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Container component for responsive page layouts
 */
export const Container: React.FC<ContainerProps> = ({
  size = 'lg',
  children,
  className = '',
  ...props
}) => {
  const sizeStyles = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  };

  return (
    <div
      className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
