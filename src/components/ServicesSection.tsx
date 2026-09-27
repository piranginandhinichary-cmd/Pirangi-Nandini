import React, { useState } from 'react';
import { ArrowRight, Check, X, Clock, Layers, Sparkles, ChevronRight } from 'lucide-react';
import { SERVICES } from '../data/furnituresData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleInquire = (service: ServiceItem) => {
    setSelectedService(null);
    onSelectServiceForQuote(service.title);
  };

  return (
    <section id="services" className="py-24 bg-[#161514] border-t border-[#292521] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-medium">
                WHAT WE DO BEST
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-heading">
              OUR CARPENTRY SERVICES
            </h2>
            <p className="text-sm sm:text-base text-[#B3ABA0] mt-3 font-light">
              From tailored modular storage systems to one-of-a-kind hardwood dining tables, every project is engineered to your room's exact dimensions.
            </p>
          </div>

          <div className="text-xs text-[#9E958A] border-l-2 border-[#B45309] pl-4">
            <p className="text-white font-semibold">100% Factory Direct Craftsmanship</p>
            <p>No middlemen markups · Genuine marine grade materials</p>
          </div>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-[#1B1917] rounded-xl overflow-hidden border border-[#2D2824] hover:border-[#B45309]/60 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-[#B45309]/10"
            >
              {/* Card Image Container */}
              <div className="relative h-48 w-full overflow-hidden bg-[#121110]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover img-zoom-hover filter brightness-90 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1917] via-transparent to-black/20" />
                
                {/* Numeric Index Tag */}
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-[#3E3832] text-[10px] font-mono text-[#D8D2C9]">
                  0{index + 1}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white font-serif-heading group-hover:text-[#E5C07B] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#A8A095] line-clamp-3 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-3 border-t border-[#292420] flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] group-hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>

                  <span className="text-[10px] text-[#787167] font-medium">
                    {service.typicalTimeline.split(' ')[0]} {service.typicalTimeline.split(' ')[1]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Details Modal Drawer */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-2xl bg-[#1A1816] border border-[#3D352C] rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-[#121110] shrink-0">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1816] via-[#1A1816]/60 to-transparent" />
              
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-[#D8D2C9] hover:text-white hover:bg-black transition-colors focus:outline-none cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs uppercase tracking-widest text-[#C5A059] font-medium block mb-1">
                  Custom Carpentry Specialty
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif-heading">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#CDC4B8]">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#9E958A] mb-2">
                  Overview & Craftsmanship
                </h4>
                <p className="text-sm leading-relaxed text-[#E0D9CF]">
                  {selectedService.fullDesc}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#9E958A] mb-3">
                  Key Specifications & Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs">
                      <div className="w-4 h-4 rounded-full bg-[#B45309]/20 border border-[#B45309]/50 flex items-center justify-center text-[#D97706] shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Materials & Lead Times */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#2C2723]">
                <div className="p-3.5 bg-[#211E1B] rounded-lg border border-[#332D27]">
                  <span className="text-[11px] uppercase tracking-wider text-[#968E83] block mb-1">
                    Standard Materials
                  </span>
                  <p className="text-xs font-medium text-white">
                    {selectedService.materials.join(', ')}
                  </p>
                </div>

                <div className="p-3.5 bg-[#211E1B] rounded-lg border border-[#332D27]">
                  <span className="text-[11px] uppercase tracking-wider text-[#968E83] block mb-1">
                    Typical Lead Time
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-[#E5C07B]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{selectedService.typicalTimeline}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="p-6 bg-[#161413] border-t border-[#2C2723] flex items-center justify-between shrink-0">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="text-xs font-medium uppercase tracking-wider text-[#9E958A] hover:text-white transition-colors cursor-pointer"
              >
                Close
              </button>

              <button
                type="button"
                onClick={() => handleInquire(selectedService)}
                className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#B45309] to-[#92400E] hover:from-[#D97706] hover:to-[#B45309] rounded-md transition-all shadow-lg shadow-[#B45309]/20 flex items-center gap-2 cursor-pointer"
              >
                <span>Request Quote for {selectedService.title}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
