# Contributing to Truqorun

First off, thank you for considering contributing to Truqorun! 🎉

We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

---

## 📋 Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Workflow](#development-workflow)
4. [Commit Message Guidelines](#commit-message-guidelines)
5. [Pull Request Process](#pull-request-process)
6. [Coding Standards](#coding-standards)
7. [Project Structure](#project-structure)
8. [Testing Guidelines](#testing-guidelines)
9. [Documentation](#documentation)
10. [Community](#community)

---

## 📜 Code of Conduct

This project and everyone participating in it is governed by respect, professionalism, and inclusivity. By participating, you are expected to uphold these values. Please report unacceptable behavior to hello@truqorun.com [PLACEHOLDER].

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun
- Git
- A code editor (VS Code recommended)

### Setup Your Development Environment

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/truqorun.git
   cd truqorun
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/Tanveerfb/truqorun.git
   ```
4. **Install dependencies**:
   ```bash
   npm install
   ```
5. **Copy environment variables**:
   ```bash
   cp .env.local.example .env.local
   ```
6. **Start development server**:
   ```bash
   npm run dev
   ```

---

## 🔄 Development Workflow

### 1. Sync with Upstream

Always ensure your local repository is up-to-date:

```bash
git checkout main
git pull upstream main
git push origin main
```

### 2. Create a Feature Branch

Use a descriptive branch name:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
# or
git checkout -b docs/documentation-update
```

**Branch Naming Conventions:**
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Adding or updating tests
- `chore/` - Maintenance tasks

### 3. Make Your Changes

- Write clean, readable code
- Follow the [Coding Standards](#coding-standards)
- Add tests for new features
- Update documentation as needed
- Test thoroughly in both light and dark modes

### 4. Commit Your Changes

Follow our [Commit Message Guidelines](#commit-message-guidelines).

### 5. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 6. Open a Pull Request

Go to the original repository and click "New Pull Request."

---

## 📝 Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that don't affect code meaning (whitespace, formatting)
- **refactor**: Code change that neither fixes a bug nor adds a feature
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Changes to build process or auxiliary tools
- **ci**: Changes to CI configuration files and scripts

### Scope (Optional)

The scope should specify the area of the codebase:
- `ui` - UI components
- `layout` - Layout components
- `theme` - Theme system
- `docs` - Documentation
- `config` - Configuration files

### Examples

```bash
feat(ui): add Loading component with skeleton states

fix(theme): resolve flash of unstyled content on page load

docs(readme): update installation instructions

refactor(components): simplify Button component API

chore(deps): update Next.js to version 16.1
```

### Rules

- Use lowercase for type, scope, and subject
- Don't end the subject line with a period
- Limit the subject line to 50 characters
- Use imperative mood ("add" not "added" or "adds")
- Separate subject from body with a blank line
- Wrap body at 72 characters
- Use body to explain what and why, not how

---

## 🔍 Pull Request Process

### Before Submitting

1. ✅ Run linter: `npm run lint`
2. ✅ Build the project: `npm run build`
3. ✅ Test in both light and dark modes
4. ✅ Update relevant documentation
5. ✅ Ensure all commits follow Conventional Commits
6. ✅ Rebase on latest main if needed

### PR Title

Use the same format as commit messages:
```
feat(ui): add new Button variants
```

### PR Description Template

The template will be auto-filled when you create a PR. Please fill out all sections:

- **Description**: What does this PR do?
- **Motivation**: Why is this change needed?
- **Related Issues**: Link to relevant issues
- **Screenshots**: For UI changes
- **Testing**: How was this tested?
- **Checklist**: Complete the checklist

### Review Process

1. At least one maintainer will review your PR
2. Address any requested changes
3. Once approved, a maintainer will merge your PR
4. Your contribution will be credited in the release notes

### After Your PR is Merged

- Delete your feature branch
- Update your local main branch
- Celebrate! 🎉

---

## 💻 Coding Standards

### TypeScript

- Use TypeScript for all new files
- Define proper types/interfaces (no `any` without justification)
- Use `const` over `let` when possible
- Prefer arrow functions for callbacks

### React/Next.js

- Use functional components with hooks
- Follow React hooks rules
- Use Server Components by default (mark Client Components with `'use client'`)
- Optimize images with `next/image`
- Use proper semantic HTML

### Component Structure

```tsx
/**
 * Component Name
 * 
 * Brief description of what the component does.
 * 
 * @example
 * ```tsx
 * <ComponentName prop="value" />
 * ```
 */

import React from 'react';

export interface ComponentNameProps {
  /** Prop description */
  propName: string;
}

export function ComponentName({ propName }: ComponentNameProps) {
  return (
    <div>
      {/* Component content */}
    </div>
  );
}

export default ComponentName;
```

### Styling

- Use Tailwind utility classes
- Follow mobile-first responsive design
- Ensure dark mode support for all components
- Use CSS variables for theme values
- Maintain consistent spacing (use Tailwind spacing scale)

### File Naming

- Components: `PascalCase.tsx` (e.g., `Button.tsx`)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)
- Hooks: `use` prefix (e.g., `useTheme.ts`)
- Types: `PascalCase.ts` (e.g., `User.ts`)

### Documentation

- Add JSDoc comments to all exported functions/components
- Include `@example` when helpful
- Mark placeholders with `[PLACEHOLDER]` and description
- Keep comments up-to-date

---

## 📂 Project Structure

```
truqorun/
├── app/                     # Next.js App Router pages
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Pages
├── components/             # Reusable components
│   ├── ui/                 # Generic UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── index.ts       # Barrel exports
│   ├── layout/            # Layout components
│   │   ├── ThemeProvider.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── index.ts
│   └── features/          # Feature-specific components
│       └── index.ts
├── content/               # Content and copy
├── public/                # Static assets
└── .github/              # GitHub templates
```

### Adding New Components

1. Create component file in appropriate directory
2. Add TypeScript interface for props
3. Include JSDoc documentation
4. Export from `index.ts` in the directory
5. Ensure dark mode support
6. Add to Storybook (when available) [PLACEHOLDER]

---

## 🧪 Testing Guidelines

[PLACEHOLDER] - Testing infrastructure to be added

### Future Testing Requirements

- Write unit tests for utility functions
- Add component tests for complex interactions
- Test accessibility with screen readers
- Test both light and dark themes
- Add E2E tests for critical user flows

---

## 📖 Documentation

### When to Update Documentation

- Adding new features
- Changing existing behavior
- Adding new components
- Updating dependencies
- Modifying build process

### Documentation Locations

- `README.md` - Project overview and setup
- `.github/CONTRIBUTING.md` - This file
- Component JSDoc - Inline code documentation
- `/content` - Website copy and content

---

## 🌟 Component Contribution Checklist

When adding a new component:

- [ ] TypeScript interfaces defined
- [ ] JSDoc documentation added
- [ ] Props properly typed
- [ ] Responsive design implemented
- [ ] Dark mode support added
- [ ] Accessibility features included
- [ ] Exported from `index.ts`
- [ ] Example usage provided
- [ ] `[PLACEHOLDER]` tags for future work

---

## 🎯 Good First Issues

Look for issues labeled with:
- `good first issue` - Great for newcomers
- `help wanted` - We need community help
- `documentation` - Documentation improvements

---

## ❓ Questions?

- Check existing [Issues](https://github.com/Tanveerfb/truqorun/issues)
- Open a new [Discussion](https://github.com/Tanveerfb/truqorun/discussions) [PLACEHOLDER]
- Reach out to the team

---

## 🙏 Recognition

All contributors will be recognized in:
- GitHub contributors list
- Release notes
- Project documentation

---

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

<div align="center">
  <p>Thank you for contributing to Truqorun! 🚀</p>
  <p>Every contribution, no matter how small, makes a difference.</p>
</div>
