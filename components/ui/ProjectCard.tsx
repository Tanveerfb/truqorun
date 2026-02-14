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

import React from "react";
import Link from "next/link";

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
  /** Person(s) who worked on the project */
  person?: string | string[];
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
  person,
  className = "",
}) => {
  // Check if the link is external
  const isExternal =
    href && (href.startsWith("http://") || href.startsWith("https://"));

  // Normalize person to array
  const contributors = person
    ? Array.isArray(person)
      ? person
      : [person]
    : [];

  const cardContent = (
    <>
      {/* [PLACEHOLDER DESIGN]: Image placeholder - replace with actual project images */}
      <div className="mb-4 h-48 rounded-lg bg-linear-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover rounded-lg"
          />
        ) : (
          <span className="text-sm text-foreground-muted">Project Preview</span>
        )}
      </div>

      {/* Project Info */}
      <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>
      <p className="mb-4 text-sm text-foreground-secondary">{description}</p>

      {/* Contributors */}
      {contributors.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-2">
          {contributors.map((contributor, index) => (
            <span
              key={index}
              className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent flex items-center gap-1"
            >
              <svg
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              {contributor}
            </span>
          ))}
        </div>
      )}

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

      {/* External link indicator */}
      {isExternal && (
        <div className="mt-4 flex items-center gap-1 text-xs text-primary">
          <span>Visit Site</span>
          <svg
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      )}
    </>
  );

  const cardClasses = `rounded-lg border border-card-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50 ${className}`;

  if (href) {
    // Use regular anchor tag for external links
    if (isExternal) {
      return (
        <a
          href={href}
          className={cardClasses}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${title} (opens in new tab)`}
        >
          {cardContent}
        </a>
      );
    }

    // Use Next.js Link for internal routes
    return (
      <Link href={href} className={cardClasses}>
        {cardContent}
      </Link>
    );
  }

  return <div className={cardClasses}>{cardContent}</div>;
};

export default ProjectCard;
