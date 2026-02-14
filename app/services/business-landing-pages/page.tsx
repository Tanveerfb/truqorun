import { Metadata } from "next";
import {
  Container,
  Section,
  Heading,
  Paragraph,
  Card,
  Button,
} from "@/components";
import { Header, Footer, Main, Navigation } from "@/components/layout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Landing Pages - Truqorun",
  description:
    "Custom landing pages that actually convert. Built with React and Next.js for startups, product launches, and business portfolios.",
};

export default function BusinessLandingPagesPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header>
        <Navigation />
      </Header>

      <Main>
        {/* Hero Section */}
        <Section spacing="xl">
          <Container size="lg">
            <div className="text-center">
              <div className="mb-6 text-6xl">🏢</div>
              <Heading level={1} className="mb-6">
                Business Landing Pages
              </Heading>
              <Paragraph size="lg" className="mx-auto max-w-3xl">
                Your landing page has one job: turn visitors into customers. We
                build pages that load fast, look professional, and guide users
                toward taking action—whether that&apos;s signing up, reaching
                out, or making a purchase.
              </Paragraph>
            </div>
          </Container>
        </Section>

        {/* Main Content */}
        <Section spacing="lg">
          <Container size="md">
            <div className="space-y-12">
              <div>
                <Heading level={2} className="mb-4">
                  Why Landing Pages Matter
                </Heading>
                <Paragraph className="mb-4">
                  Look, you could throw together a page with Wix or Squarespace
                  and call it a day. But here&apos;s the thing—those tools
                  generate bloated code that kills your page speed, tanks your
                  SEO, and makes Google wonder if your site is even worth
                  showing to people.
                </Paragraph>
                <Paragraph className="mb-4">
                  We write actual code. React components that render server-side
                  for instant loads, minimal JavaScript for better performance,
                  and clean HTML that search engines can actually understand.
                  Your landing page won&apos;t just look good—it&apos;ll
                  actually work.
                </Paragraph>
              </div>

              <div>
                <Heading level={2} className="mb-4">
                  What You Get
                </Heading>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <h3 className="mb-2 text-lg font-semibold">
                      Custom Design
                    </h3>
                    <Paragraph size="sm">
                      No templates. We design from scratch based on your brand,
                      your audience, and what actually converts. Every color,
                      font, and layout choice has a purpose.
                    </Paragraph>
                  </Card>
                  <Card>
                    <h3 className="mb-2 text-lg font-semibold">
                      Mobile-First Development
                    </h3>
                    <Paragraph size="sm">
                      Most of your traffic is probably on mobile. We build for
                      phones first, then scale up to tablets and desktops. Your
                      page works everywhere.
                    </Paragraph>
                  </Card>
                  <Card>
                    <h3 className="mb-2 text-lg font-semibold">
                      Performance Optimized
                    </h3>
                    <Paragraph size="sm">
                      Server-side rendering with Next.js means your page loads
                      instantly. We optimize images, defer non-critical scripts,
                      and keep bundle sizes tiny. Speed matters.
                    </Paragraph>
                  </Card>
                  <Card>
                    <h3 className="mb-2 text-lg font-semibold">SEO Ready</h3>
                    <Paragraph size="sm">
                      Proper meta tags, semantic HTML, Open Graph data for
                      social sharing, and clean URLs. We handle the technical
                      stuff so Google can find you.
                    </Paragraph>
                  </Card>
                </div>
              </div>

              <div>
                <Heading level={2} className="mb-4">
                  Perfect For
                </Heading>
                <div className="space-y-4">
                  <Card>
                    <h3 className="mb-2 font-semibold">Product Launches</h3>
                    <Paragraph size="sm">
                      Got something new to show the world? A landing page gives
                      you a focused space to explain what it does, why it
                      matters, and get people on your waitlist.
                    </Paragraph>
                  </Card>
                  <Card>
                    <h3 className="mb-2 font-semibold">Startup Websites</h3>
                    <Paragraph size="sm">
                      You need a professional presence online, but you
                      don&apos;t need a massive site yet. A well-crafted landing
                      page tells your story and starts building your audience.
                    </Paragraph>
                  </Card>
                  <Card>
                    <h3 className="mb-2 font-semibold">Service Businesses</h3>
                    <Paragraph size="sm">
                      Whether you&apos;re a consultant, agency, or local
                      business, a landing page showcases what you offer and
                      makes it easy for clients to get in touch.
                    </Paragraph>
                  </Card>
                  <Card>
                    <h3 className="mb-2 font-semibold">
                      Professional Portfolios
                    </h3>
                    <Paragraph size="sm">
                      Show off your work with a portfolio that actually
                      represents your skills. Fast, clean, and easy to update
                      when you land your next project.
                    </Paragraph>
                  </Card>
                </div>
              </div>

              <div>
                <Heading level={2} className="mb-4">
                  What Makes Our Approach Different
                </Heading>
                <Paragraph className="mb-4">
                  We&apos;re developers first. That means we think about
                  performance, accessibility, and maintainability from day one.
                  But we also get that a landing page needs to convert, so we
                  focus on clear messaging and user experience.
                </Paragraph>
                <Paragraph className="mb-4">
                  Every page we build includes analytics integration (usually
                  Google Analytics or Plausible), so you can actually see
                  what&apos;s working. We set up proper event tracking for
                  buttons, form submissions, and important interactions.
                </Paragraph>
                <Paragraph className="mb-4">
                  And when you need to make changes? No waiting around for a
                  designer. We build pages in a way that makes updates
                  straightforward. Need to tweak some copy or swap an image? We
                  can handle that in minutes, not days.
                </Paragraph>
              </div>

              <div>
                <Heading level={2} className="mb-4">
                  Tech Stack
                </Heading>
                <Paragraph className="mb-4">
                  We typically use Next.js with React for landing pages.
                  Server-side rendering gives you lightning-fast initial loads,
                  and we can progressively enhance with client-side features
                  where they make sense. Styled with Tailwind CSS for clean,
                  maintainable design systems.
                </Paragraph>
                <Paragraph className="mb-4">
                  Hosting on Vercel means your page deploys in seconds and
                  scales automatically. No server management, no downtime, just
                  a fast site that&apos;s always up.
                </Paragraph>
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section spacing="lg" background="secondary">
          <Container size="md">
            <Card className="text-center">
              <Heading level={2} className="mb-4">
                Ready to Build Your Landing Page?
              </Heading>
              <Paragraph className="mb-6">
                Let&apos;s talk about your project. We&apos;ll figure out what
                you need, how to make it convert, and get you a timeline and
                quote.
              </Paragraph>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Get Started
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="secondary" size="lg">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </Card>
          </Container>
        </Section>
      </Main>

      <Footer />
    </div>
  );
}
