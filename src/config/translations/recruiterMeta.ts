import type { RecruiterMetaTranslations } from './types';

export const recruiterMeta: Record<'es' | 'en', RecruiterMetaTranslations> = {
  es: {
    hiringStatus: 'disponible',
    workAuthorization: 'Ciudadano de la UE',
    salaryExpectation: 'competitivo',
    noticePeriod: 'inmediato a 2 semanas',
    preferredRole: 'Líder Técnico, CTO, Desarrollador Flutter Senior',
    teamSizeManaged: '2-15 desarrolladores',
    yearsExperience: '5+',
    specialization: 'Flutter, Arquitectura Móvil, Liderazgo Técnico',
  },
  en: {
    hiringStatus: 'available',
    workAuthorization: 'EU citizen',
    salaryExpectation: 'competitive',
    noticePeriod: 'immediate to 2 weeks',
    preferredRole: 'Tech Lead, CTO, Senior Flutter Developer',
    teamSizeManaged: '2-15 developers',
    yearsExperience: '5+',
    specialization: 'Flutter, Mobile Architecture, Technical Leadership',
  },
} as const;
