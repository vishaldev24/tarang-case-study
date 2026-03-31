import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Zap, Shield, Layers, BarChart3, Smartphone } from 'lucide-react';
import { Play } from 'lucide-react';

interface NavigationProps {
  onLaunchDemo?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onLaunchDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const sections = ['home', 'strategy', 'shield', 'system', 'impact', 'gallery'];
  const labels = ['Tarang', 'Strategy', 'Shield', 'System', 'Impact', 'Proto'];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const index = sections.indexOf(entry.target.id || '');
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

    const root = document.body;
    const observerTheme = new MutationObserver(() => {
      const newTheme = (root.getAttribute('data-theme') as 'light' | 'dark') || 'dark';
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

  const launchDemo = () => {
    window.open('https://revamp-shush-22720965.figma.site/', '_blank');
    onLaunchDemo?.();
  };

  const isActiveNav = (index: number) => activeIndex === index;
  const isLight = theme === 'light';

  // Fixed: Dark mode = WHITE icons always (non-active), Active = White
  const getIconColor = () => {
    if (isLight) return isActiveNav(activeIndex) ? 'text-white' : 'text-[#1A1A1A]';
    return 'text-white'; // DARK MODE: Always WHITE icons
  };

  const getIcon = (index: number) => {
    const iconColor = isActiveNav(index) ? 'text-white' : getIconColor();
    const iconClass = `w-5 h-5 transition-all duration-300 ${iconColor} group-hover:scale-110 ${isActiveNav(index) ? 'drop-shadow-lg' : ''}`;
    const strokeWidth = isActiveNav(index) ? 3 : 2.5;

    switch (index) {
      case 0: // Tarang/Home
        return <Logo className={iconClass} style={{width: '20px', height: '20px'}} />;
      case 1: // Strategy
        return <Zap size={20} className={iconClass} strokeWidth={strokeWidth} />;
      case 2: // Shield
        return <Shield size={20} className={iconClass} strokeWidth={strokeWidth} />;
      case 3: // System
        return <Layers size={20} className={iconClass} strokeWidth={strokeWidth} />;
      case 4: // Impact
        return <BarChart3 size={20} className={iconClass} strokeWidth={strokeWidth} />;
      case 5: // Proto/Gallery
        return <Smartphone size={20} className={iconClass} strokeWidth={strokeWidth} />;
      default: 
        return <Logo className={iconClass} style={{width: '20px', height: '20px'}} />;
    }
  };

  return (
    <>
      {/* Desktop: 6 Icons + Demo Button */}
      <div className={`
        fixed z-[1000] bottom-6 left-1/2 -translate-x-1/2 transition-all duration-500 hidden md:flex
        ${isScrolled ? 'shadow-2xl scale-[1.02] shadow-[0_8px_32px_rgba(0,0,0,0.08)]' : ''}
      `}>
        <div className="flex items-center gap-4">
          <nav className={`
            flex items-center justify-center gap-6 px-8 py-4 rounded-[50px] max-w-[600px] w-auto
            backdrop-blur-xl border border-white/30 
            ${isLight 
              ? 'bg-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.1)] text-[#1A1A1A]'
              : 'bg-black/80 shadow-[0_8px_32px_rgba(255,255,255,0.1)] text-white border-white/20'
            }
            hover:shadow-[0_16px_40px_rgba(0,0,0,0.15)] transition-all duration-300
          `}>
            {sections.map((section, index) => (
              <div key={section} className="relative group">
                <button
                  className={`
                    p-3.5 rounded-2xl transition-all duration-400 flex items-center justify-center w-14 h-14 shadow-lg
                    focus:outline-none focus:ring-4 focus:ring-[#6C63FF]/30
                    ${isActiveNav(index)
                      ? 'bg-gradient-to-r from-[#6C63FF] to-purple-600 shadow-2xl shadow-[#6C63FF]/50 scale-110'
                      : isLight
                        ? 'hover:bg-white hover:shadow-xl hover:scale-105 shadow-md'
                        : 'hover:bg-white/30 hover:shadow-xl hover:scale-105 shadow-lg backdrop-blur'
                    }
                  `}
                  onClick={() => scrollTo(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(-1)}
                  aria-label={labels[index]}
                >
                  {getIcon(index)}
                </button>
                {hoveredIndex === index && (
                  <div className={`absolute -top-16 left-1/2 -translate-x-1/2 px-4 py-2 rounded-2xl text-sm font-semibold shadow-2xl whitespace-nowrap z-[1001] pointer-events-none transition-all duration-200 backdrop-blur-md border ${
                    isLight 
                      ? 'bg-white/95 border-white/50 text-gray-900' 
                      : 'bg-black/95 border-white/30 text-white'
                  }`}>
                    {labels[index]}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-t-8 border-l-4 border-r-4 border-t-white/50 border-l-transparent border-r-transparent -mt-[2px]" />
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          {/* Demo Button Desktop */}
          <button
            onClick={launchDemo}
            className={`
              p-3.5 rounded-2xl bg-gradient-to-r from-[#6C63FF] to-purple-600 text-white shadow-xl shadow-[#6C63FF]/40
              hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#6C63FF]/50
              w-14 h-14 flex items-center justify-center shadow-2xl
            `}
            aria-label="Live Demo"
            title="Live Demo"
          >
            <Play size={20} fill="currentColor" />
          </button>
        </div>
      </div>

      {/* Mobile */}
      <nav className={`
        fixed bottom-0 left-0 right-0 z-[1000] px-4 pt-4 pb-6 md:hidden bg-white/95 border-t border-gray-200/50
        backdrop-blur-md shadow-2xl transition-all duration-500
        ${isLight ? 'text-gray-800' : 'text-white bg-gray-900/95 border-gray-700 shadow-black/20'}
      `}>
        <div className="grid grid-cols-6 gap-3 items-end mb-4">
          {sections.map((section, index) => (
            <button
              key={section}
              className={`
                p-3.5 rounded-xl transition-all duration-400 flex flex-col items-center justify-center gap-1.5 min-h-[68px]
                focus:outline-none focus:ring-2 focus:ring-[#6C63FF]/50 col-span-1 shadow-md
                ${isActiveNav(index)
                  ? 'bg-gradient-to-r from-[#6C63FF] to-purple-600 text-white shadow-xl shadow-[#6C63FF]/40 scale-[1.05] border-2 border-white/50'
                  : isLight
                    ? 'hover:bg-[#6C63FF]/5 hover:scale-[1.02] hover:shadow-lg'
                    : 'hover:bg-white/20 hover:scale-[1.02] hover:shadow-lg'
                }
              `}
              onClick={() => scrollTo(index)}
              aria-label={labels[index]}
            >
              {getIcon(index)}
              <span className={`text-[10px] font-semibold leading-tight transition-colors ${isActiveNav(index) ? 'text-white drop-shadow-sm' : (isLight ? 'text-gray-600' : 'text-white')}`}>
                {labels[index]}
              </span>
            </button>
          ))}
        </div>
        
        <div className="flex justify-center">
          <button
            onClick={launchDemo}
            className={`
              px-8 py-3 rounded-2xl bg-gradient-to-r from-[#6C63FF] to-purple-600 text-white shadow-2xl shadow-[#6C63FF]/40
              hover:shadow-3xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#6C63FF]/50
              text-sm font-bold flex items-center gap-2 whitespace-nowrap
            `}
            aria-label="Live Demo"
          >
            <Play size={18} fill="currentColor" />
            Live Demo
          </button>
        </div>
      </nav>
    </>
  );
};

