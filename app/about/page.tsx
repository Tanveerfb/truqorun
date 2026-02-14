/**
 * About Page
 * 
 * Company information including mission, vision, and team details.
 * 
 * [PLACEHOLDER]: Add actual team member profiles and company history
 */

import { Metadata } from 'next';
import { Container, Section, Heading, Paragraph, Card } from '@/components';
import { Header, Footer, Main, Navigation } from '@/components/layout';

export const metadata: Metadata = {
  title: 'About Us - Truqorun',
  description: 'Learn about Truqorun, our mission, vision, and the team behind modern web development solutions.',
};

export default function AboutPage() {
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
                Building the Future of Web Development
              </Heading>
              <Paragraph size="lg" className="mx-auto max-w-3xl">
                We&apos;re a team of passionate developers, designers, and strategists 
                dedicated to creating exceptional digital experiences that drive real business results.
              </Paragraph>
            </div>
          </Container>
        </Section>

        {/* Mission & Vision Section */}
        <Section spacing="lg" background="secondary">
          <Container size="lg">
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <h3 className="mb-4 text-2xl font-semibold">Our Mission</h3>
                <Paragraph>
                  {/* [PLACEHOLDER]: Add actual mission statement from content/WEBSITE_COPY.md */}
                  To empower businesses with cutting-edge web solutions that are beautiful, 
                  performant, and built to scale. We believe in creating technology that not 
                  only meets today&apos;s needs but anticipates tomorrow&apos;s challenges.
                </Paragraph>
              </Card>

              <Card>
                <h3 className="mb-4 text-2xl font-semibold">Our Vision</h3>
                <Paragraph>
                  {/* [PLACEHOLDER]: Add actual vision statement from content/WEBSITE_COPY.md */}
                  To be the go-to partner for businesses seeking modern, reliable, and 
                  innovative web solutions. We envision a digital landscape where every 
                  business, regardless of size, has access to premium web development services.
                </Paragraph>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Values Section */}
        <Section spacing="lg">
          <Container size="lg">
            <Heading level={2} className="mb-12 text-center">
              Our Values
            </Heading>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 text-4xl">⚡</div>
                <h3 className="mb-3 text-xl font-semibold">Speed & Efficiency</h3>
                <Paragraph size="sm">
                  We deliver high-quality solutions quickly without compromising on excellence. 
                  24-hour response time guaranteed.
                </Paragraph>
              </div>

              <div className="text-center">
                <div className="mb-4 text-4xl">🎯</div>
                <h3 className="mb-3 text-xl font-semibold">Quality First</h3>
                <Paragraph size="sm">
                  Every line of code is crafted with precision. We don&apos;t use templates or 
                  shortcuts—only clean, maintainable, production-ready code.
                </Paragraph>
              </div>

              <div className="text-center">
                <div className="mb-4 text-4xl">🤝</div>
                <h3 className="mb-3 text-xl font-semibold">Partnership</h3>
                <Paragraph size="sm">
                  We&apos;re not just vendors—we&apos;re your technology partners. Your success 
                  is our success, and we&apos;re committed to long-term relationships.
                </Paragraph>
              </div>
            </div>
          </Container>
        </Section>

        {/* Team Section */}
        <Section spacing="lg" background="secondary">
          <Container size="lg">
            <Heading level={2} className="mb-12 text-center">
              Meet the Team
            </Heading>
            
            {/* [PLACEHOLDER]: Add actual team member cards with photos and bios */}
            <div className="grid gap-8 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <div className="mb-4 h-48 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <span className="text-sm text-foreground-muted">[Team Photo]</span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Team Member {i}</h3>
                  <p className="mb-3 text-sm text-primary">Role/Title</p>
                  <Paragraph size="sm">
                    [PLACEHOLDER]: Add team member bio and background information.
                  </Paragraph>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      </Main>

      <Footer />
    </div>
  );
}
