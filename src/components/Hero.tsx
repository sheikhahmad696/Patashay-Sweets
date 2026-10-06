import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ArrowRight, Sparkles, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { ASSETS, CONTACT_INFO, generateWhatsAppLink } from '../data/bakeryData';

interface HeroProps {
  onExploreMenu: () => void;
  onOpenQuickOrder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onOpenQuickOrder }) => {
  const handleWhatsAppOrder = () => {
    const msg = `Hi, I want to order fresh Patashay from Muffins Bakers. Please let me know the today's freshly baked options.`;
    window.open(generateWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
  };

  // Particles floating in background
  const particles = [
    { top: '15%', left: '8%', delay: 0, duration: 7, size: 8, rotate: 45 },
    { top: '35%', left: '4%', delay: 1.5, duration: 9, size: 12, rotate: 120 },
    { top: '75%', left: '12%', delay: 2.2, duration: 8, size: 10, rotate: 75 },
    { top: '20%', right: '10%', delay: 0.8, duration: 6, size: 14, rotate: 90 },
    { top: '55%', right: '6%', delay: 2.7, duration: 10, size: 9, rotate: 210 },
    { top: '80%', right: '15%', delay: 1.2, duration: 8.5, size: 11, rotate: 30 },
  ];

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#FAF7F2] to-[#F5EFEB] flex items-center">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E5B85E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#C99738]/8 rounded-full blur-2xl pointer-events-none" />

      {/* Floating Pastry Flake Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-sm bg-gradient-to-br from-[#E5B85E]/70 to-[#C99738]/40 border border-[#C99738]/20 shadow-sm"
            style={{
              top: p.top,
              left: p.left,
              right: p.right,
              width: `${p.size}px`,
              height: `${p.size * 0.75}px`,
            }}
            animate={{
              y: [0, -28, 0],
              x: [0, 14, 0],
              rotate: [p.rotate, p.rotate + 45, p.rotate],
              opacity: [0.5, 0.9, 0.5],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Heritage Kicker (Zero pill discipline: clean unboxed text) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#A57822] uppercase mb-4">
              <span className="w-6 h-[1.5px] bg-[#C99738]" />
              <span>Bahawalpur’s Royal Confectionery</span>
              <span aria-hidden="true">·</span>
              <span>Handcrafted Daily</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[#22130C] leading-[1.08] mb-6 text-balance">
              Crisp Layers. <br />
              <span className="italic font-normal font-serif text-[#A57822]">
                Rich Taste.
              </span>
            </h1>

            {/* Urdu Sub-kicker & English prose */}
            <p className="font-serif text-lg sm:text-xl text-[#6B5547] italic mb-3">
              روایتی مٹھاس، جدید نفاست — خالص مکھن سے تیار کردہ لذیذ پتاشے
            </p>

            <p className="text-[#6B5547] text-base sm:text-lg max-w-xl leading-relaxed mb-8">
              Experience the centuries-old royal tradition of multi-layered puff pastry. Hand-laminated across 72 paper-thin folds with pure cultured butter and local desi ghee, slow-caramelized to a whispering shatter.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={handleWhatsAppOrder}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-semibold text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] group"
              >
                <MessageCircle className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
                <span>Order on WhatsApp</span>
                <span className="text-white/80 font-normal text-xs ml-1">(Instant Reply)</span>
              </button>

              <button
                onClick={onExploreMenu}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#FAF7F2] hover:bg-[#F2ECE1] text-[#22130C] border border-[#D8C7B0] rounded-xl font-medium text-sm transition-all duration-200 hover:border-[#C99738] group"
              >
                <span>Explore Menu & Pricing</span>
                <ArrowRight className="w-4 h-4 text-[#C99738] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust Markers without pill boxes (clean unboxed metadata) */}
            <div className="pt-6 border-t border-[#E8DEC8] w-full grid grid-cols-3 gap-4 text-xs text-[#6B5547]">
              <div>
                <p className="font-serif text-xl sm:text-2xl font-bold text-[#22130C] tabular-nums">72</p>
                <p className="text-[11px] uppercase tracking-wider text-[#A57822] font-semibold mt-0.5">Micro Layers</p>
                <p className="text-[11px] text-[#6B5547] mt-0.5">Whisper-thin crunch</p>
              </div>
              <div>
                <p className="font-serif text-xl sm:text-2xl font-bold text-[#22130C] tabular-nums">100%</p>
                <p className="text-[11px] uppercase tracking-wider text-[#A57822] font-semibold mt-0.5">Pure Butter</p>
                <p className="text-[11px] text-[#6B5547] mt-0.5">Zero trans fats</p>
              </div>
              <div>
                <p className="font-serif text-xl sm:text-2xl font-bold text-[#22130C] tabular-nums">Bahawalpur</p>
                <p className="text-[11px] uppercase tracking-wider text-[#A57822] font-semibold mt-0.5">Daily Ovens</p>
                <p className="text-[11px] text-[#6B5547] mt-0.5">Model Town / Cantt</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Showcase */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Visual Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative ring */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#C99738]/20 via-[#FAF7F2] to-[#E5B85E]/30 blur-sm -z-10" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#22130C] aspect-[4/3] sm:aspect-[4/3] border border-[#E8DEC8]">
                <img
                  src={ASSETS.hero}
                  alt="Golden crisp Patashay by Muffins Bakers on ceramic platter with pistachio garnish"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#22130C]/85 via-black/20 to-transparent pointer-events-none" />

                {/* Floating caption card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#FAF7F2]/95 backdrop-blur-md border border-[#E8DEC8] text-[#22130C] shadow-lg flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#A57822] uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-[#C99738]" />
                      <span>Signature Heritage Box</span>
                    </div>
                    <p className="font-serif text-base font-semibold text-[#22130C] mt-0.5">
                      Classic Golden Patashay (500g / 1kg)
                    </p>
                    <p className="text-xs text-[#6B5547] tabular-nums">From PKR 850 · Freshly Packed</p>
                  </div>

                  <button
                    onClick={onOpenQuickOrder}
                    className="shrink-0 ml-3 px-3.5 py-2 bg-[#22130C] hover:bg-[#341F14] text-[#FAF7F2] text-xs font-semibold rounded-lg transition-colors whitespace-nowrap"
                  >
                    Order Box
                  </button>
                </div>
              </div>

              {/* Small accent floating seal */}
              <div className="absolute -top-4 -right-4 bg-[#FAF7F2] border-2 border-[#C99738] rounded-full w-20 h-20 shadow-xl flex flex-col items-center justify-center p-2 text-center rotate-6 hover:rotate-0 transition-transform">
                <span className="text-[9px] uppercase tracking-widest text-[#6B5547] font-semibold">Muffins</span>
                <span className="text-xs font-serif font-bold text-[#A57822] leading-none my-0.5">Est.</span>
                <span className="text-[10px] font-bold text-[#22130C]">BWP</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
