import { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

export function fireConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#6366F1', '#8B5CF6', '#10B981', '#F59E0B', '#EC4899'],
  });
}

export function fireStreakConfetti() {
  confetti({
    particleCount: 50,
    spread: 60,
    startVelocity: 25,
    origin: { x: 0.5, y: 0.8 },
    colors: ['#F59E0B', '#EF4444', '#F97316'],
    shapes: ['circle'],
  });
}

export default function ConfettiEffect({ trigger }) {
  const prevTrigger = useRef(trigger);

  useEffect(() => {
    if (trigger && trigger !== prevTrigger.current) {
      fireConfetti();
    }
    prevTrigger.current = trigger;
  }, [trigger]);

  return null;
}
