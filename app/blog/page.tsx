/**
 * Blog Page
 *
 * Coming soon page for blog - will be integrated with Supabase
 * Blog posts will be managed through the dashboard
 */

import { Metadata } from "next";
import { Container, Section, Heading, Paragraph } from "@/components";
import { Header, Footer, Main, Navigation } from "@/components/layout";

export const metadata: Metadata = {
  title: "Blog - Truqorun",
  description:
    "Insights and articles about web development, design, and technology - coming soon.",
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
              {/* Icon/Emoji */}
              <div className="mb-8 text-7xl">📝</div>

              {/* Heading */}
              <Heading level={1} className="mb-6">
                Blog Coming Soon
              </Heading>

              {/* Description */}
              <Paragraph size="lg" className="mx-auto max-w-2xl mb-8">
                We're working on bringing you insightful articles about web
                development, design trends, and technology. Stay tuned for
                updates!
              </Paragraph>

              {/* Accent line */}
              <div className="mx-auto w-24 h-1 bg-linear-to-r from-primary via-accent to-success rounded-full"></div>
            </div>
          </Container>
        </Section>
      </Main>

      <Footer />
    </div>
  );
}
