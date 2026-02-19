/**
 * Blog Post Detail Page
 *
 * Renders individual blog posts stored in Supabase.
 * Content is rendered as HTML (created via the admin dashboard).
 */

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Container, Section, Heading, Paragraph, Button } from "@/components";
import { Header, Footer, Main, Navigation } from "@/components/layout";
import { Badge } from "@/components/ui/Badge";
import { getBlogPost, getBlogSlugs, formatDate } from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return { title: "Post Not Found - Truqorun" };

  return {
    title: `${post.title} - Blog | Truqorun`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.published_at ?? undefined,
      authors: [post.author],
      images: post.cover_image ? [{ url: post.cover_image }] : [],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header>
        <Navigation />
      </Header>

      <Main>
        {/* Header */}
        <Section spacing="xl">
          <Container size="md">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm text-foreground-secondary">
              <Link
                href="/blog"
                className="hover:text-primary transition-colors"
              >
                Blog
              </Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{post.title}</span>
            </nav>

            {/* Cover Image */}
            {post.cover_image && (
              <div className="mb-8 rounded-xl overflow-hidden border border-border">
                <Image
                  src={post.cover_image}
                  alt={post.title}
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="primary" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <Heading level={1} className="mb-4">
              {post.title}
            </Heading>

            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-foreground-secondary mb-8 pb-8 border-b border-border">
              <span className="font-medium">{post.author}</span>
              {post.published_at && (
                <>
                  <span>·</span>
                  <time dateTime={post.published_at}>
                    {formatDate(post.published_at)}
                  </time>
                </>
              )}
            </div>
          </Container>
        </Section>

        {/* Article Content */}
        <Section spacing="lg">
          <Container size="md">
            <article
              className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-heading prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:text-primary prose-code:bg-background-secondary prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none prose-pre:bg-background-secondary prose-pre:border prose-pre:border-border prose-img:rounded-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </Container>
        </Section>

        {/* CTA */}
        <Section spacing="lg" background="secondary">
          <Container size="md">
            <div className="text-center">
              <Heading level={2} className="mb-4">
                Need Help With Your Project?
              </Heading>
              <Paragraph className="mb-6">
                We build modern web applications using the technologies we write
                about. Let&apos;s discuss how we can help your business grow.
              </Paragraph>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Get Free Quote
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button variant="secondary" size="lg">
                    More Articles
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </Main>

      <Footer />
    </div>
  );
}
