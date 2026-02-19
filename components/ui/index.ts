/**
 * UI Components Barrel Export
 *
 * Centralized export for all UI components in the design system.
 * Import from this file for cleaner imports throughout the application.
 *
 * @example
 * ```tsx
 * import { Button, Card, Container } from '@/components/ui';
 * ```
 */

export { Button } from "./Button";
export type { ButtonProps } from "./Button";

export { Card } from "./Card";
export type { CardProps } from "./Card";

export { Container } from "./Container";
export type { ContainerProps } from "./Container";

export { Heading, Paragraph, Lead } from "./Typography";
export type { HeadingProps, ParagraphProps, LeadProps } from "./Typography";

export { ProjectCard } from "./ProjectCard";
export type { ProjectCardProps } from "./ProjectCard";

export { Badge } from "./Badge";
export type { BadgeProps } from "./Badge";

export { Tooltip } from "./Tooltip";
export type { TooltipProps } from "./Tooltip";

export { Accordion } from "./Accordion";
export type { AccordionProps, AccordionItem } from "./Accordion";

export { BackToTop } from "./BackToTop";
export type { BackToTopProps } from "./BackToTop";

export { ScrollProgress } from "./ScrollProgress";
export type { ScrollProgressProps } from "./ScrollProgress";

export { Skeleton } from "./Skeleton";
export type { SkeletonProps } from "./Skeleton";

export { StatsCounter } from "./StatsCounter";
export type { StatsCounterProps } from "./StatsCounter";

export { TestimonialCarousel } from "./TestimonialCarousel";
export type {
  TestimonialCarouselProps,
  Testimonial,
} from "./TestimonialCarousel";

export { AnimatedSection } from "./AnimatedSection";
export type { AnimatedSectionProps } from "./AnimatedSection";

export { Marquee } from "./Marquee";
export type { MarqueeProps } from "./Marquee";
