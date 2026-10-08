import React from 'react';
import { Droplets, CheckCircle2, ArrowRight, ShieldCheck, Activity, Sun, Phone, ArrowUpRight } from 'lucide-react';
import { HYDRAULIQUE_SERVICES, SITE_CONFIG } from '../data/siteData';

export function HydrauliquePage({ onOpenQuoteModal }) {
  return (
    <div className="pt-24 pb-20">
      
      {/* Page Header (NO rounded rectangle pill badge) */}
      <section className="px-4 sm:px-6 py-12 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-3">
            Pôle d'Expertise • Ingénierie Hydraulique & Eau Potable
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0B1528] tracking-tight leading-tight">
            Captage, Stockage & Distribution d'Eau au Bénin.
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            MAGOG SARL apporte des réponses durables et certifiées aux problématiques d'accès à l'eau potable. Nous prenons en charge la globalité des projets, des sondages hydrogéologiques jusqu'à l'inauguration des réseaux d'adduction et stations de pompage.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => onOpenQuoteModal({ specialty: "Ingénierie Hydraulique & AEP" })}
              className="bg-[#F26522] hover:bg-[#EA580C] text-white text-xs font-bold px-5 py-3 rounded-xl flex items-center gap-2 shadow-md transition-all"
            >
              <span>Demander une Étude Hydraulique</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${SITE_CONFIG.phones[0].raw}`}
              className="bg-slate-100 hover:bg-slate-200 text-[#0B1528] text-xs font-bold px-5 py-3 rounded-xl flex items-center gap-2 transition-colors border border-slate-200"
            >
              <Phone className="w-4 h-4 text-orange-500" />
              <span>{SITE_CONFIG.phones[0].display}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services List with Dedicated Verified Images */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto space-y-12">
        {HYDRAULIQUE_SERVICES.map((item, idx) => (
          <div 
            key={item.id}
            className={`bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image (6 cols) */}
            <div className={`lg:col-span-6 h-72 sm:h-96 relative overflow-hidden ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover object-center filter brightness-[0.88] hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#0B1528]/85 text-white text-xs font-bold px-3 py-1.5 rounded-xl backdrop-blur-md">
                {item.metric}
              </div>
            </div>

            {/* Content (6 cols) */}
            <div className={`p-6 sm:p-10 lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-1">
                {item.subtitle}
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B1528]">
                {item.title}
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {item.description}
              </p>

              {/* Specs points */}
              <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                {item.specs.map((spec, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenQuoteModal({ specialty: item.title })}
                  className="bg-[#0B1528] hover:bg-[#F26522] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-colors flex items-center gap-2"
                >
                  <span>Chiffrer cet ouvrage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Norms & Regulatory banner */}
      <section className="mt-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="bg-[#0B1528] text-white rounded-3xl p-8 sm:p-10 border border-slate-800">
          <div className="max-w-3xl">
            <div className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-2">
              Conformité Sanitaire & Technique
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Respect des directives nationales de l'eau au Bénin.
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              Tous nos réseaux d'eau potable et forages sont soumis aux analyses physico-chimiques et bactériologiques en laboratoire agréé avant toute mise en exploitation, garantissant une eau conforme aux directives de potabilité de l'OMS.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
