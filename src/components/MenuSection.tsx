import React, { useState, useMemo } from 'react';
import { Search, Utensils, X, Sparkles } from 'lucide-react';
import { MenuItem, CategoryId } from '../types';
import { CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { FoodCard } from './FoodCard';

interface MenuSectionProps {
  onAddToCart: (
    item: MenuItem, 
    size?: 'Small' | 'Medium' | 'Large', 
    extraCheese?: boolean, 
    extraTopping?: boolean, 
    price?: number
  ) => void;
  onOrderNow?: (
    item: MenuItem, 
    size?: 'Small' | 'Medium' | 'Large', 
    extraCheese?: boolean, 
    extraTopping?: boolean, 
    price?: number
  ) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart, onOrderNow }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === '' ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-20 md:py-28 bg-[#141311] text-[#F4EBDD] scroll-mt-20 border-b border-[#D8B45A]/15 overflow-hidden relative">
      {/* Subtle luxury ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#D8B45A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1C1916] border border-[#D8B45A]/30 text-[#D8B45A] text-[10px] font-bold uppercase tracking-widest shadow-xs">
            <Utensils className="w-3.5 h-3.5 text-[#D8B45A]" />
            Pure Vegetarian Artisanal Menu
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F4EBDD] font-display tracking-tight">
            Explore Italian &amp; Local Delights 🍕
          </h2>
          <p className="text-[#F4EBDD]/70 text-sm sm:text-base leading-relaxed">
            From bubbling hot mozzarella pizzas to stuffed garlic breads, gourmet burgers, and kulhad chai. Prepared fresh to order with love in Patan.
          </p>
        </div>

        {/* Search Bar & Addon Information Banner */}
        <div className="max-w-2xl mx-auto mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#D8B45A]" />
            <input
              type="text"
              placeholder="Search pizzas, burgers, pasta, momos, beverages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 rounded-full bg-[#1C1916] border border-[#D8B45A]/25 focus:border-[#D8B45A] focus:ring-1 focus:ring-[#D8B45A] text-[#F4EBDD] placeholder:text-[#F4EBDD]/40 text-xs sm:text-sm shadow-xs transition-all outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#F4EBDD]/50 hover:text-[#D8B45A] p-1 cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Pizza Pricing & Addon Reference Banner */}
          <div className="p-3.5 rounded-3xl bg-[#1C1916]/80 backdrop-blur-sm border border-[#D8B45A]/25 shadow-xs flex flex-wrap items-center justify-between gap-2 text-xs text-[#F4EBDD]">
            <div className="flex items-center gap-1.5 font-bold text-[#D8B45A]">
              <Sparkles className="w-4 h-4 text-[#D8B45A]" />
              <span>Standard Pizza Sizes: Small (₹75) · Medium (₹165) · Large (₹265)</span>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-[#F4EBDD]/70 font-medium">
              <span>Extra Cheese: S ₹30 / M ₹45 / L ₹60</span>
              <span className="text-[#D8B45A]">✦</span>
              <span>Extra Topping: S ₹25 / M ₹40 / L ₹55</span>
            </div>
          </div>
        </div>

        {/* Category Navigation - ONE horizontal scrollable row with smooth touch/swipe scrolling */}
        <div className="w-full max-w-full overflow-hidden mb-8">
          <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar flex-nowrap scroll-smooth py-1 px-1 touch-pan-x">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                id={`category-btn-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap shrink-0 px-3.5 sm:px-4.5 py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#D8B45A] text-[#141311] font-black shadow-[0_0_15px_rgba(216,180,90,0.35)] scale-[1.02]'
                    : 'bg-[#1C1916] hover:bg-[#25211D] text-[#F4EBDD]/75 hover:text-[#D8B45A] border border-[#D8B45A]/25'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Count & Reset Filter */}
        <div className="flex items-center justify-between mb-6 text-xs text-[#A88945] font-bold uppercase tracking-wider">
          <span>Showing {filteredItems.length} vegetarian items</span>
          {(activeCategory !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="text-[#D8B45A] hover:underline font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Food Items Display in Grid - Naturally wraps to next row as width fills */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {filteredItems.map((item) => (
              <FoodCard
                key={item.id}
                item={item}
                onAddToCart={onAddToCart}
                onOrderNow={onOrderNow}
              />
            ))}
          </div>
        ) : (
          <div className="p-10 text-center bg-[#1C1916] rounded-3xl border border-[#D8B45A]/25 shadow-xl max-w-md mx-auto space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#141311] text-[#D8B45A] flex items-center justify-center mx-auto text-xl border border-[#D8B45A]/30">
              🔍
            </div>
            <h3 className="text-base font-black text-[#F4EBDD] font-display">No items found</h3>
            <p className="text-[#F4EBDD]/60 text-xs leading-relaxed">
              We couldn't find any menu item matching "{searchQuery}". Try searching for pizza, pasta, momos, burger or beverages!
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="px-6 py-2.5 rounded-full bg-[#D8B45A] hover:bg-[#C9A44B] text-[#141311] text-xs font-bold uppercase tracking-widest transition-all shadow-sm cursor-pointer"
            >
              View All Menu Items
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
