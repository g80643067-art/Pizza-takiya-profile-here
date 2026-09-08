import React, { useState } from 'react';
import { IntroPreloader } from './components/IntroPreloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CombosSection } from './components/CombosSection';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { SocialSection } from './components/SocialSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OrderTrayDrawer } from './components/OrderTrayDrawer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BackToTop } from './components/BackToTop';
import { CartItem, MenuItem } from './types';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (
    item: MenuItem,
    size?: 'Small' | 'Medium' | 'Large',
    extraCheese?: boolean,
    extraTopping?: boolean,
    price?: number
  ) => {
    const itemPrice = price || item.price;
    const cartItemId = `${item.id}-${size || 'std'}-${extraCheese ? 'cheese' : 'no'}-${extraTopping ? 'top' : 'no'}`;

    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.id === cartItemId);
      if (existing) {
        return prev.map((ci) =>
          ci.id === cartItemId ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [
        ...prev,
        {
          id: cartItemId,
          menuItemId: item.id,
          name: item.name,
          size,
          extraCheese,
          extraTopping,
          price: itemPrice,
          quantity: 1,
        },
      ];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalCartAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#141311] text-[#F4EBDD] selection:bg-[#D8B45A] selection:text-[#141311] flex flex-col">
      {/* Cinematic Intro / Preloader */}
      {showIntro && <IntroPreloader onComplete={() => setShowIntro(false)} />}

      {/* Sticky Navigation */}
      <Navbar 
        cartCount={totalCartCount} 
        onOpenCart={() => setIsCartOpen(true)} 
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <CombosSection onAddToCart={handleAddToCart} />
        <MenuSection onAddToCart={handleAddToCart} />
        <AboutSection />
        <ReviewsSection />
        <LocationSection />
        <SocialSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-over Multi-item Order Tray */}
      <OrderTrayDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Action Buttons */}
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
}
