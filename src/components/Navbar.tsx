import React, { useState, useEffect } from 'react';
import marcaBlanca from '../assets/logos/marca_blanca.png';
import {
  Trees,
  ShieldCheck,
  CalendarCheck,
  Image as ImageIcon,
  Star,
  MapPin,
  Menu,
  X,
  ChevronRight,
  PhoneCall,
} from 'lucide-react';
import { CONTACT_INFO } from '../data/cabanasData';

interface NavItem {
  id: string;
  label: string;
  shortLabel: string;
  icon: React.ElementType;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'cabanas', label: 'Cabañas', shortLabel: 'Cabañas', icon: Trees },
  { id: 'servicios', label: 'Servicios', shortLabel: 'Servicios', icon: ShieldCheck },
  { id: 'reserva', label: 'Cotizar', shortLabel: 'Cotizar', icon: CalendarCheck },
  { id: 'galeria', label: 'Galería', shortLabel: 'Galería', icon: ImageIcon },
  { id: 'resenas', label: 'Reseñas', shortLabel: 'Reseñas', icon: Star },
  { id: 'ubicacion', label: 'Ubicación', shortLabel: 'Ubicación', icon: MapPin },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('cabanas');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section spy algorithm
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Desktop & Mobile Header Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-stone-900/90 backdrop-blur-md border-b border-stone-800/60 py-2 sm:py-3 shadow-lg'
            : 'bg-gradient-to-b from-stone-950/90 via-stone-950/50 to-transparent py-3 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 tracking-tight text-white whitespace-nowrap shrink-0 group py-1"
          >
            <img
              src={marcaBlanca}
              alt="Casas Pardo Logo"
              className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                isScrolled ? 'h-9 sm:h-10 md:h-11' : 'h-11 sm:h-14 md:h-16'
              }`}
            />
          </a>

          {/* Desktop Interactive Nav Items with Active State Pill */}
          <nav className="hidden md:flex items-center gap-1.5 text-xs font-medium bg-stone-900/60 p-1.5 rounded-full border border-stone-800/80 backdrop-blur-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#517e12] text-white font-semibold shadow-md shadow-[#517e12]/30 scale-105'
                      : 'text-stone-300 hover:text-white hover:bg-stone-800/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-100' : 'text-stone-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Desktop Action CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => scrollToSection('reserva')}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#517e12] hover:bg-[#43690e] rounded-xl shadow-md hover:shadow-[#37560c]/50 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer active:scale-95"
            >
              <CalendarCheck className="w-4 h-4 text-emerald-100" />
              <span>Consultar Disponibilidad</span>
            </button>
          </div>

          {/* Mobile Top Menu Toggle & Quick Action */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => scrollToSection('reserva')}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#517e12] hover:bg-[#43690e] rounded-lg shadow flex items-center gap-1.5 active:scale-95"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Cotizar</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menú"
              className="p-2 text-stone-200 hover:text-white focus:outline-none rounded-lg bg-stone-800/60"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Full Menu Sheet Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-stone-900/95 border-b border-stone-800 px-4 pt-4 pb-6 space-y-2 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left py-2.5 px-3 rounded-xl text-sm font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#517e12]/20 text-[#679f17] font-semibold border border-[#517e12]/40'
                      : 'text-stone-200 hover:bg-stone-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#679f17]' : 'text-stone-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-stone-500" />
                </button>
              );
            })}
            <div className="pt-3">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(
                  'Hola! Quisiera realizar una consulta sobre Casas Pardo cabañas en Punta Indio.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 text-center font-medium text-white bg-[#517e12] hover:bg-[#43690e] rounded-xl flex items-center justify-center gap-2 shadow"
              >
                <PhoneCall className="w-4 h-4" />
                <span>WhatsApp Directo ({CONTACT_INFO.whatsappDisplay})</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Native App-Style Mobile Bottom Navigation Tab Bar */}
      <nav aria-label="Navegación móvil" className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-stone-900/95 border-t border-stone-800/80 backdrop-blur-xl px-1 py-1 shadow-2xl pb-safe">
        <div className="grid grid-cols-6 gap-0.5 items-center max-w-md mx-auto">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex flex-col items-center justify-center py-1.5 px-0.5 rounded-xl transition-all cursor-pointer relative active:scale-90 ${
                  isActive
                    ? 'text-[#679f17] font-semibold'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                {/* Active Indicator Top Line */}
                {isActive && (
                  <div className="absolute top-0 w-6 h-0.5 bg-[#679f17] rounded-full shadow-[0_0_8px_#679f17]" />
                )}
                <Icon className={`w-4 h-4 transition-transform ${isActive ? 'scale-110 text-[#679f17]' : ''}`} />
                <span className="text-[10px] tracking-tight mt-0.5 leading-none truncate max-w-full">
                  {item.shortLabel}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
