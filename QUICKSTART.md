# 🚀 Quick Start Checklist

Use this checklist to get your Truqorun development environment up and running.

## ✅ Pre-flight Checklist

### 1. Initial Setup

- [ ] Clone the repository
- [ ] Install Node.js 20.x or higher
- [ ] Run `npm install` to install dependencies

### 2. Environment Configuration

- [ ] Copy `.env.local.example` to `.env.local`
- [ ] Open `.env.local` in your editor

### 3. Supabase Setup (Required)

- [ ] Create account at [supabase.com](https://supabase.com)
- [ ] Create a new project
- [ ] Copy Project URL to `NEXT_PUBLIC_SUPABASE_URL`
- [ ] Copy anon/public key to `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] Copy service_role key to `SUPABASE_SERVICE_ROLE_KEY`
- [ ] Create `form_submissions` table using SQL from `ENVIRONMENT_SETUP.md`
- [ ] Verify table was created in Table Editor

### 4. Email Setup (Optional)

- [ ] Sign up at [resend.com](https://resend.com) (optional)
- [ ] Get API key and add to `RESEND_API_KEY`
- [ ] Add your email to `ADMIN_EMAIL`

### 5. Test Your Setup

- [ ] Run `npm run dev`
- [ ] Open [http://localhost:3000](http://localhost:3000)
- [ ] Navigate to `/contact`
- [ ] Submit a test form
- [ ] Check Supabase Table Editor for the submission
- [ ] Check `/dashboard` to see submission listed

## 🎯 Minimum Required Setup

To get started quickly, you only need:

```bash
# .env.local (minimum)
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-key
```

Email notifications are optional and can be added later!

## 📚 Helpful Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Clear Next.js cache (if having issues)
rm -rf .next
```

## 🔗 Quick Links

- **Supabase Dashboard:** [app.supabase.com](https://app.supabase.com)
- **Resend Dashboard:** [resend.com/overview](https://resend.com/overview)
- **Local Dev Server:** [localhost:3000](http://localhost:3000)
- **Contact Form:** [localhost:3000/contact](http://localhost:3000/contact)
- **Dashboard:** [localhost:3000/dashboard](http://localhost:3000/dashboard)

## 🆘 Having Issues?

1. Check `ENVIRONMENT_SETUP.md` for detailed instructions
2. Verify all environment variables are set correctly
3. Restart the dev server after changing `.env.local`
4. Check browser console and terminal for errors
5. See the Troubleshooting section in `ENVIRONMENT_SETUP.md`

## ✨ You're All Set

Once you've completed this checklist, you're ready to start developing!

**Next Steps:**

- Explore the codebase structure
- Read `README.md` for project overview
- Check `FORM_EXTENSION_GUIDE.md` to learn about extending the contact form
- Start building your features!
