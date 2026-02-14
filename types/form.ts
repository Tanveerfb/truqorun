/**
 * Contact/Quote Form Type Definitions
 * 
 * This file contains all type definitions for the multi-step contact form.
 * It's designed to be easily extensible for future project types and features.
 * 
 * @module types/form
 */

/**
 * Project type options for Step 1
 * Each type triggers different feature checklists in Step 2
 */
export type ProjectType =
  | 'ecommerce'
  | 'landing-page'
  | 'cms'
  | 'portfolio'
  | 'custom'
  | 'not-sure';

/**
 * Budget ranges in AUD for Step 3
 */
export type BudgetRange =
  | '1k-2k'
  | '2k-4k'
  | '4k-7k'
  | '7k+'
  | 'not-sure';

/**
 * Timeline options for project completion
 */
export type Timeline =
  | 'asap'
  | '1-2-weeks'
  | '2-4-weeks'
  | '1-2-months'
  | '2-3-months'
  | 'flexible';

/**
 * Best time to contact the client
 */
export type ContactTime =
  | 'morning'
  | 'afternoon'
  | 'evening'
  | 'anytime';

/**
 * Features/requirements checklist items
 * Dynamically shown based on project type selection
 */
export interface FeatureOption {
  id: string;
  label: string;
  description?: string;
}

/**
 * Form data structure for each step
 */
export interface ContactFormData {
  // Step 1: Project Type
  projectType: ProjectType | '';
  
  // Step 2: Features/Requirements
  selectedFeatures: string[];
  additionalFeatures: string;
  
  // Step 3: Project Details
  budget: BudgetRange | '';
  timeline: Timeline | '';
  projectBrief: string;
  companyName: string;
  companyWebsite: string;
  referenceLinks: string;
  
  // Step 4: Contact Information
  fullName: string;
  email: string;
  phone: string;
  bestTimeToContact: ContactTime | '';
  
  // Metadata
  createdAt?: string;
  submittedAt?: string;
}

/**
 * Form validation errors
 */
export interface FormErrors {
  [key: string]: string;
}

/**
 * Form step definition for wizard navigation
 */
export interface FormStep {
  id: number;
  title: string;
  description: string;
  fields: (keyof ContactFormData)[];
}

/**
 * Submission response from API
 */
export interface SubmissionResponse {
  success: boolean;
  message: string;
  submissionId?: string;
  error?: string;
}

/**
 * Database record type for form_submissions table
 */
export interface FormSubmission extends ContactFormData {
  id: string;
  status: 'new' | 'contacted' | 'in-progress' | 'completed' | 'archived';
  notes?: string;
  submittedAt: string;
  updatedAt: string;
}
