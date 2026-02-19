/**
 * About Page
 *
 * Company information including mission, vision, and team details.
 *
 * [PLACEHOLDER]: Add actual team member profiles and company history
 */

import { Metadata } from "next";
import { Container, Section, Heading, Paragraph, Card } from "@/components";
import { Header, Footer, Main, Navigation } from "@/components/layout";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us - Truqorun",
  description:
    "Learn about Truqorun, our mission, vision, and the team behind modern web development solutions.",
};

export default function AboutPage() {
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
              <Heading level={1} className="mb-6">
                Building the Future of Web Development
              </Heading>
              <Paragraph size="lg" className="mx-auto max-w-3xl">
                We&apos;re a team of passionate developers, designers, and
                strategists dedicated to creating exceptional digital
                experiences that drive real business results.
              </Paragraph>
            </div>
          </Container>
        </Section>

        {/* Mission & Vision Section */}
        <Section spacing="lg" background="secondary">
          <Container size="lg">
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <h3 className="mb-4 text-2xl font-semibold">Our Mission</h3>
                <Paragraph>
                  {/* [PLACEHOLDER]: Add actual mission statement from content/WEBSITE_COPY.md */}
                  To empower businesses with cutting-edge web solutions that are
                  beautiful, performant, and built to scale. We believe in
                  creating technology that not only meets today&apos;s needs but
                  anticipates tomorrow&apos;s challenges.
                </Paragraph>
              </Card>

              <Card>
                <h3 className="mb-4 text-2xl font-semibold">Our Vision</h3>
                <Paragraph>
                  {/* [PLACEHOLDER]: Add actual vision statement from content/WEBSITE_COPY.md */}
                  To be the go-to partner for businesses seeking modern,
                  reliable, and innovative web solutions. We envision a digital
                  landscape where every business, regardless of size, has access
                  to premium web development services.
                </Paragraph>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Values Section */}
        <Section spacing="lg">
          <Container size="lg">
            <Heading level={2} className="mb-12 text-center">
              Our Values
            </Heading>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 text-4xl">⚡</div>
                <h3 className="mb-3 text-xl font-semibold">
                  Speed & Efficiency
                </h3>
                <Paragraph size="sm">
                  We deliver high-quality solutions quickly without compromising
                  on excellence. 24-hour response time guaranteed.
                </Paragraph>
              </div>

              <div className="text-center">
                <div className="mb-4 text-4xl">🎯</div>
                <h3 className="mb-3 text-xl font-semibold">Quality First</h3>
                <Paragraph size="sm">
                  Every line of code is crafted with precision. We don&apos;t
                  use templates or shortcuts—only clean, maintainable,
                  production-ready code.
                </Paragraph>
              </div>

              <div className="text-center">
                <div className="mb-4 text-4xl">🤝</div>
                <h3 className="mb-3 text-xl font-semibold">Partnership</h3>
                <Paragraph size="sm">
                  We&apos;re not just vendors—we&apos;re your technology
                  partners. Your success is our success, and we&apos;re
                  committed to long-term relationships.
                </Paragraph>
              </div>
            </div>
          </Container>
        </Section>

        {/* Team Section */}
        <Section spacing="lg" background="secondary">
          <Container size="lg">
            <Heading level={2} className="mb-12 text-center">
              Meet the Team
            </Heading>

            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {/* Tanveer Singh - Founder & Lead Developer */}
              <Card>
                <div className="mb-4 h-64 rounded-lg overflow-hidden flex items-center justify-center bg-background-secondary">
                  <Image
                    src="/team/tanveer.png"
                    alt="Tanveer Singh - Founder & Lead Developer"
                    width={400}
                    height={256}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Tanveer Singh</h3>
                <p className="mb-3 text-sm font-medium text-primary">
                  Founder & Lead Developer
                </p>
                <Paragraph size="sm" className="mb-4">
                  Leading Truqorun&apos;s technical vision with expertise in
                  Next.js and modern web frameworks. Committed to building
                  opportunities for developers while delivering exceptional
                  client solutions that drive real business growth.
                </Paragraph>

                {/* Connect Links */}
                <div className="mb-4 flex flex-wrap gap-3">
                  <a
                    href="https://linkedin.com/in/tanveerfb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline flex items-center gap-1"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href="mailto:truqorun@proton.me"
                    className="text-sm text-primary hover:underline flex items-center gap-1"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Email
                  </a>
                </div>

                {/* Beyond Code */}
                <div className="pt-4 border-t border-border">
                  <p className="text-xs font-semibold text-foreground-secondary mb-1">
                    Beyond Code
                  </p>
                  <Paragraph size="sm">
                    When he&apos;s not building the future of web development,
                    Tanveer can be found streaming on Twitch, gaming with
                    friends, or rewatching Dragon Ball and Hunter x Hunter for
                    the hundredth time.
                  </Paragraph>
                </div>
              </Card>

              {/* Muhammad Mustafa - Public Relations Manager */}
              <Card>
                <div className="mb-4 h-64 rounded-lg overflow-hidden flex items-center justify-center bg-background-secondary">
                  <Image
                    src="/team/mustafa.png"
                    alt="Muhammad Mustafa - Public Relations Manager"
                    width={400}
                    height={256}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Muhammad Mustafa</h3>
                <p className="mb-3 text-sm font-medium text-primary">
                  Public Relations Manager
                </p>
                <Paragraph size="sm" className="mb-4">
                  Leading client relations with excellence in communication and
                  a talent for translating technical concepts for non-technical
                  audiences. Dedicated to ensuring every client feels heard and
                  supported throughout their project journey.
                </Paragraph>

                {/* Connect Links */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://linkedin.com/in/mohammed-mustafa9105/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline flex items-center gap-1"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href="mailto:truqorun@proton.me"
                    className="text-sm text-primary hover:underline flex items-center gap-1"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Email
                  </a>
                </div>
              </Card>
            </div>
          </Container>
        </Section>
      </Main>

      <Footer />
    </div>
  );
}
