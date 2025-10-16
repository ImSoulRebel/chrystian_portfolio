import type { Error404Translations } from './types';

export const error404: Record<'es' | 'en', Error404Translations> = {
  es: {
    title: '404 - Página No Encontrada | Chrystian Michell',
    description:
      'La página que buscas no existe. Vuelve al portfolio de Chrystian Michell.',
    heading: '404',
    subheading: 'Página No Encontrada',
    message: 'La página que buscas no existe o ha sido movida.',
    suggestion: 'Quizás lo que buscas está en alguna de estas páginas:',
    homeButton: 'Volver al Inicio',
    contactButton: 'Contactar',
  },
  en: {
    title: '404 - Page Not Found | Chrystian Michell',
    description:
      "The page you're looking for doesn't exist. Return to Chrystian Michell's portfolio homepage.",
    heading: '404',
    subheading: 'Page Not Found',
    message: "The page you're looking for doesn't exist or has been moved.",
    suggestion: 'Maybe what you are looking for is on one of these pages:',
    homeButton: 'Back to Home',
    contactButton: 'Contact Me',
  },
} as const;
