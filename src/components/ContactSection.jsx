import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  MessageSquare, 
  ShieldAlert, 
  Building,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Ingénierie Hydraulique (AEP & Forage)',
    location: 'Cotonou',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-[#F26522] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            Contact & Bureaux au Bénin
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1528] tracking-tight">
            Parlons de Votre Prochain Projet.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Notre direction technique et nos ingénieurs chantiers sont à votre entière disposition pour toute demande de cotation ou visite de site.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Coordinates & Benin Hotline Numbers (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone numbers card */}
            <div className="bg-[#0B1528] text-white p-7 rounded-3xl shadow-xl border border-slate-800">
              <div className="flex items-center gap-2.5 text-xs font-bold text-orange-400 uppercase tracking-wider mb-4">
                <Phone className="w-4 h-4 text-orange-400" />
                Lignes Directes Entreprise
              </div>

              <div className="space-y-4">
                {SITE_CONFIG.phones.map((phone, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-400/50 transition-colors">
                    <span className="text-[11px] text-slate-400 block font-medium">
                      {phone.label}
                    </span>
                    <a
                      href={`tel:${phone.raw}`}
                      className="text-base sm:text-lg font-black text-white hover:text-orange-400 transition-colors flex items-center justify-between mt-0.5"
                    >
                      <span>{phone.display}</span>
                      <span className="text-xs font-bold bg-white/10 px-2.5 py-1 rounded-full text-orange-300">
                        Appeler
                      </span>
                    </a>
                  </div>
                ))}
              </div>

              {/* Direct WhatsApp Call */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Bonjour%20MAGOG%20SARL,%20je%20souhaite%20un%20devis%20technique`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-2xl text-xs sm:text-sm shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Discuter instantanément sur WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Office location card */}
            <div className="bg-[#F8FAFC] p-6 rounded-3xl border border-slate-200 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#F26522] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#0B1528] text-sm">Siège Social & Bureau d'Études</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {SITE_CONFIG.address}
                  </p>
                  <p className="text-[11px] text-orange-600 font-semibold mt-1">
                    Interventions sur tout le Bénin (Atlantique, Littoral, Borgou, Ouémé, Zou...)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#0B1528] text-sm">Horaires de Travail</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    {SITE_CONFIG.hours}
                  </p>
                  <span className="inline-block text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-bold mt-1">
                    {SITE_CONFIG.emergencyAvailability}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#F8FAFC] p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
            
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-black text-[#0B1528]">
                Formulaire de Cotation & Demande d'Étude
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Remplissez les informations ci-dessous. Notre équipe d'ingénieurs s'engage à vous répondre sous 24 à 48 heures ouvrées.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="text-base font-extrabold text-emerald-900">
                  Demande transmise avec succès !
                </h4>
                <p className="text-xs text-emerald-700 mt-1 max-w-md mx-auto">
                  Merci <strong>{formData.name}</strong>. Un ingénieur de MAGOG SARL prend en charge votre dossier et vous contactera au <strong>{formData.phone}</strong> très prochainement.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-xs font-bold text-emerald-800 underline hover:text-emerald-900"
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
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-[#0B1528] focus:outline-none focus:border-orange-500 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B1528] mb-1.5">
                      Numéro de téléphone (Bénin / WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: +229 01 95 95 26 14"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-[#0B1528] focus:outline-none focus:border-orange-500 font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0B1528] mb-1.5">
                      Adresse Email professionnelle
                    </label>
                    <input
                      type="email"
                      placeholder="Ex: contact@entreprise.bj"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-[#0B1528] focus:outline-none focus:border-orange-500 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B1528] mb-1.5">
                      Localisation du chantier (Commune / Ville)
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Abomey-Calavi, Cotonou, Parakou..."
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-[#0B1528] focus:outline-none focus:border-orange-500 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B1528] mb-1.5">
                    Domaine d'intervention souhaité
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-[#0B1528] focus:outline-none focus:border-orange-500 font-medium"
                  >
                    <option value="Ingénierie Hydraulique (AEP & Forage)">Ingénierie Hydraulique (AEP, Château d'Eau, Forage)</option>
                    <option value="Génie Civil & BTP (Bâtiment R+N, Gros Œuvre)">Génie Civil & BTP (Bâtiments R+N, Gros Œuvre)</option>
                    <option value="Assainissement Pluvial & VRD (Caniveaux, Dalots)">Assainissement Pluvial & VRD (Caniveaux, Dalots)</option>
                    <option value="Station de Pompage Solaire Photovoltaïque">Station de Pompage Solaire Photovoltaïque</option>
                    <option value="Études Géotechniques & Topographie Spécialisée">Études Géotechniques & Topographie Spécialisée</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B1528] mb-1.5">
                    Description succincte de vos besoins
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Précisez la nature de l'ouvrage, les dimensions approximatives, le délai souhaité ou vos contraintes techniques..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl p-3 text-xs text-[#0B1528] focus:outline-none focus:border-orange-500 font-medium"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0B1528] hover:bg-[#F26522] text-white font-extrabold py-3.5 px-6 rounded-2xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Soumettre ma Demande de Devis</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  🔒 Vos données restent strictement confidentielles et ne sont transmises à aucun tiers.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
