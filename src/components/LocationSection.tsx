import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, CheckCircle2, Copy, ExternalLink } from 'lucide-react';
import { CONTACT_INFO, generateWhatsAppLink } from '../data/bakeryData';

export const LocationSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(CONTACT_INFO.primaryPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleOpenGoogleMaps = () => {
    // Open Google Maps search for Muffins Bakers & Cafe Bahawalpur
    const query = encodeURIComponent('Muffins Bakers and Cafe Bahawalpur');
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="location" className="py-24 md:py-32 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#A57822] uppercase mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Us in the City of Palaces</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#22130C] mb-4">
            Our Bahawalpur Boutique
          </h2>

          <p className="text-[#6B5547] text-base leading-relaxed">
            Stop by for the unmistakable fragrance of freshly baked Patashay, or order express delivery straight to your doorstep across Bahawalpur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Primary Address Card */}
            <div className="bg-[#FDFCF9] rounded-2xl p-6 sm:p-8 border border-[#E8DEC8] shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#22130C] text-[#E5B85E] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#22130C]">
                    Bakery & Cafe Location
                  </h3>
                  <p className="text-xs text-[#A57822] font-semibold uppercase tracking-wider mt-0.5">
                    Bahawalpur, Punjab, Pakistan
                  </p>
                  <p className="text-sm text-[#6B5547] mt-3 leading-relaxed">
                    {CONTACT_INFO.address}
                  </p>
                  <p className="text-xs text-[#8C7362] mt-1">
                    Serving Model Town, Cantt, Gulberg, Satellite Town, and Noor Mahal Road.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#F2ECE1] flex items-center gap-3">
                <button
                  onClick={handleOpenGoogleMaps}
                  className="flex-1 py-2.5 px-4 bg-[#22130C] hover:bg-[#341F14] text-[#FAF7F2] rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#E5B85E]" />
                  <span>Get Directions on Maps</span>
                </button>
              </div>
            </div>

            {/* Direct Phone & WhatsApp Card */}
            <div className="bg-[#FDFCF9] rounded-2xl p-6 sm:p-8 border border-[#E8DEC8] shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#20ba59]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-bold text-[#22130C]">
                    Orders & Direct Inquiries
                  </h3>
                  <p className="text-xs text-[#6B5547] mt-1">
                    Direct phone lines for immediate batch availability & custom gifting.
                  </p>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-[#FAF7F2] border border-[#E8DEC8]">
                      <div>
                        <span className="text-[10px] text-[#8C7362] block uppercase tracking-wider">
                          Primary Hotline
                        </span>
                        <a
                          href={`tel:${CONTACT_INFO.primaryPhoneInternational}`}
                          className="font-mono text-sm font-bold text-[#22130C] hover:text-[#A57822]"
                        >
                          {CONTACT_INFO.primaryPhone}
                        </a>
                      </div>
                      <button
                        onClick={handleCopyPhone}
                        className="p-1.5 text-[#6B5547] hover:text-[#22130C]"
                        title="Copy phone"
                      >
                        {copiedPhone ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg bg-[#FAF7F2] border border-[#E8DEC8]">
                      <div>
                        <span className="text-[10px] text-[#8C7362] block uppercase tracking-wider">
                          Secondary / WhatsApp
                        </span>
                        <a
                          href={`tel:${CONTACT_INFO.secondaryPhoneInternational}`}
                          className="font-mono text-sm font-bold text-[#22130C] hover:text-[#A57822]"
                        >
                          {CONTACT_INFO.secondaryPhone}
                        </a>
                      </div>
                      <a
                        href={generateWhatsAppLink('Hi Muffins Bakers, I am calling about a delivery in Bahawalpur.')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#20ba59] hover:underline"
                      >
                        Chat
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timings & Email */}
            <div className="bg-[#FDFCF9] rounded-2xl p-6 border border-[#E8DEC8] shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C99738] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#22130C] block">Opening Hours</span>
                  <span className="text-[#6B5547]">{CONTACT_INFO.timings}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C99738] shrink-0 mt-0.5" />
                <div className="overflow-hidden">
                  <span className="font-semibold text-[#22130C] block">Email Support</span>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-[#6B5547] hover:text-[#22130C] truncate block"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map Frame */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-[#22130C] rounded-2xl overflow-hidden border border-[#E8DEC8] flex-1 min-h-[420px] shadow-xl relative flex flex-col">
              {/* Simulated stylized map styling with real coordinates & overlay */}
              <div className="relative w-full h-full flex-1 min-h-[360px] bg-[#2E2822] overflow-hidden">
                {/* Embed OpenStreetMap iframe for Bahawalpur without any API key requirement */}
                <iframe
                  title="Muffins Bakers Bahawalpur Location Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=71.6400%2C29.3800%2C71.7200%2C29.4300&amp;layer=mapnik&amp;marker=29.3957%2C71.6833"
                  className="w-full h-full border-0 absolute inset-0 opacity-85 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />

                {/* Styled Pin Badge on Top */}
                <div className="absolute top-6 left-6 bg-[#22130C]/95 backdrop-blur-md border border-[#C99738]/50 p-4 rounded-xl shadow-2xl max-w-xs text-[#FAF7F2] z-10 pointer-events-none sm:pointer-events-auto">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#E5B85E] animate-ping" />
                    <span className="font-serif text-sm font-bold text-[#E5B85E]">
                      Muffins Bakers & Cafe
                    </span>
                  </div>
                  <p className="text-xs text-[#D8C7B0]">
                    Bahawalpur, Punjab · Central City Delivery Zone
                  </p>
                  <p className="text-[11px] text-[#A57822] mt-2 font-mono">
                    29°23'45"N 71°41'00"E
                  </p>
                </div>

                {/* Floating Directions Action */}
                <div className="absolute bottom-6 right-6 z-10">
                  <button
                    onClick={handleOpenGoogleMaps}
                    className="flex items-center gap-2 py-2.5 px-4 bg-[#FAF7F2] hover:bg-white text-[#22130C] rounded-xl text-xs font-semibold shadow-lg hover:shadow-xl transition-all border border-[#E8DEC8]"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#C99738]" />
                  </button>
                </div>
              </div>

              {/* Delivery Note Footer */}
              <div className="p-4 bg-[#1F120C] border-t border-[#341F14] text-xs text-[#D8C7B0] flex flex-col sm:flex-row items-center justify-between gap-2">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                  <span>Riders active in Bahawalpur for instant delivery</span>
                </span>
                <span className="text-[#A57822] font-medium">
                  Average delivery: 35–50 minutes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
