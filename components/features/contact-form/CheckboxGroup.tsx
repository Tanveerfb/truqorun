/**
 * Checkbox Group Component
 * 
 * A reusable checkbox group component for selecting multiple options.
 * Used in the contact form for feature selection.
 * 
 * @module components/features/contact-form/CheckboxGroup
 */

'use client';

import React from 'react';

export interface CheckboxOption {
  id: string;
  label: string;
  description?: string;
}

export interface CheckboxGroupProps {
  options: CheckboxOption[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  error?: string;
}

/**
 * CheckboxGroup component for selecting multiple options
 */
export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  options,
  selectedValues,
  onChange,
  error,
}) => {
  const handleToggle = (optionId: string) => {
    if (selectedValues.includes(optionId)) {
      onChange(selectedValues.filter((id) => id !== optionId));
    } else {
      onChange([...selectedValues, optionId]);
    }
  };

  return (
    <div className="space-y-3" role="group" aria-label="Feature selection">
      {options.map((option) => (
        <label
          key={option.id}
          className={`
            flex items-start gap-3 rounded-lg border p-4 cursor-pointer transition-all
            ${
              selectedValues.includes(option.id)
                ? 'border-primary bg-primary/5'
                : 'border-input-border bg-input hover:border-primary/50'
            }
            ${error ? 'border-red-500' : ''}
          `}
        >
          <input
            type="checkbox"
            checked={selectedValues.includes(option.id)}
            onChange={() => handleToggle(option.id)}
            className="mt-1 h-4 w-4 rounded text-primary focus:ring-primary"
            aria-describedby={option.description ? `checkbox-${option.id}-description` : undefined}
          />
          <div className="flex-1">
            <div className="font-medium text-foreground">{option.label}</div>
            {option.description && (
              <div 
                id={`checkbox-${option.id}-description`}
                className="mt-1 text-sm text-foreground-secondary"
              >
                {option.description}
              </div>
            )}
          </div>
        </label>
      ))}
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400" role="alert">{error}</p>
      )}
    </div>
  );
};
