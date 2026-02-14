# Form Extension Guide

This guide explains how to extend and modify the contact/quote form system in Truqorun.

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Adding New Project Types](#adding-new-project-types)
3. [Adding New Form Fields](#adding-new-form-fields)
4. [Adding New Features/Requirements](#adding-new-featuresrequirements)
5. [Customizing Validation](#customizing-validation)
6. [Adding New Form Steps](#adding-new-form-steps)
7. [Email Notification Setup](#email-notification-setup)
8. [Database Schema](#database-schema)

---

## Architecture Overview

The form system is built with modularity and extensibility in mind:

```
┌─────────────────────────────────────────┐
│          Contact Page                    │
│      (app/contact/page.tsx)              │
└───────────────┬─────────────────────────┘
                │
                ▼
┌─────────────────────────────────────────┐
│      ContactFormWizard Component         │
│  (components/features/contact-form)      │
└───────────────┬─────────────────────────┘
                │
    ┌───────────┴──────────┬──────────────┐
    ▼                      ▼              ▼
┌──────────┐        ┌──────────┐   ┌──────────┐
│ Types    │        │ Config   │   │Validation│
│(types/)  │        │(lib/)    │   │ (lib/)   │
└──────────┘        └──────────┘   └──────────┘
                          │
                          ▼
                  ┌──────────────┐
                  │ API Routes   │
                  │ (app/api/)   │
                  └──────┬───────┘
                         │
                  ┌──────┴────────┐
                  ▼               ▼
            ┌──────────┐    ┌──────────┐
            │ Supabase │    │  Email   │
            │ Database │    │ Service  │
            └──────────┘    └──────────┘
```

### Key Files

- **Types**: `types/form.ts` - TypeScript interfaces
- **Config**: `lib/formConfig.ts` - Form options and features
- **Validation**: `lib/formValidation.ts` - Zod schemas and validation
- **Components**: `components/features/contact-form/` - Form UI components
- **API**: `app/api/contact/submit/route.ts` - Form submission handler
- **Database**: `types/database.ts` - Supabase schema types

---

## Adding New Project Types

### Step 1: Update Type Definition

Edit `types/form.ts`:

```typescript
export type ProjectType =
  | 'ecommerce'
  | 'landing-page'
  | 'cms'
  | 'portfolio'
  | 'custom'
  | 'not-sure'
  | 'your-new-type'; // Add your new type here
```

### Step 2: Add Configuration

Edit `lib/formConfig.ts`:

```typescript
export const PROJECT_TYPES: Array<{
  value: ProjectType;
  label: string;
  description: string;
}> = [
  // ... existing types
  {
    value: 'your-new-type',
    label: 'Your New Type',
    description: 'Description of what this project type is',
  },
];
```

### Step 3: Add Features for New Type

Still in `lib/formConfig.ts`:

```typescript
export const FEATURES_BY_PROJECT_TYPE: Record<ProjectType, FeatureOption[]> = {
  // ... existing types
  'your-new-type': [
    { id: 'feature-1', label: 'First Feature' },
    { id: 'feature-2', label: 'Second Feature' },
    // Add more features as needed
  ],
};
```

### Step 4: Update Validation Schema

Edit `lib/formValidation.ts`:

```typescript
export const contactFormSchema = z.object({
  projectType: z.enum([
    'ecommerce',
    'landing-page',
    'cms',
    'portfolio',
    'custom',
    'not-sure',
    'your-new-type', // Add here
  ], {
    required_error: 'Please select a project type',
  }),
  // ... rest of schema
});
```

---

## Adding New Form Fields

### Step 1: Update Type Interface

Edit `types/form.ts`:

```typescript
export interface ContactFormData {
  // ... existing fields
  
  // Add your new field
  yourNewField: string; // or appropriate type
}
```

### Step 2: Update Form Component

Edit `components/features/contact-form/ContactFormWizard.tsx`:

Add field to initial state:
```typescript
const initialFormData: Partial<ContactFormData> = {
  // ... existing fields
  yourNewField: '',
};
```

Add input to appropriate step rendering method:
```typescript
const renderStepX = () => (
  <div className="space-y-6">
    {/* ... existing fields */}
    
    <div>
      <label htmlFor="yourNewField" className="mb-2 block text-sm font-medium text-foreground">
        Your New Field *
      </label>
      <input
        type="text"
        id="yourNewField"
        value={formData.yourNewField || ''}
        onChange={(e) => updateField('yourNewField', e.target.value)}
        className="w-full rounded-lg border border-input-border bg-input px-4 py-2"
      />
    </div>
  </div>
);
```

### Step 3: Add Validation

Edit `lib/formValidation.ts`:

```typescript
export const contactFormSchema = z.object({
  // ... existing fields
  yourNewField: z.string()
    .min(1, 'This field is required')
    .max(100, 'Must be less than 100 characters'),
});
```

Add to step validation:
```typescript
const stepFields: Record<number, (keyof ContactFormData)[]> = {
  // ... existing steps
  3: ['budget', 'timeline', 'projectBrief', 'yourNewField'], // Add to appropriate step
};
```

### Step 4: Update Database Schema

Edit `types/database.ts` and update your Supabase table:

```sql
ALTER TABLE form_submissions
ADD COLUMN your_new_field TEXT;
```

Update TypeScript types:
```typescript
export interface Database {
  public: {
    Tables: {
      form_submissions: {
        Row: {
          // ... existing fields
          your_new_field: string | null;
        };
        // ... Insert and Update types
      };
    };
  };
}
```

### Step 5: Update API Route

Edit `app/api/contact/submit/route.ts`:

```typescript
const { data, error } = await supabaseAdmin
  .from('form_submissions')
  .insert({
    // ... existing fields
    your_new_field: formData.yourNewField || null,
  })
```

---

## Adding New Features/Requirements

To add features for existing project types:

Edit `lib/formConfig.ts`:

```typescript
export const FEATURES_BY_PROJECT_TYPE: Record<ProjectType, FeatureOption[]> = {
  'ecommerce': [
    // ... existing features
    { 
      id: 'your-new-feature', 
      label: 'Your New Feature',
      description: 'Optional description'
    },
  ],
  // ... other types
};
```

The feature will automatically appear in the checklist when that project type is selected.

---

## Customizing Validation

### Email Format

Edit `lib/formValidation.ts`:

```typescript
const emailRegex = /your-custom-regex/;
```

### Phone Format

```typescript
const phoneRegex = /your-custom-regex/;
```

### Custom Validation Rules

Add custom validation functions:

```typescript
function customValidation(value: string): boolean {
  // Your custom logic
  return true;
}

// Use in schema
yourField: z.string().refine(customValidation, {
  message: 'Custom error message',
}),
```

---

## Adding New Form Steps

### Step 1: Update Form Steps Configuration

Edit `lib/formConfig.ts`:

```typescript
export const FORM_STEPS = [
  // ... existing steps
  {
    id: 6,
    title: 'Your New Step',
    description: 'Description of this step',
  },
];
```

### Step 2: Add Rendering Method

Edit `components/features/contact-form/ContactFormWizard.tsx`:

```typescript
const renderStep6 = () => (
  <div className="space-y-6">
    <div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">
        New Step Title
      </h3>
      <p className="text-sm text-foreground-secondary">
        Step description
      </p>
    </div>
    
    {/* Add your step content here */}
  </div>
);
```

### Step 3: Update renderStep Switch

```typescript
const renderStep = () => {
  switch (currentStep) {
    // ... existing cases
    case 6:
      return renderStep6();
    default:
      return null;
  }
};
```

### Step 4: Update Validation

Edit `lib/formValidation.ts`:

```typescript
const stepFields: Record<number, (keyof ContactFormData)[]> = {
  // ... existing steps
  6: ['field1', 'field2'], // Fields to validate in step 6
};
```

---

## Email Notification Setup

### Using Resend (Recommended)

1. **Sign up for Resend**: https://resend.com
2. **Get API Key**: From Resend dashboard
3. **Add to Environment**:

```bash
# .env.local
RESEND_API_KEY=re_your_api_key
ADMIN_EMAIL=your-email@example.com
```

4. **Implement Email Sending**:

Edit `app/api/contact/submit/route.ts`:

```typescript
import { Resend } from 'resend';

async function sendEmailNotification(
  formData: ContactFormData,
  submissionId: string
): Promise<void> {
  const resendApiKey = process.env.RESEND_API_KEY;
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!resendApiKey || !adminEmail) {
    console.warn('Email not configured');
    return;
  }

  const resend = new Resend(resendApiKey);

  await resend.emails.send({
    from: 'noreply@truqorun.com', // Must be verified domain
    to: adminEmail,
    subject: `New Project Inquiry from ${formData.fullName}`,
    html: generateEmailHtml(formData, submissionId),
  });
}
```

### Using Other Email Services

The same pattern works for NodeMailer, SendGrid, etc.:

```typescript
// Example with NodeMailer
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

await transporter.sendMail({
  from: 'noreply@truqorun.com',
  to: adminEmail,
  subject: `New Project Inquiry from ${formData.fullName}`,
  html: generateEmailHtml(formData, submissionId),
});
```

---

## Database Schema

### Supabase Setup

1. **Create Project**: https://app.supabase.com
2. **Get Credentials**: Project Settings → API
3. **Add to Environment**:

```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

4. **Create Table**: Run this SQL in Supabase SQL Editor:

```sql
-- Create form_submissions table
CREATE TABLE form_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_type TEXT NOT NULL,
  selected_features TEXT[] DEFAULT '{}',
  additional_features TEXT,
  budget TEXT NOT NULL,
  timeline TEXT NOT NULL,
  project_brief TEXT NOT NULL,
  company_name TEXT,
  company_website TEXT,
  reference_links TEXT,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  best_time_to_contact TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'in-progress', 'completed', 'archived')),
  notes TEXT,
  submitted_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX idx_form_submissions_status ON form_submissions(status);
CREATE INDEX idx_form_submissions_submitted_at ON form_submissions(submitted_at DESC);
CREATE INDEX idx_form_submissions_email ON form_submissions(email);

-- Enable Row Level Security
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public inserts (for form submissions)
CREATE POLICY "Allow public inserts" ON form_submissions
  FOR INSERT TO anon
  WITH CHECK (true);

-- Policy: Allow authenticated reads (for dashboard)
CREATE POLICY "Allow authenticated reads" ON form_submissions
  FOR SELECT TO authenticated
  USING (true);

-- Create function to update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = NOW();
   RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger
CREATE TRIGGER update_form_submissions_updated_at
BEFORE UPDATE ON form_submissions
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();
```

### Adding New Columns

```sql
-- Add a new column
ALTER TABLE form_submissions
ADD COLUMN your_new_field TYPE_HERE;

-- Add index if needed for filtering/sorting
CREATE INDEX idx_form_submissions_your_new_field 
ON form_submissions(your_new_field);
```

---

## Future Enhancements (Placeholders)

The following features are marked as placeholders for future implementation:

1. **File Uploads**: Allow users to upload project files, logos, etc.
2. **Multi-language Support**: Internationalization of form labels and messages
3. **Lead Scoring**: Automatically score leads based on budget, timeline, etc.
4. **CRM Integration**: Sync submissions with CRM systems
5. **Analytics**: Track form completion rates, drop-off points
6. **A/B Testing**: Test different form variations
7. **Rate Limiting**: Prevent spam submissions
8. **CAPTCHA**: Add reCAPTCHA or similar protection
9. **Advanced Dashboard**: Export data, bulk actions, analytics charts
10. **Status Updates**: Email clients when status changes

---

## Best Practices

### Modularity
- Keep components small and focused
- Use TypeScript for type safety
- Follow existing code patterns

### Validation
- Always validate on both client and server
- Provide clear error messages
- Sanitize user input

### Security
- Never expose service role keys to client
- Use Row Level Security in Supabase
- Validate all inputs server-side
- Add rate limiting in production

### Documentation
- Comment all major changes
- Update this guide when adding features
- Use JSDoc for functions and components

---

## Support

For questions or issues:
- Check existing code comments
- Review TypeScript types for guidance
- Test changes in development mode first
- Create detailed commit messages

---

**Last Updated**: February 2026  
**Version**: 1.0.0
