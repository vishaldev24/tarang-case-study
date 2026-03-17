import React, { useState, useEffect, useRef } from 'react';
import { Logo } from './Logo';
import { Shield, TrendingUp, User, Leaf, Layers, Smartphone, Play } from 'lucide-react';

interface NavigationProps {
  onLaunchDemo?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onLaunchDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [theme, setTheme] = useState('dark');
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const sections = ['home', 'shield', 'strategy', 'about', 'impact', 'system', 'gallery'];
  const icons = [Logo, Shield, TrendingUp, User, Leaf, Layers, Smartphone];
  const labels = ['Home', 'Shield', 'Strategy', 'About', 'Impact', 'System', 'Proto'];

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

    // Detect theme
    const root = document.body;
    const observerTheme = new MutationObserver(() => {
      const newTheme = root.getAttribute('data-theme') || 'dark';
      setTheme(newTheme);
    });
    observerTheme.observe(root, { attributes: true, attributeFilter: ['data-theme'] });

    return () => {
      observer.disconnect();
      observerTheme.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (index: number) => {
    setActiveIndex(index);
    const el = document.getElementById(sections[index]);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const IconComponent = (index: number) => {
    const Icon = icons[index];
    const isLight = theme === 'light';
    const isActive = activeIndex === index;
    
    const className = [
      'transition-all duration-300 w-6 h-6 flex items-center justify-center',
      isActive ? 'text-white drop-shadow-lg' : '',
      isLight ? (isActive ? 'text-white' : 'text-gray-800 hover:text-purple-600') : 'text-gray-300 hover:text-white',
      'group-hover:scale-110'
    ].filter(Boolean).join(' ');

    return React.createElement(Icon as any, { 
      size: 20,
      className,
      strokeWidth: isActive ? 3 : 2.5
    });
  };

  const launchDemo = () => {
    window.open('https://ai.studio/apps/drive/1OVucCUcRgRfx-0G1GNBuc-AyJ1RZvWzn?fullscreenApplet=true', '_blank');
    onLaunchDemo?.();
  };

  const isLight = theme === 'light';

  return (
    <div className={`fixed z-50 bottom-6 left-1/2 -translate-x-1/2 transition-all duration-500 ${isScrolled ? 'shadow-2xl scale-105 backdrop-blur-3xl' : 'backdrop-blur-xl'}`}>
      <nav 
        className={`
          glass-nav flex items-center gap-4 px-8 py-4 rounded-3xl w-[85vw] max-w-3xl mx-auto
          border shadow-2xl hover:shadow-3xl transition-all duration-300
          ${isLight 
            ? 'bg-white/80 backdrop-blur-xl border-gray-200/50' 
            : 'bg-black/80 backdrop-blur-xl border-white/20'
          }
        `}
      >
        {/* Navigation Items */}
        <div className="flex items-center gap-4 flex-1 justify-evenly">
          {sections.map((_, index) => (
            <div key={index} className="relative group">
              <button
                className={`
                  p-3 rounded-2xl transition-all duration-400 flex items-center justify-center glass-panel
                  focus:outline-none focus:ring-2 focus:ring-purple-500/50
                  ${activeIndex === index
                    ? 'bg-purple-500 shadow-xl shadow-purple-500/50 scale-110'
                    : isLight
                      ? 'hover:bg-gray-100/80 hover:shadow-lg hover:scale-105 hover:shadow-gray-300/50'
                      : 'hover:bg-white/20 hover:shadow-lg hover:scale-105 hover:shadow-white/20'
                  }
                `}
                onClick={() => scrollTo(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
                aria-label={labels[index]}
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  {IconComponent(index)}
                </div>
              </button>
              
              {/* Hover Tooltip */}
              {hoveredIndex === index && (
                <div className={`
                  absolute -top-14 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl text-sm font-semibold shadow-2xl
                  whitespace-nowrap z-[100] pointer-events-none transition-all duration-300 glass-panel
                  ${isLight 
                    ? 'bg-white/90 text-gray-900 shadow-black/20 border border-gray-200/50' 
                    : 'bg-black/90 text-white shadow-white/20 border border-white/20'
                  }
                  before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 
                  before:border-4 before:mt-[-1px]
                  ${isLight 
                    ? 'before:border-t-white/90 before:border-l-transparent before:border-r-transparent' 
                    : 'before:border-t-black/90 before:border-l-transparent before:border-r-transparent'
                  }
                `}>
                  {labels[index]}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Demo Button */}
        <button
          onClick={launchDemo}
          className={`
            ml-6 p-3.5 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 glass-panel
            ${isLight ? 'hover:from-purple-400 hover:to-indigo-500' : 'hover:from-purple-600 hover:to-indigo-700'}
            text-white shadow-xl shadow-purple-500/50 hover:shadow-2xl
            transition-all duration-300 hover:scale-110 active:scale-95 group
          `}
          aria-label="Live Demo"
        >
          <Play size={20} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
        </button>
      </nav>
    </div>
  );
};

