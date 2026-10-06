import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Plus, Minus, ShoppingBag, MessageCircle, ArrowRight } from 'lucide-react';
import { CartItem } from '../types/bakery';
import { CONTACT_INFO, generateWhatsAppLink } from '../data/bakeryData';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (itemId: string, newQty: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [deliveryArea, setDeliveryArea] = useState('Bahawalpur Delivery');
  const [address, setAddress] = useState('');

  const calculateItemPrice = (item: CartItem) => {
    const base = item.item.pricePKR;
    const multiplier =
      item.boxSize === '1kg' ? 1.85 : item.boxSize === '2kg' ? 3.6 : 1;
    return Math.round(base * multiplier) * item.quantity;
  };

  const totalAmount = cart.reduce((acc, curr) => acc + calculateItemPrice(curr), 0);

  const handleSendWhatsApp = () => {
    if (cart.length === 0) return;

    let text = `Hi Muffins Bakers, I want to order the following from your website:\n\n`;
    cart.forEach((c, index) => {
      const price = calculateItemPrice(c);
      text += `${index + 1}. ${c.item.name} (${c.boxSize || '500g'})\n   Qty: ${c.quantity} | PKR ${price.toLocaleString()}\n`;
    });

    text += `\nSubtotal: PKR ${totalAmount.toLocaleString()}`;
    text += `\nDelivery Type: ${deliveryArea}`;
    if (customerName.trim()) text += `\nCustomer: ${customerName.trim()}`;
    if (address.trim()) text += `\nAddress/Landmark: ${address.trim()}`;
    text += `\n\nPlease confirm availability and payment details. Thank you!`;

    window.open(generateWhatsAppLink(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer content */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 260 }}
            className="relative w-full max-w-md bg-[#FAF7F2] text-[#22130C] h-full shadow-2xl flex flex-col z-10 border-l border-[#E8DEC8]"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#E8DEC8] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#C99738]" />
                <h3 className="font-serif text-xl font-bold">Your Patashay Box</h3>
                <span className="text-xs bg-[#F2ECE1] text-[#6B5547] px-2 py-0.5 rounded-full font-mono">
                  {cart.reduce((a, b) => a + b.quantity, 0)}
                </span>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-[#F2ECE1] text-[#6B5547] hover:text-[#22130C] transition-colors"
                aria-label="Close box drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Item List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#F2ECE1] flex items-center justify-center mb-4 text-[#8C7362]">
                    <ShoppingBag className="w-8 h-8 stroke-1" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#22130C]">
                    Your Box is Empty
                  </h4>
                  <p className="text-xs text-[#6B5547] max-w-xs mt-1">
                    Explore our menu and add freshly baked 72-layer Patashay, Shahi Nankhatai, or luxury gift hampers.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-6 px-4 py-2 bg-[#22130C] text-[#FAF7F2] text-xs font-semibold rounded-lg hover:bg-[#341F14] transition-colors"
                  >
                    Browse Bakery Menu
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between text-xs text-[#8C7362] pb-2 border-b border-[#F2ECE1]">
                    <span>Items selected</span>
                    <button
                      onClick={onClearCart}
                      className="hover:text-red-700 flex items-center gap-1 transition-colors"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Clear all</span>
                    </button>
                  </div>

                  {cart.map((cartItem) => {
                    const price = calculateItemPrice(cartItem);
                    return (
                      <div
                        key={cartItem.item.id}
                        className="bg-white rounded-xl p-4 border border-[#E8DEC8] flex gap-3 shadow-sm"
                      >
                        <img
                          src={cartItem.item.image}
                          alt={cartItem.item.name}
                          className="w-16 h-16 rounded-lg object-cover bg-[#22130C] shrink-0"
                          referrerPolicy="no-referrer"
                        />

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-1">
                            <h5 className="font-serif text-sm font-bold text-[#22130C] truncate">
                              {cartItem.item.name}
                            </h5>
                            <button
                              onClick={() => onRemoveItem(cartItem.item.id)}
                              className="text-[#8C7362] hover:text-red-600 p-1"
                              aria-label="Remove item"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <p className="text-[11px] text-[#A57822] font-mono">
                            {cartItem.boxSize || '500g Box'}
                          </p>

                          <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#F5EFEB]">
                            <div className="flex items-center border border-[#E8DEC8] rounded-md overflow-hidden bg-[#FAF7F2]">
                              <button
                                onClick={() =>
                                  onUpdateQuantity(cartItem.item.id, cartItem.quantity - 1)
                                }
                                className="px-2 py-0.5 text-xs text-[#6B5547] hover:bg-[#E8DEC8]"
                              >
                                -
                              </button>
                              <span className="px-2 text-xs font-mono font-semibold text-[#22130C]">
                                {cartItem.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  onUpdateQuantity(cartItem.item.id, cartItem.quantity + 1)
                                }
                                className="px-2 py-0.5 text-xs text-[#6B5547] hover:bg-[#E8DEC8]"
                              >
                                +
                              </button>
                            </div>

                            <span className="font-serif text-sm font-bold text-[#22130C] tabular-nums">
                              PKR {price.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Delivery Info Fields */}
                  <div className="pt-4 border-t border-[#E8DEC8] space-y-3">
                    <span className="text-xs uppercase font-semibold text-[#8C7362] block">
                      Delivery Details for WhatsApp Dispatch:
                    </span>

                    <div>
                      <label className="text-[11px] text-[#6B5547] block mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Mian Ahmad"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full text-xs p-2.5 bg-white border border-[#E8DEC8] rounded-lg focus:border-[#C99738] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] text-[#6B5547] block mb-1">
                        Delivery Method
                      </label>
                      <select
                        value={deliveryArea}
                        onChange={(e) => setDeliveryArea(e.target.value)}
                        className="w-full text-xs p-2.5 bg-white border border-[#E8DEC8] rounded-lg focus:border-[#C99738] focus:outline-none"
                      >
                        <option value="Bahawalpur Express Delivery">Bahawalpur Express Delivery (Model Town / Cantt / Gulberg)</option>
                        <option value="Store Pickup (Bahawalpur Boutique)">Store Pickup (Bahawalpur Boutique)</option>
                        <option value="Nationwide Express Courier">Nationwide Courier (Lahore, Karachi, Islamabad)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] text-[#6B5547] block mb-1">
                        Address / Special Instructions
                      </label>
                      <input
                        type="text"
                        placeholder="House / Street / Landmark"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full text-xs p-2.5 bg-white border border-[#E8DEC8] rounded-lg focus:border-[#C99738] focus:outline-none"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Footer Summary & Action */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-[#E8DEC8] bg-[#FDFCF9] space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#6B5547]">Estimated Total</span>
                  <span className="font-serif text-2xl font-bold text-[#22130C] tabular-nums">
                    PKR {totalAmount.toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={handleSendWhatsApp}
                  className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Send Order to WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-[#8C7362]">
                  Directly opens WhatsApp (+92 308 6567774) with itemized summary.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
