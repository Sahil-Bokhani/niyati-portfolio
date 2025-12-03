import { useEffect, useRef, useState } from 'react';

export function useScrollReveal() {
  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(() => {
    // If reduced motion is preferred, default to revealed
    if (typeof window !== 'undefined') {
      return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    }
    return false;
  });

  useEffect(() => {
    // If already revealed, no need to observe
    if (isRevealed) return;

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [isRevealed]);

  return { ref, isRevealed };
}
