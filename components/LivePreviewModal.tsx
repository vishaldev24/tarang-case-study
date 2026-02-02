import React, { useState, useEffect } from 'react';
import { X, Shield, ShieldAlert, Smartphone, Aperture, MessageSquare, Heart, Share2, MoreHorizontal, EyeOff, Eye, ExternalLink } from 'lucide-react';
import gsap from 'gsap';

interface LivePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: string;
}

export const LivePreviewModal: React.FC<LivePreviewModalProps> = ({ isOpen, onClose, theme }) => {
  const [shieldActive, setShieldActive] = useState(true);
  const [activeTab, setActiveTab] = useState<'pulse' | 'lens'>('pulse');

  const DEMO_URL = "https://ai.studio/apps/drive/1OVucCUcRgRfx-0G1GNBuc-AyJ1RZvWzn?fullscreenApplet=true";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo(".modal-overlay", { opacity: 0 }, { opacity: 1, duration: 0.4 });
      gsap.fromTo(".modal-content", { y: 100, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" });
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const mockContent = [
    { id: 1, user: 'Aman_Art', type: 'pulse', text: 'Just finished the new Devanagari font system! #typography', safe: true, img: 'https://picsum.photos/seed/aman/400/300' },
    { id: 2, user: 'NewsBot', type: 'pulse', text: 'Controversial take on regional politics. [Filtered Content]', safe: false, reason: 'Political Polarization' },
    { id: 3, user: 'LensMaster', type: 'lens', text: 'Mumbai Sunsets', safe: true, img: 'https://picsum.photos/seed/sunset/400/600' },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-overlay bg-black/80 backdrop-blur-md overflow-hidden">
      <div className="absolute inset-0" onClick={onClose}></div>
      
      <div className="relative w-full max-w-lg glass-panel modal-content rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row bg-[#0D0D0D] max-h-[95vh] md:max-h-[90vh]">
        
        {/* Sidebar Info (Desktop Only) */}
        <div className="hidden md:flex flex-col justify-between p-8 md:w-1/3 border-r border-white/5 bg-black/20">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Interactive Demo</h3>
            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              Experience the core logic of Tarang. Use the Shield to filter the environment.
            </p>
            <a 
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-[10px] text-indigo-300 font-bold uppercase tracking-wider hover:bg-indigo-500 hover:text-white transition-all group"
            >
              Full AI Logic
              <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
          <div className="space-y-4">
             <div className={`p-3 rounded-xl border transition-colors ${shieldActive ? 'border-indigo-500/50 bg-indigo-500/10' : 'border-white/5 bg-white/5'}`}>
                <p className="text-[10px] uppercase font-bold text-indigo-400 mb-1">State: {shieldActive ? 'Shielded' : 'Raw'}</p>
                <p className="text-[9px] text-gray-500">
                  {shieldActive ? 'AI is suppressing toxic triggers.' : 'Passive mode. No filtering applied.'}
                </p>
             </div>
          </div>
        </div>

        {/* Prototype Screen Container */}
        <div className="flex-grow p-4 md:p-6 flex flex-col items-center bg-[#050505] overflow-y-auto md:overflow-visible">
          
          {/* Mobile Header (Hidden on Desktop) */}
          <div className="md:hidden w-full mb-4 flex justify-between items-center">
             <h3 className="text-lg font-bold text-white">Interactive Demo</h3>
              <a 
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-indigo-400 font-bold uppercase"
            >
              Full App <ExternalLink size={10} className="inline ml-1" />
            </a>
          </div>

          <div className="relative w-full max-w-[320px] aspect-[9/19] h-auto min-h-[480px] md:h-[640px] bg-black rounded-[2rem] md:rounded-[3rem] border-[6px] md:border-8 border-gray-800 shadow-2xl overflow-hidden flex flex-col">
            
            {/* App Status Bar */}
            <div className="h-10 md:h-12 flex items-center justify-between px-4 md:px-6 z-20 relative bg-black/60 backdrop-blur-md border-b border-white/5 shrink-0">
              <span className="text-[10px] font-bold text-white tracking-widest">TARANG</span>
              <button 
                onClick={() => setShieldActive(!shieldActive)}
                className={`flex items-center gap-2 px-3 py-1 rounded-full transition-all duration-300 ${shieldActive ? 'bg-indigo-600 shadow-[0_0_15px_rgba(79,70,229,0.3)]' : 'bg-gray-800'}`}
              >
                <Shield size={10} className="text-white" />
                <span className="text-[8px] font-bold text-white uppercase">{shieldActive ? 'Strict' : 'Off'}</span>
              </button>
            </div>

            {/* App Content Area */}
            <div className="flex-grow overflow-y-auto custom-scrollbar p-3 space-y-4 bg-black">
               {mockContent.filter(item => activeTab === item.type).map(item => (
                 <div key={item.id} className="relative group animate-in fade-in slide-in-from-bottom-2 duration-500">
                    {/* Filtered Content Placeholder */}
                    {!item.safe && shieldActive ? (
                      <div className="p-4 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md flex flex-col gap-3">
                         <div className="flex items-center gap-2 text-gray-500">
                            <EyeOff size={14} />
                            <span className="text-[10px] font-mono">Hidden: {item.reason}</span>
                         </div>
                         <button className="text-[9px] uppercase font-bold text-indigo-400 self-end hover:text-indigo-300 transition-colors">Show Anyway</button>
                      </div>
                    ) : (
                      <div className={`p-4 rounded-2xl border flex flex-col gap-3 ${!item.safe ? 'bg-red-900/10 border-red-500/20' : 'bg-[#111] border-white/5'}`}>
                         <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                               <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500" />
                               <span className="text-[10px] font-bold text-white">{item.user}</span>
                            </div>
                            <MoreHorizontal size={14} className="text-gray-600" />
                         </div>
                         <p className="text-[11px] text-gray-300 leading-snug">{item.text}</p>
                         {item.img && <img src={item.img} className="rounded-lg w-full h-32 object-cover opacity-80" alt="feed" />}
                         <div className="flex items-center gap-4 text-gray-600 mt-2">
                            <Heart size={14} />
                            <MessageSquare size={14} />
                            <Share2 size={14} />
                         </div>
                      </div>
                    )}
                 </div>
               ))}
            </div>

            {/* App Nav Bar */}
            <div className="h-14 md:h-16 bg-black/80 backdrop-blur-xl border-t border-white/10 flex items-center justify-around px-4 shrink-0">
               <button 
                 onClick={() => setActiveTab('pulse')}
                 className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'pulse' ? 'text-indigo-400' : 'text-gray-500'}`}
               >
                 <Smartphone size={18} />
                 <span className="text-[8px] font-bold uppercase tracking-widest">Pulse</span>
               </button>
               <button 
                 onClick={() => setActiveTab('lens')}
                 className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'lens' ? 'text-indigo-400' : 'text-gray-500'}`}
               >
                 <Aperture size={18} />
                 <span className="text-[8px] font-bold uppercase tracking-widest">Lens</span>
               </button>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
          aria-label="Close Preview"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};