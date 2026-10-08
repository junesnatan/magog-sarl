import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { HomePage } from './pages/HomePage';
import { HydrauliquePage } from './pages/HydrauliquePage';
import { GenieCivilPage } from './pages/GenieCivilPage';
import { RealisationsPage } from './pages/RealisationsPage';
import { MethodologiePage } from './pages/MethodologiePage';
import { ContactPage } from './pages/ContactPage';
import { Phone, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from './data/siteData';

export function App() {
  const [currentPage, setCurrentPage] = useState('accueil');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState({});

  // Sync hash with page
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['accueil', 'hydraulique', 'genie-civil', 'realisations', 'methodologie', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageId) => {
    setCurrentPage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (initialData = {}) => {
    setModalInitialData(initialData);
    setIsQuoteOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteOpen(false);
    setModalInitialData({});
  };

  // Render current page
  const renderPage = () => {
    switch (currentPage) {
      case 'hydraulique':
        return <HydrauliquePage onOpenQuoteModal={handleOpenQuoteModal} />;
      case 'genie-civil':
        return <GenieCivilPage onOpenQuoteModal={handleOpenQuoteModal} />;
      case 'realisations':
        return <RealisationsPage onOpenQuoteModal={handleOpenQuoteModal} />;
      case 'methodologie':
        return <MethodologiePage onOpenQuoteModal={handleOpenQuoteModal} />;
      case 'contact':
        return <ContactPage />;
      case 'accueil':
      default:
        return (
          <HomePage 
            onNavigate={handleNavigate} 
            onOpenQuoteModal={handleOpenQuoteModal} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0B1528] font-sans antialiased flex flex-col justify-between selection:bg-orange-500 selection:text-white">
      
      {/* Clean Navbar without top banner */}
      <Navbar 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()} 
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Simple, unburdened Footer */}
      <Footer />

      {/* Global Quote Request Modal */}
      <QuoteModal 
        isOpen={isQuoteOpen} 
        onClose={handleCloseQuoteModal} 
        initialData={modalInitialData}
      />

      {/* Floating Action Buttons (Bottom Right): Phone & WhatsApp */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        <a
          href="tel:+2290195952614"
          aria-label="Appeler le bureau d'études"
          className="w-12 h-12 rounded-full bg-[#0B1528] hover:bg-[#142038] text-white shadow-xl flex items-center justify-center transition-transform hover:scale-110 group relative border border-white/20"
        >
          <Phone className="w-5 h-5 text-orange-400" />
          <span className="hidden group-hover:block absolute right-full mr-3 bg-[#0B1528] text-white text-[11px] font-bold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-xl border border-white/10">
            +229 01 95 95 26 14
          </span>
        </a>

        <a
          href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Bonjour%20MAGOG%20SARL`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discuter sur WhatsApp"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl flex items-center justify-center transition-transform hover:scale-110 group relative"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="hidden group-hover:block absolute right-full mr-3 bg-emerald-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-xl">
            WhatsApp Immédiat
          </span>
        </a>
      </div>

    </div>
  );
}

export default App;
