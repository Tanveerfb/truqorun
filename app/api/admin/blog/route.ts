/**
 * Admin Blog Posts API
 *
 * GET  — List all blog posts (any status)
 * POST — Create a new blog post
 *
 * Requires admin authentication via session cookie.
 *
 * @module app/api/admin/blog/route
 */

import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { getAllBlogPostsAdmin, createBlogPost } from "@/lib/blog";
import type { BlogPostInsert } from "@/lib/blog";

/**
 * Verify admin session from request cookies.
 * Returns the user object or null.
 */
async function verifyAdmin(request: NextRequest) {
  const accessToken = request.cookies.get("sb-access-token")?.value;
  if (!accessToken || !supabase) return null;

  const { data, error } = await supabase.auth.getUser(accessToken);
  if (error || !data.user) return null;

  return data.user;
}

/**
 * GET /api/admin/blog — list all posts
 */
export async function GET(request: NextRequest) {
  const user = await verifyAdmin(request);
  if (!user) {
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 },
    );
  }

  const posts = await getAllBlogPostsAdmin();

  return NextResponse.json({ success: true, posts });
}

/**
 * POST /api/admin/blog — create a post
 */
export async function POST(request: NextRequest) {
  const user = await verifyAdmin(request);
  if (!user) {
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 },
    );
  }

  try {
    const body = (await request.json()) as BlogPostInsert;

    if (!body.title || !body.slug || !body.excerpt || !body.content) {
      return NextResponse.json(
        {
          success: false,
          error: "title, slug, excerpt, and content are required",
        },
        { status: 400 },
      );
    }

    // Auto-set published_at when publishing
    if (body.status === "published" && !body.published_at) {
      body.published_at = new Date().toISOString();
    }

    const post = await createBlogPost(body);

    if (!post) {
      return NextResponse.json(
        { success: false, error: "Failed to create post" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, post }, { status: 201 });
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body" },
      { status: 400 },
    );
  }
}
