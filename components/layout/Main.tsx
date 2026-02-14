/**
 * Main Component
 * 
 * Semantic main content wrapper for page content.
 * Provides consistent spacing and semantic HTML structure.
 * 
 * @example
 * ```tsx
 * <Main>
 *   <Section>
 *     <h1>Page Content</h1>
 *   </Section>
 * </Main>
 * ```
 */

import React from 'react';

export interface MainProps extends React.HTMLAttributes<HTMLElement> {
  /** Main content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Main component for semantic page content wrapper
 */
export const Main: React.FC<MainProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <main
      className={`flex-1 ${className}`}
      {...props}
    >
      {children}
    </main>
  );
};

export default Main;
