import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { CONTACT_INFO } from '../data/cabanasData';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const defaultMsg = '¡Hola! Quisiera consultar la disponibilidad de las cabañas Casas Pardo.';
  const sendUrl = `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(
    customMsg.trim() || defaultMsg
  )}`;

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end">
      {/* Expanded Quick Drawer */}
      {isOpen && (
        <div className="mb-4 w-80 bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl p-5 text-white animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-stone-800">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#679f17] animate-pulse" />
              <span className="font-serif-display font-medium text-sm text-white">
                Casas Pardo WhatsApp
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-white text-xs"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 text-xs text-stone-300 font-light leading-relaxed">
            🌿 ¡Hola! Escribinos para consultar fechas disponibles, tarifas o dudas sobre tu estadía en Punta Indio.
          </div>

          <div className="space-y-3">
            <textarea
              rows={2}
              placeholder="Escribe tu consulta o dejalo por defecto..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              className="w-full bg-stone-950 border border-stone-700/80 rounded-xl px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#517e12]"
            />

            <a
              href={sendUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full py-2.5 px-4 rounded-xl bg-[#517e12] hover:bg-[#43690e] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Abrir WhatsApp ({CONTACT_INFO.whatsappDisplay})</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contactar por WhatsApp"
        className="w-14 h-14 rounded-full bg-[#517e12] hover:bg-[#43690e] text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-all group border-2 border-[#679f17]/50"
      >
        <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
}
