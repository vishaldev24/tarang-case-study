import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layout, Activity, Aperture, PlayCircle, UserCircle, Smartphone } from 'lucide-react';

const appFrames = [
  { 
    title: "Home Feed", 
    subtitle: "Context Surface", 
    icon: <Layout size={20} />,
    desc: "Intent-driven posts with a clean, distraction-free reading environment.",
    // REPLACE WITH YOUR IMAGE: "/assets/home_feed.png"
    img: "https://images.unsplash.com/photo-1595856942057-07490212f462?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    title: "Trending Pulse", 
    subtitle: "Discovery Logic", 
    icon: <Activity size={20} />,
    desc: "Horizontal scrolling cards for trending topics and people, separating noise from signal.",
    // REPLACE WITH YOUR IMAGE: "/assets/trending.png"
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    title: "Lens Explore", 
    subtitle: "Visual Search", 
    icon: <Aperture size={20} />,
    desc: "Masonry grid layout for immersive visual discovery (e.g., Nature, Food, Travel).",
    // REPLACE WITH YOUR IMAGE: "/assets/lens_grid.png"
    img: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    title: "Reels Player", 
    subtitle: "Focus Mode", 
    icon: <PlayCircle size={20} />,
    desc: "Full-screen playback with minimal overlays to prioritize content engagement.",
    // REPLACE WITH YOUR IMAGE: "/assets/reels.png"
    img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    title: "User Profile", 
    subtitle: "Identity System", 
    icon: <UserCircle size={20} />,
    desc: "Unified persona with stats, grid/reel tabs, and a clean biography section.",
    // REPLACE WITH YOUR IMAGE: "/assets/profile.png"
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" 
  }
];

export const Gallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalWidth = sliderRef.current ? sliderRef.current.scrollWidth - window.innerWidth : 0;
      
      gsap.to(sliderRef.current, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + sliderRef.current!.scrollWidth,
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full h-screen overflow-hidden flex flex-col justify-center relative bg-[#0D0D0D]">
      <div className="absolute top-12 left-4 md:left-20 z-20 pointer-events-none">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">App Prototype</h2>
        <p className="text-indigo-400 font-mono text-sm tracking-widest">HIGH FIDELITY SCREENS &bull; FIGMA EXPORT</p>
      </div>

      <div ref={sliderRef} className="flex gap-8 md:gap-16 px-4 md:px-20 items-center h-[65vh] md:h-[80vh]">
        {appFrames.map((frame, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-[280px] md:w-[350px] h-full flex flex-col relative group"
          >
             {/* Frame Container */}
            <div className="flex-grow relative transition-all duration-500 group-hover:scale-[1.02] transform-gpu">
               
               {/* Phone Bezel / Screen Area */}
               <div className="w-full h-full bg-[#111] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative border-[4px] md:border-[6px] border-[#222] shadow-2xl">
                  {/* Status Bar Shim */}
                  <div className="absolute top-0 w-full h-6 bg-black/20 z-20 backdrop-blur-sm pointer-events-none"></div>
                  
                  {/* Eco Mode Placeholder */}
                  <div className="eco-only absolute inset-0 z-30 bg-[#050505] flex flex-col items-center justify-center border border-white/10">
                      <Smartphone className="mb-4 text-emerald-600" size={32} />
                      <span className="text-emerald-500 font-bold mb-2 text-sm">Low Power Mode</span>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest">{frame.title}</p>
                  </div>

                  {/* Actual Image */}
                  <img 
                    src={frame.img} 
                    alt={frame.title} 
                    className="w-full h-full object-cover eco-hidden"
                  />
                  
                  {/* Glossy Reflection Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-50 pointer-events-none z-10 rounded-[2.5rem]"></div>
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