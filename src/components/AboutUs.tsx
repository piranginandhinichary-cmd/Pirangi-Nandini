import React from 'react';
import { Check, Award, Hammer, Shield } from 'lucide-react';
import { ASSETS, BUSINESS_INFO } from '../data/furnituresData';

interface AboutUsProps {
  onOpenQuote: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenQuote }) => {
  const highlights = [
    { title: 'Custom Designs', desc: 'Crafted specifically to your space and personal lifestyle.' },
    { title: 'Quality Materials', desc: 'Certified BWP 710 marine plywood and seasoned hardwoods.' },
    { title: 'Skilled Craftsmanship', desc: 'Decade of traditional Indian and modern European woodwork expertise.' },
    { title: 'Precise Measurements', desc: 'Digital laser site inspection guaranteeing zero-gap installation.' },
    { title: 'Durable Finishing', desc: 'Multi-layer Italian PU and melamine protection against daily wear.' },
    { title: 'Customer Satisfaction', desc: 'Direct carpenter communication and complete post-fitting support.' }
  ];

  return (
    <section id="about" className="py-24 bg-[#121110] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Handcrafted Furniture Showcase Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xl overflow-hidden border border-[#332D27] shadow-2xl bg-[#1A1816] group">
              <img
                src={ASSETS.about}
                alt="Handcrafted solid teak credenza showing master dovetail woodwork"
                className="w-full h-[460px] sm:h-[540px] object-cover object-center img-zoom-hover filter brightness-95"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Floating Artisan Stamp Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 bg-[#181614]/90 backdrop-blur-md rounded-lg border border-[#3D352C] shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#B45309]/20 border border-[#B45309]/40 flex items-center justify-center text-[#E5C07B] shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                      Heritage Carpentry & Modern Joinery
                    </h4>
                    <p className="text-[11px] text-[#A69E93] mt-0.5">
                      Every piece is hand-rubbed and inspected in our workshop prior to delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle decorative timber grain accent block */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-28 h-28 border-t-2 border-l-2 border-[#C5A059]/40 pointer-events-none" />
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-medium">
                ABOUT MANIKANTA FURNITURES
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif-heading leading-tight mb-6 text-balance">
              Craftsmanship That Becomes <br />
              <span className="text-[#E8D5B5] italic font-normal">Part of Your Home</span>
            </h2>

            {/* Narrative Body Copy */}
            <div className="space-y-4 text-sm sm:text-base text-[#C7BEB3] font-light leading-relaxed mb-8">
              <p>
                At <strong className="text-white font-medium">MANIKANTA FURNITURES</strong>, we believe furniture shouldn’t just fill a room—it should belong to it. For over a decade, our workshop has partnered with homeowners, interior architects, and commercial developers to create custom furniture and carpentry solutions rooted in precision, durability, and traditional Indian woodworking integrity.
              </p>
              <p>
                Unlike mass-produced, flatpack furniture that deteriorates after a few years, our pieces are custom-measured, cut from certified boiling waterproof marine plywood and seasoned hardwoods, and assembled with heavy-duty interlocking joinery built to endure for decades.
              </p>
            </div>

            {/* Highlights Grid (6 checks) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#B45309]/20 border border-[#B45309]/50 flex items-center justify-center text-[#D97706] shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-semibold text-white block">
                      {item.title}
                    </span>
                    <span className="text-[11px] text-[#9A9184] leading-tight block">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Statistics Section (Clean, anti-slop tabular numbers) */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#2C2723]">
              <div className="border-r border-[#2C2723] pr-2">
                <div className="text-2xl sm:text-3xl font-bold text-[#E5C07B] font-serif-heading tabular-nums">
                  {BUSINESS_INFO.experienceYears}
                </div>
                <div className="text-[11px] uppercase tracking-wider text-[#9E958A] mt-1 font-medium">
                  Craftsmanship Experience
                </div>
              </div>

              <div className="border-r border-[#2C2723] pr-2">
                <div className="text-2xl sm:text-3xl font-bold text-white font-serif-heading tabular-nums">
                  {BUSINESS_INFO.completedProjects}
                </div>
                <div className="text-[11px] uppercase tracking-wider text-[#9E958A] mt-1 font-medium">
                  Completed Projects
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#D97706] font-serif-heading tabular-nums">
                  {BUSINESS_INFO.satisfactionRate}
                </div>
                <div className="text-[11px] uppercase tracking-wider text-[#9E958A] mt-1 font-medium">
                  Customized Solutions
                </div>
              </div>
            </div>

            {/* Small Action */}
            <div className="mt-8">
              <button
                onClick={onOpenQuote}
                className="text-xs font-semibold uppercase tracking-widest text-[#E5C07B] hover:text-white transition-colors inline-flex items-center gap-2 group cursor-pointer"
              >
                <span>Discuss your furniture dimensions with us</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
