import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Compass, HardHat, ShieldCheck, Wrench, Eye } from 'lucide-react';
import { ARC_PORTFOLIO_ITEMS, WORKFLOW_STEPS } from '../data/siteData';

export function ArcGalleryProcessSection({ onOpenQuoteModal }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="methodologie" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      
      {/* Decorative radial gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-400/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header (Strictly styled like Mockup 4) */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs sm:text-sm font-bold text-[#F26522] tracking-wider uppercase mb-2">
            Méthodologie & Conduite de Chantier
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B1528] tracking-tight leading-tight">
            Une Démarche Rigoureuse pour des Ouvrages Pérennes.
          </h2>

          <p className="mt-3.5 text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            De l'analyse topographique initiale jusqu'aux essais sous pression et la réception définitive, notre chaîne technique garantit le respect des délais et des normes.
          </p>

          {/* Pill Action Button (Mockup 4: "See more Projects ->") */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={onOpenQuoteModal}
              className="group inline-flex items-center gap-3 bg-white hover:bg-slate-50 text-[#0B1528] border border-slate-300 text-xs sm:text-sm font-bold px-6 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all"
            >
              <span>Consulter le cahier des charges</span>
              <div className="w-6 h-6 rounded-full bg-[#F26522] flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>
        </div>

        {/* 3D Cylindrical Arc Gallery Ribbon (Directly inspired by Mockup 4) */}
        <div className="relative py-6 sm:py-10 perspective-1500 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-center min-w-[900px] lg:min-w-0 gap-3 sm:gap-4 px-4 py-6">
            {ARC_PORTFOLIO_ITEMS.map((item, index) => {
              // Calculate curved amphitheater rotation like Mockup 4
              // index 0: rotateY(18deg), translateZ(-40px)
              // index 1: rotateY(10deg), translateZ(-15px)
              // index 2: rotateY(3deg), translateZ(0px)
              // index 3: rotateY(-3deg), translateZ(0px)
              // index 4: rotateY(-10deg), translateZ(-15px)
              // index 5: rotateY(-18deg), translateZ(-40px)
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
                  className="group relative w-[160px] sm:w-[195px] h-[260px] sm:h-[310px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 shrink-0 border border-slate-200/80 cursor-pointer bg-slate-900"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.05] group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Gradient bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-[#0B1528]/20 to-transparent"></div>

                  {/* Top Step Pill Badge */}
                  <div className="absolute top-3 left-3 bg-[#0B1528]/80 backdrop-blur-md text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border border-white/20">
                    Phase #{item.step}
                  </div>

                  {/* Bottom Text inside Card */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-semibold text-orange-400 uppercase tracking-wider block">
                      {item.category}
                    </span>
                    <h5 className="text-xs font-bold leading-tight mt-0.5 line-clamp-2">
                      {item.title}
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4 Step Process Below Arc (Strictly matching Mockup 4: #01, #02, #03, #04) */}
        <div className="mt-8 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKFLOW_STEPS.map((step, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActiveStep(idx)}
                className={`p-5 rounded-2xl transition-all duration-300 ${
                  activeStep === idx 
                    ? 'bg-white shadow-lg border border-orange-200/80 -translate-y-1' 
                    : 'bg-white/60 hover:bg-white border border-slate-200/60'
                }`}
              >
                {/* Number in Orange (Mockup 4 style) */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black text-[#F26522] tracking-widest font-mono">
                    #{step.number}
                  </span>
                  <div className={`w-2 h-2 rounded-full ${activeStep === idx ? 'bg-[#F26522]' : 'bg-slate-300'}`}></div>
                </div>

                <h4 className="text-sm sm:text-base font-extrabold text-[#0B1528] mb-1.5">
                  {step.title}
                </h4>

                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
