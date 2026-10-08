import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, HardHat, Sliders, FileText, Phone, ArrowUpRight } from 'lucide-react';
import { ARC_PORTFOLIO_ITEMS, WORKFLOW_STEPS, SITE_CONFIG } from '../data/siteData';

export function MethodologiePage({ onOpenQuoteModal }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="pt-24 pb-20">
      
      {/* Page Header (NO rounded rectangle pill badge) */}
      <section className="px-4 sm:px-6 py-12 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-3">
            Conduite de Projet & Rigueur Technique
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0B1528] tracking-tight leading-tight">
            Une Démarche Rigoureuse pour des Ouvrages Pérennes.
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            De la reconnaissance des sols et des nappes aquifères jusqu'à la réception définitive sans réserve, MAGOG SARL applique un protocole d'assurance qualité éprouvé sur chaque chantier au Bénin.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => onOpenQuoteModal({ specialty: "Étude et Méthodologie Chantier" })}
              className="bg-[#F26522] hover:bg-[#EA580C] text-white text-xs font-bold px-5 py-3 rounded-xl flex items-center gap-2 shadow-md transition-all"
            >
              <span>Consulter notre Cahier des Charges</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 3D Cylindrical Arc Gallery (Mockup 4 inspired) */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-16 overflow-hidden">
        <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-10 border border-slate-200">
          
          <div className="text-center mb-6">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Enchaînement Opérationnel
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#0B1528] mt-1">
              Les Phases d'Exécution sur le Terrain
            </h2>
          </div>

          <div className="relative py-6 perspective-1500 overflow-x-auto no-scrollbar">
            <div className="flex items-center justify-center min-w-[850px] lg:min-w-0 gap-3 sm:gap-4 px-4 py-4">
              {ARC_PORTFOLIO_ITEMS.map((item, index) => {
                const total = ARC_PORTFOLIO_ITEMS.length;
                const mid = (total - 1) / 2;
                const angle = (index - mid) * -7;
                const translateZ = -Math.pow(Math.abs(index - mid), 1.8) * 16;
                const translateY = Math.pow(Math.abs(index - mid), 1.4) * 6;

                return (
                  <div
                    key={item.id}
                    style={{
                      transform: `rotateY(${angle}deg) translateZ(${translateZ}px) translateY(${translateY}px)`,
                      transformStyle: 'preserve-3d',
                    }}
                    className="relative w-[150px] sm:w-[185px] h-[250px] sm:h-[300px] rounded-2xl overflow-hidden shadow-lg border border-slate-300 shrink-0 bg-[#0B1528]"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center filter brightness-[0.82]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-[#0B1528]/30 to-transparent"></div>

                    <div className="absolute top-3 left-3 bg-[#0B1528]/90 text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-lg">
                      Phase #{item.step}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[10px] font-semibold text-orange-400 uppercase tracking-wider block">
                        {item.category}
                      </span>
                      <h4 className="text-xs font-bold leading-tight mt-0.5 line-clamp-2">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 4 Workflow Steps (Mockup 4: #01, #02, #03, #04) */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKFLOW_STEPS.map((step, idx) => (
            <div 
              key={idx}
              onMouseEnter={() => setActiveStep(idx)}
              className={`p-6 rounded-3xl transition-all duration-300 border ${
                activeStep === idx 
                  ? 'bg-white shadow-xl border-orange-400 -translate-y-1' 
                  : 'bg-white shadow-sm border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black text-[#F26522] tracking-widest font-mono">
                  #{step.number}
                </span>
                <div className={`w-2 h-2 rounded-full ${activeStep === idx ? 'bg-[#F26522]' : 'bg-slate-300'}`}></div>
              </div>

              <h3 className="text-base font-extrabold text-[#0B1528] mb-2">
                {step.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* QHSE and Quality Guarantees */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="bg-[#0B1528] text-white rounded-3xl p-8 sm:p-12 border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center mb-4">
                <HardHat className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Sécurité QHSE sur Chantiers</h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Port des EPI obligatoire, balisage sécurisé des zones de terrassement et respect strict des normes de sécurité environnementale.
              </p>
            </div>

            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                <Sliders className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Contrôle Métrologique Continu</h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Vérification tachéométrique des axes de fondation, essais d'affaissement au cône d'Abrams et résistance des aciers torsadés.
              </p>
            </div>

            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">DOE & Garantie Décennale</h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Remise du Dossier des Ouvrages Exécutés complet incluant plans de récolement, fiches techniques des matériaux et couverture décennale.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
