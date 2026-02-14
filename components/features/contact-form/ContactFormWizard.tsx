/**
 * Multi-Step Contact Form Wizard
 * 
 * A comprehensive contact/quote form with 5 steps:
 * 1. Project Type Selection
 * 2. Features & Requirements
 * 3. Project Details
 * 4. Contact Information
 * 5. Review & Submit
 * 
 * Features:
 * - Step-by-step navigation with progress indicator
 * - Dynamic feature checklists based on project type
 * - Form validation with clear error messages
 * - Review step before submission
 * - Integration with Supabase backend
 * 
 * [EXTENSIBILITY]: To add new steps or fields:
 * 1. Update ContactFormData type in types/form.ts
 * 2. Update formConfig.ts with new options
 * 3. Add step component in renderStep() method
 * 4. Update validation in formValidation.ts
 * 
 * @module components/features/contact-form/ContactFormWizard
 */

'use client';

import React, { useState } from 'react';
import { RadioGroup } from './RadioGroup';
import { CheckboxGroup } from './CheckboxGroup';
import type { ContactFormData, SubmissionResponse } from '@/types/form';
import {
  PROJECT_TYPES,
  FEATURES_BY_PROJECT_TYPE,
  BUDGET_OPTIONS,
  TIMELINE_OPTIONS,
  CONTACT_TIME_OPTIONS,
  FORM_STEPS,
} from '@/lib/formConfig';
import { validateStep, isFormComplete } from '@/lib/formValidation';

/**
 * Initial form state
 */
const initialFormData: Partial<ContactFormData> = {
  projectType: '',
  selectedFeatures: [],
  additionalFeatures: '',
  budget: '',
  timeline: '',
  projectBrief: '',
  companyName: '',
  companyWebsite: '',
  referenceLinks: '',
  fullName: '',
  email: '',
  phone: '',
  bestTimeToContact: '',
};

