import React, { useState } from 'react';
import { Star, Quote, ChevronDown, ChevronUp, CheckCircle, HelpCircle } from 'lucide-react';
import { TESTIMONIALS, FAQ_LIST } from '../data/siteData';

export function TestimonialsSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="py-24 bg-[#F8FAFC] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <CheckCircle className="w-3.5 h-3.5" />
            Témoignages & Confiance
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1528] tracking-tight">
            Ce que disent nos Maîtres d'Ouvrage.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Découvrez les retours d'expérience de ceux qui nous confient la gestion et l'exécution de leurs grands chantiers.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6 font-normal">
                  « {t.quote} »
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="font-extrabold text-[#0B1528] text-sm">{t.author}</div>
                <div className="text-xs text-orange-600 font-medium">{t.role}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{t.location}</div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto pt-8 border-t border-slate-200">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-slate-200 text-slate-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5" /> FAQ Technique
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1528]">
              Questions Fréquemment Posées
            </h3>
          </div>

          <div className="space-y-3">
            {FAQ_LIST.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0B1528] hover:text-[#F26522] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="shrink-0 p-1 rounded-full bg-slate-100 text-slate-600">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
