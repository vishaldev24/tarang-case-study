import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layout, Activity, Aperture, PlayCircle, UserCircle, ChevronLeft, ChevronRight, X } from 'lucide-react';

const appFrames = [
  { 
    title: "Home Feed", 
    subtitle: "Context Surface", 
    icon: <Layout size={20} />,
    desc: "Intent-driven posts with a clean, distraction-free reading environment.",
    img: "/Home.png" 
  },
  { 
    title: "Lens", 
    subtitle: "Visual Search", 
    icon: <Aperture size={20} />,
    desc: "Masonry grid layout for immersive visual discovery (e.g., Nature, Food, Travel).",
    img: "/Lens.jpg" 
  },
  { 
    title: "Lens Explore", 
    subtitle: "Discovery", 
    icon: <Activity size={20} />,
    desc: "Explore new content with visual search and recommendations.",
    img: "/Lens explore screen.jpg" 
  },
  { 
    title: "Create Story", 
    subtitle: "Content Creation", 
    icon: <PlayCircle size={20} />,
    desc: "Create and share stories with your network.",
    img: "/Create story.png" 
  },
  { 
    title: "Reels", 
    subtitle: "Focus Mode", 
    icon: <PlayCircle size={20} />,
    desc: "Full-screen playback with minimal overlays to prioritize content engagement.",
    img: "/Reels.png" 
  },
  { 
    title: "User Profile", 
    subtitle: "Identity System", 
    icon: <UserCircle size={20} />,
    desc: "Unified persona with stats, grid/reel tabs, and a clean biography section.",
    img: "/Profile.png" 
  },
  { 
    title: "Shield Settings", 
    subtitle: "Privacy Control", 
    icon: <Activity size={20} />,
    desc: "Manage privacy settings with granular controls.",
    img: "/Settings.jpg"
  },
  { 
    title: "Shield Screen Off", 
    subtitle: "Default State", 
    icon: <Activity size={20} />,
    desc: "Shield automatically engages when screen is off.",
    img: "/shield screenoff.jpg"
  },
  { 
    title: "Shield Custom On", 
    subtitle: "Custom Mode", 
    icon: <Activity size={20} />,
    desc: "User-configured shield settings active.",
    img: "/shield custom on.jpg"
  },
  { 
    title: "Shield Hidden", 
    subtitle: "Hidden Mode", 
    icon: <Activity size={20} />,
    desc: "Shield operating invisibly in background.",
    img: "/shield hidden screen.jpg"
  }
];



export const Gallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Use a function for totalWidth to ensure it's calculated correctly during scroll
      const getScrollAmount = () => {
        const sliderWidth = sliderRef.current?.scrollWidth || 0;
        return -(sliderWidth - window.innerWidth);
      };

      gsap.to(sliderRef.current, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          start: "top top",
          end: () => "+=" + (sliderRef.current?.scrollWidth || window.innerWidth) * 1.2,
        }
      });
    }, containerRef);
    
    // Refresh ScrollTrigger after a short delay to account for image loading
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    if (sliderRef.current) {
      const style = window.getComputedStyle(sliderRef.current);
      const matrix = new WebKitCSSMatrix(style.transform);
      currentTranslate.current = matrix.m41;
      prevTranslate.current = currentTranslate.current;
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const deltaX = e.clientX - dragStartX.current;
    const newTranslate = prevTranslate.current + deltaX;
    
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'none';
      sliderRef.current.style.transform = `translateX(${newTranslate}px)`;
      currentTranslate.current = newTranslate;
    }
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    prevTranslate.current = currentTranslate.current;
    
    // Add momentum/snap to nearest item
    if (sliderRef.current) {
      const itemWidth = 220 + 24; // width + gap
      const nearestIndex = Math.round(Math.abs(currentTranslate.current) / itemWidth);
      const snappedPosition = -nearestIndex * itemWidth;
      
      sliderRef.current.style.transition = 'transform 0.3s ease-out';
      sliderRef.current.style.transform = `translateX(${snappedPosition}px)`;
      prevTranslate.current = snappedPosition;
      currentTranslate.current = snappedPosition;
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    dragStartX.current = e.touches[0].clientX;
    if (sliderRef.current) {
      const style = window.getComputedStyle(sliderRef.current);
      const matrix = new WebKitCSSMatrix(style.transform);
      currentTranslate.current = matrix.m41;
      prevTranslate.current = currentTranslate.current;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.touches[0].clientX - dragStartX.current;
    const newTranslate = prevTranslate.current + deltaX;
    
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'none';
      sliderRef.current.style.transform = `translateX(${newTranslate}px)`;
      currentTranslate.current = newTranslate;
    }
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  return (
    <section 
      id="gallery" 
      ref={containerRef} 
      className="w-full h-[70vh] md:h-[60vh] max-h-[500px] overflow-hidden flex flex-col justify-center relative bg-[#0D0D0D] py-12 cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >

      <div className="absolute top-12 left-4 md:left-20 z-20 pointer-events-none">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">App Prototype</h2>
        <p className="text-indigo-400 font-mono text-sm tracking-widest">HIGH FIDELITY SCREENS &bull; FIGMA EXPORT</p>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50 animate-bounce md:hidden">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white">Scroll Down to Explore</span>
        <div className="w-px h-8 bg-gradient-to-b from-indigo-500 to-transparent"></div>
      </div>

      <div className="hidden md:flex absolute bottom-12 right-20 z-20 items-center gap-4 text-white/30 font-mono text-[10px] uppercase tracking-[0.3em]">
        <span>Scroll Down to Slide</span>
        <div className="w-24 h-px bg-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-indigo-500/50 animate-slide-right"></div>
        </div>
      </div>

      <div ref={sliderRef} className="flex gap-4 md:gap-6 px-2 md:px-12 items-center h-[60%] max-h-[280px] md:max-h-[320px]"> 
        {appFrames.map((frame, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-[150px] md:w-[180px] h-[85%] flex flex-col relative group"
          >
             {/* Frame Container */}
            <div className="flex-grow relative transition-all duration-500 group-hover:scale-[1.02] transform-gpu">
               
               {/* Simple Image Container */}
               <div className="w-full h-full bg-[#111] rounded-lg overflow-hidden relative shadow-2xl">
                  {/* Actual Image */}
                  <img 
                    src={frame.img} 
                    alt={frame.title} 
                    referrerPolicy="no-referrer"
                    loading="eager"
                    decoding="sync"
                    fetchPriority="high"
                    className="gallery-img w-full h-full object-contain bg-black"
                    onLoad={(e) => {
                      console.log('Image loaded:', frame.img);
                      ScrollTrigger.refresh();
                    }}
                    onError={(e) => {
                      console.error('Image failed to load:', frame.img, e);
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
               </div>
            </div>

            {/* Caption */}
            <div className="mt-4 md:mt-8 pl-4 border-l-2 border-white/10 group-hover:border-indigo-500 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                 <span className="text-indigo-400 bg-indigo-500/10 p-1.5 rounded-lg">{frame.icon}</span>
                 <h3 className="text-lg md:text-xl font-bold text-white">{frame.title}</h3>
              </div>
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1 md:mb-2">{frame.subtitle}</p>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed line-clamp-2 md:line-clamp-none">{frame.desc}</p>
            </div>
          </div>
        ))}
        {/* End Spacer */}
        <div className="w-[10vw]"></div>
      </div>

    </section>
  );
};
