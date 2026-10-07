import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bookmark, Share2, Sparkles, MapPin, Layers, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CulturalDetailModal({ item, onClose }) {
  const [bookmarked, setBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!item) return null;

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    if (!bookmarked) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#c8aa82', '#3a2e2b', '#8c4a28']
      });
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-[#1F1815]/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#F6F3EB] w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-[#D9CEBE] relative flex flex-col md:flex-row my-auto"
        >
          {/* Close Button Top Right */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#F6F3EB]/80 backdrop-blur-md text-[#2C221E] flex items-center justify-center shadow-md hover:bg-[#3A2E2B] hover:text-[#F6F3EB] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Side High Res Image Container */}
          <div className="md:w-1/2 relative h-64 md:h-auto min-h-[300px]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover sepia-card-filter"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F1815]/80 via-transparent to-transparent md:hidden" />
            <div className="absolute bottom-4 left-4 md:hidden text-[#F6F3EB]">
              <h3 className="font-serif-title text-2xl font-bold">{item.title}</h3>
              <p className="text-xs text-[#D6CBB8] font-sans-ui">{item.region}</p>
            </div>
          </div>

          {/* Right Side Info Details */}
          <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#EAE2D5] text-[#8C4A28] text-xs font-semibold uppercase tracking-wider">
                  {item.category || 'Kebudayaan'}
                </span>
                <span className="text-xs text-[#7A6C60] flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {item.region || item.subtitle || 'Indonesia'}
                </span>
              </div>

              <h2 className="hidden md:block font-serif-title text-3xl font-extrabold text-[#2C221E]">
                {item.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#5C4F47] leading-relaxed font-sans-ui">
                {item.description || 'Warisan kebudayaan autentik Indonesia yang telah diwariskan dari generasi ke generasi sebagai identitas bangsa.'}
              </p>

              {/* Specifications Box */}
              <div className="bg-[#EFE9DC] p-4 rounded-2xl border border-[#D9CEBE] space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#8C7B6B] font-medium">Kategori Utama</span>
                  <span className="font-semibold text-[#2C221E]">{item.architecture || item.category || 'Warisan Budaya'}</span>
                </div>
                <div className="flex items-center justify-between border-t border-[#D9CEBE] pt-2">
                  <span className="text-[#8C7B6B] font-medium">Bahan / Elemen</span>
                  <span className="font-semibold text-[#2C221E] truncate max-w-[180px]">{item.material || 'Alami & Tradisional'}</span>
                </div>
                <div className="flex items-center justify-between border-t border-[#D9CEBE] pt-2">
                  <span className="text-[#8C7B6B] font-medium">Filosofi & Makna</span>
                  <span className="font-semibold text-[#8C4A28] truncate max-w-[180px]">{item.meaning || item.significance || 'Simbol Kebijaksanaan'}</span>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between pt-4 border-t border-[#E2DACB]">
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleBookmark}
                  className={`p-2.5 rounded-full border transition-all ${
                    bookmarked
                      ? 'bg-[#8C4A28] text-[#F6F3EB] border-[#8C4A28]'
                      : 'border-[#D9CEBE] text-[#2C221E] hover:bg-[#EAE2D5]'
                  }`}
                  title="Simpan Kebudayaan Ini"
                >
                  <Bookmark className="w-4 h-4" />
                </button>
                <button
                  onClick={handleShare}
                  className="p-2.5 rounded-full border border-[#D9CEBE] text-[#2C221E] hover:bg-[#EAE2D5] transition-colors flex items-center gap-1.5 text-xs font-medium"
                  title="Bagikan"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                  <span>{copied ? 'Tersalin' : 'Bagikan'}</span>
                </button>
              </div>

              <button
                onClick={onClose}
                className="bg-[#3A2E2B] hover:bg-[#291F1C] text-[#F6F3EB] px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
