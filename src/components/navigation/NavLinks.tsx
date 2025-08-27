import React from 'react';
import { navLinks } from './data/navLinks';
import NavLink from './NavLink';

const NavLinks: React.FC = () => {
  return (
    <ul className="flex space-x-8">
      {navLinks.map((link) => (
        <li key={link.id}>
          <NavLink id={link.id} text={link.text} />
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;