import type { NavTranslations } from './types';

export const nav: Record<'es' | 'en', NavTranslations> = {
  es: {
    home: 'Inicio',
    about: 'Sobre mí',
    skills: 'Habilidades',
    experience: 'Experiencia',
    projects: 'Proyectos',
    contact: 'Contacto',
  },
  en: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
  },
} as const;
