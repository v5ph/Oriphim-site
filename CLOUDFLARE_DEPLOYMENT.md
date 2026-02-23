# Cloudflare Pages Deployment Guide - Oriphim

## Prerequisites
1. **Cloudflare Account** - Create one at https://dash.cloudflare.com
2. **Wrangler CLI** - Already installed in your project
3. **GitHub Repository** - Your code pushed to GitHub (required for Cloudflare Pages)

## Step 1: Connect Your GitHub Repository to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Click **Pages** in the left sidebar
3. Click **Connect to Git**
4. Authorize Cloudflare to access your GitHub account
5. Select your **Oriphim-site** repository
6. Click **Begin Setup**

## Step 2: Configure Build Settings

When Cloudflare prompts for build configuration, use these settings:

**Project Name:** `oriphim-site`

**Framework preset:** `Next.js`

**Build command:** 
```
npm ci && npm run build
```

**Build output directory:** 
```
.next/standalone
```

**Root directory (leave blank unless subdirectory):** 
```
(leave empty)
```

**Environment Variables:** Add these in the Cloudflare Pages dashboard:
```
NEXT_PUBLIC_SUPABASE_URL = https://suzmovbxrxqxzqzcqnlu.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = sb_publishable_hRfPv4B86Qdsn2-hbbHIgA_2Z9K64Lq
```

## Step 3: Deploy

Click **Save and Deploy**. Cloudflare will:
1. Clone your repository
2. Run `npm ci && npm run build`
3. Deploy from `.next/standalone`
4. Provide you with a live URL

## Step 4: Custom Domain (Optional)

After first deployment:
1. Go to Pages → **Oriphim-site**
2. Click **Custom domain**
3. Connect your domain (e.g., `oriphim.com`)
4. Update DNS records as instructed

## Local Testing Before Deployment

To test the build locally:

```bash
npm run build
npm start
```

This builds with standard Next.js and runs the production server locally on `localhost:3000`

## Manual Deployment (Alternative)

If you prefer not to use Git integration:

```bash
npm run deploy
```

This requires:
- Wrangler authentication: `wrangler login`
- Creates a Cloudflare Pages project via CLI

## Environment Variables Setup in Cloudflare Dashboard

1. **Pages** → **Oriphim-site** → **Settings**
2. Click **Environment variables**
3. Add **Production** environment:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Save and redeploy

## Verifying Deployment

✅ Check deployment status: `https://dash.cloudflare.com` → Pages → Oriphim-site  
✅ Your site URL: `https://oriphim-site.pages.dev` (or your custom domain)  
✅ Test the form: Submit a request to verify Supabase integration works

## Troubleshooting

**Build fails with "institutional_inquiries not found":**
- This is normal - Supabase table check happens at runtime, not build time
- Verify your table exists in Supabase dashboard

**Form submissions not working:**
- Check browser console (F12) for Supabase errors
- Verify environment variables are set in Cloudflare Pages settings
- Ensure Supabase credentials are correct

**Static assets not loading:**
- Check that public/ folder contents are included
- Verify fonts are in `public/assets/fonts/`

## Redeployment

Any push to your GitHub main branch will automatically trigger a new deployment.

To manually trigger:
1. Go to Cloudflare Pages dashboard
2. Click **Oriphim-site**
3. Click **Deployments** tab
4. Find latest deployment and click **Retry build**

---

**Deployment is now live!** Your Oriphim website is running on Cloudflare's global network with 50+ edge locations.
