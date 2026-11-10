import React from 'react';
import { Home, Users, CheckCircle2, Flame, Utensils, BedDouble, Trees } from 'lucide-react';
import { CABIN_INCLUSIONS } from '../data/cabanasData';

export default function CabanasOverview() {
  return (
    <section id="cabanas" className="py-20 bg-[#eae8de] text-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#517e12]">
            Nuestras Instalaciones
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-stone-900 mt-2">
            3 Cabañas equipadas para tu máxima comodidad
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-700 font-light">
            Diseñadas en armonía con la naturaleza circundante. Cuentan con capacidad de 2 hasta 5 personas, pensadas para parejas o grupos familiares que buscan serenidad.
          </p>
        </div>

        {/* Cabaña Layout Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Main Visual Feature */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-300/80 group">
              <img
                src="/src/assets/images/general/pardo3.jpeg"
                alt="Vista panorámica de las cabañas de madera en el parque verde de Casas Pardo"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-stone-950/85 via-stone-950/40 to-transparent text-white">
                <span className="text-xs uppercase font-semibold text-[#679f17] tracking-wider">
                  Entorno Natural
                </span>
                <h3 className="text-xl font-serif-display font-medium mt-1">
                  Cabañas independientes inmersas en el parque arbolado
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-md border border-stone-300/80 h-44 relative">
                <img
                  src="/src/assets/images/general/pardo5.jpeg"
                  alt="Parrilla individual de ladrillos al aire libre"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-stone-900/40 flex items-end p-3 text-white font-medium text-xs">
                  <span>Parrilla individual de ladrillos</span>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-md border border-stone-300/80 h-44 relative">
                <img
                  src="/src/assets/images/general/pardo6.jpeg"
                  alt="Mates al aire libre en la galería de la cabaña"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-stone-900/40 flex items-end p-3 text-white font-medium text-xs">
                  <span>Mates al aire libre en la galería</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cabaña Layout Inclusions List */}
          <div className="lg:col-span-5 bg-[#f5f3e9] p-8 rounded-2xl shadow-sm border border-stone-300/90">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-300/60">
              <div className="w-10 h-10 rounded-xl bg-[#517e12]/15 text-[#37560c] flex items-center justify-center shrink-0">
                <Home className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-serif-display font-medium text-stone-900">
                  Distribución de cada Cabaña
                </h3>
                <p className="text-xs text-stone-600">Capacidad apta para 2 a 5 personas</p>
              </div>
            </div>

            <ul className="space-y-4">
              {CABIN_INCLUSIONS.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#517e12] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-stone-800">{item.title}</h4>
                    <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-stone-300/60 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-medium text-stone-700">
                <Users className="w-4 h-4 text-[#517e12]" />
                <span>3 cabañas en el predio</span>
              </div>
              <a
                href="#reserva"
                className="text-xs font-semibold text-[#517e12] hover:text-[#37560c] underline underline-offset-4"
              >
                Consultar fechas libres &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
