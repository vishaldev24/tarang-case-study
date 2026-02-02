import React, { useEffect, useState } from 'react';
import { ThreeBackground } from './components/ThreeBackground';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ShieldSection } from './components/ShieldSection';
import { BentoGrid } from './components/BentoGrid';
import { SystemArchitecture } from './components/SystemArchitecture';
import { ProcessGrit } from './components/ProcessGrit';
import { DesignSystem } from './components/DesignSystem';
import { ImpactSection } from './components/ImpactSection';
import { Gallery } from './components/Gallery';
import { ThemeToggle } from './components/ThemeToggle';
import { PortfolioNarrative } from './components/PortfolioNarrative';
import { LivePreviewModal } from './components/LivePreviewModal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const [theme, setTheme] = useState('dark');
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="relative w-full min-h-screen bg-black text-white selection:bg-indigo-500 selection:text-white transition-colors duration-500">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
        <ThreeBackground theme={theme} />
      </div>

      {/* Floating Theme Toggle */}
      <ThemeToggle currentTheme={theme} setTheme={setTheme} />

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <Hero onLaunchDemo={() => setIsDemoOpen(true)} />
        <PortfolioNarrative />
        <BentoGrid />
        <ShieldSection />
        <SystemArchitecture />
        <ProcessGrit />
        <DesignSystem />
        <ImpactSection />
        <Gallery />
      </main>

      {/* High-Fidelity Prototype Modal */}
      <LivePreviewModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        theme={theme} 
      />

      {/* Navigation */}
      <Navigation onLaunchDemo={() => setIsDemoOpen(true)} />
    </div>
  );
};

export default App;