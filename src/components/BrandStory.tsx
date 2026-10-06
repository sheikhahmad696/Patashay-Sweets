import React from 'react';
import { motion } from 'motion/react';
import { Clock, Heart, Award, ArrowUpRight } from 'lucide-react';
import { ASSETS, CONTACT_INFO, generateWhatsAppLink } from '../data/bakeryData';

export const BrandStory: React.FC = () => {
  const handleInquiry = () => {
    const msg = `Hi Muffins Bakers, I read your story about the 72-layer Patashay. I'd love to know more about custom gifting boxes for our family.`;
    window.open(generateWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="story" className="py-24 md:py-32 bg-[#FAF7F2] border-t border-[#E8DEC8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Hand-Craft Imagery */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Image Container with editorial aspect */}
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5] bg-[#22130C] border border-[#E8DEC8] relative">
                <img
                  src={ASSETS.craft}
                  alt="Master baker gently folding laminated pastry dough by hand at Muffins Bakers"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#22130C]/60 via-transparent to-transparent pointer-events-none" />

                {/* Subtitle caption */}
                <div className="absolute bottom-6 left-6 right-6 text-[#FAF7F2]">
                  <p className="font-serif text-lg font-medium italic">
                    The Art of Slow Lamination
                  </p>
                  <p className="text-xs text-[#D8C7B0] mt-1">
                    Every fold is hand-pressed, chilled, and rested across 48 hours.
                  </p>
                </div>
              </div>

              {/* Offset decorative backdrop */}
              <div className="absolute -bottom-6 -right-6 w-3/4 h-1/2 border border-[#C99738]/40 rounded-2xl -z-10 bg-[#F2ECE1]/50 hidden sm:block" />
            </div>
          </motion.div>

          {/* Right Column: Split Screen Editorial Text */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            {/* Section Tag */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#A57822] uppercase mb-4">
              <span className="w-6 h-[1.5px] bg-[#C99738]" />
              <span>Our Heritage & Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#22130C] leading-[1.15] mb-6 text-balance">
              Crafted with patience, <br />
              <span className="italic font-normal text-[#A57822]">butter & tradition.</span>
            </h2>

            <p className="font-serif text-xl text-[#6B5547] italic mb-6 leading-relaxed">
              In Bahawalpur — a princely realm famed for royal palaces and refined hospitality — sweetmaking has always been an art of time, not shortcuts.
            </p>

            <div className="space-y-4 text-[#6B5547] text-base leading-relaxed mb-8">
              <p>
                At <strong>Muffins Bakers</strong>, we set out to resurrect the classic Pakistani <span className="font-semibold text-[#22130C]">Patashay</span> puff pastry. Long compromised by modern industrial bakeries using palm shortening and artificial flavors, we went back to the original royal standard: 100% grass-fed cultured butter and fragrant Punjabi desi ghee.
              </p>
              <p>
                Our master artisans repeatedly roll, fold, and chill each pastry sheet across two full days. When placed inside our hot stone ovens, steam from the butter expands each micro-layer, creating an ethereal, paper-thin lattice that snaps with a whisper and dissolves into rich caramelized warmth on the tongue.
              </p>
            </div>

            {/* 3 Pillar highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full pt-6 border-t border-[#E8DEC8] mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2 text-[#22130C]">
                  <Clock className="w-4 h-4 text-[#C99738]" />
                  <span className="font-semibold text-sm">48-Hour Fold</span>
                </div>
                <p className="text-xs text-[#6B5547] leading-relaxed">
                  Patient temperature-controlled resting yields crisp, unhurried layers.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2 text-[#22130C]">
                  <Heart className="w-4 h-4 text-[#C99738]" />
                  <span className="font-semibold text-sm">Cultured Butter</span>
                </div>
                <p className="text-xs text-[#6B5547] leading-relaxed">
                  No margarine or shortening. Only pure dairy fats for an authentic melt.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2 text-[#22130C]">
                  <Award className="w-4 h-4 text-[#C99738]" />
                  <span className="font-semibold text-sm">Bahawalpur Pride</span>
                </div>
                <p className="text-xs text-[#6B5547] leading-relaxed">
                  Proudly rooted in Bahawalpur, serving celebrations across Pakistan.
                </p>
              </div>
            </div>

            <button
              onClick={handleInquiry}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#22130C] hover:text-[#A57822] transition-colors group"
            >
              <span>Speak to our head confectioner on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 text-[#C99738] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
