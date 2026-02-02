import React, { useRef, useState } from 'react';

interface TiltContainerProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export const TiltContainer: React.FC<TiltContainerProps> = ({ children, className = '', intensity = 15 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [glow, setGlow] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    // Calculate percentage for tilt
    const xPct = x / width;
    const yPct = y / height;
    
    const tiltX = (yPct - 0.5) * intensity * -1; // Invert for natural feel
    const tiltY = (xPct - 0.5) * intensity; 

    setTransform(`perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`);
    setGlow({ x: xPct * 100, y: yPct * 100, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
    setGlow((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={ref}
      className={`transition-transform duration-200 ease-out transform-gpu ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transformStyle: 'preserve-3d' }}
    >
      {/* Dynamic Glow Gradient */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-500 rounded-3xl"
        style={{
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(255, 255, 255, 0.1), transparent 50%)`,
          opacity: glow.opacity,
        }}
      />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};