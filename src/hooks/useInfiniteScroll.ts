import { useState, useEffect } from 'react';

export function useInfiniteScroll(speed: number = 50) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const animate = () => {
      setScrollPosition((prev) => (prev + 1) % 100);
      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [speed]);

  return scrollPosition;
}