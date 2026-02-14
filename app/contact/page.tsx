/**
 * Contact Page
 * 
 * Contact form and information for getting in touch.
 * Features multi-step form for project quotes.
 * 
 * [PLACEHOLDER]: Implement actual form handling and validation
 * [TODO]: Add form submission logic and backend integration
 */

import { Metadata } from 'next';
import { Container, Section, Heading, Paragraph, Card } from '@/components';
import { Header, Footer, Main, Navigation } from '@/components/layout';

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
          <Container size="md">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Form */}
              <div className="md:col-span-2">
                <Card>
                  <Heading level={2} className="mb-6">
                    Project Inquiry Form
                  </Heading>

                  {/* [PLACEHOLDER]: Multi-step form implementation */}
                  <form className="space-y-6">
                    {/* Step 1: Contact Information */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-lg border border-input-border bg-input px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-lg border border-input-border bg-input px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full rounded-lg border border-input-border bg-input px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    {/* Step 2: Project Details */}
                    <div>
                      <label
                        htmlFor="service"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Service Needed *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        className="w-full rounded-lg border border-input-border bg-input px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">Select a service</option>
                        <option value="landing-page">Business Landing Page</option>
                        <option value="ecommerce">E-commerce Website</option>
                        <option value="cms">Content Management System</option>
                        <option value="maintenance">Maintenance & Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Estimated Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        className="w-full rounded-lg border border-input-border bg-input px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">Select budget range</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k+">$50,000+</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Project Description *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="w-full rounded-lg border border-input-border bg-input px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                      />
                    </div>

                    {/* [TODO]: Add form validation and submission logic */}
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-primary px-6 py-3 text-lg font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      Send Inquiry
                    </button>
                  </form>
                </Card>
              </div>

              {/* Contact Info & Requirements */}
              <div className="space-y-6">
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
                    {/* [PLACEHOLDER]: Add actual contact details */}
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
              </div>
            </div>
          </Container>
        </Section>
      </Main>

      <Footer />
    </div>
  );
}
