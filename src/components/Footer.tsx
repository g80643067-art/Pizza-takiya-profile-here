import React from 'react';
import { Phone, MapPin, Clock, MessageCircle, Heart, ArrowUp, Navigation, Instagram, Facebook } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';
import { VegBadge } from './VegBadge';

export const Footer: React.FC = () => {
  const scrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 80;
      const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#141311] text-[#F4EBDD]/70 border-t border-[#D8B45A]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#D8B45A]/15">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#1C1916] border border-[#D8B45A]/40 flex items-center justify-center text-[#D8B45A] font-display text-sm font-black shadow-xs">
                P
              </div>
              <div>
                <h3 className="text-xl font-black text-[#F4EBDD] font-display tracking-tight">
                  {RESTAURANT_INFO.name}
                </h3>
                <p className="text-[#D8B45A] text-[10px] font-bold uppercase tracking-widest">
                  Artisanal Italian & Café Delights
                </p>
              </div>
            </div>

            <div className="space-y-1 text-xs text-[#F4EBDD]/80">
              <div className="flex items-center gap-2">
                <VegBadge size="sm" />
                <span className="font-bold text-emerald-400">100% Pure Vegetarian Kitchen</span>
              </div>
              <p className="text-[#F4EBDD]/60 text-xs">
                Takiya Rd, Patan, Takiya, Uttar Pradesh 209867 (near Takiya Mela Ground)
              </p>
            </div>

            <p className="text-xs text-[#F4EBDD]/60 max-w-sm leading-relaxed">
              Serving handcrafted vegetarian Italian pizzas, burgers, momos, creamy pastas, golden fries, and rich kulhad beverages. Handcrafted fresh to order.
            </p>

            {/* Quick Contact Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1C1916] hover:bg-[#1C1916]/80 border border-[#D8B45A]/30 text-xs font-bold text-[#F4EBDD] hover:text-[#D8B45A] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D8B45A]" />
                <span>{RESTAURANT_INFO.phone}</span>
              </a>

              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#D8B45A] hover:bg-[#C9A44B] border border-[#D8B45A] text-[#141311] text-xs font-bold transition-all shadow-md"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#141311]" />
                <span>WhatsApp Order</span>
              </a>

              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                title="Follow @the_pizza_lovers_ on Instagram"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1C1916] hover:bg-[#D8B45A] text-[#D8B45A] hover:text-[#141311] border border-[#D8B45A]/30 transition-all cursor-pointer shadow-xs active:scale-95"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={RESTAURANT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
                title="Visit The Pizza Lover's on Facebook"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1C1916] hover:bg-[#D8B45A] text-[#D8B45A] hover:text-[#141311] border border-[#D8B45A]/30 transition-all cursor-pointer shadow-xs active:scale-95"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] font-bold text-[#D8B45A] uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Artisan Menu', href: '#menu' },
                { name: 'Curated Combos', href: '#combos' },
                { name: 'Our Story', href: '#about' },
                { name: 'Guest Reviews (4.3 ⭐)', href: '#reviews' },
                { name: 'Find Pizzeria', href: '#location' },
                { name: 'Connect With Us', href: '#social' },
                { name: 'Contact & Inquiries', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-[#F4EBDD]/60 hover:text-[#D8B45A] transition-colors text-left cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Timings & Location Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[10px] font-bold text-[#D8B45A] uppercase tracking-widest">
              Restaurant Hours & Visit
            </h4>
            
            <div className="p-4 rounded-3xl bg-[#1C1916] border border-[#D8B45A]/25 space-y-2.5 text-xs text-[#F4EBDD]/80">
              <div className="flex items-center gap-2 text-[#D8B45A] font-bold">
                <Clock className="w-4 h-4" />
                <span>Open Daily: 10:00 AM – 10:00 PM</span>
              </div>
              <p className="text-[#F4EBDD]/60 text-xs leading-relaxed">
                Fresh dine-in service, takeaway packaging & quick WhatsApp order pickup available throughout operating hours.
              </p>
              <div className="pt-1 flex items-center gap-2">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                    `${RESTAURANT_INFO.name}, ${RESTAURANT_INFO.address}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#D8B45A] hover:underline"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[#F4EBDD]/60 text-xs">
              <MapPin className="w-3.5 h-3.5 text-[#D8B45A] shrink-0" />
              <span>Takiya Rd, Patan, UP 209867</span>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F4EBDD]/50">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} THE PIZZA LOVER'S. All rights reserved. Handcrafted with{' '}
            <Heart className="w-3.5 h-3.5 text-[#D8B45A] fill-[#D8B45A]" /> in Patan.
          </p>
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#F4EBDD]/60">
            <span>100% Pure Veg</span>
            <span className="text-[#D8B45A]">✦</span>
            <span>Family & Celebration Ready</span>
            <span className="text-[#D8B45A]">✦</span>
            <span>Rating 4.3/5 ⭐</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
