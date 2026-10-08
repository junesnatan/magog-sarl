import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight, ChevronDown, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

export function Navbar({ currentPage, onNavigate, onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [phoneDropdownOpen, setPhoneDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'hydraulique', label: 'Hydraulique' },
    { id: 'genie-civil', label: 'Génie Civil' },
    { id: 'realisations', label: 'Réalisations' },
    { id: 'methodologie', label: 'Méthodologie' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <nav className={`transition-all duration-300 rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between gap-4 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 border border-slate-200 text-[#0B1528]' 
            : 'bg-white/90 backdrop-blur-md shadow-md border border-slate-200/80 text-[#0B1528]'
        }`}>
          
          {/* Logo MAGOG SARL - Single Line, Clean */}
          <button 
            onClick={() => handleNavClick('accueil')} 
            className="flex items-center gap-3 shrink-0 text-left"
          >
            <div className="w-9 h-9 rounded-xl bg-[#0B1528] flex items-center justify-center shadow-sm">
              <span className="text-orange-500 font-extrabold text-lg">M</span>
              <span className="text-white font-extrabold text-xs ml-0.5">G</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight text-[#0B1528] whitespace-nowrap">
                MAGOG <span className="text-orange-500">SARL</span>
              </span>
              <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider text-slate-500 border-l border-slate-300 pl-2 whitespace-nowrap">
                Bénin
              </span>
            </div>
          </button>

          {/* Desktop Nav Items - Clean Single-Line Buttons (NO superimposed text) */}
          <div className="hidden lg:flex items-center gap-1 shrink-0">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-orange-600 bg-orange-50/80'
                      : 'text-slate-700 hover:text-[#0B1528] hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Right Action Buttons (NO wrapping, NO superimposition) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Phone dropdown with guaranteed single-line display */}
            <div className="relative">
              <button
                onClick={() => setPhoneDropdownOpen(!phoneDropdownOpen)}
                className="flex items-center gap-2 text-xs font-bold text-[#0B1528] hover:text-orange-600 bg-slate-100 hover:bg-slate-200/80 px-3.5 py-2 rounded-xl transition-colors border border-slate-200 whitespace-nowrap shrink-0"
              >
                <Phone className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span className="whitespace-nowrap font-bold">+229 01 95 95 26 14</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60 shrink-0" />
              </button>

              {phoneDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-72 bg-[#0B1528] text-white border border-slate-700 rounded-xl shadow-2xl py-2 z-50 text-left"
                  onMouseLeave={() => setPhoneDropdownOpen(false)}
                >
                  <div className="px-3 py-1.5 text-[11px] font-bold text-orange-400 uppercase tracking-wider border-b border-white/10">
                    Lignes Directes MAGOG SARL
                  </div>
                  {SITE_CONFIG.phones.map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:${phone.raw}`}
                      className="flex flex-col px-3 py-2 hover:bg-white/10 transition-colors"
                    >
                      <span className="text-xs font-bold text-white flex items-center gap-1.5 whitespace-nowrap">
                        <Phone className="w-3 h-3 text-orange-400" /> {phone.display}
                      </span>
                      <span className="text-[11px] text-slate-300">{phone.label}</span>
                    </a>
                  ))}
                  <div className="p-2 border-t border-white/10 mt-1">
                    <a
                      href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Bonjour%20MAGOG%20SARL,%20je%20souhaite%20un%20renseignement`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-1.5 rounded-lg transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Direct</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="flex items-center gap-1.5 bg-[#F26522] hover:bg-[#EA580C] text-white text-xs font-bold px-4 py-2 rounded-xl shadow-sm transition-all hover:scale-[1.02] whitespace-nowrap shrink-0"
            >
              <span>Devis Gratuit</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-100 text-[#0B1528] hover:bg-slate-200 transition-colors shrink-0"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mx-4 mt-1 bg-white/95 backdrop-blur-2xl rounded-2xl border border-slate-200 shadow-2xl p-5 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                  currentPage === link.id
                    ? 'bg-[#0B1528] text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                Lignes directes au Bénin
              </div>
              {SITE_CONFIG.phones.map((p, i) => (
                <a
                  key={i}
                  href={`tel:${p.raw}`}
                  className="flex items-center justify-between text-xs font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-200"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-orange-500" />
                    {p.display}
                  </span>
                  <span className="text-[10px] text-slate-500">{p.label}</span>
                </a>
              ))}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full mt-2 flex items-center justify-center gap-2 bg-[#F26522] text-white font-bold py-3 rounded-xl shadow-lg shadow-orange-500/30"
              >
                <span>Demander un Devis Gratuit</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
