import React from 'react';

const PortfolioHeader: React.FC = () => {
  return (
    <header className="relative z-20 text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Parte de nuestro trabajo
      </h2>
      <p className="text-gray-300 text-lg max-w-2xl mx-auto">
        Descubre cómo damos vida a historias únicas a través de la producción audiovisual
      </p>
    </header>
  );
};

export default PortfolioHeader;