import type { Locale } from './types';

export interface FloatingCTATranslations {
  contact: string;
  contactLabel: string;
  goToContactPage: string;
}

export const floatingCTA: Record<Locale, FloatingCTATranslations> = {
  es: {
    contact: 'Contactar',
    contactLabel: 'Abrir formulario de contacto',
    goToContactPage: 'Ir a la página de contacto',
  },
  en: {
    contact: 'Contact',
    contactLabel: 'Open contact form',
    goToContactPage: 'Go to contact page',
  },
} as const;

export type FloatingCTAKey = keyof FloatingCTATranslations;
