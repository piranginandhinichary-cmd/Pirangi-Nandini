import React from 'react';
import { BUSINESS_INFO } from '../data/furnituresData';
import { Phone, MessageSquare, Mail, MapPin, Clock, ExternalLink, Navigation } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#121110] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-medium">
              VISIT OUR WORKSHOP
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-heading mb-4">
            GET IN TOUCH WITH OUR MASTER CARPENTERS
          </h2>
          <p className="text-sm sm:text-base text-[#ADA59B] leading-relaxed font-light">
            Whether you want to inspect wood timber grains in person, review 3D furniture schematics, or schedule a free home measurement visit, our doors are open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Business Details & Instant Action Buttons (5 Cols) */}
          <div className="lg:col-span-5 bg-[#181614] rounded-xl border border-[#2D2824] p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              {/* Brand Title */}
              <div className="mb-6 pb-6 border-b border-[#292420]">
                <h3 className="text-2xl font-bold text-white font-brand-mark tracking-wider">
                  MANIKANTA <span className="text-[#C5A059] font-normal">FURNITURES</span>
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#B3ABA0] mt-1">
                  {BUSINESS_INFO.tagline}
                </p>
                <div className="mt-3 inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#221F1C] border border-[#3A332C]">
                  <span className="text-[10px] text-[#A89F93] uppercase tracking-wider">Master Craftsman:</span>
                  <span className="text-xs font-semibold text-[#E5C07B]">{BUSINESS_INFO.proprietor}</span>
                </div>
              </div>

              {/* Direct Info List */}
              <div className="space-y-5 text-xs text-[#CDC4B8]">
                {/* Contact Person */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#221F1C] border border-[#38312A] flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
                    <span className="text-xs font-bold font-serif-heading">PB</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8A8276] block">
                      Proprietor & Master Carpenter
                    </span>
                    <span className="font-semibold text-white text-sm">
                      {BUSINESS_INFO.proprietor}
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#221F1C] border border-[#38312A] flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8A8276] block">
                      Mobile & WhatsApp
                    </span>
                    <a
                      href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                      className="font-medium text-white hover:text-[#C5A059] transition-colors tabular-nums text-sm block"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#221F1C] border border-[#38312A] flex items-center justify-center text-[#25D366] shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8A8276] block">
                      WhatsApp Direct Chat
                    </span>
                    <a
                      href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                        'Hello Pirangi Bhaskarachary garu! I am inquiring about custom furniture works at Manikanta Furnitures.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-white hover:text-[#25D366] transition-colors tabular-nums text-sm"
                    >
                      +91 {BUSINESS_INFO.whatsappNumber}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#221F1C] border border-[#38312A] flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8A8276] block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="font-medium text-white hover:text-[#C5A059] transition-colors text-sm break-all"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#221F1C] border border-[#38312A] flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8A8276] block">
                      Workshop & Studio Address
                    </span>
                    <p className="text-white leading-relaxed text-xs">
                      {BUSINESS_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#221F1C] border border-[#38312A] flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8A8276] block">
                      Business Hours
                    </span>
                    <p className="text-white text-xs font-medium">{BUSINESS_INFO.hours}</p>
                    <span className="text-[11px] text-[#8C8377] block mt-0.5">Sunday by Appointment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Button Trio */}
            <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-[#292420]">
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                className="py-3 px-3 rounded-lg bg-[#24201D] border border-[#3A332C] hover:border-[#B45309] text-xs font-semibold uppercase tracking-wider text-white transition-all flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Call Studio</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 hover:bg-[#25D366] hover:text-white text-xs font-semibold uppercase tracking-wider text-[#25D366] transition-all flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps & Workshop Showcase (7 Cols) */}
          <div className="lg:col-span-7 bg-[#181614] rounded-xl border border-[#2D2824] overflow-hidden flex flex-col justify-between shadow-xl">
            {/* Realistic stylized map display */}
            <div className="relative h-[320px] sm:h-[380px] w-full bg-[#11100F] overflow-hidden">
              {/* Map background pattern */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    'radial-gradient(#3A342E 1px, transparent 1px), linear-gradient(to right, #25211D 1px, transparent 1px), linear-gradient(to bottom, #25211D 1px, transparent 1px)',
                  backgroundSize: '30px 30px, 120px 120px, 120px 120px'
                }}
              />

              {/* Road lines simulation */}
              <div className="absolute top-1/2 left-0 right-0 h-4 bg-[#23201C] -translate-y-1/2 rotate-12" />
              <div className="absolute top-0 bottom-0 left-1/3 w-3 bg-[#23201C] -rotate-6" />

              {/* Pinpoint Workshop Marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="p-3 bg-[#1A1816] rounded-xl border border-[#C5A059] shadow-2xl flex items-center gap-2.5 animate-bounce">
                  <div className="w-3 h-3 rounded-full bg-[#B45309]" />
                  <div className="text-left">
                    <span className="text-xs font-bold text-white font-brand-mark block">
                      MANIKANTA FURNITURES
                    </span>
                    <span className="text-[10px] text-[#A69E92]">Woodcraft Workshop & Studio</span>
                  </div>
                </div>
                <div className="w-1 h-6 bg-[#C5A059]" />
                <div className="w-4 h-1.5 rounded-full bg-black/60 filter blur-xs" />
              </div>

              {/* Google Maps Interactive Card Overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm p-3.5 bg-black/85 backdrop-blur-md rounded-lg border border-[#3E3832] text-xs">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="text-white font-medium block">Wanaparthy, Telangana</span>
                    <span className="text-[#8C8377] text-[11px]">Marrikunta, Near Anjaneyaswamy Temple</span>
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      'Plot no. 4-88/A/1, Marrikunta, Kurnool Road, near Anjaneyaswamy Temple, Wanaparthy, Telangana'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded bg-[#C5A059] text-black font-semibold text-[11px] hover:bg-white transition-colors flex items-center gap-1 shrink-0"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Consultation Guarantee Strip */}
            <div className="p-6 bg-[#161413] border-t border-[#292420] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="text-[#A89F93] text-center sm:text-left">
                <strong className="text-white block font-medium">Free On-Site Visit & Laser Measurement</strong>
                <span>We visit your site with wood samples and laser meters at zero obligation.</span>
              </div>
              <a
                href="#quote"
                className="px-5 py-2.5 rounded bg-gradient-to-r from-[#B45309] to-[#92400E] text-white text-xs font-semibold uppercase tracking-wider hover:from-[#D97706] hover:to-[#B45309] transition-all whitespace-nowrap cursor-pointer"
              >
                Book Site Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
