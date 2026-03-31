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
import { PivotCallout } from './components/PivotCallout';
import { ImageModal } from './components/ImageModal';

import { LivePreviewModal } from './components/LivePreviewModal';
import { PhaseTwoRoadmap } from './components/PhaseTwoRoadmap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const [theme, setTheme] = useState('light');
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [imageModal, setImageModal] = useState<{open: boolean, src: string, title: string}>({open: false, src: '', title: ''});

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
      <main className="relative z-10 flex flex-col items-center w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-[140px] md:pb-[124px]">
        <section id="home" className="w-full pb-[100px] md:pb-[100px]">
          <Hero onLaunchDemo={() => setIsDemoOpen(true)} />
        </section>

        <section id="strategy" className="w-full pb-[100px] md:pb-[100px]">
          <BentoGrid />
        </section>
        <section id="shield" className="w-full pb-[100px] md:pb-[100px]">
          <PivotCallout />
          <ShieldSection />
        </section>
        <section id="system" className="w-full pb-[100px] md:pb-[100px]">
          <SystemArchitecture />
        </section>
        <section id="impact" className="w-full pb-[100px] md:pb-[100px]">
          <ProcessGrit />
          <DesignSystem />
          <ImpactSection />
        </section>
        <section id="gallery" className="w-full py-20 md:py-28 mb-20 md:mb-28 pb-[100px] md:pb-[100px]">
          <Gallery openImageModal={(src, title) => setImageModal({open: true, src, title})} />
        </section>
        <section id="about" className="w-full pb-[100px] md:pb-[100px]">
          <PhaseTwoRoadmap />
        </section>
      </main>

      {/* High-Fidelity Prototype Modal */}
      <LivePreviewModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        theme={theme} 
      />
      
      {/* Gallery Image Modal */}
      <ImageModal 
        isOpen={imageModal.open}
        onClose={() => setImageModal({open: false, src: '', title: ''})}
        imageSrc={imageModal.src}
        imageTitle={imageModal.title}
      />

      {/* Navigation */}
      <Navigation onLaunchDemo={() => setIsDemoOpen(true)} />

    </div>
  );
};

export default App;

