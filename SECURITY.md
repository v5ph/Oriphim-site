# Security Implementation

## Environment Variables

### Setup
All sensitive credentials are stored in environment variables:
- **Production**: Set in Cloudflare Pages dashboard
- **Development**: Stored in `.env.local` (gitignored)

### Required Variables
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Supabase Security

### Row Level Security (RLS)
Configure RLS policies in Supabase dashboard:

```sql
-- Enable RLS
ALTER TABLE institutional_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for form submissions)
CREATE POLICY "Allow anonymous inserts" ON institutional_inquiries
  FOR INSERT
  WITH CHECK (true);

-- Restrict reads to authenticated users only
CREATE POLICY "Restrict reads to authenticated" ON institutional_inquiries
  FOR SELECT
  USING (auth.role() = 'authenticated');
```

### Rate Limiting
Consider implementing rate limiting via:
1. Cloudflare Rate Limiting rules
2. Supabase Edge Functions with rate limiting
3. Client-side debouncing (currently implemented with isSubmitting state)

## Input Validation

### Client-Side
- Email format validation
- AUM format validation  
- Required field checks
- Input sanitization (trim, toLowerCase for emails)

### Server-Side
Supabase automatically handles:
- SQL injection prevention
- XSS protection via parameterized queries

## Recommended Additions

### 1. CAPTCHA Protection
Add Cloudflare Turnstile (free):
```bash
npm install @marsidev/react-turnstile
```

### 2. Content Security Policy
Add to `next.config.mjs`:
```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
        }
      ]
    }
  ]
}
```

### 3. HTTP Security Headers
Cloudflare Pages automatically adds:
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection

## Monitoring

### Error Tracking
- Client errors: Console logging (upgrade to Sentry for production)
- Server errors: Supabase logs
- Form submissions: Track in Supabase dashboard

### Analytics
Consider adding:
- Vercel Analytics (privacy-first)
- Plausible Analytics
- Cloudflare Web Analytics (free)

## Compliance

### GDPR/Privacy
- Form clearly states data usage
- Privacy policy linked in footer
- Data stored in Supabase (EU region recommended for GDPR)

### Data Retention
Configure in Supabase:
- Auto-delete old submissions after X days
- Regular backups enabled
