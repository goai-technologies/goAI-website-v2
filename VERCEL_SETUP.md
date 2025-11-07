# Vercel Deployment Setup Guide

## Required Environment Variables

This project requires the following environment variables to be set in Vercel:

### 1. VITE_SUPABASE_URL
- **Description**: Your Supabase project URL
- **How to get it**: 
  1. Go to https://app.supabase.com
  2. Select your project
  3. Go to Settings → API
  4. Copy the "Project URL" (e.g., `https://xxxxx.supabase.co`)

### 2. VITE_SUPABASE_ANON_KEY
- **Description**: Your Supabase anonymous/public API key
- **How to get it**:
  1. Go to https://app.supabase.com
  2. Select your project
  3. Go to Settings → API
  4. Copy the "anon" or "public" key from the API keys section

## Setting Environment Variables in Vercel

1. Go to https://vercel.com/dashboard
2. Select your project: **goAI-website-v2**
3. Click on **Settings** (in the top navigation)
4. Click on **Environment Variables** (in the left sidebar)
5. Add each variable:
   - **Key**: `VITE_SUPABASE_URL`
   - **Value**: Your Supabase project URL
   - **Environment**: Select all (Production, Preview, Development)
   - Click **Save**
   
   - **Key**: `VITE_SUPABASE_ANON_KEY`
   - **Value**: Your Supabase anon key
   - **Environment**: Select all (Production, Preview, Development)
   - Click **Save**

## After Adding Variables

1. Go to the **Deployments** tab
2. Find your latest deployment
3. Click the three dots (⋯) menu
4. Click **Redeploy**
5. Wait for the deployment to complete

Your blog posts should now load correctly!

## Troubleshooting

- If blogs still don't show, check the browser console for errors
- Verify the environment variables are set correctly in Vercel
- Make sure your Supabase project has the `blog_posts` table created (run the migration in `supabase/migrations/`)
- Ensure you have published blog posts in your Supabase database with `published = true`

