import React from 'react';
import { Client } from './types';
import ClientLogo from './ClientLogo';

interface LogoStripProps {
  logos: Client[];
}

const LogoStrip: React.FC<LogoStripProps> = ({ logos }) => {
  return (
    <div className="flex items-center">
      {logos.map((client, index) => (
        <ClientLogo 
          key={`${client.name}-${index}`}
          client={client}
        />
      ))}
    </div>
  );
};

export default LogoStrip;