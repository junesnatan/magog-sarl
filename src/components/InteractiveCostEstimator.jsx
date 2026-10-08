import React, { useState } from 'react';
import { Calculator, Send, Check, AlertCircle, Sparkles, Clock, MapPin, Users, HelpCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

export function InteractiveCostEstimator({ onOpenQuoteModal }) {
  const [projectType, setProjectType] = useState('forage');
  const [scale, setScale] = useState(1); // 1 = standard, 2 = moyen, 3 = grand
  const [location, setLocation] = useState('Cotonou / Abomey-Calavi');
  const [includeStudy, setIncludeStudy] = useState(true);
  const [copied, setCopied] = useState(false);

  const configs = {
    forage: {
      name: "Forage Solaire & Adduction",
      unit: "Profondeur & Débit",
      options: [
        { level: 1, label: "Forage 60 - 90m (Particulier / PME)", cost: "3 800 000 - 6 500 000 FCFA", delay: "10 - 15 jours", team: "Foreuse Rotary + 4 techniciens" },
        { level: 2, label: "Forage 100 - 180m + Pompage Solaire", cost: "8 500 000 - 15 000 000 FCFA", delay: "20 - 28 jours", team: "Ingénieur Hydrogéologue + Équipe forage MFT" },
        { level: 3, label: "Forage Industriel > 200m + Déferrisation", cost: "18 000 000 - 32 000 000 FCFA", delay: "35 - 50 jours", team: "Chef de projet + Atelier lourd + Électricien" },
      ]
    },
    chateau: {
      name: "Château d'Eau AEP & Réseau",
      unit: "Capacité de stockage",
      options: [
        { level: 1, label: "Réservoir Béton 50 - 100 m³ (H=12m)", cost: "12 000 000 - 22 000 000 FCFA", delay: "45 - 60 jours", team: "Ingénieur Béton + Ferrailleurs + Coffreurs" },
        { level: 2, label: "Château d'Eau 250 - 500 m³ + Réseau PEHD", cost: "35 000 000 - 75 000 000 FCFA", delay: "3 - 5 mois", team: "Bureau d'études + Topographe + 25 ouvriers" },
        { level: 3, label: "Complexe AEP Régional > 1 000 m³", cost: "Sur Devis Spécialisé", delay: "6 - 9 mois", team: "Direction de projet complète + Grue + Labo" },
      ]
    },
    batiment: {
      name: "Bâtiment & Gros Œuvre (R+N)",
      unit: "Envergure structurale",
      options: [
        { level: 1, label: "Villa R+1 / Bureaux (200 - 450 m²)", cost: "25 000 000 - 55 000 000 FCFA", delay: "2 - 4 mois", team: "Conducteur de travaux + Maçons qualifiés" },
        { level: 2, label: "Immeuble R+3 / R+4 Résidentiel", cost: "70 000 000 - 160 000 000 FCFA", delay: "6 - 9 mois", team: "Ingénieur Calculateur + Topographe + 40 ouvriers" },
        { level: 3, label: "Complexe R+5 et plus / Industriel", cost: "Étude et Devis BIM Personnalisé", delay: "9 - 14 mois", team: "Direction de travaux + Bureau de contrôle" },
      ]
    },
    assainissement: {
      name: "Assainissement Pluvial & VRD",
      unit: "Linéaire & Dimension",
      options: [
        { level: 1, label: "Caniveau trapézoïdal bétonné (100 - 300m)", cost: "6 000 000 - 14 000 000 FCFA", delay: "20 - 30 jours", team: "Terrassiers + Coffreurs caniveaux" },
        { level: 2, label: "Dalot cadre double 3x2m + Voie pavée", cost: "22 000 000 - 48 000 000 FCFA", delay: "45 - 70 jours", team: "Pelle mécanique + Ingénieur VRD" },
        { level: 3, label: "Collecteur d'orage d'envergure > 1 km", cost: "Marché Spécifique Cadre de Vie", delay: "4 - 8 mois", team: "Atelier lourd VRD + Topographie continue" },
      ]
    }
  };

  const currentOption = configs[projectType].options[scale - 1];

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Bonjour MAGOG SARL,\nJe souhaite une étude pour un projet de :\n- Type : ${configs[projectType].name}\n- Dimension : ${currentOption.label}\n- Localisation : ${location}\n- Étude de sol / topographie incluse : ${includeStudy ? 'Oui' : 'Non'}\nMerci de me recontacter pour un devis officiel.`
    );
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="estimateur" className="py-24 bg-[#0B1528] text-white relative overflow-hidden">
      {/* Background glowing rings */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 border border-orange-500/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Outil d'Aide à la Décision
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Simulateur de Projet & Estimation Préliminaire.
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Estimez les ordres de grandeur de vos travaux au Bénin et transmettez directement votre fiche de spécification à notre bureau d'études.
          </p>
        </div>

        {/* Simulator Container */}
        <div className="max-w-4xl mx-auto bg-slate-900/90 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl p-6 sm:p-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Controls (Left 7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* 1. Project Type Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  1. Type d'ouvrage envisagé
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'forage', label: 'Forage & Eau Potable', icon: '💧' },
                    { id: 'chateau', label: 'Château d\'Eau AEP', icon: '🏰' },
                    { id: 'batiment', label: 'Bâtiment R+N / BTP', icon: '🏢' },
                    { id: 'assainissement', label: 'Caniveaux & VRD', icon: '🚧' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setProjectType(item.id)}
                      className={`flex items-center gap-2.5 p-3 rounded-2xl text-xs font-bold transition-all text-left border ${
                        projectType === item.id
                          ? 'bg-[#F26522] text-white border-orange-500 shadow-lg shadow-orange-500/20'
                          : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <span className="text-base">{item.icon}</span>
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Scale / Volume */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    2. Envergure & Caractéristiques
                  </label>
                  <span className="text-[11px] text-orange-400 font-semibold">
                    Niveau {scale}/3
                  </span>
                </div>

                <div className="space-y-2">
                  {configs[projectType].options.map((opt) => (
                    <button
                      key={opt.level}
                      onClick={() => setScale(opt.level)}
                      className={`w-full p-3 rounded-xl text-xs text-left transition-all border flex items-center justify-between ${
                        scale === opt.level
                          ? 'bg-white/15 text-white border-orange-400 font-bold'
                          : 'bg-white/5 text-slate-400 border-white/5 hover:bg-white/10'
                      }`}
                    >
                      <span>{opt.label}</span>
                      {scale === opt.level && <Check className="w-4 h-4 text-orange-400" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Location in Benin */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  3. Localisation des travaux au Bénin
                </label>
                <div className="relative">
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-orange-500"
                  >
                    <option value="Cotonou / Littoral" className="bg-[#0B1528] text-white">Cotonou (Littoral)</option>
                    <option value="Abomey-Calavi / Atlantique" className="bg-[#0B1528] text-white">Abomey-Calavi / Allada (Atlantique)</option>
                    <option value="Porto-Novo / Sèmè (Ouémé)" className="bg-[#0B1528] text-white">Porto-Novo / Sèmè (Ouémé)</option>
                    <option value="Parakou / Borgou" className="bg-[#0B1528] text-white">Parakou / N'Dali (Borgou)</option>
                    <option value="Bohicon / Abomey (Zou)" className="bg-[#0B1528] text-white">Bohicon / Abomey (Zou)</option>
                    <option value="Natitingou / Atacora" className="bg-[#0B1528] text-white">Natitingou / Tanguiéta (Atacora)</option>
                    <option value="Autre commune du Bénin" className="bg-[#0B1528] text-white">Autre commune du Bénin</option>
                  </select>
                </div>
              </div>

              {/* 4. Checkbox Study */}
              <div className="pt-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeStudy}
                    onChange={(e) => setIncludeStudy(e.target.checked)}
                    className="w-4 h-4 rounded text-orange-500 focus:ring-orange-500 bg-white/10 border-white/20"
                  />
                  <span className="text-xs text-slate-300 font-medium">
                    Inclure l'étude préalable géotechnique (sols) & le levé topographique
                  </span>
                </label>
              </div>

            </div>

            {/* Results Card (Right 5 cols) */}
            <div className="lg:col-span-5 bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Estimation Prévisionnelle
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">BÉNIN</span>
                </div>

                {/* Price Display */}
                <div className="mt-5">
                  <span className="text-[11px] text-slate-400 font-medium">Budget indicatif HT :</span>
                  <div className="text-xl sm:text-2xl font-black text-white mt-1 text-emerald-400 leading-tight">
                    {currentOption.cost}
                  </div>
                </div>

                {/* Timeline & Team */}
                <div className="mt-6 space-y-3 pt-4 border-t border-white/10 text-xs">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-2 text-slate-400">
                      <Clock className="w-3.5 h-3.5 text-orange-400" /> Délai d'exécution :
                    </span>
                    <span className="font-bold text-white">{currentOption.delay}</span>
                  </div>

                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-2 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-orange-400" /> Zone d'intervention :
                    </span>
                    <span className="font-bold text-white text-right truncate max-w-[150px]">{location}</span>
                  </div>

                  <div className="flex flex-col gap-1 text-slate-300 pt-2 border-t border-white/5">
                    <span className="flex items-center gap-2 text-slate-400 text-[11px]">
                      <Users className="w-3.5 h-3.5 text-orange-400" /> Équipe & Moyens :
                    </span>
                    <span className="font-medium text-slate-200 text-[11px]">{currentOption.team}</span>
                  </div>
                </div>

                {/* Note */}
                <div className="mt-4 p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-[10px] text-orange-200 leading-relaxed">
                  * Les tarifs sont donnés à titre indicatif selon les prix moyens des matériaux au Bénin. Une visite sur site est nécessaire pour le devis quantitatif définitif.
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-6 space-y-2.5">
                <button
                  onClick={handleWhatsAppSend}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-xs shadow-lg transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Envoyer cette fiche sur WhatsApp</span>
                </button>

                <button
                  onClick={() => onOpenQuoteModal({ 
                    specialty: `${configs[projectType].name} (${currentOption.label})`,
                    location: location
                  })}
                  className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-2.5 px-4 rounded-xl text-xs transition-colors border border-white/10"
                >
                  <span>Recevoir une Offre Formelle</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
