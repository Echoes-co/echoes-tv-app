# Echoes TV

AI-powered, USTVNow-style **multi-channel network** for Reactors, YouTubers, and Remixers.  
Think “interactive cable guide + AI remixer + avatar TV” built on modern web tech.

---

## ✨ Core Features

| # | Feature | Description |
|---|---------|-------------|
| 1 | **TV Guide** | Grid-based, mobile-first schedule for live & replay streams (USTVNow look and feel). |
| 2 | **Channel Pages** | Dedicated pages for each creator (≥150 k subs) with profile, shows, and Remix Player. |
| 3 | **Remix Player** | AI remix engine & avatar overlays; plays original or auto-generated remixes. |
| 4 | **Avatar Generator** | Pipeline that converts consented MP4 clips → lightweight talking-head avatars. |
| 5 | **Subscriptions & Rev-Share** | Paid network via Stripe; creators get automated revenue splits. |
| 6 | **Supabase Backend** | Auth, data, and storage for users, channels, shows, remixes, avatars, subscriptions. |

---

## 🏗 Tech Stack

| Layer | Choice | Notes |
|-------|--------|-------|
| Frontend | **Next.js (App Router, TypeScript)** | SSR + static hybrid, ideal for streaming UI. |
| Styling | **Tailwind CSS** | Rapid, mobile-first utility classes. |
| State / Data | **Supabase** | PostgreSQL + Realtime; Auth with Google OAuth & email/password fallback. |
| Payments | **Stripe** | Subscription & webhooks. |
| AI Hooks | Placeholder React hooks (`useRemixEngine`, `useAvatarGenerator`) ready to be wired to your models. |

---

## 📂 Project Structure (initial scaffold)

```
echoes-tv/
├─ app/                     # Next.js App Router
│  ├─ layout.tsx            # Root layout w/ Tailwind
│  ├─ page.tsx              # Landing page
│  ├─ tv-guide/             # /tv-guide route
│  ├─ channels/[id]/        # /channels/:channelId
│  └─ player/[id]/          # /player/:remixId
├─ components/
│  ├─ TvGuideGrid.tsx
│  ├─ ChannelHeader.tsx
│  └─ RemixPlayer.tsx
├─ hooks/
│  ├─ useRemixEngine.ts
│  └─ useAvatarGenerator.ts
├─ lib/
│  ├─ supabaseClient.ts     # Initialized Supabase client
│  └─ stripe.ts             # Stripe helpers / webhooks
├─ types/                   # Shared TypeScript types
├─ public/                  # Static assets
├─ .env.local.example       # Environment variable template
└─ README.md
```

---

## 🗄 Supabase Schema

| Table | Purpose | Key Fields |
|-------|---------|------------|
| `users` | Authenticated viewers & creators | id (uuid, PK), email, role (`viewer` \| `creator` \| `admin`), stripe_customer_id |
| `channels` | Creator “networks” | id (uuid), owner_user_id (FK → users), name, slug, description, avatar_url |
| `shows` | Scheduled content blocks | id, channel_id (FK), title, start_time, end_time, is_live |
| `remixes` | AI-generated or manual remixes | id, show_id (FK), remix_url, metadata (jsonb), created_by |
| `avatars` | Generated avatar models | id, user_id (FK), storage_path, status (`processing` \| `ready`), model_info (jsonb) |
| `subscriptions` | Paid subs & rev-share tracking | id, user_id (subscriber), channel_id, stripe_subscription_id, status |

Migrations live in `/supabase/migrations` (generated via `supabase db diff`).

---

## 🚀 Quick Start

1. **Clone & install**

   ```bash
   git clone https://github.com/your-org/echoes-tv.git
   cd echoes-tv
   pnpm install   # or yarn / npm
   ```

2. **Configure environment**

   Copy and fill the template:

   ```bash
   cp .env.local.example .env.local
   ```

   Required keys:

   ```
   NEXT_PUBLIC_SUPABASE_URL=
   NEXT_PUBLIC_SUPABASE_ANON_KEY=
   SUPABASE_SERVICE_ROLE_KEY=      # for server actions if needed
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
   STRIPE_SECRET_KEY=
   STRIPE_WEBHOOK_SECRET=
   ```

3. **Start Supabase locally (optional)**

   ```bash
   supabase start
   supabase db reset
   ```

4. **Run dev server**

   ```bash
   pnpm dev
   # Open http://localhost:3000
   ```

5. **AI Placeholder Hooks**

   - `useRemixEngine` returns dummy state & functions (`generateRemix()`, `status`).
   - `useAvatarGenerator` returns stubbed upload & progress handler.
   Swap in your preferred models (FFmpeg + Whisper + LLM, etc.) at any time.

---

## 🧩 Available Scripts

| Command | Action |
|---------|--------|
| `pnpm dev` | Next.js in development with hot-reload |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `supabase db push` | Push local schema to Supabase cloud |
| `stripe listen` | Local Stripe webhook forwarding |

---

## 📱 Mobile-First UX

Tailwind’s `mobile-first` philosophy is applied globally.  
`TvGuideGrid` collapses to horizontal scroll on small screens; players use aspect-ratio utilities to stay responsive.

---

## 🔒 Auth Flow

1. User hits **Sign In** → Supabase OAuth (Google) or email.
2. Session stored in client; `supabaseClient.auth.onAuthStateChange` handles redirects.
3. SSR routes use `cookies()` to check Auth on server.
4. Protected hooks redirect to `/login` if no session.

---

## 💳 Payments & Rev-Share

Initial Stripe integration covers:

- Customer & subscription creation via Stripe Checkout
- Webhook (`/api/webhooks/stripe`) updates `subscriptions` table
- Revenue split: placeholder calculated nightly (`cron`) → ready for Stripe Connect.

---

## 🗺 Roadmap

- [ ] Implement real AI remix pipeline
- [ ] Avatar fine-tuning & WebGL overlay
- [ ] Live ingestion (HLS) + DVR
- [ ] Creator dashboard (analytics, payout reports)
- [ ] Multi-tenant theming
- [ ] Public launch 🚀

---

## 🤝 Contributing

PRs and issues welcome!  
Run `pnpm lint && pnpm test` before submitting.

---

## © 2025 San Francisco AI Factory

Echoes TV is a product of Echoes Legal, expanding fair-use remix culture into a thriving entertainment network.
