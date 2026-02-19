/**
 * Admin Blog Post Detail API
 *
 * GET    — Fetch a single post by ID
 * PATCH  — Update a post
 * DELETE — Delete a post
 *
 * Requires admin authentication via session cookie.
 *
 * @module app/api/admin/blog/[id]/route
 */

import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { getBlogPostById, updateBlogPost, deleteBlogPost } from "@/lib/blog";
import type { BlogPostUpdate } from "@/lib/blog";

async function verifyAdmin(request: NextRequest) {
  const accessToken = request.cookies.get("sb-access-token")?.value;
  if (!accessToken || !supabase) return null;

  const { data, error } = await supabase.auth.getUser(accessToken);
  if (error || !data.user) return null;

  return data.user;
}

interface RouteContext {
  params: Promise<{ id: string }>;
}

/**
 * GET /api/admin/blog/:id
 */
export async function GET(request: NextRequest, { params }: RouteContext) {
  const user = await verifyAdmin(request);
  if (!user) {
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 },
    );
  }

  const { id } = await params;
  const post = await getBlogPostById(id);

  if (!post) {
    return NextResponse.json(
      { success: false, error: "Post not found" },
      { status: 404 },
    );
  }

  return NextResponse.json({ success: true, post });
}

/**
 * PATCH /api/admin/blog/:id
 */
export async function PATCH(request: NextRequest, { params }: RouteContext) {
  const user = await verifyAdmin(request);
  if (!user) {
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 },
    );
  }

  const { id } = await params;

  try {
    const body = (await request.json()) as BlogPostUpdate;

    // Auto-set published_at when publishing for the first time
    if (body.status === "published" && !body.published_at) {
      const existing = await getBlogPostById(id);
      if (existing && !existing.published_at) {
        body.published_at = new Date().toISOString();
      }
    }

    const post = await updateBlogPost(id, body);

    if (!post) {
      return NextResponse.json(
        { success: false, error: "Failed to update post" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, post });
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body" },
      { status: 400 },
    );
  }
}

/**
 * DELETE /api/admin/blog/:id
 */
export async function DELETE(request: NextRequest, { params }: RouteContext) {
  const user = await verifyAdmin(request);
  if (!user) {
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 },
    );
  }

  const { id } = await params;
  const deleted = await deleteBlogPost(id);

  if (!deleted) {
    return NextResponse.json(
      { success: false, error: "Failed to delete post" },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
