import { useState } from 'react';

const STREAK_KEY = 'steven-journey-streak';
const LEGACY_STREAK_KEY = 'pathforge-streak';

function loadStreak() {
  try {
    const saved = localStorage.getItem(STREAK_KEY) || localStorage.getItem(LEGACY_STREAK_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      if (data.lastDate) {
        const today = new Date().toISOString().split('T')[0];
        const last = new Date(data.lastDate);
        const now = new Date(today);
        const diffDays = Math.floor((now - last) / 86400000);
        if (diffDays > 1) {
          const reset = { count: 0, lastDate: null };
          localStorage.setItem(STREAK_KEY, JSON.stringify(reset));
          return reset;
        }
      }
      return data;
    }
  } catch (err) {
    console.error('Failed to load streak:', err);
  }
  return { count: 0, lastDate: null };
}

function saveStreak(data) {
  localStorage.setItem(STREAK_KEY, JSON.stringify(data));
}

export function useStreak() {
  const [streak, setStreak] = useState(loadStreak);

  function recordActivity() {
    const today = new Date().toISOString().split('T')[0];
    const { lastDate, count } = streak;

    if (lastDate === today) return count; // Already recorded today

    const last = lastDate ? new Date(lastDate) : null;
    const now = new Date(today);
    const diffDays = last ? Math.floor((now - last) / 86400000) : 2;

    let newCount;
    if (diffDays === 1) {
      newCount = count + 1;
    } else {
      newCount = 1;
    }

    const updated = { count: newCount, lastDate: today };
    setStreak(updated);
    saveStreak(updated);
    return newCount;
  }

  return {
    streakCount: streak.count,
    lastDate: streak.lastDate,
    recordActivity,
  };
}
