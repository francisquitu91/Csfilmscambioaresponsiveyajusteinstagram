import React from 'react';

const QuoteHeader: React.FC = () => {
  return (
    <>
      <h2 className="text-4xl font-bold text-white text-center mb-4">
        Cotiza tu proyecto
      </h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Cuéntanos sobre tu proyecto y te ayudaremos a hacerlo realidad
      </p>
    </>
  );
};

export default QuoteHeader;