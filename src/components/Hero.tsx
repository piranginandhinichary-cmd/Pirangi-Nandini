import React from 'react';
import { ArrowDown, ChevronRight, ShieldCheck, Ruler, Sparkles, CheckCircle2 } from 'lucide-react';
import { ASSETS, BUSINESS_INFO } from '../data/furnituresData';

interface HeroProps {
  onOpenQuote: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onExploreWork }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#121110]"
    >
      {/* Background Image with High-Contrast Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.hero}
          alt="Master Carpenter hand-planing solid teak wood in Manikanta Furnitures workshop"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-105 scale-100 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Measured dark scrim gradient overlay for guaranteed text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-[#121110]/80 to-[#121110]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121110]/90 via-[#121110]/65 to-transparent" />
        {/* Subtle wood warm tone wash */}
        <div className="absolute inset-0 bg-[#B45309]/10 mix-blend-color" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="max-w-3xl">
          {/* Badge: Custom Carpentry • Quality Furniture • Expert Craftsmanship */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#E5C07B]">
              CUSTOM CARPENTRY • QUALITY FURNITURE • EXPERT CRAFTSMANSHIP
            </span>
          </div>

          {/* Brand Name Title */}
          <div className="mb-3">
            <span className="text-xs uppercase tracking-widest text-[#BDB5AB]">
              Crafted in India · Bespoke Woodworking Studio
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-wider text-[#FAF6F0] font-brand-mark mt-1">
              MANIKANTA <span className="text-[#C5A059] font-normal">FURNITURES</span>
            </h2>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-serif-heading leading-[1.08] mb-6 text-balance">
            CRAFTED WITH WOOD. <br />
            <span className="italic font-normal text-[#E8D5B5]">BUILT FOR LIFE.</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-[#D1C9BE] leading-relaxed mb-10 max-w-2xl font-light">
            Custom furniture and professional carpentry solutions crafted with precision, quality materials, and attention to every detail. From modular kitchens to heirloom solid teak suites.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
            <button
              onClick={onOpenQuote}
              className="px-7 py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-white bg-gradient-to-r from-[#B45309] to-[#92400E] rounded-md hover:from-[#D97706] hover:to-[#B45309] shadow-xl shadow-[#B45309]/30 transition-all flex items-center justify-center gap-2.5 cursor-pointer hover:translate-y-[-1px] active:scale-95"
            >
              <span>Get a Free Quote</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreWork}
              className="px-7 py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#E8E4DF] bg-[#1E1B18]/80 hover:bg-[#2C2723] border border-[#443B33] hover:border-[#C5A059]/60 rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer backdrop-blur-sm"
            >
              <span>Explore Our Work</span>
            </button>
          </div>

          {/* Trust Value Markers (Clean unboxed text metadata) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-[#332D27]/80 text-[#C7BEB3]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#B45309]/15 border border-[#B45309]/30 flex items-center justify-center text-[#D97706] shrink-0">
                <Ruler className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="font-semibold text-white block">100% Customized</span>
                <span className="text-[#9E958A]">Laser precision fitting</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#B45309]/15 border border-[#B45309]/30 flex items-center justify-center text-[#D97706] shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="font-semibold text-white block">BWP 710 Marine Ply</span>
                <span className="text-[#9E958A]">Boiling waterproof guarantee</span>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#B45309]/15 border border-[#B45309]/30 flex items-center justify-center text-[#D97706] shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="font-semibold text-white block">Aged Solid Teak</span>
                <span className="text-[#9E958A]">Traditional Indian joinery</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll-Down Indicator */}
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          const target = document.querySelector('#about');
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-xs text-[#9E958A] hover:text-[#C5A059] transition-colors group cursor-pointer"
        aria-label="Scroll down to About Section"
      >
        <span className="uppercase tracking-widest text-[10px]">Scroll Down</span>
        <div className="w-6 h-9 rounded-full border border-[#443B33] flex items-start justify-center p-1 group-hover:border-[#C5A059]">
          <div className="w-1.5 h-2 rounded-full bg-[#C5A059] animate-bounce" />
        </div>
      </a>
    </section>
  );
};
