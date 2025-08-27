import React from 'react';
import LogoCarousel from './LogoCarousel';

const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-12 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-2">
          Clientes Agradecidos
        </h2>
        <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
          Empresas que confiaron en nosotros
        </p>
        <LogoCarousel />
      </div>
    </section>
  );
};

export default Clients;