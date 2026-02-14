/**
 * Dashboard Page
 * 
 * Internal dashboard for viewing and managing form submissions.
 * 
 * Features:
 * - View all form submissions
 * - Filter by status
 * - Sort by date
 * - Basic authentication protection
 * 
 * [PLACEHOLDER]: Implement proper authentication system
 * [TODO]: Add export functionality, advanced filtering, analytics
 * 
 * @module app/dashboard/page
 */

import { Metadata } from 'next';
import { SubmissionList } from '@/components/features/dashboard/SubmissionList';
import { DashboardHeader } from '@/components/features/dashboard/DashboardHeader';

export const metadata: Metadata = {
  title: 'Dashboard - Truqorun',
  description: 'View and manage project inquiries',
  robots: 'noindex, nofollow', // Prevent indexing
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">
            Form Submissions
          </h1>
          <p className="mt-2 text-foreground-secondary">
            View and manage project inquiries from the contact form
          </p>
        </div>

        {/* [PLACEHOLDER]: Add authentication check here */}
        {/* In production, this should be wrapped with proper auth */}
        <SubmissionList />
      </main>
    </div>
  );
}
