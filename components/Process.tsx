
import React from 'react';
import { STEPS } from '../constants';

export const Process: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white" id="processo">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-gold font-semibold tracking-widest uppercase text-xs">Jornada do Paciente</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6">Como funciona sua primeira visita</h2>
          <p className="text-gray-500 text-lg">Um processo simples, direto e sem burocracia.</p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-12">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2 hidden md:block -z-10"></div>
          
          {STEPS.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-white p-6 relative">
              <div className="w-16 h-16 bg-premium text-gold rounded-full flex items-center justify-center text-2xl font-serif font-bold mb-8 shadow-xl ring-8 ring-white">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gold/5 p-8 rounded-2xl border border-gold/10 text-center">
          <p className="text-premium font-medium text-lg">
            Importante: A primeira consulta é <strong>completamente gratuita</strong> e sem qualquer compromisso de fechamento. 
            Meu objetivo é apenas diagnosticar e orientar você.
          </p>
        </div>
      </div>
    </section>
  );
};
