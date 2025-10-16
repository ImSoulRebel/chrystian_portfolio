import type { Locale } from './types';

export interface ProjectsPageTranslations {
  title: string;
  allProjects: string;
  description: string;
  categories: {
    business: string;
    personal: string;
  };
  categoryDescriptions: {
    business: string;
    personal: string;
  };
  subcategories: {
    featured: string;
    otherBusiness: string;
    otherPersonal: string;
  };
  seo: {
    title: string;
    description: string;
  };
}

export const projectsPage: Record<Locale, ProjectsPageTranslations> = {
  es: {
    title: 'Proyectos',
    allProjects: 'Todos los Proyectos',
    description:
      'Una colección de proyectos que demuestran mi experiencia en desarrollo móvil, arquitectura de software y liderazgo técnico.',
    categories: {
      business: 'Proyectos Empresariales B2B',
      personal: 'Proyectos Personales y Open Source',
    },
    categoryDescriptions: {
      business:
        'Soluciones Flutter desarrolladas para empresas, con arquitecturas escalables y alto impacto comercial.',
      personal:
        'Desarrollos propios que demuestran creatividad, experimentación con nuevas tecnologías y pasión por la innovación.',
    },
    subcategories: {
      featured: 'Proyectos Destacados',
      otherBusiness: 'Otros Proyectos Empresariales',
      otherPersonal: 'Otros Proyectos Personales',
    },
    seo: {
      title: 'Proyectos | Chrystian Huancahui - Flutter Senior Architect',
      description:
        'Explore mi portafolio completo de proyectos móviles y web, desde aplicaciones empresariales hasta proyectos personales de código abierto.',
    },
  },
  en: {
    title: 'Projects',
    allProjects: 'All Projects',
    description:
      'A collection of projects that demonstrate my expertise in mobile development, software architecture, and technical leadership.',
    categories: {
      business: 'B2B and Enterprise Projects',
      personal: 'Personal and Open Source Projects',
    },
    categoryDescriptions: {
      business:
        'Flutter solutions developed for enterprises, featuring scalable architectures and high commercial impact.',
      personal:
        'Own developments that showcase creativity, experimentation with new technologies, and passion for innovation.',
    },
    subcategories: {
      featured: 'Featured Projects',
      otherBusiness: 'Other Business Projects',
      otherPersonal: 'Other Personal Projects',
    },
    seo: {
      title: 'Projects | Chrystian Huancahui - Flutter Senior Architect',
      description:
        'Explore my complete portfolio of mobile and web projects, from enterprise applications to personal open-source projects.',
    },
  },
} as const;

export type ProjectsPageKey = keyof ProjectsPageTranslations;
