import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { ISLANDS_DATA, CULTURAL_ITEMS } from '../data/nusantaraData';

export default function IslandsSection({ onSelectItem }) {
  const [selectedIsland, setSelectedIsland] = useState('SUMATRA');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const categories = [
    'Semua',
    'Makanan',
    'Bangunan',
    'Musik',
    'Tradisi',
    'Wisata',
    'Kesenian',
    'Lainnya',
  ];

  const currentIslandInfo = ISLANDS_DATA.find((i) => i.id === selectedIsland) || ISLANDS_DATA[0];

  const displayCards = [
    {
      id: 'rendang-card',
      title: 'Rendang',
      category: 'Makanan',
      image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=600&q=80',
      subtitle: 'Makanan'
    },
    {
      id: 'rumah-gadang-card',
      title: 'Rumah Gadang',
      category: 'Bangunan',
      image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=600&q=80',
      subtitle: 'Bangunan'
    },
    {
      id: 'gendang-card',
      title: 'Gendang',
      category: 'Musik',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
      subtitle: 'Musik'
    }
  ];

  return (
    <section id="islands" className="py-20 md:py-28 px-6 md:px-12 bg-[#FAF7F2] border-t border-[#E8DFC9]">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="space-y-1">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#82746A] font-semibold">
            EXPLORE
          </p>
          <h2 className="font-serif-title text-4xl sm:text-5xl font-extrabold text-[#2D211B]">
            The Islands
          </h2>
          <p className="text-xs sm:text-sm text-[#6E6259] font-sans-ui pt-1">
            Pilih pulau untuk menjelajahi kekayaan budayanya.
          </p>
        </div>

        {/* ISLAND TABS BAR MATCHING EXACT DESIGN IMAGE */}
        <div className="bg-[#EFEADF] rounded-xl border border-[#D8CEBE] p-1.5 overflow-x-auto no-scrollbar">
          <div className="flex items-center divide-x divide-[#D8CEBE] min-w-max">
            {ISLANDS_DATA.map((island) => {
              const active = selectedIsland === island.id;
              return (
                <button
                  key={island.id}
                  onClick={() => setSelectedIsland(island.id)}
                  className={`flex-1 flex flex-col items-center justify-center py-3 px-6 transition-all duration-300 ${
                    active
                      ? 'bg-[#FAF7F2] shadow-sm rounded-lg text-[#2D211B]'
                      : 'text-[#75685E] hover:text-[#2D211B] hover:bg-[#FAF7F2]/50'
                  }`}
                >
                  {/* Transparent Island Silhouette Graphic */}
                  <div className="w-10 h-8 mb-1.5 flex items-center justify-center">
                    <svg className="w-8 h-8 fill-current opacity-80" viewBox="0 0 32 32">
                      <path d={island.svgIcon} />
                    </svg>
                  </div>

                  <span className="font-serif-title text-[11px] font-bold tracking-wider uppercase">
                    {island.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* CATEGORY FILTER ("Jenis Budaya") */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          <div className="space-y-2 w-full">
            <p className="text-xs uppercase tracking-widest text-[#82746A] font-semibold">
              Jenis Budaya
            </p>

            {/* Filter Buttons in 2 Rows matching design screenshot */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-[#35251F] text-[#FAF7F2] shadow-sm'
                        : 'bg-[#EFEADF] text-[#5E5248] hover:bg-[#E3DBCB]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* MAIN SHOWCASE CONTAINER (Left Large Card + Right 3 Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-2">
          {/* Left Large Featured Card */}
          <motion.div
            key={currentIslandInfo.id}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-md border border-[#D8CEBE] min-h-[360px] sm:min-h-[420px] flex flex-col justify-end p-8 group"
          >
            <img
              src={currentIslandInfo.featuredImage}
              alt={currentIslandInfo.name}
              className="absolute inset-0 w-full h-full object-cover sepia-card-filter group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#201511] via-[#201511]/50 to-transparent opacity-90" />

            <div className="relative z-10 space-y-3 text-[#FAF7F2]">
              <h3 className="font-serif-title text-4xl sm:text-5xl font-extrabold tracking-tight">
                {currentIslandInfo.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#E2DACB] font-sans-ui max-w-sm">
                {currentIslandInfo.tagline}
              </p>

              <button
                onClick={() => onSelectItem(CULTURAL_ITEMS[0])}
                className="inline-flex items-center gap-2 bg-[#35251F]/90 hover:bg-[#35251F] text-[#FAF7F2] px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors border border-[#FAF7F2]/20"
              >
                <span>Jelajahi Budaya</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Right 3 Cards Container */}
          <div className="lg:col-span-6 relative flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full h-full">
              {displayCards.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onSelectItem(CULTURAL_ITEMS.find(c => c.title === item.title) || item)}
                  className="bg-[#FAF7F2] rounded-xl p-3 border border-[#D8CEBE] shadow-sm hover:shadow-md cursor-pointer transition-all flex flex-col justify-between group"
                >
                  <div className="w-full h-44 sm:h-52 rounded-lg overflow-hidden mb-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover sepia-card-filter group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif-title font-bold text-sm text-[#2D211B]">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#75685E] font-sans-ui pt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Circular Arrow Navigation Button on Far Right Edge */}
            <button
              onClick={() => onSelectItem(CULTURAL_ITEMS[1])}
              className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FAF7F2] shadow-lg border border-[#D8CEBE] flex items-center justify-center text-[#2D211B] hover:bg-[#35251F] hover:text-[#FAF7F2] transition-colors z-20"
              aria-label="Next Item"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
