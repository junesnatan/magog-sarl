import React, { useState } from 'react';
import { 
  Droplet, 
  Building2, 
  ShieldCheck, 
  Activity, 
  Sun, 
  Check, 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  HardHat, 
  Sliders, 
  Maximize2,
  FileText
} from 'lucide-react';
import { HOTSPOTS_DATA, SITE_CONFIG } from '../data/siteData';

export function BentoHotspotSection({ onOpenQuoteModal }) {
  const [activeHotspot, setActiveHotspot] = useState(HOTSPOTS_DATA[0]);
  const [hoveredHotspot, setHoveredHotspot] = useState(null);

  const getHotspotIcon = (iconName) => {
    switch (iconName) {
      case 'droplet': return <Droplet className="w-3.5 h-3.5 text-blue-400" />;
      case 'activity': return <Activity className="w-3.5 h-3.5 text-emerald-400" />;
      case 'building': return <Building2 className="w-3.5 h-3.5 text-orange-400" />;
      case 'shield': return <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />;
      case 'sun': return <Sun className="w-3.5 h-3.5 text-amber-400" />;
      default: return <Droplet className="w-3.5 h-3.5 text-blue-400" />;
    }
  };

  return (
    <section id="bento" className="py-20 md:py-28 bg-[#F1F5F9]/60 relative scroll-mt-28 sm:scroll-mt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-[#F26522] border border-orange-200 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#F26522] animate-ping-slow"></span>
            Architecture & Composants Clés
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1528] tracking-tight">
            Une vision intégrée de l'ingénierie et de la construction.
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Découvrez comment MAGOG SARL combine hydraulique souterraine, structures en béton armé et assainissement durable sur un même complexe d'envergure.
          </p>
        </div>

        {/* Bento Grid Layout (Inspired directly by Mockup 2: "Safe house") */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Top Left Card: Headline + Input */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
              <div>
                <span className="inline-block text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full mb-4">
                  • Diagnostic & Visite de site offerts
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1528] leading-tight">
                  L'excellence technique pour chaque mètre carré.
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Laissez-nous vos coordonnées et nos ingénieurs calculs & hydraulique vous recontactent sous 24h avec une pré-étude détaillée.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={onOpenQuoteModal}
                  className="w-full flex items-center justify-between bg-slate-900 hover:bg-[#F26522] text-white p-3.5 rounded-2xl transition-all duration-300 group shadow-md"
                >
                  <span className="text-xs font-bold pl-2">Demander une étude personnalisée</span>
                  <div className="w-8 h-8 rounded-xl bg-white/10 group-hover:bg-white flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4 text-white group-hover:text-[#F26522] transition-colors" />
                  </div>
                </button>
              </div>
            </div>

            {/* Middle Left Card: Smart Engineering Quality Feature Card (Mockup 2: "Smart Lock") */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 flex flex-col sm:flex-row items-center gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-100 border border-slate-200 flex flex-col items-center justify-center p-2 shrink-0">
                <HardHat className="w-7 h-7 text-[#F26522]" />
                <span className="text-[10px] font-bold text-slate-500 mt-1">QHSE BÉNIN</span>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Contrôle & Conformité
                </span>
                <h4 className="text-sm sm:text-base font-bold text-[#0B1528]">
                  Essais géotechniques & écrasement béton
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Éprouvettes testées à 7, 14 et 28 jours selon les normes NF EN 12390 pour garantir une pérennité absolue.
                </p>
              </div>
            </div>

            {/* Bottom Left: Dark Feature Card (Mockup 2: "Push-Pul" dark card) */}
            <div className="bg-[#0B1528] text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-slate-800 relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider flex items-center gap-2">
                  <Sliders className="w-3.5 h-3.5" />
                  Conception & Dimensionnement
                </span>
                <span className="text-[10px] bg-white/10 text-slate-300 px-2 py-0.5 rounded-full font-mono">
                  BIM & DAO
                </span>
              </div>

              <div className="mt-4">
                <h4 className="text-lg font-bold text-white">
                  Précision millimétrique & modélisation
                </h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Modélisation numérique des structures et simulation des écoulements hydrauliques pour optimiser les coûts et éliminer tout risque de fissuration ou de perte de charge.
                </p>
              </div>

              {/* Technical indicators */}
              <div className="mt-5 grid grid-cols-2 gap-3 pt-4 border-t border-white/10 text-[11px]">
                <div className="flex items-center gap-2 text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <span>Eurocode 2 / BAEL 91</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                  <span>EPANET 2 & WaterCAD</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (7 cols on lg): Large Interactive Hotspots Blueprint Visual */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Top Right: The Big Image with Pulsing Hotspots */}
            <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-slate-200/60 min-h-[420px] sm:min-h-[460px] group">
              
              {/* Construction/Hydraulic Visual Background */}
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80" 
                alt="Chantier de génie civil et réseau hydraulique MAGOG SARL"
                className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
              />

              {/* Blueprint overlay grid */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-transparent to-[#0B1528]/30 pointer-events-none"></div>

              {/* Hotspot Floating Indicators (Inspired by Mockup 2 '+' tags) */}
              {HOTSPOTS_DATA.map((spot) => {
                const isSelected = activeHotspot.id === spot.id;
                return (
                  <div
                    key={spot.id}
                    style={{ top: spot.top, left: spot.left }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                  >
                    <div className="relative group/btn">
                      {/* Pulsing ring */}
                      <span className={`absolute inset-0 rounded-full ${isSelected ? 'bg-orange-500 animate-ping' : 'bg-white/40 animate-ping-slow'}`}></span>

                      {/* Button */}
                      <button
                        onClick={() => setActiveHotspot(spot)}
                        onMouseEnter={() => setHoveredHotspot(spot)}
                        onMouseLeave={() => setHoveredHotspot(null)}
                        className={`relative w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 shadow-xl ${
                          isSelected 
                            ? 'bg-[#F26522] text-white scale-110 ring-4 ring-orange-500/30' 
                            : 'bg-white/95 text-[#0B1528] hover:bg-[#F26522] hover:text-white hover:scale-110'
                        }`}
                        title={spot.title}
                      >
                        +
                      </button>

                      {/* Mini Tag Label (Mockup 2 style) */}
                      <div className={`hidden sm:flex absolute left-full ml-2.5 top-1/2 -translate-y-1/2 items-center gap-1.5 bg-black/80 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap shadow-lg pointer-events-none transition-all ${
                        isSelected ? 'opacity-100 ring-1 ring-orange-400' : 'opacity-80 group-hover/btn:opacity-100'
                      }`}>
                        {getHotspotIcon(spot.icon)}
                        <span>{spot.title}</span>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Bottom Active Hotspot Details Banner */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/60 text-[#0B1528]">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-[#F26522] uppercase tracking-wider bg-orange-50 px-2 py-0.5 rounded-md">
                        {activeHotspot.category}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        • {activeHotspot.metric}
                      </span>
                    </div>
                    <h5 className="text-base font-extrabold text-[#0B1528] mt-1">
                      {activeHotspot.title}
                    </h5>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                      {activeHotspot.description}
                    </p>
                  </div>
                  
                  <button
                    onClick={onOpenQuoteModal}
                    className="self-end sm:self-center shrink-0 bg-[#0B1528] hover:bg-[#F26522] text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors shadow-md flex items-center gap-1.5"
                  >
                    <span>Fiche Ouvrage</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

            {/* Bottom Right Bento Row: Stats + App/Contact Card (Mockup 2 bottom right) */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
              
              {/* Stats Block (Mockup 2: "500+ downloads, 4,7 rating, 400+ users") */}
              <div className="sm:col-span-5 bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-around">
                <div className="border-b border-slate-100 pb-3">
                  <div className="text-2xl sm:text-3xl font-black text-[#0B1528]">120+</div>
                  <div className="text-xs font-semibold text-slate-500">Chantiers livrés au Bénin</div>
                </div>
                <div className="border-b border-slate-100 py-3">
                  <div className="text-2xl sm:text-3xl font-black text-[#F26522]">99.4%</div>
                  <div className="text-xs font-semibold text-slate-500">Conformité aux épreuves</div>
                </div>
                <div className="pt-3">
                  <div className="text-2xl sm:text-3xl font-black text-[#0B1528]">15+</div>
                  <div className="text-xs font-semibold text-slate-500">Années de savoir-faire</div>
                </div>
              </div>

              {/* Direct WhatsApp & Contact Card (Mockup 2 bottom green/action card) */}
              <div className="sm:col-span-7 bg-gradient-to-br from-emerald-50 via-teal-50/60 to-white rounded-3xl p-6 shadow-sm border border-emerald-200/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    {/* Team avatars */}
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-[#0B1528] text-white font-bold text-xs flex items-center justify-center border-2 border-white">IT</div>
                      <div className="w-8 h-8 rounded-full bg-[#F26522] text-white font-bold text-xs flex items-center justify-center border-2 border-white">GC</div>
                      <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center border-2 border-white">IH</div>
                    </div>
                    <span className="text-xs font-bold text-emerald-900 ml-1">
                      Permanence Ingénieurs Bénin
                    </span>
                  </div>

                  <h5 className="text-base sm:text-lg font-extrabold text-[#0B1528] mt-3">
                    Échangez directement avec notre direction technique.
                  </h5>
                  <p className="text-xs text-slate-600 mt-1">
                    Nos chefs de projets hydraulique et bâtiment sont joignables 6j/7 pour analyser vos plans et devis quantitatifs.
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Bonjour%20MAGOG%20SARL,%20je%20souhaite%20un%20devis%20pour%20mon%20chantier.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Direct</span>
                  </a>
                  <a
                    href="tel:+2290195952614"
                    className="bg-white hover:bg-slate-50 text-[#0B1528] border border-slate-300 text-xs font-bold py-2.5 px-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-orange-500" />
                    <span>Appel</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
