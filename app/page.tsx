/**
 * Home Page
 *
 * Main landing page showcasing the Truqorun brand and component system.
 * Features scroll-triggered animations, stats counters, testimonials,
 * and a polished hero section with Framer Motion.
 */

"use client";

import Link from "next/link";
import { Container, Card, Button, Heading, Paragraph } from "@/components";
import { Header, Footer, Main, Section, Navigation } from "@/components/layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { StatsCounter } from "@/components/ui/StatsCounter";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { BackToTop } from "@/components/ui/BackToTop";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Badge } from "@/components/ui/Badge";
import { Marquee } from "@/components/ui/Marquee";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiSupabase,
  SiVercel,
  SiNodedotjs,
  SiPostgresql,
  SiGithub,
  SiFigma,
} from "react-icons/si";

const techStack = [
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiReact, name: "React" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiFramer, name: "Framer Motion" },
  { icon: SiSupabase, name: "Supabase" },
  { icon: SiVercel, name: "Vercel" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiGithub, name: "GitHub" },
  { icon: SiFigma, name: "Figma" },
];

const testimonials = [
  {
    quote:
      "Truqorun delivered our healthcare website with incredible attention to detail. The team understood our complex requirements and built a platform that our staff actually enjoys using.",
    author: "Nobility Care Australia",
    role: "Healthcare Client",
    company: "nobilitycare.com.au",
  },
  {
    quote:
      "Working with Truqorun felt like having an in-house dev team. Quick responses, clean code, and they actually listen to feedback. Our digital transformation platform was delivered ahead of schedule.",
    author: "Simetrix DT",
    role: "Enterprise Client",
    company: "simetrixdt.vercel.app",
  },
  {
    quote:
      "The Lair of Evil Tools platform is packed with features and runs incredibly fast. Truqorun handled everything from auth to real-time features with no hiccups.",
    author: "Lair of Evil",
    role: "Platform Client",
    company: "lair-of-evil-tools.vercel.app",
  },
];

