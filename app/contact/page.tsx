/**
 * Contact Page
 * 
 * Contact form and information for getting in touch.
 * Features multi-step form for project quotes.
 */

import { Metadata } from 'next';
import { Container, Section, Heading, Paragraph, Card } from '@/components';
import { Header, Footer, Main, Navigation } from '@/components/layout';
import { ContactFormWizard } from '@/components/features/contact-form';

export const metadata: Metadata = {
  title: 'Contact Us - Truqorun',
  description: 'Get in touch with Truqorun for a free quote or to discuss your web development project.',
};

export default function ContactPage() {
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
                Get in Touch
              </Heading>
              <Paragraph size="lg" className="mx-auto max-w-3xl">
                Ready to start your project? Fill out the form below and we&apos;ll 
                get back to you within 24 hours with a free quote.
              </Paragraph>
            </div>
          </Container>
        </Section>

        {/* Contact Form Section */}
        <Section spacing="lg" background="secondary">
          <Container size="lg">
            <Card>
              <Heading level={2} className="mb-6 text-center">
                Project Inquiry Form
              </Heading>
              <ContactFormWizard />
            </Card>

            <div className="mt-8 grid gap-6 md:grid-cols-3">

              {/* Contact Info & Requirements */}
              <Card>
                <h3 className="mb-4 text-lg font-semibold">Contact Information</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-foreground">Response Time</p>
                    <p className="text-foreground-secondary">Within 24 hours</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-foreground-secondary">hello@truqorun.com</p>
                  </div>
                </div>
              </Card>

              <Card>
                <h3 className="mb-4 text-lg font-semibold">What to Expect</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-foreground-secondary">
                      Free consultation call within 24 hours
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-foreground-secondary">
                      Detailed project proposal and timeline
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-foreground-secondary">
                      Transparent pricing with no hidden fees
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-foreground-secondary">
                      Regular progress updates and communication
                    </span>
                  </li>
                </ul>
              </Card>

              <Card>
                <h3 className="mb-4 text-lg font-semibold">Why Choose Us?</h3>
                <p className="text-sm text-foreground-secondary">
                  Modern technology stack, responsive design, and ongoing support
                  for your business growth.
                </p>
              </Card>
            </div>
          </Container>
        </Section>
      </Main>

      <Footer />
    </div>
  );
}
