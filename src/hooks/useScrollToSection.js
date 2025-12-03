import { useCallback } from 'react';

export function useScrollToSection() {
  const scrollToSection = useCallback((id) => {
    if (!id) return;
    const element = document.getElementById(id);
    if (!element) return;

    const prefersReducedMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    element.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  }, []);

  return { scrollToSection };
}
