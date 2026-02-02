import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, CheckCircle, RefreshCw, EyeOff, Eye } from 'lucide-react';

interface Comment {
  id: number;
  user: string;
  avatar: string;
  content: string;
  toxicity: 'safe' | 'toxic' | 'questionable';
  timestamp: string;
}

const DEMO_COMMENTS: Comment[] = [
  { id: 1, user: "Rohan_UX", avatar: "bg-indigo-500", content: "The structural integrity here is amazing. Great work!", toxicity: 'safe', timestamp: "2m" },
  { id: 2, user: "Troll_Bot_99", avatar: "bg-red-500", content: "Absolute garbage. Delete this now.", toxicity: 'toxic', timestamp: "5m" },
  { id: 3, user: "Sarah_Design", avatar: "bg-emerald-500", content: "How did you handle the localization?", toxicity: 'safe', timestamp: "12m" },
  { id: 4, user: "Hater_007", avatar: "bg-orange-500", content: "You stole this concept. Fraud.", toxicity: 'toxic', timestamp: "15m" },
  { id: 5, user: "Dev_Priya", avatar: "bg-blue-500", content: "Smooth animations, very clean code.", toxicity: 'safe', timestamp: "1h" }
];

export const ShieldSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const [shieldActive, setShieldActive] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a timeline that triggers on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%", // Start animation when section hits middle of viewport
          end: "bottom 80%",
          toggleActions: "play none none reverse",
          onEnter: () => {
            setShieldActive(true);
            // Simulate tactile "Shake" or "Lock-in" effect
            if (phoneRef.current) {
               gsap.fromTo(phoneRef.current, 
                 { x: -2, rotateZ: -1 }, 
                 { x: 2, rotateZ: 1, duration: 0.05, repeat: 5, yoyo: true, clearProps: "all" }
               );
            }
          },
          onLeaveBack: () => setShieldActive(false),
        }
      });
      
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="shield" ref={sectionRef} className="w-full py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Narrative */}
        <div className="space-y-8">
          <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase block">The Shield (Hero Feature)</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Hide, Don't Delete:<br />
            <span className="text-gray-400">Agency over Censorship.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
             Shield is a user-controlled visibility layer designed to manage toxic or explicit content without platform censorship.
             <br/><br/>
             Instead of the platform deciding what is "safe," we empower the user to define their own threshold.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2"><EyeOff size={16} /> Blur & Label</h4>
              <p className="text-sm text-gray-300">Triggered content is blurred and labeled with specific reasoning (e.g. "Explicit Language").</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Eye size={16} /> User Override</h4>
              <p className="text-sm text-gray-300">Users maintain 100% agency to unblur and view content. The app is a tool, not a monitor.</p>
            </div>
          </div>
        </div>

        {/* Right: Scrollytelling Visual */}
        <div ref={containerRef} className="relative w-full flex justify-center">
          {/* Phone Frame - Responsive Width */}
          <div ref={phoneRef} className="relative w-full max-w-[350px] aspect-[9/18] h-auto min-h-[500px] bg-black rounded-[2.5rem] md:rounded-[3rem] border-[6px] md:border-8 border-gray-800 shadow-2xl overflow-hidden transform-gpu">
             
             {/* Status Bar */}
             <div className="h-12 md:h-14 bg-black/50 backdrop-blur-md flex items-center justify-between px-4 md:px-6 z-20 relative border-b border-white/5">
                <span className="text-xs font-bold text-white">Tarang</span>
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full transition-all duration-500 ${shieldActive ? 'bg-indigo-600 shadow-[0_0_15px_rgba(79,70,229,0.5)]' : 'bg-gray-800'}`}>
                   <Shield size={12} className="text-white" />
                   <span className={`text-[9px] md:text-[10px] font-bold text-white uppercase ${shieldActive ? 'animate-pulse' : ''}`}>{shieldActive ? 'STRICT' : 'OFF'}</span>
                </div>
             </div>

             {/* Feed Content */}
             <div className="p-3 md:p-4 space-y-3 pt-6 relative h-full">
                {/* Cleansing Ripple / Shockwave Effect */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500/40 rounded-full blur-2xl pointer-events-none z-30 transition-all duration-700 ease-out ${shieldActive ? 'w-full h-full opacity-0' : 'w-0 h-0 opacity-100'}`} />

                {/* Continuous Ambient Glow when Active */}
                {shieldActive && (
                  <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-indigo-500/10 to-transparent animate-pulse" />
                )}

                {DEMO_COMMENTS.map((comment) => (
                  <div 
                    key={comment.id}
                    className={`relative transition-all duration-700 ease-in-out transform`}
                  >
                     {/* If Shield Active AND Toxic -> Show Blurred State */}
                     {shieldActive && comment.toxicity === 'toxic' ? (
                        <div className="p-3 rounded-xl border border-white/5 bg-white/5 backdrop-blur-md flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-colors">
                           <div className="flex items-center gap-2">
                              <EyeOff size={14} className="text-gray-400" />
                              <span className="text-xs text-gray-300 font-mono">Hidden: Low Quality</span>
                           </div>
                           <span className="text-[10px] text-indigo-300 font-bold uppercase tracking-wider">Show</span>
                        </div>
                     ) : (
                        // Normal Comment State
                        <div className={`p-3 md:p-4 rounded-xl border flex gap-3 ${comment.toxicity === 'toxic' ? 'bg-red-900/10 border-red-500/20' : 'bg-white/5 border-white/10'}`}>
                           <div className={`w-8 h-8 rounded-full ${comment.avatar} flex-shrink-0`} />
                           <div className="min-w-0">
                             <div className="flex justify-between mb-1">
                               <span className="text-xs font-bold text-gray-300">{comment.user}</span>
                               <span className="text-[10px] text-gray-400">{comment.timestamp}</span>
                             </div>
                             <p className="text-xs text-gray-300 leading-snug">{comment.content}</p>
                           </div>
                        </div>
                     )}
                  </div>
                ))}
                
                {/* Visual Feedback Message */}
                <div className={`transition-all duration-700 delay-300 ${shieldActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} absolute bottom-20 md:bottom-24 left-0 right-0 px-4`}>
                    <div className="flex items-center justify-center p-2 rounded-lg border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-sm shadow-lg">
                        <CheckCircle size={14} className="text-indigo-400 mr-2" />
                        <span className="text-xs text-indigo-300 font-medium">2 Items Hidden by Preference</span>
                    </div>
                </div>
             </div>

             {/* Bottom Action */}
             <div className="absolute bottom-0 w-full h-16 md:h-20 bg-gradient-to-t from-black to-transparent z-20 flex items-center justify-center">
                <div className="w-1/3 h-1 bg-gray-700 rounded-full"></div>
             </div>
          </div>

          {/* Floating Label (Hidden on small screens) */}
          <div className="absolute top-1/2 -right-6 md:-right-24 transform -translate-y-1/2 hidden lg:block">
            <div className="glass-panel p-4 rounded-xl border-l-4 border-indigo-500 max-w-[200px]">
               <RefreshCw size={24} className={`mb-2 transition-transform duration-1000 ${shieldActive ? 'rotate-180 text-indigo-400' : 'text-gray-500'}`} />
               <p className="text-xs text-gray-300">
                 Real-time filtering logic.<br/>
                 <span className="text-white font-bold">{shieldActive ? 'Adaptive' : 'Passive'}</span> State.
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};