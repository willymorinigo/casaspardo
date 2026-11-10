import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/cabanasData';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedItemIndex(index);
  };

  const closeLightbox = () => {
    setSelectedItemIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : (prev ?? 0) - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : (prev ?? 0) + 1));
    }
  };

  return (
    <section id="galeria" className="py-20 bg-[#eae8de] text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#517e12]">
            Galería Fotográfica
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-stone-900 mt-2">
            El entorno natural de Casas Pardo
          </h2>
          <p className="mt-3 text-base text-stone-700 font-light">
            Explora las fotos reales de nuestras cabañas, el predio arbolado, las parrillas individuales y los paisajes de la Reserva de Biosfera.
          </p>
        </div>

        {/* Grid Display without filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden shadow-md bg-white border border-stone-300/80 cursor-pointer h-72"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-transparent opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <h3 className="font-serif-display text-lg font-medium">{item.title}</h3>
                <p className="text-xs text-stone-300 font-light mt-1">{item.caption}</p>
              </div>

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-stone-900/60 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItemIndex !== null && GALLERY_ITEMS[selectedItemIndex] && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 p-3 text-stone-300 hover:text-white rounded-full bg-stone-900/60 z-50 transition-colors"
            aria-label="Cerrar vista previa"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 p-3 text-white bg-stone-900/60 hover:bg-stone-800 rounded-full z-50 transition-colors"
            aria-label="Anterior foto"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 p-3 text-white bg-stone-900/60 hover:bg-stone-800 rounded-full z-50 transition-colors"
            aria-label="Siguiente foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
          >
            <img
              src={GALLERY_ITEMS[selectedItemIndex].src}
              alt={GALLERY_ITEMS[selectedItemIndex].alt}
              className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 text-center text-white max-w-xl">
              <h3 className="font-serif-display text-xl font-medium">
                {GALLERY_ITEMS[selectedItemIndex].title}
              </h3>
              <p className="text-stone-300 text-xs mt-1 font-light">
                {GALLERY_ITEMS[selectedItemIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
