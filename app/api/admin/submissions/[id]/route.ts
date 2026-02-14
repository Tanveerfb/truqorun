/**
 * Admin Submission Management API Route
 *
 * Handles deletion of form submissions.
 * Requires authentication.
 *
 * @module app/api/admin/submissions/[id]/route
 */

import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  try {
    // Check authentication
    const accessToken = request.cookies.get("sb-access-token")?.value;

    if (!accessToken) {
      console.error("[Admin Delete] No access token found");
      return NextResponse.json(
        { success: false, error: "Unauthorized - Please log in again" },
        { status: 401 },
      );
    }

    if (!supabaseAdmin) {
      console.error("[Admin Delete] Supabase admin not configured");
      return NextResponse.json(
        { success: false, error: "Service not configured" },
        { status: 500 },
      );
    }

    const { id } = await context.params;
    console.log("[Admin Delete] Attempting to delete submission:", id);

    if (!id || id === "undefined") {
      console.error("[Admin Delete] Invalid ID:", id);
      return NextResponse.json(
        { success: false, error: "Invalid submission ID" },
        { status: 400 },
      );
    }

    // Delete submission
    const { error } = await supabaseAdmin
      .from("form_submissions")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("[Admin Delete] Supabase error:", error);
      return NextResponse.json(
        { success: false, error: `Failed to delete: ${error.message}` },
        { status: 500 },
      );
    }

    console.log("[Admin Delete] Successfully deleted submission:", id);
    return NextResponse.json({
      success: true,
      message: "Submission deleted successfully",
    });
  } catch (error) {
    console.error("[Admin Delete] Unexpected error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred" },
      { status: 500 },
    );
  }
}
