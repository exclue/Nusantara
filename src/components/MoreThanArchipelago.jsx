import React from 'react';
import { motion } from 'framer-motion';

export default function MoreThanArchipelago() {
  return (
    <section id="about" className="py-24 md:py-36 px-6 md:px-12 bg-[#F6F3EB] relative overflow-hidden border-t border-[#E2DACB]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            <h2 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2C221E] tracking-tight leading-[1.1]">
              INDONESIA IS MORE THAN AN ARCHIPELAGO.
            </h2>

            <p className="text-base sm:text-lg text-[#5C4F47] leading-relaxed font-sans-ui max-w-xl">
              Setiap pulau menyimpan cara manusia membangun rumah, memasak makanan, memainkan musik, menyatukan kehidupan, dan mewariskan cerita.
            </p>

            <div className="w-16 h-[2px] bg-[#A89480]" />

            <div className="space-y-1 pt-2">
              <h3 className="font-serif-title text-2xl sm:text-3xl font-bold tracking-wider text-[#2C221E]">
                7 ISLANDS,
              </h3>
              <h3 className="font-serif-title text-2xl sm:text-3xl font-bold tracking-wider text-[#8C4A28]">
                THOUSANDS OF STORIES.
              </h3>
            </div>
          </motion.div>

          {/* Right Column Featured Portrait Image & Ornamental Motif Overlay */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-6 relative flex justify-center"
          >
            {/* Ornamental Geometric Motif Graphic Overlay */}
            <div className="absolute -left-6 bottom-12 z-20 hidden md:block">
              <div className="w-24 h-24 border-2 border-[#C8B8A6] rotate-45 flex items-center justify-center bg-[#F6F3EB]/90 backdrop-blur-sm p-3 shadow-md">
                <div className="w-full h-full border border-[#8C7B6B] rotate-45 flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#3A2E2B]" />
                </div>
              </div>
            </div>

            {/* Featured Image Container */}
            <div className="relative w-full max-w-lg h-[460px] sm:h-[560px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#EAE2D5] group">
              <img
                src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80"
                alt="Balinese Traditional Dance"
                className="w-full h-full object-cover sepia-card-filter group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C221E]/60 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 text-[#F6F3EB] space-y-1">
                <span className="text-[10px] font-mono tracking-widest uppercase bg-[#3A2E2B]/80 px-2.5 py-1 rounded backdrop-blur-sm">
                  KEBUDAYAAN BALI
                </span>
                <p className="font-serif-title text-xl font-bold pt-1">
                  Keagungan Seni Tari Pendet & Kecak
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
