import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ShieldCheck, AlertCircle, TrendingUp, Award } from 'lucide-react';

export const PortfolioNarrative: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.narrative-box', {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full py-24 px-4 bg-black relative overflow-hidden border-y border-white/5">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full eco-hidden"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-4 block">Portfolio Hook</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">The Designer of Safety</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Problem */}
          <div className="narrative-box glass-panel p-10 rounded-[2rem] border-l-4 border-red-500/50 hover:border-red-500 transition-all shadow-sm">
            <AlertCircle className="text-red-500 mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4">The Problem</h3>
            <p className="text-gray-400 leading-relaxed">
              Social platforms are often designed for <strong>"engagement at any cost,"</strong> leading to systemic harassment, privacy leaks, and digital burnout.
            </p>
          </div>

          {/* Solution */}
          <div className="narrative-box glass-panel p-10 rounded-[2rem] border-l-4 border-indigo-500/50 hover:border-indigo-500 transition-all shadow-sm">
            <ShieldCheck className="text-indigo-400 mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4">The Solution</h3>
            <p className="text-gray-400 leading-relaxed">
              Applying a <strong>"Quality Control"</strong> mindset to social UI. Just as a TV must pass safety standards, a digital interaction should pass a "Shield" (Tarang) to protect the user.
            </p>
          </div>

          {/* Outcome */}
          <div className="narrative-box glass-panel p-10 rounded-[2rem] border-l-4 border-emerald-500/50 hover:border-emerald-500 transition-all shadow-sm">
            <TrendingUp className="text-emerald-400 mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4">The Outcome</h3>
            <p className="text-gray-400 leading-relaxed">
              Designed a system that uses AI content analysis to provide a <strong>"Clean-Feed" guarantee</strong>—measurably increasing long-term trust and brand loyalty.
            </p>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/5 border border-white/10">
                <Award className="text-yellow-500" size={20} />
                <span className="text-sm font-bold uppercase tracking-widest">2026 UX Standards Compliant</span>
            </div>
        </div>
      </div>
    </section>
  );
};