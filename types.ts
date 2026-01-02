
// Import React to provide access to the React namespace for types like React.ReactNode
import React from 'react';

export interface GalleryItem {
  url: string;
  category: 'dentes' | 'estetica' | 'expert';
  description?: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}