/**
 * Submission List Component
 *
 * Displays a table of form submissions with filtering and sorting.
 *
 * Features:
 * - Load submissions from Supabase
 * - Filter by status
 * - Sort by date
 * - View submission details in modal
 *
 * @module components/features/dashboard/SubmissionList
 */

"use client";

import React, { useState, useEffect } from "react";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import type { FormSubmission } from "@/types/form";
import { SubmissionModal } from "./SubmissionModal";
import {
  PROJECT_TYPES,
  BUDGET_OPTIONS,
  TIMELINE_OPTIONS,
} from "@/lib/formConfig";

type StatusFilter =
  | "all"
  | "new"
  | "contacted"
  | "in-progress"
  | "completed"
  | "archived";

export const SubmissionList: React.FC = () => {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState<
    FormSubmission[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [selectedSubmission, setSelectedSubmission] =
    useState<FormSubmission | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRowClick = (submission: FormSubmission) => {
    setSelectedSubmission(submission);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSubmission(null);
  };

  /**
   * Load submissions from Supabase
   */
  useEffect(() => {
    loadSubmissions();
  }, []);

  /**
   * Filter and sort submissions
   */
  const filterAndSortSubmissions = React.useCallback(() => {
    let filtered = [...submissions];

    // Apply status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((sub) => sub.status === statusFilter);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      const dateA = new Date(a.submittedAt).getTime();
      const dateB = new Date(b.submittedAt).getTime();
      return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
    });

    setFilteredSubmissions(filtered);
  }, [submissions, statusFilter, sortOrder]);

  /**
   * Filter and sort submissions when filter/sort changes
   */
  useEffect(() => {
    filterAndSortSubmissions();
  }, [filterAndSortSubmissions]);

  const handleDelete = async (id: string) => {
    // Remove from local state immediately for better UX
    setSubmissions((prev) => prev.filter((sub) => sub.id !== id));
    handleCloseModal();
  };

  /**
   * Transform snake_case database fields to camelCase
   */
  const transformSubmission = (dbData: any): FormSubmission => {
    return {
      id: dbData.id,
      projectType: dbData.project_type,
      selectedFeatures: dbData.selected_features || [],
      additionalFeatures: dbData.additional_features || "",
      budget: dbData.budget,
      timeline: dbData.timeline,
      projectBrief: dbData.project_brief || "",
      companyName: dbData.company_name || "",
      companyWebsite: dbData.company_website || "",
      referenceLinks: dbData.reference_links || "",
      fullName: dbData.full_name,
      email: dbData.email,
      phone: dbData.phone || "",
      bestTimeToContact: dbData.best_time_to_contact || "",
      status: dbData.status,
      notes: dbData.notes || "",
      submittedAt: dbData.submitted_at,
      updatedAt: dbData.updated_at || dbData.submitted_at,
      createdAt: dbData.created_at || dbData.submitted_at,
    };
  };

  const loadSubmissions = async () => {
    // Check if Supabase is configured
    if (!isSupabaseConfigured() || !supabase) {
      setError("Dashboard not configured. Please set up Supabase connection.");
      setLoading(false);

      // [DEVELOPMENT MODE]: Show sample data
      if (process.env.NODE_ENV === "development") {
        setSubmissions(getSampleData());
        setError(null);
      }
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const { data, error: fetchError } = await supabase
        .from("form_submissions")
        .select("*")
        .order("submitted_at", { ascending: false });

      if (fetchError) {
        throw fetchError;
      }

      // Transform snake_case to camelCase
      const transformedData = data.map(transformSubmission);
      setSubmissions(transformedData);
    } catch (err) {
      console.error("Error loading submissions:", err);
      setError("Failed to load submissions. Please try again.");

      // [DEVELOPMENT MODE]: Show sample data on error
      if (process.env.NODE_ENV === "development") {
        setSubmissions(getSampleData());
        setError("Using sample data (Supabase not configured)");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    loadSubmissions();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto" />
          <p className="text-foreground-secondary">Loading submissions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Filters and Controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-lg border border-input-border bg-card p-4">
        <div className="flex items-center gap-4">
          {/* Status Filter */}
          <div>
            <label htmlFor="statusFilter" className="sr-only">
              Filter by status
            </label>
            <select
              id="statusFilter"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
              className="rounded-lg border border-input-border bg-input px-4 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="all">All Statuses</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="archived">Archived</option>
            </select>
          </div>

          {/* Sort Order */}
          <div>
            <label htmlFor="sortOrder" className="sr-only">
              Sort order
            </label>
            <select
              id="sortOrder"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
              className="rounded-lg border border-input-border bg-input px-4 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="desc">Newest First</option>
              <option value="asc">Oldest First</option>
            </select>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleRefresh}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Refresh
          </button>
          {/* [PLACEHOLDER]: Add export button */}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
          <p className="text-sm text-yellow-800 dark:text-yellow-200">
            {error}
          </p>
        </div>
      )}

      {/* Results Count */}
      <div className="text-sm text-foreground-secondary">
        Showing {filteredSubmissions.length} of {submissions.length} submissions
      </div>

      {/* Submissions Table */}
      {filteredSubmissions.length === 0 ? (
        <div className="rounded-lg border border-input-border bg-card p-12 text-center">
          <p className="text-foreground-secondary">
            {submissions.length === 0
              ? "No submissions yet"
              : "No submissions match the selected filters"}
          </p>
        </div>
      ) : (
        <div className="rounded-lg border border-input-border bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-background-secondary border-b border-border">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">
                    Project Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">
                    Budget
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">
                    Submitted
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredSubmissions.map((submission) => {
                  const projectTypeLabel =
                    PROJECT_TYPES.find(
                      (pt) => pt.value === submission.projectType,
                    )?.label || submission.projectType;

                  const budgetLabel =
                    BUDGET_OPTIONS.find((b) => b.value === submission.budget)
                      ?.label || submission.budget;

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

                  return (
                    <tr
                      key={submission.id}
                      onClick={() => handleRowClick(submission)}
                      className="cursor-pointer hover:bg-background-secondary transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-foreground">
                          {submission.fullName}
                        </div>
                        {submission.companyName && (
                          <div className="text-xs text-foreground-secondary">
                            {submission.companyName}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-foreground-secondary">
                          {submission.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-foreground">
                          {projectTypeLabel}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-foreground">
                          {budgetLabel}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            statusColors[submission.status]
                          }`}
                        >
                          {submission.status.replace("-", " ").toUpperCase()}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground-secondary">
                        {new Date(submission.submittedAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          },
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Submission Modal */}
      <SubmissionModal
        submission={selectedSubmission}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onDelete={handleDelete}
      />
    </div>
  );
};

/**
 * Sample data for development
 */
function getSampleData(): FormSubmission[] {
  return [
    {
      id: "sample-1",
      projectType: "ecommerce",
      selectedFeatures: ["product-catalog", "shopping-cart", "payment-gateway"],
      additionalFeatures: "Need integration with existing inventory system",
      budget: "4k-7k",
      timeline: "1-2-months",
      projectBrief:
        "We need an e-commerce platform for our retail business. Looking for a modern, mobile-friendly solution with payment processing.",
      companyName: "Sample Retail Co",
      companyWebsite: "https://example.com",
      referenceLinks: "",
      fullName: "John Smith",
      email: "john@example.com",
      phone: "+61 400 000 000",
      bestTimeToContact: "afternoon",
      status: "new",
      notes: "",
      submittedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
    {
      id: "sample-2",
      projectType: "landing-page",
      selectedFeatures: ["hero-section", "contact-form", "testimonials"],
      additionalFeatures: "",
      budget: "1k-2k",
      timeline: "1-2-weeks",
      projectBrief:
        "Simple landing page for our new product launch. Need it fast!",
      companyName: "Tech Startup",
      companyWebsite: "",
      referenceLinks: "",
      fullName: "Jane Doe",
      email: "jane@techstartup.com",
      phone: "",
      bestTimeToContact: "morning",
      status: "contacted",
      notes: "",
      submittedAt: new Date(Date.now() - 86400000).toISOString(),
      updatedAt: new Date(Date.now() - 86400000).toISOString(),
      createdAt: new Date(Date.now() - 86400000).toISOString(),
    },
  ];
}
