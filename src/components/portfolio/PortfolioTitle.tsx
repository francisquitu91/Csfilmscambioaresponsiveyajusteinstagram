import React from 'react';

interface PortfolioTitleProps {
  isVisible: boolean;
}

const PortfolioTitle: React.FC<PortfolioTitleProps> = ({ isVisible }) => {
  return (
    <div className={`text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="text-5xl font-bold mb-16 text-gray-900">
        PARTE DE NUESTRO PORTAFOLIO ES
      </h2>
    </div>
  );
};

export default PortfolioTitle;