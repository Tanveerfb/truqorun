/**
 * Dashboard Page
 *
 * Admin dashboard for viewing and managing form submissions.
 * Requires authentication to access.
 *
 * @module app/dashboard/page
 */

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SubmissionList } from "@/components/features/dashboard/SubmissionList";
import { DashboardHeader } from "@/components/features/dashboard/DashboardHeader";
import { Button } from "@/components";

export default function DashboardPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch("/api/admin/check");
      const data = await response.json();

      if (data.authenticated) {
        setAuthenticated(true);
      } else {
        router.push("/admin/login");
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      router.push("/admin/login");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">🔄</div>
          <p className="text-foreground-secondary">
            Verifying authentication...
          </p>
        </div>
      </div>
    );
  }

  if (!authenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Form Submissions
            </h1>
            <p className="mt-2 text-foreground-secondary">
              View and manage project inquiries from the contact form
            </p>
          </div>
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        </div>

        <SubmissionList />
      </main>
    </div>
  );
}
