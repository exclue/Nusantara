import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { LIVING_CULTURE_CARDS } from '../data/nusantaraData';

export default function LivingCultureSection({ onSelectItem }) {
  return (
    <section className="py-24 md:py-36 px-6 md:px-12 bg-[#F6F3EB] relative border-t border-[#E2DACB]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <p className="text-xs uppercase tracking-[0.25em] text-[#7A6C60] font-semibold">
              LIVING CULTURE
            </p>
            <h2 className="font-serif-title text-4xl sm:text-5xl font-extrabold text-[#2C221E] tracking-tight">
              Budaya yang Masih Hidup
            </h2>
          </div>

          <p className="text-sm md:text-base text-[#6B5E54] font-sans-ui max-w-md">
            Bukan hanya untuk dilihat, tapi untuk dirasakan, dipahami, dan dilestarikan.
          </p>
        </div>

        {/* 4 Cards Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LIVING_CULTURE_CARDS.map((card, idx) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => onSelectItem({
                title: card.title,
                category: card.category,
                image: card.image,
                description: card.description,
                region: 'Indonesia'
              })}
              className="relative rounded-3xl overflow-hidden shadow-lg border border-[#D9CEBE] h-[360px] group cursor-pointer flex flex-col justify-between p-6"
            >
              {/* Background Card Image */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover sepia-card-filter group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1815] via-[#1F1815]/40 to-transparent" />

              {/* Number Tag Top */}
              <div className="relative z-10 font-mono text-xs font-bold text-[#E2DACB]">
                {card.number}
              </div>

              {/* Card Footer Content */}
              <div className="relative z-10 space-y-2 text-[#F6F3EB]">
                <h3 className="font-serif-title text-xl font-bold">
                  {card.title}
                </h3>
                <p className="text-xs text-[#D6CBB8] font-sans-ui">
                  {card.category}
                </p>

                <div className="pt-2 flex justify-end">
                  <div className="w-9 h-9 rounded-full bg-[#F6F3EB]/20 backdrop-blur-md flex items-center justify-center text-[#F6F3EB] group-hover:bg-[#F6F3EB] group-hover:text-[#2C221E] transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
