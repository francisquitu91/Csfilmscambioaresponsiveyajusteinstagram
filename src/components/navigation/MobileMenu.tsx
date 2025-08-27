import React from 'react';
import { navLinks } from './data/navLinks';
import MobileNavLink from './MobileNavLink';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transform transition-transform duration-300 md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg">
        <div className="p-6">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <MobileNavLink
                  id={link.id}
                  text={link.text}
                  onClose={onClose}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;