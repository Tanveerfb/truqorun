/**
 * Admin Logout API Route
 *
 * Handles admin logout by clearing session cookies and signing out from Supabase.
 *
 * @module app/api/admin/logout/route
 */

import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    // Get access token from cookies
    const accessToken = request.cookies.get("sb-access-token")?.value;

    // Sign out from Supabase if we have a token
    if (supabase && accessToken) {
      await supabase.auth.signOut();
    }

    // Create response
    const response = NextResponse.json({
      success: true,
      message: "Logged out successfully",
    });

    // Clear session cookies
    response.cookies.delete("sb-access-token");
    response.cookies.delete("sb-refresh-token");

    return response;
  } catch (error) {
    console.error("[Admin Logout] Error:", error);

    // Even if there's an error, clear the cookies
    const response = NextResponse.json(
      { success: true, message: "Logged out" },
      { status: 200 },
    );

    response.cookies.delete("sb-access-token");
    response.cookies.delete("sb-refresh-token");

    return response;
  }
}
