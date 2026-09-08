import React from 'react';
import { MapPin, Navigation, Phone, MessageCircle, Clock, Compass } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const LocationSection: React.FC = () => {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    `${RESTAURANT_INFO.name}, ${RESTAURANT_INFO.address}`
  )}`;

  return (
    <section id="location" className="py-16 md:py-24 bg-[#141311] text-[#F4EBDD] border-b border-[#D8B45A]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1C1916] border border-[#D8B45A]/30 text-[#D8B45A] text-[10px] font-bold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5 text-[#D8B45A]" />
            Find Our Pizzeria
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#F4EBDD] font-display tracking-tight">
            Visit The Pizza Lover's in Patan 📍
          </h2>
          <p className="text-[#F4EBDD]/70 text-sm sm:text-base leading-relaxed">
            Conveniently located on Takiya Road near Takiya Mela Ground with welcoming hospitality and easy parking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Location Details & Quick Action Buttons */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-3xl bg-[#1C1916] border border-[#D8B45A]/25 shadow-xl space-y-6">
              
              {/* Address card */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#141311] text-[#D8B45A] flex items-center justify-center shrink-0 mt-0.5 border border-[#D8B45A]/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#F4EBDD] font-display tracking-tight">
                    {RESTAURANT_INFO.name}
                  </h3>
                  <p className="text-[#F4EBDD]/70 text-xs sm:text-sm mt-1 leading-relaxed">
                    {RESTAURANT_INFO.address}
                  </p>
                  <p className="text-xs font-bold text-[#D8B45A] mt-1 flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5 text-[#D8B45A]" />
                    Landmark: {RESTAURANT_INFO.landmark}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-[#D8B45A]/15">
                <div className="w-10 h-10 rounded-2xl bg-[#141311] text-[#D8B45A] flex items-center justify-center shrink-0 mt-0.5 border border-[#D8B45A]/30">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#F4EBDD] font-display">
                    Operating Hours
                  </h4>
                  <p className="text-[#F4EBDD]/70 text-xs sm:text-sm mt-0.5">
                    Open Daily: <strong className="text-[#F4EBDD] font-semibold">{RESTAURANT_INFO.hours}</strong>
                  </p>
                  <span className="inline-block mt-1 text-[10px] font-bold uppercase tracking-widest text-[#D8B45A] bg-[#141311] px-2.5 py-0.5 rounded-full border border-[#D8B45A]/30">
                    Dine-in & Takeaway Open
                  </span>
                </div>
              </div>

              {/* Action Buttons: Get Directions, Call Now, WhatsApp */}
              <div className="pt-2 space-y-2.5">
                {/* Get Directions Button - Primary CTA */}
                <a
                  id="location-directions-btn"
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#D8B45A] hover:bg-[#C9A44B] hover:shadow-[0_0_20px_rgba(216,180,90,0.35)] text-[#141311] font-bold text-xs uppercase tracking-widest transition-all active:scale-95 cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-[#141311]" />
                  <span>Get Directions on Google Maps</span>
                </a>

                <div className="grid grid-cols-2 gap-2.5">
                  {/* Call Now Button - Secondary CTA */}
                  <a
                    id="location-call-btn"
                    href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-full border border-[#D8B45A]/40 text-[#D8B45A] hover:bg-[#D8B45A] hover:text-[#141311] font-bold text-xs uppercase tracking-widest transition-all cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>

                  {/* WhatsApp Button */}
                  <a
                    id="location-whatsapp-btn"
                    href={getGeneralWhatsAppUrl(`Hi The Pizza Lover's! I am looking for directions to your café near Takiya Mela Ground, Patan.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-full bg-[#141311] hover:bg-[#D8B45A] hover:text-[#141311] border border-[#D8B45A]/40 text-[#F4EBDD] font-bold text-xs uppercase tracking-widest transition-colors shadow-xs group cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#D8B45A] group-hover:text-[#141311]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Embedded Map Section */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-[#D8B45A]/30 shadow-xl bg-[#141311] h-[380px] sm:h-[420px] group">
              {/* Responsive Google Maps Embed */}
              <iframe
                title="The Pizza Lover's Restaurant Location Map"
                src="https://maps.google.com/maps?q=Takiya+Rd,+Patan,+Takiya,+Uttar+Pradesh+209867&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[25%] contrast-[1.1] group-hover:grayscale-0 transition-all duration-300"
              />

              {/* Floating overlay chip on map */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto max-w-xs p-3.5 rounded-2xl bg-[#141311]/95 text-[#F4EBDD] backdrop-blur-md border border-[#D8B45A]/40 shadow-lg text-xs">
                <div className="flex items-center gap-2 font-black text-[#D8B45A] font-display">
                  <span>🍕 THE PIZZA LOVER'S</span>
                </div>
                <p className="text-[#F4EBDD]/70 text-[11px] mt-1">
                  Takiya Rd, Patan, UP 209867 (near Takiya Mela Ground)
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
