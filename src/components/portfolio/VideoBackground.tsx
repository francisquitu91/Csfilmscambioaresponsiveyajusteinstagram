import React, { useState, useEffect } from 'react';
import { ANIMATION_TIMING } from '../../config/animation';

const VideoBackground = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, ANIMATION_TIMING.VIDEO_FADE_DELAY);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <iframe
          className="w-full h-full scale-[1.5]"
          src="https://www.youtube.com/embed/2Z7oe9Mp3HE?autoplay=1&mute=1&loop=1&playlist=2Z7oe9Mp3HE&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="absolute inset-0 bg-black/50" />
    </>
  );
};

export default VideoBackground;