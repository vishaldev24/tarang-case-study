import React from 'react';
import { ShieldAlert, MousePointerClick, TrendingDown, Lock, Quote } from 'lucide-react';

export const ProcessGrit: React.FC = () => {
  return (
    <section id="about" className="w-full py-32 relative overflow-hidden bg-[#050505]">
      {/* Background accents */}
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-900/50 to-transparent eco-hidden"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* PART 1: KEY DECISIONS (Rationale) */}
        <div className="mb-24">
          <div className="mb-16 text-center">
             <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-4 block">Key Decisions</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">The Rationale</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Design isn't just about what you build, but what you choose not to simplify.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Decision 1 */}
            <div className="glass-panel p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors eco-hidden"></div>
               <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                    <ShieldAlert className="text-indigo-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Why "Hide" over "Block"?</h3>
                  <p className="text-gray-300 leading-relaxed text-sm mb-4">
                    Blocking creates "echo chambers" where users are unaware of opposing viewpoints or reality.
                  </p>
                  <p className="text-white leading-relaxed text-sm border-l-2 border-indigo-500 pl-4">
                    Hiding with an override option allows the user to decide their own comfort level in real-time, making the safety system adaptive rather than punitive.
                  </p>
               </div>
            </div>

            {/* Decision 2 */}
            <div className="glass-panel p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors eco-hidden"></div>
               <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                    <MousePointerClick className="text-indigo-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Why Friction in Creation?</h3>
                  <p className="text-gray-300 leading-relaxed text-sm mb-4">
                    Most apps optimize for one-tap impulsive posting. Tarang adds a 1-second "Intent Choice" (Share vs Express).
                  </p>
                  <p className="text-white leading-relaxed text-sm border-l-2 border-indigo-500 pl-4">
                    This deliberate friction point significantly reduces the volume of spam and low-effort posts, prioritizing community health over pure upload volume.
                  </p>
               </div>
            </div>

          </div>
        </div>

        {/* PART 2: TRADEOFFS & REFLECTION */}
        <div className="border-t border-white/10 pt-20">
            <div className="grid md:grid-cols-2 gap-16">
                 
                 {/* Tradeoffs */}
                 <div>
                    <div className="flex items-center gap-3 mb-6">
                       <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase">The Tradeoffs</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-6">Honest Costs</h3>
                    <p className="text-gray-300 mb-8 leading-relaxed">
                        Acknowledging that "Calm Tech" comes at a cost to traditional growth metrics.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-red-900/20 flex items-center justify-center flex-shrink-0">
                                <TrendingDown size={20} className="text-red-400"/>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm">Slower Virality</h4>
                                <p className="text-gray-400 text-xs mt-1">By removing public counts and addictive loops, short-term "hype" cycles are damped.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-orange-900/20 flex items-center justify-center flex-shrink-0">
                                <Lock size={20} className="text-orange-400"/>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm">Higher Entry Barrier</h4>
                                <p className="text-gray-400 text-xs mt-1">The "Intent Launcher" friction might deter casual, impulsive users used to Instagram/TikTok speed.</p>
                            </div>
                        </div>
                    </div>
                 </div>

                 {/* Reflection */}
                 <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-3xl eco-hidden"></div>
                    <div className="relative p-10 h-full flex flex-col justify-center">
                        <Quote className="text-indigo-500 mb-6 opacity-50" size={40} />
                        <h3 className="text-2xl font-bold text-white mb-6">Reflection: Systems over Screens</h3>
                        <p className="text-gray-200 leading-relaxed italic text-lg mb-8">
                            "I learned that solving for 'Safety' isn't about better icons; it's about better Information Architecture.
                            <br /><br />
                            As a designer, my job wasn't to add features, but to add meaningful friction that protects the user's mental space."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="h-px w-12 bg-white/20"></div>
                            <span className="text-xs text-gray-400 uppercase tracking-widest">End of Case Study</span>
                        </div>
                    </div>
                 </div>

            </div>
        </div>
      </div>
    </section>
  );
};