const serviceCards = [
  {
    icon: "🏢",
    title: "Business Landing Pages",
    description:
      "Make a powerful first impression with a custom landing page that converts visitors into customers.",
    href: "/services/business-landing-pages",
  },
  {
    icon: "🛒",
    title: "E-commerce Websites",
    description:
      "Sell online with confidence. Custom e-commerce platforms with secure payments and seamless checkout.",
    href: "/services/e-commerce",
  },
  {
    icon: "📝",
    title: "Content Management",
    description:
      "Take control of your content with a powerful CMS. Manage blogs and documentation with ease.",
    href: "/services/content-management-systems",
  },
  {
    icon: "🔧",
    title: "Maintenance & Support",
    description:
      "Keep your website running smoothly with 24-hour response time and continuous updates.",
    href: "/services/maintenance-support",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ScrollProgress />
      <Header>
        <Navigation />
      </Header>

      <Main>
        {/* Hero Section */}
        <Section spacing="xl">
          <Container size="lg">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Badge variant="primary" size="md" className="mb-6">
                  🚀 Modern Web Development Studio
                </Badge>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              >
                <Heading level={1} className="mb-6">
                  Build Your Digital Future
                  <span className="block brand-text-gradient">
                    with Modern Web Solutions
                  </span>
                </Heading>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                <Paragraph size="lg" className="mx-auto mb-8 max-w-2xl">
                  Custom web development that combines cutting-edge technology
                  with lightning-fast service. Based in Sydney, trusted
                  worldwide.
                </Paragraph>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
                className="flex flex-wrap justify-center gap-4"
              >
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
              </motion.div>

              {/* Keyboard shortcut hint */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-6 text-xs text-foreground-muted"
              >
                Press{" "}
                <kbd className="rounded border border-border bg-background-secondary px-1.5 py-0.5 text-[10px] font-medium">
                  Ctrl+K
                </kbd>{" "}
                to search the site
              </motion.p>
            </div>
          </Container>
        </Section>

        {/* Services Section */}
        <Section spacing="lg" background="secondary">
          <Container size="lg">
            <AnimatedSection animation="fadeUp">
              <div className="mb-12 text-center">
                <Heading level={2} className="mb-4">
                  What We Build
                </Heading>
                <Paragraph>
                  Custom web solutions tailored to your business needs. No
                  templates, no website builders—just clean, modern code.
                </Paragraph>
              </div>
            </AnimatedSection>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {serviceCards.map((service, index) => (
                <AnimatedSection
                  key={service.title}
                  animation="fadeUp"
                  delay={index * 0.1}
                >
                  <Card hoverable className="h-full">
                    <div className="mb-4 text-4xl">{service.icon}</div>
                    <h3 className="mb-3 text-xl font-semibold">
                      {service.title}
                    </h3>
                    <Paragraph size="sm">{service.description}</Paragraph>
                    <Link
                      href={service.href}
                      className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Learn More →
                    </Link>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </Section>

        {/* Stats Section */}
        <Section spacing="lg">
          <Container size="lg">
            <AnimatedSection animation="fadeUp">
              <div className="mb-12 text-center">
                <Heading level={2} className="mb-4">
                  Trusted by Businesses
                </Heading>
                <Paragraph>
                  Numbers that reflect our commitment to quality and client
                  satisfaction.
                </Paragraph>
              </div>
            </AnimatedSection>

            <div className="grid gap-8 md:grid-cols-4">
              <StatsCounter value={4} suffix="+" label="Live Projects" />
              <StatsCounter
                value={100}
                suffix="%"
                label="Client Satisfaction"
              />
              <StatsCounter value={24} suffix="h" label="Response Time" />
              <StatsCounter
                value={0}
                suffix=""
                prefix=""
                label="Templates Used"
              />
            </div>
          </Container>
        </Section>

        {/* Why Choose Section */}
        <Section spacing="lg" background="secondary">
          <Container size="lg">
            <AnimatedSection animation="fadeUp">
              <div className="mb-12 text-center">
                <Heading level={2} className="mb-4">
                  Why Partner with Truqorun?
                </Heading>
                <Paragraph>
                  We&apos;re not just developers—we&apos;re your technology
                  partners committed to your success.
                </Paragraph>
              </div>
            </AnimatedSection>

            <div className="grid gap-8 md:grid-cols-3">
              <AnimatedSection animation="fadeUp" delay={0}>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-3xl">
                    🚀
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">
                    Built for the Future
                  </h3>
                  <Paragraph size="sm">
                    We use Next.js, React, and TypeScript—modern technologies
                    that ensure your project is fast, scalable, and
                    future-proof.
                  </Paragraph>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeUp" delay={0.1}>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-warning/10 text-3xl">
                    ⚡
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">
                    Lightning Fast Response
                  </h3>
                  <Paragraph size="sm">
                    24-hour guaranteed response time. We value your time and
                    deliver projects quickly without sacrificing quality.
                  </Paragraph>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeUp" delay={0.2}>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-success/10 text-3xl">
                    💯
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">
                    100% Custom Code
                  </h3>
                  <Paragraph size="sm">
                    No templates or website builders. Every line of code is
                    crafted specifically for your needs and brand.
                  </Paragraph>
                </div>
              </AnimatedSection>
            </div>
          </Container>
        </Section>

        {/* Testimonials Section */}
        <Section spacing="lg">
          <Container size="lg">
            <AnimatedSection animation="fadeUp">
              <div className="mb-12 text-center">
                <Heading level={2} className="mb-4">
                  What Our Clients Say
                </Heading>
                <Paragraph>
                  Real feedback from businesses we&apos;ve helped grow.
                </Paragraph>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scaleUp">
              <TestimonialCarousel testimonials={testimonials} />
            </AnimatedSection>
          </Container>
        </Section>

        {/* Tech Stack Section */}
        <Section spacing="lg" background="secondary">
          <Container size="lg">
            <AnimatedSection animation="fadeUp">
              <div className="mb-12 text-center">
                <Heading level={2} className="mb-4">
                  Our Technology Stack
                </Heading>
                <Paragraph>
                  We use the best tools in the industry to deliver exceptional
                  results.
                </Paragraph>
              </div>
            </AnimatedSection>
          </Container>

          {/* Full-width marquee — sits outside Container for edge-to-edge scroll */}
          <Marquee speed={30} pauseOnHover>
            {techStack.map(({ icon: Icon, name }) => (
              <div
                key={name}
                className="flex flex-col items-center gap-2 px-4 opacity-70 hover:opacity-100 transition-opacity"
              >
                <Icon className="h-10 w-10 text-foreground" />
                <span className="text-xs font-medium text-foreground-secondary whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </Marquee>
        </Section>

        {/* CTA Section */}
        <Section spacing="lg">
          <Container size="md">
            <AnimatedSection animation="scaleUp">
              <Card className="text-center relative overflow-hidden">
                {/* Gradient accent */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
                <div className="relative">
                  <Heading level={2} className="mb-4">
                    Ready to Get Started?
                  </Heading>
                  <Paragraph className="mb-6">
                    Let&apos;s discuss your project and build something amazing
                    together. Get a free quote and consultation within 24 hours.
                  </Paragraph>
                  <Link href="/contact">
                    <Button variant="primary" size="lg">
                      Get Free Quote
                    </Button>
                  </Link>
                </div>
              </Card>
            </AnimatedSection>
          </Container>
        </Section>
      </Main>

      <Footer />
      <BackToTop />
    </div>
  );
}
