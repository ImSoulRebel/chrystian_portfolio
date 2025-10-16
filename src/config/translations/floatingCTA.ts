import type { Locale } from './types';

export interface FloatingCTATranslations {
  contact: string;
  contactLabel: string;
  goToContactPage: string;
}

export const floatingCTA: Record<Locale, FloatingCTATranslations> = {
  es: {
    contact: 'Contactar',
    contactLabel: 'Contactar',
    goToContactPage: 'Ir a la página de contacto',
  },
  en: {
    contact: 'Contact',
    contactLabel: 'Contact',
    goToContactPage: 'Go to contact page',
  },
} as const;

export type FloatingCTAKey = keyof FloatingCTATranslations;