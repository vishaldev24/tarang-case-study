import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { Palette, Type, Move, Layers, Box, Maximize, Minus, Component } from 'lucide-react';

export const DesignSystem: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ds-section', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="design-system" ref={containerRef} className="w-full py-32 px-4 bg-[#080808] relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 ds-section">
          <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-4 block">Foundations</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Tarang Design System</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A 2026-ready system built for scale, safety, and calm interaction.
          </p>
        </div>

        {/* Design Principles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 ds-section">
            {[
                { title: "Calm by Default", desc: "Reduce cognitive load through muted surfaces and spacing." },
                { title: "Intent Over Stimulation", desc: "No aggressive colors or addictive motion patterns." },
                { title: "Safety Without Censorship", desc: "Clear control without inducing 'warning panic'." },
                { title: "System Consistency", desc: "Shared component DNA across Home, Lens, and Pulse." }
            ].map((item, i) => (
                <div key={i} className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 mb-4"></div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
            ))}
        </div>

        {/* Tokens Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24 ds-section">
            
            {/* Colors */}
            <div className="space-y-8">
                <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                    <Palette className="text-indigo-400" size={20} />
                    <h3 className="text-xl font-bold text-white">Color Tokens</h3>
                </div>
                
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between items-end mb-2">
                             <span className="text-xs text-gray-500 uppercase tracking-widest">Primary Scale</span>
                             <span className="text-xs text-gray-500 font-mono">--primary-500/400/100</span>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            <div className="h-12 rounded-lg bg-indigo-500 shadow-lg shadow-indigo-500/20"></div>
                            <div className="h-12 rounded-lg bg-indigo-400"></div>
                            <div className="h-12 rounded-lg bg-indigo-900/50 border border-indigo-500/30"></div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between items-end mb-2">
                             <span className="text-xs text-gray-500 uppercase tracking-widest">Neutral Scale</span>
                             <span className="text-xs text-gray-500 font-mono">000-900</span>
                        </div>
                        <div className="grid grid-cols-5 gap-2">
                            <div className="h-10 rounded bg-[#0D0D0D] border border-white/10"></div>
                            <div className="h-10 rounded bg-[#1A1A1A] border border-white/10"></div>
                            <div className="h-10 rounded bg-[#333] border border-white/10"></div>
                            <div className="h-10 rounded bg-[#737373]"></div>
                            <div className="h-10 rounded bg-[#E5E5E5]"></div>
                        </div>
                    </div>
                     
                    <div>
                        <div className="flex justify-between items-end mb-2">
                             <span className="text-xs text-gray-500 uppercase tracking-widest">Semantic</span>
                             <span className="text-xs text-gray-500 font-mono">Contextual</span>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-8 rounded bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-[10px] text-emerald-400 tracking-wider uppercase font-bold">Success</div>
                            <div className="h-8 rounded bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-[10px] text-amber-400 tracking-wider uppercase font-bold">Warning</div>
                            <div className="h-8 rounded bg-red-500/20 border border-red-500/50 flex items-center justify-center text-[10px] text-red-400 tracking-wider uppercase font-bold">Danger</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Typography */}
            <div className="space-y-8">
                <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                    <Type className="text-indigo-400" size={20} />
                    <h3 className="text-xl font-bold text-white">Typography</h3>
                </div>
                
                <div className="space-y-8">
                    <div className="group">
                         <div className="flex justify-between mb-1">
                            <p className="text-xs text-gray-500 uppercase tracking-widest">Headings</p>
                            <p className="text-xs text-indigo-400 font-mono opacity-0 group-hover:opacity-100 transition-opacity">Space Grotesk</p>
                         </div>
                         <div className="text-3xl font-bold text-white font-display">Screen Titles</div>
                         <p className="text-xs text-gray-400 font-mono mt-1">Weight: SemiBold | Size: 20-32px</p>
                    </div>
                    <div className="group">
                         <div className="flex justify-between mb-1">
                            <p className="text-xs text-gray-500 uppercase tracking-widest">Body Copy</p>
                            <p className="text-xs text-indigo-400 font-mono opacity-0 group-hover:opacity-100 transition-opacity">Inter</p>
                         </div>
                         <div className="text-base text-gray-300 font-sans max-w-sm">
                             Primary body text is used for feed content and chat messages to ensure maximum readability during long sessions.
                         </div>
                         <p className="text-xs text-gray-400 font-mono mt-1">Weight: Regular | Size: 14-16px</p>
                    </div>
                     <div className="group">
                         <div className="flex justify-between mb-1">
                            <p className="text-xs text-gray-500 uppercase tracking-widest">Meta & CTAs</p>
                            <p className="text-xs text-indigo-400 font-mono opacity-0 group-hover:opacity-100 transition-opacity">Inter</p>
                         </div>
                         <div className="text-xs text-gray-500 font-sans">Timestamps, captions, and helper text usually appear in this style.</div>
                         <p className="text-xs text-gray-400 font-mono mt-1">Weight: Regular/Medium | Size: 12-14px</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Spacing & Shapes */}
         <div className="grid lg:grid-cols-3 gap-8 mb-24 ds-section">
             <div className="glass-panel p-8 rounded-2xl border border-white/5">
                <div className="flex items-center gap-3 mb-6">
                    <Maximize className="text-indigo-400" size={18} />
                    <h4 className="text-white font-bold">Spacing Scale</h4>
                </div>
                <div className="flex gap-3 items-end h-24 mb-4">
                    <div className="w-4 bg-indigo-500/20 h-4 rounded-sm relative group"><span className="absolute -top-4 left-0 text-[9px] text-gray-500 opacity-0 group-hover:opacity-100">4</span></div>
                    <div className="w-8 bg-indigo-500/30 h-8 rounded-sm relative group"><span className="absolute -top-4 left-0 text-[9px] text-gray-500 opacity-0 group-hover:opacity-100">8</span></div>
                    <div className="w-12 bg-indigo-500/40 h-12 rounded-sm relative group"><span className="absolute -top-4 left-0 text-[9px] text-gray-500 opacity-0 group-hover:opacity-100">12</span></div>
                    <div className="w-16 bg-indigo-500/50 h-16 rounded-sm relative group"><span className="absolute -top-4 left-0 text-[9px] text-gray-500 opacity-0 group-hover:opacity-100">16</span></div>
                    <div className="w-24 bg-indigo-500/60 h-24 rounded-sm relative group"><span className="absolute -top-4 left-0 text-[9px] text-gray-500 opacity-0 group-hover:opacity-100">24</span></div>
                </div>
                <p className="text-xs font-mono text-gray-400">4px Base Rhythm</p>
             </div>

             <div className="glass-panel p-8 rounded-2xl border border-white/5">
                <div className="flex items-center gap-3 mb-6">
                    <Box className="text-indigo-400" size={18} />
                    <h4 className="text-white font-bold">Radius Tokens</h4>
                </div>
                 <div className="flex gap-4 items-center justify-around h-24 mb-4">
                    <div className="w-10 h-10 border border-indigo-400 rounded-lg flex items-center justify-center text-[10px] text-indigo-300">sm</div>
                    <div className="w-12 h-12 border border-indigo-400 rounded-xl flex items-center justify-center text-[10px] text-indigo-300">md</div>
                    <div className="w-16 h-12 border border-indigo-400 rounded-[24px] flex items-center justify-center text-[10px] text-indigo-300">lg</div>
                </div>
                <p className="text-xs font-mono text-gray-400">8px, 12px, 20px+</p>
             </div>

             <div className="glass-panel p-8 rounded-2xl border border-white/5">
                <div className="flex items-center gap-3 mb-6">
                    <Move className="text-indigo-400" size={18} />
                    <h4 className="text-white font-bold">Motion Logic</h4>
                </div>
                <div className="space-y-4">
                    <div className="flex justify-between text-sm text-gray-300 border-b border-white/5 pb-2">
                        <span>Bottom Sheets</span>
                        <span className="text-gray-500 font-mono text-xs">Slide + Fade</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-300 border-b border-white/5 pb-2">
                        <span>Modals</span>
                        <span className="text-gray-500 font-mono text-xs">Fade + Scale</span>
                    </div>
                    <div className="text-xs text-indigo-300 mt-2 italic">
                        "Signal state change, don't retain attention."
                    </div>
                </div>
             </div>
         </div>

         {/* Component Families */}
         <div className="ds-section">
             <div className="flex items-center gap-3 mb-8">
                 <Component className="text-indigo-400" size={24} />
                 <h3 className="text-2xl font-bold text-white">Component Families</h3>
             </div>
             
             <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                    { name: "Content Cards", items: ["Post", "Pulse", "Reel"] },
                    { name: "Navigation", items: ["Bottom Nav", "Floating Create", "Stories Trigger"] },
                    { name: "Actions", items: ["Follow/CTA", "Icon Buttons", "Primary vs Secondary"] },
                    { name: "Communication", items: ["Chat Bubbles", "Typing Indicators", "Call Controls"] },
                    { name: "Shield System", items: ["Mode Selector", "Hidden Content", "Review Actions"] }
                ].map((family, i) => (
                    <div key={i} className="p-5 bg-[#111] rounded-2xl border border-white/5 hover:bg-white/5 transition-colors">
                        <h4 className="text-white font-bold mb-3 text-sm">{family.name}</h4>
                        <ul className="space-y-2">
                            {family.items.map((item, j) => (
                                <li key={j} className="flex items-start text-xs text-gray-400">
                                    <Minus size={10} className="mr-2 mt-0.5 text-indigo-500 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
             </div>
         </div>

      </div>
    </section>
  );
};