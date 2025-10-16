import type { SEOTranslations } from './types';

export const seo: Record<'es' | 'en', SEOTranslations> = {
  es: {
    title:
      'Chrystian Michell | Líder Técnico & Arquitecto Flutter - Desarrollador Senior Disponible',
    description:
      'Líder Técnico & Arquitecto Flutter especializado en desarrollo multiplataforma. Más de 5 años de experiencia, 10+ apps en producción en 11 países. Disponible para roles de liderazgo técnico, CTO, Tech Lead y proyectos de consultoría empresarial.',
    keywords:
      'Flutter Developer, Dart Expert, Tech Lead, CTO, Arquitecto Software, Senior Developer, Clean Architecture, BLoC Pattern, Desarrollo Multiplataforma, Apps Móviles, Smart TV, OTT Platform, Liderazgo Técnico, Consultoría Tecnológica, Remote Work, Hiring, Available for Hire, Head Hunter, Technical Recruitment',
  },
  en: {
    title:
      'Chrystian Michell | Tech Lead & Flutter Architect - Senior Developer Available',
    description:
      'Tech Lead & Flutter Architect specialized in cross-platform development. Over 5 years of experience, 10+ production apps in 11 countries. Available for technical leadership roles, CTO, Tech Lead and enterprise consulting projects.',
    keywords:
      'Flutter Developer, Dart Expert, Tech Lead, CTO, Software Architect, Senior Developer, Clean Architecture, BLoC Pattern, Cross-platform Development, Mobile Apps, Smart TV, OTT Platform, Technical Leadership, Technology Consulting, Remote Work, Hiring, Available for Hire, Head Hunter, Technical Recruitment',
  },
} as const;
