import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import HeroMapSection from './components/HeroMapSection';
import MoreThanArchipelago from './components/MoreThanArchipelago';
import IslandsSection from './components/IslandsSection';
import CulturalDiscoveryGrid from './components/CulturalDiscoveryGrid';
import SpotlightShowcase from './components/SpotlightShowcase';
import LivingCultureSection from './components/LivingCultureSection';
import CulturalDetailModal from './components/CulturalDetailModal';
import Footer from './components/Footer';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60 * 24,
    },
  },
});

export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-[#F6F3EB] text-[#2C221E] relative overflow-x-hidden font-sans-ui selection:bg-[#3A2E2B] selection:text-[#F6F3EB]">
        {/* Navigation Bar */}
        <Navbar onSelectItem={(item) => setSelectedItem(item)} />

        <main>
          {/* Hero Map Section */}
          <HeroMapSection onSelectCallout={(item) => setSelectedItem(item)} />

          {/* More Than An Archipelago */}
          <MoreThanArchipelago />

          {/* The Islands Showcase */}
          <IslandsSection onSelectItem={(item) => setSelectedItem(item)} />

          {/* Cultural Discovery Grid */}
          <CulturalDiscoveryGrid onSelectItem={(item) => setSelectedItem(item)} />

          {/* Spotlight Showcase (Rumah Gadang) */}
          <SpotlightShowcase onSelectItem={(item) => setSelectedItem(item)} />

          {/* Living Culture Section */}
          <LivingCultureSection onSelectItem={(item) => setSelectedItem(item)} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Detail Modal */}
        <CulturalDetailModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      </div>
    </QueryClientProvider>
  );
}
