# 🧭 PathForge

![PathForge Banner](./public/favicon.svg) <!-- Replace with an actual screenshot banner -->

**PathForge** is a node-based career roadmap visualizer and progress tracker. It allows you to build customized career paths, track tasks and milestones, and share your journey with a public profile.

Built as a portfolio-grade SaaS application with modern architecture and dynamic gamification features.

## 🚀 Features

- **Interactive Node Flow:** Visualize your career path with React Flow and automated dagre layouts.
- **Multi-Path Tracking:** Create and switch between multiple professional trajectories (e.g., Data Engineer vs AI Analyst).
- **Gamified Progress:** Streak counters, motivational quotes, and confetti celebrations upon milestone completion.
- **Optimistic UI:** Fast, responsive interactions that sync smoothly with the backend.
- **Public Profiles:** Share your personalized `/u/:slug` roadmap with recruiters and peers.
- **Dark Mode First:** Premium design system featuring vibrant colors and smooth transitions.

## 🛠 Tech Stack

- **Frontend:** React 18, Vite, Tailwind CSS v4, React Router v6
- **Visualization:** `@xyflow/react` (React Flow), `dagre`
- **Backend & Auth:** Supabase (PostgreSQL, Row Level Security, Auth)
- **UI & Animation:** Lucide React (Icons), Canvas Confetti

## 🏃‍♂️ Getting Started

### 1. Clone & Install
```bash
git clone https://github.com/yourusername/pathforge.git
cd pathforge
npm install
```

### 2. Environment Setup
Copy the example environment variables and add your Supabase credentials:
```bash
cp .env.example .env
```
*(If you run the app without a `.env` file, it will gracefully fall back to **Demo Mode**, utilizing `localStorage` for state management).*

### 3. Database Setup (Supabase)
1. Create a new Supabase project.
2. Go to the SQL Editor and run the queries found in `supabase/schema.sql` to create tables and RLS policies.
3. Configure Google OAuth in your Supabase Auth settings.

### 4. Run Locally
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser.

## 🗂 Project Structure

```text
src/
├── components/
│   ├── features/    # Gamification, streaks, strengths
│   ├── layout/      # Navbar, AppLayout, MobileNav
│   ├── nodes/       # Custom React Flow nodes (RoadmapNode, PhaseHeader)
│   └── ui/          # Core design system primitives (Card, Button, Badge)
├── context/         # AuthContext, ThemeContext
├── hooks/           # usePaths, useStreak (Business logic)
├── lib/             # Supabase client, layout engine, constants
├── pages/           # Dashboard, RoadmapView, Landing, PublicProfile
└── App.jsx          # Routing configuration
```

## 🔐 Security & Architecture

- **Row Level Security (RLS):** Policies are enforced directly at the Postgres database level, ensuring users can only modify their own paths and nodes.
- **Custom Design System:** Built entirely with raw CSS and Tailwind tokens for absolute control over micro-animations and component sizing. No generic UI component libraries were used.
- **Fallback Resilience:** `AuthContext` detects missing configurations and mocks a logged-in user with predefined demo data, ensuring zero-downtime demonstration.

## 👨‍💻 Author

**Steven**
- [LinkedIn](#) <!-- Add your LinkedIn -->
- [GitHub](https://github.com/yourusername) <!-- Add your GitHub -->

---
*Built with React, Supabase, and a lot of ☕.*
