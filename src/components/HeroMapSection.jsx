import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass } from 'lucide-react';
import { animate } from 'animejs';
import ThreeCanvasBackground from './ThreeCanvasBackground';
import { HERO_MAP_CALLOUTS } from '../data/nusantaraData';

export default function HeroMapSection({ onSelectCallout }) {
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      animate(headingRef.current, {
        opacity: [0, 1],
        translateY: [25, 0],
        duration: 1200,
        ease: 'outExpo',
        delay: 150,
      });
    }
  }, []);

  return (
    <section id="hero" className="relative pt-24 md:pt-32 pb-16 px-6 md:px-12 overflow-hidden bg-[#FAF7F2]">
      {/* Three.js Subtle Ambient Background Canvas */}
      <ThreeCanvasBackground />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* TOP ROW LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8 md:mb-12">
          {/* Top Left: Title & Subtitle */}
          <div className="lg:col-span-6 space-y-3">
            <p className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-[#7D6D63] font-semibold">
              EXPLORE THE DIVERSE CULTURE OF
            </p>

            <h1
              ref={headingRef}
              className="font-serif-title text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#2D211B] leading-none"
            >
              NUSANTARA
            </h1>

            <div className="text-base sm:text-lg font-serif-title italic text-[#75685E] pt-1 leading-snug">
              <p>More than islands,</p>
              <p>it's a thousand stories.</p>
            </div>
          </div>

          {/* Top Right: Prambanan Card + Descriptive Paragraph + CTA */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-2">
            {/* Prambanan Callout Card */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="w-16 h-20 rounded-t-full rounded-b-md overflow-hidden border border-[#D8CEBE] shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=300&q=80"
                  alt="Candi Prambanan"
                  className="w-full h-full object-cover sepia-card-filter"
                />
              </div>
              <div className="text-xs">
                <h4 className="font-serif-title font-bold text-[#2D211B] text-sm">
                  Candi Prambanan
                </h4>
                <p className="text-[#82746A] italic">Jawa</p>
              </div>
            </div>

            {/* Paragraph & Mulai Jelajahi Link */}
            <div className="space-y-3 max-w-sm text-xs text-[#5E5248] leading-relaxed">
              <p>
                Dari Sabang sampai Merauke, setiap pulau di Indonesia menyimpan keunikan budaya yang beda. Mari jelajahi tembikar, ukiran, arsitektur, musik, dan kehidupannya.
              </p>
              <div className="pt-1">
                <a
                  href="#islands"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#2D211B] hover:text-[#8C4A28] transition-colors group"
                >
                  <span className="w-6 h-[1px] bg-[#2D211B] group-hover:w-8 transition-all" />
                  <span>Mulai Jelajahi</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* HERO MAP DISPLAY AREA (Cutout Image Floating directly on background) */}
        <div className="relative w-full min-h-[440px] md:min-h-[580px] flex items-center justify-center my-4">
          {/* Main Archipelago Map Image Cutout */}
          <div className="relative w-full max-w-5xl h-[360px] md:h-[500px]">
            <img
              src="/images/indonesia_map.jpg"
              alt="Peta Indonesia Nusantara"
              className="w-full h-full object-contain sepia-card-filter mix-blend-multiply opacity-90 filter drop-shadow-lg"
            />

            {/* MAP CALLOUT PIN CARDS EXACTLY AS IN DESIGN IMAGE */}

            {/* 1. Rumah Gadang / Sumatra (Top Left above Sumatra) */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onClick={() => onSelectCallout(HERO_MAP_CALLOUTS[1])}
              className="absolute top-[18%] left-[18%] sm:left-[22%] z-20 group cursor-pointer flex flex-col items-center"
            >
              <div className="bg-[#FAF7F2]/95 backdrop-blur-sm p-1.5 rounded-lg border border-[#D8CEBE] shadow-md flex items-center gap-2 group-hover:border-[#35251F] transition-all">
                <img
                  src={HERO_MAP_CALLOUTS[1].image}
                  alt="Rumah Gadang"
                  className="w-10 h-10 rounded object-cover sepia-card-filter"
                />
                <div className="pr-1 text-[11px] leading-tight">
                  <p className="font-serif-title font-bold text-[#2D211B]">Rumah Gadang</p>
                  <p className="text-[9px] text-[#75685E]">Sumatra</p>
                </div>
              </div>
              <div className="w-[1px] h-8 bg-[#35251F]/40" />
              <div className="w-2 h-2 rounded-full bg-[#35251F] ring-4 ring-[#35251F]/20" />
            </motion.div>

            {/* 2. Rendang / Sumatra (Bottom Left below Sumatra) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              onClick={() => onSelectCallout(HERO_MAP_CALLOUTS[2])}
              className="absolute bottom-[10%] left-[8%] sm:left-[12%] z-20 group cursor-pointer flex flex-col items-center"
            >
              <div className="w-2 h-2 rounded-full bg-[#35251F] ring-4 ring-[#35251F]/20" />
              <div className="w-[1px] h-8 bg-[#35251F]/40" />
              <div className="bg-[#FAF7F2]/95 backdrop-blur-sm p-1.5 rounded-lg border border-[#D8CEBE] shadow-md flex items-center gap-2 group-hover:border-[#35251F] transition-all">
                <img
                  src={HERO_MAP_CALLOUTS[2].image}
                  alt="Rendang"
                  className="w-10 h-10 rounded object-cover sepia-card-filter"
                />
                <div className="pr-1 text-[11px] leading-tight">
                  <p className="font-serif-title font-bold text-[#2D211B]">Rendang</p>
                  <p className="text-[9px] text-[#75685E]">Sumatra</p>
                </div>
              </div>
            </motion.div>

            {/* 3. Candi Prambanan / Jawa (Top of Java Island) */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              onClick={() => onSelectCallout(HERO_MAP_CALLOUTS[0])}
              className="absolute top-[8%] left-[45%] sm:left-[48%] z-20 group cursor-pointer flex flex-col items-center"
            >
              <div className="bg-[#FAF7F2]/95 backdrop-blur-sm p-1.5 rounded-lg border border-[#D8CEBE] shadow-md flex items-center gap-2 group-hover:border-[#35251F] transition-all">
                <img
                  src={HERO_MAP_CALLOUTS[0].image}
                  alt="Candi Prambanan"
                  className="w-10 h-10 rounded object-cover sepia-card-filter"
                />
                <div className="pr-1 text-[11px] leading-tight">
                  <p className="font-serif-title font-bold text-[#2D211B]">Candi Prambanan</p>
                  <p className="text-[9px] text-[#75685E]">Jawa</p>
                </div>
              </div>
              <div className="w-[1px] h-12 bg-[#35251F]/40" />
              <div className="w-2 h-2 rounded-full bg-[#35251F] ring-4 ring-[#35251F]/20" />
            </motion.div>

            {/* 4. Tari Kecak / Bali (Bottom of Bali) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              onClick={() => onSelectCallout(HERO_MAP_CALLOUTS[3])}
              className="absolute bottom-[8%] left-[34%] sm:left-[38%] z-20 group cursor-pointer flex flex-col items-center"
            >
              <div className="w-2 h-2 rounded-full bg-[#35251F] ring-4 ring-[#35251F]/20" />
              <div className="w-[1px] h-10 bg-[#35251F]/40" />
              <div className="bg-[#FAF7F2]/95 backdrop-blur-sm p-1.5 rounded-lg border border-[#D8CEBE] shadow-md flex items-center gap-2 group-hover:border-[#35251F] transition-all">
                <img
                  src={HERO_MAP_CALLOUTS[3].image}
                  alt="Tari Kecak"
                  className="w-10 h-10 rounded object-cover sepia-card-filter"
                />
                <div className="pr-1 text-[11px] leading-tight">
                  <p className="font-serif-title font-bold text-[#2D211B]">Tari Kecak</p>
                  <p className="text-[9px] text-[#75685E]">Bali</p>
                </div>
              </div>
            </motion.div>

            {/* 5. Angklung / West Papua (Right side of Papua) */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              onClick={() => onSelectCallout(HERO_MAP_CALLOUTS[4])}
              className="absolute top-[22%] right-[8%] sm:right-[12%] z-20 group cursor-pointer flex flex-col items-center"
            >
              <div className="bg-[#FAF7F2]/95 backdrop-blur-sm p-1.5 rounded-lg border border-[#D8CEBE] shadow-md flex items-center gap-2 group-hover:border-[#35251F] transition-all">
                <img
                  src={HERO_MAP_CALLOUTS[4].image}
                  alt="Angklung"
                  className="w-10 h-10 rounded object-cover sepia-card-filter"
                />
                <div className="pr-1 text-[11px] leading-tight">
                  <p className="font-serif-title font-bold text-[#2D211B]">Angklung</p>
                  <p className="text-[9px] text-[#75685E]">West Papua</p>
                </div>
              </div>
              <div className="w-[1px] h-14 bg-[#35251F]/40" />
              <div className="w-2 h-2 rounded-full bg-[#35251F] ring-4 ring-[#35251F]/20" />
            </motion.div>

            {/* Bottom Right Coordinates Badge Overlay */}
            <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 flex items-center gap-2.5 text-[#5E5248]">
              <Compass className="w-6 h-6 stroke-[1.5] text-[#35251F]" />
              <div className="font-mono text-[11px] leading-tight">
                <p className="font-bold text-[#2D211B]">0.7893° S</p>
                <p className="text-[10px] text-[#75685E]">113.9213° E</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
