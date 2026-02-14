/**
 * Radio Group Component
 *
 * A reusable radio button group component with support for descriptions.
 * Used in the contact form for project type selection.
 *
 * @module components/features/contact-form/RadioGroup
 */

"use client";

import React from "react";

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
}

export interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
}

/**
 * RadioGroup component for selecting a single option
 */
export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  value,
  onChange,
  error,
  required = false,
}) => {
  return (
    <div className="space-y-3" role="radiogroup" aria-required={required}>
      {options.map((option) => (
        <label
          key={option.value}
          className={`
            flex items-start gap-3 rounded-lg border p-4 cursor-pointer transition-all
            ${
              value === option.value
                ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                : "border-input-border bg-input hover:border-primary/50"
            }
            ${error ? "border-red-500" : ""}
          `}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={(e) => onChange(e.target.value)}
            required={required}
            className="mt-1 h-4 w-4 text-primary focus:ring-primary"
            aria-describedby={
              option.description
                ? `${name}-${option.value}-description`
                : undefined
            }
          />
          <div className="flex-1">
            <div className="font-medium text-foreground">{option.label}</div>
            {option.description && (
              <div
                id={`${name}-${option.value}-description`}
                className="mt-1 text-sm text-foreground-secondary"
              >
                {option.description}
              </div>
            )}
          </div>
        </label>
      ))}
      {error && (
        <p className="text-sm text-danger" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
