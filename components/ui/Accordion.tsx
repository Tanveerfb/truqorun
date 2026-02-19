/**
 * Accordion Component
 *
 * A collapsible content panel for displaying FAQ items, feature lists,
 * or any content that benefits from progressive disclosure.
 *
 * @example
 * ```tsx
 * <Accordion
 *   items={[
 *     { title: "Question 1", content: "Answer 1" },
 *     { title: "Question 2", content: "Answer 2" },
 *   ]}
 * />
 * ```
 */

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface AccordionItem {
  /** Title shown in the accordion header */
  title: string;
  /** Content shown when expanded — can be a string or JSX */
  content: React.ReactNode;
}

export interface AccordionProps {
  /** Array of accordion items */
  items: AccordionItem[];
  /** Whether multiple items can be open at once */
  allowMultiple?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Accordion component for collapsible content sections
 */
export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className = "",
}) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        if (!allowMultiple) {
          next.clear();
        }
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openItems.has(index);

        return (
          <div
            key={index}
            className="rounded-lg border border-border bg-card overflow-hidden transition-shadow hover:shadow-sm"
          >
            <button
              onClick={() => toggleItem(index)}
              className="flex w-full items-center justify-between px-6 py-4 text-left text-foreground font-medium transition-colors hover:bg-background-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${index}`}
            >
              <span className="pr-4">{item.title}</span>
              <motion.svg
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="h-5 w-5 shrink-0 text-foreground-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`accordion-panel-${index}`}
                  role="region"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-sm text-foreground-secondary leading-relaxed">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
