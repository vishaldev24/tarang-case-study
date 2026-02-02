import React from 'react';
import { Aperture, Smartphone, PlusCircle } from 'lucide-react';

export const SystemArchitecture: React.FC = () => {
  return (
    <section id="system" className="w-full py-24 px-4 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-4 block">Core System</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Intent-Based Architecture</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            To eliminate context-switching fatigue, I architected Tarang into three distinct intent-surfaces.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* HOME / PULSE */}
          <div className="group relative">
            <div className="absolute inset-0 bg-indigo-500/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 eco-hidden" />
            <div className="relative glass-panel rounded-3xl p-8 border border-white/5 h-full hover:border-indigo-500/50 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Smartphone className="text-blue-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Home & Pulse</h3>
              <p className="text-xs font-mono text-blue-300 mb-4 uppercase tracking-widest">Context Surface</p>
              <p className="text-gray-300 leading-relaxed text-sm">
                Dedicated surfaces for regional updates and community news.
                <br /><br />
                <span className="text-white font-medium">Goal:</span> Awareness without noise.
                <br />
                <span className="text-white font-medium">Shift:</span> Separating "News" from "Entertainment" prevents cognitive overload.
              </p>
            </div>
          </div>

          {/* LENS */}
          <div className="group relative">
            <div className="absolute inset-0 bg-indigo-500/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 eco-hidden" />
            <div className="relative glass-panel rounded-3xl p-8 border border-white/5 h-full hover:border-indigo-500/50 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Aperture className="text-purple-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Lens</h3>
              <p className="text-xs font-mono text-purple-300 mb-4 uppercase tracking-widest">Immersion Surface</p>
              <p className="text-gray-300 leading-relaxed text-sm">
                A full-screen visual feed for inspiration.
                <br /><br />
                <span className="text-white font-medium">Goal:</span> Leisure & Discovery.
                <br />
                <span className="text-white font-medium">Shift:</span> <strong className="text-white">Hidden public metrics</strong> remove performance anxiety for creators, fostering authentic expression.
              </p>
            </div>
          </div>

          {/* LAUNCHER */}
          <div className="group relative">
            <div className="absolute inset-0 bg-indigo-500/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 eco-hidden" />
            <div className="relative glass-panel rounded-3xl p-8 border border-white/5 h-full hover:border-indigo-500/50 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <PlusCircle className="text-indigo-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Create Launcher</h3>
              <p className="text-xs font-mono text-indigo-300 mb-4 uppercase tracking-widest">Input Logic</p>
              <p className="text-gray-300 leading-relaxed text-sm">
                Unlike apps that prioritize impulsive one-tap posting, the Create button is a deliberate launcher.
                <br /><br />
                <span className="text-white font-medium">Goal:</span> Higher quality contributions.
                <br />
                <span className="text-white font-medium">Shift:</span> Asks for "Content Intent" (Share vs Express) before camera access.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};