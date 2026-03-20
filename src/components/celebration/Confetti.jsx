import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function Confetti({ trigger, duration = 3000 }) {
  useEffect(() => {
    if (trigger) {
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#ff7e5f', '#feb47b', '#facc15', '#4ade80', '#38bdf8']
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#ff7e5f', '#feb47b', '#facc15', '#4ade80', '#38bdf8']
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      
      frame();
    }
  }, [trigger, duration]);

  return null;
}
