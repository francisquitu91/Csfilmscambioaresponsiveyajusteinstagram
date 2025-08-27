import React from 'react';

interface CarouselContainerProps {
  children: React.ReactNode;
}

const CarouselContainer: React.FC<CarouselContainerProps> = ({ children }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex animate-scroll">
        {children}
      </div>
    </div>
  );
};

export default CarouselContainer;