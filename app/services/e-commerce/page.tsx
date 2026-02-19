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
  title: "E-commerce Websites - Truqorun",
  description:
    "Custom e-commerce platforms built with modern tech. Secure payments, inventory management, and checkout experiences that drive sales.",
};

export default function EcommercePage() {
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
              <div className="mb-6 text-6xl">🛒</div>
              <Heading level={1} className="mb-6">
                E-commerce Websites
              </Heading>
              <Paragraph size="lg" className="mx-auto max-w-3xl">
                Selling online shouldn&apos;t feel like wrestling with a clunky
                platform. We build custom e-commerce sites that handle products,
                payments, and orders without the bloat of off-the-shelf
                solutions.
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
                  Why Custom E-commerce?
                </Heading>
                <Paragraph className="mb-4">
                  Shopify and WooCommerce work fine if you fit their mold. But
                  the second you need something custom—special pricing logic,
                  unique product configurations, or integration with your
                  existing systems—you&apos;re hacking around limitations with
                  plugins and workarounds.
                </Paragraph>
                <Paragraph className="mb-4">
                  We write your e-commerce platform from scratch using modern
                  web tech. That means it does exactly what you need, nothing
                  more, nothing less. No monthly platform fees, no paying for
                  features you don&apos;t use, and no being stuck when you want
                  to scale.
                </Paragraph>
              </div>

              <div>
                <Heading level={2} className="mb-4">
                  Core Features
                </Heading>
                <div className="space-y-6">
                  <Card>
                    <h3 className="mb-3 text-lg font-semibold">
                      Product Management
                    </h3>
                    <Paragraph size="sm" className="mb-3">
                      Full control over your catalog. Add products, set prices,
                      manage inventory, organize by categories. Support for
                      variants (size, color, etc.), digital products,
                      subscriptions—whatever your business model needs.
                    </Paragraph>
                    <Paragraph size="sm">
                      We&apos;ll build you an admin dashboard where you can
                      manage everything without touching code. Bulk uploads via
                      CSV, image galleries, SEO fields per product.
                    </Paragraph>
                  </Card>

                  <Card>
                    <h3 className="mb-3 text-lg font-semibold">
                      Secure Payments
                    </h3>
                    <Paragraph size="sm" className="mb-3">
                      Integration with Stripe, PayPal, or whatever payment
                      processor you prefer. We handle the security side
                      properly—HTTPS everywhere, PCI compliance, proper token
                      handling so card data never touches your server.
                    </Paragraph>
                    <Paragraph size="sm">
                      Support for one-time purchases, subscriptions, payment
                      plans, whatever makes sense for your products. Customers
                      can save payment methods for faster checkout.
                    </Paragraph>
                  </Card>

                  <Card>
                    <h3 className="mb-3 text-lg font-semibold">
                      Inventory Management
                    </h3>
                    <Paragraph size="sm" className="mb-3">
                      Track stock levels across multiple warehouses if needed.
                      Automatic low-stock alerts, backorder handling, and SKU
                      management. Set up rules for when products go out of
                      stock—hide them, show &quot;sold out,&quot; or allow
                      pre-orders.
                    </Paragraph>
                    <Paragraph size="sm">
                      We can sync with your existing inventory system if
                      you&apos;ve already got one, or build you something clean
                      and simple if you&apos;re starting fresh.
                    </Paragraph>
                  </Card>

                  <Card>
                    <h3 className="mb-3 text-lg font-semibold">
                      Smart Search &amp; Filters
                    </h3>
                    <Paragraph size="sm" className="mb-3">
                      Nobody wants to scroll through 500 products. We implement
                      fast, relevant search so customers find what they&apos;re
                      looking for. Filtering by price, category, attributes,
                      whatever makes sense for your catalog.
                    </Paragraph>
                    <Paragraph size="sm">
                      For larger catalogs, we can integrate Algolia or Typesense
                      for instant search results with typo tolerance and smart
                      ranking.
                    </Paragraph>
                  </Card>

                  <Card>
                    <h3 className="mb-3 text-lg font-semibold">
                      Order Management
                    </h3>
                    <Paragraph size="sm" className="mb-3">
                      Dashboard to track orders, update statuses, handle
                      refunds, and communicate with customers. Customers get
                      automatic email confirmations, shipping updates, and order
                      history in their account.
                    </Paragraph>
                    <Paragraph size="sm">
                      Integration with shipping providers (USPS, UPS, FedEx) for
                      automatic label generation and tracking. Or connect to
                      whatever fulfillment service you use.
                    </Paragraph>
                  </Card>

                  <Card>
                    <h3 className="mb-3 text-lg font-semibold">
                      Customer Accounts
                    </h3>
                    <Paragraph size="sm" className="mb-3">
                      Let customers create accounts to save their info, track
                      orders, and manage subscriptions. Or keep it simple with
                      guest checkout—we&apos;re flexible.
                    </Paragraph>
                    <Paragraph size="sm">
                      Saved addresses, order history, wishlists, email
                      preferences. Everything you&apos;d expect from a polished
                      e-commerce experience.
                    </Paragraph>
                  </Card>
                </div>
              </div>

              <div>
                <Heading level={2} className="mb-4">
                  Custom Features
                </Heading>
                <Paragraph className="mb-4">
                  This is where custom development really shines. Need dynamic
                  pricing based on customer type or volume? Easy. Product
                  bundles? Sure. Custom shipping rules? No problem. Integration
                  with your ERP or warehouse management system? We can handle
                  that.
                </Paragraph>
                <Paragraph className="mb-4">
                  We&apos;ve built stores with complex product configurators
                  (think custom furniture or PC building), rental systems with
                  availability calendars, wholesale portals with tiered
                  pricing—basically, if you can describe how it should work, we
                  can build it.
                </Paragraph>
              </div>

              <div>
                <Heading level={2} className="mb-4">
                  Performance Matters
                </Heading>
                <Paragraph className="mb-4">
                  Every 100ms of delay costs you sales. We use server-side
                  rendering to get products on screen fast, lazy load images as
                  you scroll, and optimize everything for mobile networks.
                </Paragraph>
                <Paragraph className="mb-4">
                  Caching strategies mean your product pages load instantly even
                  with thousands of items. We balance real-time inventory
                  updates with performance so your site stays fast without
                  showing outdated stock levels.
                </Paragraph>
              </div>

              <div>
                <Heading level={2} className="mb-4">
                  Tech Stack
                </Heading>
                <Paragraph className="mb-4">
                  Next.js for the frontend and API routes. Database with
                  PostgreSQL or MongoDB depending on your data structure. Stripe
                  for payments (unless you need something else). Image hosting
                  on Cloudinary or similar for automatic optimization.
                </Paragraph>
                <Paragraph className="mb-4">
                  Deploy on Vercel for global CDN performance, or AWS if you
                  need more control. We set up staging environments so you can
                  test changes before they go live.
                </Paragraph>
              </div>

              <div>
                <Heading level={2} className="mb-4">
                  What About Maintenance?
                </Heading>
                <Paragraph className="mb-4">
                  Running an online store means keeping things updated and
                  secure. We offer ongoing maintenance plans that cover
                  dependency updates, security patches, and adding new features
                  as your business grows.
                </Paragraph>
                <Paragraph className="mb-4">
                  Check out our{" "}
                  <Link
                    href="/services/maintenance-support"
                    className="text-primary hover:underline"
                  >
                    Maintenance &amp; Support
                  </Link>{" "}
                  service for more details.
                </Paragraph>
              </div>
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <Section spacing="lg">
          <Container size="md">
            <Heading level={2} className="text-center mb-8">
              E-commerce FAQs
            </Heading>
            <Accordion
              items={[
                {
                  title: "Which e-commerce platform do you use?",
                  content:
                    "We build custom storefronts using Next.js paired with headless commerce backends like Shopify Storefront API or Snipcart. This gives you full design control with reliable payment and inventory management behind the scenes.",
                },
                {
                  title: "Can you migrate my existing store?",
                  content:
                    "Yes. We can migrate products, customers, and order history from platforms like WooCommerce, Magento, or legacy Shopify themes. We map everything carefully so nothing is lost during the transition.",
                },
                {
                  title: "How do you handle payments?",
                  content:
                    "We integrate with trusted payment gateways like Stripe. All transactions are processed over HTTPS with PCI-compliant providers—we never store card details on your server.",
                },
                {
                  title: "Will my store work on mobile?",
                  content:
                    "Absolutely. Every storefront we build is mobile-first and responsive. Product browsing, cart management, and checkout are all optimised for phones and tablets.",
                },
                {
                  title: "Can I manage products myself?",
                  content:
                    "Yes. We set up an admin dashboard or integrate with a headless CMS so you can add, edit, and remove products without any developer involvement.",
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
                Let&apos;s Build Your Store
              </Heading>
              <Paragraph className="mb-6">
                Tell us about your products, your customers, and what you need.
                We&apos;ll figure out the right approach and give you a
                realistic timeline.
              </Paragraph>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Start Your Project
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="secondary" size="lg">
                    See Examples
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
