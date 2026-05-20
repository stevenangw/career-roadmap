import { useState, useEffect } from 'react';

const STREAK_KEY = 'pathforge-streak';

function loadStreak() {
  try {
    const saved = localStorage.getItem(STREAK_KEY);
    if (saved) return JSON.parse(saved);
  } catch {}
  return { count: 0, lastDate: null };
}

function saveStreak(data) {
  localStorage.setItem(STREAK_KEY, JSON.stringify(data));
}

export function useStreak() {
  const [streak, setStreak] = useState(loadStreak);

  useEffect(() => {
    // Check if streak is still active on mount
    const today = new Date().toISOString().split('T')[0];
    const { lastDate, count } = streak;

    if (!lastDate) return;

    const last = new Date(lastDate);
    const now = new Date(today);
    const diffDays = Math.floor((now - last) / 86400000);

    if (diffDays > 1) {
      // Streak broken
      const reset = { count: 0, lastDate: null };
      setStreak(reset);
      saveStreak(reset);
    }
  }, []);

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
