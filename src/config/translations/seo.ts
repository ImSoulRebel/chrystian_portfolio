import type { SEOTranslations } from './types';

export const seo: Record<'es' | 'en', SEOTranslations> = {
  es: {
    title:
      'Chrystian Michell | Senior Flutter Engineer & Arquitecto de Software - Tech Lead Disponible',
    description:
      'Senior Flutter Engineer especializado en arquitectura limpia, optimización de rendimiento y diseño pixel-perfect. Más de 5 años de experiencia liderando equipos técnicos, 10+ apps multiplataforma en producción desplegadas en 11 países (iOS, Android, Web, SmartTV). Especialista en plataformas OTT, navegación espacial y DevOps con Docker y GitHub Actions.',
    keywords:
      'Senior Flutter Engineer, Dart, Arquitecto de Software, Tech Lead, Clean Architecture, BLoC Pattern, Optimización de Rendimiento, Pixel-Perfect, Smart TV, OTT Platform, DevOps, Docker, GitHub Actions, Firebase, AWS, WebSockets, auto_route, get_it, Video.js, Navegación Espacial, Liderazgo Técnico, Available for Hire',
  },
  en: {
    title:
      'Chrystian Michell | Senior Flutter Engineer & Software Architect - Tech Lead Available',
    description:
      'Senior Flutter Engineer specialized in clean architecture, performance optimization, and pixel-perfect design. Over 5 years of experience leading technical teams, 10+ cross-platform production apps deployed in 11 countries (iOS, Android, Web, SmartTV). Specialist in OTT platforms, spatial navigation, and DevOps with Docker and GitHub Actions.',
    keywords:
      'Senior Flutter Engineer, Dart, Software Architect, Tech Lead, Clean Architecture, BLoC Pattern, Performance Optimization, Pixel-Perfect, Smart TV, OTT Platform, DevOps, Docker, GitHub Actions, Firebase, AWS, WebSockets, auto_route, get_it, Video.js, Spatial Navigation, Technical Leadership, Available for Hire',
  },
} as const;
