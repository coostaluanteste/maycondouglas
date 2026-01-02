
import React from 'react';
import { BENEFITS } from '../constants';

export const Trust: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white" id="confianca">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <span className="text-gold font-semibold tracking-widest uppercase text-xs">Diferenciais</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6">Por que confiar o seu sorriso a mim?</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            O consultório não é apenas um lugar de tratamento, mas um espaço de acolhimento e excelência técnica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, index) => (
            <div key={index} className="p-8 rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all duration-300 bg-gray-50/30">
              <div className="w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center mb-6 text-gold">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
