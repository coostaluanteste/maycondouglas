
import React from 'react';
import { Shield, Sparkles, UserCheck, Heart, Clock, Star } from 'lucide-react';
import { GalleryItem, Benefit, Step } from './types';

export const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5584999453811&text=Ol%C3%A1%20Dr.%20Maycon%2C%20gostaria%20de%20agendar%20minha%20primeira%20consulta%20gratuita.";
export const INSTAGRAM_URL = "https://www.instagram.com/dentistamaycon";
export const MAPS_URL = "https://maps.app.goo.gl/JYz8viJuAH1qs7YUA";

export const EXPERT_NAME = "Maycon Douglas";
export const EXPERT_TAGLINE = "Crio sorrisos que contam histórias ✨";

export const HERO_IMAGE = "https://i.imgur.com/f6oDdxv.png";
export const ABOUT_IMAGE = "https://i.imgur.com/jdqzCVY.png";

export const TEETH_GALLERY: GalleryItem[] = [
  { url: "https://i.imgur.com/kI9V57v.png", category: 'dentes' },
  { url: "https://i.imgur.com/EscyLiT.png", category: 'dentes' },
  { url: "https://i.imgur.com/mRZl2gB.png", category: 'dentes' },
  { url: "https://i.imgur.com/BXua8ep.png", category: 'dentes' },
  { url: "https://i.imgur.com/aoyawXv.png", category: 'dentes' },
  { url: "https://i.imgur.com/LCNjzVJ.png", category: 'dentes' },
  { url: "https://i.imgur.com/X8rDnUI.png", category: 'dentes' },
  { url: "https://i.imgur.com/v6rjci3.png", category: 'dentes' },
  { url: "https://i.imgur.com/EzSlKEt.png", category: 'dentes' },
];

export const AESTHETIC_GALLERY: GalleryItem[] = [
  { url: "https://i.imgur.com/p0Gwdda.png", category: 'estetica' },
  { url: "https://i.imgur.com/ZJQa48t.png", category: 'estetica' },
  { url: "https://i.imgur.com/9FXHSlq.png", category: 'estetica' },
  { url: "https://i.imgur.com/IRVP4NQ.png", category: 'estetica' },
  { url: "https://i.imgur.com/L8EWuyK.png", category: 'estetica' },
  { url: "https://i.imgur.com/C9yhSwA.png", category: 'estetica' },
];

export const BENEFITS: Benefit[] = [
  {
    title: "Atendimento Personalizado",
    description: "Cada sorriso é único. Você será atendido diretamente por mim em todas as etapas.",
    icon: <UserCheck className="w-6 h-6" />
  },
  {
    title: "Tecnologia de Ponta",
    description: "Uso as melhores resinas e técnicas de harmonização para resultados naturais.",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: "Transparência Total",
    description: "Explicação clara de cada procedimento. Sem surpresas, apenas confiança.",
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: "Conforto e Segurança",
    description: "Ambiente planejado para que você se sinta em casa, com o rigor técnico do CRO/RN.",
    icon: <Heart className="w-6 h-6" />
  },
  {
    title: "Foco na Naturalidade",
    description: "Minha missão é realçar sua beleza, sem exageros ou resultados artificiais.",
    icon: <Star className="w-6 h-6" />
  },
  {
    title: "Agilidade",
    description: "Processos otimizados para que você transforme seu sorriso no tempo que precisa.",
    icon: <Clock className="w-6 h-6" />
  }
];

export const STEPS: Step[] = [
  {
    number: "01",
    title: "Contato via WhatsApp",
    description: "Clique em qualquer botão desta página para falar diretamente com minha equipe."
  },
  {
    number: "02",
    title: "Agendamento Simples",
    description: "Escolhemos o melhor horário para sua primeira consulta de avaliação gratuita."
  },
  {
    number: "03",
    title: "Avaliação Completa",
    description: "Irei ouvir seus desejos e criar um plano de tratamento exclusivo para você."
  }
];
