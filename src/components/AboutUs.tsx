import React from 'react';
import VideoBackground from './shared/VideoBackground';
import AboutContent from './about/AboutContent';
import { VIDEO_CONFIG } from '../config/videos';

const AboutUs = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center">
      <VideoBackground 
        videoId={VIDEO_CONFIG.ABOUT.id}
        overlayClass={VIDEO_CONFIG.ABOUT.overlay}
        imageSrc="/Iniciocsfilms.jpeg"
      />
      <AboutContent />
    </section>
  );
};

export default AboutUs;