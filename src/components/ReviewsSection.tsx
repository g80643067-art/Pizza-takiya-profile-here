import React from 'react';
import { Star, CheckCircle2, MessageSquareQuote } from 'lucide-react';
import { REVIEWS_SUMMARY, CUSTOMER_REVIEWS } from '../data/reviewsData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#141311] text-[#F4EBDD] border-b border-[#D8B45A]/15 overflow-hidden relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D8B45A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1C1916] border border-[#D8B45A]/30 text-[#D8B45A] text-[10px] font-bold uppercase tracking-widest shadow-xs">
            <Star className="w-3.5 h-3.5 fill-[#D8B45A] text-[#D8B45A]" />
            Verified Customer Praise
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F4EBDD] font-display tracking-tight">
            Loved By Patan Diners ⭐
          </h2>
          <p className="text-[#F4EBDD]/70 text-sm sm:text-base leading-relaxed">
            Authentic impressions from local patrons, students, and family food lovers in Patan.
          </p>

          {/* Rating Big Stat Bar */}
          <div className="pt-3 inline-flex items-center gap-6 px-7 py-3 rounded-full bg-[#1C1916]/90 backdrop-blur-md border border-[#D8B45A]/25 shadow-xl">
            <div className="flex items-center gap-2.5">
              <span className="text-3xl sm:text-4xl font-black text-[#D8B45A] font-display">4.3</span>
              <div className="text-left">
                <div className="flex items-center text-[#D8B45A]">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D8B45A]" />
                  ))}
                  <Star className="w-4 h-4 fill-[#D8B45A] text-[#D8B45A] [clip-path:polygon(0_0,60%_0,60%_100%,0_100%)]" />
                </div>
                <span className="text-[10px] text-[#F4EBDD]/50 font-bold uppercase tracking-widest block">out of 5 stars</span>
              </div>
            </div>

            <div className="w-px h-8 bg-[#D8B45A]/25" />

            <div className="text-left">
              <span className="text-lg font-black text-[#F4EBDD] font-display block leading-tight">
                {REVIEWS_SUMMARY.totalReviews} Reviews
              </span>
              <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                Verified Local Praise
              </span>
            </div>
          </div>
        </div>

        {/* 3-Column Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CUSTOMER_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-7 rounded-3xl bg-[#1C1916]/95 border border-[#D8B45A]/20 hover:border-[#D8B45A]/50 shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3.5">
                {/* Rating stars & Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-[#D8B45A] gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < review.rating
                            ? 'fill-[#D8B45A] text-[#D8B45A]'
                            : 'text-stone-700'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[9px] uppercase font-bold tracking-wider text-[#D8B45A] bg-[#141311] border border-[#D8B45A]/30 px-3 py-0.5 rounded-full shadow-xs">
                    {review.tag}
                  </span>
                </div>

                {/* Sentiment Quote */}
                <div className="relative">
                  <MessageSquareQuote className="w-6 h-6 text-[#D8B45A]/25 absolute -top-1 -left-1 pointer-events-none" />
                  <p className="text-sm sm:text-base font-black text-[#F4EBDD] font-display leading-snug pl-5 italic">
                    “{review.sentiment}”
                  </p>
                </div>
              </div>

              {/* Author Footer */}
              <div className="pt-3 border-t border-[#D8B45A]/15 flex items-center justify-between text-xs text-[#F4EBDD]/60">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#141311] border border-[#D8B45A]/40 text-[#D8B45A] font-bold flex items-center justify-center text-xs shadow-inner">
                    {review.author[0]}
                  </div>
                  <div>
                    <span className="font-bold text-[#F4EBDD] text-xs block leading-tight">{review.author}</span>
                    <span className="text-[9px] text-[#D8B45A] font-medium">Local Diner</span>
                  </div>
                </div>
                <span className="text-[10px] text-[#F4EBDD]/40 font-medium">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Feedback invitation */}
        <div className="mt-12 text-center text-xs text-[#F4EBDD]/50 font-medium">
          Visited The Pizza Lover's recently? Share your review with us directly via WhatsApp or during your next dine-in!
        </div>

      </div>
    </section>
  );
};
