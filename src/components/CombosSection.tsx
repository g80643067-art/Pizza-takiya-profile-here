import React from 'react';
import { Flame, Sparkles, MessageCircle, Plus, Check, ShoppingBag } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data/menuData';
import { VegBadge } from './VegBadge';

interface CombosSectionProps {
  onAddToCart: (item: MenuItem, size?: 'Small' | 'Medium' | 'Large', extraCheese?: boolean, extraTopping?: boolean, price?: number) => void;
  onOrderNow?: (item: MenuItem, size?: 'Small' | 'Medium' | 'Large', extraCheese?: boolean, extraTopping?: boolean, price?: number) => void;
}

export const CombosSection: React.FC<CombosSectionProps> = ({ onAddToCart, onOrderNow }) => {
  const comboItems = MENU_ITEMS.filter((item) => item.category === 'combos');
  const [addedItem, setAddedItem] = React.useState<string | null>(null);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item, undefined, false, false, item.price);
    setAddedItem(item.id);
    setTimeout(() => setAddedItem(null), 1500);
  };

  const handleOrder = (combo: MenuItem) => {
    if (onOrderNow) {
      onOrderNow(combo, undefined, false, false, combo.price);
    } else {
      handleAdd(combo);
    }
  };

  return (
    <section id="combos" className="py-20 md:py-28 bg-[#141311] text-[#F4EBDD] border-b border-[#D8B45A]/15 overflow-hidden relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#D8B45A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1C1916] border border-[#D8B45A]/30 text-[#D8B45A] text-[10px] font-bold uppercase tracking-widest shadow-xs">
            <Flame className="w-3.5 h-3.5 text-[#D8B45A] fill-[#D8B45A]" />
            Curated Deals &amp; Combinations
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F4EBDD] font-display tracking-tight">
            Curated Party Combos 🍽️
          </h2>
          <p className="text-[#F4EBDD]/70 text-sm sm:text-base leading-relaxed">
            Handpicked pairings crafted for friends, couples, and family celebrations in Patan.
          </p>
        </div>

        {/* Responsive Grid of Combos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {comboItems.map((combo) => (
            <div
              key={combo.id}
              className="relative flex flex-col bg-[#1C1916]/95 backdrop-blur-md rounded-3xl overflow-hidden border border-[#D8B45A]/25 hover:border-[#D8B45A] shadow-xl hover:shadow-[0_20px_50px_rgba(216,180,90,0.18)] transition-all duration-300 group"
            >
              {/* Best Deal Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#D8B45A] text-[#141311] text-[10px] font-bold uppercase tracking-widest shadow-md">
                <Sparkles className="w-3 h-3 text-[#141311]" />
                <span>{combo.tag || 'Best Deal'}</span>
              </div>

              {/* Pure Veg Badge */}
              <div className="absolute top-4 right-4 z-10 bg-[#141311]/90 backdrop-blur-md p-2 rounded-2xl shadow-sm border border-[#D8B45A]/30">
                <VegBadge size="md" />
              </div>

              {/* Combo Image with consistent luxury aspect ratio */}
              <div className="relative h-60 overflow-hidden bg-[#141311]">
                <img
                  src={combo.image}
                  alt={combo.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1916] via-black/20 to-transparent" />
                
                {/* Price Pill Floating */}
                <div className="absolute bottom-3 left-4 px-4 py-1.5 rounded-full bg-[#141311]/90 text-white backdrop-blur-md border border-[#D8B45A]/40 shadow-lg">
                  <span className="text-[9px] text-[#D8B45A] font-bold block uppercase tracking-widest leading-none">Combo Price</span>
                  <span className="text-xl font-black text-[#F4EBDD] font-display">₹{combo.price}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-[#F4EBDD] group-hover:text-[#D8B45A] font-display transition-colors tracking-tight">
                    {combo.name}
                  </h3>
                  <p className="text-[#F4EBDD]/65 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {combo.description}
                  </p>
                </div>

                {/* Buttons - Clearly Fitted */}
                <div className="pt-3 flex items-center gap-2 sm:gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleOrder(combo)}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 px-3.5 sm:px-5 rounded-full border border-[#D8B45A]/40 text-[#D8B45A] hover:bg-[#D8B45A] hover:text-[#141311] hover:shadow-[0_0_20px_rgba(216,180,90,0.3)] transition-all text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-xs cursor-pointer active:scale-95 whitespace-nowrap"
                    title="Order combo in Order Tray"
                  >
                    <ShoppingBag className="w-4 h-4 text-current shrink-0" />
                    <span>Order Combo</span>
                  </button>

                  <button
                    onClick={() => handleAdd(combo)}
                    className={`inline-flex items-center justify-center gap-1.5 py-2.5 sm:py-3 px-3.5 sm:px-4 rounded-full border transition-all text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-xs cursor-pointer active:scale-95 whitespace-nowrap shrink-0 ${
                      addedItem === combo.id
                        ? 'bg-emerald-500 text-[#141311] border-emerald-500'
                        : 'border-[#D8B45A]/40 bg-[#141311] hover:bg-[#D8B45A] text-[#D8B45A] hover:text-[#141311]'
                    }`}
                    title="Add combo to order tray"
                  >
                    {addedItem === combo.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#141311] shrink-0 stroke-[3]" />
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5 shrink-0" />
                        <span>ADD TO CART</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Combo Banner Notice */}
        <div className="mt-12 p-5 rounded-3xl bg-[#1C1916]/80 backdrop-blur-sm border border-[#D8B45A]/25 max-w-2xl mx-auto text-center shadow-lg">
          <p className="text-xs text-[#F4EBDD]/70 font-medium">
            🎉 Hosting a birthday celebration or family gathering near Takiya Mela Ground? Custom bulk combinations can be prepared freshly on WhatsApp!
          </p>
        </div>

      </div>
    </section>
  );
};
