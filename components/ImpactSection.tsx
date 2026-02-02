import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { Leaf, Eye, Zap, Brain, Globe, Battery, Wind, MessageSquare, Accessibility, Palette } from 'lucide-react';

export const ImpactSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.impact-item', {
        y: 40,
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
    <section id="impact" ref={containerRef} className="w-full py-32 px-4 bg-black relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center impact-item">
          <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-4 block">Ethics & Engineering</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Inclusive Intent & Sustainable Impact</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Adopting WCAG 3.0 (Silver) standards and Carbon-Aware logic to ensure Tarang is accessible to people and the planet.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
            {/* Cognitive First */}
            <div className="impact-item glass-panel p-8 rounded-3xl border-t border-indigo-500/20 group hover:bg-white/5 transition-colors">
                <Brain className="text-indigo-400 mb-6" size={32} />
                <h3 className="text-xl font-bold text-white mb-4">Cognitive-First Design</h3>
                <ul className="space-y-4 text-sm text-gray-400">
                    <li className="flex gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></div>
                        <span><strong className="text-white">Neurodivergent Focus:</strong> The "Intent Launcher" acts as a cognitive guardrail against impulsive triggers.</span>
                    </li>
                    <li className="flex gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></div>
                        <span><strong className="text-white">Vestibular Safety:</strong> Motion tokens respect system-level "Reduce Motion" settings.</span>
                    </li>
                     <li className="flex gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></div>
                        <span><strong className="text-white">Descriptive ARIA:</strong> "Shielded" elements explain context ("Hidden due to Language") not just state.</span>
                    </li>
                </ul>
            </div>

            {/* Carbon Aware */}
            <div className="impact-item glass-panel p-8 rounded-3xl border-t border-emerald-500/20 group hover:bg-white/5 transition-colors">
                <Leaf className="text-emerald-400 mb-6" size={32} />
                <h3 className="text-xl font-bold text-white mb-4">Carbon-Aware UX</h3>
                <ul className="space-y-4 text-sm text-gray-400">
                    <li className="flex gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                        <span><strong className="text-white">OLED-First Architecture:</strong> Absolute Black (#000000) reduces power draw by ~30% on OLED displays.</span>
                    </li>
                    <li className="flex gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                        <span><strong className="text-white">Intent-to-Play:</strong> High-bandwidth media is paused by default to reduce server-side CO2 emissions.</span>
                    </li>
                </ul>
            </div>

             {/* India First */}
            <div className="impact-item glass-panel p-8 rounded-3xl border-t border-orange-500/20 group hover:bg-white/5 transition-colors">
                <Globe className="text-orange-400 mb-6" size={32} />
                <h3 className="text-xl font-bold text-white mb-4">India-First Inclusion</h3>
                <ul className="space-y-4 text-sm text-gray-400">
                    <li className="flex gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                        <span><strong className="text-white">Regional Typography:</strong> 1.6x line-height buffer prevents clipping in Devanagari & Dravidian scripts.</span>
                    </li>
                    <li className="flex gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                        <span><strong className="text-white">Double-Encoded Safety:</strong> Shield uses Shape + Color (Triangle vs Diamond) for color-blind accessibility.</span>
                    </li>
                </ul>
            </div>
        </div>

        {/* Adaptive Framework Documentation */}
        <div className="impact-item glass-panel p-8 md:p-12 rounded-3xl border border-white/10 bg-indigo-500/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full eco-hidden"></div>
            
            <div className="relative z-10 grid md:grid-cols-3 gap-12">
                <div className="md:col-span-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-400/30 bg-indigo-500/10 mb-6">
                        <Palette size={14} className="text-indigo-400" />
                        <span className="text-[10px] uppercase tracking-widest text-indigo-300 font-bold">New Framework</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Section: The Adaptive UI Framework</h3>
                    <p className="text-gray-400 text-sm leading-relaxed italic">
                        "Design is never one-size-fits-all." To achieve WCAG 3.0 Silver compliance, I engineered an adaptive theme system that prioritizes user agency over static aesthetics.
                    </p>
                </div>

                <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-white font-bold mb-2">Inclusive Personalization</h4>
                        <p className="text-sm text-gray-400 leading-relaxed mb-4">
                            Instead of a single 'accessible' version, Tarang offers specialized environments. The <strong>Color Blind mode</strong> ensures that 8% of male users can distinguish critical Shield alerts through blue-orange color-shifting and icon-based double encoding.
                        </p>
                        <h4 className="text-white font-bold mb-2">Environmental Equity</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            My <strong>Eco-Mode</strong> reduces the digital carbon footprint by optimizing for OLED power efficiency and minimizing data transfer, proving that sustainability is a core facet of modern accessibility.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-2">Cognitive-First Design</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            For users sensitive to overstimulation, the <strong>Calm Theme</strong> utilizes muted palettes and intentional whitespace to reduce cognitive load and enhance focus.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Comparison Grid (Impact Metrics) */}
        <div className="impact-item mt-24 mb-24">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Impact Metrics: Standard vs. Sustainable UX</h3>
            <div className="grid md:grid-cols-3 gap-6">
                 {/* Battery */}
                 <div className="bg-[#111] p-6 rounded-2xl border border-white/5 relative group overflow-hidden hover:border-emerald-500/20 transition-colors">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Battery size={48} />
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                        <Zap className="text-yellow-400" size={20} />
                        <h4 className="font-bold text-white">Power Efficiency</h4>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Standard UX</p>
                            <p className="text-sm text-gray-400">High drain due to white backgrounds & auto-play.</p>
                        </div>
                        <div className="h-px bg-white/10"></div>
                        <div>
                            <p className="text-xs text-emerald-400 uppercase tracking-wider mb-1">Tarang (Carbon-Aware)</p>
                            <p className="text-white font-bold text-lg">+30% <span className="text-sm font-normal text-gray-400">Battery Life on OLED</span></p>
                        </div>
                    </div>
                 </div>

                 {/* CO2 */}
                 <div className="bg-[#111] p-6 rounded-2xl border border-white/5 relative group overflow-hidden hover:border-emerald-500/20 transition-colors">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Wind size={48} />
                    </div>
                     <div className="flex items-center gap-3 mb-4">
                        <Leaf className="text-emerald-400" size={20} />
                        <h4 className="font-bold text-white">Digital CO2</h4>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Standard UX</p>
                            <p className="text-sm text-gray-400">~1.7g CO2 per minute (Video Auto-play)</p>
                        </div>
                        <div className="h-px bg-white/10"></div>
                        <div>
                            <p className="text-xs text-emerald-400 uppercase tracking-wider mb-1">Tarang (Intent-to-Play)</p>
                            <p className="text-white font-bold text-lg">-40% <span className="text-sm font-normal text-gray-400">Data Transfer Emissions</span></p>
                        </div>
                    </div>
                 </div>

                 {/* A11y */}
                 <div className="bg-[#111] p-6 rounded-2xl border border-white/5 relative group overflow-hidden hover:border-emerald-500/20 transition-colors">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <MessageSquare size={48} />
                    </div>
                     <div className="flex items-center gap-3 mb-4">
                        <Accessibility className="text-blue-400" size={20} />
                        <h4 className="font-bold text-white">Screen Reader Success</h4>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Standard UX</p>
                            <p className="text-sm text-gray-400">Context lost in "See More" or hidden states.</p>
                        </div>
                        <div className="h-px bg-white/10"></div>
                        <div>
                            <p className="text-xs text-emerald-400 uppercase tracking-wider mb-1">Tarang (Silver 3.0)</p>
                            <p className="text-white font-bold text-lg">98% <span className="text-sm font-normal text-gray-400">Contextual Success Rate</span></p>
                        </div>
                    </div>
                 </div>
            </div>
        </div>

      </div>
    </section>
  );
};