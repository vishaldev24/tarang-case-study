import React from 'react';
import { Zap } from 'lucide-react';

export const PivotCallout: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-20 relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="glass-panel rounded-3xl p-8 md:p-12 border-l-4 border-indigo-500">
          <div className="flex items-start gap-3 mb-6">
            <Zap className="text-indigo-400 mt-1 flex-shrink-0" size={20} />
            <span className="text-[11px] md:text-xs uppercase tracking-[0.3em] font-bold text-indigo-400">⚡ THE PIVOT</span>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-4">
              I started this project believing the solution was simple — remove the algorithm entirely. But halfway through I realized I had just built another Instagram with a different color scheme. The algorithm wasn't the problem. The lack of user control over it was.
            </p>
            
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              So I shifted the design direction. Instead of eliminating algorithmic curation, I built Shield — a system that puts the filtering logic in the user's hands. The platform suggests. The user decides. That one realization changed the entire product architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

