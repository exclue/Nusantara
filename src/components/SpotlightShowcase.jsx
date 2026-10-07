import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronUp, ChevronDown, RotateCcw } from 'lucide-react';
import { SPOTLIGHT_ITEMS } from '../data/nusantaraData';

export default function SpotlightShowcase({ onSelectItem }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentItem = SPOTLIGHT_ITEMS[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % SPOTLIGHT_ITEMS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + SPOTLIGHT_ITEMS.length) % SPOTLIGHT_ITEMS.length);
  };

  return (
    <section className="py-24 md:py-36 px-6 md:px-12 bg-[#EFE9DC] relative border-t border-[#D9CEBE] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Navigation & Counter Header */}
        <div className="flex items-center justify-between border-b border-[#D9CEBE] pb-6">
          <button
            onClick={handlePrev}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5C4F47] hover:text-[#2C221E] transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Kembali</span>
          </button>

          <div className="font-mono text-xs tracking-widest text-[#7A6C60]">
            <span className="font-bold text-[#2C221E]">{activeIndex + 1}</span> / {SPOTLIGHT_ITEMS.length}
          </div>
        </div>

        {/* MAIN FEATURED SHOWCASE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column Featured Image & Geometric Frame Accent */}
          <div className="lg:col-span-6 relative">
            {/* Geometric Ornamental Border Frame */}
            <div className="absolute -top-4 -left-4 w-28 h-28 border-l-2 border-t-2 border-[#C8B8A6] pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-28 h-28 border-r-2 border-b-2 border-[#C8B8A6] pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#F6F3EB] h-[380px] sm:h-[480px]"
              >
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="w-full h-full object-cover sepia-card-filter"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C221E]/40 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Center Info Content */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="font-serif-title text-4xl sm:text-5xl font-extrabold text-[#2C221E] tracking-tight">
                    {currentItem.title}
                  </h2>
                  <p className="text-xs uppercase tracking-widest text-[#8C7B6B] font-semibold pt-2">
                    {currentItem.subtitle}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#5C4F47] leading-relaxed font-sans-ui">
                  {currentItem.description}
                </p>

                {/* Specs List */}
                <div className="space-y-3 pt-2 border-t border-[#D9CEBE]">
                  <div className="grid grid-cols-3 text-xs gap-2 py-1">
                    <span className="text-[#8C7B6B] font-medium">Arsitektur</span>
                    <span className="col-span-2 text-[#2C221E] font-semibold">: {currentItem.specs.architecture}</span>
                  </div>
                  <div className="grid grid-cols-3 text-xs gap-2 py-1 border-t border-[#D9CEBE]">
                    <span className="text-[#8C7B6B] font-medium">Material</span>
                    <span className="col-span-2 text-[#2C221E] font-semibold">: {currentItem.specs.material}</span>
                  </div>
                  <div className="grid grid-cols-3 text-xs gap-2 py-1 border-t border-[#D9CEBE]">
                    <span className="text-[#8C7B6B] font-medium">Makna</span>
                    <span className="col-span-2 text-[#2C221E] font-semibold">: {currentItem.specs.meaning}</span>
                  </div>
                </div>

                <button
                  onClick={() => onSelectItem(currentItem)}
                  className="inline-flex items-center gap-3 bg-[#3A2E2B] hover:bg-[#291F1C] text-[#F6F3EB] px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md group"
                >
                  <span>{currentItem.buttonText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Vertical Thumbnail Strip */}
          <div className="lg:col-span-1 flex lg:flex-col items-center justify-center gap-3">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full hover:bg-[#D9CEBE] text-[#2C221E] transition-colors"
              aria-label="Previous Spotlight"
            >
              <ChevronUp className="w-5 h-5 hidden lg:block" />
            </button>

            {SPOTLIGHT_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`relative w-12 h-12 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  activeIndex === idx
                    ? 'border-[#3A2E2B] scale-110 shadow-md'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover sepia-card-filter"
                />
              </button>
            ))}

            <button
              onClick={handleNext}
              className="p-2 rounded-full hover:bg-[#D9CEBE] text-[#2C221E] transition-colors"
              aria-label="Next Spotlight"
            >
              <ChevronDown className="w-5 h-5 hidden lg:block" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
