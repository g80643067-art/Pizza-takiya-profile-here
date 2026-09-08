import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getGeneralWhatsAppUrl, DISPLAY_PHONE } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      <a
        id="floating-whatsapp-btn"
        href={getGeneralWhatsAppUrl("Hi The Pizza Lover's! I want to check today's offers and place an order.")}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 p-3 sm:px-4 sm:py-3 rounded-full bg-[#D8B45A] hover:bg-[#C9A44B] text-[#141311] border border-[#D8B45A] shadow-[0_4px_25px_rgba(216,180,90,0.4)] hover:shadow-[0_0_25px_rgba(216,180,90,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Chat on WhatsApp with The Pizza Lover's"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 text-[#141311]" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#141311] rounded-full border border-[#D8B45A] animate-ping" />
        </div>
        <div className="hidden sm:block text-left">
          <span className="text-[9px] uppercase font-bold text-[#141311]/80 tracking-widest block leading-none">
            Order on WhatsApp
          </span>
          <span className="text-xs font-black text-[#141311] leading-tight">
            {DISPLAY_PHONE}
          </span>
        </div>
      </a>
    </div>
  );
};
