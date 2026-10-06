import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ShoppingBag, Menu as MenuIcon, X, Sparkles } from 'lucide-react';
import { CONTACT_INFO, generateWhatsAppLink } from '../data/bakeryData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenQuickOrder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenQuickOrder,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Our Story', href: '#story' },
    { label: 'Signature Patashay', href: '#signature' },
    { label: 'Full Menu', href: '#menu' },
    { label: 'Why Muffins', href: '#why-us' },
    { label: 'Bakery Gallery', href: '#gallery' },
    { label: 'Bahawalpur Location', href: '#location' },
  ];

  const handleWhatsAppClick = () => {
    const msg = `Hi, I want to order fresh Patashay from Muffins Bakers Bahawalpur. Please share today's available batches.`;
    window.open(generateWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Subtle announcement bar */}
      {showAnnouncement && (
        <div className="bg-[#22130C] text-[#FAF7F2] text-xs py-2 px-4 border-b border-[#341F14] flex items-center justify-between">
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
            <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
              <span className="inline-block w-2 h-2 rounded-full bg-[#E5B85E] animate-pulse"></span>
              <span className="font-medium tracking-wide">
                Fresh morning batch pulled from the oven in Bahawalpur
              </span>
              <span className="hidden md:inline text-[#A57822]">·</span>
              <span className="hidden md:inline text-[#D8C7B0]">
                Same-day delivery available across the city
              </span>
            </div>

            <div className="flex items-center gap-4 shrink-0 text-xs text-[#D8C7B0]">
              <a
                href={`tel:${CONTACT_INFO.primaryPhoneInternational}`}
                className="hidden sm:flex items-center gap-1.5 hover:text-[#FAF7F2] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#E5B85E]" />
                <span className="tabular-nums">{CONTACT_INFO.primaryPhone}</span>
              </a>
              <button
                onClick={() => setShowAnnouncement(false)}
                className="hover:text-white p-0.5"
                aria-label="Dismiss announcement"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Top Bar Contract: 3 zones */}
      <header
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E8DEC8]'
            : 'bg-[#FAF7F2]/80 backdrop-blur-sm border-b border-[#E8DEC8]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex flex-col group transition-transform duration-200"
            aria-label="Patashay by Muffins Bakers Home"
          >
            <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[#22130C] group-hover:text-[#A57822] transition-colors">
              Patashay
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#6B5547] -mt-1 font-sans">
              by Muffins Bakers
            </span>
          </a>

          {/* Zone 2: 4-6 Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wide text-[#6B5547]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#22130C] relative py-1 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C99738] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 Primary actions */}
          <div className="flex items-center gap-3">
            {/* Quick Box / Cart button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full hover:bg-[#F2ECE1] text-[#22130C] transition-colors flex items-center justify-center"
              aria-label={`View selected box items (${cartCount})`}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C99738] text-white text-[11px] font-semibold w-5 h-5 rounded-full flex items-center justify-center tabular-nums shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Direct WhatsApp CTA Button */}
            <button
              onClick={handleWhatsAppClick}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Order on WhatsApp</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#22130C] hover:bg-[#F2ECE1] rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E8DEC8] px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#22130C] pb-4 border-b border-[#E8DEC8]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#C99738] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsAppClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg text-sm font-semibold shadow-sm transition-colors"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Order on WhatsApp</span>
            </button>

            <a
              href={`tel:${CONTACT_INFO.primaryPhoneInternational}`}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#22130C] text-[#FAF7F2] rounded-lg text-sm font-medium hover:bg-[#341F14] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#E5B85E]" />
              <span>Call Bakery: {CONTACT_INFO.primaryPhone}</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
