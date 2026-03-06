# Deployment Guide

This application is built with **Next.js 16**. The easiest and most reliable way to deploy it is via **Vercel** (the creators of Next.js), but it can be hosted anywhere that supports Node.js.

## Option 1: Vercel (Recommended)
*Best for: Zero-config setup, automatic HTTPS, and scaling.*

1.  **Push your code to GitHub** (or GitLab/Bitbucket).
    *   Initialize git if you haven't: `git init`, `git add .`, `git commit -m "Initial commit"`.
    *   Push to a private repository.
2.  **Sign up at [vercel.com](https://vercel.com/signup)** using your git provider.
3.  **Import Project**:
    *   Click "Add New Project" -> "Import" your repository.
4.  **Configure Environment Variables**:
    *   In the Vercel dashboard, verify the "Environment Variables" section.
    *   Copy the values from your local `.env.local` file:
        *   `NEXT_PUBLIC_SUPABASE_URL`
        *   `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5.  **Deploy**:
    *   Click "Deploy". Vercel will build your app and give you a live URL (e.g., `https://training-portal-xyz.vercel.app`).
6.  **Supabase Auth Configuration**:
    *   Go to your **Supabase Dashboard** -> Authentication -> URL Configuration.
    *   Add your new Vercel URL to the **Site URL** and **Redirect URLs** (e.g., `https://your-app.vercel.app/**`).

## Option 2: Self-Hosting (VPS etc.)
*Best for: Keeping everything on your own servers.*

1.  **Build**:
    *   Run `npm run build` in your terminal. This creates an optimized production build in the `.next` folder.
2.  **Start**:
    *   Run `npm start`. This starts the production server, usually on port 3000.
3.  **Process Management**:
    *   Use a tool like **PM2** to keep the server running: `pm2 start npm --name "training-app" -- start`.
4.  **Reverse Proxy**:
    *   Set up Nginx or Apache to point your domain (e.g., `portal.transworld.com`) to `localhost:3000`.

---

# 3-Tier Deployment Architecture (Dev -> Staging -> Prod)

To ensure stability, we enforce a strict promotion workflow. Changes move from **Dev** (Local) to **Staging** (Replica) to **Production** (Live).

## 1. Environments

| Environment | Hosted On | Database | Branch | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Development** | Localhost | **Staging DB** | `dev` | Active coding, feature building. Connects to Staging DB to test with realistic schema. |
| **Staging** | Vercel (Staging Project) | **Staging DB** | `staging` | Exact replica of Prod. Used for final QA, client review, and integration testing. |
| **Production** | Vercel (Main Project) | **Production DB** | `main` | Live client data. **READ-ONLY** for developers (no direct manual edits). |

## 2. Setup Instructions

### Step 1: Vercel Setup for Staging
1.  Go to Vercel Dashboard.
2.  **Create New Project** (Import the same repo again).
3.  Name it `training-portal-staging`.
4.  **Settings -> Git**:
    *   Production Branch: `staging` (instead of `main`).
5.  **Settings -> Environment Variables**:
    *   Use the **Staging Supabase Credentials** (same as your local `.env.local`).
    *   `NEXT_PUBLIC_SUPABASE_URL`: `[Staging URL]`
    *   `NEXT_PUBLIC_SUPABASE_ANON_KEY`: `[Staging Key]`

### Step 2: GitHub Workflow
1.  **Feature Work**: Create a feature branch off `dev`.
    *   `git checkout -b feature/new-login`
2.  **Merge to Dev**: PR to `dev`.
3.  **Promote to Staging**:
    *   `git checkout staging`
    *   `git merge dev`
    *   `git push origin staging` -> **Triggers Vercel Staging Deploy**
4.  **Promote to Prod**:
    *   `git checkout main`
    *   `git merge staging`
    *   `git push origin main` -> **Triggers Vercel Prod Deploy**

## 3. Data Replication (Prod -> Staging)

To ensure Staging is an exact replica of Prod, perform a **Data Sync** before major testing cycles.

**Using Supabase CLI & Docker (Recommended):**
1.  **Dump Prod Data**:
    ```bash
    supabase db dump --db-url "postgresql://postgres:[PROD_PASSWORD]@[PROD_HOST]:5432/postgres" -f prod_backup.sql
    ```
2.  **Restore to Staging**:
    ```bash
    psql "postgresql://postgres:[STAGING_PASSWORD]@[STAGING_HOST]:5432/postgres" < prod_backup.sql
    ```

**Manual Sync (Supabase Dashboard):**
1.  Go to **Prod Project** -> Database -> Backups -> Download latest `.sql` dump.
2.  Go to **Staging Project** -> SQL Editor -> Paste/Run script (or use CLI to restore if large).
3.  **IMPORTANT**: This overwrites Staging data. Ensure no "test only" work is lost.

## Post-Deployment Checklist
1.  **System Admin Setup**:
    *   Since it's a new database environment (unless reusing the same Supabase instance), you might need to re-run the "Make System Admin" SQL command for your live account.
2.  **Test Email**:
    *   Try the "Invite Staff" flow to ensure emails are sending (Supabase defaults to a test rate limit; for production, configure a custom SMTP like SendGrid or AWS SES in Supabase Settings).
3.  **Dark Mode**:
    *   Verify the site looks good on your phone/laptop in dark mode.
