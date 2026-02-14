/**
 * ProjectCard Component
 * 
 * Card component specifically designed for portfolio projects.
 * Displays project image, title, description, and technologies.
 * 
 * @example
 * ```tsx
 * <ProjectCard
 *   title="E-commerce Platform"
 *   description="Modern online shopping experience"
 *   technologies={['Next.js', 'TypeScript', 'Tailwind']}
 *   imageUrl="/projects/ecommerce.jpg"
 *   href="/portfolio/ecommerce"
 * />
 * ```
 * 
 * [PLACEHOLDER]: Add image support and hover effects
 */

import React from 'react';
import Link from 'next/link';

export interface ProjectCardProps {
  /** Project title */
  title: string;
  /** Project description */
  description: string;
  /** Array of technology tags */
  technologies?: string[];
  /** Project image URL */
  imageUrl?: string;
  /** Link to project details */
  href?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * ProjectCard component for displaying portfolio projects
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies = [],
  imageUrl,
  href,
  className = '',
}) => {
  const cardContent = (
    <>
      {/* [PLACEHOLDER DESIGN]: Image placeholder - replace with actual project images */}
      <div className="mb-4 h-48 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imageUrl} alt={title} className="h-full w-full object-cover rounded-lg" />
        ) : (
          <span className="text-sm text-foreground-muted">Project Image</span>
        )}
      </div>

      {/* Project Info */}
      <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>
      <p className="mb-4 text-sm text-foreground-secondary">{description}</p>

      {/* Technology Tags */}
      {technologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </>
  );

  const cardClasses = `rounded-lg border border-card-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50 ${className}`;

  if (href) {
    return (
      <Link href={href} className={cardClasses}>
        {cardContent}
      </Link>
    );
  }

  return <div className={cardClasses}>{cardContent}</div>;
};

export default ProjectCard;
