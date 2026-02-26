# Deployment Checklist

## Pre-Deployment

### 1. Environment Variables
- [ ] `.env.local` exists and contains valid Supabase credentials
- [ ] `.env.local` is in `.gitignore` (verified ✓)
- [ ] Cloudflare Pages environment variables are set:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 2. Supabase Configuration
- [ ] Row Level Security (RLS) enabled on `institutional_inquiries` table
- [ ] RLS policies created (see SECURITY.md)
- [ ] Test form submission works in development
- [ ] Verify submissions appear in Supabase dashboard

### 3. Build Verification
```bash
npm run build
```
- [ ] Build completes without errors
- [ ] No TypeScript errors
- [ ] No ESLint critical errors

### 4. Local Testing
```bash
npm run dev
```
- [ ] Desktop navigation works
- [ ] Mobile hamburger menu toggles correctly
- [ ] Form validation displays errors
- [ ] Form submits successfully
- [ ] Error boundaries render on errors
- [ ] All links work correctly

## Deployment

### Option 1: Cloudflare Pages (Recommended)

#### Via CLI
```bash
npm run pages:build
npm run deploy
```

#### Via Dashboard
1. Connect GitHub repository in Cloudflare Pages
2. Set build command: `npm run pages:build`
3. Set output directory: `.vercel/output/static`
4. Add environment variables
5. Deploy

### Option 2: Vercel
```bash
vercel --prod
```

## Post-Deployment

### 1. Functionality Test
- [ ] Visit production URL
- [ ] Test mobile navigation
- [ ] Submit test form (use real email to verify)
- [ ] Check Supabase for form submission
- [ ] Test social media preview (Facebook Debugger, Twitter Card Validator)
- [ ] Test on multiple devices (mobile, tablet, desktop)

### 2. Performance Check
- [ ] Run Lighthouse audit (target: 90+ performance, 100 accessibility)
- [ ] Check Core Web Vitals
- [ ] Verify images load correctly
- [ ] Test scroll performance

### 3. SEO Verification
- [ ] Check meta tags with view-source:
- [ ] Verify Open Graph tags with Facebook Debugger
- [ ] Verify Twitter Cards with Twitter Card Validator
- [ ] Submit sitemap to Google Search Console

### 4. Monitoring Setup (Optional)
- [ ] Set up error tracking (Sentry)
- [ ] Enable analytics (Vercel Analytics or Plausible)
- [ ] Configure Supabase monitoring/alerts
- [ ] Set up uptime monitoring (UptimeRobot)

## Rollback Plan

If issues occur:
1. Revert to previous deployment in Cloudflare/Vercel dashboard
2. Check logs in deployment platform
3. Verify environment variables are set correctly
4. Test locally to reproduce issue

## Known Issues / Warnings

### Non-Critical Warnings (Safe to Ignore)
- ⚠️ Tailwind `@tailwind` unknown at-rule warnings (expected)
- ⚠️ Inline styles in HeroBanner (required for parallax effect)
- ⚠️ Stale ARIA linter warnings (code is correct, linter cache issue)

### Critical Issues (Must Fix Before Deploy)
- ❌ None identified

## Success Criteria

- ✅ Form submissions save to Supabase
- ✅ Mobile navigation works
- ✅ No console errors on production
- ✅ Lighthouse accessibility score > 95
- ✅ Social media previews display correctly
- ✅ Error boundaries catch React crashes gracefully

## Support Contacts

- **Supabase Issues**: https://supabase.com/dashboard/support
- **Cloudflare Pages**: https://dash.cloudflare.com
- **Repository**: https://github.com/v5ph/Oriphim-site
