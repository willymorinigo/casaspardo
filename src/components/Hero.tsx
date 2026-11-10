import React from 'react';
import { ShieldCheck, Trees, Waves, Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/cabanasData';

export default function Hero() {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hola! Quisiera información sobre disponibilidad en Casas Pardo cabañas.'
  )}`;

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-stone-950">
      {/* Background Video with Measured Gradient Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.70]"
          poster="/src/assets/images/general/pardo0.jpeg"
        >
          <source src="/src/assets/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        {/* UNESCO Biosphere Kicker - unboxed clean inline metadata */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#37560c]/80 border border-[#517e12]/50 text-[#eae8de] text-xs sm:text-sm font-medium mb-6 backdrop-blur-md shadow-sm">
          <ShieldCheck className="w-4 h-4 text-[#679f17] shrink-0" />
          <span>Reserva de Biosfera UNESCO · Punta Indio, Bs. As.</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-display font-medium text-white tracking-tight leading-[1.15] max-w-4xl mx-auto drop-shadow-md">
          Escápate del ruido y descansa rodeado de naturaleza
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-stone-200 max-w-2xl mx-auto font-light leading-relaxed drop-shadow">
          3 cabañas en un espacio natural amplio, con privacidad total, parque frondoso y cercanía al río. El lugar ideal para reencontrar la tranquilidad.
        </p>

        {/* Primary & Secondary Action CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#reserva"
            className="w-full sm:w-auto px-7 py-4 text-sm font-semibold tracking-wide text-white bg-[#517e12] hover:bg-[#43690e] rounded-xl shadow-lg hover:shadow-[#37560c]/50 transition-all flex items-center justify-center gap-2 group"
          >
            <span>Ver Disponibilidad & Presupuesto</span>
            <ArrowRight className="w-4 h-4 text-emerald-100 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 text-sm font-semibold tracking-wide text-stone-100 bg-stone-900/80 hover:bg-stone-800 border border-stone-700/70 rounded-xl backdrop-blur-sm transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#679f17]" />
            <span>Consulta Directa WhatsApp</span>
          </a>
        </div>

        {/* Highlights Bar */}
        <div className="mt-14 pt-8 border-t border-stone-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3 rounded-lg bg-stone-900/50 backdrop-blur-xs border border-stone-800/40">
            <div className="text-[#679f17] font-serif-display text-2xl font-bold">3 Cabañas</div>
            <div className="text-xs text-stone-300 mt-1">Con privacidad y parque</div>
          </div>

          <div className="p-3 rounded-lg bg-stone-900/50 backdrop-blur-xs border border-stone-800/40">
            <div className="text-[#679f17] font-serif-display text-2xl font-bold">Parque Frondoso</div>
            <div className="text-xs text-stone-300 mt-1">Arbolado & cercanía al río</div>
          </div>

          <div className="p-3 rounded-lg bg-stone-900/50 backdrop-blur-xs border border-stone-800/40">
            <div className="text-[#679f17] font-serif-display text-2xl font-bold">Hasta 5 personas</div>
            <div className="text-xs text-stone-300 mt-1">Ideal parejas y familias</div>
          </div>

          <div className="p-3 rounded-lg bg-stone-900/50 backdrop-blur-xs border border-stone-800/40">
            <div className="text-[#679f17] font-serif-display text-2xl font-bold">Salamandra & Grill</div>
            <div className="text-xs text-stone-300 mt-1">Parrilla individual en deck</div>
          </div>
        </div>
      </div>
    </section>
  );
}
