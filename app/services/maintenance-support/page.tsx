import { Metadata } from "next";
import {
  Container,
  Section,
  Heading,
  Paragraph,
  Card,
  Button,
} from "@/components";
import { Accordion } from "@/components/ui/Accordion";
import { Header, Footer, Main, Navigation } from "@/components/layout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Maintenance & Support - Truqorun",
  description:
    "Professional maintenance and support for React and Next.js websites. Keep your site secure, fast, and up to date.",
};

export default function MaintenanceSupportPage() {
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
              <div className="mb-6 text-6xl">🔧</div>
              <Heading level={1} className="mb-6">
                Maintenance &amp; Support
              </Heading>
              <Paragraph size="lg" className="mx-auto max-w-3xl">
                Building a website is just the start. We keep your React or
                Next.js site running smoothly with regular updates, bug fixes,
                and improvements so you can focus on running your business.
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
                  Why Maintenance Matters
                </Heading>
                <Paragraph className="mb-4">
                  Web development doesn&apos;t stop at launch. Dependencies need
                  updates, security patches get released, browsers change, and
                  your business evolves. Without regular maintenance, sites
                  become vulnerable, slow, or straight-up break.
                </Paragraph>
                <Paragraph className="mb-4">
                  We&apos;ve seen it happen—a site works perfectly for six
                  months, then some npm package gets a critical security update,
                  or Next.js releases a new version with must-have features, and
                  suddenly you&apos;re stuck with outdated code.
                </Paragraph>
                <Paragraph className="mb-4">
                  Our maintenance plans keep your site current, secure, and
                  performing well. Think of it like car maintenance—regular oil
                  changes and checkups prevent expensive breakdowns later.
                </Paragraph>
              </div>

              <div>
                <Heading level={2} className="mb-4">
                  What&apos;s Included
                </Heading>
                <div className="space-y-6">
                  <Card>
                    <h3 className="mb-3 text-lg font-semibold">
                      Dependency Updates
                    </h3>
                    <Paragraph size="sm" className="mb-3">
                      JavaScript moves fast. New versions of React, Next.js, and
                      your other dependencies ship regularly with bug fixes,
                      performance improvements, and new features.
                    </Paragraph>
                    <Paragraph size="sm" className="mb-3">
                      We stay on top of updates, test them in a staging
                      environment, and deploy to production when everything
                      checks out. You get the benefits without the headache of
                      managing it yourself.
                    </Paragraph>
                    <Paragraph size="sm">
                      Critical security patches? We handle those immediately,
                      not during the next scheduled update. Your site stays
                      secure.
                    </Paragraph>
                  </Card>

                  <Card>
                    <h3 className="mb-3 text-lg font-semibold">Bug Fixes</h3>
                    <Paragraph size="sm" className="mb-3">
                      Something not working right? We&apos;ll track it down and
                      fix it. This covers bugs in existing features—edge cases
                      you didn&apos;t catch during initial testing, issues that
                      pop up after a browser update, weird interactions between
                      features.
                    </Paragraph>
                    <Paragraph size="sm">
                      Maintenance plans include a set number of hours per month
                      for bug fixes and small improvements. Most issues get
                      resolved quickly without eating into your whole budget.
                    </Paragraph>
                  </Card>

                  <Card>
                    <h3 className="mb-3 text-lg font-semibold">
                      Performance Monitoring
                    </h3>
                    <Paragraph size="sm" className="mb-3">
                      We track your site&apos;s performance metrics—page load
                      times, Core Web Vitals, API response times. If something
                      slows down, we investigate and fix it before your users
                      start complaining.
                    </Paragraph>
                    <Paragraph size="sm" className="mb-3">
                      This includes monitoring uptime too. If your site goes
                      down, we get alerted and can start troubleshooting
                      immediately.
                    </Paragraph>
                    <Paragraph size="sm">
                      Monthly reports show how your site&apos;s performing over
                      time. We&apos;ll flag any trends that need attention and
                      suggest optimizations.
                    </Paragraph>
                  </Card>

                  <Card>
                    <h3 className="mb-3 text-lg font-semibold">
                      Content Updates
                    </h3>
                    <Paragraph size="sm" className="mb-3">
                      Need to update some copy, swap an image, or tweak a color?
                      We handle quick content changes as part of maintenance. No
                      need to dive into code yourself or wait weeks for updates.
                    </Paragraph>
                    <Paragraph size="sm">
                      For sites with a CMS, we can train your team to handle
                      routine updates. But we&apos;re always available as backup
                      when you need changes made.
                    </Paragraph>
                  </Card>

                  <Card>
                    <h3 className="mb-3 text-lg font-semibold">
                      Hosting Management
                    </h3>
                    <Paragraph size="sm" className="mb-3">
                      We manage your hosting setup—Vercel, AWS, wherever your
                      site lives. Handle deployments, configure CDN settings,
                      manage environment variables, set up SSL certificates.
                    </Paragraph>
                    <Paragraph size="sm">
                      This includes monitoring hosting costs and optimizing
                      where possible. No surprises on your bill from inefficient
                      configurations.
                    </Paragraph>
                  </Card>

                  <Card>
                    <h3 className="mb-3 text-lg font-semibold">
                      Analytics &amp; Reporting
                    </h3>
                    <Paragraph size="sm" className="mb-3">
                      Monthly reports with traffic stats, user behavior, popular
                      pages, conversion rates (if applicable). We make sure your
                      analytics are tracking properly and highlight insights
                      that matter for your business.
                    </Paragraph>
                    <Paragraph size="sm">
                      Can also set up custom dashboards if you want real-time
                      visibility into specific metrics.
                    </Paragraph>
                  </Card>
                </div>
              </div>

              <div>
                <Heading level={2} className="mb-4">
                  Response Times
                </Heading>
                <Paragraph className="mb-4">
                  We promise 24-hour response time for all maintenance requests.
                  Critical issues like site downtime or security vulnerabilities
                  get immediate attention—usually within an hour during business
                  hours.
                </Paragraph>
                <Paragraph className="mb-4">
                  Non-urgent updates typically get handled within a few business
                  days. We&apos;ll give you a realistic timeline for any work
                  that needs doing.
                </Paragraph>
              </div>

              <div>
                <Heading level={2} className="mb-4">
                  New Features &amp; Improvements
                </Heading>
                <Paragraph className="mb-4">
                  Maintenance hours can also go toward small improvements and
                  new features. Add a contact form, implement a newsletter
                  signup, build a new page—stuff that doesn&apos;t warrant a
                  full project but would make your site better.
                </Paragraph>
                <Paragraph className="mb-4">
                  We&apos;re flexible about how you use your monthly hours. Some
                  clients prefer using them all for maintenance and updates.
                  Others bank hours for larger feature additions. Both
                  approaches work.
                </Paragraph>
                <Paragraph className="mb-4">
                  If you need significant new functionality that goes beyond
                  maintenance hours, we can quote that as a separate project.
                  But lots of improvements can happen incrementally as part of
                  ongoing maintenance.
                </Paragraph>
              </div>

              <div>
                <Heading level={2} className="mb-4">
                  Maintenance Plans
                </Heading>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <h3 className="mb-2 text-lg font-semibold">Essential</h3>
                    <Paragraph size="sm" className="mb-3">
                      Best for smaller sites that need basic upkeep. Includes
                      dependency updates, security patches, performance
                      monitoring, and a few hours per month for bug fixes or
                      content updates.
                    </Paragraph>
                    <Paragraph size="sm" className="text-foreground-secondary">
                      Perfect for landing pages, portfolios, and small business
                      sites.
                    </Paragraph>
                  </Card>
                  <Card>
                    <h3 className="mb-2 text-lg font-semibold">Professional</h3>
                    <Paragraph size="sm" className="mb-3">
                      For active sites that need regular attention. More hours
                      per month for updates, improvements, and new features.
                      Priority response times and detailed monthly reports.
                    </Paragraph>
                    <Paragraph size="sm" className="text-foreground-secondary">
                      Great for e-commerce sites, SaaS products, and
                      content-heavy platforms.
                    </Paragraph>
                  </Card>
                </div>
                <Paragraph className="mt-6">
                  Not sure which plan fits your needs?{" "}
                  <Link
                    href="/contact"
                    className="text-primary hover:underline"
                  >
                    Get in touch
                  </Link>{" "}
                  and we&apos;ll figure out what makes sense for your site.
                </Paragraph>
              </div>

              <div>
                <Heading level={2} className="mb-4">
                  What We Work With
                </Heading>
                <Paragraph className="mb-4">
                  We specialize in React and Next.js applications. If your site
                  is built with these technologies (or similar React frameworks
                  like Gatsby or Remix), we can maintain it.
                </Paragraph>
                <Paragraph className="mb-4">
                  Didn&apos;t build your site with us originally? No problem.
                  We&apos;ve taken over maintenance for plenty of sites built by
                  other developers or agencies. We&apos;ll audit your codebase,
                  document how everything works, and take it from there.
                </Paragraph>
                <Paragraph className="mb-4">
                  Not using React or Next.js? We probably can&apos;t help
                  directly, but we can recommend other developers who specialize
                  in your stack.
                </Paragraph>
              </div>

              <div>
                <Heading level={2} className="mb-4">
                  How It Works
                </Heading>
                <Paragraph className="mb-4">
                  Start with a maintenance plan that fits your needs. We&apos;ll
                  get access to your codebase and hosting, set up monitoring,
                  and take an inventory of current dependencies and their
                  versions.
                </Paragraph>
                <Paragraph className="mb-4">
                  From there, we proactively handle updates and monitoring. When
                  you need something changed or fixed, just shoot us an email or
                  message. We&apos;ll confirm we got it, give you a timeline,
                  and knock it out.
                </Paragraph>
                <Paragraph className="mb-4">
                  Monthly reports give you visibility into what we&apos;ve
                  worked on, how hours were spent, and any recommendations for
                  improvements or optimizations.
                </Paragraph>
                <Paragraph className="mb-4">
                  Plans are month-to-month—no long-term contracts. If you decide
                  maintenance isn&apos;t needed anymore, just cancel. (Though
                  we&apos;ll gently suggest keeping security updates going at
                  minimum.)
                </Paragraph>
              </div>
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <Section spacing="lg">
          <Container size="md">
            <Heading level={2} className="text-center mb-8">
              Maintenance & Support FAQs
            </Heading>
            <Accordion
              items={[
                {
                  title: "What does a maintenance plan include?",
                  content:
                    "Plans typically cover dependency updates, security patches, uptime monitoring, regular backups, and a set number of hours for content changes or small feature tweaks each month.",
                },
                {
                  title: "How quickly do you respond to issues?",
                  content:
                    "Critical issues like downtime or security vulnerabilities are addressed within hours. Non-urgent requests are handled within 1–2 business days depending on your plan.",
                },
                {
                  title: "Do I need a long-term contract?",
                  content:
                    "No. All maintenance plans are month-to-month. You can cancel anytime, though we recommend keeping at least security updates active.",
                },
                {
                  title: "Can you maintain a site you didn\u2019t build?",
                  content:
                    "Yes. We start with a codebase audit to understand the tech stack and identify any immediate issues. From there, we can take over ongoing maintenance.",
                },
                {
                  title: "How do I request changes?",
                  content:
                    "Just send us an email or message. We confirm receipt, give you a timeline, and keep you updated as the work is completed. You also get monthly reports summarising everything we did.",
                },
              ]}
              allowMultiple
            />
          </Container>
        </Section>

        {/* CTA Section */}
        <Section spacing="lg">
          <Container size="md">
            <Card className="text-center">
              <Heading level={2} className="mb-4">
                Let&apos;s Keep Your Site Running Smoothly
              </Heading>
              <Paragraph className="mb-6">
                Tell us about your site and what kind of maintenance you need.
                We&apos;ll recommend a plan and get everything set up.
              </Paragraph>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Get Started
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="secondary" size="lg">
                    View All Services
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
