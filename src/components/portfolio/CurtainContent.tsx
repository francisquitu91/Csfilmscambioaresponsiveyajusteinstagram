import React from 'react';
import TypewriterText from './TypewriterText';
import { ANIMATION_TIMING } from '../../config/animation';

interface CurtainContentProps {
  onTypewriterComplete?: () => void;
}

const CurtainContent: React.FC<CurtainContentProps> = ({ onTypewriterComplete }) => {
  return (
    <div className="text-center space-y-8">
      <img
        src="https://i.ibb.co/Zfh8Nkt/csfilms.jpg"
        alt="CS Films Logo"
        className="curtain-logo"
      />
      
      <div className="space-y-6 curtain-text">
        <TypewriterText 
          text="CS Films Producciones"
          className="text-4xl md:text-6xl font-bold text-white"
          speed={ANIMATION_TIMING.TYPEWRITER.TITLE_SPEED}
          delay={ANIMATION_TIMING.TYPEWRITER.TITLE_DELAY}
        />
        <TypewriterText 
          text="Creando historias que inspiran"
          className="text-xl md:text-3xl text-black font-light italic"
          speed={ANIMATION_TIMING.TYPEWRITER.SLOGAN_SPEED}
          delay={ANIMATION_TIMING.TYPEWRITER.SLOGAN_DELAY}
          onComplete={onTypewriterComplete}
        />
      </div>
    </div>
  );
};

export default CurtainContent;