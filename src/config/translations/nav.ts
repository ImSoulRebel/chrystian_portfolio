import type { NavTranslations } from './types';

export const nav: Record<'es' | 'en', NavTranslations> = {
  es: {
    home: 'Inicio',
    about: 'Sobre mí',
    skills: 'Habilidades',
    experience: 'Experiencia',
    projects: 'Proyectos',
    contact: 'Contacto',
    back: 'Volver al Inicio',
    backLabel: 'Volver al inicio',
  },
  en: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
    back: 'Back to Home',
    backLabel: 'Back to home',
  },
} as const;
