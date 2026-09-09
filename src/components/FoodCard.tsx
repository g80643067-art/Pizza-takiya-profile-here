import React, { useState } from 'react';
import { ShoppingBag, Plus, Check, Sparkles, Layers } from 'lucide-react';
import { MenuItem } from '../types';
import { ADDON_PRICES } from '../data/menuData';
import { VegBadge } from './VegBadge';

interface FoodCardProps {
  item: MenuItem;
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

const FoodCardComponent: React.FC<FoodCardProps> = ({ item, onAddToCart, onOrderNow }) => {
  const hasSizes = Boolean(item.sizes && item.sizes.length > 0);
  const [selectedSize, setSelectedSize] = useState<'Small' | 'Medium' | 'Large'>('Small');
  const [extraCheese, setExtraCheese] = useState(false);
  const [extraTopping, setExtraTopping] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  // Calculate current price
  let currentPrice = item.price;
  if (hasSizes && item.sizes) {
    const foundSize = item.sizes.find((s) => s.name === selectedSize);
    if (foundSize) {
      currentPrice = foundSize.price;
    }
  }

  if (item.hasCustomAddons) {
    if (extraCheese) {
      currentPrice += ADDON_PRICES.extraCheese[selectedSize];
    }
    if (extraTopping) {
      currentPrice += ADDON_PRICES.extraTopping[selectedSize];
    }
  }

  const handleAdd = () => {
    onAddToCart(
      item,
      hasSizes ? selectedSize : undefined,
      extraCheese,
      extraTopping,
      currentPrice
    );
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  const handleOrder = () => {
    if (onOrderNow) {
      onOrderNow(
        item,
        hasSizes ? selectedSize : undefined,
        extraCheese,
        extraTopping,
        currentPrice
      );
    } else {
      handleAdd();
    }
  };

  return (
    <div className="flex flex-col bg-[#1C1916] rounded-3xl overflow-hidden border border-[#D8B45A]/20 shadow-xl hover:shadow-[0_12px_28px_rgba(0,0,0,0.6)] hover:border-[#D8B45A]/50 transition-all duration-300 group">
      {/* Top Image Container */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-[#141311]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

        {/* Veg Badge */}
        <div className="absolute top-3 left-3 bg-[#141311]/90 backdrop-blur-sm p-1.5 rounded-lg shadow-sm border border-[#D8B45A]/30">
          <VegBadge size="md" />
        </div>

        {/* Popular / Special Tag */}
        {item.tag ? (
          <div className="absolute top-3 right-3 bg-[#D8B45A] text-[#141311] border border-[#D8B45A] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-widest shadow-xs">
            {item.tag}
          </div>
        ) : item.isPopular ? (
          <div className="absolute top-3 right-3 bg-[#1C1916] text-[#D8B45A] border border-[#D8B45A]/40 text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 uppercase tracking-widest shadow-xs">
            <Sparkles className="w-3 h-3 text-[#D8B45A]" />
            <span>Popular</span>
          </div>
        ) : null}

        {/* Dynamic Price on Image */}
        <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#141311]/90 text-white backdrop-blur-sm border border-[#D8B45A]/35 shadow-sm">
          <span className="text-[9px] text-[#D8B45A] font-bold block uppercase tracking-widest">
            {hasSizes ? `${selectedSize}` : 'Price'}
          </span>
          <span className="text-base font-black text-[#F4EBDD] font-display">₹{currentPrice}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3.5">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-black text-[#F4EBDD] font-display group-hover:text-[#D8B45A] transition-colors leading-snug tracking-tight">
              {item.name}
            </h3>
            <span className="text-sm font-black text-[#D8B45A] font-display shrink-0 pt-0.5">
              ₹{currentPrice}
            </span>
          </div>
          <p className="text-[#F4EBDD]/65 text-xs mt-1 line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Size Selection Pill Buttons (For Pizzas) */}
        {hasSizes && item.sizes && (
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-[#A88945]">
              <span>Select Size:</span>
              <span className="text-[#F4EBDD]/50 font-medium">S: 7" | M: 10" | L: 12"</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#141311] rounded-full border border-[#D8B45A]/20">
              {item.sizes.map((s) => (
                <button
                  key={s.code}
                  type="button"
                  onClick={() => setSelectedSize(s.name)}
                  className={`py-1 px-2 rounded-full text-xs font-bold transition-all ${
                    selectedSize === s.name
                      ? 'bg-[#D8B45A] text-[#141311] shadow-xs'
                      : 'text-[#F4EBDD]/70 hover:text-[#D8B45A] hover:bg-[#D8B45A]/10'
                  }`}
                >
                  {s.name[0]} · ₹{s.price}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Custom Addons Toggle (Extra Cheese, Extra Toppings) */}
        {item.hasCustomAddons && (
          <div className="p-2.5 rounded-2xl bg-[#141311] border border-[#D8B45A]/20 space-y-1.5 text-xs">
            <div className="flex items-center gap-1 font-bold text-[#F4EBDD]/80 text-[10px] uppercase tracking-widest">
              <Layers className="w-3 h-3 text-[#D8B45A]" />
              <span>Customize Pizza:</span>
            </div>
            <div className="flex items-center justify-between gap-2 text-[11px]">
              <label className="flex items-center gap-1.5 cursor-pointer select-none text-[#F4EBDD]/75 hover:text-[#D8B45A]">
                <input
                  type="checkbox"
                  checked={extraCheese}
                  onChange={(e) => setExtraCheese(e.target.checked)}
                  className="rounded border-[#D8B45A]/40 text-[#D8B45A] focus:ring-[#D8B45A] w-3.5 h-3.5 accent-[#D8B45A]"
                />
                <span>Cheese (+₹{ADDON_PRICES.extraCheese[selectedSize]})</span>
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer select-none text-[#F4EBDD]/75 hover:text-[#D8B45A]">
                <input
                  type="checkbox"
                  checked={extraTopping}
                  onChange={(e) => setExtraTopping(e.target.checked)}
                  className="rounded border-[#D8B45A]/40 text-[#D8B45A] focus:ring-[#D8B45A] w-3.5 h-3.5 accent-[#D8B45A]"
                />
                <span>Topping (+₹{ADDON_PRICES.extraTopping[selectedSize]})</span>
              </label>
            </div>
          </div>
        )}

        {/* Action Buttons - Clearly Fitted */}
        <div className="pt-2 flex items-center gap-2">
          {/* Order in Tray Pill */}
          <button
            type="button"
            onClick={handleOrder}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 border border-[#D8B45A]/40 text-[#D8B45A] hover:bg-[#D8B45A] hover:text-[#141311] hover:shadow-[0_0_15px_rgba(216,180,90,0.25)] rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-all active:scale-[0.98] cursor-pointer whitespace-nowrap"
            title="Configure and order in Order Tray"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-current shrink-0" />
            <span>Order</span>
          </button>

          {/* Add to Multi-item Order Tray */}
          <button
            type="button"
            onClick={handleAdd}
            className={`inline-flex items-center justify-center gap-1.5 py-2 px-3 sm:px-3.5 rounded-full border transition-all active:scale-95 shadow-xs cursor-pointer text-[10px] sm:text-[11px] font-bold uppercase tracking-wider whitespace-nowrap ${
              justAdded
                ? 'bg-emerald-500 text-[#141311] border-emerald-500'
                : 'border-[#D8B45A]/40 bg-[#141311] hover:bg-[#D8B45A] text-[#D8B45A] hover:text-[#141311]'
            }`}
            title="Add to order tray"
          >
            {justAdded ? (
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
  );
};

export const FoodCard = React.memo(FoodCardComponent);
