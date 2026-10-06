import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Check, Send, Sparkles, Box, ShieldCheck, MapPin } from 'lucide-react';
import { CONTACT_INFO, generateWhatsAppLink } from '../data/bakeryData';

export const WhatsAppOrderCTA: React.FC = () => {
  const [selectedBox, setSelectedBox] = useState('Classic 72-Layer Patashay (500g)');
  const [quantity, setQuantity] = useState(1);
  const [destination, setDestination] = useState<'Bahawalpur City' | 'Nationwide Courier'>('Bahawalpur City');
  const [customerName, setCustomerName] = useState('');
  const [specialNote, setSpecialNote] = useState('');

  const boxOptions = [
    { name: 'Classic 72-Layer Patashay (500g)', price: 850 },
    { name: 'Royal 72-Layer Patashay (1kg)', price: 1600 },
    { name: 'Shahi Pistachio & Almond Patashay (500g)', price: 1150 },
    { name: 'Zafrani Honey-Glazed Patashay (500g)', price: 1350 },
    { name: 'Nawabi Heritage Keepsake Hamper', price: 3800 },
  ];

  const currentBox = boxOptions.find((b) => b.name === selectedBox) || boxOptions[0];
  const totalPrice = currentBox.price * quantity;

  // Construct message as specified
  const constructedMessage = `Hi, I want to order Patashay from Muffins Bakers.
• Item: ${selectedBox}
• Quantity: ${quantity} box(es)
• Total: PKR ${totalPrice.toLocaleString()}
• Delivery: ${destination}${customerName.trim() ? `\n• Customer Name: ${customerName.trim()}` : ''}${specialNote.trim() ? `\n• Note: ${specialNote.trim()}` : ''}
Please confirm availability and dispatch time.`;

  const handleLaunchWhatsApp = () => {
    window.open(generateWhatsAppLink(constructedMessage), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-24 md:py-32 bg-[#22130C] text-[#FAF7F2] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-[#C99738]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#25D366]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Reassurance */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#E5B85E] uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant Dispatch via WhatsApp</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF7F2] leading-tight mb-6">
              Craving Fresh <br />
              <span className="italic font-normal text-gold-gradient">
                Patashay Right Now?
              </span>
            </h2>

            <p className="text-[#D8C7B0] text-base sm:text-lg leading-relaxed mb-8">
              We take orders directly on WhatsApp for real-time customer service. Tell us what you’d like, and our Bahawalpur dispatch team will pack your warm bakes in minutes.
            </p>

            <div className="space-y-4 pt-4 border-t border-[#3D251A]">
              <div className="flex items-center gap-3 text-sm text-[#FAF7F2]">
                <div className="w-6 h-6 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Direct communication with bakery staff (no robotic chatbots)</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-[#FAF7F2]">
                <div className="w-6 h-6 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Same-day doorstep delivery within Bahawalpur</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-[#FAF7F2]">
                <div className="w-6 h-6 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Airtight sealed tin boxes for all inter-city courier parcels</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#3D251A] flex items-center gap-6 text-xs text-[#D8C7B0]">
              <div>
                <span className="text-[#A57822] uppercase tracking-wider block font-medium">WhatsApp Hotlines</span>
                <span className="font-mono text-sm font-bold text-[#FAF7F2]">
                  {CONTACT_INFO.primaryPhone} / {CONTACT_INFO.secondaryPhone}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Customizer & WhatsApp Launcher */}
          <div className="lg:col-span-6">
            <div className="bg-[#2B1810] rounded-3xl p-6 sm:p-8 border border-[#4A2D1F] shadow-2xl relative">
              <div className="flex items-center justify-between pb-5 border-b border-[#3D251A] mb-6">
                <div className="flex items-center gap-2">
                  <Box className="w-4 h-4 text-[#E5B85E]" />
                  <span className="font-serif text-lg font-bold text-[#FAF7F2]">
                    Quick WhatsApp Order Generator
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#E5B85E] bg-[#341F14] px-2.5 py-1 rounded">
                  Live Preview
                </span>
              </div>

              {/* Box Selection */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-xs uppercase tracking-wider text-[#D8C7B0] font-medium block mb-2">
                    Select Confectionery Box
                  </label>
                  <select
                    value={selectedBox}
                    onChange={(e) => setSelectedBox(e.target.value)}
                    className="w-full bg-[#1F120C] border border-[#4A2D1F] text-[#FAF7F2] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#C99738] transition-colors"
                  >
                    {boxOptions.map((opt) => (
                      <option key={opt.name} value={opt.name}>
                        {opt.name} — PKR {opt.price.toLocaleString()}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Quantity and Delivery Destination */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#D8C7B0] font-medium block mb-2">
                      Quantity (Boxes)
                    </label>
                    <div className="flex items-center bg-[#1F120C] border border-[#4A2D1F] rounded-xl overflow-hidden">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-4 py-2.5 text-[#FAF7F2] hover:bg-[#341F14] transition-colors"
                      >
                        -
                      </button>
                      <span className="flex-1 text-center font-mono text-sm font-bold text-[#FAF7F2]">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-4 py-2.5 text-[#FAF7F2] hover:bg-[#341F14] transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#D8C7B0] font-medium block mb-2">
                      Delivery Scope
                    </label>
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value as any)}
                      className="w-full bg-[#1F120C] border border-[#4A2D1F] text-[#FAF7F2] rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#C99738]"
                    >
                      <option value="Bahawalpur City">Bahawalpur City (Same-Day)</option>
                      <option value="Nationwide Courier">Nationwide Courier (Airtight Tin)</option>
                    </select>
                  </div>
                </div>

                {/* Name / Note */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#D8C7B0] font-medium block mb-1">
                      Your Name (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ahmad Tariq"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-[#1F120C] border border-[#4A2D1F] text-[#FAF7F2] rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#C99738]"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#D8C7B0] font-medium block mb-1">
                      Special Note / Landmark
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Near Model Town Chowk"
                      value={specialNote}
                      onChange={(e) => setSpecialNote(e.target.value)}
                      className="w-full bg-[#1F120C] border border-[#4A2D1F] text-[#FAF7F2] rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#C99738]"
                    />
                  </div>
                </div>
              </div>

              {/* Message Preview Box */}
              <div className="mb-6 bg-[#160B06] rounded-xl p-4 border border-[#3D251A]">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#A57822] block mb-1">
                  Pre-filled WhatsApp Message Preview:
                </span>
                <p className="font-mono text-xs text-[#FAF7F2]/90 whitespace-pre-line leading-relaxed">
                  {constructedMessage}
                </p>
              </div>

              {/* Price Calculation & Launch Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#D8C7B0] block">
                    Estimated Subtotal
                  </span>
                  <span className="font-serif text-2xl font-bold text-[#E5B85E] tabular-nums">
                    PKR {totalPrice.toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={handleLaunchWhatsApp}
                  className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 py-4 px-6 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-bold text-sm shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Send Order to WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
