# Healing - NDU Project

A healing application built with Next.js and Supabase to support wellness journeys.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Beautiful UI components
- **Supabase** - Backend as a Service (Database, Auth, Storage)

## Getting Started

### Prerequisites

- Node.js 20+ and npm installed
- A Supabase account and project

### Environment Setup

1. **Copy the environment template:**
   ```bash
   cp .env.local.example .env.local
   ```

2. **Get your Supabase credentials:**
   - Go to [Supabase Dashboard](https://app.supabase.com)
   - Select your project
   - Navigate to Settings > API
   - Copy the following values:
     - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
     - **Project API key (anon public)** → `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

3. **Update `.env.local`** with your actual credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-anon-key-here
   ```

### Installation

Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

The Supabase connection status will be displayed on the home page. If you see a green indicator, your setup is working correctly!

### Available Routes

- `/` - Landing page with Supabase connection test
- `/start` - Begin healing journey
- `/register` - User registration
- `/baseline` - Baseline assessment
- `/plan` - Personalized healing plan
- `/videos` - Healing videos and resources

## Project Structure

```
healing/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── start/             # Start page
│   ├── register/          # Registration page
│   ├── baseline/          # Baseline assessment page
│   ├── plan/              # Healing plan page
│   ├── videos/            # Videos page
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   └── Navigation.tsx     # Main navigation component
├── lib/                   # Utilities and configurations
│   ├── supabase.ts        # Supabase client
│   └── utils.ts           # Helper functions
└── public/                # Static assets
```

## Building for Production

```bash
npm run build
npm start
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

## License

This project is part of the NDU-2025 initiative.
