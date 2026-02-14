# Truqorun

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Tanveerfb/truqorun/blob/main/.github/CONTRIBUTING.md)

> Premium web development services with cutting-edge technology and modern design principles.

---

## 🚀 About Truqorun

Truqorun is a modern web development startup focused on delivering high-quality, scalable web applications using the latest technologies. We specialize in **Next.js**, **React**, **TypeScript**, and **Tailwind CSS** to build performant, accessible, and beautiful digital experiences.

### ✨ Key Features

- 🎨 **Modern Design System** - Comprehensive UI component library with light/dark mode
- ⚡ **High Performance** - Built on Next.js 16 with App Router and Server Components
- 🔒 **Type Safety** - Full TypeScript support throughout the codebase
- 🎯 **Accessible** - WCAG-compliant components with keyboard navigation
- 📱 **Responsive** - Mobile-first design that works on all devices
- 🌙 **Dark Mode** - System-aware theme switching with smooth transitions
- 🧩 **Modular Architecture** - Feature-based component organization for scalability

---

## 🛠️ Tech Stack

### Core Framework

- **[Next.js 16.1](https://nextjs.org/)** - React framework with App Router
- **[React 19.2](https://react.dev/)** - UI library with latest features
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & Design

- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)** - Heading font
- **[Inter](https://fonts.google.com/specimen/Inter)** - Body text font

### Development Tools

- **[ESLint](https://eslint.org/)** - Code linting and quality
- **[PostCSS](https://postcss.org/)** - CSS processing

---

## 📦 Installation

### Prerequisites

- **Node.js** 20.x or higher
- **npm**, **yarn**, **pnpm**, or **bun**

### Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/Tanveerfb/truqorun.git
   cd truqorun
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
truqorun/
├── app/                      # Next.js App Router
│   ├── globals.css          # Global styles and theme variables
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Homepage
├── components/              # Reusable components
│   ├── ui/                  # UI components (Button, Card, etc.)
│   ├── layout/              # Layout components
│   │   ├── navbar/          # Modular navigation components
│   │   ├── Navigation.tsx   # Main navigation component
│   │   └── ThemeProvider.tsx
│   └── features/            # Feature-specific components
├── content/                 # Content and copywriting
├── public/                  # Static assets
├── .github/                 # GitHub templates and workflows
│   ├── CONTRIBUTING.md      # Contribution guidelines
│   ├── ISSUE_TEMPLATE/      # Issue templates
│   └── PULL_REQUEST_TEMPLATE.md
└── ...config files
```

---

## 🎨 Design System

### Typography

- **Headings**: Space Grotesk (Bold, geometric, modern)
- **Body**: Inter (Clean, readable, versatile)

### Color Palette

Our design system includes a comprehensive color palette optimized for both light and dark modes:

- **Primary**: Blue - Action and interaction
- **Accent**: Orange - Highlights and CTAs
- **Success**: Green - Positive actions
- **Warning**: Amber - Caution states
- **Danger**: Red - Errors and destructive actions

### Theme System

The application supports three theme modes:

- **Light Mode** - Clean, bright interface
- **Dark Mode** - Rich, comfortable dark interface
- **System** - Automatically matches OS preference

Users can toggle between modes using the theme switcher in the navigation.

---

## 🧩 Component Library

### UI Components

- **Button** - Various sizes and variants (primary, secondary, danger)
- **Card** - Content containers with hover effects
- **Container** - Responsive layout wrapper

### Layout Components

- **ThemeProvider** - Theme context and management
- **ThemeToggle** - Theme switching button
- **Navigation** - Enhanced modular navigation bar
  - **NavLogo** - Brand/logo component with placeholder
  - **NavLink** - Reusable link with active state highlighting
  - **MobileMenu** - Responsive mobile menu with animations
  - **MobileMenuButton** - Hamburger/close toggle button
- **Header** - Sticky header wrapper
- **Footer** - Site-wide footer with contact info
- **Main** - Semantic main content wrapper

All components include:

- ✅ TypeScript types
- ✅ JSDoc documentation
- ✅ Accessibility features
- ✅ Dark mode support
- ✅ Responsive design

### Navigation Module

The Navigation component has been enhanced with a modular architecture for better maintainability and reusability:

**Features:**

- 🎯 **Active State Highlighting** - Visual indication of current page using Next.js pathname detection
- 📱 **Mobile Responsive** - Slide-down menu with smooth animations for small screens
- ♿ **Fully Accessible** - WCAG 2.1 AA compliant with skip links, ARIA labels, and keyboard navigation
- 🌙 **Dark Mode Compatible** - Seamless theme switching with proper contrast ratios
- 🧩 **Modular Components** - Separate components for logo, links, mobile menu, and buttons
- 🎨 **Customizable** - Easy to update links, styling, and branding

**Components:**

- `Navigation` - Main orchestrator component
- `NavLogo` - Brand/logo display ([PLACEHOLDER] for actual logo image)
- `NavLink` - Individual navigation link with active state
- `MobileMenu` - Mobile navigation panel
- `MobileMenuButton` - Hamburger/close toggle

For detailed documentation, see [`components/layout/navbar/README.md`](components/layout/navbar/README.md).

---

## ♿ Accessibility

We take accessibility seriously at Truqorun. Our website includes:

- **WCAG 2.1 AA Compliance** - Following web accessibility guidelines
- **Keyboard Navigation** - Full keyboard support with visible focus indicators
- **Screen Reader Support** - ARIA labels, live regions, and semantic HTML
- **Skip Links** - Quick navigation to main content
- **Mobile Navigation** - Accessible mobile menu with proper ARIA attributes
- **Form Accessibility** - Error announcements, field descriptions, and validation
- **Color Contrast** - Proper contrast ratios for text and UI elements
- **Responsive Design** - Works on all devices and screen sizes

### Accessibility Features

- Skip-to-content link for keyboard users
- ARIA live regions for dynamic content updates
- Proper heading hierarchy (h1-h6)
- Alt text for all images (where applicable)
- Focus management in modals and overlays
- Error messages with role="alert"
- Form labels and field descriptions

---

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 🤝 Contributing

We welcome contributions from the community! Please read our [Contributing Guidelines](.github/CONTRIBUTING.md) before submitting a pull request.

### Quick Contribution Guide

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'feat: add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

We follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

---

## 🗺️ Roadmap

### Current Version: 0.1.0

### ✅ Completed Features

- [x] **Multi-step Contact Form** - 5-step wizard with validation
- [x] **Dashboard System** - Form submissions management
- [x] **Design System** - Comprehensive UI component library
- [x] **Dark Mode** - System-aware theme switching
- [x] **Responsive Navigation** - Mobile menu with accessibility
- [x] **Database Integration** - Supabase backend setup
- [x] **API Routes** - Form submission endpoints
- [x] **Accessibility Features** - WCAG 2.1 AA compliant
- [x] **Error Handling** - Error boundaries and validation
- [x] **TypeScript** - Full type safety throughout

### 🚧 In Progress

- [ ] **Email Notifications** - Resend integration (ready to configure)
- [ ] **Testing Infrastructure** - Jest + React Testing Library
- [ ] **Content Integration** - Fill remaining placeholders
- [ ] **Documentation** - Component usage examples

### 📋 Upcoming Features

**High Priority (Good First Issues)**

- [ ] Dashboard authentication system
- [ ] Rate limiting for API endpoints
- [ ] Blog CMS integration (MDX or Sanity)
- [ ] Portfolio project detail pages
- [ ] Image optimization and upload support
- [ ] Newsletter signup integration
- [ ] SEO optimization (meta tags, sitemap)

**Medium Priority**

- [ ] Analytics integration (Vercel/Google Analytics)
- [ ] Performance monitoring
- [ ] E2E testing (Playwright)
- [ ] Advanced dashboard features (export, filtering)
- [ ] Social sharing buttons
- [ ] Search functionality

**Low Priority**

- [ ] CI/CD pipeline enhancements
- [ ] Internationalization (i18n)
- [ ] Advanced animations and transitions
- [ ] A/B testing framework

### 🔮 Long-term Goals

- [ ] Mobile app (React Native)
- [ ] Headless CMS integration
- [ ] E-commerce features
- [ ] Payment processing (Stripe)
- [ ] Team collaboration features
- [ ] API documentation with Swagger

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🔒 Security

For security concerns, please review our [Security Policy](SECURITY.md).

---

## 👥 Team

**Truqorun** is built and maintained by a dedicated team of developers passionate about modern web technologies.

- **Tanveer** - [GitHub](https://github.com/Tanveerfb)

---

## 📞 Contact

Interested in working with us? We'd love to hear from you!

- **Email**: [truqorun@proton.me](mailto:truqorun@proton.me)
- **GitHub**: [github.com/Tanveerfb/truqorun](https://github.com/Tanveerfb/truqorun)
- **Issue Tracker**: [Report a bug or request a feature](https://github.com/Tanveerfb/truqorun/issues)

For project inquiries and quotes, please visit our [Contact Page](https://truqorun.com/contact).

---

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org/) - For the amazing framework
- [Vercel](https://vercel.com/) - For hosting and deployment platform
- [Tailwind Labs](https://tailwindlabs.com/) - For the utility-first CSS framework
- All our [contributors](https://github.com/Tanveerfb/truqorun/graphs/contributors)

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/Tanveerfb/truqorun?style=social)
![GitHub forks](https://img.shields.io/github/forks/Tanveerfb/truqorun?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/Tanveerfb/truqorun?style=social)

---

<div align="center">
  <p>Built with ❤️ by the Truqorun Team</p>
  <p>© 2026 Truqorun. All rights reserved.</p>
</div>
