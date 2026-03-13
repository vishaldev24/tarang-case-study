import React, { useState, useEffect } from 'react';
import { Home, Shield, Layers, User, Palette, Leaf, Play, ExternalLink, Smartphone } from 'lucide-react';
import { Logo } from './Logo';

interface NavigationProps {
  onLaunchDemo?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onLaunchDemo }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const DEMO_URL = "https://ai.studio/apps/drive/1OVucCUcRgRfx-0G1GNBuc-AyJ1RZvWzn?fullscreenApplet=true";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    const observerOptions = {
      rootMargin: '-20% 0px -40% 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe sections
    ['home', 'shield', 'system', 'impact', 'about', 'gallery'].forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
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
    <div className={`fixed z-50 transition-all duration-500 bottom-4 left-0 w-full md:bottom-8 md:left-1/2 md:w-auto md:-translate-x-1/2 px-4 md:px-0 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} ${isScrolled ? 'shadow-2xl backdrop-blur-xl' : ''}`}>
      <nav 
        className="glass-nav flex items-center justify-between md:justify-center w-full md:w-auto px-6 py-3 pb-6 md:px-6 md:py-4 md:pb-4 gap-0 md:gap-6 shadow-[0_-4px_20px_rgba(0,0,0,0.6)] md:shadow-2xl md:shadow-black/50 data-[theme=light]:shadow-gray-900/50 border border-white/20 data-[theme=light]:border-gray-200/30 !border-t-0 md:!border md:rounded-full rounded-3xl bg-black/98 data-[theme=light]:bg-white/90 md:bg-transparent backdrop-blur-xl data-[theme=light]:drop-shadow-xl transition-all duration-300 hover:backdrop-blur-2xl data-[theme=light]:hover:shadow-lg"
        role="navigation" 
        aria-label="Main Navigation"
      >
        
        <button 
          onClick={() => scrollToSection('home')}
          className={`group flex flex-col items-center gap-1 relative focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full p-2 md:p-1 ${activeSection === 'home' ? 'text-indigo-400' : ''}`}
          aria-label="Scroll to Home section"
        >
        <Logo className="w-6 h-6 md:w-5 md:h-5 object-contain group-hover:scale-110 transition-transform filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] data-[theme=light]:drop-shadow-[0_1px_3px_rgba(255,255,255,0.8)]" />
          <span className="hidden md:block text-[9px] text-indigo-300 opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 tracking-widest uppercase">Home</span>
        </button>

        <button 
          onClick={() => scrollToSection('shield')}
          className={`group flex flex-col items-center gap-1 relative focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full p-2 md:p-1 ${activeSection === 'shield' ? 'text-indigo-400' : ''}`}
          aria-label="Scroll to Shield Feature section"
        >
          <Shield size={24} className="text-gray-100 group-hover:text-indigo-400 transition-colors duration-300 md:w-[22px] md:h-[22px]" aria-hidden="true" />
          <span className="hidden md:block text-[9px] text-indigo-300 opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 tracking-widest uppercase">Shield</span>
        </button>

        <div className="hidden md:block w-px h-6 bg-white/10" aria-hidden="true"></div>

        {/* Live Demo Trigger - Pop-out Style on Mobile */}
        <button 
          onClick={handleDemoClick}
          className="group flex flex-col items-center justify-center gap-1 relative bg-gradient-to-b from-indigo-600 to-indigo-700 md:bg-indigo-500 hover:from-indigo-500 hover:to-indigo-600 text-white font-bold rounded-2xl md:rounded-full p-3 md:p-2 -mt-10 md:mt-0 shadow-lg shadow-indigo-500/50 md:shadow-indigo-500/30 border border-indigo-400/30 md:border-transparent transition-all transform hover:scale-105 active:scale-95 data-[theme=light]:from-indigo-500 data-[theme=light]:to-indigo-600 data-[theme=light]:hover:from-indigo-400 data-[theme=light]:hover:to-indigo-500 data-[theme=light]:shadow-indigo-400/50 data-[theme=light]:border-indigo-300/50"
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
          <Layers size={24} className="text-gray-100 group-hover:text-indigo-400 transition-colors duration-300 md:w-[22px] md:h-[22px]" aria-hidden="true" />
           <span className="hidden md:block text-[9px] text-indigo-300 opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 tracking-widest uppercase">System</span>
        </button>

        <button 
          onClick={() => scrollToSection('impact')}
          className={`group flex flex-col items-center gap-1 relative focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full p-2 md:p-1 ${activeSection === 'impact' ? 'text-indigo-400' : ''}`}
          aria-label="Scroll to Impact section"
        >
           <div className="absolute top-1 right-1 md:-top-1 md:-right-1 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" aria-hidden="true"></div>
          <Leaf size={24} className="text-gray-100 group-hover:text-emerald-400 transition-colors duration-300 md:w-[22px] md:h-[22px]" aria-hidden="true" />
           <span className="hidden md:block text-[9px] text-indigo-300 opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 tracking-widest uppercase">Impact</span>
        </button>

        <button 
          onClick={() => scrollToSection('about')}
          className={`group flex flex-col items-center gap-1 relative focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full p-2 md:p-1 ${activeSection === 'about' ? 'text-indigo-400' : ''}`}
          aria-label="Scroll to About and Rationale section"
        >
          <User size={24} className="text-gray-100 group-hover:text-indigo-400 transition-colors duration-300 md:w-[22px] md:h-[22px]" aria-hidden="true" />
           <span className="hidden md:block text-[9px] text-indigo-300 opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 tracking-widest uppercase">About</span>
        </button>

        <button 
          onClick={() => scrollToSection('gallery')}
          className={`group flex flex-col items-center gap-1 relative focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full p-2 md:p-1 ${activeSection === 'gallery' ? 'text-indigo-400' : ''}`}
          aria-label="Scroll to App Prototype section"
        >
          <Smartphone size={24} className="text-gray-100 group-hover:text-indigo-400 transition-colors duration-300 md:w-[22px] md:h-[22px]" aria-hidden="true" />
           <span className="hidden md:block text-[9px] text-indigo-300 opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 tracking-widest uppercase">Prototype</span>
        </button>

      </nav>
    </div>
  );
};
