/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MessageCircle, ShoppingBag } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStory } from './components/BrandStory';
import { SignatureShowcase } from './components/SignatureShowcase';
import { MenuSection } from './components/MenuSection';
import { WhyMuffins } from './components/WhyMuffins';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { WhatsAppOrderCTA } from './components/WhatsAppOrderCTA';
import { SocialSection } from './components/SocialSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { OrderDrawer } from './components/OrderDrawer';
import { MenuItem, CartItem } from './types/bakery';
import { CONTACT_INFO, generateWhatsAppLink, ASSETS } from './data/bakeryData';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([
    // Start with 1 default signature box so users can immediately test the drawer flow
    {
      item: {
        id: 'patashay-classic',
        name: 'Classic Golden Patashay',
        urduName: 'کلاسک گولڈن پتاشے',
        category: 'patashay',
        categoryLabel: 'Signature Patashay',
        description: 'Flagship 72-layer puff pastry sweet with pure cultured butter and desi ghee.',
        pricePKR: 850,
        weight: '500g Box',
        pieces: 'Approx. 18-20 crisps',
        image: ASSETS.hero,
        badge: 'Best Seller',
        isSignature: true,
        layers: 72,
        ingredients: ['Cultured Butter', 'Desi Ghee', 'Wheat Flour', 'Aromatic Cardamom'],
        tasteProfile: 'Delicate flakiness, deep buttery warmth, unhurried sweetness.'
      },
      quantity: 1,
      boxSize: '500g',
    }
  ]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const totalCartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (item: MenuItem, boxSize: '500g' | '1kg' | '2kg' = '500g') => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (c) => c.item.id === item.id && c.boxSize === boxSize
      );
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [...prevCart, { item, quantity: 1, boxSize }];
      }
    });
  };

  const handleUpdateQuantity = (itemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    setCart((prev) =>
      prev.map((c) => (c.item.id === itemId ? { ...c, quantity: newQty } : c))
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCart((prev) => prev.filter((c) => c.item.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFloatingWhatsApp = () => {
    const defaultMsg = `Hi, I want to order Patashay from Muffins Bakers Bahawalpur. Please share the menu and delivery availability.`;
    window.open(generateWhatsAppLink(defaultMsg), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#22130C] font-sans selection:bg-[#E5B85E] selection:text-[#22130C]">
      {/* Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsDrawerOpen(true)}
        onOpenQuickOrder={() => setIsDrawerOpen(true)}
      />

      <main>
        {/* 1. Hero Section */}
        <Hero
          onExploreMenu={scrollToMenu}
          onOpenQuickOrder={() => setIsDrawerOpen(true)}
        />

        {/* 2. Brand Story Section */}
        <BrandStory />

        {/* 3. Signature Patashay Showcase */}
        <SignatureShowcase />

        {/* 4. Full Bakery Menu */}
        <MenuSection onAddToCart={handleAddToCart} />

        {/* 5. Why Muffins (Pillars & Proof) */}
        <WhyMuffins />

        {/* 6. Bakery Gallery & Lightbox */}
        <GallerySection />

        {/* 7. Bahawalpur Location & Maps */}
        <LocationSection />

        {/* 8. WhatsApp Order CTA */}
        <WhatsAppOrderCTA />

        {/* 9. Social Media Feed */}
        <SocialSection />

        {/* FAQ Section */}
        <FAQSection />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Slide-over WhatsApp Order Drawer */}
      <OrderDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating WhatsApp Action Button */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <button
          onClick={handleFloatingWhatsApp}
          className="group relative flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Order on WhatsApp"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping -z-10" />

          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="text-xs font-bold tracking-wide hidden sm:inline whitespace-nowrap">
            Order on WhatsApp
          </span>
        </button>
      </div>
    </div>
  );
}
