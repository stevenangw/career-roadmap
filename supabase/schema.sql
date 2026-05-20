-- PathForge V2 Supabase Schema

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==========================================
-- 1. PROFILES TABLE
-- ==========================================
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  avatar_url TEXT,
  headline TEXT,
  is_public BOOLEAN DEFAULT false,
  public_slug TEXT UNIQUE,
  streak_count INTEGER DEFAULT 0,
  last_activity_date DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS Policies for profiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own profile" 
ON profiles FOR SELECT 
USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" 
ON profiles FOR UPDATE 
USING (auth.uid() = id);

CREATE POLICY "Public profiles are viewable by everyone" 
ON profiles FOR SELECT 
USING (is_public = true);


-- ==========================================
-- 2. USER_PATHS TABLE
-- ==========================================
CREATE TABLE user_paths (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  icon TEXT DEFAULT 'trending-up',
  color TEXT DEFAULT '#6366F1',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS Policies for user_paths
ALTER TABLE user_paths ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own paths" 
ON user_paths FOR ALL 
USING (auth.uid() = user_id);

CREATE POLICY "Public paths are viewable by everyone if profile is public" 
ON user_paths FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM profiles 
    WHERE profiles.id = user_paths.user_id AND profiles.is_public = true
  )
);


-- ==========================================
-- 3. USER_NODES TABLE (Tasks & Milestones)
-- ==========================================
CREATE TABLE user_nodes (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  path_id UUID REFERENCES user_paths(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  phase_id TEXT NOT NULL,
  label TEXT NOT NULL,
  detail TEXT,
  type TEXT DEFAULT 'action', -- action, skill, project, certification, milestone
  status TEXT DEFAULT 'todo', -- todo, in_progress, done
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS Policies for user_nodes
ALTER TABLE user_nodes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own nodes" 
ON user_nodes FOR ALL 
USING (auth.uid() = user_id);

CREATE POLICY "Public nodes are viewable by everyone if profile is public" 
ON user_nodes FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM profiles 
    WHERE profiles.id = user_nodes.user_id AND profiles.is_public = true
  )
);


-- ==========================================
-- 4. ACTIVITY_LOGS TABLE (For Streaks)
-- ==========================================
CREATE TABLE activity_logs (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  activity_type TEXT NOT NULL, -- e.g., 'status_change', 'node_added'
  node_id UUID REFERENCES user_nodes(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS Policies for activity_logs
ALTER TABLE activity_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view and create their own activity logs" 
ON activity_logs FOR ALL 
USING (auth.uid() = user_id);


-- ==========================================
-- TRIGGERS
-- ==========================================

-- Auto-create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user() 
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email, name, avatar_url)
  VALUES (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'avatar_url'
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_profiles_modtime
BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_user_paths_modtime
BEFORE UPDATE ON user_paths FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_user_nodes_modtime
BEFORE UPDATE ON user_nodes FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
