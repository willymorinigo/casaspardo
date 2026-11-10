import React from 'react';
import {
  BedDouble,
  Flame,
  Wind,
  Tv,
  Wifi,
  Car,
  UtensilsCrossed,
  Trees,
  Coffee,
  Check
} from 'lucide-react';
import { SERVICES_LIST } from '../data/cabanasData';

const iconMap: Record<string, React.ReactNode> = {
  BedDouble: <BedDouble className="w-6 h-6 text-[#679f17]" />,
  Flame: <Flame className="w-6 h-6 text-amber-500" />,
  Wind: <Wind className="w-6 h-6 text-sky-400" />,
  Tv: <Tv className="w-6 h-6 text-indigo-400" />,
  Wifi: <Wifi className="w-6 h-6 text-[#679f17]" />,
  Car: <Car className="w-6 h-6 text-stone-300" />,
  UtensilsCrossed: <UtensilsCrossed className="w-6 h-6 text-[#679f17]" />,
  Trees: <Trees className="w-6 h-6 text-[#679f17]" />,
};

export default function ServicesGrid() {
  return (
    <section id="servicios" className="py-20 bg-stone-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#679f17]">
            Comodidad & Confort
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-white mt-2">
            Servicios Incluidos en tu Estadía
          </h2>
          <p className="mt-4 text-base text-stone-300 font-light">
            Todo lo necesario para que solo te preocupes por descansar y disfrutar del entorno natural.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-stone-800/80 border border-stone-700/60 hover:border-[#517e12]/80 transition-all group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-stone-950/80 border border-stone-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {iconMap[service.icon] || <Check className="w-6 h-6 text-[#679f17]" />}
              </div>
              <h3 className="text-lg font-medium text-white font-serif-display">
                {service.title}
              </h3>
              <p className="mt-2 text-xs text-stone-300 leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Kitchen Breakdown Highlight Card */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-stone-800 via-stone-850 to-stone-900 border border-stone-700/80 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#679f17] uppercase tracking-wider">
              <Coffee className="w-4 h-4" />
              <span>Equipamiento de Cocina Completo</span>
            </div>
            <h3 className="text-xl font-serif-display font-medium text-white">
              Pava eléctrica, Microondas, Horno eléctrico, Anafe & Heladera con freezer
            </h3>
            <p className="text-xs text-stone-300 font-light max-w-2xl">
              Vajilla y utensilios de cocina completos para preparar tus comidas con la libertad y tranquilidad de tu hogar.
            </p>
          </div>

          <a
            href="#reserva"
            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#517e12] hover:bg-[#43690e] rounded-xl transition-all whitespace-nowrap shrink-0 shadow-md"
          >
            Consultar fechas disponibles
          </a>
        </div>
      </div>
    </section>
  );
}
