/**
 * StatsCounter Component
 *
 * An animated number counter that counts up from 0 to the target value
 * when it scrolls into view. Perfect for statistics sections.
 *
 * @example
 * ```tsx
 * <StatsCounter value={50} suffix="+" label="Projects Completed" />
 * <StatsCounter value={24} suffix="h" label="Response Time" />
 * <StatsCounter value={100} suffix="%" label="Client Satisfaction" />
 * ```
 */

"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export interface StatsCounterProps {
  /** Target number value */
  value: number;
  /** Text to display after the number (e.g., "+", "%", "h") */
  suffix?: string;
  /** Text to display before the number (e.g., "$") */
  prefix?: string;
  /** Label text below the number */
  label: string;
  /** Duration of the counting animation in seconds */
  duration?: number;
  /** Additional CSS classes */
  className?: string;
}

/**
 * StatsCounter component with scroll-triggered count-up animation
 */
export const StatsCounter: React.FC<StatsCounterProps> = ({
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 2,
  className = "",
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;

    hasAnimated.current = true;
    const startTime = performance.now();
    const endValue = value;

    const animate = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * endValue);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={`text-center ${className}`}
    >
      <div className="mb-2 text-4xl font-bold text-primary sm:text-5xl">
        {prefix}
        {count}
        {suffix}
      </div>
      <p className="text-sm text-foreground-secondary">{label}</p>
    </motion.div>
  );
};

export default StatsCounter;
