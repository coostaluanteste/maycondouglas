
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Trust } from './components/Trust';
import { Process } from './components/Process';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { WHATSAPP_URL } from './constants';

function App() {
  const [showLightbox, setShowLightbox] = useState<string | null>(null);

  // Simple Lightbox closer on ESC
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setShowLightbox(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="min-h-screen selection:bg-yellow-200 selection:text-black">
      {/* Fixed Sticky Header for CTA Awareness */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-3 px-6 flex justify-between items-center md:hidden">
        <span className="font-serif font-bold text-lg">Maycon Douglas</span>
        <a 
          href={WHATSAPP_URL} 
          className="bg-green-500 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
        >
          Agendar Agora
        </a>
      </header>

      <main className="pt-14 md:pt-0">
        <Hero />
        <About />
        <Gallery onImageClick={(url) => setShowLightbox(url)} />
        <Trust />
        
        {/* Intermediate CTA */}
        <section className="bg-premium py-20 px-6 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 italic">A sua transformação começa com uma conversa honesta.</h2>
            <p className="text-gray-400 mb-10 text-lg">Sem pressa, sem pressão. Apenas você e eu definindo o futuro do seu sorriso.</p>
            <WhatsAppButton />
            <p className="mt-4 text-xs text-gray-500">Resposta em poucos minutos • Consulta 100% gratuita</p>
          </div>
        </section>

        <Process />
        
        <section className="bg-gray-50 py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-serif mb-8">Decida hoje pelo sorriso que você sempre sonhou.</h2>
            <p className="text-gray-600 mb-12 text-lg">Não deixe para amanhã a confiança que você pode começar a recuperar agora.</p>
            <WhatsAppButton size="lg" />
            <p className="mt-4 text-sm text-gray-400 italic">Vagas limitadas para este mês.</p>
          </div>
        </section>

        <Footer />
      </main>

      {/* Lightbox Overlay */}
      {showLightbox && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setShowLightbox(null)}
        >
          <img 
            src={showLightbox} 
            alt="Resultado" 
            className="max-w-full max-h-full rounded-lg shadow-2xl transition-transform duration-300 transform scale-100" 
          />
          <button 
            className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full hover:bg-white/20"
            onClick={() => setShowLightbox(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
