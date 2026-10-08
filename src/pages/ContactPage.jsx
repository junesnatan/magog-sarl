import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'Ingénierie Hydraulique (AEP & Forage)',
    location: 'Cotonou',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Bonjour MAGOG SARL,\nJe souhaite un devis technique :\n- Nom : ${formData.name || 'Client'}\n- Téléphone : ${formData.phone}\n- Domaine : ${formData.service}\n- Ville : ${formData.location}\n- Détails : ${formData.message || 'Prise de contact'}`
    );
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="pt-24 pb-20">
      
      {/* Page Header (NO rounded rectangle pill badge) */}
      <section className="px-4 sm:px-6 py-12 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-3">
            Relations Clients & Devis Officiels
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0B1528] tracking-tight leading-tight">
            Contactez notre Bureau d'Études au Bénin.
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Nos ingénieurs hydrauliciens et conducteurs de travaux de génie civil sont à votre disposition pour étudier vos cahiers des charges, réaliser une visite technique de site et vous adresser une proposition chiffrée.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Phone Lines & Location (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Phone Lines Card */}
            <div className="bg-[#0B1528] text-white p-7 rounded-3xl shadow-xl border border-slate-800">
              <div className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-4">
                Lignes Téléphoniques Directes
              </div>

              <div className="space-y-3.5">
                {SITE_CONFIG.phones.map((phone, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-400/40 transition-colors">
                    <span className="text-[11px] text-slate-400 block font-medium">
                      {phone.label}
                    </span>
                    <a
                      href={`tel:${phone.raw}`}
                      className="text-base sm:text-lg font-bold text-white hover:text-orange-400 transition-colors flex items-center justify-between mt-0.5"
                    >
                      <span>{phone.display}</span>
                      <span className="text-xs font-bold text-orange-300 bg-white/10 px-2 py-0.5 rounded-lg">
                        Appeler
                      </span>
                    </a>
                  </div>
                ))}
              </div>

              {/* WhatsApp Button */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Démarrer un échange sur WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Address & Hours */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#F26522] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B1528]">Siège Social & Bureau d'Études</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {SITE_CONFIG.address}
                  </p>
                  <p className="text-[11px] text-orange-600 font-semibold mt-1">
                    Interventions sur l'ensemble des départements du Bénin
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B1528]">Disponibilité & Horaires</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    {SITE_CONFIG.hours}
                  </p>
                  <p className="text-[11px] text-emerald-700 font-bold mt-1">
                    {SITE_CONFIG.emergencyAvailability}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B1528]">Courrier Électronique</h4>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-xs text-slate-600 hover:text-orange-600 transition-colors mt-1 block font-medium">
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Formal Quote Request Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
            
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-black text-[#0B1528]">
                Formulaire de Demande d'Étude & Devis
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Transmettez vos besoins techniques. Nos ingénieurs vous recontactent sous 24 à 48 heures.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-emerald-900">
                  Votre demande a bien été transmise !
                </h4>
                <p className="text-xs text-emerald-700 mt-2 max-w-sm mx-auto">
                  Merci <strong>{formData.name}</strong>. Notre direction technique prend connaissance de votre projet et vous appellera au <strong>{formData.phone}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-5 text-xs font-bold text-emerald-800 underline hover:text-emerald-900"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0B1528] mb-1.5">
                      Nom complet & Prénom *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Ing. Damien HOUESSOU"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-[#0B1528] focus:outline-none focus:border-orange-500 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B1528] mb-1.5">
                      Entreprise / Organisation (optionnel)
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Société Immobilière, Mairie..."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-[#0B1528] focus:outline-none focus:border-orange-500 font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0B1528] mb-1.5">
                      Numéro de téléphone joignable *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+229 01..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-[#0B1528] focus:outline-none focus:border-orange-500 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B1528] mb-1.5">
                      Ville / Département des travaux *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Cotonou, Abomey-Calavi, Parakou..."
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-[#0B1528] focus:outline-none focus:border-orange-500 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B1528] mb-1.5">
                    Domaine d'intervention souhaité *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-[#0B1528] focus:outline-none focus:border-orange-500 font-medium"
                  >
                    <option value="Ingénierie Hydraulique (AEP & Forage)">Ingénierie Hydraulique (AEP, Château d'Eau, Forage)</option>
                    <option value="Forage Industriel / Pompage Solaire">Forage Industriel & Pompage Solaire</option>
                    <option value="Génie Civil & BTP (Bâtiments R+N)">Génie Civil & BTP (Bâtiments R+N, Gros Œuvre)</option>
                    <option value="Voirie & Assainissement Pluvial (Dalots, Caniveaux)">Voirie & Assainissement Pluvial (Dalots, Caniveaux)</option>
                    <option value="Études Géotechniques & Topographie">Études Géotechniques, Topographie & Contrôle</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B1528] mb-1.5">
                    Description de votre projet ou cahier des charges
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Précisez la nature de l'ouvrage, les dimensions approximatives, le délai souhaité ou toute contrainte technique..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs text-[#0B1528] focus:outline-none focus:border-orange-500 font-medium"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0B1528] hover:bg-[#F26522] text-white font-bold py-3.5 px-6 rounded-xl text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmettre ma Demande de Devis</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  Confidentialité assurée • Vos données techniques restent réservées à l'évaluation de votre dossier.
                </p>

              </form>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}
