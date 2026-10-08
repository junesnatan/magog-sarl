import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Droplets, 
  ShieldCheck,
  Phone
} from 'lucide-react';
import { COVERFLOW_PROJECTS, SITE_CONFIG } from '../data/siteData';

export function RealisationsPage({ onOpenQuoteModal }) {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with center item
  const [filter, setFilter] = useState('ALL');

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? COVERFLOW_PROJECTS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === COVERFLOW_PROJECTS.length - 1 ? 0 : prev + 1));
  };

  const activeProject = COVERFLOW_PROJECTS[currentIndex];

  const filteredProjects = filter === 'ALL'
    ? COVERFLOW_PROJECTS
    : COVERFLOW_PROJECTS.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="pt-24 pb-20">
      
      {/* Page Header (NO rounded rectangle pill badge) */}
      <section className="px-4 sm:px-6 py-12 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-3">
            Portfolio & Réalisations Majeures
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0B1528] tracking-tight leading-tight">
            Nos Chantiers Livrés à Travers le Bénin.
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Parcourez nos réalisations phares en adduction d'eau potable, forages grande profondeur, dalots cadres d'assainissement et bâtiments de génie civil réalisés pour des maîtres d'ouvrage publics et privés.
          </p>
        </div>
      </section>

      {/* 3D Coverflow Section (Mockup 3 inspired) */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-20">
        <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-10 border border-slate-200">
          
          <div className="text-center mb-8">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Aperçu 3D Interactif
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#0B1528] mt-1">
              Explorer les Grands Projets en 3D
            </h2>
          </div>

          <div className="relative flex items-center justify-center min-h-[440px] sm:min-h-[480px]">
            {/* Prev Arrow */}
            <button
              onClick={prevSlide}
              aria-label="Projet précédent"
              className="absolute left-2 sm:left-6 z-30 w-11 h-11 rounded-full bg-white shadow-lg border border-slate-200 text-[#0B1528] flex items-center justify-center transition-all hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* 3D Cards Stack */}
            <div className="w-full max-w-4xl h-[380px] sm:h-[420px] relative flex items-center justify-center perspective-1000">
              {COVERFLOW_PROJECTS.map((proj, idx) => {
                const total = COVERFLOW_PROJECTS.length;
                let offset = (idx - currentIndex + total) % total;
                if (offset > total / 2) offset -= total;

                const isCenter = offset === 0;
                const isVisible = Math.abs(offset) <= 2;
                if (!isVisible) return null;

                const translateX = offset * 200;
                const scale = isCenter ? 1 : 0.82;
                const rotateY = offset * -26;
                const zIndex = 20 - Math.abs(offset) * 5;
                const opacity = isCenter ? 1 : 0.72;

                return (
                  <div
                    key={proj.id}
                    onClick={() => setCurrentIndex(idx)}
                    style={{
                      transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                      zIndex: zIndex,
                      opacity: opacity,
                    }}
                    className={`absolute w-[260px] sm:w-[320px] h-[360px] sm:h-[400px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out shadow-xl border bg-[#0B1528] ${
                      isCenter 
                        ? 'border-orange-500 ring-4 ring-orange-500/20' 
                        : 'border-slate-300 filter brightness-90 hover:brightness-100'
                    }`}
                  >
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-[#0B1528]/30 to-transparent"></div>

                    {/* Top Category */}
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-[#0B1528]/80 text-white px-2.5 py-1 rounded-lg">
                        {proj.category}
                      </span>
                    </div>

                    {/* Bottom Details */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-orange-400 mb-1">
                        <MapPin className="w-3.5 h-3.5 text-orange-400" />
                        <span>{proj.location}</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold leading-snug line-clamp-2">
                        {proj.title}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Next Arrow */}
            <button
              onClick={nextSlide}
              aria-label="Projet suivant"
              className="absolute right-2 sm:right-6 z-30 w-11 h-11 rounded-full bg-white shadow-lg border border-slate-200 text-[#0B1528] flex items-center justify-center transition-all hover:scale-110 active:scale-95"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dynamic Description & Indicator Dots (Mockup 3) */}
          <div className="mt-8 text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              {COVERFLOW_PROJECTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Aller au projet ${i + 1}`}
                  className={`transition-all duration-300 rounded-full h-2 ${
                    currentIndex === i 
                      ? 'w-8 bg-[#0B1528]' 
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal min-h-[44px]">
              {activeProject.description}
            </p>

            <div className="mt-2 text-xs font-bold text-orange-600">
              Spécifications techniques : {activeProject.specs}
            </div>
          </div>

        </div>
      </section>

      {/* Grid of All Projects with Filtering */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-1">
              Catalogue Complet
            </div>
            <h3 className="text-2xl font-black text-[#0B1528]">
              Fiches Techniques des Ouvrages
            </h3>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'ALL', label: 'Tous les projets' },
              { id: 'hydraulique', label: 'Hydraulique' },
              { id: 'génie civil', label: 'Génie Civil' },
              { id: 'travaux publics', label: 'VRD & Ouvrages d\'art' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`text-xs font-bold px-3.5 py-1.5 rounded-xl transition-colors ${
                  filter === btn.id
                    ? 'bg-[#0B1528] text-white'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="h-48 relative overflow-hidden bg-slate-900">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B1528]/85 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg">
                    {proj.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-orange-600 font-bold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{proj.location}</span>
                  </div>

                  <h4 className="text-base font-extrabold text-[#0B1528] leading-tight">
                    {proj.title}
                  </h4>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
                    <div><strong>Maître d'Ouvrage :</strong> {proj.client}</div>
                    <div><strong>Consistance :</strong> {proj.specs}</div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenQuoteModal({ specialty: proj.title, location: proj.location })}
                  className="w-full bg-slate-50 hover:bg-[#F26522] text-[#0B1528] hover:text-white border border-slate-200 text-xs font-bold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <span>Demander un ouvrage similaire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
