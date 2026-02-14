/**
 * Services Page
 * 
 * Comprehensive overview of all services offered by Truqorun.
 * Includes service descriptions, features, and CTAs.
 * 
 * [PLACEHOLDER]: Add detailed service descriptions from content/WEBSITE_COPY.md
 */

import { Metadata } from 'next';
import { Container, Section, Heading, Paragraph, Card, Button } from '@/components';
import { Header, Footer, Main, Navigation } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Services - Truqorun',
  description: 'Explore our comprehensive web development services including business landing pages, e-commerce, CMS solutions, and maintenance.',
};

export default function ServicesPage() {
  const services = [
    {
      icon: '🏢',
      title: 'Business Landing Pages',
      description:
        'Make a powerful first impression with a custom landing page that converts visitors into customers. Perfect for startups, product launches, and professional portfolios.',
      features: [
        'Custom design tailored to your brand',
        'Mobile-responsive and fast-loading',
        'SEO optimized for search engines',
        'Analytics integration',
      ],
    },
    {
      icon: '🛒',
      title: 'E-commerce Websites',
      description:
        'Sell online with confidence. We build custom e-commerce platforms with secure payments, inventory management, and seamless checkout experiences that drive sales.',
      features: [
        'Secure payment processing',
        'Inventory management system',
        'Product catalog with search',
        'Order tracking and management',
      ],
    },
    {
      icon: '📝',
      title: 'Content Management Systems',
      description:
        'Take control of your content with a powerful CMS. Manage blogs, documentation, or knowledge bases with ease—no technical skills required.',
      features: [
        'Easy-to-use admin interface',
        'Rich text editor',
        'Media library management',
        'User roles and permissions',
      ],
    },
    {
      icon: '🔧',
      title: 'Maintenance & Support',
      description:
        'Keep your React or Next.js website running smoothly. We handle hosting, updates, bug fixes, and performance monitoring so you can focus on your business.',
      features: [
        '24-hour response time',
        'Regular updates and security patches',
        'Performance monitoring',
        'Bug fixes and improvements',
      ],
    },
  ];

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
                Our Services
              </Heading>
              <Paragraph size="lg" className="mx-auto max-w-3xl">
                Custom web solutions tailored to your business needs. No templates, 
                no website builders—just clean, modern code that drives results.
              </Paragraph>
            </div>
          </Container>
        </Section>

        {/* Services Grid */}
        <Section spacing="lg" background="secondary">
          <Container size="lg">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`grid gap-8 items-center ${
                    index % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-2'
                  }`}
                >
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="mb-4 text-5xl">{service.icon}</div>
                    <Heading level={2} className="mb-4">
                      {service.title}
                    </Heading>
                    <Paragraph className="mb-6">{service.description}</Paragraph>
                    <Button variant="primary">Learn More</Button>
                  </div>

                  <Card className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <h3 className="mb-4 text-lg font-semibold">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <span className="text-primary">✓</span>
                          <span className="text-sm text-foreground-secondary">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section spacing="lg">
          <Container size="md">
            <Card className="text-center">
              <Heading level={2} className="mb-4">
                Ready to Get Started?
              </Heading>
              <Paragraph className="mb-6">
                Let&apos;s discuss your project and build something amazing together. 
                Get a free quote today.
              </Paragraph>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="primary" size="lg">
                  Get Free Quote
                </Button>
                <Button variant="secondary" size="lg">
                  View Portfolio
                </Button>
              </div>
            </Card>
          </Container>
        </Section>
      </Main>

      <Footer />
    </div>
  );
}
