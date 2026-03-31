import React from 'react';
import logoPng from '../assets/Icons/Adobe Express - file 1.png';

interface LogoProps {
  className?: string;
  style?: React.CSSProperties;
}

export const Logo: React.FC<LogoProps> = ({ className, style }) => {
  return (
    <img 
      src={logoPng}
      alt="Tarang Logo" 
      className={`${className || ''} transition-all duration-500 hover:grayscale group-hover:grayscale cursor-pointer`}
      loading="lazy"
      style={{ maxWidth: '100%', height: 'auto', ...style }}
    />
  );
};
