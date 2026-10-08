import React from 'react';
import { Award, CheckCircle, ShieldCheck, Target, Users, MapPin, HardHat, Droplets } from 'lucide-react';
import { STATS_LIST, SITE_CONFIG } from '../data/siteData';

export function AboutSection({ onOpenQuoteModal }) {
  return (
    <section id="a-propos" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Presentation (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-[#0B1528] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-slate-200">
              <span className="w-2 h-2 rounded-full bg-[#F26522]"></span>
              À Propos de MAGOG SARL
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1528] tracking-tight leading-tight">
              Bâtir des infrastructures pérennes pour le développement du Bénin.
            </h2>

            <p className="mt-5 text-slate-600 text-sm sm:text-base leading-relaxed">
              Fondée par des ingénieurs passionnés et aguerris, <strong>MAGOG SARL</strong> s'impose comme un acteur de référence dans les domaines de l'<strong>ingénierie hydraulique</strong> et du <strong>génie civil & travaux publics</strong> au Bénin et dans la sous-région Ouest-Africaine.
            </p>

            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Notre vocation : apporter des réponses d'ingénierie concrètes, sécurisées et économiquement optimales aux défis d'accès à l'eau potable, d'assainissement urbain et d'infrastructures de construction moderne.
            </p>

            {/* Core Values 3-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-200">
              <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-slate-200/80">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#F26522] flex items-center justify-center font-bold text-xs mb-2">
                  01
                </div>
                <h4 className="font-extrabold text-[#0B1528] text-sm">Rigueur & Calculs</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Dimensionnement sans compromis selon les Eurocodes et règles de l'art.
                </p>
              </div>

              <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-slate-200/80">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs mb-2">
                  02
                </div>
                <h4 className="font-extrabold text-[#0B1528] text-sm">Respect des Délais</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Planification rigoureuse et suivi continu des chantiers 6j/7.
                </p>
              </div>

              <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-slate-200/80">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs mb-2">
                  03
                </div>
                <h4 className="font-extrabold text-[#0B1528] text-sm">Qualité QHSE</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Sécurité des équipes, écrasement du béton et épreuves certifiées.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="bg-[#0B1528] hover:bg-[#F26522] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all shadow-md"
              >
                Collaborer avec notre Bureau d'Études
              </button>
              <a
                href="#contact"
                className="text-xs sm:text-sm font-bold text-slate-700 hover:text-[#F26522] flex items-center gap-1 transition-colors"
              >
                <span>Voir nos coordonnées & implantation</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right Image Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=900&q=80"
                alt="Ingénieur génie civil sur chantier MAGOG SARL"
                className="w-full h-[460px] object-cover object-center filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-transparent to-transparent"></div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/80 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F26522] text-white flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#0B1528]">Entreprise Enregistrée au Bénin</h5>
                    <p className="text-[11px] text-slate-500">Conformité légale, agréments BTP & régie hydraulique</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative mini stats card top right */}
            <div className="hidden sm:block absolute -top-5 -right-5 bg-white p-4 rounded-2xl shadow-xl border border-slate-200 max-w-[180px]">
              <div className="text-2xl font-black text-[#F26522]">100%</div>
              <div className="text-[11px] font-semibold text-slate-600 mt-0.5">
                Chantiers conduits dans les règles de l'art
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
