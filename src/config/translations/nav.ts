import type { NavTranslations } from './types';

export const nav: Record<'es' | 'en', NavTranslations> = {
  es: {
    home: 'Inicio',
    about: 'Sobre mí',
    skills: 'Habilidades',
    experience: 'Experiencia',
    projects: 'Proyectos',
    contact: 'Contacto',
    backToHome: 'Volver al Inicio',
    backToHomeLabel: 'Volver al inicio',
  },
  en: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
    backToHome: 'Back to Home',
    backToHomeLabel: 'Back to home',
  },
} as const;
