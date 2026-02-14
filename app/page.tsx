/**
 * Home Page
 * 
 * Main landing page showcasing the Truqorun brand and component system.
 * Demonstrates light/dark mode theming and design system components.
 * 
 * [PLACEHOLDER]: Replace with actual content from /content/WEBSITE_COPY.md
 */

import Link from 'next/link';
import { Container, Card, Button, Heading, Paragraph } from '@/components';
import { Header, Footer, Main, Section, Navigation } from '@/components/layout';

export default function Home() {
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
                Build Your Digital Future
                <span className="block text-primary">with Modern Web Solutions</span>
              </Heading>
              <Paragraph size="lg" className="mx-auto mb-8 max-w-2xl">
                Custom web development that combines cutting-edge technology with 
                lightning-fast service. Based in Sydney, trusted worldwide.
              </Paragraph>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Get Your Free Quote
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="secondary" size="lg">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </Section>

        {/* Services Section */}
        <Section spacing="lg" background="secondary">
          <Container size="lg">
            <div className="mb-12 text-center">
              <Heading level={2} className="mb-4">
                What We Build
              </Heading>
              <Paragraph>
                Custom web solutions tailored to your business needs. No templates, 
                no website builders—just clean, modern code.
              </Paragraph>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <div className="mb-4 text-4xl">🏢</div>
                <h3 className="mb-3 text-xl font-semibold">Business Landing Pages</h3>
                <Paragraph size="sm">
                  Make a powerful first impression with a custom landing page that 
                  converts visitors into customers.
                </Paragraph>
                <Link 
                  href="/services" 
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                >
                  Learn More →
                </Link>
              </Card>
              <Card>
                <div className="mb-4 text-4xl">🛒</div>
                <h3 className="mb-3 text-xl font-semibold">E-commerce Websites</h3>
                <Paragraph size="sm">
                  Sell online with confidence. Custom e-commerce platforms with 
                  secure payments and seamless checkout.
                </Paragraph>
                <Link 
                  href="/services" 
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                >
                  Learn More →
                </Link>
              </Card>
              <Card>
                <div className="mb-4 text-4xl">📝</div>
                <h3 className="mb-3 text-xl font-semibold">Content Management</h3>
                <Paragraph size="sm">
                  Take control of your content with a powerful CMS. Manage blogs 
                  and documentation with ease.
                </Paragraph>
                <Link 
                  href="/services" 
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                >
                  Learn More →
                </Link>
              </Card>
              <Card>
                <div className="mb-4 text-4xl">🔧</div>
                <h3 className="mb-3 text-xl font-semibold">Maintenance & Support</h3>
                <Paragraph size="sm">
                  Keep your website running smoothly with 24-hour response time 
                  and continuous updates.
                </Paragraph>
                <Link 
                  href="/services" 
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                >
                  Learn More →
                </Link>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Why Choose Section */}
        <Section spacing="lg">
          <Container size="lg">
            <div className="mb-12 text-center">
              <Heading level={2} className="mb-4">
                Why Partner with Truqorun?
              </Heading>
              <Paragraph>
                We&apos;re not just developers—we&apos;re your technology partners 
                committed to your success.
              </Paragraph>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 text-5xl">🚀</div>
                <h3 className="mb-3 text-xl font-semibold">Built for the Future</h3>
                <Paragraph size="sm">
                  We use Next.js, React, and TypeScript—modern technologies that 
                  ensure your project is fast, scalable, and future-proof.
                </Paragraph>
              </div>
              <div className="text-center">
                <div className="mb-4 text-5xl">⚡</div>
                <h3 className="mb-3 text-xl font-semibold">Lightning Fast Response</h3>
                <Paragraph size="sm">
                  24-hour guaranteed response time. We value your time and deliver 
                  projects quickly without sacrificing quality.
                </Paragraph>
              </div>
              <div className="text-center">
                <div className="mb-4 text-5xl">💯</div>
                <h3 className="mb-3 text-xl font-semibold">100% Custom Code</h3>
                <Paragraph size="sm">
                  No templates or website builders. Every line of code is crafted 
                  specifically for your needs and brand.
                </Paragraph>
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section spacing="lg" background="accent">
          <Container size="md">
            <Card className="text-center">
              <Heading level={2} className="mb-4">
                Ready to Get Started?
              </Heading>
              <Paragraph className="mb-6">
                Let&apos;s discuss your project and build something amazing together. 
                Get a free quote and consultation within 24 hours.
              </Paragraph>
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Get Free Quote
                </Button>
              </Link>
            </Card>
          </Container>
        </Section>
      </Main>

      <Footer />
    </div>
  );
}
