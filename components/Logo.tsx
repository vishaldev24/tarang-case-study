import React from 'react';
import logoPng from '../assets/Icons/Adobe Express - file 1.png';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img 
      src={logoPng}
      alt="Tarang Logo" 
      className={`${className} transition-all duration-500 hover:grayscale group-hover:grayscale cursor-pointer`}
      loading="lazy"
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  );
};
