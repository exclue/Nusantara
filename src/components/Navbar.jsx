import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Volume2, VolumeX, Sparkles, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CULTURAL_ITEMS } from '../data/nusantaraData';

export default function Navbar({ onSelectItem }) {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredSearch = searchQuery.trim() === ''
    ? CULTURAL_ITEMS.slice(0, 4)
    : CULTURAL_ITEMS.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.region.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const toggleSound = () => {
    setIsPlayingSound(!isPlayingSound);
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Islands', href: '#islands' },
    { name: 'Cultures', href: '#cultural-discovery' },
    { name: 'About', href: '#about' },
  ];

  const handleNavClick = (href, name) => {
    setActiveTab(name);
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#F6F3EB]/90 backdrop-blur-md border-b border-[#E2DACB] py-4 shadow-sm'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-2 text-2xl md:text-3xl font-cinzel font-bold tracking-[0.2em] text-[#2C221E]"
          >
            <span className="relative">
              NUSANTARA
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#3A2E2B] transition-all duration-300 group-hover:w-full" />
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href, link.name)}
                className={`relative text-sm tracking-wider uppercase font-medium transition-colors duration-300 ${
                  activeTab === link.name
                    ? 'text-[#2C221E]'
                    : 'text-[#7A6C60] hover:text-[#2C221E]'
                }`}
              >
                {link.name}
                {activeTab === link.name && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#2C221E]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              title={isPlayingSound ? "Mute Gamelan Ambient" : "Play Gamelan Ambient"}
              className="p-2 rounded-full border border-[#D9CEBE] text-[#4A3E38] hover:bg-[#EAE2D5] transition-all duration-300 flex items-center gap-1.5 text-xs font-mono"
            >
              {isPlayingSound ? (
                <>
                  <Volume2 className="w-4 h-4 text-[#8C4A28] animate-pulse" />
                  <span className="hidden sm:inline text-[10px] text-[#8C4A28]">GAMELAN ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-[#7A6C60]" />
                  <span className="hidden sm:inline text-[10px] text-[#7A6C60]">SOUND</span>
                </>
              )}
            </button>

            {/* Search Trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-full hover:bg-[#EAE2D5] text-[#2C221E] transition-colors"
              aria-label="Cari Kebudayaan"
            >
              <Search className="w-5 h-5 stroke-[1.8]" />
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-full hover:bg-[#EAE2D5] text-[#2C221E] transition-colors"
              aria-label="Toggle Menu"
            >
              <Menu className="w-6 h-6 stroke-[1.8]" />
            </button>
          </div>
        </div>
      </header>

      {/* SEARCH OVERLAY MODAL */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#2C221E]/60 backdrop-blur-md flex items-start justify-center pt-20 px-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: -20 }}
              className="bg-[#F6F3EB] w-full max-w-2xl rounded-2xl p-6 shadow-2xl border border-[#D9CEBE] relative overflow-hidden"
            >
              <div className="flex items-center justify-between border-b border-[#E2DACB] pb-4 mb-4">
                <div className="flex items-center gap-3 w-full">
                  <Search className="w-5 h-5 text-[#8C7B6B]" />
                  <input
                    type="text"
                    placeholder="Cari kebudayaan, tari, makanan, candi..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent text-lg text-[#2C221E] outline-none placeholder:text-[#9E9084] font-sans-ui"
                    autoFocus
                  />
                </div>
                <button
                  onClick={() => setSearchOpen(false)}
                  className="p-1 rounded-full hover:bg-[#EAE2D5] text-[#5C4F47]"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="max-h-[360px] overflow-y-auto space-y-3 pr-2">
                <p className="text-xs uppercase tracking-widest text-[#8C7B6B] font-semibold mb-2">
                  {searchQuery ? 'Hasil Pencarian' : 'Rekomendasi Kebudayaan'}
                </p>
                {filteredSearch.length > 0 ? (
                  filteredSearch.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        onSelectItem(item);
                        setSearchOpen(false);
                      }}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#EAE2D5] cursor-pointer transition-all duration-200 border border-transparent hover:border-[#D0C4B4]"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-14 h-14 rounded-lg object-cover sepia-card-filter"
                      />
                      <div className="flex-1">
                        <h4 className="font-serif-title font-semibold text-[#2C221E] text-base">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#7A6C60] flex items-center gap-2">
                          <span>{item.region}</span>
                          <span>•</span>
                          <span className="px-2 py-0.5 rounded bg-[#E2DACB] text-[#4A3E38] font-medium text-[10px]">
                            {item.category}
                          </span>
                        </p>
                      </div>
                      <Sparkles className="w-4 h-4 text-[#A89480]" />
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-[#8C7B6B] py-8 text-center">
                    Tidak ditemukan kebudayaan dengan kata kunci "{searchQuery}"
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE / MENU DRAWER */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#2C221E]/60 backdrop-blur-sm flex justify-end"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="bg-[#F6F3EB] w-full max-w-sm h-full p-8 flex flex-col justify-between shadow-2xl border-l border-[#D9CEBE]"
            >
              <div>
                <div className="flex items-center justify-between pb-8 border-b border-[#E2DACB]">
                  <span className="font-cinzel text-xl font-bold tracking-widest text-[#2C221E]">
                    NUSANTARA
                  </span>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-[#EAE2D5] text-[#2C221E]"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="mt-10 flex flex-col space-y-6">
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link.href, link.name)}
                      className="text-left font-serif-title text-2xl text-[#2C221E] hover:text-[#8C4A28] transition-colors flex items-center justify-between group"
                    >
                      <span>{link.name}</span>
                      <Compass className="w-5 h-5 text-[#8C7B6B] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </nav>
              </div>

              <div className="border-t border-[#E2DACB] pt-6 text-xs text-[#8C7B6B] space-y-2">
                <p className="font-serif-title italic text-sm text-[#4A3E38]">
                  "More than islands, it's a thousand stories."
                </p>
                <p>© 2026 NUSANTARA. Warisan Kebudayaan Indonesia.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
