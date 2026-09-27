import React from 'react';
import { WHY_CHOOSE_US } from '../data/furnituresData';
import { Compass, ShieldCheck, Ruler, Sparkles, MessageCircle, HeartHandshake } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const iconList = [
    <Compass className="w-5 h-5 text-[#C5A059]" />,
    <ShieldCheck className="w-5 h-5 text-[#C5A059]" />,
    <Ruler className="w-5 h-5 text-[#C5A059]" />,
    <Sparkles className="w-5 h-5 text-[#C5A059]" />,
    <MessageCircle className="w-5 h-5 text-[#C5A059]" />,
    <HeartHandshake className="w-5 h-5 text-[#C5A059]" />
  ];

  return (
    <section className="py-24 bg-[#0F0E0D] relative border-t border-[#24211D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-medium">
              THE MANIKANTA ADVANTAGE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-heading mb-4">
            WHY MANIKANTA FURNITURES?
          </h2>
          <p className="text-sm sm:text-base text-[#ADA59B] leading-relaxed font-light">
            We operate as an authentic master carpenter studio, not a high-volume retailer. Here is why discerning homeowners choose our bespoke craftsmanship.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={item.number}
              className="group p-8 rounded-xl bg-[#171514] border border-[#2B2723] hover:border-[#B45309]/60 transition-all duration-300 relative overflow-hidden flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#B45309]/10"
            >
              {/* Subtle gold corner highlight */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#B45309]/15 to-transparent pointer-events-none" />

              <div>
                {/* Header Row: Index & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#C5A059] border-b border-[#3E3831] pb-0.5">
                    {item.number}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-[#221F1C] border border-[#352F29] flex items-center justify-center group-hover:border-[#B45309] transition-colors">
                    {iconList[idx]}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white font-serif-heading tracking-wide mb-1 group-hover:text-[#E5C07B] transition-colors">
                  {item.title}
                </h3>
                <span className="text-xs text-[#8C8377] block mb-3 font-medium">
                  {item.subtitle}
                </span>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#BDB5AB] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="pt-6 mt-6 border-t border-[#24201D] flex items-center justify-between text-[11px] text-[#7A7368]">
                <span>Artisan Standard</span>
                <span className="text-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity">
                  Verified Quality ✓
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
