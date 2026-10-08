import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

export function QuoteModal({ isOpen, onClose, initialData = {} }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: initialData.contactInitial || '',
    service: initialData.specialty || 'Ingénierie Hydraulique & AEP',
    location: initialData.location || 'Cotonou',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialData.specialty) {
      setFormData(prev => ({ ...prev, service: initialData.specialty }));
    }
    if (initialData.contactInitial) {
      setFormData(prev => ({ ...prev, phone: initialData.contactInitial }));
    }
    if (initialData.location) {
      setFormData(prev => ({ ...prev, location: initialData.location }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Bonjour MAGOG SARL,\nJe souhaite un devis :\n- Nom : ${formData.name || 'Client'}\n- Téléphone : ${formData.phone}\n- Domaine : ${formData.service}\n- Ville : ${formData.location}\n- Message : ${formData.message || 'Prise de contact'}`
    );
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1528]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#F26522]"></div>

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Fermer"
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black text-[#0B1528]">
              Demande transmise avec succès !
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-sm mx-auto">
              Un ingénieur de notre bureau d'études vous contactera au <strong>{formData.phone}</strong> sous 24h ouvrées.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-2 justify-center">
              <button
                onClick={handleWhatsApp}
                className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Poursuivre sur WhatsApp</span>
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="bg-slate-100 text-slate-700 text-xs font-bold py-2.5 px-4 rounded-xl hover:bg-slate-200"
              >
                Fermer
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <div className="text-[11px] font-bold text-orange-600 uppercase tracking-widest">
                MAGOG SARL • Bénin
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#0B1528] mt-1">
                Demande de Devis ou Visite de Site
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Étude technique préliminaire sans engagement.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-[#0B1528] mb-1">
                  Nom complet / Société *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Ing. Jean-Marc MENSAH"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-[#0B1528] focus:outline-none focus:border-orange-500 font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#0B1528] mb-1">
                    Numéro de Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+229 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-[#0B1528] focus:outline-none focus:border-orange-500 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B1528] mb-1">
                    Commune / Ville *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Cotonou, Calavi..."
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-[#0B1528] focus:outline-none focus:border-orange-500 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0B1528] mb-1">
                  Domaine d'intervention
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-[#0B1528] focus:outline-none focus:border-orange-500 font-medium"
                >
                  <option value="Ingénierie Hydraulique (AEP & Forage)">Hydraulique & Adduction Eau Potable</option>
                  <option value="Forage Solaire & Pompage">Forage Profond & Pompage Solaire</option>
                  <option value="Génie Civil & Bâtiments R+N">Génie Civil & Bâtiments Gros Œuvre</option>
                  <option value="Assainissement & Dalots VRD">Assainissement Pluvial & VRD</option>
                  <option value="Études Géotechniques & Topographie">Études Géotechniques & Topographie</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0B1528] mb-1">
                  Brève description du projet
                </label>
                <textarea
                  rows={3}
                  placeholder="Dimensions, volume, profondeur estimée, contraintes d'accès..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs text-[#0B1528] focus:outline-none focus:border-orange-500 font-medium"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full bg-[#0B1528] hover:bg-[#F26522] text-white font-bold py-3 rounded-xl text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Envoyer ma demande à l'équipe technique</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Démarrer directement sur WhatsApp</span>
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
