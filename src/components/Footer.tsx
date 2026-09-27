import React from 'react';
import { BUSINESS_INFO } from '../data/furnituresData';
import { Hammer, Phone, Mail, MapPin, MessageSquare, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D0C0B] border-t border-[#24201C] text-[#8C8377] text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#211E1A]">
          {/* Brand Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-[#B45309]/20 border border-[#B45309]/50 flex items-center justify-center text-[#D97706]">
                <Hammer className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold tracking-wider text-white font-brand-mark uppercase">
                MANIKANTA <span className="text-[#C5A059] font-normal">FURNITURES</span>
              </span>
            </div>

            <p className="text-xs uppercase tracking-wider text-[#A89F93] font-medium">
              Custom Carpentry • Custom Furniture • Quality Craftsmanship
            </p>

            <p className="text-xs text-[#7F776B] font-light leading-relaxed max-w-sm">
              Dedicated to traditional Indian timber craftsmanship blended with modern interior architecture. Handcrafting modular kitchens, wardrobes, doors, and solid teak furniture for over a decade.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {['Instagram', 'Facebook', 'YouTube', 'WhatsApp'].map((platform) => (
                <a
                  key={platform}
                  href={
                    platform === 'WhatsApp'
                      ? `https://wa.me/${BUSINESS_INFO.whatsappNumber}`
                      : '#'
                  }
                  target={platform === 'WhatsApp' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded bg-[#181614] border border-[#2B2723] hover:border-[#C5A059] hover:text-white transition-colors text-[11px]"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-serif-heading">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: 'Home', href: '#hero' },
                { name: 'About Us', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Projects Showcase', href: '#work' },
                { name: 'Work Process', href: '#process' },
                { name: 'Materials & Finishes', href: '#materials' },
                { name: 'Contact Us', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#C5A059] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Carpentry Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-serif-heading">
              Our Specialties
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                'Modular Kitchens (BWP 710)',
                'Floor-to-Ceiling Wardrobes',
                'Acoustic Wood Slat TV Units',
                'Solid Teak Bedroom Suites',
                'Office Desks & Workstations',
                'Bespoke Entrance Doors',
                'Space-Saving Storage Lofts'
              ].map((serv) => (
                <li key={serv}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {serv}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Workshop (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-serif-heading">
              Workshop Contact
            </h4>
            <div className="space-y-2 text-xs">
              <div className="pb-1 mb-1 border-b border-[#211E1A]">
                <span className="text-[10px] text-[#8C8377] uppercase tracking-wider block">Proprietor / Craftsman:</span>
                <span className="text-white font-semibold text-xs">{BUSINESS_INFO.proprietor}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`} className="text-[#CDC4B8] hover:text-white tabular-nums">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <a href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-[#CDC4B8] hover:text-[#25D366]">
                  WhatsApp: +91 {BUSINESS_INFO.whatsappNumber}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-[#CDC4B8] hover:text-white break-all">
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <span className="text-[#9E958A] leading-relaxed">
                  {BUSINESS_INFO.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-[#71695F]">
            © 2026 MANIKANTA FURNITURES. All Rights Reserved. Custom Carpentry & Furniture Works.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[11px] text-[#9E958A] hover:text-[#C5A059] transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
