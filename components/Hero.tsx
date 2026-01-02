
import React from 'react';
import { HERO_IMAGE, EXPERT_TAGLINE, WHATSAPP_URL } from '../constants';
import { WhatsAppButton } from './WhatsAppButton';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-premium">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] gold-gradient rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] gold-gradient rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center py-12 md:py-24">
        <div className="order-2 md:order-1 text-center md:text-left">
          <h2 className="text-gold font-medium tracking-widest uppercase text-xs mb-4">Arte, Ciência e Transformação</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6">
            Eu sou <span className="text-gold italic">Maycon Douglas</span>, seu dentista em Natal.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-lg leading-relaxed font-light">
            {EXPERT_TAGLINE} <br />
            Especialista em criar sorrisos harmônicos e naturais que resgatam sua autoconfiança.
          </p>
          
          <div className="flex flex-col items-center md:items-start gap-4">
            <WhatsAppButton size="lg" />
            <p className="text-gray-500 text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Resposta rápida • Sem compromisso
            </p>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center relative">
          <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
             <img 
               src={HERO_IMAGE} 
               alt="Dr. Maycon Douglas" 
               className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-premium/60 to-transparent"></div>
          </div>
          {/* Badge */}
          <div className="absolute -bottom-6 -right-6 md:right-0 bg-white p-4 rounded-xl shadow-xl hidden sm:block">
            <p className="text-premium font-bold text-sm">CRO/RN 4623</p>
            <p className="text-gray-400 text-xs uppercase tracking-tighter">Registro Profissional</p>
          </div>
        </div>
      </div>
    </section>
  );
};
