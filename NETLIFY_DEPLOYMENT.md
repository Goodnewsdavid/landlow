# Netlify Deployment Guide - Frontend Only

## Quick Deploy Steps

### Option 1: Deploy via Netlify Dashboard (Recommended)

1. **Build your project locally first (to test):**
   ```bash
   npm run build
   ```
   This creates a `dist` folder with your production build.

2. **Go to Netlify:**
   - Visit: https://app.netlify.com
   - Sign up/Login (free account)

3. **Deploy:**
   - Click "Add new site" → "Deploy manually"
   - Drag and drop your `dist` folder
   - Your site will be live in seconds!

4. **For continuous deployment (later):**
   - Connect your GitHub repository
   - Netlify will auto-deploy on every push

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   npm run build
   netlify deploy --prod
   ```

## Environment Variables

Since you're deploying frontend only, you can set these in Netlify Dashboard:

1. Go to: **Site settings** → **Environment variables**
2. Add these variables (when you have them):
   - `VITE_STRIPE_PUBLISHABLE_KEY` - Your Stripe publishable key
   - `VITE_API_URL` - Your backend API URL (when backend is deployed)

**Note:** For now, these can be left empty since backend isn't deployed yet.

## Important Notes

⚠️ **Backend Features Won't Work:**
- Payment/Checkout forms won't process payments
- Contact form won't send emails
- Get Notified form won't send emails
- Cash Offer form won't send emails

✅ **What Will Work:**
- All pages are viewable
- Navigation works
- Property listings display
- Forms show success messages (but don't actually submit)

## Custom Domain Setup (Later)

When ready to use your domain:

1. Go to: **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter your domain
4. Follow Netlify's DNS instructions

## Build Settings (Already Configured)

The `netlify.toml` file is already set up with:
- Build command: `npm run build`
- Publish directory: `dist`
- SPA routing redirects (all routes → index.html)
- Node version: 18

The `public/_redirects` file ensures all routes work properly with React Router.

## Troubleshooting

**Build fails?**
- Make sure all dependencies are in `package.json`
- Check that `npm run build` works locally first

**404 errors on routes?**
- The `_redirects` file handles this
- Make sure it's in your `public` folder (it will be copied to dist)

**Environment variables not working?**
- Rebuild after adding variables: **Deploys** → **Trigger deploy** → **Clear cache and deploy site**

