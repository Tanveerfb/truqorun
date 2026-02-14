/**
 * Submission Modal Component
 *
 * Modal overlay for displaying full submission details.
 * Includes manage and delete actions.
 *
 * @module components/features/dashboard/SubmissionModal
 */

"use client";

import React, { useState, useEffect } from "react";
import type { FormSubmission } from "@/types/form";
import {
  PROJECT_TYPES,
  BUDGET_OPTIONS,
  TIMELINE_OPTIONS,
} from "@/lib/formConfig";

interface SubmissionModalProps {
  submission: FormSubmission | null;
  isOpen: boolean;
  onClose: () => void;
  onDelete?: (id: string) => void;
}

export const SubmissionModal: React.FC<SubmissionModalProps> = ({
  submission,
  isOpen,
  onClose,
  onDelete,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !submission) return null;

  const projectTypeLabel =
    PROJECT_TYPES.find((pt) => pt.value === submission.projectType)?.label ||
    submission.projectType;

  const budgetLabel =
    BUDGET_OPTIONS.find((b) => b.value === submission.budget)?.label ||
    submission.budget;

  const timelineLabel =
    TIMELINE_OPTIONS.find((t) => t.value === submission.timeline)?.label ||
    submission.timeline;

  const statusColors = {
    new: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    contacted:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
    "in-progress":
      "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
    completed:
      "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    archived:
      "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300",
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleDelete = async () => {
    if (
      !confirm(
        "Are you sure you want to delete this submission? This action cannot be undone.",
      )
    ) {
      return;
    }

    setIsDeleting(true);
    try {
      const response = await fetch(`/api/admin/submissions/${submission.id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (response.ok && data.success) {
        onDelete?.(submission.id);
        onClose();
      } else {
        console.error("Delete failed:", data);
        alert(data.error || "Failed to delete submission");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("An error occurred while deleting");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="bg-card border border-border rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 border-b border-border">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold text-foreground">
                  {submission.fullName}
                </h2>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    statusColors[submission.status]
                  }`}
                >
                  {submission.status.replace("-", " ").toUpperCase()}
                </span>
              </div>
              <p className="text-sm text-foreground-secondary">
                Submitted {formatDate(submission.submittedAt)}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-foreground-secondary hover:text-foreground transition-colors"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Contact Information
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-foreground-secondary">
                  <span className="font-medium text-foreground">Email:</span>{" "}
                  <a
                    href={`mailto:${submission.email}`}
                    className="text-primary hover:underline"
                  >
                    {submission.email}
                  </a>
                </p>
                {submission.phone && (
                  <p className="text-foreground-secondary">
                    <span className="font-medium text-foreground">Phone:</span>{" "}
                    <a
                      href={`tel:${submission.phone}`}
                      className="text-primary hover:underline"
                    >
                      {submission.phone}
                    </a>
                  </p>
                )}
                {submission.bestTimeToContact && (
                  <p className="text-foreground-secondary">
                    <span className="font-medium text-foreground">
                      Best time to contact:
                    </span>{" "}
                    {submission.bestTimeToContact.replace("-", " ")}
                  </p>
                )}
              </div>
            </div>

            {/* Project Details */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Project Details
              </h3>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs font-medium text-foreground-secondary mb-1">
                      Project Type
                    </p>
                    <p className="text-sm text-foreground">
                      {projectTypeLabel}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground-secondary mb-1">
                      Budget
                    </p>
                    <p className="text-sm text-foreground">{budgetLabel}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground-secondary mb-1">
                      Timeline
                    </p>
                    <p className="text-sm text-foreground">{timelineLabel}</p>
                  </div>
                </div>

                {submission.projectBrief && (
                  <div>
                    <p className="text-xs font-medium text-foreground-secondary mb-1">
                      Project Description
                    </p>
                    <p className="text-sm text-foreground whitespace-pre-wrap">
                      {submission.projectBrief}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Selected Features */}
            {Array.isArray(submission.selectedFeatures) &&
              submission.selectedFeatures.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Selected Features
                  </h3>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {submission.selectedFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-foreground-secondary"
                      >
                        <span className="text-primary">✓</span>
                        {feature.replace(/-/g, " ")}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {/* Additional Features */}
            {submission.additionalFeatures && (
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Additional Requirements
                </h3>
                <p className="text-sm text-foreground-secondary whitespace-pre-wrap">
                  {submission.additionalFeatures}
                </p>
              </div>
            )}

            {/* Company Information */}
            {(submission.companyName || submission.companyWebsite) && (
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Company Information
                </h3>
                <div className="space-y-2 text-sm">
                  {submission.companyName && (
                    <p className="text-foreground-secondary">
                      <span className="font-medium text-foreground">
                        Company:
                      </span>{" "}
                      {submission.companyName}
                    </p>
                  )}
                  {submission.companyWebsite && (
                    <p className="text-foreground-secondary">
                      <span className="font-medium text-foreground">
                        Website:
                      </span>{" "}
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
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Reference Links
                </h3>
                <p className="text-sm text-foreground-secondary whitespace-pre-wrap">
                  {submission.referenceLinks}
                </p>
              </div>
            )}

            {/* Internal Notes */}
            {submission.notes && (
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Internal Notes
                </h3>
                <p className="text-sm text-foreground-secondary whitespace-pre-wrap">
                  {submission.notes}
                </p>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between gap-3 p-6 border-t border-border bg-background-secondary">
            <div className="flex items-center gap-3">
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
            </div>

            {onDelete && (
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="rounded-lg border border-danger bg-danger/10 px-4 py-2 text-sm font-medium text-danger transition-colors hover:bg-danger/20 disabled:opacity-50"
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
