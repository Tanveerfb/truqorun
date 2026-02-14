/**
 * Blog Page
 * 
 * Blog listing page with post previews and categories.
 * 
 * [PLACEHOLDER]: Integrate with CMS or content source for dynamic blog posts
 * [TODO]: Add pagination, search, and category filtering
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { Container, Section, Heading, Paragraph, Card } from '@/components';
import { Header, Footer, Main, Navigation } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Blog - Truqorun',
  description: 'Read the latest articles about web development, design trends, and technology insights from Truqorun.',
};

export default function BlogPage() {
  // [PLACEHOLDER]: Replace with actual blog posts from CMS or API
  const posts = [
    {
      slug: 'modern-web-development-trends-2026',
      title: 'Modern Web Development Trends in 2026',
      excerpt:
        'Explore the latest trends shaping the future of web development, from AI integration to advanced frameworks.',
      author: 'Truqorun Team',
      date: '2026-02-10',
      category: 'Web Development',
      readTime: '5 min read',
    },
    {
      slug: 'choosing-right-tech-stack',
      title: 'Choosing the Right Tech Stack for Your Project',
      excerpt:
        'A comprehensive guide to selecting the best technologies for your web application based on your specific needs.',
      author: 'Truqorun Team',
      date: '2026-02-05',
      category: 'Technology',
      readTime: '8 min read',
    },
    {
      slug: 'ui-ux-design-best-practices',
      title: 'UI/UX Design Best Practices for 2026',
      excerpt:
        'Learn the essential principles of creating beautiful, user-friendly interfaces that drive engagement.',
      author: 'Truqorun Team',
      date: '2026-01-28',
      category: 'Design',
      readTime: '6 min read',
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
                Blog & Insights
              </Heading>
              <Paragraph size="lg" className="mx-auto max-w-3xl">
                Stay updated with the latest trends, tips, and insights in web 
                development, design, and technology.
              </Paragraph>
            </div>
          </Container>
        </Section>

        {/* Featured Post */}
        <Section spacing="lg" background="secondary">
          <Container size="lg">
            <div className="mb-8">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Featured Post
              </span>
            </div>
            <Card className="md:flex md:gap-8">
              {/* [PLACEHOLDER DESIGN]: Featured image */}
              <div className="mb-4 h-64 md:mb-0 md:h-auto md:w-1/2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <span className="text-sm text-foreground-muted">[Featured Image]</span>
              </div>
              <div className="md:w-1/2">
                <div className="mb-3 flex items-center gap-4 text-sm text-foreground-secondary">
                  <span>Web Development</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>
                <Heading level={2} className="mb-4">
                  {posts[0].title}
                </Heading>
                <Paragraph className="mb-6">{posts[0].excerpt}</Paragraph>
                <Link
                  href={`/blog/${posts[0].slug}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                >
                  Read More →
                </Link>
              </div>
            </Card>
          </Container>
        </Section>

        {/* Blog Posts Grid */}
        <Section spacing="lg">
          <Container size="lg">
            <Heading level={2} className="mb-12">
              Latest Articles
            </Heading>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="h-full transition-all hover:shadow-lg">
                    {/* [PLACEHOLDER DESIGN]: Post thumbnail */}
                    <div className="mb-4 h-48 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <span className="text-sm text-foreground-muted">[Post Image]</span>
                    </div>
                    
                    <div className="mb-3 flex items-center gap-4 text-xs text-foreground-secondary">
                      <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="mb-3 text-xl font-semibold text-foreground">
                      {post.title}
                    </h3>
                    
                    <Paragraph size="sm" className="mb-4">
                      {post.excerpt}
                    </Paragraph>
                    
                    <div className="text-xs text-foreground-muted">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            {/* [TODO]: Add pagination */}
            <div className="mt-12 text-center">
              <Paragraph size="sm" className="text-foreground-muted">
                [PLACEHOLDER]: Add pagination controls here
              </Paragraph>
            </div>
          </Container>
        </Section>

        {/* Newsletter CTA */}
        <Section spacing="lg" background="accent">
          <Container size="md">
            <div className="text-center">
              <Heading level={2} className="mb-4">
                Stay Updated
              </Heading>
              <Paragraph className="mb-6">
                Subscribe to our newsletter for the latest articles and insights 
                delivered directly to your inbox.
              </Paragraph>
              {/* [PLACEHOLDER]: Add newsletter signup form */}
              <div className="mx-auto max-w-md">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 rounded-lg border border-input-border bg-input px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <button className="rounded-lg bg-primary px-6 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </Main>

      <Footer />
    </div>
  );
}
