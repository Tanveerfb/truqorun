/**
 * Typography Components
 * 
 * Consistent typography components for headings, paragraphs, and text.
 * Automatically applies font families and responsive sizing.
 * 
 * @example
 * ```tsx
 * <Heading level="1">Main Heading</Heading>
 * <Paragraph>Body text content</Paragraph>
 * <Lead>Larger introductory paragraph</Lead>
 * ```
 */

import React from 'react';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Heading level (1-6) */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Heading content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Heading component with consistent typography
 */
export const Heading: React.FC<HeadingProps> = ({
  level = 1,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-heading font-semibold tracking-tight text-foreground';
  
  const levelStyles = {
    1: 'text-4xl sm:text-5xl lg:text-6xl',
    2: 'text-3xl sm:text-4xl lg:text-5xl',
    3: 'text-2xl sm:text-3xl lg:text-4xl',
    4: 'text-xl sm:text-2xl lg:text-3xl',
    5: 'text-lg sm:text-xl lg:text-2xl',
    6: 'text-base sm:text-lg lg:text-xl',
  };

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return React.createElement(
    Tag,
    {
      className: `${baseStyles} ${levelStyles[level]} ${className}`,
      ...props,
    },
    children
  );
};

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Paragraph content */
  children: React.ReactNode;
  /** Size variant */
  size?: 'sm' | 'base' | 'lg';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Paragraph component with consistent typography
 */
export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  size = 'base',
  className = '',
  ...props
}) => {
  const sizeStyles = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
  };

  return (
    <p
      className={`text-foreground-secondary leading-relaxed ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

export interface LeadProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Lead text content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Lead paragraph component for introductory text
 */
export const Lead: React.FC<LeadProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <p
      className={`text-xl text-foreground-secondary leading-relaxed ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

const Typography = { Heading, Paragraph, Lead };

export default Typography;
