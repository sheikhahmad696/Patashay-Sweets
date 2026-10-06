import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, MessageCircle, Info, Check, Plus, X, Sparkles } from 'lucide-react';
import { MenuItem } from '../types/bakery';
import { MENU_ITEMS, generateWhatsAppLink } from '../data/bakeryData';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem, boxSize?: '500g' | '1kg' | '2kg') => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedItemModal, setSelectedItemModal] = useState<MenuItem | null>(null);
  const [modalBoxSize, setModalBoxSize] = useState<'500g' | '1kg' | '2kg'>('500g');
  const [addedItemNotification, setAddedItemNotification] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Delicacies' },
    { id: 'patashay', label: 'Signature Patashay' },
    { id: 'khatai', label: 'Royal Khatai & Crisps' },
    { id: 'cakes', label: 'Cakes & Pastries' },
    { id: 'hampers', label: 'Luxury Gift Hampers' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  const handleQuickAdd = (item: MenuItem, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(item, '500g');
    setAddedItemNotification(item.name);
    setTimeout(() => setAddedItemNotification(null), 2500);
  };

  const handleWhatsAppItemOrder = (item: MenuItem, size: string = '500g') => {
    const calculatedPrice =
      size === '1kg'
        ? Math.round(item.pricePKR * 1.85)
        : size === '2kg'
        ? Math.round(item.pricePKR * 3.6)
        : item.pricePKR;

    const msg = `Hi Muffins Bakers, I want to order:\n- Item: ${item.name} (${item.urduName || ''})\n- Size: ${size}\n- Price: PKR ${calculatedPrice.toLocaleString()}\nPlease let me know the delivery timeline to my address in Bahawalpur.`;
    window.open(generateWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="menu" className="py-24 md:py-32 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E8DEC8]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#A57822] uppercase mb-3">
              <span className="w-6 h-[1.5px] bg-[#C99738]" />
              <span>Handcrafted Daily Selection</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#22130C]">
              Artisanal Bakery Menu
            </h2>
            <p className="text-[#6B5547] text-sm sm:text-base mt-2 max-w-xl">
              Freshly baked in small batches in Bahawalpur. All prices in Pakistani Rupees (PKR) and ready for direct WhatsApp dispatch.
            </p>
          </div>

          {/* Interactive filter tabs (functional buttons with click handlers) */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#22130C] text-[#FAF7F2] shadow-sm'
                    : 'bg-[#F2ECE1] text-[#6B5547] hover:bg-[#E8DEC8] hover:text-[#22130C]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Toast alert on add */}
        <AnimatePresence>
          {addedItemNotification && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-24 right-6 z-50 bg-[#22130C] text-[#FAF7F2] px-4 py-3 rounded-xl shadow-xl border border-[#C99738] flex items-center gap-3 text-xs"
            >
              <div className="w-5 h-5 rounded-full bg-[#25D366] text-white flex items-center justify-center">
                <Check className="w-3 h-3" />
              </div>
              <span>
                Added <strong className="text-[#E5B85E]">{addedItemNotification}</strong> to your WhatsApp box!
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="group bg-[#FDFCF9] rounded-2xl border border-[#E8DEC8] overflow-hidden hover:border-[#C99738] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Product Image */}
                <div
                  className="relative aspect-[4/3] bg-[#22130C] overflow-hidden cursor-pointer"
                  onClick={() => setSelectedItemModal(item)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Clean unboxed tag */}
                  {item.badge && (
                    <div className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-semibold text-[#22130C] tracking-wide border border-[#E8DEC8]">
                      {item.badge}
                    </div>
                  )}

                  {/* Layers tag if applicable */}
                  {item.layers && (
                    <div className="absolute top-3 right-3 bg-[#22130C]/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-[#E5B85E] border border-[#341F14]">
                      {item.layers} Layers
                    </div>
                  )}

                  {/* Quick View Button on Hover */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedItemModal(item);
                    }}
                    className="absolute bottom-3 right-3 bg-[#FAF7F2]/90 hover:bg-white text-[#22130C] p-2 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 shadow-sm"
                    aria-label="View details"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-medium">Details</span>
                  </button>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Category unboxed text */}
                  <div className="flex items-center justify-between text-xs text-[#6B5547] mb-1.5">
                    <span>{item.categoryLabel}</span>
                    <span className="tabular-nums text-[11px]">{item.weight}</span>
                  </div>

                  <h3
                    onClick={() => setSelectedItemModal(item)}
                    className="font-serif text-xl font-bold text-[#22130C] hover:text-[#A57822] transition-colors cursor-pointer"
                  >
                    {item.name}
                  </h3>

                  {item.urduName && (
                    <p className="font-serif text-xs text-[#A57822] italic mt-0.5">
                      {item.urduName}
                    </p>
                  )}

                  <p className="text-xs text-[#6B5547] mt-3 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Ingredients unboxed list */}
                  <div className="mt-4 pt-3 border-t border-[#F2ECE1] flex flex-wrap gap-1 text-[11px] text-[#8C7362]">
                    {item.ingredients.slice(0, 3).map((ing, i) => (
                      <span key={i}>
                        {ing}
                        {i < 2 ? ' · ' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Price & Actions */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-3 border-t border-[#F2ECE1]">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8C7362] block">
                    Starting from
                  </span>
                  <span className="font-serif text-lg font-bold text-[#22130C] tabular-nums">
                    PKR {item.pricePKR.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => handleQuickAdd(item, e)}
                    className="p-2.5 rounded-lg border border-[#D8C7B0] hover:bg-[#22130C] hover:text-white hover:border-[#22130C] text-[#22130C] transition-colors"
                    title="Add to WhatsApp Order Box"
                    aria-label={`Add ${item.name} to box`}
                  >
                    <Plus className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleWhatsAppItemOrder(item)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg text-xs font-semibold shadow-sm transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>Order</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Item Detail & WhatsApp Customizer Modal */}
      <AnimatePresence>
        {selectedItemModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#FAF7F2] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#E8DEC8] relative max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItemModal(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#FAF7F2]/90 hover:bg-[#22130C] hover:text-white text-[#22130C] flex items-center justify-center transition-colors shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto">
                <div className="aspect-[16/9] bg-[#22130C] relative">
                  <img
                    src={selectedItemModal.image}
                    alt={selectedItemModal.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#22130C] via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 left-6 right-6 text-[#FAF7F2]">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#E5B85E]">
                      <span>{selectedItemModal.categoryLabel}</span>
                      {selectedItemModal.layers && <span>· {selectedItemModal.layers} Layers</span>}
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-1">
                      {selectedItemModal.name}
                    </h3>
                    {selectedItemModal.urduName && (
                      <p className="font-serif text-sm text-[#E5B85E] italic">
                        {selectedItemModal.urduName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-6">
                  {/* Description */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8C7362] mb-1">
                      About this bake
                    </h4>
                    <p className="text-[#6B5547] text-sm leading-relaxed">
                      {selectedItemModal.description}
                    </p>
                  </div>

                  {/* Taste Notes */}
                  <div className="p-4 rounded-xl bg-[#F2ECE1] border border-[#E8DEC8]">
                    <span className="text-xs font-semibold text-[#22130C] block mb-1">
                      Taste & Texture Profile:
                    </span>
                    <p className="text-xs text-[#6B5547] italic">
                      "{selectedItemModal.tasteProfile}"
                    </p>
                  </div>

                  {/* Ingredients */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8C7362] mb-2">
                      Pure Ingredients
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedItemModal.ingredients.map((ing, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white border border-[#E8DEC8] rounded-lg text-xs text-[#22130C]"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Box Size Choice */}
                  {selectedItemModal.category === 'patashay' && (
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8C7362] mb-2">
                        Select Packaging Size
                      </h4>
                      <div className="grid grid-cols-3 gap-3">
                        {(['500g', '1kg', '2kg'] as const).map((size) => {
                          const multiplier = size === '1kg' ? 1.85 : size === '2kg' ? 3.6 : 1;
                          const calculatedPrice = Math.round(
                            selectedItemModal.pricePKR * multiplier
                          );
                          return (
                            <button
                              key={size}
                              onClick={() => setModalBoxSize(size)}
                              className={`p-3 rounded-xl border text-center transition-all ${
                                modalBoxSize === size
                                  ? 'border-[#C99738] bg-[#F2ECE1] font-semibold text-[#22130C]'
                                  : 'border-[#E8DEC8] bg-white text-[#6B5547] hover:border-[#C99738]'
                              }`}
                            >
                              <span className="text-xs block capitalize">
                                {size === '500g' ? 'Standard Box' : size === '1kg' ? 'Royal Box' : 'Feast Hamper'}
                              </span>
                              <span className="text-[11px] text-[#8C7362] block">{size}</span>
                              <span className="font-serif text-sm font-bold text-[#22130C] mt-1 block tabular-nums">
                                PKR {calculatedPrice.toLocaleString()}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Action row */}
                  <div className="pt-4 border-t border-[#E8DEC8] flex flex-col sm:flex-row items-center gap-3">
                    <button
                      onClick={() => {
                        onAddToCart(selectedItemModal, modalBoxSize);
                        setSelectedItemModal(null);
                        setAddedItemNotification(selectedItemModal.name);
                        setTimeout(() => setAddedItemNotification(null), 2500);
                      }}
                      className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-xl border border-[#22130C] text-[#22130C] hover:bg-[#22130C] hover:text-[#FAF7F2] text-sm font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Custom Box</span>
                    </button>

                    <button
                      onClick={() => {
                        handleWhatsAppItemOrder(selectedItemModal, modalBoxSize);
                        setSelectedItemModal(null);
                      }}
                      className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-md"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Order Now via WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
