import { Metadata } from "next";
import {
  Container,
  Section,
  Heading,
  Paragraph,
  Card,
  Button,
} from "@/components";
import { Accordion } from "@/components/ui/Accordion";
import { Header, Footer, Main, Navigation } from "@/components/layout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Content Management Systems - Truqorun",
  description:
    "Custom CMS solutions for blogs, documentation, and knowledge bases. Manage your content without technical skills.",
};

export default function CMSPage() {
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
              <div className="mb-6 text-6xl">📝</div>
              <Heading level={1} className="mb-6">
                Content Management Systems
              </Heading>
              <Paragraph size="lg" className="mx-auto max-w-3xl">
                You shouldn&apos;t need a developer every time you want to
                publish a blog post or update documentation. We build content
                management systems that let you focus on writing, not wrestling
                with admin panels.
              </Paragraph>
            </div>
          </Container>
        </Section>

        {/* Main Content */}
        <Section spacing="lg">
          <Container size="md">
            <div className="space-y-12">
              <div>
                <Heading level={2} className="mb-4">
                  Why Build a Custom CMS?
                </Heading>
                <Paragraph className="mb-4">
                  WordPress works for a lot of people. But it&apos;s also slow,
                  bloated with features you&apos;ll never use, and needs
                  constant security updates. Not to mention the plugin ecosystem
                  that can break your site with a single update.
                </Paragraph>
                <Paragraph className="mb-4">
                  We build lightweight CMSs that do exactly what you need. Want
                  a blog? You get a blog, not a blog plus forums plus e-commerce
                  plus 47 other features. The result is faster, more secure, and
                  way easier to maintain.
                </Paragraph>
              </div>

              <div>
                <Heading level={2} className="mb-4">
                  What We Build
                </Heading>
                <div className="space-y-6">
                  <Card>
                    <h3 className="mb-3 text-lg font-semibold">
                      Blog Platforms
                    </h3>
                    <Paragraph size="sm" className="mb-3">
                      Clean, fast blogging with all the essentials. Write posts,
                      add images, organize by categories and tags. Support for
                      drafts, scheduling, and SEO metadata. Optional features
                      like comments, author profiles, and newsletter signups.
                    </Paragraph>
                    <Paragraph size="sm">
                      We can integrate with markdown for that clean writing
                      experience devs love, or build a rich text editor if you
                      prefer WYSIWYG. Your choice.
                    </Paragraph>
                  </Card>

                  <Card>
                    <h3 className="mb-3 text-lg font-semibold">
                      Documentation Sites
                    </h3>
                    <Paragraph size="sm" className="mb-3">
                      API docs, product guides, internal wikis—whatever you need
                      to document. Organized sidebar navigation, search
                      functionality, code syntax highlighting, versioning for
                      different releases.
                    </Paragraph>
                    <Paragraph size="sm">
                      We can set it up so your docs live in Git alongside your
                      code, or build a database-backed system if you need more
                      flexibility. Both work great.
                    </Paragraph>
                  </Card>

                  <Card>
                    <h3 className="mb-3 text-lg font-semibold">
                      Knowledge Bases
                    </h3>
                    <Paragraph size="sm" className="mb-3">
                      Help centers and FAQ systems that actually help. Organized
                      by topics, searchable, with related articles suggestions.
                      Track popular articles to see what your users care about.
                    </Paragraph>
                    <Paragraph size="sm">
                      Can include features like feedback buttons (&quot;Was this
                      helpful?&quot;), article ratings, and analytics to show
                      which pages are getting the most traffic.
                    </Paragraph>
                  </Card>

                  <Card>
                    <h3 className="mb-3 text-lg font-semibold">
                      Multi-Author Platforms
                    </h3>
                    <Paragraph size="sm" className="mb-3">
                      Got a team writing content? We build systems with user
                      roles and permissions. Writers can create drafts, editors
                      can review and publish, admins can manage everything.
                      Workflow that makes sense.
                    </Paragraph>
                    <Paragraph size="sm">
                      Optional editorial workflow with approval processes,
                      content calendar views, and collaboration features if your
                      team needs them.
                    </Paragraph>
                  </Card>
                </div>
              </div>

              <div>
                <Heading level={2} className="mb-4">
                  Admin Interface
                </Heading>
                <Paragraph className="mb-4">
                  The admin panel is where you&apos;ll spend your time, so it
                  needs to be good. We build interfaces that are clean and
                  intuitive—no hunting through menus to find basic features.
                </Paragraph>
                <Paragraph className="mb-4">
                  Preview your content before publishing, see what it looks like
                  on mobile, check all your metadata. Auto-save means you
                  won&apos;t lose work if your browser crashes. Media library
                  for managing images and files with drag-and-drop uploads.
                </Paragraph>
                <Paragraph className="mb-4">
                  We can also build different admin interfaces depending on your
                  needs. Some clients want everything in a traditional
                  dashboard, others prefer editing content directly on the page.
                  We&apos;re flexible.
                </Paragraph>
              </div>

              <div>
                <Heading level={2} className="mb-4">
                  Content Features
                </Heading>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <h3 className="mb-2 text-lg font-semibold">
                      Rich Text Editor
                    </h3>
                    <Paragraph size="sm">
                      Full formatting options—headings, lists, links, images,
                      embeds. Clean up messy pasted content automatically.
                      Keyboard shortcuts for power users.
                    </Paragraph>
                  </Card>
                  <Card>
                    <h3 className="mb-2 text-lg font-semibold">
                      Media Management
                    </h3>
                    <Paragraph size="sm">
                      Upload images and files, organize in folders, automatic
                      image optimization and resizing. Alt text fields for
                      accessibility.
                    </Paragraph>
                  </Card>
                  <Card>
                    <h3 className="mb-2 text-lg font-semibold">SEO Tools</h3>
                    <Paragraph size="sm">
                      Meta titles and descriptions, URL slugs, Open Graph data
                      for social sharing. Real-time preview of how your content
                      looks in search results.
                    </Paragraph>
                  </Card>
                  <Card>
                    <h3 className="mb-2 text-lg font-semibold">
                      Version History
                    </h3>
                    <Paragraph size="sm">
                      See previous versions of your content, compare changes,
                      restore old versions if you need to roll back. Never lose
                      work.
                    </Paragraph>
                  </Card>
                  <Card>
                    <h3 className="mb-2 text-lg font-semibold">
                      Search Functionality
                    </h3>
                    <Paragraph size="sm">
                      Fast, relevant search across all your content. Filters by
                      date, category, author. Handles typos and returns results
                      instantly.
                    </Paragraph>
                  </Card>
                  <Card>
                    <h3 className="mb-2 text-lg font-semibold">
                      Custom Fields
                    </h3>
                    <Paragraph size="sm">
                      Add whatever metadata makes sense for your content. Date
                      fields, dropdowns, checkboxes, relationships to other
                      content. Totally flexible.
                    </Paragraph>
                  </Card>
                </div>
              </div>

              <div>
                <Heading level={2} className="mb-4">
                  Headless CMS Option
                </Heading>
                <Paragraph className="mb-4">
                  If you want your content to power multiple frontends—website,
                  mobile app, digital displays, whatever—we can build a headless
                  CMS. Content managed in one place, exposed via API, consumed
                  wherever you need it.
                </Paragraph>
                <Paragraph className="mb-4">
                  This approach gives you maximum flexibility. Your content
                  isn&apos;t tied to a specific presentation layer. Change your
                  website design without touching your content. Build new
                  products that use the same content pool.
                </Paragraph>
                <Paragraph className="mb-4">
                  We can also integrate with existing headless CMS platforms
                  like Sanity, Contentful, or Strapi if that makes more sense
                  for your project. Or build something completely custom.
                  Depends on your needs.
                </Paragraph>
              </div>

              <div>
                <Heading level={2} className="mb-4">
                  Performance &amp; Security
                </Heading>
                <Paragraph className="mb-4">
                  Content-heavy sites can get slow if not built right. We use
                  static generation where possible—build HTML pages at deploy
                  time, serve them instantly. For dynamic content, smart caching
                  strategies keep things fast.
                </Paragraph>
                <Paragraph className="mb-4">
                  Security-wise, we follow best practices. Input validation, SQL
                  injection prevention, XSS protection, CSRF tokens. Regular
                  dependency updates to patch any vulnerabilities. Rate limiting
                  on auth endpoints to prevent brute force attacks.
                </Paragraph>
                <Paragraph className="mb-4">
                  Automatic backups of your content and database. If something
                  goes wrong, we can restore from backup quickly.
                </Paragraph>
              </div>

              <div>
                <Heading level={2} className="mb-4">
                  Tech Stack
                </Heading>
                <Paragraph className="mb-4">
                  Next.js for the frontend and API routes. Database typically
                  PostgreSQL with Prisma for type-safe database queries. Rich
                  text editor using TipTap or similar. Image hosting and
                  optimization through Cloudinary.
                </Paragraph>
                <Paragraph className="mb-4">
                  For markdown-based systems, we use MDX so you can embed React
                  components directly in your content. Great for documentation
                  that needs interactive examples.
                </Paragraph>
              </div>
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <Section spacing="lg">
          <Container size="md">
            <Heading level={2} className="text-center mb-8">
              CMS FAQs
            </Heading>
            <Accordion
              items={[
                {
                  title: "Do I need technical skills to use the CMS?",
                  content:
                    "Not at all. We design the editing experience so that anyone comfortable with a word processor can manage content. We also provide a walkthrough session once the site is live.",
                },
                {
                  title: "Can multiple people edit content at the same time?",
                  content:
                    "Yes. We set up role-based access so editors, authors, and admins each have appropriate permissions. Collaboration features depend on the CMS platform chosen.",
                },
                {
                  title: "Which CMS platforms do you work with?",
                  content:
                    "We build custom CMS solutions with headless platforms like Sanity, Contentful, or Strapi paired with a Next.js frontend. For simpler needs, MDX-based content management is also an option.",
                },
                {
                  title: "Can I preview changes before publishing?",
                  content:
                    "Yes. We implement draft/preview modes so you can see exactly how content will look on the live site before hitting publish.",
                },
                {
                  title: "What about SEO for CMS-managed content?",
                  content:
                    "Every CMS page includes editable meta titles, descriptions, and Open Graph fields. We also generate sitemaps automatically and add structured data where appropriate.",
                },
              ]}
              allowMultiple
            />
          </Container>
        </Section>

        {/* CTA Section */}
        <Section spacing="lg">
          <Container size="md">
            <Card className="text-center">
              <Heading level={2} className="mb-4">
                Ready to Own Your Content?
              </Heading>
              <Paragraph className="mb-6">
                Let&apos;s discuss what kind of content you&apos;re managing and
                build a system that actually works for your workflow.
              </Paragraph>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Get Started
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="secondary" size="lg">
                    All Services
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
