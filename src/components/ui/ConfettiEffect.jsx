/* eslint-disable react-refresh/only-export-components */
import { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

export function fireConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#2D4A3E', '#C8A96E', '#4A7C59', '#EDE8DF', '#9E9A94'],
  });
}

export function fireStreakConfetti() {
  confetti({
    particleCount: 50,
    spread: 60,
    startVelocity: 25,
    origin: { x: 0.5, y: 0.8 },
    colors: ['#C8A96E', '#4A7C59', '#EDE8DF'],
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
