/**
 * Contact Form Configuration
 * 
 * This file contains all static configuration for the contact form including
 * project types, features, options, and validation rules.
 * 
 * [EXTENSIBILITY]: To add new project types or features:
 * 1. Add the new type to the ProjectType enum in types/form.ts
 * 2. Add configuration in PROJECT_TYPES array below
 * 3. Add feature checklist in FEATURES_BY_PROJECT_TYPE
 * 
 * @module lib/formConfig
 */

import type { ProjectType, FeatureOption, BudgetRange, Timeline, ContactTime } from '@/types/form';

/**
 * Project type definitions with display labels
 */
export const PROJECT_TYPES: Array<{
  value: ProjectType;
  label: string;
  description: string;
}> = [
  {
    value: 'ecommerce',
    label: 'E-commerce',
    description: 'Online store with shopping cart and payment processing',
  },
  {
    value: 'landing-page',
    label: 'Landing Page',
    description: 'Single page to promote a product or service',
  },
  {
    value: 'cms',
    label: 'CMS',
    description: 'Content management system for blogs or news sites',
  },
  {
    value: 'portfolio',
    label: 'Portfolio',
    description: 'Showcase your work and projects',
  },
  {
    value: 'custom',
    label: 'Custom',
    description: 'Custom web application with specific requirements',
  },
  {
    value: 'not-sure',
    label: 'Not sure',
    description: "I need help determining what's best for my project",
  },
];

/**
 * Dynamic feature checklists by project type
 * [EXTENSIBLE]: Add new features for each project type here
 */
export const FEATURES_BY_PROJECT_TYPE: Record<ProjectType, FeatureOption[]> = {
  'ecommerce': [
    { id: 'product-catalog', label: 'Product catalog with categories' },
    { id: 'shopping-cart', label: 'Shopping cart functionality' },
    { id: 'payment-gateway', label: 'Payment gateway integration (Stripe, PayPal)' },
    { id: 'inventory', label: 'Inventory management' },
    { id: 'user-accounts', label: 'User accounts and order history' },
    { id: 'shipping', label: 'Shipping calculator and integrations' },
    { id: 'reviews', label: 'Product reviews and ratings' },
    { id: 'wishlist', label: 'Wishlist functionality' },
    { id: 'mobile-app', label: 'Mobile app (iOS/Android)' },
  ],
  'landing-page': [
    { id: 'hero-section', label: 'Hero section with call-to-action' },
    { id: 'contact-form', label: 'Contact form integration' },
    { id: 'testimonials', label: 'Customer testimonials section' },
    { id: 'pricing-table', label: 'Pricing table' },
    { id: 'newsletter', label: 'Newsletter signup' },
    { id: 'analytics', label: 'Analytics and tracking (Google Analytics, etc.)' },
    { id: 'social-proof', label: 'Social proof and trust badges' },
    { id: 'video-bg', label: 'Video background or multimedia' },
  ],
  'cms': [
    { id: 'blog', label: 'Blog with categories and tags' },
    { id: 'search', label: 'Search functionality' },
    { id: 'comments', label: 'Comment system' },
    { id: 'seo', label: 'SEO optimization tools' },
    { id: 'multi-author', label: 'Multi-author support' },
    { id: 'media-library', label: 'Media library and management' },
    { id: 'scheduling', label: 'Content scheduling' },
    { id: 'rss', label: 'RSS feeds' },
    { id: 'multilingual', label: 'Multi-language support' },
  ],
  'portfolio': [
    { id: 'project-showcase', label: 'Project showcase with filtering' },
    { id: 'image-gallery', label: 'Image gallery with lightbox' },
    { id: 'case-studies', label: 'Detailed case studies' },
    { id: 'resume', label: 'Downloadable resume/CV' },
    { id: 'testimonials', label: 'Client testimonials' },
    { id: 'contact-form', label: 'Contact form' },
    { id: 'blog', label: 'Blog section' },
    { id: 'animations', label: 'Animations and transitions' },
  ],
  'custom': [
    { id: 'custom-ui', label: 'Custom UI/UX design' },
    { id: 'api-integration', label: 'Third-party API integrations' },
    { id: 'real-time', label: 'Real-time features (WebSockets, etc.)' },
    { id: 'database', label: 'Complex database architecture' },
    { id: 'authentication', label: 'User authentication and authorization' },
    { id: 'dashboard', label: 'Admin dashboard' },
    { id: 'reporting', label: 'Reporting and analytics' },
    { id: 'mobile-responsive', label: 'Mobile responsive design' },
    { id: 'pwa', label: 'Progressive Web App (PWA)' },
  ],
  'not-sure': [
    { id: 'online-presence', label: 'I need an online presence' },
    { id: 'sell-products', label: 'I want to sell products/services online' },
    { id: 'share-content', label: 'I want to share content regularly' },
    { id: 'showcase-work', label: 'I want to showcase my work' },
    { id: 'booking', label: 'I need booking/scheduling functionality' },
    { id: 'membership', label: 'I need a membership site' },
    { id: 'help-decide', label: 'I need help deciding what I need' },
  ],
};

/**
 * Budget options in AUD
 */
export const BUDGET_OPTIONS: Array<{
  value: BudgetRange;
  label: string;
}> = [
  { value: '1k-2k', label: 'AUD $1,000 - $2,000' },
  { value: '2k-4k', label: 'AUD $2,000 - $4,000' },
  { value: '4k-7k', label: 'AUD $4,000 - $7,000' },
  { value: '7k+', label: 'AUD $7,000+' },
  { value: 'not-sure', label: 'Not sure yet' },
];

/**
 * Timeline options
 */
export const TIMELINE_OPTIONS: Array<{
  value: Timeline;
  label: string;
}> = [
  { value: 'asap', label: 'ASAP (As soon as possible)' },
  { value: '1-2-weeks', label: '1-2 weeks' },
  { value: '2-4-weeks', label: '2-4 weeks' },
  { value: '1-2-months', label: '1-2 months' },
  { value: '2-3-months', label: '2-3 months' },
  { value: 'flexible', label: 'Flexible timeline' },
];

/**
 * Best time to contact options
 */
export const CONTACT_TIME_OPTIONS: Array<{
  value: ContactTime;
  label: string;
}> = [
  { value: 'morning', label: 'Morning (9 AM - 12 PM)' },
  { value: 'afternoon', label: 'Afternoon (12 PM - 5 PM)' },
  { value: 'evening', label: 'Evening (5 PM - 8 PM)' },
  { value: 'anytime', label: 'Anytime' },
];

/**
 * Form step configuration
 */
export const FORM_STEPS = [
  {
    id: 1,
    title: 'Project Type',
    description: 'What type of project are you looking for?',
  },
  {
    id: 2,
    title: 'Features & Requirements',
    description: 'What features do you need?',
  },
  {
    id: 3,
    title: 'Project Details',
    description: 'Tell us more about your project',
  },
  {
    id: 4,
    title: 'Contact Information',
    description: 'How can we reach you?',
  },
  {
    id: 5,
    title: 'Review & Submit',
    description: 'Review your information before submitting',
  },
];
