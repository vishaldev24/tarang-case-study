import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { AlertTriangle, Compass, Target, Activity, ArrowRight } from 'lucide-react';
import { TiltContainer } from './TiltContainer';

export const BentoGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.bento-item');
      gsap.from(items, {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="strategy" ref={containerRef} className="w-full py-32 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-2 block">The Problem Space</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Digital Exhaustion</h2>
          </div>
          <p className="text-gray-300 max-w-lg text-right text-sm md:text-base leading-relaxed border-l border-indigo-500/30 pl-6">
            Through competitive auditing, I identified three systemic friction points in the current Indian social landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 grid-rows-[auto_auto] lg:grid-rows-2 h-auto lg:h-[700px]">
          
          {/* TILE 1: THE PROBLEM (Focus on points) */}
          <div className="bento-item col-span-1 md:col-span-2 lg:row-span-2 bg-[#0F0F0F] rounded-3xl">
            <TiltContainer className="h-full">
              <div className="h-full glass-panel rounded-3xl p-10 relative overflow-hidden group hover:border-red-500/20 transition-colors flex flex-col justify-between">
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <AlertTriangle size={200} />
                </div>
                
                <div>
                   <div className="w-12 h-12 rounded-xl bg-red-900/20 border border-red-500/20 flex items-center justify-center mb-6">
                      <AlertTriangle className="text-red-400" size={24} />
                   </div>
                   <h3 className="text-3xl font-bold text-white mb-6">Systemic Friction</h3>
                   
                   <div className="space-y-6">
                     <div className="border-l-2 border-red-500/30 pl-4">
                       <h4 className="text-white font-medium mb-1">1. Digital Exhaustion</h4>
                       <p className="text-gray-300 text-sm leading-relaxed">Retention-focused loops leading to unintentional "doomscrolling" and user regret.</p>
                     </div>
                     <div className="border-l-2 border-red-500/30 pl-4">
                       <h4 className="text-white font-medium mb-1">2. Unsafe Content Exposure</h4>
                       <p className="text-gray-300 text-sm leading-relaxed">High probability of encountering toxic triggers due to "Engagement-first" moderation.</p>
                     </div>
                     <div className="border-l-2 border-red-500/30 pl-4">
                       <h4 className="text-white font-medium mb-1">3. Creator Pressure</h4>
                       <p className="text-gray-300 text-sm leading-relaxed">The "Viral-or-Nothing" model causing burnout among regional creators.</p>
                     </div>
                   </div>
                </div>

                <div className="mt-8">
                   <div className="flex items-center gap-2 text-red-400 text-sm font-medium">
                      High Churn Risk <ArrowRight size={14} />
                   </div>
                </div>
              </div>
            </TiltContainer>
          </div>

          {/* TILE 2: DESIGN DIRECTION */}
          <div className="bento-item col-span-1 lg:col-span-2 lg:row-span-1">
            <TiltContainer className="h-full">
              <div className="h-full glass-panel rounded-3xl p-8 relative overflow-hidden group hover:bg-indigo-900/10 transition-colors">
                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Compass size={120} />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                      <Compass className="text-indigo-400" size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-white">Design Direction: Calm Tech</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-white text-sm font-bold mb-1">Intent {'>'} Engagement</p>
                        <p className="text-gray-400 text-xs">Serve a specific goal, not just time-on-screen.</p>
                    </div>
                    <div>
                        <p className="text-white text-sm font-bold mb-1">Control {'>'} Enforcement</p>
                        <p className="text-gray-400 text-xs">Safety is a preference, not a mandate.</p>
                    </div>
                  </div>
                </div>
              </div>
            </TiltContainer>
          </div>

          {/* TILE 3: STRATEGY (Create) */}
          <div className="bento-item col-span-1 lg:col-span-1 lg:row-span-1">
             <TiltContainer className="h-full">
              <div className="h-full glass-panel rounded-3xl p-8 relative overflow-hidden group hover:border-indigo-500/30 transition-colors border-t border-indigo-500/20">
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <Target className="text-indigo-400 mb-4" size={32} />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Create as Launcher</h3>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      Deliberate 1s friction to reduce low-effort spam.
                    </p>
                  </div>
                </div>
              </div>
            </TiltContainer>
          </div>

          {/* TILE 4: SUCCESS METRICS */}
          <div className="bento-item col-span-1 lg:col-span-1 lg:row-span-1">
             <TiltContainer className="h-full">
              <div className="h-full glass-panel rounded-3xl p-8 relative overflow-hidden group hover:bg-green-900/10 transition-colors">
                <div className="relative z-10 h-full flex flex-col justify-between">
                   <div className="flex items-center justify-between">
                      <Activity className="text-green-400" size={32} />
                   </div>
                   <div>
                     <h3 className="text-lg font-bold text-white mb-2">Behavioral Health</h3>
                     <div className="space-y-1">
                        <div className="flex justify-between text-xs text-gray-400">
                          <span>Intent Success</span>
                          <span className="text-green-400">High</span>
                        </div>
                        <div className="flex justify-between text-xs text-gray-400">
                          <span>Burnout</span>
                          <span className="text-green-400">Low</span>
                        </div>
                     </div>
                   </div>
                </div>
              </div>
            </TiltContainer>
          </div>

        </div>
      </div>
    </section>
  );
};