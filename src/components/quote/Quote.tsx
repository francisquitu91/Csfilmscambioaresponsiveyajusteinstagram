import React from 'react';
import QuoteForm from './QuoteForm';
import QuoteHeader from './QuoteHeader';
import VideoBackground from '../shared/VideoBackground';
import { VIDEO_CONFIG } from '../../config/videos';

const Quote: React.FC = () => {
  return (
    <section id="quote" className="relative py-20 px-4">
      <VideoBackground 
        videoId={VIDEO_CONFIG.QUOTE.id}
        overlayClass={VIDEO_CONFIG.QUOTE.overlay}
        imageSrc="/Cortina.jpeg"
      />
      <div className="relative z-10 max-w-7xl mx-auto">
        <QuoteHeader />
        <QuoteForm />
      </div>
    </section>
  );
};

export default Quote;