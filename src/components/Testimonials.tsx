import React from 'react';
import { TESTIMONIALS } from '../data/furnituresData';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#121110] relative border-t border-[#24211D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-medium">
              CLIENT EXPERIENCES
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-heading mb-4">
            WHAT OUR CUSTOMERS SAY
          </h2>
          <p className="text-sm sm:text-base text-[#ADA59B] leading-relaxed font-light">
            Real feedback from homeowners and architects who entrusted their living spaces to our master carpentry studio.
          </p>
          <span className="text-[11px] text-[#787167] mt-2 block">
            *Verified client project reviews (editable sample testimonials)
          </span>
        </div>

        {/* 4 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-xl bg-[#181614] border border-[#2D2824] hover:border-[#B45309]/50 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* 5 Stars Rating & Project Type */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#E5C07B]" aria-label="5 stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <span className="text-[11px] text-[#8C8377] font-mono">
                    {t.date}
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm text-[#CDC4B8] font-light italic leading-relaxed mb-6">
                  “{t.quote}”
                </p>
              </div>

              {/* Customer Attribution */}
              <div className="pt-4 border-t border-[#26221E] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white font-serif-heading">
                    {t.name}
                  </h4>
                  <span className="text-xs text-[#9E958A] block">
                    {t.location}
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-medium text-[#C5A059] block">
                    {t.project}
                  </span>
                  <div className="inline-flex items-center gap-1 text-[10px] text-[#25D366]">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified Commission</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
