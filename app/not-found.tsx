/**
 * Custom 404 Not Found Page
 *
 * Displayed when a user navigates to a route that doesn't exist.
 * Features an animated illustration and helpful navigation links.
 */

import Link from "next/link";
import { Container, Button, Heading, Paragraph } from "@/components";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Container size="sm">
        <div className="text-center py-20">
          {/* Large 404 Number */}
          <div className="relative mb-8">
            <span className="text-[10rem] sm:text-[14rem] font-bold leading-none tracking-tighter text-primary/10 select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl">🔍</div>
            </div>
          </div>

          <Heading level={1} className="mb-4">
            Page Not Found
          </Heading>

          <Paragraph size="lg" className="mx-auto max-w-md mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </Paragraph>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/">
              <Button variant="primary" size="lg">
                Back to Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-12 border-t border-border pt-8">
            <p className="mb-4 text-sm font-medium text-foreground-secondary">
              Popular pages:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/services"
                className="text-primary hover:underline"
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="text-primary hover:underline"
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                className="text-primary hover:underline"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-primary hover:underline"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
