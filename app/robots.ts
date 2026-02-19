/**
 * Robots.txt Generation
 *
 * Controls search engine crawler access to the site.
 * Next.js App Router automatically serves this at /robots.txt.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/dashboard/"],
      },
    ],
    sitemap: "https://truqorun.com/sitemap.xml",
  };
}
