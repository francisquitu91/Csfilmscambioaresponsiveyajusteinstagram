import React from 'react';
import { clients } from './data/clients';
import LogoStrip from './LogoStrip';
import CarouselContainer from './CarouselContainer';

const LogoCarousel: React.FC = () => {
  const duplicatedLogos = [...clients, ...clients, ...clients];

  return (
    <CarouselContainer>
      <LogoStrip logos={duplicatedLogos} />
      <LogoStrip logos={duplicatedLogos} />
    </CarouselContainer>
  );
};

export default LogoCarousel;