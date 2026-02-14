/**
 * Blog Page
 *
 * Coming soon page for the blog section.
 * Blog posts will be managed through Supabase and the admin dashboard.
 *
 * @module app/blog/page
 */

import { Metadata } from "next";
import { Container, Section, Heading, Paragraph } from "@/components";
import { Header, Footer, Main, Navigation } from "@/components/layout";

export const metadata: Metadata = {
  title: "Blog - Coming Soon | Truqorun",
  description:
    "Our blog is coming soon! Check back later for articles about web development, design trends, and technology insights.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header>
        <Navigation />
      </Header>

      <Main>
        <Section spacing="xl">
          <Container size="md">
            <div className="text-center py-20">
              <div className="mb-8 text-6xl">📝</div>

              <Heading level={1} className="mb-6">
                Blog Coming Soon
              </Heading>

              <Paragraph size="lg" className="max-w-2xl mx-auto mb-8">
                We're preparing amazing content about web development, design
                trends, and technology insights. Check back soon for our latest
                articles!
              </Paragraph>

              <div className="inline-flex items-center gap-2 text-sm text-foreground-secondary bg-card border border-border rounded-lg px-6 py-3">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  Blog posts will be managed through our admin dashboard
                </span>
              </div>
            </div>
          </Container>
        </Section>
      </Main>

      <Footer />
    </div>
  );
}
