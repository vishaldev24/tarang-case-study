import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bot, ScanEye, Fingerprint, Quote, Sparkles } from 'lucide-react';

export const PhaseTwoRoadmap: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.roadmap-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      });
      
      gsap.from('.designer-note', {
        scale: 0.95,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: '.designer-note',
          start: "top 85%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="roadmap" ref={containerRef} className="w-full py-20 px-4 glass-panel relative z-10 border-t border-white/5 overflow-hidden">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6">
            <Sparkles size={14} className="text-purple-400" />
            <span className="text-[10px] uppercase tracking-widest text-purple-300 font-bold">Future Concepts</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-display">
            Phase 2: The Agentic Sovereignty Roadmap
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Moving beyond static safety tools to active, agentic defense systems.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1: Agentic Briefing Center */}
            <div className="roadmap-card group relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent hover:from-purple-500/50 transition-all duration-500">
                <div className="absolute inset-0 bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative h-full bg-[#1A1A1A] p-8 rounded-[22px] overflow-hidden">
                    <div className="w-14 h-14 rounded-2xl bg-purple-900/20 border border-purple-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Bot className="text-purple-400" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Agentic Briefing Center</h3>
                    <p className="text-sm text-gray-400 leading-relaxed data-[theme=light]:text-gray-700">
                        A centralized control room where users define their daily intent. The AI agent pre-curates feeds and manages notification throughput based on your real-time cognitive load capacity, effectively acting as a digital executive assistant for your attention.
                    </p>
                </div>
            </div>

            {/* Card 2: Physical Shield */}
            <div className="roadmap-card group relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent hover:from-cyan-500/50 transition-all duration-500">
                 {/* Pulse Animation Border */}
                 <div className="absolute inset-0 rounded-3xl border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.2)] animate-pulse pointer-events-none" />
                 
                 <div className="absolute inset-0 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative h-full bg-[#1A1A1A] p-8 rounded-[22px] overflow-hidden">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-900/20 border border-cyan-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <ScanEye className="text-cyan-400" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Physical Shield (Lens Detection)</h3>
                    <p className="text-sm text-gray-400 leading-relaxed data-[theme=light]:text-gray-700">
                        Utilizing multimodal visual models to detect secondary camera lenses (e.g., another phone recording you) in the reflection of your environment. The system triggers an instant generative blur on your screen content to prevent unauthorized physical recording.
                    </p>
                </div>
            </div>

            {/* Card 3: Integrated Identity Defense */}
            <div className="roadmap-card group relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent hover:from-emerald-500/50 transition-all duration-500">
                 <div className="absolute inset-0 bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative h-full bg-[#1A1A1A] p-8 rounded-[22px] overflow-hidden">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-900/20 border border-emerald-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Fingerprint className="text-emerald-400" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Identity Defense (Dristi)</h3>
                    <p className="text-sm text-gray-400 leading-relaxed data-[theme=light]:text-gray-700">
                        A decentralized biometric watermarking system that embeds imperceptible identity tokens into all user-generated content. This allows for rapid, authenticated cross-platform takedowns of deepfakes and unauthorized AI clones.
                    </p>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
};
