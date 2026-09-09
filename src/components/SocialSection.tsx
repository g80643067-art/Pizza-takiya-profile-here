import React from 'react';
import { Instagram, Facebook, MessageCircle, MapPin, Share2, ArrowUpRight, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const SocialSection: React.FC = () => {
  const socialChannels = [
    {
      name: 'Instagram',
      handle: '@the_pizza_lovers_',
      description: 'Behind-the-scenes pizza tossing, bubbling mozzarella pulls, customer stories, and latest limited offers.',
      icon: <Instagram className="w-6 h-6 text-[#D8B45A]" />,
      actionText: 'Follow Us on Instagram',
      href: RESTAURANT_INFO.instagramUrl,
      badge: 'Daily Stories & Reels',
      accentColor: 'border-[#D8B45A]/40',
      bgGradient: 'from-[#D8B45A]/10 to-transparent',
    },
    {
      name: 'WhatsApp Community',
      handle: '+91 93697 22736',
      description: 'Get instant secret daily discount coupons, quick takeaway ordering, and direct access to counter specials.',
      icon: <MessageCircle className="w-6 h-6 text-emerald-400" />,
      actionText: 'Join WhatsApp VIP Circle',
      href: getGeneralWhatsAppUrl('Hi The Pizza Lover\'s! I would like to join your WhatsApp VIP circle for exclusive discounts.'),
      badge: 'VIP Deals & Fast Ordering',
      accentColor: 'border-emerald-500/40',
      bgGradient: 'from-emerald-500/10 to-transparent',
    },
    {
      name: 'Google Maps Reviews',
      handle: 'The Pizza Lover\'s, Patan',
      description: 'Read genuine reviews from local diners near Takiya Mela Ground or leave your own rating and dining photo.',
      icon: <MapPin className="w-6 h-6 text-[#D8B45A]" />,
      actionText: 'Review on Google Maps',
      href: 'https://maps.google.com/?q=The+Pizza+Lovers+Patan+Takiya+Uttar+Pradesh',
      badge: '4.3 ★ Verified Reviews',
      accentColor: 'border-[#D8B45A]/40',
      bgGradient: 'from-[#D8B45A]/10 to-transparent',
    },
    {
      name: 'Facebook Page',
      handle: 'The Pizza Lover\'s Patan',
      description: 'Connect with our community page, RSVP for local food festivities, and share recommendations with family.',
      icon: <Facebook className="w-6 h-6 text-[#D8B45A]" />,
      actionText: 'Visit Facebook Page',
      href: RESTAURANT_INFO.facebookUrl,
      badge: 'Community & Events',
      accentColor: 'border-[#D8B45A]/40',
      bgGradient: 'from-[#D8B45A]/10 to-transparent',
    },
  ];

  return (
    <section id="social" className="py-20 md:py-28 bg-[#141311] text-[#F4EBDD] border-b border-[#D8B45A]/15 overflow-hidden relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D8B45A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1C1916] border border-[#D8B45A]/30 text-[#D8B45A] text-[10px] font-bold uppercase tracking-widest shadow-xs">
            <Share2 className="w-3.5 h-3.5 text-[#D8B45A]" />
            Social &amp; VIP Community
          </div>

          <h2 
            id="social-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F4EBDD] font-display tracking-tight"
          >
            Join The <span className="text-[#D8B45A]">Pizza Lovers</span> Circle ✦
          </h2>

          <p className="text-[#F4EBDD]/70 text-sm sm:text-base leading-relaxed max-w-lg mx-auto font-normal">
            Connect with us across platforms to catch fresh promotions, behind-the-scenes food photography, and direct WhatsApp lines.
          </p>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialChannels.map((channel, idx) => (
            <a
              key={idx}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex flex-col justify-between p-7 rounded-3xl bg-[#1C1916]/95 border border-[#D8B45A]/25 hover:border-[#D8B45A] shadow-xl hover:shadow-[0_20px_50px_rgba(216,180,90,0.18)] transition-all duration-300 group cursor-pointer"
            >
              {/* Background Gradient Accent */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${channel.bgGradient} opacity-30 group-hover:opacity-60 transition-opacity pointer-events-none`} />

              <div className="relative space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#141311] border border-[#D8B45A]/30 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                    {channel.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#141311] border border-[#D8B45A]/30 text-[10px] font-bold uppercase tracking-widest text-[#D8B45A]">
                    {channel.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-black text-[#F4EBDD] group-hover:text-[#D8B45A] font-display transition-colors">
                    {channel.name}
                  </h3>
                  <p className="text-xs font-bold text-[#D8B45A] mt-0.5">
                    {channel.handle}
                  </p>
                </div>

                <p className="text-xs text-[#F4EBDD]/65 leading-relaxed">
                  {channel.description}
                </p>
              </div>

              <div className="relative pt-4 mt-4 border-t border-[#D8B45A]/15 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-[#D8B45A] group-hover:text-[#F4EBDD] transition-colors">
                <span>{channel.actionText}</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* Special Community Callout Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-[#1C1916]/80 backdrop-blur-md border border-[#D8B45A]/25 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#D8B45A] block">
              Tag @thepizzalovers_patan
            </span>
            <h4 className="text-base font-black text-[#F4EBDD] font-display">
              Snap Your Cheese Pull &amp; Get Featured!
            </h4>
            <p className="text-xs text-[#F4EBDD]/60">
              Share your dining moments at our Patan pizzeria with #ThePizzaLoversPatan
            </p>
          </div>
          <a
            href={RESTAURANT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D8B45A] hover:bg-[#C9A44B] text-[#141311] font-bold text-xs uppercase tracking-widest transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <Instagram className="w-3.5 h-3.5 text-[#141311]" />
            <span>Tag On Stories</span>
          </a>
        </div>

      </div>
    </section>
  );
};
