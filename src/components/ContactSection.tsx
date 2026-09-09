import React, { useState } from 'react';
import { Phone, MapPin, Clock, Send, MessageCircle, CheckCircle, Cake, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';
import { WHATSAPP_NUMBER, openWhatsAppUrl } from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    inquiryType: 'Order Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    const text = `Hi The Pizza Lover's! I am contacting you from your website:\n\nName: ${formData.name.trim()}\nPhone: ${formData.phone.trim()}\nType: ${formData.inquiryType}\nMessage/Order: ${formData.message.trim() || 'I would like to inquire about ordering delicious pizza.'}`;
    
    // Open WhatsApp with prefilled message
    openWhatsAppUrl(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`);

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', inquiryType: 'Order Inquiry', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#141311] text-[#F4EBDD] border-b border-[#D8B45A]/15 overflow-hidden relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D8B45A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1C1916] border border-[#D8B45A]/30 text-[#D8B45A] text-[10px] font-bold uppercase tracking-widest shadow-xs">
            <Phone className="w-3.5 h-3.5 text-[#D8B45A]" />
            Connect With Us
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F4EBDD] font-display tracking-tight">
            Contact &amp; Reservations 💬
          </h2>
          <p className="text-[#F4EBDD]/70 text-sm sm:text-base leading-relaxed">
            Reach out directly for custom combo orders, dine-in tables, or party celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <div className="p-6 rounded-3xl bg-[#1C1916] border border-[#D8B45A]/25 shadow-xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#141311] text-[#D8B45A] flex items-center justify-center shrink-0 border border-[#D8B45A]/30">
                <Phone className="w-6 h-6 text-[#D8B45A]" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase text-[#A88945] tracking-widest block">Phone & WhatsApp</span>
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="text-xl font-black text-[#F4EBDD] font-display hover:text-[#D8B45A] transition-colors block"
                >
                  {RESTAURANT_INFO.phone}
                </a>
                <p className="text-xs text-[#F4EBDD]/60">
                  Call or WhatsApp for immediate order placement & takeaways.
                </p>
              </div>
            </div>

            {/* Address Card */}
            <div className="p-6 rounded-3xl bg-[#1C1916] border border-[#D8B45A]/25 shadow-xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#141311] text-[#D8B45A] flex items-center justify-center shrink-0 border border-[#D8B45A]/30">
                <MapPin className="w-6 h-6 text-[#D8B45A]" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase text-[#A88945] tracking-widest block">Pizzeria Address</span>
                <p className="text-sm font-bold text-[#F4EBDD] leading-snug">
                  {RESTAURANT_INFO.address}
                </p>
                <p className="text-xs text-[#D8B45A] font-medium">
                  Near Takiya Mela Ground, Patan, UP 209867
                </p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="p-6 rounded-3xl bg-[#1C1916] border border-[#D8B45A]/25 shadow-xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#141311] text-[#D8B45A] flex items-center justify-center shrink-0 border border-[#D8B45A]/30">
                <Clock className="w-6 h-6 text-[#D8B45A]" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase text-[#A88945] tracking-widest block">Operating Hours</span>
                <p className="text-sm font-black text-[#F4EBDD] font-display">
                  {RESTAURANT_INFO.hours}
                </p>
                <p className="text-xs text-emerald-400 font-bold">
                  Open daily for dine-in & takeaway service
                </p>
              </div>
            </div>

            {/* Party & Event callout */}
            <div className="p-6 rounded-3xl bg-[#1C1916] text-[#F4EBDD] relative overflow-hidden border border-[#D8B45A]/35 shadow-xl space-y-2">
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full border border-[#D8B45A]/15 pointer-events-none" />
              <div className="flex items-center gap-2">
                <Cake className="w-4 h-4 text-[#D8B45A]" />
                <span className="font-black text-sm text-[#F4EBDD] font-display">Host Your Birthday Celebration Here!</span>
              </div>
              <p className="text-xs text-[#F4EBDD]/70 leading-relaxed">
                Enjoy customized party platters, background music, and cheerful hospitality. Reach out through WhatsApp to reserve.
              </p>
            </div>

          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-[#1C1916] border border-[#D8B45A]/25 shadow-xl space-y-6">
              <div>
                <h3 className="text-2xl font-black text-[#F4EBDD] font-display tracking-tight">
                  Send an Order / Inquiry Message
                </h3>
                <p className="text-[#F4EBDD]/60 text-xs sm:text-sm mt-1">
                  Fill in your details and connect directly with our kitchen team via WhatsApp for immediate response.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-3xl bg-[#141311] border border-[#D8B45A]/40 text-center space-y-3">
                  <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-black text-[#D8B45A] font-display">
                    Message Sent to WhatsApp!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#F4EBDD]/70 max-w-sm mx-auto">
                    Thank you! WhatsApp has opened with your inquiry. We look forward to crafting your fresh order with passion.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-[#A88945] block">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#141311] border border-[#D8B45A]/25 focus:border-[#D8B45A] focus:ring-1 focus:ring-[#D8B45A] text-[#F4EBDD] placeholder:text-[#F4EBDD]/35 text-xs sm:text-sm transition-all outline-none"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-[#A88945] block">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#141311] border border-[#D8B45A]/25 focus:border-[#D8B45A] focus:ring-1 focus:ring-[#D8B45A] text-[#F4EBDD] placeholder:text-[#F4EBDD]/35 text-xs sm:text-sm transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Inquiry Type */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[#A88945] block">
                      Inquiry / Request Type
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#141311] border border-[#D8B45A]/25 focus:border-[#D8B45A] focus:ring-1 focus:ring-[#D8B45A] text-[#F4EBDD] text-xs sm:text-sm transition-all outline-none cursor-pointer"
                    >
                      <option value="Order Inquiry">Order Inquiry / Delivery Request</option>
                      <option value="Table Reservation">Table Reservation / Dining Inquiry</option>
                      <option value="Birthday Party Celebration">Birthday Party or Group Celebration</option>
                      <option value="Menu Question">Custom Flavors / Special Request</option>
                      <option value="General Feedback">Feedback or Suggestion</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[#A88945] block">
                      Your Message / Items Desired
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us what you'd like to order or ask..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#141311] border border-[#D8B45A]/25 focus:border-[#D8B45A] focus:ring-1 focus:ring-[#D8B45A] text-[#F4EBDD] placeholder:text-[#F4EBDD]/35 text-xs sm:text-sm transition-all outline-none resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-[#D8B45A] hover:bg-[#C9A44B] hover:shadow-[0_0_24px_rgba(216,180,90,0.35)] text-[#141311] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#141311]" />
                    <span>Send Inquiry to WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
