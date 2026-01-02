
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

interface WhatsAppButtonProps {
  size?: 'md' | 'lg';
  label?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  size = 'md', 
  label = "Agendar minha consulta gratuita" 
}) => {
  const sizeClasses = size === 'lg' 
    ? "px-8 py-5 text-base md:text-lg" 
    : "px-6 py-4 text-sm md:text-base";

  return (
    <a 
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        ${sizeClasses}
        inline-flex items-center gap-3 
        bg-green-600 hover:bg-green-700 
        text-white font-bold rounded-full 
        shadow-xl hover:shadow-green-500/20 
        transition-all duration-300 transform hover:-translate-y-1
        active:scale-95
      `}
    >
      <MessageSquare className={size === 'lg' ? "w-6 h-6" : "w-5 h-5"} />
      {label}
    </a>
  );
};
