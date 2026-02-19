/**
 * Blog Page
 *
 * Lists all published blog posts from Supabase.
 * Posts are created and managed via the admin dashboard.
 *
 * @module app/blog/page
 */

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container, Section, Heading, Paragraph, Card } from "@/components";
import { Header, Footer, Main, Navigation } from "@/components/layout";
import { Badge } from "@/components/ui/Badge";
import { getAllBlogPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog - Truqorun",
  description:
    "Articles about web development, design trends, and technology insights from the Truqorun team.",
};

export const revalidate = 60; // ISR — revalidate every 60 seconds

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header>
        <Navigation />
      </Header>

      <Main>
        <Section spacing="xl">
          <Container size="lg">
            <div className="text-center mb-12">
              <Heading level={1} className="mb-6">
                Blog
              </Heading>
              <Paragraph size="lg" className="max-w-2xl mx-auto">
                Insights on web development, design trends, and technology from
                the Truqorun team.
              </Paragraph>
            </div>

            {posts.length === 0 ? (
              <div className="text-center py-20">
                <div className="mb-8 text-6xl">📝</div>
                <Heading level={2} className="mb-6">
                  Blog Coming Soon
                </Heading>
                <Paragraph size="lg" className="max-w-2xl mx-auto mb-8">
                  We&apos;re preparing amazing content about web development,
                  design trends, and technology insights. Check back soon!
                </Paragraph>
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group"
                  >
                    <Card hoverable className="h-full flex flex-col">
                      {/* Cover Image */}
                      {post.cover_image && (
                        <div className="mb-4 -mx-6 -mt-6 rounded-t-lg overflow-hidden">
                          <Image
                            src={post.cover_image}
                            alt={post.title}
                            width={600}
                            height={300}
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="primary" size="sm">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Title */}
                      <h2 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <Paragraph size="sm" className="mb-4 flex-1">
                        {post.excerpt}
                      </Paragraph>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-foreground-muted border-t border-border pt-4 mt-auto">
                        <span>{post.author}</span>
                        {post.published_at && (
                          <time dateTime={post.published_at}>
                            {formatDate(post.published_at)}
                          </time>
                        )}
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </Container>
        </Section>
      </Main>

      <Footer />
    </div>
  );
}
