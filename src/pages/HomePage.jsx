import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Droplets, 
  Building2, 
  ShieldCheck, 
  Activity, 
  Sun, 
  Phone, 
  PhoneCall, 
  Star, 
  HardHat, 
  MessageCircle,
  ChevronDown,
  ChevronUp,
  HelpCircle
} from 'lucide-react';
import { SITE_CONFIG, HOTSPOTS_DATA, FAQ_LIST } from '../data/siteData';

export function HomePage({ onNavigate, onOpenQuoteModal }) {
  const [quickInput, setQuickInput] = useState('');
  const [activeHotspot, setActiveHotspot] = useState(HOTSPOTS_DATA[0]);
  const [openFaq, setOpenFaq] = useState(0);

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    if (!quickInput.trim()) return;
    onOpenQuoteModal({ contactInitial: quickInput });
  };

  const getHotspotIcon = (iconName) => {
    switch (iconName) {
      case 'Droplets': return <Droplets className="w-3.5 h-3.5 text-blue-400" />;
      case 'Activity': return <Activity className="w-3.5 h-3.5 text-emerald-400" />;
      case 'Building2': return <Building2 className="w-3.5 h-3.5 text-orange-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />;
      case 'Sun': return <Sun className="w-3.5 h-3.5 text-amber-400" />;
      default: return <Droplets className="w-3.5 h-3.5 text-blue-400" />;
    }
  };

  return (
    <div className="pt-24 pb-16">
      
      {/* 1. HERO SECTION (NO rounded rectangle badge behind the title) */}
      <section className="relative px-4 sm:px-6 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-4xl mx-auto mb-12">
            
            <div className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-3">
              Bureau d'Études & Entreprise Générale • République du Bénin
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0B1528] tracking-tight leading-[1.15]">
              L'Excellence du <span className="text-[#F26522]">Génie Civil</span> et de l'<span className="text-[#0B1528]">Hydraulique</span> au Bénin.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
              MAGOG SARL conçoit, dimensionne et réalise vos grands travaux d'infrastructure : réseaux d'adduction d'eau potable (AEP), forages profonds, châteaux d'eau et constructions de génie civil durables.
            </p>

            {/* Quick devis bar (Mockup 1 style, NO emojis) */}
            <form 
              onSubmit={handleQuickSubmit}
              className="mt-8 max-w-xl mx-auto bg-white p-2 rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-200 flex flex-col sm:flex-row items-center gap-2"
            >
              <div className="flex-1 w-full flex items-center px-4">
                <span className="text-slate-500 font-bold text-xs mr-2">+229</span>
                <input
                  type="text"
                  placeholder="Votre numéro de téléphone ou email..."
                  value={quickInput}
                  onChange={(e) => setQuickInput(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm text-[#0B1528] placeholder-slate-400 focus:outline-none py-2 font-medium"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#0B1528] hover:bg-[#F26522] text-white text-xs font-bold px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
              >
                <span>Demander une Étude</span>
                <ArrowUpRight className="w-4 h-4 text-orange-400" />
              </button>
            </form>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Étude préalable & diagnostic sous 48h
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Respect des normes Eurocodes & BAEL 91
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Garantie décennale sur tous les ouvrages
              </span>
            </div>
          </div>

          {/* Hero Showcase Card with Local Image Guarantee */}
          <div className="relative rounded-3xl bg-[#0B1528] overflow-hidden shadow-2xl border border-slate-800 text-white min-h-[460px] sm:min-h-[520px]">
            <img 
              src="/images/chateau_eau.jpg" 
              alt="Château d'eau et réseau hydraulique MAGOG SARL au Bénin"
              className="w-full h-full object-cover object-center absolute inset-0 filter brightness-[0.72] contrast-[1.08]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-[#0B1528]/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528]/80 via-transparent to-[#0B1528]/40"></div>

            <div className="relative z-10 p-6 sm:p-10 md:p-12 flex flex-col justify-between h-full min-h-[460px] sm:min-h-[520px]">
              <div className="max-w-xl">
                <div className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">
                  Infrastructures Majeures au Bénin
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                  Adduction d'Eau Potable, Châteaux d'Eau & Bâtiments R+N.
                </h2>
                <p className="mt-3 text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                  De Cotonou à Parakou, MAGOG SARL déploie des moyens matériels et humains de premier plan pour sécuriser l'approvisionnement en eau et édifier des structures en béton armé conformes aux plus hauts standards.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onNavigate('hydraulique')}
                    className="bg-[#F26522] hover:bg-[#EA580C] text-white text-xs font-bold px-5 py-3 rounded-xl flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
                  >
                    <span>Découvrir l'Hydraulique</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onNavigate('genie-civil')}
                    className="bg-white/15 hover:bg-white/25 backdrop-blur-md text-white text-xs font-bold px-5 py-3 rounded-xl flex items-center gap-2 border border-white/20 transition-colors"
                  >
                    <span>Découvrir le Génie Civil</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Bottom Trust Badge */}
              <div className="mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="font-bold text-white">4.9 / 5</span>
                  <span className="text-slate-400">• Plus de 120 chantiers livrés au Bénin</span>
                </div>

                <div className="flex items-center gap-4 text-xs font-bold text-orange-300">
                  <a href={`tel:${SITE_CONFIG.phones[0].raw}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>{SITE_CONFIG.phones[0].display}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. BENTO OVERVIEW (Mockup 2 layout, with interactive hotspots and ZERO rounded badge rectangles) */}
      <section className="py-16 bg-[#F1F5F9]/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-1">
              Architecture & Composants Clés
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0B1528] tracking-tight">
              Une vision globale de nos réalisations.
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Explorez les composantes fondamentales de nos ouvrages d'hydraulique et de génie civil à travers notre cartographie interactive.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Column (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
                    Diagnostic & Visite de Site
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1528]">
                    L'excellence technique pour chaque mètre carré.
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Nos équipes d'ingénieurs calculs et hydrauliciens interviennent dès la phase de diagnostic pour valider la faisabilité géotechnique et hydrogéologique.
                  </p>
                </div>

                <div className="mt-6">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full bg-[#0B1528] hover:bg-[#F26522] text-white p-3 rounded-xl text-xs font-bold flex items-center justify-between transition-colors shadow-sm"
                  >
                    <span>Contacter le bureau d'études</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Quality & Norms Card */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0">
                  <HardHat className="w-7 h-7 text-[#F26522]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Contrôle & Qualité
                  </div>
                  <h4 className="text-sm font-bold text-[#0B1528]">
                    Écrasement du béton & essais NF EN
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Éprouvettes testées à 7, 14 et 28 jours pour garantir la stabilité structurale.
                  </p>
                </div>
              </div>

              {/* Dark Card (Mockup 2 style) */}
              <div className="bg-[#0B1528] text-white rounded-3xl p-6 shadow-xl border border-slate-800">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                    Conception & Calculs BIM
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">BÉNIN</span>
                </div>
                <h4 className="text-base font-bold text-white mt-3">
                  Précision millimétrique & modélisation numérique
                </h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Dimensionnement selon les Eurocodes 2 et les règles BAEL 91 modifiées 99 pour une sécurité optimale et une réduction raisonnée des coûts.
                </p>
              </div>

            </div>

            {/* Right Column (7 cols): Interactive Hotspots Visual */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-slate-300 min-h-[420px] sm:min-h-[440px]">
                <img 
                  src="/images/forage_profond.jpg" 
                  alt="Chantier de forage profond et hydraulique au Bénin"
                  className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-transparent to-[#0B1528]/30"></div>

                {/* Hotspots */}
                {HOTSPOTS_DATA.map((spot) => {
                  const isSelected = activeHotspot.id === spot.id;
                  return (
                    <div
                      key={spot.id}
                      style={{ top: spot.top, left: spot.left }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                    >
                      <button
                        onClick={() => setActiveHotspot(spot)}
                        className={`relative w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-transform shadow-xl ${
                          isSelected 
                            ? 'bg-[#F26522] text-white scale-110 ring-4 ring-orange-500/30' 
                            : 'bg-white text-[#0B1528] hover:bg-[#F26522] hover:text-white'
                        }`}
                        title={spot.title}
                      >
                        +
                      </button>
                    </div>
                  );
                })}

                {/* Bottom Hotspot details */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/60 text-[#0B1528]">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <div className="text-xs font-bold text-[#F26522] uppercase tracking-wider">
                        {activeHotspot.category} • {activeHotspot.metric}
                      </div>
                      <h5 className="text-base font-extrabold text-[#0B1528] mt-0.5">
                        {activeHotspot.title}
                      </h5>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                        {activeHotspot.description}
                      </p>
                    </div>
                    <button
                      onClick={() => onNavigate(activeHotspot.category.includes('Génie') ? 'genie-civil' : 'hydraulique')}
                      className="shrink-0 bg-[#0B1528] hover:bg-[#F26522] text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5"
                    >
                      <span>Voir la page</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Stats & Quick Direct Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
                
                <div className="sm:col-span-5 bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex flex-col justify-around">
                  <div className="border-b border-slate-100 pb-2">
                    <div className="text-2xl font-black text-[#0B1528]">120+</div>
                    <div className="text-xs font-semibold text-slate-500">Chantiers livrés au Bénin</div>
                  </div>
                  <div className="border-b border-slate-100 py-2">
                    <div className="text-2xl font-black text-[#F26522]">99.4%</div>
                    <div className="text-xs font-semibold text-slate-500">Conformité aux essais</div>
                  </div>
                  <div className="pt-2">
                    <div className="text-2xl font-black text-[#0B1528]">15+</div>
                    <div className="text-xs font-semibold text-slate-500">Années d'expérience</div>
                  </div>
                </div>

                <div className="sm:col-span-7 bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-1">
                      Assistance Technique Immédiate
                    </div>
                    <h5 className="text-base font-extrabold text-[#0B1528]">
                      Parlez directement à nos ingénieurs au Bénin.
                    </h5>
                    <p className="text-xs text-slate-500 mt-1">
                      Étude de vos plans, métrés et devis quantitatifs sous 24 à 48 heures.
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Bonjour%20MAGOG%20SARL,%20je%20souhaite%20un%20devis.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Direct</span>
                    </a>
                    <a
                      href={`tel:${SITE_CONFIG.phones[0].raw}`}
                      className="bg-slate-100 hover:bg-slate-200 text-[#0B1528] text-xs font-bold py-2.5 px-3.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-orange-500" />
                      <span>Appel Direct</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. TWO DEDICATED HUB CARDS */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Hydraulic Card */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between">
              <div className="h-56 relative overflow-hidden bg-slate-900">
                <img
                  src="/images/chateau_eau.jpg"
                  alt="Ingénierie hydraulique"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-xs font-bold text-orange-400 uppercase tracking-wider">Pôle #1</div>
                  <h3 className="text-xl font-bold">Ingénierie Hydraulique & AEP</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Forages industriels et d'adduction jusqu'à 350m, châteaux d'eau en béton armé, pose de conduites PEHD et systèmes de pompage solaire photovoltaïque.
                </p>
                <button
                  onClick={() => onNavigate('hydraulique')}
                  className="w-full bg-slate-100 hover:bg-[#F26522] text-[#0B1528] hover:text-white text-xs font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <span>Accéder à la page Ingénierie Hydraulique</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Civil Engineering Card */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between">
              <div className="h-56 relative overflow-hidden bg-slate-900">
                <img
                  src="/images/batiment_chantier.jpg"
                  alt="Génie civil et BTP"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-xs font-bold text-orange-400 uppercase tracking-wider">Pôle #2</div>
                  <h3 className="text-xl font-bold">Génie Civil & BTP Construction</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Bâtiments R+N, complexes tertiaires, fondations spéciales, voiries pavées et dalots d'assainissement pluvial de grande section.
                </p>
                <button
                  onClick={() => onNavigate('genie-civil')}
                  className="w-full bg-slate-100 hover:bg-[#F26522] text-[#0B1528] hover:text-white text-xs font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <span>Accéder à la page Génie Civil & BTP</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FAQ EN ACCUEIL (Requested: "faq en accueil aussi") */}
      <section className="py-16 px-4 sm:px-6 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-10">
            <div className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2">
              Questions Fréquentes
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B1528]">
              Tout Savoir sur nos Interventions au Bénin
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Retrouvez les réponses aux interrogations régulières de nos maîtres d'ouvrage.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_LIST.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all shadow-sm"
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

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('contact')}
              className="text-xs font-bold text-orange-600 hover:text-orange-700 underline"
            >
              Une autre question technique ? Contactez nos ingénieurs directements
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
