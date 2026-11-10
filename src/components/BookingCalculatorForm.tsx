import React, { useState, useMemo } from 'react';
import {
  Calendar as CalendarIcon,
  Users,
  MessageCircle,
  TreePine,
  Clock,
  CheckCircle,
  DollarSign,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { CONTACT_INFO, RATES_2026 } from '../data/cabanasData';

export default function BookingCalculatorForm() {
  const [checkInDate, setCheckInDate] = useState<string>('');
  const [checkOutDate, setCheckOutDate] = useState<string>('');
  const [guestsCount, setGuestsCount] = useState<number>(2);
  const [isLongWeekend, setIsLongWeekend] = useState<boolean>(false);
  const [includeLateCheckOut, setIncludeLateCheckOut] = useState<boolean>(false);
  const [guestName, setGuestName] = useState<string>('');
  const [guestNote, setGuestNote] = useState<string>('');
  const [showRatesTable, setShowRatesTable] = useState<boolean>(true);



  // Calculate number of nights
  const nightsCount = useMemo(() => {
    if (!checkInDate || !checkOutDate) return 0;
    const start = new Date(checkInDate);
    const end = new Date(checkOutDate);
    const diffTime = end.getTime() - start.getTime();
    const days = Math.ceil(diffTime / (1000 * 3600 * 24));
    return days > 0 ? days : 0;
  }, [checkInDate, checkOutDate]);

  // Rate calculation according to official 2026 Table
  const priceCalculation = useMemo(() => {
    if (nightsCount <= 0) {
      return { base: 0, lateCheckOut: 0, total: 0, breakdown: 'Seleccioná las fechas para cotizar' };
    }

    const isMultiGuest = guestsCount > 2;
    let basePrice = 0;
    let breakdownText = '';

    if (isLongWeekend) {
      if (nightsCount === 2) {
        basePrice = isMultiGuest ? RATES_2026.longWeekend[2].multiGuests : RATES_2026.longWeekend[2].twoGuests;
        breakdownText = `Fin de Semana Largo (2 Noches / ${isMultiGuest ? '3-5 pers.' : '2 pers.'})`;
      } else if (nightsCount === 3) {
        basePrice = isMultiGuest ? RATES_2026.longWeekend[3].multiGuests : RATES_2026.longWeekend[3].twoGuests;
        breakdownText = `Fin de Semana Largo (3 Noches / ${isMultiGuest ? '3-5 pers.' : '2 pers.'})`;
      } else if (nightsCount >= 4) {
        basePrice = isMultiGuest ? RATES_2026.longWeekend[4].multiGuests : RATES_2026.longWeekend[4].twoGuests;
        const extraNights = nightsCount - 4;
        const extraPerNight = isMultiGuest ? 90000 : 80000;
        basePrice += extraNights * extraPerNight;
        breakdownText = `Fin de Semana Largo (4 Noches + ${extraNights} extra / ${isMultiGuest ? '3-5 pers.' : '2 pers.'})`;
      } else {
        basePrice = isMultiGuest ? 130000 : 110000;
        breakdownText = `Tarifa Finde Largo (1 Noche / ${isMultiGuest ? '3-5 pers.' : '2 pers.'})`;
      }
    } else {
      if (nightsCount === 1) {
        basePrice = isMultiGuest ? RATES_2026.standard[1].multiGuests : RATES_2026.standard[1].twoGuests;
        breakdownText = `Estadía 1 Noche (${isMultiGuest ? '3-5 pers.' : '2 pers.'})`;
      } else if (nightsCount === 2) {
        basePrice = isMultiGuest ? RATES_2026.standard[2].multiGuests : RATES_2026.standard[2].twoGuests;
        breakdownText = `Estadía 2 Noches (${isMultiGuest ? '3-5 pers.' : '2 pers.'})`;
      } else if (nightsCount === 3) {
        basePrice = isMultiGuest ? RATES_2026.standard[3].multiGuests : RATES_2026.standard[3].twoGuests;
        breakdownText = `Estadía 3 Noches (${isMultiGuest ? '3-5 pers.' : '2 pers.'})`;
      } else {
        const rate3 = isMultiGuest ? RATES_2026.standard[3].multiGuests : RATES_2026.standard[3].twoGuests;
        const extraNights = nightsCount - 3;
        const extraPerNight = isMultiGuest ? 80000 : 70000;
        basePrice = rate3 + extraNights * extraPerNight;
        breakdownText = `Estadía ${nightsCount} Noches (${isMultiGuest ? '3-5 pers.' : '2 pers.'})`;
      }
    }

    const lateCheckOutCost = includeLateCheckOut ? CONTACT_INFO.lateCheckOutCost : 0;
    const totalPrice = basePrice + lateCheckOutCost;

    return {
      base: basePrice,
      lateCheckOut: lateCheckOutCost,
      total: totalPrice,
      breakdown: breakdownText,
    };
  }, [nightsCount, guestsCount, isLongWeekend, includeLateCheckOut]);

  // Format ARS currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Build pre-filled WhatsApp link
  const buildWhatsAppMessage = () => {
    const datesInfo = checkInDate && checkOutDate
      ? `📅 *Check-in:* ${checkInDate} (14:00 hs)\n📅 *Check-out:* ${checkOutDate} (${includeLateCheckOut ? '18:00 hs - Late' : '11:00 hs'})\n🌙 *Duración:* ${nightsCount} Noche(s)`
      : `📅 *Fechas a consultar:* (A coordinar)`;

    const guestInfo = `👤 *Nombre:* ${guestName.trim() || 'Consulta desde la web'}\n👥 *Huéspedes:* ${guestsCount} persona(s)`;

    const rateInfo = priceCalculation.total > 0
      ? `💲 *Cotización Estimada:* ${formatCurrency(priceCalculation.total)}\n(${priceCalculation.breakdown}${includeLateCheckOut ? ' + Late Check-out 18hs' : ''})`
      : `💲 *Cotización:* A confirmar con el propietario`;

    const extraNote = guestNote.trim() ? `\n💬 *Mensaje:* ${guestNote.trim()}` : '';

    const fullMessage = `¡Hola Casas Pardo! Quisiera consultar disponibilidad para las siguientes fechas:\n\n${datesInfo}\n${guestInfo}\n${rateInfo}${extraNote}\n\n¡Aguardo su confirmación! Muchas gracias.`;

    return `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(fullMessage)}`;
  };

  return (
    <section id="reserva" className="py-20 bg-stone-950 text-white relative overflow-hidden">
      {/* Decorative Blur Ambient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#517e12]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#37560c]/80 border border-[#517e12]/50 text-[#eae8de] text-xs font-medium mb-3">
            <TreePine className="w-4 h-4 text-[#679f17]" />
            <span>Reserva Directa & Cotización al Instante</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-white">
            Consultar Disponibilidad & Calcular Estadía
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base font-light">
            Seleccioná tus fechas y cantidad de huéspedes para obtener un presupuesto estimado basado en nuestras tarifas oficiales.
          </p>
        </div>

        {/* Main Card Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-stone-900/90 rounded-3xl p-6 sm:p-8 border border-stone-800 shadow-2xl backdrop-blur-md">
          {/* Form Side */}
          <div className="lg:col-span-7 space-y-6">
            {/* Fechas Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <CalendarIcon className="w-4 h-4 text-[#679f17]" />
                  Fecha de Check-In (14 hs)
                </label>
                <input
                  type="date"
                  value={checkInDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#517e12] transition-colors cursor-pointer [color-scheme:dark]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <CalendarIcon className="w-4 h-4 text-[#679f17]" />
                  Fecha de Check-Out (11 hs)
                </label>
                <input
                  type="date"
                  value={checkOutDate}
                  min={checkInDate || new Date().toISOString().split('T')[0]}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#517e12] transition-colors cursor-pointer [color-scheme:dark]"
                />
              </div>
            </div>

            {/* Cantidad de Huéspedes & Tipo de Finde */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#679f17]" />
                  Cantidad de Huéspedes
                </label>
                <select
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(Number(e.target.value))}
                  className="w-full bg-stone-950 border border-stone-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#517e12] transition-colors cursor-pointer"
                >
                  <option value={1}>1 Persona (Tarifa 2 pers.)</option>
                  <option value={2}>2 Personas (Pareja / Individual)</option>
                  <option value={3}>3 Personas (3/5 pers.)</option>
                  <option value={4}>4 Personas (3/5 pers.)</option>
                  <option value={5}>5 Personas (Máx. capacidad)</option>
                </select>
              </div>

              {/* Toggle Finde Largo */}
              <div className="flex flex-col justify-end">
                <label className="inline-flex items-center gap-3 p-3 rounded-xl bg-stone-950 border border-stone-800 cursor-pointer hover:border-stone-700 transition-colors h-[46px]">
                  <input
                    type="checkbox"
                    checked={isLongWeekend}
                    onChange={(e) => setIsLongWeekend(e.target.checked)}
                    className="w-4 h-4 accent-[#517e12] rounded cursor-pointer"
                  />
                  <span className="text-xs font-medium text-stone-200">
                    ¿Es Fin de Semana Largo?
                  </span>
                </label>
              </div>
            </div>

            {/* Late Check Out Option */}
            <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 flex items-start gap-3">
              <input
                type="checkbox"
                id="lateCheckOut"
                checked={includeLateCheckOut}
                onChange={(e) => setIncludeLateCheckOut(e.target.checked)}
                className="w-4 h-4 accent-amber-500 rounded cursor-pointer mt-1"
              />
              <label htmlFor="lateCheckOut" className="cursor-pointer text-xs space-y-1">
                <div className="font-semibold text-amber-300 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  Agregar Late Check-Out (Salida a las 18 hs)
                </div>
                <div className="text-stone-400 font-light">
                  Extiende tu estadía hasta la tarde del último día por un adicional de{' '}
                  <span className="font-mono font-medium text-white">$40.000</span>.
                </div>
              </label>
            </div>

            {/* Datos Personales Opcionales */}
            <div className="pt-2 border-t border-stone-800/80 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2">
                  Tu Nombre y Apellido
                </label>
                <input
                  type="text"
                  placeholder="Ej. Juan Pérez"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#517e12] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2">
                  Mensaje o Consulta Especial (Opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ej. ¿Aceptan mascotas?, o consultas sobre el acceso a la playa..."
                  value={guestNote}
                  onChange={(e) => setGuestNote(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-700/80 rounded-xl px-4 py-2 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#517e12] transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Breakdown & Action Side */}
          <div className="lg:col-span-5 bg-stone-950 p-6 sm:p-7 rounded-2xl border border-stone-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-800 mb-6">
                <h3 className="font-serif-display text-lg text-white font-medium">
                  Resumen de la Estadía
                </h3>
              </div>

              {/* Calculated Details */}
              <div className="space-y-4 text-xs">
                <div className="flex items-center justify-between py-1 text-stone-300">
                  <span>Noches seleccionadas:</span>
                  <span className="font-semibold text-white font-mono text-sm">
                    {nightsCount} {nightsCount === 1 ? 'Noche' : 'Noches'}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1 text-stone-300">
                  <span>Capacidad elegida:</span>
                  <span className="font-semibold text-white">
                    {guestsCount} {guestsCount === 1 ? 'Huésped' : 'Huéspedes'} ({guestsCount <= 2 ? 'Tarifa 2 pers.' : 'Tarifa 3-5 pers.'})
                  </span>
                </div>

                <div className="flex items-center justify-between py-1 text-stone-300">
                  <span>Tarifa base:</span>
                  <span className="font-mono font-semibold text-stone-200">
                    {priceCalculation.base > 0 ? formatCurrency(priceCalculation.base) : '-'}
                  </span>
                </div>

                {includeLateCheckOut && (
                  <div className="flex items-center justify-between py-1 text-amber-300">
                    <span>Adicional Late Check-out (18 hs):</span>
                    <span className="font-mono font-semibold">
                      +{formatCurrency(CONTACT_INFO.lateCheckOutCost)}
                    </span>
                  </div>
                )}

                <div className="pt-4 border-t border-stone-800">
                  <div className="text-[11px] text-stone-400 mb-1 font-light">
                    {priceCalculation.breakdown}
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-medium text-stone-200">Total Estimado:</span>
                    <span className="text-2xl font-serif-display font-bold text-[#679f17] font-mono tabular-nums">
                      {priceCalculation.total > 0 ? formatCurrency(priceCalculation.total) : '$0'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-3 rounded-lg bg-stone-900 border border-stone-800 text-[11px] text-stone-400 space-y-1">
                <p className="flex items-center gap-1 text-stone-300">
                  <CheckCircle className="w-3.5 h-3.5 text-[#679f17] shrink-0" />
                  <span>Check In: 14:00 hs — Check Out: 11:00 hs</span>
                </p>
                <p className="flex items-center gap-1 text-stone-300">
                  <CheckCircle className="w-3.5 h-3.5 text-[#679f17] shrink-0" />
                  <span>Incluye blanquería, ropa de cama y servicios completos.</span>
                </p>
              </div>
            </div>

            {/* Direct WhatsApp Pre-filled Button */}
            <div className="mt-8">
              <a
                href={buildWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl bg-[#517e12] hover:bg-[#43690e] text-white font-semibold text-sm tracking-wide shadow-lg hover:shadow-[#37560c]/50 transition-all flex items-center justify-center gap-3 group text-center"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Consultar Disponibilidad por WhatsApp</span>
              </a>
              <p className="text-center text-[11px] text-stone-400 mt-2">
                Se enviará el detalle exacto de tu consulta a WhatsApp ({CONTACT_INFO.whatsappDisplay})
              </p>
            </div>
          </div>
        </div>

        {/* Text-Based Rate Reference Schedule */}
        <div className="mt-12 bg-stone-900/70 rounded-2xl border border-stone-800 p-6 sm:p-8">
          <button
            onClick={() => setShowRatesTable(!showRatesTable)}
            className="w-full flex items-center justify-between text-left focus:outline-none"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#37560c]/60 text-[#679f17]">
                <DollarSign className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif-display text-lg text-white font-medium">
                  Tabla de Tarifas de Referencia (Primavera 2026)
                </h3>
                <p className="text-xs text-stone-400 font-light">
                  Consulta de valores estándar y fines de semana largos
                </p>
              </div>
            </div>
            <div className="text-stone-400 p-2">
              {showRatesTable ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>
          </button>

          {showRatesTable && (
            <div className="mt-6 pt-6 border-t border-stone-800 grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-200">
              {/* Standard Rates */}
              <div className="bg-stone-950/80 p-5 rounded-xl border border-stone-800">
                <h4 className="font-serif-display text-base text-[#679f17] font-medium mb-3 border-b border-stone-800 pb-2">
                  Días Estándar (Días Comunes)
                </h4>
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="text-stone-400 border-b border-stone-800">
                      <th className="py-2 font-medium">Duración</th>
                      <th className="py-2 font-medium">2 Personas</th>
                      <th className="py-2 font-medium">3 a 5 Personas</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-800/60 font-mono tabular-nums text-stone-200">
                    <tr>
                      <td className="py-2.5 font-sans font-medium text-stone-300">1 Noche</td>
                      <td className="py-2.5 font-bold text-white">$100.000</td>
                      <td className="py-2.5 font-bold text-white">$120.000</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-sans font-medium text-stone-300">2 Noches</td>
                      <td className="py-2.5 font-bold text-white">$180.000</td>
                      <td className="py-2.5 font-bold text-white">$210.000</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-sans font-medium text-stone-300">3 Noches</td>
                      <td className="py-2.5 font-bold text-white">$250.000</td>
                      <td className="py-2.5 font-bold text-white">$300.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Long Weekend Rates */}
              <div className="bg-stone-950/80 p-5 rounded-xl border border-stone-800">
                <h4 className="font-serif-display text-base text-amber-400 font-medium mb-3 border-b border-stone-800 pb-2">
                  Fin de Semana Largo
                </h4>
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="text-stone-400 border-b border-stone-800">
                      <th className="py-2 font-medium">Duración</th>
                      <th className="py-2 font-medium">2 Personas</th>
                      <th className="py-2 font-medium">3 a 5 Personas</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-800/60 font-mono tabular-nums text-stone-200">
                    <tr>
                      <td className="py-2.5 font-sans font-medium text-stone-300">2 Noches</td>
                      <td className="py-2.5 font-bold text-white">$250.000</td>
                      <td className="py-2.5 font-bold text-white">$280.000</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-sans font-medium text-stone-300">3 Noches</td>
                      <td className="py-2.5 font-bold text-white">$320.000</td>
                      <td className="py-2.5 font-bold text-white">$370.000</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-sans font-medium text-stone-300">4 Noches</td>
                      <td className="py-2.5 font-bold text-white">$400.000</td>
                      <td className="py-2.5 font-bold text-white">$450.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Note */}
              <div className="md:col-span-2 text-center text-[11px] text-stone-400 font-light">
                <span className="text-amber-300 font-medium">Check In 14:00 hs</span> —{' '}
                <span className="text-amber-300 font-medium">Check Out 11:00 hs</span> · Late Check Out (hasta las 18:00 hs): Adicional $40.000.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
