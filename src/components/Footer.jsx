import React from 'react';
import { Compass, ArrowUp, Globe, Share2 } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#EFE9DC] text-[#2C221E] pt-20 pb-12 px-6 md:px-12 border-t border-[#D9CEBE] relative overflow-hidden">
      {/* Indonesia Vector Watermark Pattern Overlay */}
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
        <svg viewBox="0 0 1000 500" className="w-[800px] h-[400px]">
          <path
            d="M 80,180 Q 180,80 280,240 Q 210,320 80,180 Z M 240,360 Q 440,365 320,395 Z M 320,120 Q 480,160 380,280 Z M 520,160 Q 590,190 510,230 Z M 720,180 Q 920,240 790,340 Z"
            fill="none"
            stroke="#2C221E"
            strokeWidth="3"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Left Column Logo & Tagline */}
          <div className="md:col-span-6 space-y-4">
            <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold tracking-[0.2em] text-[#2C221E]">
              NUSANTARA
            </h2>
            <p className="text-sm text-[#6B5E54] font-serif-title italic max-w-md">
              Stories from an archipelago of thousands of cultures.
            </p>
            <div className="w-16 h-[2px] bg-[#A89480]" />
          </div>

          {/* Middle Column Explore Nav */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#7A6C60] font-bold">
              Explore
            </h4>
            <ul className="space-y-2 text-xs font-medium uppercase tracking-wider text-[#5C4F47]">
              <li><a href="#islands" className="hover:text-[#8C4A28] transition-colors">Islands</a></li>
              <li><a href="#cultural-discovery" className="hover:text-[#8C4A28] transition-colors">Cultures</a></li>
              <li><a href="#about" className="hover:text-[#8C4A28] transition-colors">About</a></li>
            </ul>
          </div>

          {/* Right Column Social Links & Back to top */}
          <div className="md:col-span-3 space-y-4 flex flex-col items-start md:items-end justify-between">
            <div className="flex items-center space-x-4">
              <a
                href="#hero"
                className="w-9 h-9 rounded-full border border-[#D9CEBE] bg-[#F6F3EB] hover:bg-[#3A2E2B] hover:text-[#F6F3EB] flex items-center justify-center transition-colors text-[#2C221E]"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#cultural-discovery"
                className="w-9 h-9 rounded-full border border-[#D9CEBE] bg-[#F6F3EB] hover:bg-[#3A2E2B] hover:text-[#F6F3EB] flex items-center justify-center transition-colors text-[#2C221E]"
                aria-label="Share"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <button
                onClick={scrollToTop}
                className="w-9 h-9 rounded-full border border-[#D9CEBE] bg-[#F6F3EB] hover:bg-[#3A2E2B] hover:text-[#F6F3EB] flex items-center justify-center transition-colors text-[#2C221E]"
                aria-label="Back to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-[#D9CEBE] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#7A6C60] gap-4">
          <p>© 2026 NUSANTARA. All rights reserved.</p>
          <p className="font-serif-title italic text-xs text-[#5C4F47]">
            Melestarikan Kebudayaan Indonesia untuk Masa Depan.
          </p>
        </div>
      </div>
    </footer>
  );
}
