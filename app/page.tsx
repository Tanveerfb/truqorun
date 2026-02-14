/**
 * Home Page
 * 
 * Main landing page showcasing the Truqorun brand and component system.
 * Demonstrates light/dark mode theming and design system components.
 * 
 * [PLACEHOLDER]: Replace with actual content from /content/WEBSITE_COPY.md
 */

import { Container, Card, Button } from "@/components";
import { Navigation } from "@/components/layout";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <Navigation />

      {/* Hero Section */}
      <section className="py-20">
        <Container size="lg">
          <div className="text-center">
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
              Modern Web Development
              <span className="block text-primary">Built for the Future</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-foreground-secondary">
              Premium web development services with cutting-edge technology and
              24-hour response time. We build modern, scalable applications that
              drive business growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="lg">
                Get Started
              </Button>
              <Button variant="secondary" size="lg">
                View Portfolio
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="border-t border-border bg-background-secondary py-20">
        <Container size="lg">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Our Services
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <h3 className="mb-3 text-xl font-semibold">Web Development</h3>
              <p className="text-foreground-secondary">
                Custom web applications built with Next.js, React, and modern
                technologies for optimal performance and user experience.
              </p>
            </Card>
            <Card>
              <h3 className="mb-3 text-xl font-semibold">UI/UX Design</h3>
              <p className="text-foreground-secondary">
                Beautiful, intuitive interfaces designed with your users in
                mind. Every pixel crafted for maximum impact and usability.
              </p>
            </Card>
            <Card>
              <h3 className="mb-3 text-xl font-semibold">Consulting</h3>
              <p className="text-foreground-secondary">
                Expert technical guidance to help you make the right technology
                decisions for your business goals and requirements.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <Container size="md">
          <Card className="text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
            <p className="mb-6 text-lg text-foreground-secondary">
              Let&apos;s discuss your project and build something amazing together.
            </p>
            <Button variant="primary" size="lg">
              Contact Us
            </Button>
          </Card>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background-secondary py-8">
        <Container>
          <div className="text-center text-sm text-foreground-secondary">
            <p>© 2026 Truqorun. All rights reserved.</p>
            <p className="mt-2">
              Built with Next.js, React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
