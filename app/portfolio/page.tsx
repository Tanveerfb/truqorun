/**
 * Portfolio Page
 * 
 * Showcase of completed projects and work samples.
 * Features project cards with images, descriptions, and technology stacks.
 * 
 * [PLACEHOLDER]: Add actual project data and images
 */

import { Metadata } from 'next';
import { Container, Section, Heading, Paragraph, ProjectCard } from '@/components';
import { Header, Footer, Main, Navigation } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Portfolio - Truqorun',
  description: 'Explore our portfolio of successful web development projects and client solutions.',
};

export default function PortfolioPage() {
  // [PLACEHOLDER]: Replace with actual project data from CMS or database
  const projects = [
    {
      title: 'E-commerce Platform',
      description:
        'Modern online shopping experience with seamless checkout and inventory management.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
      imageUrl: '', // [PLACEHOLDER]: Add project image
      href: '#', // [PLACEHOLDER]: Add project detail page link
    },
    {
      title: 'SaaS Dashboard',
      description:
        'Comprehensive analytics dashboard with real-time data visualization and reporting.',
      technologies: ['React', 'TypeScript', 'Chart.js', 'Node.js'],
      imageUrl: '',
      href: '#',
    },
    {
      title: 'Business Landing Page',
      description:
        'High-converting landing page for a tech startup with lead capture and analytics.',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      imageUrl: '',
      href: '#',
    },
    {
      title: 'Content Management System',
      description:
        'Custom CMS for blog and documentation management with rich text editing.',
      technologies: ['Next.js', 'MDX', 'TypeScript', 'PostgreSQL'],
      imageUrl: '',
      href: '#',
    },
    {
      title: 'Mobile-First Web App',
      description:
        'Progressive web application optimized for mobile devices with offline support.',
      technologies: ['React', 'PWA', 'Service Workers', 'IndexedDB'],
      imageUrl: '',
      href: '#',
    },
    {
      title: 'Portfolio Website',
      description:
        'Stunning portfolio site for a creative professional with smooth animations.',
      technologies: ['Next.js', 'Three.js', 'GSAP', 'Tailwind CSS'],
      imageUrl: '',
      href: '#',
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
                Our Portfolio
              </Heading>
              <Paragraph size="lg" className="mx-auto max-w-3xl">
                Explore our collection of successful projects. Each one represents 
                our commitment to quality, innovation, and client satisfaction.
              </Paragraph>
            </div>
          </Container>
        </Section>

        {/* Portfolio Grid */}
        <Section spacing="lg" background="secondary">
          <Container size="lg">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  imageUrl={project.imageUrl}
                  href={project.href}
                />
              ))}
            </div>
          </Container>
        </Section>

        {/* Stats Section */}
        <Section spacing="lg">
          <Container size="lg">
            <div className="grid gap-8 text-center md:grid-cols-4">
              {/* [PLACEHOLDER]: Add actual stats from company data */}
              <div>
                <div className="mb-2 text-4xl font-bold text-primary">50+</div>
                <Paragraph size="sm">Projects Completed</Paragraph>
              </div>
              <div>
                <div className="mb-2 text-4xl font-bold text-primary">30+</div>
                <Paragraph size="sm">Happy Clients</Paragraph>
              </div>
              <div>
                <div className="mb-2 text-4xl font-bold text-primary">100%</div>
                <Paragraph size="sm">Client Satisfaction</Paragraph>
              </div>
              <div>
                <div className="mb-2 text-4xl font-bold text-primary">24h</div>
                <Paragraph size="sm">Response Time</Paragraph>
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section spacing="lg" background="secondary">
          <Container size="md">
            <div className="text-center">
              <Heading level={2} className="mb-4">
                Let&apos;s Build Something Great Together
              </Heading>
              <Paragraph className="mb-6">
                Ready to start your project? Get in touch and let&apos;s discuss how 
                we can help bring your vision to life.
              </Paragraph>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="rounded-lg bg-primary px-6 py-3 text-lg font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Get Free Quote
                </a>
                <a
                  href="/services"
                  className="rounded-lg bg-background-secondary border border-border px-6 py-3 text-lg font-medium text-foreground transition-colors hover:bg-background"
                >
                  View Services
                </a>
              </div>
            </div>
          </Container>
        </Section>
      </Main>

      <Footer />
    </div>
  );
}
