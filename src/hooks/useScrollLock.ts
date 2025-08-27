import { useEffect, useCallback } from 'react';

export const useScrollLock = (lock: boolean) => {
  const lockScroll = useCallback(() => {
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollBarWidth}px`;
    document.body.style.overflow = 'hidden';
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.paddingRight = '';
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    if (lock) {
      lockScroll();
    } else {
      unlockScroll();
    }

    return () => {
      unlockScroll();
    };
  }, [lock, lockScroll, unlockScroll]);
};