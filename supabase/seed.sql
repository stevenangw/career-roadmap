-- Demo Seed Data for PathForge
-- Replace the UUID below with an actual user_id from your auth.users table after signing up

-- Assuming dummy user ID for seed purposes: '11111111-1111-1111-1111-111111111111'
-- NOTE: You must create a user in Supabase Auth first, then use their ID here.

/*
INSERT INTO profiles (id, email, name, headline, is_public, public_slug)
VALUES (
  '11111111-1111-1111-1111-111111111111',
  'demo@example.com',
  'Steven',
  'Informatika Graduate · Chaos Engineer · Data & Blockchain Analyst',
  true,
  'steven'
);

-- Insert Path 1: Data
INSERT INTO user_paths (id, user_id, title, description, icon, color)
VALUES (
  'p1000000-0000-0000-0000-000000000001',
  '11111111-1111-1111-1111-111111111111',
  'Data Integrity & Analytics Engineer',
  'Build expertise in data quality, ETL pipelines, and analytics engineering',
  'trending-up',
  '#3B82F6'
);

-- Insert Nodes for Path 1
INSERT INTO user_nodes (path_id, user_id, phase_id, label, detail, type, status, sort_order)
VALUES
('p1000000-0000-0000-0000-000000000001', '11111111-1111-1111-1111-111111111111', 'p1-phase1', 'Optimasi CV dengan keyword ATS', 'Pastikan skill SQL, Python, dbt, dan Great Expectations masuk secara eksplisit.', 'action', 'todo', 1),
('p1000000-0000-0000-0000-000000000001', '11111111-1111-1111-1111-111111111111', 'p1-phase1', 'Aktifkan LinkedIn secara strategis', 'Headline: Data & Analytics Engineer — Anomaly Detection', 'action', 'todo', 2),
('p1000000-0000-0000-0000-000000000001', '11111111-1111-1111-1111-111111111111', 'p1-phase2', 'Kuasai dbt (data build tool)', 'Pelajari model, testing, dan dokumentasi di dbt.', 'skill', 'todo', 3);

-- Add more nodes and paths as necessary matching your constant.js structure
*/
