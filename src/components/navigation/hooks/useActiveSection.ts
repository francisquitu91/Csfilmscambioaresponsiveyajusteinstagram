import { useState, useEffect } from 'react';

export const useActiveSection = (sectionId: string): boolean => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const checkActiveSection = () => {
      const section = document.getElementById(sectionId);
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const offset = window.innerHeight * 0.3;

      setIsActive(
        rect.top <= offset && rect.bottom >= offset
      );
    };

    window.addEventListener('scroll', checkActiveSection);
    checkActiveSection(); // Check initial state

    return () => window.removeEventListener('scroll', checkActiveSection);
  }, [sectionId]);

  return isActive;
};