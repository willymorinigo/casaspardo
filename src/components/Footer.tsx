import React from 'react';
import { Trees, Shield, Heart, MapPin, Instagram, Mail, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../data/cabanasData';

export default function Footer() {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hola! Quisiera información sobre Casas Pardo.'
  )}`;

  return (
    <footer className="bg-stone-950 text-stone-400 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800/80">
          {/* Brand & Mission Column */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-2 text-white group">
              <img
                src="/src/assets/logos/marca_blanca.png"
                alt="Casas Pardo Logo"
                className="h-10 w-auto object-contain"
              />
            </a>

            <p className="text-xs text-stone-300 font-light leading-relaxed max-w-sm">
              Escápate del ruido y disfruta de unos días de descanso en nuestras 3 cabañas, rodeadas de parque natural, cercanía al río y toda la tranquilidad que necesitas.
            </p>

            <div className="pt-2 italic text-[#679f17] text-xs font-serif-display">
              "Si lo que buscas es tranquilidad, paz y naturaleza, nuestras cabañas te esperan 🌿"
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Navegación</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#cabanas" className="hover:text-[#679f17] transition-colors">
                  Nuestras 3 Cabañas
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#679f17] transition-colors">
                  Servicios Incluidos
                </a>
              </li>
              <li>
                <a href="#tarifas" className="hover:text-[#679f17] transition-colors">
                  Tarifario Primavera 2026
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-[#679f17] transition-colors">
                  Galería de Fotos
                </a>
              </li>
              <li>
                <a href="#resenas" className="hover:text-[#679f17] transition-colors">
                  Reseñas de Visitantes
                </a>
              </li>
              <li>
                <a href="#reserva" className="hover:text-[#679f17] transition-colors">
                  Calendario & Cotizador
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location Column */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Contacto Directo</h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#679f17] shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  WhatsApp: {CONTACT_INFO.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white">
                  Mail: {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                <a href={CONTACT_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Instagram: {CONTACT_INFO.instagram}
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & UNESCO Tag */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#517e12]" />
            <span>Reserva Mundial de la Biosfera UNESCO · Punta Indio, Buenos Aires</span>
          </div>
          <div>
            <span>Casas Pardo © {new Date().getFullYear()}. Todos los derechos reservados.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
