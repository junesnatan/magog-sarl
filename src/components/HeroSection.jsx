import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Shield, Droplets, HardHat, Sparkles, Building, ChevronRight, PhoneCall, Star } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

export function HeroSection({ onOpenQuoteModal }) {
  const [activeSpecialty, setActiveSpecialty] = useState('hydraulique');
  const [quickInput, setQuickInput] = useState('');
  const [quickSuccess, setQuickSuccess] = useState(false);

  const specialties = {
    hydraulique: {
      title: "Adduction d'Eau Potable & Forages",
      desc: "Châteaux d'eau en béton armé, captages profonds jusqu'à 350m, réseaux AEP gravitaires et refoulement.",
      specs: "Débit max: 180 m³/h • Capacité: 1 500 m³ • Qualité ISO",
      tag: "Hydraulique de pointe",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
      stats: "45+ Châteaux & Réseaux livrés"
    },
    geniecivil: {
      title: "Génie Civil & Bâtiments Complexes",
      desc: "Conception et gros œuvre d'immeubles R+N, complexes logistiques, fondations spéciales et charpentes lourdes.",
      specs: "Conformité Eurocodes 2 & BAEL 91 • Béton autoplaçant BAP",
      tag: "Structure & BTP",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80",
      stats: "38+ Bâtiments & Ouvrages d'art"
    },
    assainissement: {
      title: "Assainissement Pluvial & VRD",
      desc: "Dalots de franchissement, collecteurs bétonnés, canaux d'évacuation et lutte contre les inondations urbaines.",
      specs: "Débit évacuation: 85 m³/s • Ouvrages dalots double 4x3m",
      tag: "Infrastructures Urbaines",
      image: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=1200&q=80",
      stats: "50+ km de collecteurs posés"
    },
    solaire: {
      title: "Pompage Solaire & Énergie Verte",
      desc: "Stations photovoltaïques autonomes pour forages villageois, fermes agricoles et complexes industriels isolés.",
      specs: "Systèmes hybrides DC/AC • Onduleurs avec monitoring GSM",
      tag: "Développement Durable",
      image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
      stats: "25+ Stations solaires en service"
    }
  };

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    if (!quickInput.trim()) return;
    setQuickSuccess(true);
    setTimeout(() => {
      onOpenQuoteModal({ contactInitial: quickInput });
    }, 400);
  };

  const current = specialties[activeSpecialty];

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-100 via-slate-50 to-[#F8FAFC]">
      {/* Decorative background grid and engineering lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0B152808_1px,transparent_1px),linear-gradient(to_bottom,#0B152808_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
      
      {/* Subtle blur glow circles */}
      <div className="absolute -top-32 right-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Centered Header (Inspired by Mockup 1: "Travel stress-free with your close friends") */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-14">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-white/90 border border-slate-200/90 shadow-sm px-4 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Bureau d'Études & Travaux BTP Agréé au Bénin
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0B1528] tracking-tight leading-[1.15]">
            Bâtir l'avenir avec <span className="text-[#F26522] italic font-serif">rigueur</span> & ingénierie de précision.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            <strong className="text-[#0B1528] font-semibold">MAGOG SARL</strong> est votre partenaire de référence au Bénin pour la conception, le dimensionnement et la réalisation d'infrastructures hydrauliques, forages profonds et ouvrages de génie civil durables.
          </p>

          {/* Quick Contact / Devis Input Pill (Mockup 1 style) */}
          <form 
            onSubmit={handleQuickSubmit}
            className="mt-7 max-w-xl mx-auto bg-white p-2 rounded-full shadow-xl shadow-slate-200/70 border border-slate-200/90 flex flex-col sm:flex-row items-center gap-2"
          >
            <div className="flex-1 w-full flex items-center px-4">
              <span className="text-slate-400 text-sm mr-2">🇧🇯 +229</span>
              <input
                type="text"
                placeholder="Votre numéro ou adresse email..."
                value={quickInput}
                onChange={(e) => setQuickInput(e.target.value)}
                className="w-full bg-transparent text-sm text-[#0B1528] placeholder-slate-400 focus:outline-none py-2 font-medium"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#0B1528] hover:bg-[#142038] text-white text-xs font-bold px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all shadow-md group whitespace-nowrap"
            >
              <span>Demander une Étude</span>
              <ArrowUpRight className="w-4 h-4 text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </form>

          {/* Micro assurances */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-[12px] text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Devis gratuit sous 48h
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Étude géotechnique & hydraulique
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Garantie décennale & conformité
            </span>
          </div>
        </div>

        {/* High-End Architectural Showcase Container (Inspired by Mockup 5 "Roofora") */}
        <div className="relative rounded-3xl bg-slate-900 overflow-hidden shadow-2xl border border-slate-800 text-white">
          
          {/* Background Hero Image with Dynamic Transition */}
          <div className="relative h-[480px] sm:h-[540px] lg:h-[580px] w-full overflow-hidden">
            <img 
              src={current.image} 
              alt={current.title}
              className="w-full h-full object-cover object-center scale-105 transition-all duration-700 ease-out filter brightness-[0.78] contrast-[1.08]"
            />
            {/* Gradient overlays for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-[#0B1528]/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528]/80 via-transparent to-[#0B1528]/40"></div>
          </div>

          {/* Floating Glassmorphic Cards inside Hero (Mockup 5 layout) */}
          <div className="absolute inset-0 p-5 sm:p-8 md:p-12 flex flex-col justify-between pointer-events-none">
            
            {/* Top Left: Main Hero Presentation Tag */}
            <div className="max-w-xl pointer-events-auto">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold text-white mb-3 border border-white/20">
                <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                {current.tag}
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {current.title}
              </h2>

              <p className="mt-2.5 text-xs sm:text-sm text-slate-200 line-clamp-2 sm:line-clamp-none max-w-lg font-light leading-relaxed">
                {current.desc}
              </p>

              <div className="mt-4 flex items-center gap-3">
                <button
                  onClick={onOpenQuoteModal}
                  className="bg-[#F26522] hover:bg-[#EA580C] text-white text-xs font-bold px-5 py-2.5 rounded-full flex items-center gap-2 shadow-lg shadow-orange-500/30 transition-all hover:scale-105"
                >
                  <span>Lancer ce Projet</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={`tel:${SITE_CONFIG.phones[0].raw}`}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-semibold px-4 py-2.5 rounded-full flex items-center gap-2 border border-white/20 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-orange-300" />
                  <span>+229 01 95 95 26 14</span>
                </a>
              </div>
            </div>

            {/* Bottom Floating Interactive Card (Inspired by "Modern Roof Style" in Mockup 5) */}
            <div className="flex flex-col lg:flex-row items-end lg:items-center justify-between gap-4 pointer-events-auto">
              
              {/* Interactive Specialty Switcher Box (Like Mockup 5 interactive widget) */}
              <div className="bg-[#0B1528]/85 backdrop-blur-xl border border-white/20 rounded-2xl p-4 w-full sm:w-auto max-w-lg shadow-2xl">
                <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/10 text-xs">
                  <span className="font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                    Pôles d'Expertise Spécifiques
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">Bénin & Région</span>
                </div>

                {/* Filter tabs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-3">
                  {[
                    { key: 'hydraulique', label: 'Hydraulique AEP' },
                    { key: 'geniecivil', label: 'Génie Civil' },
                    { key: 'assainissement', label: 'Assainissement' },
                    { key: 'solaire', label: 'Solaire & Forage' }
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveSpecialty(tab.key)}
                      className={`text-[11px] font-semibold py-1.5 px-2.5 rounded-xl transition-all text-center ${
                        activeSpecialty === tab.key
                          ? 'bg-[#F26522] text-white shadow-md'
                          : 'bg-white/10 text-slate-300 hover:bg-white/15 hover:text-white'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Live technical metric */}
                <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
                  <span className="truncate pr-2">{current.specs}</span>
                  <span className="font-bold text-orange-300 whitespace-nowrap bg-orange-500/20 px-2 py-0.5 rounded-md">
                    {current.stats}
                  </span>
                </div>
              </div>

              {/* Verified Trust Badge (Mockup 5 bottom right) */}
              <div className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-2xl p-3.5 flex items-center gap-3 shadow-xl">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center font-bold text-xs text-white">M</div>
                  <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-white flex items-center justify-center font-bold text-xs text-white">G</div>
                  <div className="w-8 h-8 rounded-full bg-emerald-600 border-2 border-white flex items-center justify-center font-bold text-xs text-white">B</div>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1 text-amber-400 text-xs font-black">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>4.9 / 5</span>
                    <span className="text-white/80 font-normal text-[11px] ml-1">Excellence Bénin</span>
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Plus de 120 ouvrages réceptionnés sans réserve
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Partner Ticker Bar (Inspired by Mockup 5 bottom logo ticker) */}
        <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs font-extrabold uppercase tracking-widest text-slate-400 whitespace-nowrap">
            Nos références & partenaires :
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 sm:gap-10 text-slate-500 text-xs font-semibold">
            <span className="hover:text-[#0B1528] transition-colors flex items-center gap-1.5">
              <Droplets className="w-4 h-4 text-orange-500" /> Sociétés d'Eau & AEP
            </span>
            <span className="hover:text-[#0B1528] transition-colors flex items-center gap-1.5">
              <Building className="w-4 h-4 text-[#0B1528]" /> Collectivités & Mairies
            </span>
            <span className="hover:text-[#0B1528] transition-colors flex items-center gap-1.5">
              <HardHat className="w-4 h-4 text-orange-500" /> Bailleurs Internationaux & ONGs
            </span>
            <span className="hover:text-[#0B1528] transition-colors flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-emerald-600" /> Promoteurs Immobiliers BTP
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
