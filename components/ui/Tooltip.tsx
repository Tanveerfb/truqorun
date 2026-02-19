/**
 * Tooltip Component
 *
 * A lightweight tooltip that shows contextual help text on hover.
 * Pure CSS implementation — no external library required.
 *
 * @example
 * ```tsx
 * <Tooltip content="This is helpful info">
 *   <button>Hover me</button>
 * </Tooltip>
 * ```
 */

"use client";

import React, { useState, useRef, useCallback } from "react";

export interface TooltipProps {
  /** The content to display in the tooltip */
  content: string;
  /** Position of the tooltip relative to the trigger */
  position?: "top" | "bottom" | "left" | "right";
  /** Delay before showing tooltip in ms */
  delay?: number;
  /** The element that triggers the tooltip */
  children: React.ReactNode;
  /** Additional CSS classes for the wrapper */
  className?: string;
}

/**
 * Tooltip component for contextual help text
 */
export const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = "top",
  delay = 200,
  children,
  className = "",
}) => {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = useCallback(() => {
    timeoutRef.current = setTimeout(() => setVisible(true), delay);
  }, [delay]);

  const hide = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setVisible(false);
  }, []);

  const positionStyles = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const arrowStyles = {
    top: "top-full left-1/2 -translate-x-1/2 border-t-card border-x-transparent border-b-transparent border-4",
    bottom:
      "bottom-full left-1/2 -translate-x-1/2 border-b-card border-x-transparent border-t-transparent border-4",
    left: "left-full top-1/2 -translate-y-1/2 border-l-card border-y-transparent border-r-transparent border-4",
    right:
      "right-full top-1/2 -translate-y-1/2 border-r-card border-y-transparent border-l-transparent border-4",
  };

  return (
    <div
      className={`relative inline-flex ${className}`}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}
      {visible && content && (
        <div
          className={`absolute z-50 ${positionStyles[position]} pointer-events-none`}
          role="tooltip"
        >
          <div className="relative rounded-lg bg-card px-3 py-2 text-xs font-medium text-foreground shadow-lg border border-card-border whitespace-nowrap">
            {content}
            <div className={`absolute ${arrowStyles[position]}`} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
