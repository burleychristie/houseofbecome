# Admin & product upload setup

This commit adds a minimal admin dashboard to upload products and images using Supabase.

Quick setup steps:

1. Provision a Supabase project at https://app.supabase.com
2. Create a table `products` with columns:
   - id (int, primary key, auto-increment)
   - title (text)
   - description (text)
   - price (text, nullable)
   - image_url (text, nullable)
   - published (boolean)
   - created_at (timestamp, default now())
3. Create a Storage bucket named `products` and make it public (or configure read rules).
4. Add env vars in Vercel / local .env:
   - NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   - NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   - SUPABASE_SERVICE_ROLE_KEY=your-service-role-key  # keep secret
5. Install new dependency:
   - npm install @supabase/supabase-js
6. Start dev server:
   - npm run dev
   - Visit /dashboard to add products.

Security:
- Protect /dashboard in production (Supabase Auth or other auth). Right now the dashboard route is client-side and not protected.

Replace the logo at public/logo.svg with the high-res PNG you uploaded in the repo or via the GitHub UI.
