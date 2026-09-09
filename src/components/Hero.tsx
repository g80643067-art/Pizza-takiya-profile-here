import React, { useState } from 'react';
import { UtensilsCrossed, MessageCircle, Heart, ArrowRight, Sparkles, ShieldCheck, Flame, Plus, Check, ShoppingBag } from 'lucide-react';
import { MenuItem } from '../types';
import { ADDON_PRICES, LOADED_PIZZA_SIZES } from '../data/menuData';
import { getGeneralWhatsAppUrl, getSingleItemWhatsAppUrl } from '../utils/whatsapp';
import { VegBadge } from './VegBadge';

// Signature Showcase Visuals
import loadedCheesePizzaImg from '../assets/images/loaded_cheese_pizza.webp';
import paneerPizzaImg from '../assets/images/paneer_pizza_1788759992844.webp';
import stuffedGarlicBreadImg from '../assets/images/stuffed_garlic_bread_1788759643370.webp';
import realPizzaCokeImg from '../assets/images/pizza_coke_combo.webp';

interface HeroProps {
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

interface HeroShowcaseItem extends MenuItem {
  heroTag: string;
  heroCategory: string;
}

const HERO_SHOWCASE_ITEMS: HeroShowcaseItem[] = [
  {
    id: 'sp-loaded-cheese',
    name: 'Loaded Cheese Pizza',
    heroCategory: 'Artisanal Pizza',
    category: 'special-pizza',
    description: 'Double stretchy mozzarella, golden herb crust, and secret spiced tomato sauce.',
    price: 135,
    sizes: LOADED_PIZZA_SIZES,
    hasCustomAddons: true,
    isPopular: true,
    heroTag: "Chef's Signature",
    tag: "Chef's Signature",
    image: loadedCheesePizzaImg,
  },
  {
    id: 'combo-2',
    name: 'Medium Pizza + 2 Coke',
    heroCategory: 'Super Saver Combo',
    category: 'combos',
    description: 'Hand-tossed medium pizza served bubbling hot with two chilled fizzy Cokes.',
    price: 209,
    isPopular: true,
    isBestDeal: true,
    heroTag: 'Best Deal',
    tag: 'Best Deal',
    image: realPizzaCokeImg,
  },
  {
    id: 'sp-masala-paneer',
    name: 'Tandoori Paneer Pizza',
    heroCategory: 'Desi Fusion',
    category: 'special-pizza',
    description: 'Marinated cottage cheese cubes, charred onions, crisp capsicum and rich cheese.',
    price: 135,
    sizes: LOADED_PIZZA_SIZES,
    hasCustomAddons: true,
    isPopular: true,
    heroTag: 'Trending',
    tag: 'Trending',
    image: paneerPizzaImg,
  },
  {
    id: 'ot-stuffed-garlic-bread',
    name: 'Stuffed Garlic Bread',
    heroCategory: 'Italian Sides',
    category: 'pasta-garlic-bread',
    description: 'Golden-brown artisan crust stuffed with melted cheese, sweet corn, and herbs.',
    price: 69,
    isPopular: true,
    heroTag: 'Crispy & Cheesy',
    tag: 'Crispy & Cheesy',
    image: stuffedGarlicBreadImg,
  },
];

interface HeroCardItemProps {
  item: HeroShowcaseItem;
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

const HeroCardItemComponent: React.FC<HeroCardItemProps> = ({ item, onAddToCart, onOrderNow }) => {
  const hasSizes = Boolean(item.sizes && item.sizes.length > 0);
  const [selectedSize, setSelectedSize] = useState<'Small' | 'Medium' | 'Large'>('Small');
  const [extraCheese, setExtraCheese] = useState(false);
  const [extraTopping, setExtraTopping] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  // Dynamic price calculation
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
    <div className="relative flex flex-col bg-[#1C1916]/95 backdrop-blur-md rounded-3xl overflow-hidden border border-[#D8B45A]/25 hover:border-[#D8B45A] shadow-xl hover:shadow-[0_16px_40px_rgba(216,180,90,0.18)] transition-all duration-300 group">
      {/* Top Tag & Price */}
      <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D8B45A] text-[#141311] text-[9px] font-black uppercase tracking-widest shadow-md">
        <Sparkles className="w-3 h-3 text-[#141311]" />
        <span>{item.heroTag}</span>
      </div>

      <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-2">
        <div className="bg-[#141311]/90 backdrop-blur-md p-1.5 rounded-lg shadow-sm border border-[#D8B45A]/30">
          <VegBadge size="sm" />
        </div>
        <div className="bg-[#141311]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#D8B45A]/30 text-xs text-[#D8B45A] font-black font-display shadow-md">
          <span>₹{currentPrice}</span>
        </div>
      </div>

      {/* Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-[#141311]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          referrerPolicy="no-referrer"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1916] via-[#1C1916]/20 to-transparent" />

        {/* Dynamic Price on Image */}
        <div className="absolute bottom-2.5 left-3 px-3 py-1 rounded-full bg-[#141311]/90 text-white backdrop-blur-sm border border-[#D8B45A]/35 shadow-sm">
          <span className="text-[9px] text-[#D8B45A] font-bold block uppercase tracking-widest leading-none">
            {hasSizes ? `${selectedSize}` : 'Price'}
          </span>
          <span className="text-base font-black text-[#F4EBDD] font-display leading-tight">₹{currentPrice}</span>
        </div>
      </div>

      {/* Card Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D8B45A] block">
            {item.heroCategory}
          </span>
          <h3 className="text-base sm:text-lg font-black text-[#F4EBDD] group-hover:text-[#D8B45A] font-display transition-colors tracking-tight line-clamp-1">
            {item.name}
          </h3>
          <p className="text-[#F4EBDD]/65 text-xs leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Size Selection Pill Buttons (For Pizzas) */}
        {hasSizes && item.sizes && (
          <div className="space-y-1 pt-1">
            <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-widest text-[#A88945]">
              <span>Size:</span>
              <span className="text-[#F4EBDD]/50 font-medium">S: 7" | M: 10" | L: 12"</span>
            </div>
            <div className="grid grid-cols-3 gap-1 p-1 bg-[#141311] rounded-full border border-[#D8B45A]/20">
              {item.sizes.map((s) => (
                <button
                  key={s.code}
                  type="button"
                  onClick={() => setSelectedSize(s.name)}
                  className={`py-1 px-1.5 rounded-full text-[11px] font-bold transition-all text-center cursor-pointer ${
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
          <div className="p-2 rounded-xl bg-[#141311] border border-[#D8B45A]/20 space-y-1 text-xs">
            <div className="flex items-center justify-between gap-2 text-[10px]">
              <label className="flex items-center gap-1.5 cursor-pointer select-none text-[#F4EBDD]/75 hover:text-[#D8B45A]">
                <input
                  type="checkbox"
                  checked={extraCheese}
                  onChange={(e) => setExtraCheese(e.target.checked)}
                  className="rounded border-[#D8B45A]/40 text-[#D8B45A] focus:ring-[#D8B45A] w-3 h-3 accent-[#D8B45A]"
                />
                <span>Cheese (+₹{ADDON_PRICES.extraCheese[selectedSize]})</span>
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer select-none text-[#F4EBDD]/75 hover:text-[#D8B45A]">
                <input
                  type="checkbox"
                  checked={extraTopping}
                  onChange={(e) => setExtraTopping(e.target.checked)}
                  className="rounded border-[#D8B45A]/40 text-[#D8B45A] focus:ring-[#D8B45A] w-3 h-3 accent-[#D8B45A]"
                />
                <span>Topping (+₹{ADDON_PRICES.extraTopping[selectedSize]})</span>
              </label>
            </div>
          </div>
        )}

        {/* Action Buttons: Working "ADD TO CART" & WhatsApp */}
        <div className="pt-2 flex items-center gap-2">
          {/* Working ADD TO CART button */}
          <button
            type="button"
            onClick={handleAdd}
            className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-[11px] font-black uppercase tracking-wider transition-all cursor-pointer shadow-sm active:scale-95 whitespace-nowrap ${
              justAdded
                ? 'bg-emerald-500 text-[#141311] shadow-[0_0_15px_rgba(16,185,129,0.35)]'
                : 'bg-[#D8B45A] hover:bg-[#C9A44B] text-[#141311] shadow-[0_0_15px_rgba(216,180,90,0.25)] hover:shadow-[0_0_20px_rgba(216,180,90,0.4)]'
            }`}
            title="Add to order tray"
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#141311] shrink-0 stroke-[3]" />
                <span>Added to Tray</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5 shrink-0 stroke-[2.5]" />
                <span>ADD TO CART</span>
              </>
            )}
          </button>

          {/* Individual Order Button (opens Order Tray with configured item) */}
          <button
            type="button"
            onClick={handleOrder}
            className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full border border-[#D8B45A]/40 text-[#D8B45A] hover:bg-[#D8B45A] hover:text-[#141311] transition-all text-[11px] font-bold uppercase tracking-wider shadow-xs cursor-pointer active:scale-95 shrink-0"
            title="Configure and order in Order Tray"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-current shrink-0" />
            <span className="hidden sm:inline">Order</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const HeroCardItem = React.memo(HeroCardItemComponent);

export const Hero: React.FC<HeroProps> = ({ onAddToCart, onOrderNow }) => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      const navHeight = 110;
      const targetPos = menuSection.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-36 sm:pt-40 md:pt-44 pb-16 md:pb-24 overflow-hidden bg-[#141311] text-[#F4EBDD] border-b border-[#D8B45A]/15">
      {/* Editorial Luxury Ambient Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#D8B45A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-12 left-10 w-72 h-72 rounded-full border border-[#D8B45A]/10 pointer-events-none" />
      <div className="absolute bottom-12 right-10 w-96 h-96 rounded-full border border-[#D8B45A]/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Centered Hero Text */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-12">
          
          {/* Pure Veg & Landmark Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C1916] border border-[#D8B45A]/30 text-xs font-semibold text-[#D8B45A] shadow-xs">
            <VegBadge size="sm" />
            <span className="uppercase tracking-widest text-[11px] font-bold">100% Pure Veg Pizzeria</span>
            <span className="text-[#D8B45A]/40">•</span>
            <span className="text-[#F4EBDD]/70 text-[11px] font-medium">Near Takiya Mela Ground, Patan</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#F4EBDD] font-display tracking-tight leading-[1.08]">
            Craving Fresh, Cheesy <br className="hidden sm:inline" />
            <span className="text-[#D8B45A] italic">Handcrafted Pizza?</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#F4EBDD]/75 font-normal max-w-2xl mx-auto leading-relaxed">
            Welcome to <strong className="text-[#F4EBDD] font-semibold">The Pizza Lover's</strong> in Patan. Fresh dough stretched daily, 100% mozzarella, golden crispy crusts, and pure vegetarian joy.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <button
              id="hero-explore-menu-btn"
              onClick={scrollToMenu}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs text-[#141311] bg-[#D8B45A] hover:bg-[#C9A44B] shadow-md hover:shadow-[0_0_24px_rgba(216,180,90,0.4)] transition-all active:scale-95 cursor-pointer"
            >
              <UtensilsCrossed className="w-4 h-4 text-[#141311]" />
              <span>Explore Menu</span>
              <ArrowRight className="w-4 h-4 text-[#141311]" />
            </button>

            <a
              id="hero-whatsapp-order-btn"
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs text-[#F4EBDD] hover:text-[#D8B45A] bg-[#1C1916] hover:bg-[#25211D] border border-[#D8B45A]/40 hover:border-[#D8B45A] shadow-sm hover:shadow-[0_0_18px_rgba(216,180,90,0.25)] transition-all active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#D8B45A]" />
              <span>Order on WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Hero 4-Column Showcase Grid with Complete Purchasing Functionality */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {HERO_SHOWCASE_ITEMS.map((item) => (
            <HeroCardItem
              key={item.id}
              item={item}
              onAddToCart={onAddToCart}
              onOrderNow={onOrderNow}
            />
          ))}
        </div>

        {/* Bottom Fast Info Bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-[#F4EBDD]/60 uppercase tracking-widest font-semibold">
          <span className="flex items-center gap-1.5 text-[#D8B45A]">
            <Sparkles className="w-3.5 h-3.5" /> Hand-Stretched Dough
          </span>
          <span className="hidden sm:inline text-[#D8B45A]/40">•</span>
          <span className="flex items-center gap-1.5 text-[#D8B45A]">
            <Heart className="w-3.5 h-3.5 fill-[#D8B45A]" /> 100% Mozzarella Cheese
          </span>
          <span className="hidden sm:inline text-[#D8B45A]/40">•</span>
          <span className="flex items-center gap-1.5 text-[#D8B45A]">
            <Flame className="w-3.5 h-3.5" /> Baked Fresh to Order
          </span>
        </div>

      </div>
    </section>
  );
};
