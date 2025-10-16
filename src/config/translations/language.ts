import type { LanguageTranslations } from './types';

export const language: Record<'es' | 'en', LanguageTranslations> = {
  es: {
    switchTo: 'Cambiar a',
    spanish: 'Español',
    english: 'English',
  },
  en: {
    switchTo: 'Switch to',
    spanish: 'Español',
    english: 'English',
  },
} as const;
