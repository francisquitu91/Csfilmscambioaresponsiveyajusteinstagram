import React from 'react';

const NavLogo: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="flex items-center focus:outline-none"
    >
      <img
        src="https://i.ibb.co/Zfh8Nkt/csfilms.jpg"
        alt="CS Films Logo"
        className="h-14 w-auto object-contain"
      />
    </button>
  );
};

export default NavLogo;