import React from 'react';
import { Film, ChevronDown } from 'lucide-react';

const AboutContent = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white py-24 md:py-32">
      <div className="flex items-center justify-center mb-12">
        <Film className="w-16 h-16 text-blue-400" />
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
        Nos especializamos en producciones audiovisuales
      </h1>

      <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
        Transformamos ideas en experiencias visuales cautivadoras. Nuestro equipo de expertos combina creatividad y tecnología para dar vida a historias únicas.
      </p>

      <button
        onClick={scrollToPortfolio}
        aria-label="Ver nuestro portafolio"
        className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-blue-600 rounded-full overflow-hidden transition-all duration-300 ease-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
      >
        <span className="relative z-10">Ver portafolio</span>
        <ChevronDown className="ml-2 w-6 h-6 transition-transform group-hover:translate-y-1" />
      </button>
    </div>
  );
};

export default AboutContent;