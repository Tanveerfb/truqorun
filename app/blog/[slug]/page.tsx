/**
 * Blog Post Detail Page
 * 
 * Individual blog post page with dynamic routing.
 * Displays full post content with metadata.
 * 
 * [PLACEHOLDER]: Integrate with CMS or MDX for actual blog content
 * [TODO]: Add social sharing buttons and related posts
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { Container, Section, Heading, Paragraph } from '@/components';
import { Header, Footer, Main, Navigation } from '@/components/layout';

// [PLACEHOLDER]: This would typically fetch data from CMS or file system
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Blog Post - Truqorun`,
    description: 'Read the full article on Truqorun blog.',
  };
}

// [TODO]: Implement generateStaticParams for static generation
// export async function generateStaticParams() {
//   return [
//     { slug: 'modern-web-development-trends-2026' },
//     { slug: 'choosing-right-tech-stack' },
//     { slug: 'ui-ux-design-best-practices' },
//   ];
// }

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // [PLACEHOLDER]: Replace with actual post data from CMS or API
  const post = {
    title: 'Blog Post Title',
    author: 'Truqorun Team',
    date: '2026-02-14',
    category: 'Web Development',
    readTime: '5 min read',
    content: `
      This is placeholder content for the blog post. In a real implementation, 
      this would be loaded from a CMS, database, or MDX files.
      
      The post content would include formatted text, images, code snippets, 
      and other rich content elements.
    `,
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header>
        <Navigation />
      </Header>

      <Main>
        {/* Article Header */}
        <Section spacing="xl">
          <Container size="md">
            {/* Breadcrumb */}
            <div className="mb-8 flex items-center gap-2 text-sm text-foreground-secondary">
              <Link href="/blog" className="hover:text-primary">
                Blog
              </Link>
              <span>→</span>
              <span>{params.slug}</span>
            </div>

            {/* Category & Read Time */}
            <div className="mb-4 flex items-center gap-4 text-sm">
              <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                {post.category}
              </span>
              <span className="text-foreground-secondary">{post.readTime}</span>
            </div>

            {/* Title */}
            <Heading level={1} className="mb-6">
              {post.title}
            </Heading>

            {/* Meta Info */}
            <div className="mb-8 flex items-center gap-4 text-sm text-foreground-secondary">
              <span>By {post.author}</span>
              <span>•</span>
              <time>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>

            {/* [PLACEHOLDER DESIGN]: Featured image */}
            <div className="mb-12 h-96 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <span className="text-sm text-foreground-muted">[Featured Image]</span>
            </div>
          </Container>
        </Section>

        {/* Article Content */}
        <Section spacing="lg">
          <Container size="md">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              {/* [PLACEHOLDER]: Replace with actual MDX or rich content */}
              <Paragraph className="mb-6">
                [PLACEHOLDER CONTENT]: This is where the actual blog post content would appear. 
                In a production environment, this would be rendered from:
              </Paragraph>
              
              <ul className="my-6 list-disc pl-6 space-y-2">
                <li className="text-foreground-secondary">
                  MDX files for markdown-based content with React components
                </li>
                <li className="text-foreground-secondary">
                  A headless CMS like Contentful, Sanity, or Strapi
                </li>
                <li className="text-foreground-secondary">
                  A database with rich text content
                </li>
                <li className="text-foreground-secondary">
                  Static content files processed at build time
                </li>
              </ul>

              <Paragraph className="mb-6">
                The content would include proper formatting, syntax highlighting for code blocks, 
                embedded images, links, and other rich content elements.
              </Paragraph>

              <div className="my-8 rounded-lg border border-border bg-background-secondary p-6">
                <p className="text-sm text-foreground-secondary">
                  💡 <strong>Note:</strong> This is a placeholder page. Actual blog implementation 
                  would require setting up a content source and rendering system.
                </p>
              </div>
            </article>

            {/* [TODO]: Add social sharing buttons */}
            <div className="mt-12 pt-8 border-t border-border">
              <Paragraph size="sm" className="mb-4">
                Share this article:
              </Paragraph>
              <div className="flex gap-4">
                <span className="text-foreground-muted">[Social Share Buttons]</span>
              </div>
            </div>
          </Container>
        </Section>

        {/* Related Posts */}
        <Section spacing="lg" background="secondary">
          <Container size="lg">
            <Heading level={2} className="mb-8">
              Related Articles
            </Heading>
            <Paragraph size="sm" className="text-foreground-muted">
              [PLACEHOLDER]: Display related blog posts here
            </Paragraph>
          </Container>
        </Section>
      </Main>

      <Footer />
    </div>
  );
}
