import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img 
      src="https://img.sanishtech.com/u/a914bdb2a094951e070661d722c41a2f.png" 
      alt="Tarang Logo" 
      className={`${className} transition-all duration-500 hover:grayscale group-hover:grayscale cursor-pointer`}
      loading="lazy"
      style={{ maxWidth: '100%', height: 'auto' }}
      referrerPolicy="no-referrer"
    />
  );
};
