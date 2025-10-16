import type { HeroTranslations } from './types';

export const hero: Record<'es' | 'en', HeroTranslations> = {
  es: {
    greeting: '👋 ¡Hola! Soy',
    name: 'Chrystian Michell',
    title: 'Senior Flutter Developer & Tech Lead',
    description:
      'Líder técnico con más de 5 años construyendo productos digitales que resuelven problemas reales. Especializado en Flutter, he liderado el ciclo completo de más de 10 aplicaciones multiplataforma desplegadas en 11 países en Europa y LATAM, impactando a más de 50,000 usuarios.',
    cta: {
      contact: 'Contáctame',
      projects: 'Ver Proyectos',
    },
  },
  en: {
    greeting: "👋 Hello! I'm",
    name: 'Chrystian Michell',
    title: 'Senior Flutter Developer & Tech Lead',
    description:
      'Technical leader with over 5 years building digital products that solve real problems. Specialized in Flutter, I have led the complete cycle of more than 10 cross-platform applications deployed in 11 countries across Europe and LATAM, impacting over 50,000 users.',
    cta: {
      contact: 'Contact Me',
      projects: 'View Projects',
    },
  },
} as const;
