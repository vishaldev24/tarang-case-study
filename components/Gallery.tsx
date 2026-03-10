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
    desc: "Manage your privacy settings and app security.",
    img: "/Settings.jpg",
    carousel: [
      "/1-shield screenoff.jpg",
      "/2-shield custom on.jpg",
      "/shield hidden screen.jpg"
    ]
  }
];

// Carousel Modal Component
const CarouselModal: React.FC<{
  frame: typeof appFrames[0];
  onClose: () => void;
}> = ({ frame, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselImages = frame.carousel || [];
  
  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };
  
  const goToNext = () => {
    setCurrentIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  if (carouselImages.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md" onClick={onClose}>
      <button 
        className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors"
        onClick={onClose}
      >
        <X size={32} />
      </button>
      
      <div className="relative w-full max-w-4xl mx-4" onClick={(e) => e.stopPropagation()}>
        <div className="relative aspect-[9/19.5] bg-[#111] rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src={carouselImages[currentIndex]} 
            alt={`${frame.title} - ${currentIndex + 1}`}
            className="w-full h-full object-contain bg-black"
          />
          
          {/* Navigation Arrows */}
          {carouselImages.length > 1 && (
            <>
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                onClick={goToPrev}
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                onClick={goToNext}
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>
        
        {/* Dots Indicator */}
        {carouselImages.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {carouselImages.map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentIndex ? 'bg-indigo-500' : 'bg-white/30'
                }`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        )}
        
        <p className="text-center text-white/60 mt-2 text-sm">
          {currentIndex + 1} / {carouselImages.length}
        </p>
      </div>
    </div>
  );
};

export const Gallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [activeCarousel, setActiveCarousel] = useState<typeof appFrames[0] | null>(null);
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
      const itemWidth = 280 + 48; // width + gap
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
      className="w-full h-screen min-h-[700px] overflow-hidden flex flex-col justify-center relative bg-[#0D0D0D] py-20 cursor-grab active:cursor-grabbing"
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

      <div ref={sliderRef} className="flex gap-8 md:gap-12 px-4 md:px-20 items-center h-[50vh] md:h-[60vh]">
        {appFrames.map((frame, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-[220px] md:w-[280px] h-full flex flex-col relative group"
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
                    className={`gallery-img w-full h-full object-contain bg-black ${frame.carousel ? 'cursor-pointer' : ''}`}
                    onClick={() => frame.carousel && setActiveCarousel(frame)}
                    onLoad={(e) => {
                      console.log('Image loaded:', frame.img);
                      ScrollTrigger.refresh();
                    }}
                    onError={(e) => {
                      console.error('Image failed to load:', frame.img, e);
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  {/* Carousel Indicator */}
                  {frame.carousel && (
                    <div className="absolute bottom-2 right-2 bg-indigo-500/80 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <span>{frame.carousel.length}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20M2 12l5-5m-5 5 5 5"/></svg>
                    </div>
                  )}
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

      {/* Carousel Modal */}
      {activeCarousel && (
        <CarouselModal 
          frame={activeCarousel} 
          onClose={() => setActiveCarousel(null)} 
        />
      )}
    </section>
  );
};
