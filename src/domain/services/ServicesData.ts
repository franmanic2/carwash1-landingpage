export interface Service {
  id: string;
  title: string;
  priceStart: number;
  icon: string;
  category: 'carwash' | 'taller';
}

export const servicesList: Service[] = [
  // Carwash
  {
    id: 'cw-basic',
    title: 'Lavado Básico',
    priceStart: 15,
    icon: '💧',
    category: 'carwash',
  },
  {
    id: 'cw-premium',
    title: 'Lavado Premium',
    priceStart: 35,
    icon: '✨',
    category: 'carwash',
  },
  {
    id: 'cw-motor',
    title: 'Lavado de Motor',
    priceStart: 25,
    icon: '⚙️',
    category: 'carwash',
  },
  {
    id: 'cw-detail',
    title: 'Detallado Completo',
    priceStart: 80,
    icon: '🏎️',
    category: 'carwash',
  },
  
  // Taller
  {
    id: 'tm-oil',
    title: 'Cambio de Aceite',
    priceStart: 40,
    icon: '🛢️',
    category: 'taller',
  },
  {
    id: 'tm-diag',
    title: 'Diagnóstico Computarizado',
    priceStart: 50,
    icon: '💻',
    category: 'taller',
  },
  {
    id: 'tm-brakes',
    title: 'Revisión y Frenos',
    priceStart: 60,
    icon: '🛑',
    category: 'taller',
  },
  {
    id: 'tm-tuneup',
    title: 'Afinamiento',
    priceStart: 120,
    icon: '🔧',
    category: 'taller',
  },
];
