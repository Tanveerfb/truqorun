# Truqorun - Environment Setup Guide

This guide will help you set up all the required environment variables for the Truqorun project.

## Quick Setup

1. **Copy the example file:**

   ```bash
   cp .env.local.example .env.local
   ```

2. **Fill in your values in `.env.local`** (see detailed instructions below)

3. **Never commit `.env.local`** - it contains sensitive data and is already in `.gitignore`

---

## Environment Variables Overview

| Variable                        | Required    | Description                                       |
| ------------------------------- | ----------- | ------------------------------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`      | ✅ Yes      | Your Supabase project URL                         |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | ✅ Yes      | Your Supabase anonymous (public) key              |
| `SUPABASE_SERVICE_ROLE_KEY`     | ✅ Yes      | Your Supabase service role key (server-side only) |
| `RESEND_API_KEY`                | ❌ Optional | API key for email notifications via Resend        |
| `ADMIN_EMAIL`                   | ❌ Optional | Email address to receive form submissions         |

---

## Detailed Setup Instructions

### 1. Supabase Configuration (Required)

Supabase is used for storing form submissions from the contact form.

#### Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in
3. Click "New Project"
4. Fill in:
   - **Name:** truqorun (or any name you prefer)
   - **Database Password:** Create a strong password (save it somewhere safe)
   - **Region:** Choose the closest to your target audience
5. Click "Create new project" and wait for setup to complete (~2 minutes)

#### Step 2: Get Your API Keys

1. In your Supabase project dashboard, go to **Settings** > **API**
2. You'll see three values you need:

   **Project URL** (e.g., `https://abcdefghijklmnop.supabase.co`)

   ```bash
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   ```

   **anon/public key** (safe to use in browser)

   ```bash
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey...
   ```

   **service_role key** (⚠️ NEVER expose in client-side code)

   ```bash
   SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey...
   ```

#### Step 3: Create the Database Table

1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Copy and paste this SQL:

```sql
-- Create form_submissions table
CREATE TABLE form_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
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
  status TEXT DEFAULT 'new',
  submitted_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create indexes for better query performance
CREATE INDEX idx_form_submissions_status ON form_submissions(status);
CREATE INDEX idx_form_submissions_submitted_at ON form_submissions(submitted_at DESC);
CREATE INDEX idx_form_submissions_email ON form_submissions(email);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_form_submissions_updated_at
  BEFORE UPDATE ON form_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

4. Click "Run" to execute the SQL
5. Verify the table was created in the **Table Editor**

#### Step 4: Configure Row Level Security (Optional but Recommended)

For public form submissions, you may want to enable RLS:

```sql
-- Enable Row Level Security
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (submit forms)
CREATE POLICY "Allow public form submissions"
ON form_submissions FOR INSERT
TO anon
WITH CHECK (true);

-- Only authenticated users can view (for dashboard)
CREATE POLICY "Allow authenticated users to view submissions"
ON form_submissions FOR SELECT
TO authenticated
USING (true);
```

---

### 2. Email Notifications (Optional)

Email notifications are sent when someone submits the contact form.

#### Using Resend (Recommended)

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free)
3. Verify your domain (or use their test domain for development)
4. Go to **API Keys** and create a new key
5. Copy your API key:
   ```bash
   RESEND_API_KEY=re_123456789...
   ```
6. Set your admin email to receive notifications:
   ```bash
   ADMIN_EMAIL=your-email@example.com
   ```

#### Alternative: Use SMTP (Future Enhancement)

If you prefer to use your own SMTP server, this can be added as a future enhancement. See `FORM_EXTENSION_GUIDE.md` for details.

---

## Testing Your Setup

### 1. Verify Environment Variables

Create a test file to verify your setup:

```typescript
// test-env.ts
console.log("Environment Check:");
console.log(
  "Supabase URL:",
  process.env.NEXT_PUBLIC_SUPABASE_URL ? "✅ Set" : "❌ Missing",
);
console.log(
  "Supabase Anon Key:",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "✅ Set" : "❌ Missing",
);
console.log(
  "Supabase Service Key:",
  process.env.SUPABASE_SERVICE_ROLE_KEY ? "✅ Set" : "❌ Missing",
);
console.log(
  "Resend API Key:",
  process.env.RESEND_API_KEY ? "✅ Set" : "⚠️ Optional - Not Set",
);
console.log(
  "Admin Email:",
  process.env.ADMIN_EMAIL ? "✅ Set" : "⚠️ Optional - Not Set",
);
```

### 2. Test Form Submission

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Navigate to [http://localhost:3000/contact](http://localhost:3000/contact)

3. Fill out and submit the contact form

4. Check the following:
   - ✅ Console shows no errors
   - ✅ Submission appears in Supabase Table Editor
   - ✅ If email is configured, you receive a notification email

### 3. Check the Dashboard

1. Navigate to [http://localhost:3000/dashboard](http://localhost:3000/dashboard)

2. You should see your test submission listed

---

## Troubleshooting

### Issue: "Supabase is not configured" error

**Solution:**

- Check that all three Supabase environment variables are set in `.env.local`
- Restart your dev server after changing `.env.local`
- Verify the keys are copied correctly (no extra spaces, complete keys)

### Issue: Form submits but doesn't save to database

**Solution:**

- Verify the `form_submissions` table exists in Supabase
- Check the Supabase service role key is correct
- Check browser console and terminal for error messages
- Verify your database password and connection

### Issue: Email notifications not working

**Solution:**

- This is optional, form submissions will still work
- Check that both `RESEND_API_KEY` and `ADMIN_EMAIL` are set
- Verify your Resend API key is active
- Check you've verified your domain in Resend

### Issue: Changes to .env.local not taking effect

**Solution:**

- Restart your development server
- Try clearing Next.js cache: `rm -rf .next`
- Check that your variable names match exactly (case-sensitive)

---

## Security Best Practices

1. **Never commit `.env.local`** to version control
   - It's already in `.gitignore`, but double-check

2. **Rotate keys if exposed**
   - If you accidentally commit keys, rotate them immediately in Supabase/Resend

3. **Use different keys for development and production**
   - Create separate Supabase projects for dev/staging/production

4. **Limit service role key usage**
   - Only use `SUPABASE_SERVICE_ROLE_KEY` in server-side code
   - Never expose it in client-side JavaScript

5. **Enable Row Level Security**
   - Protect your data with RLS policies in Supabase

---

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. **Add environment variables in your hosting platform**
   - Don't rely on `.env.local` in production
   - Add all variables through the platform's UI

2. **Use production Supabase project**
   - Create a separate Supabase project for production
   - Use production-specific API keys

3. **Verify domain for Resend**
   - Required for sending emails in production
   - Use a custom domain, not the test domain

---

## Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Resend Documentation](https://resend.com/docs)
- [Next.js Environment Variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)
- [Truqorun Form Extension Guide](./FORM_EXTENSION_GUIDE.md)

---

## Need Help?

- Check existing issues: [GitHub Issues](https://github.com/Tanveerfb/truqorun/issues)
- Create a new issue for bugs or questions
- Review the code documentation in `/types/database.ts` and `/lib/supabase.ts`
