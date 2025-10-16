import type { SkillsTranslations } from './types';

export const skills: Record<'es' | 'en', SkillsTranslations> = {
  es: {
    title: 'Habilidades Técnicas',
    indicatorText: 'Arrastra para navegar',
    categories: {
      frontend: 'Desarrollo Frontend',
      backend: 'Desarrollo Backend',
      mobile: 'Desarrollo Móvil',
      devops: 'DevOps & Cloud',
      leadership: 'Liderazgo Técnico',
      tools: 'Herramientas & Metodologías',
    },
  },
  en: {
    title: 'Technical Skills',
    indicatorText: 'Drag to navigate',
    categories: {
      frontend: 'Frontend Development',
      backend: 'Backend Development',
      mobile: 'Mobile Development',
      devops: 'DevOps & Cloud',
      leadership: 'Technical Leadership',
      tools: 'Tools & Methodologies',
    },
  },
} as const;
