import React from 'react';
import { useActiveSection } from './hooks/useActiveSection';
import { scrollToSection } from './utils/scrollUtils';

interface MobileNavLinkProps {
  id: string;
  text: string;
  onClose: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ id, text, onClose }) => {
  const isActive = useActiveSection(id);

  const handleClick = () => {
    scrollToSection(id);
    onClose();
  };

  return (
    <button
      onClick={handleClick}
      className="relative w-full text-left py-2 text-gray-800 hover:text-blue-600 font-medium text-lg transition-colors duration-200"
    >
      <span className="relative">
        {text}
        <span 
          className={`
            absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600
            transition-transform duration-300 ease-out
            ${isActive ? 'scale-x-100' : 'scale-x-0'}
          `}
        />
      </span>
    </button>
  );
};

export default MobileNavLink;