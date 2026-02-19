/**
 * Portfolio Project Detail Page
 *
 * Dynamic route that displays detailed case studies for each project.
 * Includes project overview, tech stack, screenshots, and client info.
 */

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Container,
  Section,
  Heading,
  Paragraph,
  Card,
  Button,
} from "@/components";
import { Header, Footer, Main, Navigation } from "@/components/layout";

interface ProjectData {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  challenge: string;
  solution: string;
  technologies: string[];
  imageUrl: string;
  href: string;
  person: string[];
  features: string[];
}

const projects: Record<string, ProjectData> = {
  "nobility-care": {
    slug: "nobility-care",
    title: "Nobility Care Australia",
    description:
      "Professional healthcare and aged care services website with comprehensive service information, client testimonials, and easy contact options.",
    longDescription:
      "Nobility Care Australia needed a professional online presence that would serve as the primary touchpoint for families seeking aged care and disability support services. The site needed to convey trust, professionalism, and warmth while providing comprehensive information about their service offerings.",
    challenge:
      "The client needed a website that could handle complex service structures, integrate with their internal management tools, and maintain accessibility standards for elderly users and people with disabilities.",
    solution:
      "We built a fully custom Next.js application with server-side rendering for optimal performance and SEO. The site features a clean, accessible design with large text options, high contrast modes, and intuitive navigation designed for users of all technical abilities.",
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
    features: [
      "Server-side rendering for fast page loads",
      "Accessibility-first design (WCAG 2.1 AA compliant)",
      "Content management system for easy updates",
      "Integrated contact forms with email notifications",
      "Mobile-responsive design across all devices",
      "SEO optimization with structured data",
    ],
  },
  "nca-portal": {
    slug: "nca-portal",
    title: "NCA Internal Portal",
    description:
      "Secure staff management portal with employee dashboards, scheduling systems, and document management.",
    longDescription:
      "The Nobility Care Australia internal portal is an enterprise-grade staff management platform that streamlines daily operations for care workers and administrators. It provides a centralized hub for scheduling, documentation, communications, and compliance tracking.",
    challenge:
      "The organization needed a secure, scalable internal system that could handle sensitive employee and patient data while providing real-time scheduling updates and document management capabilities.",
    solution:
      "We developed a Firebase-backed Next.js application with role-based access control, real-time data synchronization, and enterprise-grade security measures. The portal features an intuitive dashboard that adapts to different user roles.",
    technologies: ["Next.js", "TypeScript", "Firebase", "Secured"],
    imageUrl: "/projects/nobility-care.png",
    href: "https://portal.nobilitycare.com.au/",
    person: ["Tanveer Singh"],
    features: [
      "Role-based access control (admin, manager, staff)",
      "Real-time scheduling and shift management",
      "Document management with version control",
      "Internal messaging and announcements",
      "Firebase Authentication with MFA support",
      "Audit logging for compliance",
    ],
  },
  "simetrix-dt": {
    slug: "simetrix-dt",
    title: "Simetrix DT",
    description:
      "Digital transformation platform showcasing innovative technology solutions for enterprise clients.",
    longDescription:
      "Simetrix DT is a digital transformation consultancy that needed a modern web presence to showcase their technology solutions and attract enterprise clients. The platform demonstrates their expertise through case studies, service descriptions, and interactive demonstrations.",
    challenge:
      "The client required a platform that could effectively communicate complex technical concepts to non-technical decision-makers while maintaining a modern, professional aesthetic that reflects their innovation-focused brand.",
    solution:
      "We created a visually striking Next.js application with content management capabilities, allowing the Simetrix team to regularly update their case studies and service offerings. The site features smooth animations and a carefully crafted information architecture.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel", "CMS", "Auth"],
    imageUrl: "/projects/simetrix_alt.png",
    href: "https://simetrixdt.vercel.app/",
    person: ["Tanveer Singh"],
    features: [
      "Modern responsive design with animations",
      "Content management for case studies",
      "Optimized for enterprise SEO",
      "Fast deployment on Vercel edge network",
      "Authentication for gated content",
      "Analytics integration for lead tracking",
    ],
  },
  "lair-of-evil": {
    slug: "lair-of-evil",
    title: "Lair of Evil Tools",
    description:
      "Comprehensive collection of developer tools and utilities for code generation, formatting, and productivity.",
    longDescription:
      "Lair of Evil Tools is a feature-rich platform that provides developers with a curated collection of tools for everyday coding tasks. From code formatters and generators to conversion utilities and productivity enhancers, the platform serves as a one-stop toolbox for developers.",
    challenge:
      "Building a platform with multiple independent tools that all needed to work seamlessly together, handle various data formats, and provide real-time processing while maintaining fast load times despite the large feature set.",
    solution:
      "We implemented a modular architecture where each tool is a self-contained component, loaded on demand for optimal performance. The platform uses Web APIs for client-side processing, ensuring user data never leaves their browser unless explicitly shared.",
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
    imageUrl: "/projects/lair-of-evil.png",
    href: "https://lair-of-evil-tools.vercel.app/",
    person: ["Tanveer Singh"],
    features: [
      "Multiple developer tools in one platform",
      "Client-side processing for data privacy",
      "Tournament management system",
      "Content creation tools",
      "User authentication and profiles",
      "Lazy-loaded tool modules for performance",
    ],
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) return { title: "Project Not Found - Truqorun" };

  return {
    title: `${project.title} - Portfolio | Truqorun`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.imageUrl ? [{ url: project.imageUrl }] : [],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header>
        <Navigation />
      </Header>

      <Main>
        {/* Hero */}
        <Section spacing="xl">
          <Container size="lg">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm text-foreground-secondary">
              <Link
                href="/portfolio"
                className="hover:text-primary transition-colors"
              >
                Portfolio
              </Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{project.title}</span>
            </nav>

            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <Heading level={1} className="mb-4">
                  {project.title}
                </Heading>
                <Paragraph size="lg" className="mb-6">
                  {project.longDescription}
                </Paragraph>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary" size="lg">
                      Visit Live Site →
                    </Button>
                  </a>
                  <Link href="/contact">
                    <Button variant="secondary" size="lg">
                      Start Similar Project
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-border shadow-lg">
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={`${project.title} screenshot`}
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                ) : (
                  <div className="aspect-video bg-background-secondary flex items-center justify-center">
                    <span className="text-foreground-muted">
                      Project Preview
                    </span>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </Section>

        {/* Challenge & Solution */}
        <Section spacing="lg" background="secondary">
          <Container size="lg">
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10 text-xl">
                    🎯
                  </div>
                  <h3 className="text-xl font-semibold">The Challenge</h3>
                </div>
                <Paragraph>{project.challenge}</Paragraph>
              </Card>

              <Card>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10 text-xl">
                    💡
                  </div>
                  <h3 className="text-xl font-semibold">Our Solution</h3>
                </div>
                <Paragraph>{project.solution}</Paragraph>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Key Features */}
        <Section spacing="lg">
          <Container size="lg">
            <Heading level={2} className="mb-8 text-center">
              Key Features
            </Heading>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
                >
                  <span className="mt-0.5 text-primary">✓</span>
                  <span className="text-sm text-foreground-secondary">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Team */}
        <Section spacing="lg" background="secondary">
          <Container size="md">
            <div className="text-center">
              <Heading level={2} className="mb-4">
                Built By
              </Heading>
              <div className="flex flex-wrap justify-center gap-3">
                {project.person.map((name) => (
                  <span
                    key={name}
                    className="rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent flex items-center gap-2"
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <Section spacing="lg">
          <Container size="md">
            <Card className="text-center">
              <Heading level={2} className="mb-4">
                Want Something Like This?
              </Heading>
              <Paragraph className="mb-6">
                Let&apos;s discuss your project and build something amazing
                together. Free quote within 24 hours.
              </Paragraph>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Get Free Quote
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="secondary" size="lg">
                    Back to Portfolio
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
