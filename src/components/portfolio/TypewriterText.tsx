import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  onComplete?: () => void;
  className?: string;
  speed?: number;
  delay?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  onComplete, 
  className = '', 
  speed = 100,
  delay = 0
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const startDelay = setTimeout(() => {
      setIsStarted(true);
    }, delay);

    return () => clearTimeout(startDelay);
  }, [delay]);

  useEffect(() => {
    if (!isStarted) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      const completeTimeout = setTimeout(onComplete, 500);
      return () => clearTimeout(completeTimeout);
    }
  }, [currentIndex, text, speed, onComplete, isStarted]);

  return (
    <h2 className={className}>
      {displayText}
      <span className={`ml-1 inline-block ${currentIndex >= text.length ? 'opacity-0' : 'opacity-100'}`}>|</span>
    </h2>
  );
};

export default TypewriterText;