/**
 * Section Component
 * 
 * Semantic section wrapper for page sections with consistent spacing.
 * Supports different spacing variants and background styles.
 * 
 * @example
 * ```tsx
 * <Section spacing="lg" background="secondary">
 *   <Container>
 *     <h2>Section Title</h2>
 *     <p>Section content</p>
 *   </Container>
 * </Section>
 * ```
 */

import React from 'react';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Section content */
  children: React.ReactNode;
  /** Spacing variant for vertical padding */
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  /** Background style variant */
  background?: 'default' | 'secondary' | 'accent';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Section component for semantic page sections
 */
export const Section: React.FC<SectionProps> = ({
  children,
  spacing = 'lg',
  background = 'default',
  className = '',
  ...props
}) => {
  const spacingStyles = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-20',
    xl: 'py-28',
  };

  const backgroundStyles = {
    default: 'bg-background',
    secondary: 'bg-background-secondary border-t border-border',
    accent: 'bg-gradient-to-br from-primary/5 to-accent/5 border-t border-border',
  };

  return (
    <section
      className={`${spacingStyles[spacing]} ${backgroundStyles[background]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
