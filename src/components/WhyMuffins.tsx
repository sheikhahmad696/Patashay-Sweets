import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Check, X, Shield, Star, Award, HeartHandshake } from 'lucide-react';
import { WHY_MUFFINS_PILLARS, TESTIMONIALS } from '../data/bakeryData';

export const WhyMuffins: React.FC = () => {
  const comparisonItems = [
    {
      feature: 'Fat Source',
      muffins: '100% Pure Cultured Butter & Desi Ghee',
      standard: 'Hydrogenated Palm Oil & Dalda Ghee',
    },
    {
      feature: 'Lamination Process',
      muffins: '72 Hand-Laminated Folds (48-hr Rest)',
      standard: 'Single machine pressing with dough relaxers',
    },
    {
      feature: 'Cardamom & Saffron',
      muffins: 'Whole green Malabar elaichi & saffron threads',
      standard: 'Synthetic artificial aroma essence',
    },
    {
      feature: 'Freshness Standard',
      muffins: 'Baked fresh twice daily in Bahawalpur',
      standard: 'Bulk-warehoused for weeks in factory boxes',
    },
    {
      feature: 'Chemical Additives',
      muffins: 'Zero dough conditioners, zero preservatives',
      standard: 'Dough bleaching agents & shelf-life chemicals',
    },
  ];

  return (
    <section id="why-us" className="py-24 md:py-32 bg-[#FAF7F2] border-t border-[#E8DEC8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#A57822] uppercase mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>The Muffins Standard</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#22130C] leading-tight mb-4">
            Why Bahawalpur Chooses <br />
            <span className="italic font-normal text-[#A57822]">Muffins Bakers.</span>
          </h2>

          <p className="text-[#6B5547] text-base sm:text-lg leading-relaxed">
            In an era of mass-produced, chemically preserved confectionery, we stand fiercely by our four uncompromising pillars.
          </p>
        </div>

        {/* 4 Pillars Grid with Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {WHY_MUFFINS_PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#FDFCF9] rounded-2xl p-6 border border-[#E8DEC8] hover:border-[#C99738] transition-all hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#A57822]">
                    {pillar.number}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#C99738]" />
                </div>

                <h3 className="font-serif text-xl font-bold text-[#22130C] mb-2 leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-xs text-[#6B5547] leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Stat footer */}
              <div className="pt-4 border-t border-[#F2ECE1]">
                <p className="font-serif text-3xl font-bold text-[#22130C] tabular-nums">
                  {pillar.stat}
                </p>
                <p className="text-[11px] uppercase tracking-wider text-[#A57822] font-semibold mt-0.5">
                  {pillar.statLabel}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Editorial Comparison Table: The Muffins Standard vs Common Sweets */}
        <div className="bg-[#22130C] text-[#FAF7F2] rounded-3xl p-6 sm:p-10 lg:p-12 mb-20 shadow-2xl relative overflow-hidden border border-[#341F14]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C99738]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E5B85E] block mb-2">
              The Difference is in the Pan
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#FAF7F2]">
              No Shortcuts. Ever.
            </h3>
            <p className="text-xs sm:text-sm text-[#D8C7B0] mt-2">
              A transparent look at the standards that separate our Patashay from ordinary sweet shops.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#3D251A] text-[#D8C7B0] uppercase text-[11px] tracking-wider">
                  <th className="py-4 pr-4 font-medium">Standard / Ingredient</th>
                  <th className="py-4 px-4 font-semibold text-[#E5B85E]">
                    Muffins Bakers (Bahawalpur)
                  </th>
                  <th className="py-4 pl-4 font-medium text-[#8C7362]">
                    Commercial Bakeries
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#341F14]">
                {comparisonItems.map((item, index) => (
                  <tr key={index} className="hover:bg-[#2B1810]/50 transition-colors">
                    <td className="py-4 pr-4 font-medium text-[#FAF7F2]">
                      {item.feature}
                    </td>
                    <td className="py-4 px-4 text-[#FAF7F2]">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#25D366] shrink-0" />
                        <span className="font-medium">{item.muffins}</span>
                      </div>
                    </td>
                    <td className="py-4 pl-4 text-[#8C7362]">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-[#8C7362] shrink-0" />
                        <span>{item.standard}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Verified Bahawalpur Customer Proof */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#A57822]">
              Loved across the City & Nation
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#22130C] mt-1">
              Words from our Patashay Patrons
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-[#FDFCF9] rounded-2xl p-6 border border-[#E8DEC8] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#C99738] mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C99738]" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A3225] italic leading-relaxed mb-4">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F2ECE1]">
                  <p className="font-serif text-sm font-bold text-[#22130C]">
                    {t.name}
                  </p>
                  <p className="text-[11px] text-[#8C7362] mt-0.5">
                    {t.city} · <span className="text-[#A57822]">{t.occasion}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
