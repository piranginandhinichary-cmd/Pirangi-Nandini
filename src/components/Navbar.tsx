import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, ArrowRight, Hammer } from 'lucide-react';
import { BUSINESS_INFO } from '../data/furnituresData';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Materials', href: '#materials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#121110]/95 backdrop-blur-md border-b border-[#2C2723] py-3 shadow-xl'
            : 'bg-gradient-to-b from-[#121110]/90 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#hero');
              }}
              className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B45309]"
            >
              <div className="w-8 h-8 rounded bg-[#B45309]/20 border border-[#B45309]/50 flex items-center justify-center text-[#D97706] group-hover:bg-[#B45309] group-hover:text-white transition-colors">
                <Hammer className="w-4 h-4" />
              </div>
              <span className="text-base sm:text-lg font-bold tracking-wider text-white font-brand-mark uppercase">
                MANIKANTA <span className="text-[#C5A059] font-normal">FURNITURES</span>
              </span>
            </a>

            {/* Zone 2: 4-7 clean text navigation links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-xs uppercase tracking-widest text-[#BDB5AB] hover:text-[#C5A059] transition-colors relative py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B45309]"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1-2 primary actions */}
            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Manikanta Furnitures! I am inquiring about custom carpentry and furniture quotation.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Chat with Master Carpenter on WhatsApp"
                className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#1F1D1B] border border-[#3A342E] text-[#C5A059] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all"
                aria-label="WhatsApp Chat"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                title={`Call ${BUSINESS_INFO.phone}`}
                className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1F1D1B] border border-[#3A342E] text-xs font-medium text-[#D8D2C9] hover:border-[#B45309] hover:text-white transition-all whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="tabular-nums">{BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <button
                onClick={onOpenQuote}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#B45309] to-[#92400E] rounded-md hover:from-[#D97706] hover:to-[#B45309] shadow-md shadow-[#B45309]/20 transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer active:scale-95"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-md bg-[#1F1D1B] border border-[#3A342E] text-[#D8D2C9] hover:text-white hover:border-[#B45309] transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#161514] border-b border-[#2C2723] px-6 py-6 shadow-2xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm uppercase tracking-wider text-[#D8D2C9] hover:text-[#C5A059] py-2 border-b border-[#23201D] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-2 flex flex-col gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-md bg-[#1F1D1B] border border-[#3A342E] text-xs font-medium text-white"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>Call Master Carpenter ({BUSINESS_INFO.phoneDisplay})</span>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                    'Hello Manikanta Furnitures! I am inquiring about custom carpentry and furniture quotation.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-md bg-[#25D366]/20 border border-[#25D366]/40 text-xs font-medium text-[#25D366]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
