import React, { useState } from 'react';
import { 
  Droplets, 
  Activity, 
  Building2, 
  ShieldCheck, 
  Waves, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight,
  Layers
} from 'lucide-react';
import { SERVICES_LIST } from '../data/siteData';

export function ServicesSection({ onOpenQuoteModal }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = [
    { key: 'ALL', label: 'Toutes nos Expertises' },
    { key: 'Hydraulique', label: 'Hydraulique & AEP' },
    { key: 'Génie Civil', label: 'Génie Civil & BTP' },
    { key: 'Travaux Publics', label: 'VRD & Assainissement' },
    { key: 'Études & Ingénierie', label: 'Bureau d\'Études' },
  ];

  const filteredServices = selectedCategory === 'ALL'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(s => s.category.includes(selectedCategory));

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'droplet': return <Droplets className="w-6 h-6 text-[#F26522]" />;
      case 'activity': return <Activity className="w-6 h-6 text-[#F26522]" />;
      case 'building': return <Building2 className="w-6 h-6 text-[#F26522]" />;
      case 'shield': return <ShieldCheck className="w-6 h-6 text-[#F26522]" />;
      case 'waves': return <Waves className="w-6 h-6 text-[#F26522]" />;
      case 'compass': return <Compass className="w-6 h-6 text-[#F26522]" />;
      default: return <Droplets className="w-6 h-6 text-[#F26522]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-orange-50 text-[#F26522] border border-orange-200/60 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              Solutions & Ingénierie
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1528] tracking-tight">
              Nos Domaines d'Intervention Spécialisés.
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Du diagnostic initial aux essais de mise en service, MAGOG SARL mobilise des équipements de haute technologie et des ingénieurs chevronnés.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setSelectedCategory(c.key)}
                className={`text-xs font-bold px-3.5 py-2 rounded-full transition-all ${
                  selectedCategory === c.key
                    ? 'bg-[#0B1528] text-white shadow-md'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#F8FAFC] rounded-3xl p-7 border border-slate-200 hover:border-orange-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-orange-100/80 text-orange-800 px-3 py-1 rounded-full border border-orange-200">
                    {service.highlight}
                  </span>
                </div>

                {/* Title */}
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  {service.category}
                </span>
                <h3 className="text-xl font-extrabold text-[#0B1528] mt-1 group-hover:text-[#F26522] transition-colors">
                  {service.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Deliverables points */}
                <div className="mt-5 space-y-2.5 pt-5 border-t border-slate-200/60">
                  {service.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Button */}
              <div className="mt-7 pt-4">
                <button
                  onClick={() => onOpenQuoteModal({ specialty: service.title })}
                  className="w-full flex items-center justify-between bg-white group-hover:bg-[#0B1528] text-[#0B1528] group-hover:text-white px-4 py-2.5 rounded-xl border border-slate-200 group-hover:border-[#0B1528] text-xs font-bold transition-all shadow-sm"
                >
                  <span>Demander un chiffrage</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
