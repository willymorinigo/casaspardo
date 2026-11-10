import React, { useState } from 'react';
import { Star, MessageSquareQuote, ExternalLink, Plus, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { REVIEWS_DATA, Review, CONTACT_INFO } from '../data/cabanasData';

export default function ReviewsSection() {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS_DATA);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [authorName, setAuthorName] = useState('');
  const [rating, setRating] = useState(5);
  const [commentText, setCommentText] = useState('');
  const [tag, setTag] = useState<'Pareja' | 'Familia' | 'Tranquilidad' | 'Naturaleza'>('Tranquilidad');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !commentText.trim()) return;

    const newReview: Review = {
      id: Date.now().toString(),
      author: authorName.trim(),
      rating,
      date: 'Reciente',
      comment: commentText.trim(),
      source: 'Invitado Verificado',
      tag,
    };

    setReviewsList([newReview, ...reviewsList]);
    setSubmittedSuccess(true);
    setTimeout(() => {
      setSubmittedSuccess(false);
      setIsSubmitModalOpen(false);
      setAuthorName('');
      setCommentText('');
    }, 1800);
  };

  return (
    <section id="resenas" className="py-20 bg-stone-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#679f17]">
            Opiniones Reales
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-white mt-2">
            Lo que opinan quienes nos visitaron
          </h2>
          <p className="mt-3 text-base text-stone-300 font-light">
            Experiencias compartidas por huéspedes que descansaron en Casas Pardo cabañas.
          </p>
        </div>

        {/* Rating Score Card & Google Maps Verification */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-stone-950 border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <span className="text-5xl font-serif-display font-bold text-white font-mono tabular-nums">
                4.9
              </span>
              <div>
                <div className="flex text-amber-400 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-stone-400 mt-1 block">
                  Excelente calificación en Google Maps
                </span>
              </div>
            </div>

            <div className="h-8 w-px bg-stone-800 hidden sm:block" />

            <div className="flex items-center gap-2 text-xs text-stone-300">
              <ShieldCheck className="w-4 h-4 text-[#679f17] shrink-0" />
              <span>Reseñas verificadas de huéspedes reales</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={CONTACT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs font-semibold text-stone-100 bg-stone-800 hover:bg-stone-700 border border-stone-700 rounded-xl transition-all flex items-center gap-2"
            >
              <span>Ver Ubicación & Reseñas en Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#679f17]" />
            </a>

            <button
              onClick={() => setIsSubmitModalOpen(true)}
              className="px-4 py-2.5 text-xs font-semibold text-white bg-[#517e12] hover:bg-[#43690e] rounded-xl transition-all flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Dejar Reseña</span>
            </button>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviewsList.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-2xl bg-stone-800/90 border border-stone-700/80 hover:border-[#517e12]/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-[#37560c]/60 border border-[#517e12]/40 flex items-center justify-center font-serif-display text-[#eae8de] font-bold text-sm">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">{review.author}</h3>
                      <span className="text-[11px] text-stone-400 block">{review.date}</span>
                    </div>
                  </div>

                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-700/60 flex items-center justify-between text-[11px] text-stone-400">
                <span className="text-stone-400">{review.source}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-stone-900 border border-stone-700 text-[#679f17] font-medium">
                  {review.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Review Modal */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-stone-900 border border-stone-800 rounded-2xl p-6 shadow-2xl relative">
            <h3 className="font-serif-display text-xl text-white font-medium mb-1">
              Dejar una reseña sobre tu estadía
            </h3>
            <p className="text-xs text-stone-400 mb-6">
              Tu opinión nos ayuda a mantener la calidez de Casas Pardo.
            </p>

            {submittedSuccess ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                <h4 className="text-lg font-serif-display text-white">¡Muchas gracias por tu opinión!</h4>
                <p className="text-xs text-stone-300">Tu reseña ha sido agregada con éxito.</p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1">
                    Tu Nombre
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Sofía & Martin"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1">
                    Puntuación
                  </label>
                  <div className="flex gap-2 text-amber-400 py-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="p-1 hover:scale-110 transition-transform"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= rating ? 'fill-amber-400 text-amber-400' : 'text-stone-700'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1">
                    Motivo de la visita
                  </label>
                  <select
                    value={tag}
                    onChange={(e) => setTag(e.target.value as any)}
                    className="w-full bg-stone-950 border border-stone-700 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Tranquilidad">Tranquilidad & Descanso</option>
                    <option value="Pareja">Escapada en Pareja</option>
                    <option value="Familia">Estadía Familiar</option>
                    <option value="Naturaleza">Naturaleza & Río</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1">
                    Comentario
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Contanos tu experiencia en las cabañas..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-700 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="pt-3 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsSubmitModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-stone-400 hover:text-white"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-[#517e12] hover:bg-[#43690e] rounded-xl"
                  >
                    Publicar Reseña
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
