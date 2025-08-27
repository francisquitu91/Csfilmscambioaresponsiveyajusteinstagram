import React, { useState } from 'react';
import { portfolioVideos } from './data/portfolioVideos';
import PortfolioHeader from './PortfolioHeader';
import VideoEntry from './VideoEntry';
import TheatricalCurtain from './TheatricalCurtain';
import VideoBackground from '../shared/VideoBackground';
import { VIDEO_CONFIG } from '../../config/videos';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const Portfolio: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [curtainRevealed, setCurtainRevealed] = useState(false);

  const handleCurtainReveal = () => {
    setCurtainRevealed(true);
    setTimeout(() => setShowContent(true), 500);
  };

  return (
    <section id="portfolio" className="relative py-20 px-4 min-h-screen bg-gray-900">
      <VideoBackground 
        videoId={VIDEO_CONFIG.PORTFOLIO.id}
        overlayClass={VIDEO_CONFIG.PORTFOLIO.overlay}
        imageSrc="/camaracsfilms.jpeg"
      />
      
      <TheatricalCurtain onRevealComplete={handleCurtainReveal} />
      
      <div className={`relative z-10 max-w-7xl mx-auto transition-opacity duration-1000 ${curtainRevealed ? 'opacity-100' : 'opacity-0'}`}>
        <PortfolioHeader />

        <div className={`space-y-24 transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          {portfolioVideos.map((video) => (
            <PortfolioItem key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
};

type PortfolioItemProps = {
  video: typeof portfolioVideos[number];
};

const PortfolioItem: React.FC<PortfolioItemProps> = ({ video }) => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <div ref={elementRef}>
      <VideoEntry video={video} isVisible={isVisible} />
    </div>
  );
};

export default Portfolio;