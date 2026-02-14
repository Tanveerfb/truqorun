/**
 * Admin Auth Check API Route
 *
 * Verifies if the user is authenticated by checking session cookies.
 *
 * @module app/api/admin/check/route
 */

import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(request: NextRequest) {
  try {
    const accessToken = request.cookies.get("sb-access-token")?.value;
    const refreshToken = request.cookies.get("sb-refresh-token")?.value;

    if (!accessToken || !supabase) {
      return NextResponse.json({ authenticated: false });
    }

    // Verify token with Supabase
    const { data, error } = await supabase.auth.getUser(accessToken);

    if (error || !data.user) {
      // Try to refresh the session if we have a refresh token
      if (refreshToken) {
        const { data: refreshData, error: refreshError } =
          await supabase.auth.refreshSession({
            refresh_token: refreshToken,
          });

        if (refreshError || !refreshData.session || !refreshData.user) {
          return NextResponse.json({ authenticated: false });
        }

        // Update cookies with new tokens
        const response = NextResponse.json({
          authenticated: true,
          user: {
            id: refreshData.user.id,
            email: refreshData.user.email,
          },
        });

        response.cookies.set(
          "sb-access-token",
          refreshData.session.access_token,
          {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 60 * 60 * 24 * 7,
            path: "/",
          },
        );

        response.cookies.set(
          "sb-refresh-token",
          refreshData.session.refresh_token,
          {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 60 * 60 * 24 * 7,
            path: "/",
          },
        );

        return response;
      }

      return NextResponse.json({ authenticated: false });
    }

    return NextResponse.json({
      authenticated: true,
      user: {
        id: data.user.id,
        email: data.user.email,
      },
    });
  } catch (error) {
    console.error("[Admin Check] Error:", error);
    return NextResponse.json({ authenticated: false });
  }
}
