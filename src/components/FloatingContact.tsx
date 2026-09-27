import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/furnituresData';

export const FloatingContact: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* WhatsApp Quick Trigger */}
      <a
        href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
          'Hello Manikanta Furnitures! I would like to get a quote for custom carpentry/furniture.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba5a] transition-all hover:scale-105 active:scale-95"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="text-xs font-semibold tracking-wide hidden sm:inline-block">
          WhatsApp Us
        </span>
      </a>

      {/* Direct Call Button (Mobile & Desktop) */}
      <a
        href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
        aria-label={`Call ${BUSINESS_INFO.phone}`}
        className="w-11 h-11 rounded-full bg-[#B45309] text-white shadow-xl border border-[#D97706]/40 flex items-center justify-center hover:bg-[#D97706] transition-all hover:scale-105 active:scale-95"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          className="w-9 h-9 rounded-full bg-[#1F1D1B] border border-[#3A332C] text-[#CDC4B8] hover:text-white hover:border-[#C5A059] flex items-center justify-center transition-all cursor-pointer shadow-lg"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
