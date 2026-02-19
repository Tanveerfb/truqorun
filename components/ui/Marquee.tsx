/**
 * Marquee Component
 *
 * An infinite horizontal scrolling ticker. Duplicates its children so the
 * content loops seamlessly. Ideal for client logos, tech-stack icons, and
 * partner badges.
 *
 * @example
 * ```tsx
 * <Marquee speed={30}>
 *   <Icon1 /> <Icon2 /> <Icon3 />
 * </Marquee>
 * ```
 */

"use client";

import React from "react";

export interface MarqueeProps {
  /** Content to scroll (will be duplicated for seamless loop) */
  children: React.ReactNode;
  /** Scroll speed in seconds for one full cycle (lower = faster) */
  speed?: number;
  /** Scroll direction */
  direction?: "left" | "right";
  /** Pause on hover */
  pauseOnHover?: boolean;
  /** Additional wrapper classes */
  className?: string;
}

/**
 * Infinite horizontal scrolling marquee
 */
export const Marquee: React.FC<MarqueeProps> = ({
  children,
  speed = 35,
  direction = "left",
  pauseOnHover = true,
  className = "",
}) => {
  const animationDirection = direction === "left" ? "normal" : "reverse";

  return (
    <div
      className={`overflow-hidden relative ${className}`}
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
      }}
    >
      <div
        className={`flex w-max gap-12 ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        style={{
          animation: `marqueeScroll ${speed}s linear infinite`,
          animationDirection,
        }}
      >
        {/* Original set */}
        <div className="flex shrink-0 items-center gap-12">{children}</div>
        {/* Duplicate for seamless loop */}
        <div className="flex shrink-0 items-center gap-12" aria-hidden>
          {children}
        </div>
      </div>

      {/* Inline keyframes — avoids needing a global stylesheet entry */}
      <style jsx>{`
        @keyframes marqueeScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
