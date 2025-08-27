import React from 'react';
import type { Client } from './types';

interface ClientLogoProps {
  client: Client;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ client }) => {
  // Determine logo size based on client name
  const getLogoSize = (name: string) => {
    if (name.includes('OATH')) {
      return 'h-48'; // 2x larger for OATH
    }
    if (name.includes('SETZ') || name.includes('Adventista')) {
      return 'h-44'; // Larger size for SETZ and IASD
    }
    if (name.includes('Conquisamch')) {
      return 'h-36'; // Size for Conquisamch
    }
    return 'h-24'; // Default size for other logos
  };

  return (
    <div className="px-8 py-4">
      <a
        href={client.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-all duration-300 ease-out transform-gpu hover:scale-110"
      >
        <img
          src={client.logo}
          alt={client.name}
          className={`w-auto object-contain opacity-75 hover:opacity-100 ${getLogoSize(client.name)}`}
        />
      </a>
    </div>
  );
};

export default ClientLogo;