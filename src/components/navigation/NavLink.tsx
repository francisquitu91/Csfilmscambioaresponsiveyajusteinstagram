import React from 'react';
import { useActiveSection } from './hooks/useActiveSection';
import { scrollToSection } from './utils/scrollUtils';

interface NavLinkProps {
  id: string;
  text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ id, text }) => {
  const isActive = useActiveSection(id);

  return (
    <button
      onClick={() => scrollToSection(id)}
      className="relative py-2 text-gray-800 hover:text-blue-600 font-medium text-base transition-colors duration-200 group"
    >
      {text}
      <span 
        className={`
          absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left
          transition-transform duration-300 ease-out
          ${isActive ? 'scale-x-100' : 'scale-x-0'}
          group-hover:scale-x-100
        `}
      />
    </button>
  );
};

export default NavLink;