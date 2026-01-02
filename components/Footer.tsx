
import React from 'react';
import { Instagram, MapPin, Phone } from 'lucide-react';
import { EXPERT_NAME, INSTAGRAM_URL, MAPS_URL, WHATSAPP_URL } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-premium text-white py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 border-b border-white/5 pb-12">
          <div>
            <h3 className="font-serif text-2xl mb-6">{EXPERT_NAME}</h3>
            <p className="text-gray-400 font-light leading-relaxed max-w-xs mb-8">
              Transformando vidas através da odontologia estética e facial em Natal/RN.
            </p>
            <div className="flex gap-4">
              <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-full hover:bg-gold hover:text-premium transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gold font-semibold uppercase tracking-widest text-xs mb-6">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a href={WHATSAPP_URL} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <Phone size={18} className="text-gold" />
                  <span>(84) 99945-3811</span>
                </a>
              </li>
              <li>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                  <MapPin size={18} className="text-gold mt-1 flex-shrink-0" />
                  <span>Natal, RN (Clique para ver no mapa)</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-semibold uppercase tracking-widest text-xs mb-6">Legal</h4>
            <p className="text-gray-400 text-sm mb-2">Maycon Douglas</p>
            <p className="text-gray-500 text-xs">Cirurgião Dentista - CRO/RN 4623</p>
            <p className="text-gray-500 text-xs mt-4">© {new Date().getFullYear()} - Todos os direitos reservados.</p>
          </div>
        </div>
        
        <div className="pt-8 text-center text-gray-600 text-xs">
          Desenvolvido com excelência para resultados extraordinários.
        </div>
      </div>
    </footer>
  );
};
