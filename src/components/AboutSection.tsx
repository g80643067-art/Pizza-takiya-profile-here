import React from 'react';
import { Heart, Users, Cake, ShoppingBag, Coins, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { VegBadge } from './VegBadge';

export const AboutSection: React.FC = () => {
  const serviceCards = [
    {
      icon: <VegBadge size="md" />,
      title: '100% Pure Veg',
      desc: 'Strictly vegetarian kitchen adhering to pure practices, farm-fresh local vegetables, and pristine culinary hygiene.',
      stat: 'Pure Veg',
    },
    {
      icon: <Users className="w-5 h-5 text-[#D8B45A]" />,
      title: 'Family & Group Seating',
      desc: 'Welcoming dining environment designed for families, students, and friend circles with comfortable seating.',
      stat: 'Welcoming',
    },
    {
      icon: <Cake className="w-5 h-5 text-[#D8B45A]" />,
      title: 'Celebration Ready',
      desc: 'Celebrate birthdays and milestone moments with custom party platters, celebration music, and warm hospitality.',
      stat: 'Party Ready',
    },
    {
      icon: <ShoppingBag className="w-5 h-5 text-[#D8B45A]" />,
      title: 'Express Takeaway',
      desc: 'Precision packaging ensuring your pizzas, pastas, and garlic breads arrive crisp, steaming hot and ready to enjoy.',
      stat: '15-20 Min',
    },
    {
      icon: <Coins className="w-5 h-5 text-[#D8B45A]" />,
      title: 'Affordable Luxury',
      desc: 'Artisanal pizzas from ₹75, burgers from ₹29, and drinks from ₹20. High-end flavor tailored for every budget.',
      stat: 'From ₹75',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#D8B45A]" />,
      title: 'Artisan Dough & Herbs',
      desc: 'Daily hand-stretched fresh dough, authentic stretch mozzarella, and aromatic Italian herb seasonings.',
      stat: 'Handmade',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#141311] text-[#F4EBDD] relative overflow-hidden border-b border-[#D8B45A]/15">
      {/* Editorial Luxury Ambient Circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full border border-[#D8B45A]/10 pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#D8B45A]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1C1916] border border-[#D8B45A]/30 text-[#D8B45A] text-[10px] font-bold uppercase tracking-widest shadow-xs">
              <Heart className="w-3.5 h-3.5 fill-[#D8B45A] text-[#D8B45A]" />
              Our Story &amp; Standards
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F4EBDD] font-display tracking-tight leading-tight">
              Handcrafted For True <span className="text-[#D8B45A] italic">Pizza Lovers</span>
            </h2>

            <div className="space-y-4 text-[#F4EBDD]/80 text-base leading-relaxed font-normal">
              <p>
                At <strong className="text-[#F4EBDD] font-semibold">THE PIZZA LOVER'S</strong>, we believe authentic comfort food unites community and friends. Situated on Takiya Road in Patan, Uttar Pradesh (near Takiya Mela Ground), our pizzeria was founded on a pure philosophy: serving artisanal, 100% vegetarian Italian-style pizzas and gourmet snacks at honest, accessible prices.
              </p>
              <p className="text-[#F4EBDD]/65 text-sm sm:text-base">
                Whether you desire a rich Mozzarella Cheese Pizza, a spicy Tandoori Paneer Pizza, herb-seasoned garlic bread, crispy momos, or a steaming Kulhad Chai, every creation is prepared fresh on order with hand-kneaded dough and genuine culinary care.
              </p>
            </div>

            {/* Quality Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-2 text-[#F4EBDD]/80 text-xs sm:text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#D8B45A] shrink-0" />
                <span>Hand-stretched fresh dough baked to order</span>
              </div>
              <div className="flex items-center gap-2 text-[#F4EBDD]/80 text-xs sm:text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#D8B45A] shrink-0" />
                <span>100% vegetarian ingredients &amp; real cheeses</span>
              </div>
              <div className="flex items-center gap-2 text-[#F4EBDD]/80 text-xs sm:text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#D8B45A] shrink-0" />
                <span>Fast takeaway packaging &amp; WhatsApp ordering</span>
              </div>
              <div className="flex items-center gap-2 text-[#F4EBDD]/80 text-xs sm:text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#D8B45A] shrink-0" />
                <span>Accessible pricing from ₹75 to ₹200</span>
              </div>
            </div>
          </div>

          {/* Right Image Showcase with Gold Framing */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[32px] overflow-hidden border border-[#D8B45A]/30 shadow-2xl bg-[#141311] group">
              <img
                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=85"
                alt="Cheesy vegetarian pizza made with love"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141311]/95 via-[#141311]/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 space-y-1">
                <span className="text-[#D8B45A] font-bold text-[10px] uppercase tracking-widest block">
                  Artisan Wood-Fired Style 🍕
                </span>
                <h3 className="text-lg sm:text-xl font-black text-[#F4EBDD] font-display">
                  Patan's Favorite Vegetarian Pizzeria
                </h3>
                <p className="text-xs text-[#F4EBDD]/60">
                  Takiya Rd, Patan, UP • Open Daily 10:00 AM – 10:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION HEADER FOR THE SERVICES GRID */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#1C1916] border border-[#D8B45A]/25 text-[#D8B45A] text-[10px] font-bold uppercase tracking-widest">
            <Sparkles className="w-3 h-3 text-[#D8B45A]" />
            Hospitality &amp; Dining Standards
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-[#F4EBDD] font-display">
            The Pizzeria Experience ✦
          </h3>
          <p className="text-xs sm:text-sm text-[#F4EBDD]/60">
            Our pillars of culinary quality, welcoming atmosphere, and pure vegetarian integrity.
          </p>
        </div>

        {/* 6-Column Responsive Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((card, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-[#1C1916]/90 border border-[#D8B45A]/25 hover:border-[#D8B45A]/50 shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#141311] border border-[#D8B45A]/35 text-[#D8B45A] shadow-inner">
                    {card.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#141311] border border-[#D8B45A]/30 text-[10px] font-bold uppercase tracking-widest text-[#D8B45A]">
                    {card.stat}
                  </span>
                </div>

                <h4 className="text-lg font-black text-[#F4EBDD] group-hover:text-[#D8B45A] font-display transition-colors">
                  {card.title}
                </h4>

                <p className="text-xs text-[#F4EBDD]/65 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-[#D8B45A]/15 flex items-center justify-between text-[10px] text-[#A88945] font-bold uppercase tracking-widest">
                <span>The Pizza Lover's Standard</span>
                <span className="text-emerald-400 font-bold">100% Veg</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