export const ContactFormWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<ContactFormData>>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  /**
   * Update form field value
   */
  const updateField = (field: keyof ContactFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  /**
   * Validate current step before proceeding
   */
  const validateCurrentStep = (): boolean => {
    const stepErrors = validateStep(currentStep, formData);
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  /**
   * Go to next step
   */
  const handleNext = () => {
    if (validateCurrentStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, FORM_STEPS.length));
    }
  };

  /**
   * Go to previous step
   */
  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    setErrors({});
  };

  /**
   * Submit form to API
   */
  const handleSubmit = async () => {
    if (!isFormComplete(formData as ContactFormData)) {
      setSubmitError('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
        }),
      });

      const result: SubmissionResponse = await response.json();

      if (result.success) {
        setSubmitSuccess(true);
      } else {
        setSubmitError(result.error || 'Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Get features for current project type
   */
  const getFeatures = () => {
    if (!formData.projectType) return [];
    return FEATURES_BY_PROJECT_TYPE[formData.projectType] || [];
  };

  /**
   * Render Step 1: Project Type
   */
  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          What type of project do you need?
        </h3>
        <p className="text-sm text-foreground-secondary">
          Select the option that best describes your project needs
        </p>
      </div>
      <RadioGroup
        name="projectType"
        options={PROJECT_TYPES}
        value={formData.projectType || ''}
        onChange={(value) => updateField('projectType', value)}
        error={errors.projectType}
        required
      />
    </div>
  );

  /**
   * Render Step 2: Features & Requirements
   */
  const renderStep2 = () => {
    const features = getFeatures();

    return (
      <div className="space-y-6">
        <div>
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            What features do you need?
          </h3>
          <p className="text-sm text-foreground-secondary">
            Select all features that apply to your project
          </p>
        </div>

        {features.length > 0 ? (
          <CheckboxGroup
            options={features}
            selectedValues={formData.selectedFeatures || []}
            onChange={(values) => updateField('selectedFeatures', values)}
            error={errors.selectedFeatures}
          />
        ) : (
          <p className="text-foreground-secondary">
            Please select a project type in Step 1 to see available features.
          </p>
        )}

        <div>
          <label
            htmlFor="additionalFeatures"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Additional Features or Requirements
          </label>
          <textarea
            id="additionalFeatures"
            value={formData.additionalFeatures || ''}
            onChange={(e) => updateField('additionalFeatures', e.target.value)}
            rows={4}
            className="w-full rounded-lg border border-input-border bg-input px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Describe any additional features or specific requirements..."
          />
        </div>
      </div>
    );
  };

  /**
   * Render Step 3: Project Details
   */
  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          Tell us about your project
        </h3>
        <p className="text-sm text-foreground-secondary">
          Help us understand your project better
        </p>
      </div>

      {/* Budget */}
      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">
          Estimated Budget (AUD) *
        </label>
        <RadioGroup
          name="budget"
          options={BUDGET_OPTIONS}
          value={formData.budget || ''}
          onChange={(value) => updateField('budget', value)}
          error={errors.budget}
          required
        />
      </div>

      {/* Timeline */}
      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">
          Project Timeline *
        </label>
        <RadioGroup
          name="timeline"
          options={TIMELINE_OPTIONS}
          value={formData.timeline || ''}
          onChange={(value) => updateField('timeline', value)}
          error={errors.timeline}
          required
        />
      </div>

      {/* Project Brief */}
      <div>
        <label
          htmlFor="projectBrief"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          Project Description *
        </label>
        <textarea
          id="projectBrief"
          value={formData.projectBrief || ''}
          onChange={(e) => updateField('projectBrief', e.target.value)}
          rows={6}
          required
          className={`w-full rounded-lg border ${
            errors.projectBrief ? 'border-red-500' : 'border-input-border'
          } bg-input px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20`}
          placeholder="Describe your project goals, target audience, key features, and any specific requirements..."
        />
        {errors.projectBrief && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.projectBrief}
          </p>
        )}
      </div>

      {/* Company Name */}
      <div>
        <label
          htmlFor="companyName"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          Company or Organization Name
        </label>
        <input
          type="text"
          id="companyName"
          value={formData.companyName || ''}
          onChange={(e) => updateField('companyName', e.target.value)}
          className="w-full rounded-lg border border-input-border bg-input px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          placeholder="Your company name"
        />
      </div>

      {/* Company Website */}
      <div>
        <label
          htmlFor="companyWebsite"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          Current Website (if any)
        </label>
        <input
          type="url"
          id="companyWebsite"
          value={formData.companyWebsite || ''}
          onChange={(e) => updateField('companyWebsite', e.target.value)}
          className={`w-full rounded-lg border ${
            errors.companyWebsite ? 'border-red-500' : 'border-input-border'
          } bg-input px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20`}
          placeholder="https://example.com"
        />
        {errors.companyWebsite && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.companyWebsite}
          </p>
        )}
      </div>

      {/* Reference Links */}
      <div>
        <label
          htmlFor="referenceLinks"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          Reference Links or Inspiration
        </label>
        <textarea
          id="referenceLinks"
          value={formData.referenceLinks || ''}
          onChange={(e) => updateField('referenceLinks', e.target.value)}
          rows={3}
          className="w-full rounded-lg border border-input-border bg-input px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          placeholder="Links to websites you like or want to use as inspiration (one per line)"
        />
      </div>
    </div>
  );

  /**
   * Render Step 4: Contact Information
   */
  const renderStep4 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          How can we reach you?
        </h3>
        <p className="text-sm text-foreground-secondary">
          We'll use this information to send you a quote and discuss your project
        </p>
      </div>

      {/* Full Name */}
      <div>
        <label
          htmlFor="fullName"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          Full Name *
        </label>
        <input
          type="text"
          id="fullName"
          value={formData.fullName || ''}
          onChange={(e) => updateField('fullName', e.target.value)}
          required
          className={`w-full rounded-lg border ${
            errors.fullName ? 'border-red-500' : 'border-input-border'
          } bg-input px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20`}
          placeholder="John Doe"
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.fullName}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          value={formData.email || ''}
          onChange={(e) => updateField('email', e.target.value)}
          required
          className={`w-full rounded-lg border ${
            errors.email ? 'border-red-500' : 'border-input-border'
          } bg-input px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20`}
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone || ''}
          onChange={(e) => updateField('phone', e.target.value)}
          className={`w-full rounded-lg border ${
            errors.phone ? 'border-red-500' : 'border-input-border'
          } bg-input px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20`}
          placeholder="+61 400 000 000"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Best Time to Contact */}
      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">
          Best Time to Contact *
        </label>
        <RadioGroup
          name="bestTimeToContact"
          options={CONTACT_TIME_OPTIONS}
          value={formData.bestTimeToContact || ''}
          onChange={(value) => updateField('bestTimeToContact', value)}
          error={errors.bestTimeToContact}
          required
        />
      </div>
    </div>
  );

  /**
   * Render Step 5: Review & Submit
   */
  const renderStep5 = () => {
    const projectTypeLabel = PROJECT_TYPES.find(
      (pt) => pt.value === formData.projectType
    )?.label;
    const budgetLabel = BUDGET_OPTIONS.find(
      (b) => b.value === formData.budget
    )?.label;
    const timelineLabel = TIMELINE_OPTIONS.find(
      (t) => t.value === formData.timeline
    )?.label;
    const contactTimeLabel = CONTACT_TIME_OPTIONS.find(
      (ct) => ct.value === formData.bestTimeToContact
    )?.label;

    return (
      <div className="space-y-6">
        <div>
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            Review Your Information
          </h3>
          <p className="text-sm text-foreground-secondary">
            Please review your information before submitting
          </p>
        </div>

        <div className="space-y-4 rounded-lg border border-input-border bg-input p-6">
          {/* Project Type */}
          <div>
            <h4 className="text-sm font-semibold text-foreground-secondary">
              Project Type
            </h4>
            <p className="mt-1 text-foreground">{projectTypeLabel}</p>
          </div>

          {/* Selected Features */}
          {formData.selectedFeatures && formData.selectedFeatures.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-foreground-secondary">
                Selected Features
              </h4>
              <ul className="mt-1 list-inside list-disc text-foreground">
                {formData.selectedFeatures.map((featureId) => {
                  const feature = getFeatures().find((f) => f.id === featureId);
                  return feature ? (
                    <li key={featureId}>{feature.label}</li>
                  ) : null;
                })}
              </ul>
            </div>
          )}

          {/* Budget & Timeline */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h4 className="text-sm font-semibold text-foreground-secondary">
                Budget
              </h4>
              <p className="mt-1 text-foreground">{budgetLabel}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground-secondary">
                Timeline
              </h4>
              <p className="mt-1 text-foreground">{timelineLabel}</p>
            </div>
          </div>

          {/* Project Brief */}
          <div>
            <h4 className="text-sm font-semibold text-foreground-secondary">
              Project Description
            </h4>
            <p className="mt-1 text-foreground">{formData.projectBrief}</p>
          </div>

          {/* Company Info */}
          {(formData.companyName || formData.companyWebsite) && (
            <div>
              <h4 className="text-sm font-semibold text-foreground-secondary">
                Company Information
              </h4>
              {formData.companyName && (
                <p className="mt-1 text-foreground">{formData.companyName}</p>
              )}
              {formData.companyWebsite && (
                <p className="mt-1 text-foreground">{formData.companyWebsite}</p>
              )}
            </div>
          )}

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-foreground-secondary">
              Contact Information
            </h4>
            <p className="mt-1 text-foreground">{formData.fullName}</p>
            <p className="text-foreground">{formData.email}</p>
            {formData.phone && <p className="text-foreground">{formData.phone}</p>}
            <p className="text-foreground">Best time: {contactTimeLabel}</p>
          </div>
        </div>

        {submitError && (
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <p className="text-sm text-red-600 dark:text-red-400">
              {submitError}
            </p>
          </div>
        )}
      </div>
    );
  };

  /**
   * Render current step content
   */
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      case 5:
        return renderStep5();
      default:
        return null;
    }
  };

  /**
   * Success screen after submission
   */
  if (submitSuccess) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center dark:border-green-800 dark:bg-green-900/20">
        <div className="mb-4 text-4xl">✓</div>
        <h3 className="mb-2 text-2xl font-semibold text-green-900 dark:text-green-100">
          Thank You!
        </h3>
        <p className="mb-4 text-green-800 dark:text-green-200">
          Your project inquiry has been successfully submitted.
        </p>
        <p className="text-sm text-green-700 dark:text-green-300">
          We'll review your information and get back to you within 24 hours with a
          detailed quote and next steps.
        </p>
        <button
          onClick={() => {
            setSubmitSuccess(false);
            setFormData(initialFormData);
            setCurrentStep(1);
          }}
          className="mt-6 rounded-lg bg-green-600 px-6 py-2 text-white transition-colors hover:bg-green-700"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {FORM_STEPS.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold transition-colors ${
                    currentStep === step.id
                      ? 'border-primary bg-primary text-white'
                      : currentStep > step.id
                      ? 'border-green-500 bg-green-500 text-white'
                      : 'border-gray-300 bg-white text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400'
                  }`}
                >
                  {currentStep > step.id ? '✓' : step.id}
                </div>
                <div className="mt-2 hidden text-xs sm:block">
                  <div
                    className={`font-medium ${
                      currentStep === step.id
                        ? 'text-primary'
                        : 'text-foreground-secondary'
                    }`}
                  >
                    {step.title}
                  </div>
                </div>
              </div>
              {index < FORM_STEPS.length - 1 && (
                <div
                  className={`h-0.5 flex-1 transition-colors ${
                    currentStep > step.id
                      ? 'bg-green-500'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="mb-8 min-h-[400px]">{renderStep()}</div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={handlePrevious}
          disabled={currentStep === 1}
          className="rounded-lg border border-input-border bg-input px-6 py-2 font-medium text-foreground transition-colors hover:bg-input/80 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Previous
        </button>

        <div className="text-sm text-foreground-secondary">
          Step {currentStep} of {FORM_STEPS.length}
        </div>

        {currentStep < FORM_STEPS.length ? (
          <button
            type="button"
            onClick={handleNext}
            className="rounded-lg bg-primary px-6 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Next
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="rounded-lg bg-primary px-6 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
          </button>
        )}
      </div>
    </div>
  );
};
