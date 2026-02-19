/**
 * AnimatedSection Component
 *
 * A wrapper that applies scroll-triggered Framer Motion animations
 * to any content section. Provides common animation presets.
 *
 * @example
 * ```tsx
 * <AnimatedSection animation="fadeUp">
 *   <h2>This fades up on scroll</h2>
 * </AnimatedSection>
 *
 * <AnimatedSection animation="slideLeft" delay={0.2}>
 *   <Card>Slides in from left</Card>
 * </AnimatedSection>
 * ```
 */

"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

export type AnimationType =
  | "fadeUp"
  | "fadeDown"
  | "fadeLeft"
  | "fadeRight"
  | "scaleUp"
  | "slideLeft"
  | "slideRight";

export interface AnimatedSectionProps {
  /** Animation preset to apply */
  animation?: AnimationType;
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Duration of the animation (seconds) */
  duration?: number;
  /** Whether to only animate once */
  once?: boolean;
  /** Content to animate */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

const animationVariants: Record<AnimationType, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  },
};

/**
 * AnimatedSection component with scroll-triggered animations
 */
export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  animation = "fadeUp",
  delay = 0,
  duration = 0.6,
  once = true,
  children,
  className = "",
}) => {
  return (
    <motion.div
      variants={animationVariants[animation]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
