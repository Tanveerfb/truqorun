/**
 * ScrollProgress Component
 *
 * A thin progress bar at the top of the page that shows
 * how far the user has scrolled through the content.
 *
 * @example
 * ```tsx
 * <ScrollProgress />
 * ```
 */

"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export interface ScrollProgressProps {
  /** Height of the progress bar in pixels */
  height?: number;
  /** Additional CSS classes */
  className?: string;
}

/**
 * ScrollProgress indicator component
 */
export const ScrollProgress: React.FC<ScrollProgressProps> = ({
  height = 3,
  className = "",
}) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 z-100 origin-left bg-primary ${className}`}
      style={{
        scaleX,
        height,
      }}
    />
  );
};

export default ScrollProgress;
