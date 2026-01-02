
import React from 'react';
import { ABOUT_IMAGE } from '../constants';

export const About: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden" id="sobre">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gray-50 rounded-full -z-10"></div>
            <img 
              src={ABOUT_IMAGE} 
              alt="Maycon Douglas em atendimento" 
              className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 border-2 border-gold/20 rounded-3xl -z-10"></div>
          </div>

          <div>
            <span className="text-gold font-semibold tracking-widest uppercase text-xs">Propósito & Missão</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-8">Não é apenas sobre dentes, é sobre a sua história.</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
              <p>
                Olá, eu sou o Maycon. No meu consultório, não acredito em sorrisos "fabricados" ou tratamentos padronizados. Acredito que cada pessoa carrega uma identidade única, e meu trabalho é harmonizar o seu sorriso com quem você realmente é.
              </p>
              <p>
                Com foco em <strong>Facetas de Resina</strong> e <strong>Harmonização Facial</strong>, uno o rigor da ciência com o olhar minucioso da arte. Meu objetivo é que você se olhe no espelho e veja a sua melhor versão, de forma natural e elegante.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-gray-100">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                  <span className="text-premium font-medium">Facetas de Resina</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                  <span className="text-premium font-medium">Harmonização Facial</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                  <span className="text-premium font-medium">Clínica Geral Premium</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                  <span className="text-premium font-medium">Avaliação Estética</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
