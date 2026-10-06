import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { CONTACT_INFO, generateWhatsAppLink } from '../data/bakeryData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Our Story', href: '#story' },
    { label: 'Signature Patashay', href: '#signature' },
    { label: 'Bakery Menu', href: '#menu' },
    { label: 'Why Muffins', href: '#why-us' },
    { label: 'Photo Gallery', href: '#gallery' },
    { label: 'Bahawalpur Location', href: '#location' },
  ];

  return (
    <footer className="bg-[#1F120C] text-[#FAF7F2] border-t border-[#341F14] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#341F14]">
          {/* Column 1: Brand & Philosophy */}
          <div className="lg:col-span-4">
            <span className="font-serif text-3xl font-bold text-[#FAF7F2] block">
              Patashay
            </span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#A57822] font-semibold block mb-4">
              by Muffins Bakers
            </span>
            <p className="font-serif text-sm text-[#D8C7B0] italic mb-4">
              روایتی مٹھاس، جدید نفاست — بہاولپور
            </p>
            <p className="text-xs text-[#8C7362] leading-relaxed max-w-sm mb-6">
              Pioneering the revival of authentic Pakistani multi-layered puff pastry. Hand-laminated with pure cultured butter and local desi ghee in the historic city of Bahawalpur.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={generateWhatsAppLink('Hi Muffins Bakers, I want to inquire about Patashay orders.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#20ba59] transition-colors"
                aria-label="Order on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#2B1810] border border-[#4A2D1F] text-[#D8C7B0] hover:text-white hover:border-[#C99738] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#2B1810] border border-[#4A2D1F] text-[#D8C7B0] hover:text-white hover:border-[#C99738] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#E5B85E] mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D8C7B0]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#FAF7F2] hover:underline transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Store Information */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#E5B85E] mb-4">
              Bahawalpur Contact & Direct Orders
            </h4>

            <div className="space-y-3 text-xs text-[#D8C7B0]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C99738] shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C99738] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div>
                    <span className="text-[#8C7362] mr-2">Hotline 1:</span>
                    <a
                      href={`tel:${CONTACT_INFO.primaryPhoneInternational}`}
                      className="font-mono text-[#FAF7F2] hover:text-[#E5B85E] tabular-nums"
                    >
                      {CONTACT_INFO.primaryPhone}
                    </a>
                  </div>
                  <div>
                    <span className="text-[#8C7362] mr-2">Hotline 2 / WhatsApp:</span>
                    <a
                      href={`tel:${CONTACT_INFO.secondaryPhoneInternational}`}
                      className="font-mono text-[#FAF7F2] hover:text-[#E5B85E] tabular-nums"
                    >
                      {CONTACT_INFO.secondaryPhone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C99738] shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-[#FAF7F2] transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={generateWhatsAppLink('Hi Muffins Bakers, I want to order a fresh box of Patashay.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-xs font-semibold shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Click to Chat on WhatsApp Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C7362] gap-4">
          <p>
            © {new Date().getFullYear()} Patashay by Muffins Bakers. All rights reserved. Bahawalpur, Pakistan.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#FAF7F2] transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
