import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Layers, Flame, Droplets, Heart, MessageCircle } from 'lucide-react';
import { ASSETS, generateWhatsAppLink } from '../data/bakeryData';

export const SignatureShowcase: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState(0);

  const layersData = [
    {
      id: 'crust',
      number: '01',
      title: 'Caramelized Golden Crust',
      urdu: 'کرسٹلائزڈ گولڈن کرسٹ',
      icon: Flame,
      summary: 'Flash-baked under stone hearth radiant heat for a delicate amber snap.',
      details: 'A whisper of unrefined cane sugar mist caramelizes on the outer surface, sealing in crispness without overwhelming sweetness.',
      highlight: 'Delicate crunch & amber gloss'
    },
    {
      id: 'sheets',
      number: '02',
      title: '72 Laminated Micro-Sheets',
      urdu: '72 باریک پرتیں',
      icon: Layers,
      summary: 'Hand-folded and rolled repeatedly across 48 patient hours.',
      details: 'During baking, steam trapped between the alternating dough and butter sheets forces each layer to lift independently into an ethereal lattice.',
      highlight: 'Shatters cleanly upon the first bite'
    },
    {
      id: 'butter',
      number: '03',
      title: 'Cultured Butter & Desi Ghee',
      urdu: 'خالص مکھن اور دیسی گھی',
      icon: Droplets,
      summary: '100% natural dairy fat without palm oil or artificial shortening.',
      details: 'Cultured butter provides deep European flakiness, while local Bahawalpuri desi ghee imparts the nostalgic warmth of royal court kitchens.',
      highlight: 'Zero greasiness, velvet melt'
    },
    {
      id: 'aroma',
      number: '04',
      title: 'Green Elaichi & Saffron Breath',
      urdu: 'چھوٹی الائچی اور زعفران کی مہک',
      icon: Sparkles,
      summary: 'Cold-ground cardamom pods infused directly into the dough folds.',
      details: 'Never synthetic essence. We gently crush whole green cardamom from Malabar and infuse strands of Kashmiri saffron for a delicate royal aroma.',
      highlight: 'Long, soothing aromatic finish'
    }
  ];

  const handleOrderSignature = () => {
    const msg = `Hi Muffins Bakers, I want to order the Signature 72-Layer Classic Patashay (500g Box / PKR 850). Please confirm availability today!`;
    window.open(generateWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="signature" className="py-24 md:py-32 bg-[#22130C] text-[#FAF7F2] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#C99738]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#E5B85E] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Signature Patashay</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF7F2] leading-tight mb-4">
            Deconstructing the <br />
            <span className="italic font-normal text-gold-gradient">72-Layer Crisp.</span>
          </h2>

          <p className="text-[#D8C7B0] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Click through each layer to uncover why Muffins Bakers’ Patashay is celebrated as the pinnacle of sweet craftsmanship in Bahawalpur.
          </p>
        </div>

        {/* Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Big Close-up Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#C99738]/30 aspect-[4/3] sm:aspect-[4/3] bg-[#160B06]">
              <img
                src={ASSETS.layers}
                alt="Close-up macro of Patashay showing 72 laminated flaky butter layers"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#160B06]/80 via-transparent to-black/20 pointer-events-none" />

              {/* Active Layer Tag Badge */}
              <div className="absolute top-4 left-4 bg-[#22130C]/90 backdrop-blur-md border border-[#C99738]/40 px-3.5 py-1.5 rounded-lg text-xs font-medium text-[#E5B85E] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E5B85E] animate-ping" />
                <span>Focus: {layersData[activeLayer].title}</span>
              </div>

              {/* Bottom Quote inside visual */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#22130C]/90 backdrop-blur-md border border-[#341F14] text-xs text-[#D8C7B0] flex items-center justify-between">
                <div>
                  <span className="text-[#FAF7F2] font-serif font-semibold text-sm block">
                    100% Artisanal Lamination
                  </span>
                  <span>Handcrafted fresh in Bahawalpur every morning</span>
                </div>
                <span className="font-serif italic text-base text-[#E5B85E]">
                  PKR 850
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Layer Deconstruction Selector */}
          <div className="lg:col-span-6 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#D8C7B0] mb-2">
              Select a layer to examine:
            </p>

            <div className="space-y-3">
              {layersData.map((layer, index) => {
                const IconComponent = layer.icon;
                const isActive = activeLayer === index;

                return (
                  <button
                    key={layer.id}
                    onClick={() => setActiveLayer(index)}
                    className={`w-full text-left p-5 rounded-xl border transition-all duration-300 relative overflow-hidden group ${
                      isActive
                        ? 'bg-[#341F14] border-[#C99738] shadow-lg shadow-[#C99738]/10'
                        : 'bg-[#2B1810]/70 border-[#3D251A] hover:bg-[#341F14]/70 hover:border-[#6B5547]'
                    }`}
                  >
                    {/* Active accent bar */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#E5B85E] to-[#C99738]" />
                    )}

                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                            isActive
                              ? 'bg-[#C99738] text-[#22130C]'
                              : 'bg-[#22130C] text-[#D8C7B0] group-hover:text-[#FAF7F2]'
                          }`}
                        >
                          <IconComponent className="w-5 h-5" />
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-semibold text-[#E5B85E]">
                              {layer.number}
                            </span>
                            <span className="text-xs text-[#A57822]">·</span>
                            <h3 className="font-serif text-lg font-bold text-[#FAF7F2]">
                              {layer.title}
                            </h3>
                          </div>
                          <p className="font-serif text-xs text-[#A57822] italic mt-0.5">
                            {layer.urdu}
                          </p>
                          <p className="text-xs sm:text-sm text-[#D8C7B0] mt-1.5 leading-relaxed">
                            {layer.summary}
                          </p>
                        </div>
                      </div>
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="mt-4 pt-4 border-t border-[#4A2D1F] text-xs text-[#FAF7F2]/90 space-y-2"
                        >
                          <p>{layer.details}</p>
                          <div className="flex items-center gap-2 pt-1 text-[11px] text-[#E5B85E] font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E5B85E]" />
                            <span>Signature note: {layer.highlight}</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>

            {/* Direct Order Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={handleOrderSignature}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.99]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Order Signature Patashay Box (PKR 850)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
