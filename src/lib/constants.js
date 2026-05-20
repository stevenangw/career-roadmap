import {
  Zap, BookOpen, Award, FolderKanban, Trophy,
  Target, Flame, TrendingUp, Sparkles
} from 'lucide-react';

// Node type configuration
export const NODE_TYPES = {
  action: { label: 'Action', color: '#3B82F6', bgLight: 'rgba(59,130,246,0.12)', icon: Zap },
  skill: { label: 'Skill', color: '#F59E0B', bgLight: 'rgba(245,158,11,0.12)', icon: BookOpen },
  cert: { label: 'Certification', color: '#10B981', bgLight: 'rgba(16,185,129,0.12)', icon: Award },
  project: { label: 'Project', color: '#F97316', bgLight: 'rgba(249,115,22,0.12)', icon: FolderKanban },
  milestone: { label: 'Milestone', color: '#8B5CF6', bgLight: 'rgba(139,92,246,0.12)', icon: Trophy },
};

// Status configuration
export const STATUS_CONFIG = {
  todo: { label: 'To Do', color: '#666666', bg: 'rgba(102,102,102,0.15)' },
  in_progress: { label: 'In Progress', color: '#F59E0B', bg: 'rgba(245,158,11,0.15)' },
  done: { label: 'Done', color: '#10B981', bg: 'rgba(16,185,129,0.15)' },
};

// Motivational quotes
export const QUOTES = [
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "Every expert was once a beginner.", author: "Helen Hayes" },
  { text: "Small daily improvements over time lead to stunning results.", author: "Robin Sharma" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "Success is the sum of small efforts repeated day in and day out.", author: "Robert Collier" },
  { text: "Your future is created by what you do today, not tomorrow.", author: "Robert Kiyosaki" },
  { text: "The expert in anything was once a beginner.", author: "Rutherford B. Hayes" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Learning never exhausts the mind.", author: "Leonardo da Vinci" },
  { text: "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.", author: "Brian Herbert" },
  { text: "Investasi terbaik adalah investasi pada diri sendiri.", author: "Warren Buffett" },
  { text: "Discipline is the bridge between goals and accomplishment.", author: "Jim Rohn" },
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
];

// Career track templates for onboarding
export const CAREER_TEMPLATES = [
  { id: 'data', title: 'Data & Analytics Engineer', icon: TrendingUp, color: '#3B82F6' },
  { id: 'ai', title: 'AI Quality & Red Team', icon: Sparkles, color: '#8B5CF6' },
  { id: 'blockchain', title: 'Blockchain Security Auditor', icon: Target, color: '#10B981' },
  { id: 'custom', title: 'Custom Path', icon: Flame, color: '#F97316' },
];

// Default demo user profile
export const DEMO_PROFILE = {
  id: 'demo-user',
  name: 'Steven',
  headline: 'Informatika Graduate · Chaos Engineer · Data & Blockchain Analyst',
  avatar_url: null,
  is_public: true,
  public_slug: 'steven',
  onboarding_done: true,
  streak_count: 7,
  last_active_date: new Date().toISOString().split('T')[0],
};

// Default strengths
export const DEMO_STRENGTHS = [
  { id: 's1', label: 'Analytical Thinking & Anomaly Detection' },
  { id: 's2', label: 'Chaos Engineering & Statistical Validation' },
  { id: 's3', label: 'Multi-project Management (47 projects)' },
  { id: 's4', label: 'Python · SQL · Solidity · Node.js' },
  { id: 's5', label: 'Blockchain Protocol Testing (15+ testnets)' },
  { id: 's6', label: 'People Analytics & RFM Analysis' },
];

// Demo paths — re-exported from dedicated data file
export { DEMO_PATHS } from './pathsData.js';

// Helper: get today's quote
export function getTodayQuote() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  return QUOTES[dayOfYear % QUOTES.length];
}

// Helper: calculate path progress
export function calculateProgress(nodes) {
  if (!nodes || nodes.length === 0) return 0;
  const done = nodes.filter((n) => n.status === 'done').length;
  return Math.round((done / nodes.length) * 100);
}

// Helper: get all nodes from a path
export function getAllNodesFromPath(path) {
  if (!path?.phases) return [];
  return path.phases.flatMap((phase) => phase.nodes || []);
}

// Helper: format relative time
export function timeAgo(date) {
  if (!date) return '';
  const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
  if (seconds < 60) return 'baru saja';
  if (seconds < 3600) return `${Math.floor(seconds / 60)} menit lalu`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} jam lalu`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)} hari lalu`;
  return new Date(date).toLocaleDateString('id-ID');
}
