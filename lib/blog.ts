/**
 * Blog Utilities
 *
 * Fetches blog posts from Supabase. Posts are managed via the admin
 * dashboard — no local MDX files needed.
 *
 * The public-facing functions only return published posts.
 * Admin functions return all posts regardless of status.
 *
 * @module lib/blog
 */

import { supabase, supabaseAdmin } from "@/lib/supabase";
import type { Database } from "@/types/database";

export type BlogPost = Database["public"]["Tables"]["blog_posts"]["Row"];
export type BlogPostInsert =
  Database["public"]["Tables"]["blog_posts"]["Insert"];
export type BlogPostUpdate =
  Database["public"]["Tables"]["blog_posts"]["Update"];

// ---------------------------------------------------------------------------
// Public helpers (used by blog pages)
// ---------------------------------------------------------------------------

/**
 * Get all published blog posts, newest first.
 * Returns an empty array when Supabase is not configured.
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) {
    console.error("[Blog] Failed to fetch posts:", error);
    return [];
  }

  return (data as BlogPost[]) ?? [];
}

/**
 * Get a single published blog post by slug.
 */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (error || !data) return null;

  return data as BlogPost;
}

/**
 * Get all published slugs (used by generateStaticParams).
 */
export async function getBlogSlugs(): Promise<string[]> {
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("blog_posts")
    .select("slug")
    .eq("status", "published");

  if (error || !data) return [];

  return (data as { slug: string }[]).map((d) => d.slug);
}

// ---------------------------------------------------------------------------
// Admin helpers (used by dashboard / API routes)
// ---------------------------------------------------------------------------

/**
 * Get all blog posts (any status) for the admin dashboard.
 */
export async function getAllBlogPostsAdmin(): Promise<BlogPost[]> {
  if (!supabaseAdmin) return [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, error } = await (supabaseAdmin as any)
    .from("blog_posts")
    .select("*")
    .order("updated_at", { ascending: false });

  if (error) {
    console.error("[Blog Admin] Failed to fetch posts:", error);
    return [];
  }

  return (data as BlogPost[]) ?? [];
}

/**
 * Get a single blog post by ID (admin, any status).
 */
export async function getBlogPostById(id: string): Promise<BlogPost | null> {
  if (!supabaseAdmin) return null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, error } = await (supabaseAdmin as any)
    .from("blog_posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) return null;

  return data as BlogPost;
}

/**
 * Create a new blog post.
 */
export async function createBlogPost(
  post: BlogPostInsert,
): Promise<BlogPost | null> {
  if (!supabaseAdmin) return null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, error } = await (supabaseAdmin as any)
    .from("blog_posts")
    .insert(post)
    .select("*")
    .single();

  if (error) {
    console.error("[Blog Admin] Failed to create post:", error);
    return null;
  }

  return data as BlogPost;
}

/**
 * Update an existing blog post.
 */
export async function updateBlogPost(
  id: string,
  updates: BlogPostUpdate,
): Promise<BlogPost | null> {
  if (!supabaseAdmin) return null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, error } = await (supabaseAdmin as any)
    .from("blog_posts")
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select("*")
    .single();

  if (error) {
    console.error("[Blog Admin] Failed to update post:", error);
    return null;
  }

  return data as BlogPost;
}

/**
 * Delete a blog post.
 */
export async function deleteBlogPost(id: string): Promise<boolean> {
  if (!supabaseAdmin) return false;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { error } = await (supabaseAdmin as any)
    .from("blog_posts")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("[Blog Admin] Failed to delete post:", error);
    return false;
  }

  return true;
}

// ---------------------------------------------------------------------------
// Formatting
// ---------------------------------------------------------------------------

/**
 * Format a date string for display
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
