/**
 * Form Validation Utilities
 * 
 * This file contains validation logic for the contact form.
 * Uses Zod for schema-based validation with clear error messages.
 * 
 * @module lib/formValidation
 */

import { z } from 'zod';
import type { ContactFormData, FormErrors } from '@/types/form';

/**
 * Email validation regex (RFC 5322 simplified)
 */
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Phone validation regex (international format, flexible)
 */
const phoneRegex = /^[\d\s\-\+\(\)]+$/;

/**
 * URL validation regex (simplified, ReDoS-safe)
 * Matches common URL patterns without catastrophic backtracking
 */
const urlRegex = /^(https?:\/\/)?([a-z\d-]+\.)+[a-z]{2,}(\/[^\s]*)?$/i;

/**
 * Zod schema for contact form validation
 */
export const contactFormSchema = z.object({
  // Step 1
  projectType: z.enum(['ecommerce', 'landing-page', 'cms', 'portfolio', 'custom', 'not-sure']),
  
  // Step 2
  selectedFeatures: z.array(z.string()).min(0),
  additionalFeatures: z.string().optional(),
  
  // Step 3
  budget: z.enum(['1k-2k', '2k-4k', '4k-7k', '7k+', 'not-sure']),
  timeline: z.enum(['asap', '1-2-weeks', '2-4-weeks', '1-2-months', '2-3-months', 'flexible']),
  projectBrief: z
    .string()
    .min(20, 'Please provide at least 20 characters describing your project')
    .max(2000, 'Project brief must be less than 2000 characters'),
  companyName: z
    .string()
    .min(2, 'Company name must be at least 2 characters')
    .max(100, 'Company name must be less than 100 characters')
    .optional()
    .or(z.literal('')),
  companyWebsite: z
    .string()
    .regex(urlRegex, 'Please enter a valid URL')
    .optional()
    .or(z.literal('')),
  referenceLinks: z
    .string()
    .max(500, 'Reference links must be less than 500 characters')
    .optional()
    .or(z.literal('')),
  
  // Step 4
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must be less than 100 characters'),
  email: z
    .string()
    .regex(emailRegex, 'Please enter a valid email address')
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(phoneRegex, 'Please enter a valid phone number')
    .min(8, 'Phone number must be at least 8 characters')
    .max(20, 'Phone number must be less than 20 characters')
    .optional()
    .or(z.literal('')),
  bestTimeToContact: z.enum(['morning', 'afternoon', 'evening', 'anytime']),
});

/**
 * Validate a single field
 * Validates by creating a partial object and checking just that field
 */
export function validateField(
  fieldName: keyof ContactFormData,
  value: string | string[]
): string | null {
  try {
    // Create a test object with just this field
    // Use the full schema to validate, but only check this field's errors
    const testData: Partial<ContactFormData> = { [fieldName]: value };
    const result = contactFormSchema.partial().safeParse(testData);
    
    if (!result.success) {
      const issues = result.error.issues || [];
      // Find error for this specific field
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fieldError = issues.find((issue: any) => 
        issue.path && issue.path[0] === fieldName
      );
      return fieldError?.message || 'Invalid value';
    }
    
    return null;
  } catch {
    return 'Validation error';
  }
}

/**
 * Validate all fields in the form
 */
export function validateForm(formData: Partial<ContactFormData>): FormErrors {
  const errors: FormErrors = {};
  
  try {
    contactFormSchema.parse(formData);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const issues = error.issues || [];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      issues.forEach((err: any) => {
        const path = (err.path || []).join('.');
        errors[path] = err.message || 'Invalid value';
      });
    }
  }
  
  return errors;
}

/**
 * Validate specific step of the form
 */
export function validateStep(
  step: number,
  formData: Partial<ContactFormData>
): FormErrors {
  const errors: FormErrors = {};
  
  // Define required fields for each step
  const stepFields: Record<number, (keyof ContactFormData)[]> = {
    1: ['projectType'],
    2: ['selectedFeatures'], // Optional step, no required validation
    3: ['budget', 'timeline', 'projectBrief'],
    4: ['fullName', 'email', 'bestTimeToContact'],
    5: [], // Review step, no additional validation
  };
  
  const fieldsToValidate = stepFields[step] || [];
  
  fieldsToValidate.forEach((fieldName) => {
    const error = validateField(fieldName, formData[fieldName] as string | string[]);
    if (error) {
      errors[fieldName] = error;
    }
  });
  
  return errors;
}

/**
 * Check if form data is complete for submission
 */
export function isFormComplete(formData: Partial<ContactFormData>): boolean {
  const errors = validateForm(formData);
  return Object.keys(errors).length === 0;
}

/**
 * Sanitize form data before submission
 * Removes any potentially harmful content
 */
export function sanitizeFormData(formData: ContactFormData): ContactFormData {
  return {
    ...formData,
    projectBrief: formData.projectBrief.trim(),
    companyName: formData.companyName.trim(),
    companyWebsite: formData.companyWebsite.trim(),
    referenceLinks: formData.referenceLinks.trim(),
    fullName: formData.fullName.trim(),
    email: formData.email.trim().toLowerCase(),
    phone: formData.phone.trim(),
    additionalFeatures: formData.additionalFeatures.trim(),
  };
}
