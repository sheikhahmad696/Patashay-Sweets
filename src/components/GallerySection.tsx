import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/bakeryData';
import { GalleryItem } from '../types/bakery';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'All Photos' },
    { id: 'patashay', label: 'Crisp Patashay' },
    { id: 'craft', label: 'Hand-Lamination' },
    { id: 'boxes', label: 'Keepsake Boxes' },
    { id: 'boutique', label: 'Bahawalpur Boutique' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#F5EFEB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#A57822] uppercase mb-3">
              <span className="w-6 h-[1.5px] bg-[#C99738]" />
              <span>Visual Journey</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#22130C]">
              The Bakery Gallery
            </h2>
            <p className="text-[#6B5547] text-sm sm:text-base mt-2 max-w-lg">
              Behind the scenes of our stone ovens, artisanal folding counters, and bespoke golden gift packaging in Bahawalpur.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  activeFilter === f.id
                    ? 'bg-[#22130C] text-[#FAF7F2]'
                    : 'bg-[#FAF7F2] text-[#6B5547] hover:bg-[#E8DEC8]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="group relative rounded-2xl overflow-hidden bg-[#22130C] border border-[#E8DEC8] cursor-pointer shadow-md hover:shadow-xl transition-all"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#22130C]/90 via-[#22130C]/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

              {/* Content overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-[#FAF7F2]">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] uppercase tracking-wider text-[#E5B85E] font-mono">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold mt-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#D8C7B0] mt-1 line-clamp-1">
                    {item.subtitle}
                  </p>
                </div>

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FAF7F2]/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-20 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Lightbox Frame */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl max-h-[70vh]">
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  className="w-full h-full object-contain max-h-[70vh]"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="text-center mt-4 text-white">
                <h4 className="font-serif text-xl font-bold">
                  {filteredItems[lightboxIndex].title}
                </h4>
                <p className="text-xs text-white/70 mt-1">
                  {filteredItems[lightboxIndex].subtitle}
                </p>
                <span className="text-[11px] font-mono text-[#E5B85E] mt-2 inline-block">
                  {lightboxIndex + 1} of {filteredItems.length}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
