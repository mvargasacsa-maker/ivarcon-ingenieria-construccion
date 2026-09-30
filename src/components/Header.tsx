import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

interface HeaderProps {
  activeSection?: string;
  onNavigate?: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection = 'inicio', onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { label: 'INICIO', href: '#inicio', id: 'inicio' },
    { label: 'SERVICIOS', href: '#servicios', id: 'servicios' },
    { label: 'NOSOTROS', href: '#nosotros', id: 'nosotros' },
    { label: 'CONTACTO', href: '#contacto', id: 'contacto' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const whatsappUrl = "https://wa.me/51933724921?text=Hola%20IVARCON,%20deseo%20solicitar%20asesoramiento%20t%C3%A9cnico%20para%20un%20proyecto.";

  return (
    <header className={`sticky top-0 z-50 transition-all duration-200 ${scrolled ? 'shadow-lg' : ''}`}>
      {/* Top Utility Contact Bar */}
      <div className="bg-[#0B2E5B] text-slate-200 text-xs py-1.5 px-4 sm:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4">
          <div className="flex items-center gap-2 text-slate-300 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-[#F5B800]"></span>
            <span>Del plano a la obra, con respaldo profesional</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 font-medium">
            <a 
              href="tel:997022655" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F5B800]" />
              <span>Tel: 997 022 655</span>
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <a 
              href="tel:933724921" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#F5B800]" />
              <span>WhatsApp: 933 724 921</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <nav 
        className="bg-[#173F73] text-white transition-colors"
        aria-label="Navegación principal"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Branding: IVARCON Logo */}
            <a 
              href="#inicio" 
              onClick={(e) => handleLinkClick(e, 'inicio')}
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B800] rounded-sm py-1"
            >
              {/* Construction Symbol Badge */}
              <div className="w-10 h-10 bg-white/10 border border-white/20 rounded flex items-center justify-center text-white group-hover:border-[#F5B800] transition-colors">
                <div className="relative flex flex-col items-center">
                  <div className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[10px] border-b-[#F5B800]" />
                  <div className="w-4 h-1.5 bg-white mt-0.5 rounded-xs" />
                </div>
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col text-left">
                <div className="flex items-center tracking-wider font-extrabold text-2xl leading-none">
                  <span className="text-white">IVAR</span>
                  <span className="text-[#F5B800]">CON</span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-[#DCEEF9] uppercase mt-1 leading-none">
                  Ingeniería y Construcción
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className={`px-4 py-2 text-sm font-semibold tracking-wide rounded-md transition-all duration-150 ${
                      isActive 
                        ? 'text-[#F5B800] bg-white/10' 
                        : 'text-white/90 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#F5B800] hover:bg-[#e0a800] active:bg-[#c99600] text-[#0B2E5B] font-bold text-sm tracking-wide px-5 py-2.5 rounded shadow-sm hover:shadow transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MessageCircle className="w-4 h-4 text-[#0B2E5B] fill-current" />
                <span>ESCRÍBENOS POR WHATSAPP</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-white hover:text-[#F5B800] hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B800] transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              >
                {mobileMenuOpen ? (
                  <X className="w-7 h-7" aria-hidden="true" />
                ) : (
                  <Menu className="w-7 h-7" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#0B2E5B] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className={`block px-3 py-2.5 rounded-md text-base font-semibold tracking-wide transition-colors ${
                      isActive
                        ? 'bg-[#173F73] text-[#F5B800]'
                        : 'text-white hover:bg-white/5 hover:text-[#F5B800]'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* Mobile Contact & CTA */}
            <div className="pt-3 border-t border-white/10 space-y-3">
              <div className="text-xs text-[#DCEEF9] space-y-1.5 px-3">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#F5B800]" />
                  <span>Teléfono: 997 022 655</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-3.5 h-3.5 text-[#F5B800]" />
                  <span>WhatsApp: 933 724 921</span>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#F5B800] hover:bg-[#e0a800] text-[#0B2E5B] font-bold text-sm tracking-wide px-4 py-3 rounded shadow transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>ESCRÍBENOS POR WHATSAPP</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
