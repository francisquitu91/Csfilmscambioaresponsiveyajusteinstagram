import React, { useState, useEffect, useRef } from 'react';
import { ANIMATION_TIMING } from '../../config/animation';

interface VideoBackgroundProps {
  videoId: string;
  overlayClass?: string;
  imageSrc?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  videoId,
  overlayClass = 'bg-black/50',
  imageSrc
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // Map YouTube video IDs to direct video URLs (fallback demo URLs)
  const getVideoUrl = (id: string): string => {
    const videoMap: { [key: string]: string } = {
      'M8omQR5gAag': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      '2Z7oe9Mp3HE': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      'XJhHS6sMeHI': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
    };

    return videoMap[id] || videoMap['M8omQR5gAag'];
  };

  const getYouTubeEmbedUrl = (id: string) => {
    const params = new URLSearchParams({
      autoplay: '1',
      mute: '1',
      loop: '1',
      playlist: id,
      controls: '0',
      rel: '0',
      modestbranding: '1',
      playsinline: '1'
    });

    return `https://www.youtube.com/embed/${id}?${params.toString()}`;
  };

  useEffect(() => {
    const checkMobile = () => {
      const ua = navigator.userAgent || '';
      const isPhone = /android|iphone|ipod|iemobile|opera mini/i.test(ua.toLowerCase());
      const isTablet = /ipad|tablet|android(?!.*mobile)/i.test(ua.toLowerCase());
      setIsMobile(isPhone || isTablet);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const timer = setTimeout(() => setIsLoaded(true), ANIMATION_TIMING.VIDEO_FADE_DELAY);

    // try to autoplay video on mobile when available
    if (isMobile && videoRef.current) {
      try {
        videoRef.current.muted = true;
        videoRef.current.playsInline = true;
        const p = videoRef.current.play();
        if (p && typeof p.then === 'function') p.catch(() => {});
      } catch {
        // ignore
      }
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  const handleVideoLoad = () => setVideoError(false);
  const handleVideoError = () => setVideoError(true);
  const handleVideoClick = () => {
    if (isMobile && videoRef.current) {
      if (videoRef.current.paused) videoRef.current.play().catch(() => {});
    }
  };

  return (
    <>
      {/* On mobile/tablet prefer a static image when provided */}
      {isMobile && imageSrc ? (
        <div className={`absolute inset-0 overflow-hidden transition-opacity duration-1000 ${isLoaded || videoError ? 'opacity-100' : 'opacity-0'}`}>
          <picture>
            <source srcSet={imageSrc} />
            <img src={imageSrc} alt="Background" className="w-full h-full object-cover" />
          </picture>
        </div>
      ) : (
        <>
          {/* Mobile (no image) -> HTML5 video */}
          {isMobile && !imageSrc && (
            <div className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <video
                ref={videoRef}
                className="w-full h-full object-cover scale-110"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                onLoadedData={handleVideoLoad}
                onError={handleVideoError}
                onClick={handleVideoClick}
                style={{ pointerEvents: 'auto', cursor: 'pointer' }}
              >
                <source src={getVideoUrl(videoId)} type="video/mp4" />
              </video>

              <div className="absolute inset-0 pointer-events-auto opacity-0 cursor-pointer z-10" onClick={handleVideoClick} aria-label="Tap to play background video" />
            </div>
          )}

          {/* Desktop -> YouTube iframe */}
          {!isMobile && (
            <div className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-1000 ${isLoaded && !videoError ? 'opacity-100' : 'opacity-0'}`}>
              <iframe
                ref={iframeRef}
                className="w-full h-full object-cover scale-150"
                src={getYouTubeEmbedUrl(videoId)}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                onLoad={handleVideoLoad}
                onError={handleVideoError}
                title="Background video"
                style={{ border: 'none', pointerEvents: 'none' }}
              />
            </div>
          )}
        </>
      )}

      {/* Fallback image when provided (shows if video not loaded or errored) */}
      {imageSrc && (
        <div className={`absolute inset-0 transition-opacity duration-1000 ${(!isLoaded || videoError) ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${imageSrc})` }} role="img" aria-label="Background image" />
        </div>
      )}

      {/* Overlay layer */}
      <div className={`absolute inset-0 ${overlayClass}`} />
    </>
  );
};

export default VideoBackground;