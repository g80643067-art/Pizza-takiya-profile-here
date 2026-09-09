import React, { useState, useEffect } from 'react';
import { Phone, ShoppingBag, MapPin, ArrowRight, Utensils, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsScrolled(scrollY > 20);

          const sections = ['home', 'menu', 'combos', 'about', 'reviews', 'location', 'contact'];
          const scrollPosition = scrollY + 140;

          for (const sectionId of sections) {
            const el = document.getElementById(sectionId);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPosition >= top && scrollPosition < top + height) {
                setActiveSection(sectionId);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navButtons = [
    { id: 'home', name: 'Home', href: '#home' },
    { id: 'menu', name: 'Menu', href: '#menu' },
    { id: 'combos', name: 'Combos', href: '#combos' },
    { id: 'about', name: 'About', href: '#about' },
    { id: 'reviews', name: 'Reviews', href: '#reviews' },
    { id: 'location', name: 'Location', href: '#location' },
    { id: 'contact', name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 110;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
      const sectionId = href.replace('#', '');
      setActiveSection(sectionId);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* Top micro bar for quick restaurant status */}
      <div className="bg-[#141311] text-[#F4EBDD]/70 text-[11px] py-1 px-4 border-b border-[#D8B45A]/15">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 text-[#F4EBDD]/70">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-400 font-bold tracking-wider uppercase text-[10px]">Open Now</span>
              <span className="hidden sm:inline text-[#F4EBDD]/60 text-[11px] font-medium">({RESTAURANT_INFO.hours})</span>
            </span>
            <span className="hidden md:flex items-center gap-1 text-[#F4EBDD]/70 text-[11px]">
              <MapPin className="w-3 h-3 text-[#D8B45A]" />
              <span>Takiya Rd, Patan, UP</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href={`tel:${RESTAURANT_INFO.phoneRaw}`} 
              className="flex items-center gap-1.5 text-[#F4EBDD] hover:text-[#D8B45A] font-bold text-xs tracking-wider transition-colors"
            >
              <Phone className="w-3 h-3 text-[#D8B45A]" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>
            <span className="hidden sm:inline text-[#D8B45A]/30">|</span>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest bg-[#1C1916] text-[#D8B45A] border border-[#D8B45A]/30">
              100% Pure Veg
            </span>
          </div>
        </div>
      </div>

      {/* Main Bar: Brand Logo & Primary Action Buttons */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#141311]/98 backdrop-blur-md shadow-2xl border-b border-[#D8B45A]/25' 
          : 'bg-[#141311]/95 backdrop-blur-md border-b border-[#D8B45A]/20'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Brand Logo & Veg indicator */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group shrink-0"
          >
            <div className="w-8 h-8 rounded-full bg-[#1C1916] border border-[#D8B45A]/50 flex items-center justify-center text-[#D8B45A] font-black text-xs shadow-sm group-hover:border-[#D8B45A] transition-colors">
              🍕
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-xl md:text-2xl font-black tracking-tight text-[#F4EBDD] font-display group-hover:text-[#D8B45A] transition-colors leading-none">
                THE PIZZA LOVER'S
              </span>
              <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-[#A88945] mt-0.5">
                Patan • 100% Pure Veg
              </span>
            </div>
          </a>

          {/* Direct Action Buttons - Always Visible & Clearly Fitted */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* View Order Tray Button */}
            <button
              id="nav-cart-btn"
              onClick={onOpenCart}
              className="relative flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-[#1C1916] hover:bg-[#25211D] text-[#D8B45A] border border-[#D8B45A]/40 shadow-xs transition-all cursor-pointer active:scale-95"
              aria-label="View Order Tray"
            >
              <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D8B45A]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider hidden xs:inline">Tray</span>
              {cartCount > 0 ? (
                <span className="bg-[#D8B45A] text-[#141311] text-[10px] font-black w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              ) : null}
            </button>

            {/* Direct Order Now CTA Button */}
            <a
              id="nav-order-now-btn"
              href="#menu"
              onClick={(e) => handleNavClick(e, '#menu')}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#D8B45A] hover:bg-[#C9A44B] text-[#141311] text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow-[0_0_18px_rgba(216,180,90,0.35)] cursor-pointer active:scale-95 shrink-0"
            >
              <Utensils className="w-3 h-3 text-[#141311]" />
              <span>Order Now</span>
            </a>
          </div>
        </div>

        {/* Persistent All-Buttons Navigation Strip - Smooth touch scroll on mobile, centered on larger screens */}
        <div className="bg-[#181613] border-t border-[#D8B45A]/15 px-2 py-1.5 overflow-hidden w-full">
          <div className="max-w-7xl mx-auto flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar flex-nowrap sm:flex-wrap gap-1 sm:gap-2 touch-pan-x">
            {navButtons.map((btn) => {
              const isActive = activeSection === btn.id;
              return (
                <a
                  key={btn.id}
                  id={`nav-btn-${btn.id}`}
                  href={btn.href}
                  onClick={(e) => handleNavClick(e, btn.href)}
                  className={`px-2.5 sm:px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer select-none whitespace-nowrap ${
                    isActive
                      ? 'bg-[#D8B45A] text-[#141311] shadow-[0_0_12px_rgba(216,180,90,0.35)] scale-[1.03]'
                      : 'text-[#F4EBDD]/75 hover:text-[#D8B45A] hover:bg-[#25211D] border border-[#D8B45A]/20'
                  }`}
                >
                  {btn.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};
