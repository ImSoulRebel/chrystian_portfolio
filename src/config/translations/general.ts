import type { GeneralTranslations } from './types';

export const general: Record<'es' | 'en', GeneralTranslations> = {
  es: {
    welcome: 'Bienvenido a mi portfolio',
    and: 'y',
  },
  en: {
    welcome: 'Welcome to my portfolio',
    and: 'and',
  },
} as const;
