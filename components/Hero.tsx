import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowDown, Play, ExternalLink } from 'lucide-react';
import { Logo } from './Logo';

interface HeroProps {
  onLaunchDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onLaunchDemo }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const DEMO_URL = "https://revamp-shush-22720965.figma.site/";

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(logoRef.current,
        { y: -50, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }
      )
      .fromTo(titleRef.current, 
        { y: 50, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power4.out" },
        "-=1"
      )
      .fromTo(subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
        "-=1"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth) * 2 - 1;
    const y = (e.clientY / innerHeight) * 2 - 1;
    setMousePos({ x, y });
  };

  const scrollToContent = () => {
    const nextSection = document.getElementById('strategy');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDemoClick = () => {
    window.open(DEMO_URL, '_blank');
    onLaunchDemo(); // Still trigger modal for internal context if desired
  };

  return (
    <section 
      id="home"
      ref={containerRef} 
      className="w-full min-h-[100dvh] flex flex-col justify-between items-center text-center pt-20 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="flex-grow flex flex-col justify-center items-center w-full z-10 px-4">
        
        <div ref={logoRef} className="relative group cursor-default pointer-events-auto mb-8 md:mb-10">
          <div className="absolute inset-0 bg-indigo-500 blur-[60px] md:blur-[80px] opacity-20 rounded-full animate-pulse eco-hidden"></div>
          
          <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 relative z-10 drop-shadow-2xl filter transition-all duration-500 hover:scale-105">
             <Logo className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 rounded-full border border-indigo-400/30 bg-indigo-500/10 backdrop-blur-md mb-2 md:mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-indigo-300 font-medium">Lead Product Designer</span>
        </div>
        
        <p className="text-indigo-400/80 text-sm md:text-base font-light tracking-wide mb-4 md:mb-6 text-gray-400 dark:text-gray-400">
          Vishal Rathod · Product Designer · Hyderabad · 2026
        </p>
        
        <div style={{ perspective: '1000px' }} className="w-full">
          <h1 
            ref={titleRef} 
            className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white pb-2 transition-transform duration-100 ease-out font-display text-glow leading-none break-words"
            style={{
              transform: `rotateX(${mousePos.y * -5}deg) rotateY(${mousePos.x * 5}deg)`
            }}
          >
            TARANG
          </h1>
        </div>

        <div
           style={{ transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)` }}
          className="transition-transform duration-200 ease-out mt-4 px-4"
        >
          <h2 ref={subtitleRef} className="text-lg sm:text-xl md:text-3xl font-light tracking-wide">
            Designing for Intent in Social Ecosystems
          </h2>
          
          <p className="max-w-xl mx-auto text-xs sm:text-sm mt-6 md:mt-8 leading-relaxed text-gray-400">
            An India-first concept countering <span className="font-medium text-indigo-500">Digital Exhaustion</span> by prioritizing user intent over algorithmic retention.
          </p>
        </div>

        {/* Demo Button */}
        <div className="mt-8 md:mt-12 flex flex-col md:flex-row gap-4 items-center justify-center z-20 w-full px-4">
            <button 
            onClick={handleDemoClick}
            className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-indigo-600/95 hover:bg-indigo-500 text-white font-bold transition-all shadow-xl shadow-indigo-500/30 group transform hover:scale-105 active:scale-95 border border-indigo-400/40 hover:border-indigo-400 backdrop-blur-md hover:backdrop-blur-lg data-[theme=light]:bg-indigo-500/95 data-[theme=light]:hover:bg-indigo-400 data-[theme=light]:shadow-indigo-400/40 data-[theme=light]:border-indigo-300/50 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-all before:duration-300 hover:shadow-2xl data-[theme=light]:hover:shadow-indigo-500/50 !text-white hover:!text-white font-semibold tracking-wide uppercase text-shadow-sm leading-tight"
          >
            <Play size={20} fill="currentColor" />
            Launch Live Demo
            <ExternalLink size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>

      <div className="w-full pb-24 md:pb-16 pt-8 z-20">
        <button 
          onClick={scrollToContent}
          className="mx-auto opacity-70 hover:opacity-100 transition-opacity cursor-pointer group flex flex-col items-center gap-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-2"
          aria-label="Scroll to Problem Space section"
        >
          <span className="text-[10px] uppercase tracking-widest text-indigo-400 group-hover:text-indigo-500 transition-colors">The Problem</span>
          <div className="p-2 rounded-full border border-white/10 bg-white/5 group-hover:bg-white/10 transition-colors">
             <ArrowDown size={20} className="animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};