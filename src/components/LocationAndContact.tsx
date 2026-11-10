import React from 'react';
import { MapPin, Navigation, Mail, Phone, Instagram, Shield, Compass, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '../data/cabanasData';

export default function LocationAndContact() {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hola! Quisiera realizar una consulta sobre Casas Pardo cabañas en Punta Indio.'
  )}`;

  return (
    <section id="ubicacion" className="py-20 bg-[#eae8de] text-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#517e12]">
            Ubicación & Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-stone-900 mt-2">
            En el corazón de la Reserva de Biosfera UNESCO
          </h2>
          <p className="mt-3 text-base text-stone-700 font-light">
            Ubicadas en Punta Indio, Provincia de Buenos Aires. Un oasis natural accesible para una escapada reparadora.
          </p>
        </div>

        {/* Location & Map Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Map Info & Address Card */}
          <div className="lg:col-span-6 bg-[#f5f3e9] p-8 rounded-2xl shadow-md border border-stone-300/80 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#517e12]/15 text-[#37560c] text-xs font-semibold mb-4">
                <Shield className="w-3.5 h-3.5 text-[#517e12]" />
                <span>Reserva de Biosfera UNESCO</span>
              </div>

              <h3 className="text-2xl font-serif-display font-medium text-stone-900">
                Punta Indio, Provincia de Buenos Aires
              </h3>
              <p className="text-stone-700 text-sm font-light mt-3 leading-relaxed">
                Ubicadas en <strong>Calfucura y Ruta 11</strong>. Un microclima natural único caracterizado por montes nativos de tala y coronillo, tranquilidad absoluta y la brisa del Río de la Plata.
              </p>

              <div className="mt-8 space-y-4 text-sm text-stone-800">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#517e12] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block">Dirección Exacta:</span>
                    <span className="text-stone-600">Calfucura y Ruta 11, Punta Indio, Bs. As.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Compass className="w-5 h-5 text-[#517e12] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block">Cercanías:</span>
                    <span className="text-stone-600">
                      A minutos de la costa del río, senderos naturales para caminatas y observación de aves.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-300/60 flex flex-col sm:flex-row gap-3">
              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#517e12] hover:bg-[#43690e] rounded-xl shadow transition-all flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-emerald-100" />
                <span>Abrir en Google Maps</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-stone-800 bg-[#eae8de] hover:bg-[#dfdcd0] border border-stone-300 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <span>Consultar Cómo Llegar</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Maps Frame */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-lg border border-stone-300/80 min-h-[400px] relative bg-stone-100 flex flex-col">
            <div className="relative w-full h-full min-h-[400px]">
              <iframe
                title="Google Maps Ubicación Casas Pardo Cabañas"
                src="https://maps.google.com/maps?q=Casas+Pardo+Caba%C3%B1as%2C+Calfucura+y+Ruta+11%2C+Punta+Indio%2C+Provincia+de+Buenos+Aires&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[400px]"
              />
              <div className="absolute top-4 left-4 right-4 pointer-events-none flex justify-between items-start">
                <div className="bg-stone-900/90 text-white backdrop-blur-md px-3.5 py-2 rounded-xl text-xs shadow-md border border-stone-700/60 pointer-events-auto flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#679f17]" />
                  <span className="font-medium">Casas Pardo · Punta Indio</span>
                </div>
                <a
                  href={CONTACT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#517e12] hover:bg-[#43690e] text-white px-3 py-2 rounded-xl text-xs font-semibold shadow-md pointer-events-auto transition-all flex items-center gap-1.5"
                >
                  <span>Ver en Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#f5f3e9] border border-stone-300/80 shadow-sm hover:shadow-md hover:border-[#517e12] transition-all group flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-[#517e12]/15 text-[#37560c] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6 text-[#517e12]" />
            </div>
            <div>
              <span className="text-xs font-semibold text-stone-500 uppercase">WhatsApp</span>
              <h4 className="text-lg font-serif-display font-medium text-stone-900">
                {CONTACT_INFO.whatsappDisplay}
              </h4>
              <span className="text-[11px] text-[#517e12] font-medium">Enviar mensaje directo &rarr;</span>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="p-6 rounded-2xl bg-[#f5f3e9] border border-stone-300/80 shadow-sm hover:shadow-md hover:border-[#517e12] transition-all group flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 text-sky-700" />
            </div>
            <div>
              <span className="text-xs font-semibold text-stone-500 uppercase">Correo Electrónico</span>
              <h4 className="text-sm font-semibold text-stone-900">{CONTACT_INFO.email}</h4>
              <span className="text-[11px] text-sky-700 font-medium">Escribir un correo &rarr;</span>
            </div>
          </a>

          {/* Instagram */}
          <a
            href={CONTACT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#f5f3e9] border border-stone-300/80 shadow-sm hover:shadow-md hover:border-[#517e12] transition-all group flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Instagram className="w-6 h-6 text-pink-700" />
            </div>
            <div>
              <span className="text-xs font-semibold text-stone-500 uppercase">Instagram</span>
              <h4 className="text-sm font-semibold text-stone-900">{CONTACT_INFO.instagram}</h4>
              <span className="text-[11px] text-pink-700 font-medium">Seguir en Instagram &rarr;</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
