import React, { useState, useEffect } from 'react';
import { ANIMATION_TIMING } from '../../config/animation';
import { useScrollLock } from '../../hooks/useScrollLock';
import CurtainContent from './CurtainContent';
import './TheatricalCurtain.css';

interface TheatricalCurtainProps {
  onRevealComplete: () => void;
}

const TheatricalCurtain: React.FC<TheatricalCurtainProps> = ({ onRevealComplete }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [contentFading, setContentFading] = useState(false);
  
  // Lock scroll while curtain is visible
  useScrollLock(!isHidden);

  useEffect(() => {
    // Start opening sequence after initial delay
    const openingTimer = setTimeout(() => {
      // Start fading out content before curtain opens
      setContentFading(true);
      
      // Start opening curtain after content starts fading
      setTimeout(() => {
        setIsOpening(true);
        
        // Hide curtain after animation completes
        setTimeout(() => {
          setIsHidden(true);
          onRevealComplete();
        }, ANIMATION_TIMING.CURTAIN_ANIMATION_DURATION);
      }, ANIMATION_TIMING.CONTENT_FADE_DURATION);
    }, ANIMATION_TIMING.CURTAIN_INITIAL_DELAY);

    return () => clearTimeout(openingTimer);
  }, [onRevealComplete]);

  if (isHidden) return null;

  return (
    <div className={`curtain-container ${isHidden ? 'hidden' : ''}`}>
      <div className={`curtain-left ${isOpening ? 'open' : ''}`} />
      <div className={`curtain-right ${isOpening ? 'open' : ''}`} />
      <div className={`vignette ${isOpening ? 'fade-out' : ''}`} />
      <div className={`curtain-content ${contentFading ? 'fade-out' : ''}`}>
        <CurtainContent />
      </div>
    </div>
  );
}

export default TheatricalCurtain;