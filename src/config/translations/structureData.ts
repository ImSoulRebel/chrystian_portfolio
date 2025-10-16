import type { StructuredDataTranslations } from './types';

export const structureData: Record<'es' | 'en', StructuredDataTranslations> = {
  es: {
    person: {
      name: 'Chrystian Michell',
      givenName: 'Chrystian',
      familyName: 'Michell',
      jobTitle: 'Líder Técnico & Arquitecto Flutter',
      description:
        'Líder técnico con más de 5 años construyendo aplicaciones móviles escalables y liderando equipos de desarrollo',
      knowsAbout: [
        'Flutter Development',
        'Dart Programming',
        'Mobile Architecture',
        'Technical Leadership',
        'Clean Architecture',
        'BLoC Pattern',
        'Cross-platform Development',
        'DevOps',
        'Team Management',
        'Code Review',
        'Agile Methodologies',
        'CI/CD Implementation',
      ],
      occupation: {
        name: 'Líder Técnico & Arquitecto Flutter',
        location: 'Remoto / España',
        skills:
          'Flutter, Dart, Technical Leadership, Mobile Architecture, Clean Code, Team Management',
        experienceRequirements: '5+ years',
        responsibilities:
          'Liderar equipos de desarrollo, arquitectura de aplicaciones móviles escalables, revisión de código, mentoría técnica',
      },
      worksFor: {
        name: 'Disponible para Nuevas Oportunidades',
        description:
          'Abierto a roles de Tech Lead, CTO, Desarrollador Senior y Consultoría',
      },
      seeks: {
        name: 'Posición de Liderazgo Técnico',
        description:
          'Buscando roles de Tech Lead, CTO, Desarrollador Senior Flutter, o Consultor Técnico en empresas innovadoras',
      },
    },
    website: {
      name: 'Chrystian Michell - Professional Portfolio',
      description:
        'Portfolio que muestra expertise en Flutter, experiencia en liderazgo técnico y aplicaciones móviles exitosas',
    },
    services: {
      name: 'Servicios de Desarrollo Flutter y Liderazgo Técnico',
      description:
        'Desarrollo profesional de Flutter, diseño de arquitectura móvil, liderazgo técnico y servicios de consultoría',
      serviceType: 'Software Development',
      areaServed: 'Worldwide',
      catalog: {
        name: 'Servicios de Desarrollo',
        offers: [
          {
            name: 'Desarrollo de Apps Flutter',
            description:
              'Desarrollo de aplicaciones móviles multiplataforma usando Flutter',
          },
          {
            name: 'Liderazgo Técnico',
            description:
              'Liderazgo de equipos, diseño de arquitectura y mentoría técnica',
          },
          {
            name: 'Consultoría en Arquitectura Móvil',
            description:
              'Diseño e implementación de arquitectura móvil escalable',
          },
        ],
      },
    },
  },
  en: {
    person: {
      name: 'Chrystian Michell',
      givenName: 'Chrystian',
      familyName: 'Michell',
      jobTitle: 'Tech Lead & Flutter Architect',
      description:
        'Technical leader with over 5 years building scalable mobile applications and leading development teams',
      knowsAbout: [
        'Flutter Development',
        'Dart Programming',
        'Mobile Architecture',
        'Technical Leadership',
        'Clean Architecture',
        'BLoC Pattern',
        'Cross-platform Development',
        'DevOps',
        'Team Management',
        'Code Review',
        'Agile Methodologies',
        'CI/CD Implementation',
      ],
      occupation: {
        name: 'Tech Lead & Flutter Architect',
        location: 'Remote / Spain',
        skills:
          'Flutter, Dart, Technical Leadership, Mobile Architecture, Clean Code, Team Management',
        experienceRequirements: '5+ years',
        responsibilities:
          'Leading development teams, architecting scalable mobile applications, code review, technical mentoring',
      },
      worksFor: {
        name: 'Available for New Opportunities',
        description:
          'Open to Tech Lead, CTO, Senior Developer, and Consulting roles',
      },
      seeks: {
        name: 'Technical Leadership Position',
        description:
          'Seeking Tech Lead, CTO, Senior Flutter Developer, or Technical Consultant roles in innovative companies',
      },
    },
    website: {
      name: 'Chrystian Michell - Professional Portfolio',
      description:
        'Portfolio showcasing Flutter expertise, technical leadership experience, and successful mobile applications',
    },
    services: {
      name: 'Flutter Development & Technical Leadership Services',
      description:
        'Professional Flutter development, mobile architecture design, technical leadership, and consulting services',
      serviceType: 'Software Development',
      areaServed: 'Worldwide',
      catalog: {
        name: 'Development Services',
        offers: [
          {
            name: 'Flutter App Development',
            description:
              'Cross-platform mobile application development using Flutter',
          },
          {
            name: 'Technical Leadership',
            description:
              'Team leadership, architecture design, and technical mentoring',
          },
          {
            name: 'Mobile Architecture Consulting',
            description:
              'Scalable mobile architecture design and implementation',
          },
        ],
      },
    },
  },
} as const;
