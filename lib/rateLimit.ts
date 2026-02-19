/**
 * Rate Limiting Utility
 *
 * Uses @upstash/ratelimit for distributed rate limiting backed by Upstash Redis.
 * Falls back gracefully when Upstash environment variables are not configured
 * (i.e. during local development).
 *
 * Required environment variables:
 *   UPSTASH_REDIS_REST_URL
 *   UPSTASH_REDIS_REST_TOKEN
 *
 * @module lib/rateLimit
 */

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

/** Whether Upstash credentials are available */
const isConfigured = Boolean(
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN,
);

/**
 * Create a rate limiter instance.
 * Returns `null` when Upstash is not configured so callers can skip gracefully.
 */
function createRateLimiter() {
  if (!isConfigured) {
    return null;
  }

  return new Ratelimit({
    redis: Redis.fromEnv(),
    // Sliding-window: allow 5 submissions per 60 seconds per IP
    limiter: Ratelimit.slidingWindow(5, "60 s"),
    analytics: true,
    prefix: "truqorun:ratelimit",
  });
}

/** Singleton rate limiter */
const rateLimiter = createRateLimiter();

export interface RateLimitResult {
  /** Whether the request is allowed */
  allowed: boolean;
  /** Seconds until the rate limit resets (0 if allowed) */
  retryAfter: number;
}

/**
 * Check whether a request identified by `key` (typically IP address) is
 * within the configured rate limit.
 *
 * Always returns `{ allowed: true }` when Upstash is not configured so
 * development workflows are never blocked.
 */
export async function checkRateLimit(key: string): Promise<RateLimitResult> {
  if (!rateLimiter) {
    // No Upstash configured — allow everything (dev mode)
    return { allowed: true, retryAfter: 0 };
  }

  const { success, reset } = await rateLimiter.limit(key);

  return {
    allowed: success,
    retryAfter: success ? 0 : Math.ceil((reset - Date.now()) / 1000),
  };
}
