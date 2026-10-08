import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1528] text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Simple & Clean Row (Not overloaded) */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-white/10">
          
          {/* Logo & Tagline */}
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-orange-500 flex items-center justify-center font-black text-white text-base">
                M
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                MAGOG <span className="text-orange-500">SARL</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Ingénierie Hydraulique & Génie Civil Construction • République du Bénin. Conception, dimensionnement et réalisation d'infrastructures d'envergure.
            </p>
          </div>

          {/* Benin Direct Phone Numbers */}
          <div className="flex flex-wrap gap-4 sm:gap-6 text-xs">
            {SITE_CONFIG.phones.map((phone, idx) => (
              <a
                key={idx}
                href={`tel:${phone.raw}`}
                className="flex items-center gap-2 text-slate-300 hover:text-orange-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-orange-500" />
                <span className="font-bold text-white">{phone.display}</span>
              </a>
            ))}
          </div>

          {/* Quick Contact & WhatsApp */}
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Bonjour%20MAGOG%20SARL`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Retour haut de page"
              className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Minimal Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-orange-500" />
            <span>Cotonou, République du Bénin</span>
          </div>
          <div>
            © {new Date().getFullYear()} MAGOG SARL. Tous droits réservés.
          </div>
        </div>

      </div>
    </footer>
  );
}
