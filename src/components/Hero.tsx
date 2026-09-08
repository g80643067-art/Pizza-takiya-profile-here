import React from 'react';
import { UtensilsCrossed, MessageCircle, Heart, ArrowRight, Sparkles, ShieldCheck, Flame, Star } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';
import { VegBadge } from './VegBadge';

// Signature Showcase Visuals
import loadedCheesePizzaImg from '../assets/images/loaded_cheese_pizza.jpg';
import paneerPizzaImg from '../assets/images/paneer_pizza_1788759992844.jpg';
import stuffedGarlicBreadImg from '../assets/images/stuffed_garlic_bread_1788759643370.jpg';
import realPizzaCokeImg from '../assets/images/real_pizza_coke_1788811139041.jpg';

export const Hero: React.FC = () => {
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

        {/* Hero 4-Column Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {[
            {
              id: 'hero-card-1',
              title: 'Loaded Cheese Pizza',
              category: 'Artisanal Pizza',
              price: '₹135',
              tag: "Chef's Signature",
              image: loadedCheesePizzaImg,
              desc: 'Double stretchy mozzarella, golden herb crust, and secret spiced tomato sauce.',
            },
            {
              id: 'hero-card-2',
              title: 'Medium Pizza + 2 Coke',
              category: 'Super Saver Combo',
              price: '₹209',
              tag: 'Best Deal',
              image: realPizzaCokeImg,
              desc: 'Hand-tossed medium pizza served bubbling hot with two chilled fizzy Cokes.',
            },
            {
              id: 'hero-card-3',
              title: 'Tandoori Paneer Pizza',
              category: 'Desi Fusion',
              price: '₹135',
              tag: 'Trending',
              image: paneerPizzaImg,
              desc: 'Marinated cottage cheese cubes, charred onions, crisp capsicum and rich cheese.',
            },
            {
              id: 'hero-card-4',
              title: 'Stuffed Garlic Bread',
              category: 'Italian Sides',
              price: '₹69',
              tag: 'Crispy & Cheesy',
              image: stuffedGarlicBreadImg,
              desc: 'Golden-brown artisan crust stuffed with melted cheese, sweet corn, and herbs.',
            },
          ].map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col bg-[#1C1916]/95 backdrop-blur-md rounded-3xl overflow-hidden border border-[#D8B45A]/25 hover:border-[#D8B45A] shadow-xl hover:shadow-[0_16px_40px_rgba(216,180,90,0.18)] transition-all duration-300 group"
            >
              {/* Top Tag & Price */}
              <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D8B45A] text-[#141311] text-[9px] font-bold uppercase tracking-widest shadow-md">
                <Sparkles className="w-3 h-3 text-[#141311]" />
                <span>{item.tag}</span>
              </div>

              <div className="absolute top-3.5 right-3.5 z-10 bg-[#141311]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#D8B45A]/30 text-xs text-[#D8B45A] font-black">
                <span>{item.price}</span>
              </div>

              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-[#141311]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1916] via-[#1C1916]/20 to-transparent" />
              </div>

              {/* Card Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D8B45A] block">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-black text-[#F4EBDD] group-hover:text-[#D8B45A] font-display transition-colors tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#F4EBDD]/65 text-xs leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2.5 flex items-center justify-between border-t border-[#D8B45A]/15 text-[10px]">
                  <span className="text-[#D8B45A] font-bold uppercase tracking-wider flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Fresh Handcrafted
                  </span>
                  <span className="text-emerald-400 font-bold uppercase tracking-wider">
                    Pure Veg
                  </span>
                </div>
              </div>
            </div>
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
