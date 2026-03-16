import React, { useState, useEffect, useRef } from 'react';
import { Shield, Layers, User, Leaf, Smartphone, Play } from 'lucide-react';
import { Logo } from './Logo';

interface NavigationProps {
  onLaunchDemo?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onLaunchDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  const sections = ['home', 'strategy', 'shield', 'system', 'about', 'impact', 'gallery'];
  const icons = [Logo, Shield, Shield, Layers, User, Leaf, Smartphone];
  const labels = ['Home', 'Strategy', 'Shield', 'System', 'About', 'Impact', 'Proto'];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const index = sections.indexOf(entry.target.id);
        if (entry.isIntersecting && index !== -1) {
          setActiveIndex(index);
        }
      });
    }, { rootMargin: '-20% 0px -50% 0px' });

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (navRef.current && indicatorRef.current) {
      const buttons = navRef.current.querySelectorAll('.nav-btn');
      const activeBtn = buttons[activeIndex] as HTMLElement;
      if (activeBtn) {
        const x = activeBtn.offsetLeft;
        const width = activeBtn.offsetWidth;
        indicatorRef.current.style.left = `${x}px`;
        indicatorRef.current.style.width = `${width}px`;
      }
    }
  }, [activeIndex]);

  const scrollTo = (index: number) => {
    setActiveIndex(index);
    const el = document.getElementById(sections[index]);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const IconComponent = (index: number) => {
    const Icon = icons[index];
    return React.createElement(Icon as any, { 
      className: 'w-5 h-5 transition-all duration-300 group-hover:scale-110 text-gray-100 data-[active=true]:text-indigo-400 data-[theme=light]:text-gray-600 data-[theme=light]:data-[active=true]:text-indigo-500 data-[theme=light]:group-hover:text-indigo-600' 
    });
  };

  const launchDemo = () => {
    window.open('https://ai.studio/apps/drive/1OVucCUcRgRfx-0G1GNBuc-AyJ1RZvWzn?fullscreenApplet=true', '_blank');
    onLaunchDemo?.();
  };

  return (
    <div className={`fixed z-50 transition-all duration-500 bottom-6 left-1/2 -translate-x-1/2 ${isScrolled ? 'shadow-2xl backdrop-blur-xl scale-[1.02]' : ''}`}>
      <nav 
        ref={navRef}
        className="glass-nav relative flex items-center gap-3 px-6 py-3 rounded-full bg-black/80 data-[theme=light]:bg-white backdrop-blur-xl border border-white/20 data-[theme=light]:border-gray-300/50 shadow-xl data-[theme=light]:shadow-lg hover:shadow-2xl hover:backdrop-blur-2xl transition-all duration-300 md:gap-4"
      >
        {/* Glass Pill Active Indicator */}
        <div 
          ref={indicatorRef}
          className="absolute bottom-1 left-0 h-1.5 md:h-2 bg-gradient-to-r from-indigo-500/90 via-white/70 to-indigo-500/90 data-[theme=light]:from-indigo-500/90 data-[theme=light]:via-gray-100/80 data-[theme=light]:to-indigo-500/90 rounded-full backdrop-blur-2xl shadow-md transition-all duration-600 ease-out hover:shadow-lg"
          style={{ width: '24px' }}
        />

        {/* Compact Icons */}
        {sections.map((_, index) => (
          <button
            key={index}
            data-active={activeIndex === index}
            className={`nav-btn relative p-1.5 md:p-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 group hover:p-2.5 data-[active=true]:p-2.5 ${
              activeIndex === index
                ? 'scale-[1.15] shadow-lg shadow-indigo-500/50 bg-white/20 data-[theme=light]:bg-gray-100/50 backdrop-blur z-10'
                : 'hover:shadow-md hover:shadow-indigo-400/30 hover:bg-white/10 data-[theme=light]:hover:bg-gray-50/50 hover:backdrop-blur'
            }`}
            onClick={() => scrollTo(index)}
            aria-label={labels[index]}
          >
            <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
              {IconComponent(index)}
            </div>
            <span className="absolute -top-10 hidden md:block text-[8px] md:text-[9px] font-mono tracking-wider text-indigo-300 data-[theme=light]:text-gray-600 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/90 data-[theme=light]:bg-white/90 backdrop-blur px-2 py-1 rounded whitespace-nowrap pointer-events-none">
              {labels[index]}
            </span>
          </button>
        ))}

        <div className="w-px h-5 bg-white/20 mx-2 hidden md:block" />
        <button
          onClick={launchDemo}
          className="group p-2 md:p-2.5 rounded-xl bg-gradient-to-b from-indigo-600 to-indigo-700 data-[theme=light]:from-indigo-500 data-[theme=light]:to-indigo-600 hover:from-indigo-500 hover:to-indigo-600 data-[theme=light]:hover:from-indigo-400 data-[theme=light]:hover:to-indigo-500 text-white shadow-lg shadow-indigo-500/40 data-[theme=light]:shadow-indigo-400/40 hover:shadow-xl hover:shadow-indigo-500/60 border border-indigo-400/30 data-[theme=light]:border-indigo-300/30 backdrop-blur transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Launch Live Demo"
        >
          <Play size={16} fill="currentColor" className="md:w-[18px] md:h-[18px] group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-10 text-[8px] md:text-[9px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/90 data-[theme=light]:bg-white/90 backdrop-blur px-2.5 py-1 rounded-full whitespace-nowrap pointer-events-none tracking-wider font-semibold">
            Demo
          </span>
        </button>
      </nav>
    </div>
  );
};

