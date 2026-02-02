import React, { useState, useEffect } from 'react';
import { Home, Shield, Layers, User, Palette, Leaf, Play, ExternalLink } from 'lucide-react';

interface NavigationProps {
  onLaunchDemo?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onLaunchDemo }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const DEMO_URL = "https://ai.studio/apps/drive/1OVucCUcRgRfx-0G1GNBuc-AyJ1RZvWzn?fullscreenApplet=true";

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000); 
    
    const handleScroll = () => {
      // Intersection observer logic can go here for more precise active states
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const handleDemoClick = () => {
    window.open(DEMO_URL, '_blank');
    if (onLaunchDemo) onLaunchDemo();
  };

  return (
    <div className={`fixed z-50 transition-all duration-700 bottom-0 left-0 w-full md:bottom-8 md:left-1/2 md:w-auto md:-translate-x-1/2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      <nav 
        className="glass-nav flex items-center justify-between md:justify-center w-full md:w-auto px-6 py-3 pb-6 md:px-6 md:py-4 md:pb-4 gap-0 md:gap-6 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] md:shadow-2xl md:shadow-black/50 !border-t !border-white/10 !border-x-0 !border-b-0 md:!border md:rounded-full rounded-none bg-black/90 md:bg-transparent backdrop-blur-xl"
        role="navigation" 
        aria-label="Main Navigation"
      >
        
        <button 
          onClick={() => scrollToSection('home')}
          className={`group flex flex-col items-center gap-1 relative focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full p-2 md:p-1 ${activeSection === 'home' ? 'text-indigo-400' : ''}`}
          aria-label="Scroll to Home section"
        >
          <Home size={24} className="text-gray-300 group-hover:text-indigo-400 transition-colors duration-300 md:w-[22px] md:h-[22px]" aria-hidden="true" />
          <span className="hidden md:block text-[9px] text-indigo-300 opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 tracking-widest uppercase">Home</span>
        </button>

        <button 
          onClick={() => scrollToSection('shield')}
          className={`group flex flex-col items-center gap-1 relative focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full p-2 md:p-1 ${activeSection === 'shield' ? 'text-indigo-400' : ''}`}
          aria-label="Scroll to Shield Feature section"
        >
          <Shield size={24} className="text-gray-300 group-hover:text-indigo-400 transition-colors duration-300 md:w-[22px] md:h-[22px]" aria-hidden="true" />
          <span className="hidden md:block text-[9px] text-indigo-300 opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 tracking-widest uppercase">Shield</span>
        </button>

        <div className="hidden md:block w-px h-6 bg-white/10" aria-hidden="true"></div>

        {/* Live Demo Trigger - Pop-out Style on Mobile */}
        <button 
          onClick={handleDemoClick}
          className="group flex flex-col items-center justify-center gap-1 relative bg-indigo-600 md:bg-indigo-500 hover:bg-indigo-500 text-white rounded-2xl md:rounded-full p-3 md:p-2 -mt-10 md:mt-0 shadow-lg shadow-indigo-500/40 md:shadow-indigo-500/20 border border-indigo-400/30 md:border-transparent transition-all transform hover:scale-105 active:scale-95"
          aria-label="Launch Live Interactive Demo"
        >
          <Play size={22} fill="currentColor" aria-hidden="true" className="md:w-[18px] md:h-[18px]" />
          <span className="hidden md:block text-[9px] text-white opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 tracking-widest uppercase font-bold">Demo</span>
        </button>

        <div className="hidden md:block w-px h-6 bg-white/10" aria-hidden="true"></div>

        <button 
          onClick={() => scrollToSection('system')}
          className={`group flex flex-col items-center gap-1 relative focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full p-2 md:p-1 ${activeSection === 'system' ? 'text-indigo-400' : ''}`}
          aria-label="Scroll to System Architecture section"
        >
          <Layers size={24} className="text-gray-300 group-hover:text-indigo-400 transition-colors duration-300 md:w-[22px] md:h-[22px]" aria-hidden="true" />
           <span className="hidden md:block text-[9px] text-indigo-300 opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 tracking-widest uppercase">System</span>
        </button>

        <button 
          onClick={() => scrollToSection('impact')}
          className={`group flex flex-col items-center gap-1 relative focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full p-2 md:p-1 ${activeSection === 'impact' ? 'text-indigo-400' : ''}`}
          aria-label="Scroll to Impact section"
        >
           <div className="absolute top-1 right-1 md:-top-1 md:-right-1 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" aria-hidden="true"></div>
          <Leaf size={24} className="text-gray-300 group-hover:text-emerald-400 transition-colors duration-300 md:w-[22px] md:h-[22px]" aria-hidden="true" />
           <span className="hidden md:block text-[9px] text-indigo-300 opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 tracking-widest uppercase">Impact</span>
        </button>

        <button 
          onClick={() => scrollToSection('about')}
          className={`group flex flex-col items-center gap-1 relative focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full p-2 md:p-1 ${activeSection === 'about' ? 'text-indigo-400' : ''}`}
          aria-label="Scroll to About and Rationale section"
        >
          <User size={24} className="text-gray-300 group-hover:text-indigo-400 transition-colors duration-300 md:w-[22px] md:h-[22px]" aria-hidden="true" />
           <span className="hidden md:block text-[9px] text-indigo-300 opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 tracking-widest uppercase">About</span>
        </button>

      </nav>
    </div>
  );
};