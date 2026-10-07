import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { MASONRY_GRID } from '../data/nusantaraData';

export default function CulturalDiscoveryGrid({ onSelectItem }) {
  return (
    <section id="cultural-discovery" className="py-24 md:py-36 px-6 md:px-12 bg-[#F6F3EB] relative border-t border-[#E2DACB]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <p className="text-xs uppercase tracking-[0.25em] text-[#7A6C60] font-semibold">
              CULTURAL DISCOVERY
            </p>
            <h2 className="font-serif-title text-4xl sm:text-5xl font-extrabold text-[#2C221E] tracking-tight">
              Jelajahi Setiap Keunikan
            </h2>
          </div>

          <p className="text-sm md:text-base text-[#6B5E54] font-sans-ui max-w-md">
            Setiap budaya memiliki cerita, setiap cerita adalah bagian dari identitas kita.
          </p>
        </div>

        {/* Masonry Grid Layout matching exact reference image design */}
        <div className="grid grid-cols-12 gap-6">
          {MASONRY_GRID.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => onSelectItem(card)}
              className={`${card.span} relative rounded-3xl overflow-hidden shadow-lg border border-[#D9CEBE] group cursor-pointer`}
            >
              {/* Card Image */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover sepia-card-filter group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1815]/90 via-[#1F1815]/30 to-transparent" />

              {/* Content Box */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-[#F6F3EB]">
                <div className="flex items-end justify-between">
                  <div className="space-y-1">
                    <h3 className="font-serif-title text-xl sm:text-2xl font-bold">
                      {card.title}
                    </h3>
                    <p className="text-xs text-[#D6CBB8] font-sans-ui font-medium">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Circular Arrow Button Icon */}
                  <div className="w-10 h-10 rounded-full bg-[#F6F3EB]/20 backdrop-blur-md flex items-center justify-center text-[#F6F3EB] group-hover:bg-[#F6F3EB] group-hover:text-[#2C221E] transition-all duration-300 flex-shrink-0">
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
