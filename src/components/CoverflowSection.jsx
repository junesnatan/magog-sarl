import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { COVERFLOW_PROJECTS } from '../data/siteData';

export function CoverflowSection({ onOpenQuoteModal }) {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with center item (index 2)
  const [isMobile, setIsMobile] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? COVERFLOW_PROJECTS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === COVERFLOW_PROJECTS.length - 1 ? 0 : prev + 1));
  };

  // Touch gesture support for mobile
  const handleTouchStart = (e) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > 45) {
      nextSlide();
    } else if (distance < -45) {
      prevSlide();
    }
  };

  const activeProject = COVERFLOW_PROJECTS[currentIndex];

  return (
    <section id="projets-3d" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[700px] h-[320px] sm:h-[500px] bg-gradient-to-r from-blue-500/5 via-orange-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 overflow-hidden">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-slate-100 px-3.5 py-1 rounded-full text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">
            Portfolio d'Ingénierie Réalisé
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#0B1528] tracking-tight">
            Nos Ouvrages Majeurs & <span className="text-[#F26522]">Réalisations Récentes</span>
          </h2>
          <p className="mt-3 text-xs sm:text-base text-slate-500 font-normal">
            Parcourez nos chantiers emblématiques livrés pour le compte de l'État béninois, des municipalités et d'entreprises privées.
          </p>
          <p className="sm:hidden text-[11px] text-slate-400 mt-1">
            Glissez avec le doigt ou utilisez les flèches
          </p>
        </div>

        {/* 3D Coverflow Container */}
        <div 
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative flex items-center justify-center min-h-[390px] sm:min-h-[500px] overflow-hidden select-none"
        >
          {/* Left Navigation Arrow */}
          <button
            onClick={prevSlide}
            aria-label="Projet précédent"
            className="absolute left-1 sm:left-6 z-40 w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-white/95 shadow-md hover:shadow-2xl border border-slate-200 text-[#0B1528] flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Cards Stack with 3D Transform */}
          <div className="w-full max-w-5xl h-[350px] sm:h-[440px] relative flex items-center justify-center perspective-1000 overflow-hidden">
            {COVERFLOW_PROJECTS.map((proj, idx) => {
              const total = COVERFLOW_PROJECTS.length;
              let offset = (idx - currentIndex + total) % total;
              if (offset > total / 2) offset -= total;

              const isCenter = offset === 0;
              const maxOffset = isMobile ? 1 : 2;
              const isVisible = Math.abs(offset) <= maxOffset;

              if (!isVisible) return null;

              // Compute responsive 3D coverflow styling
              const translateX = isMobile ? offset * 115 : offset * 210;
              const scale = isCenter ? 1 : (isMobile ? 0.8 : 0.82);
              const rotateY = isMobile ? offset * -15 : offset * -28;
              const zIndex = 20 - Math.abs(offset) * 5;
              const opacity = isCenter ? 1 : (isMobile ? 0.45 : 0.72);

              return (
                <div
                  key={proj.id}
                  onClick={() => setCurrentIndex(idx)}
                  style={{
                    transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                    zIndex: zIndex,
                    opacity: opacity,
                  }}
                  className={`absolute w-[240px] sm:w-[320px] h-[330px] sm:h-[420px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out shadow-xl border bg-[#0B1528] ${
                    isCenter 
                      ? 'border-orange-500/60 ring-4 ring-orange-500/20 shadow-2xl' 
                      : 'border-white/50 filter brightness-90 hover:brightness-100'
                  }`}
                >
                  {/* Project Image */}
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-center"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-[#0B1528]/35 to-transparent"></div>

                  {/* Top Badge */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white px-2.5 py-1 rounded-full border border-white/20">
                      {proj.category}
                    </span>
                    {isCenter && (
                      <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping"></span>
                    )}
                  </div>

                  {/* Bottom Content Card */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-orange-400 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                      <span className="truncate">{proj.location}</span>
                    </div>

                    <h4 className="text-xs sm:text-base md:text-lg font-bold leading-snug line-clamp-2">
                      {proj.title}
                    </h4>

                    {isCenter && (
                      <div className="mt-1.5 text-[10px] sm:text-[11px] text-slate-300 flex items-center gap-1">
                        <span>Cliquer pour explorer l'ouvrage</span>
                        <ArrowRight className="w-3 h-3 text-orange-400" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={nextSlide}
            aria-label="Projet suivant"
            className="absolute right-1 sm:right-6 z-40 w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-white/95 shadow-md hover:shadow-2xl border border-slate-200 text-[#0B1528] flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Dynamic Detail Text & Pagination Indicators */}
        <div className="mt-6 sm:mt-8 text-center max-w-2xl mx-auto px-2">
          
          {/* Pagination dots */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-4 sm:mb-6 flex-wrap">
            {COVERFLOW_PROJECTS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Aller au projet ${i + 1}`}
                className={`transition-all duration-300 rounded-full h-2 ${
                  currentIndex === i 
                    ? 'w-7 sm:w-8 bg-[#0B1528]' 
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          {/* Detailed Paragraph */}
          <p className="text-xs sm:text-base text-slate-700 leading-relaxed font-normal min-h-[44px] sm:min-h-[50px] transition-all duration-300">
            {activeProject.description}
          </p>

          <div className="mt-2 sm:mt-3 inline-flex items-center gap-2 text-xs font-bold text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200/80 break-words max-w-full">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Spécification : {activeProject.specs}</span>
          </div>

        </div>

      </div>
    </section>
  );
}
