
import React, { useState } from 'react';
import { TEETH_GALLERY, AESTHETIC_GALLERY } from '../constants';

interface GalleryProps {
  onImageClick: (url: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onImageClick }) => {
  const [filter, setFilter] = useState<'all' | 'dentes' | 'estetica'>('all');

  const allItems = [...TEETH_GALLERY, ...AESTHETIC_GALLERY];
  const displayedItems = filter === 'all' 
    ? allItems 
    : allItems.filter(item => item.category === filter);

  return (
    <section className="py-24 px-6 bg-gray-50" id="resultados">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-gold font-semibold tracking-widest uppercase text-xs">Transformações Reais</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6">Resultados que falam por si</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Veja como a ciência e a arte se encontram para criar novos sorrisos e resgatar a autoestima de nossos pacientes.
          </p>
          
          <div className="flex justify-center gap-4 mt-10">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full text-sm transition-all ${filter === 'all' ? 'bg-premium text-white' : 'bg-white text-gray-500 hover:bg-gray-100'}`}
            >
              Tudo
            </button>
            <button 
              onClick={() => setFilter('dentes')}
              className={`px-6 py-2 rounded-full text-sm transition-all ${filter === 'dentes' ? 'bg-premium text-white' : 'bg-white text-gray-500 hover:bg-gray-100'}`}
            >
              Sorrisos
            </button>
            <button 
              onClick={() => setFilter('estetica')}
              className={`px-6 py-2 rounded-full text-sm transition-all ${filter === 'estetica' ? 'bg-premium text-white' : 'bg-white text-gray-500 hover:bg-gray-100'}`}
            >
              Estética
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {displayedItems.map((item, index) => (
            <div 
              key={index} 
              className="relative aspect-square overflow-hidden rounded-xl bg-gray-200 group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
              onClick={() => onImageClick(item.url)}
            >
              <img 
                src={item.url} 
                alt={`Resultado ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white text-sm font-medium border border-white/40 px-4 py-2 rounded-full backdrop-blur-sm">Ver Detalhes</span>
              </div>
            </div>
          ))}
        </div>
        
        <p className="mt-12 text-center text-xs text-gray-400 max-w-md mx-auto leading-relaxed">
          *Aviso: Os resultados apresentados são de casos reais tratados por mim. No entanto, os resultados podem variar de pessoa para pessoa, conforme as características individuais de cada paciente.
        </p>
      </div>
    </section>
  );
};
