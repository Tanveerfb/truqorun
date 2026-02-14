/**
 * Submission Card Component
 * 
 * Displays a single form submission with expandable details.
 * 
 * [EXTENSIBILITY]: Easy to add more fields or actions
 * [PLACEHOLDER]: Add status update functionality, notes editor
 * 
 * @module components/features/dashboard/SubmissionCard
 */

'use client';

import React, { useState } from 'react';
import type { FormSubmission } from '@/types/form';
import { PROJECT_TYPES, BUDGET_OPTIONS, TIMELINE_OPTIONS } from '@/lib/formConfig';

interface SubmissionCardProps {
  submission: FormSubmission;
}

export const SubmissionCard: React.FC<SubmissionCardProps> = ({ submission }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const projectTypeLabel = PROJECT_TYPES.find(
    (pt) => pt.value === submission.projectType
  )?.label || submission.projectType;

  const budgetLabel = BUDGET_OPTIONS.find(
    (b) => b.value === submission.budget
  )?.label || submission.budget;

  const timelineLabel = TIMELINE_OPTIONS.find(
    (t) => t.value === submission.timeline
  )?.label || submission.timeline;

  const statusColors = {
    new: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    contacted: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    'in-progress': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    completed: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    archived: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300',
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="rounded-lg border border-input-border bg-white dark:bg-gray-900">
      {/* Card Header */}
      <div
        className="cursor-pointer p-6 hover:bg-gray-50 dark:hover:bg-gray-800/50"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold text-foreground">
                {submission.fullName}
              </h3>
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  statusColors[submission.status]
                }`}
              >
                {submission.status.replace('-', ' ').toUpperCase()}
              </span>
            </div>
            <div className="mt-2 space-y-1 text-sm text-foreground-secondary">
              <p>{submission.email}</p>
              {submission.phone && <p>{submission.phone}</p>}
              <p className="font-medium">{projectTypeLabel}</p>
            </div>
          </div>

          <div className="text-right text-sm text-foreground-secondary">
            <p>{formatDate(submission.submittedAt)}</p>
            <p className="mt-2">
              {budgetLabel} • {timelineLabel}
            </p>
          </div>
        </div>

        {/* Expand/Collapse Indicator */}
        <div className="mt-4 flex items-center justify-center">
          <button className="text-sm text-primary hover:text-primary/80">
            {isExpanded ? '▲ Show Less' : '▼ Show More'}
          </button>
        </div>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="border-t border-input-border p-6 space-y-6">
          {/* Project Details */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">
              Project Description
            </h4>
            <p className="text-sm text-foreground-secondary whitespace-pre-wrap">
              {submission.projectBrief}
            </p>
          </div>

          {/* Selected Features */}
          {submission.selectedFeatures.length > 0 && (
            <div>
              <h4 className="mb-3 text-sm font-semibold text-foreground">
                Selected Features
              </h4>
              <ul className="grid gap-2 sm:grid-cols-2">
                {submission.selectedFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-foreground-secondary"
                  >
                    <span className="text-primary">✓</span>
                    {feature.replace(/-/g, ' ')}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Additional Features */}
          {submission.additionalFeatures && (
            <div>
              <h4 className="mb-3 text-sm font-semibold text-foreground">
                Additional Requirements
              </h4>
              <p className="text-sm text-foreground-secondary whitespace-pre-wrap">
                {submission.additionalFeatures}
              </p>
            </div>
          )}

          {/* Company Information */}
          {(submission.companyName || submission.companyWebsite) && (
            <div>
              <h4 className="mb-3 text-sm font-semibold text-foreground">
                Company Information
              </h4>
              <div className="space-y-1 text-sm text-foreground-secondary">
                {submission.companyName && (
                  <p>
                    <span className="font-medium">Company:</span>{' '}
                    {submission.companyName}
                  </p>
                )}
                {submission.companyWebsite && (
                  <p>
                    <span className="font-medium">Website:</span>{' '}
                    <a
                      href={submission.companyWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {submission.companyWebsite}
                    </a>
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Reference Links */}
          {submission.referenceLinks && (
            <div>
              <h4 className="mb-3 text-sm font-semibold text-foreground">
                Reference Links
              </h4>
              <p className="text-sm text-foreground-secondary whitespace-pre-wrap">
                {submission.referenceLinks}
              </p>
            </div>
          )}

          {/* Contact Preferences */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">
              Contact Preferences
            </h4>
            <p className="text-sm text-foreground-secondary">
              Best time to contact:{' '}
              <span className="font-medium">
                {submission.bestTimeToContact.replace('-', ' ')}
              </span>
            </p>
          </div>

          {/* Notes */}
          {submission.notes && (
            <div>
              <h4 className="mb-3 text-sm font-semibold text-foreground">
                Internal Notes
              </h4>
              <p className="text-sm text-foreground-secondary whitespace-pre-wrap">
                {submission.notes}
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-3 border-t border-input-border pt-4">
            {/* [PLACEHOLDER]: Add action buttons */}
            <a
              href={`mailto:${submission.email}`}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Send Email
            </a>
            {submission.phone && (
              <a
                href={`tel:${submission.phone}`}
                className="rounded-lg border border-input-border bg-input px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-input/80"
              >
                Call
              </a>
            )}
            {/* [TODO]: Add status update button, notes editor */}
          </div>
        </div>
      )}
    </div>
  );
};
