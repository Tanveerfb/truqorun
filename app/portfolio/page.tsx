/**
 * Portfolio Page
 *
 * Showcase of completed projects and work samples.
 * Features project cards with images, descriptions, and technology stacks.
 *
 * [PLACEHOLDER]: Add actual project data and images
 */

import { Metadata } from "next";
import {
  Container,
  Section,
  Heading,
  Paragraph,
  ProjectCard,
} from "@/components";
import { Header, Footer, Main, Navigation } from "@/components/layout";

export const metadata: Metadata = {
  title: "Portfolio - Truqorun",
  description:
    "Explore our portfolio of successful web development projects and client solutions.",
};

export default function PortfolioPage() {
  const projects = [
    {
      title: "Nobility Care Australia",
      description:
        "Professional healthcare and aged care services website with comprehensive service information, client testimonials, and easy contact options. Built with accessibility and user experience in mind.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "React",
        "Auth",
        "CMS",
      ],
      imageUrl: "/projects/nobility-care.png",
      href: "https://nobilitycare.com.au/",
      person: ["Tanveer Singh"],
    },
    {
      title: "NCA Internal Portal",
      description:
        "Secure staff management portal for Nobility Care Australia featuring employee dashboards, scheduling systems, document management, and internal communications. Built with enterprise-grade security.",
      technologies: ["Next.js", "TypeScript", "Firebase", "Secured"],
      imageUrl: "/projects/nobility-care.png",
      href: "https://portal.nobilitycare.com.au/",
      person: ["Tanveer Singh"],
    },
    {
      title: "Simetrix DT",
      description:
        "Digital transformation platform showcasing innovative technology solutions and services. Features modern design, responsive layouts, and engaging user interface for enterprise clients.",
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Vercel",
        "CMS",
        "Auth",
      ],
      imageUrl: "/projects/simetrix_alt.png", // [TODO]: Add screenshot of homepage
      href: "https://simetrixdt.vercel.app/",
      person: ["Tanveer Singh"],
    },
    {
      title: "Lair of Evil Tools",
      description:
        "Comprehensive collection of developer tools and utilities designed to streamline workflows. Features multiple tools for code generation, formatting, conversion, and productivity enhancement.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Web APIs",
        "Auth",
        "CMS",
        "Tournaments",
        "Content Creation",
      ],
      imageUrl: "/projects/lair-of-evil.png", // [TODO]: Add screenshot of tools interface
      href: "https://lair-of-evil-tools.vercel.app/",
      person: ["Tanveer Singh"],
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
                Explore our collection of successful projects. Each one
                represents our commitment to quality, innovation, and client
                satisfaction.
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
                  person={project.person}
                />
              ))}
            </div>
          </Container>
        </Section>

        {/* Stats Section */}
        <Section spacing="lg">
          <Container size="lg">
            <div className="grid gap-8 text-center md:grid-cols-4">
              <div>
                <div className="mb-2 text-4xl font-bold text-primary">4+</div>
                <Paragraph size="sm">Live Projects</Paragraph>
              </div>
              <div>
                <div className="mb-2 text-4xl font-bold text-primary">100%</div>
                <Paragraph size="sm">Client Satisfaction</Paragraph>
              </div>
              <div>
                <div className="mb-2 text-4xl font-bold text-primary">24h</div>
                <Paragraph size="sm">Response Time</Paragraph>
              </div>
              <div>
                <div className="mb-2 text-4xl font-bold text-primary">
                  Next.js
                </div>
                <Paragraph size="sm">Modern Tech Stack</Paragraph>
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
                Ready to start your project? Get in touch and let&apos;s discuss
                how we can help bring your vision to life.
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
