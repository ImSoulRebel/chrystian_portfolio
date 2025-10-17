import type { StructuredDataTranslations } from './types';

export const structureData: Record<'es' | 'en', StructuredDataTranslations> = {
  es: {
    person: {
      name: 'Chrystian Michell',
      givenName: 'Chrystian',
      familyName: 'Michell',
      jobTitle: 'Senior Flutter Engineer & Arquitecto de Software · Tech Lead',
      description:
        'Senior Flutter Engineer especializado en arquitectura limpia, optimización de rendimiento y diseño pixel-perfect. Líder técnico con experiencia en proyectos multiplataforma y gestión del ciclo de vida completo de productos.',
      knowsAbout: [
        'Flutter Development',
        'Dart Programming',
        'Clean Architecture',
        'Performance Optimization',
        'Pixel-Perfect Design',
        'BLoC Pattern',
        'Cross-platform Development',
        'Smart TV Development',
        'OTT Platforms',
        'Spatial Navigation',
        'DevOps',
        'Docker',
        'GitHub Actions',
        'Firebase',
        'AWS',
        'WebSockets',
        'auto_route',
        'get_it',
        'Video.js',
        'Technical Leadership',
        'Team Management',
        'Full-Stack Web Development',
      ],
      occupation: {
        name: 'Senior Flutter Engineer & Arquitecto de Software · Tech Lead',
        location: 'Remoto / España',
        skills:
          'Flutter, Dart, Clean Architecture, Performance Optimization, Pixel-Perfect Design, Technical Leadership, Smart TV, OTT Platforms, DevOps, Docker, GitHub Actions',
        experienceRequirements: '5+ years',
        responsibilities:
          'Liderar equipos técnicos, arquitectura limpia, optimización de rendimiento, diseño pixel-perfect, gestión del ciclo de vida completo de productos, DevOps y CI/CD',
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
      jobTitle: 'Senior Flutter Engineer & Software Architect · Tech Lead',
      description:
        'Senior Flutter Engineer specialized in clean architecture, performance optimization, and pixel-perfect design. Technical leader with experience in cross-platform projects and complete product lifecycle management.',
      knowsAbout: [
        'Flutter Development',
        'Dart Programming',
        'Clean Architecture',
        'Performance Optimization',
        'Pixel-Perfect Design',
        'BLoC Pattern',
        'Cross-platform Development',
        'Smart TV Development',
        'OTT Platforms',
        'Spatial Navigation',
        'DevOps',
        'Docker',
        'GitHub Actions',
        'Firebase',
        'AWS',
        'WebSockets',
        'auto_route',
        'get_it',
        'Video.js',
        'Technical Leadership',
        'Team Management',
        'Full-Stack Web Development',
      ],
      occupation: {
        name: 'Senior Flutter Engineer & Software Architect · Tech Lead',
        location: 'Remote / Spain',
        skills:
          'Flutter, Dart, Clean Architecture, Performance Optimization, Pixel-Perfect Design, Technical Leadership, Smart TV, OTT Platforms, DevOps, Docker, GitHub Actions',
        experienceRequirements: '5+ years',
        responsibilities:
          'Leading technical teams, clean architecture, performance optimization, pixel-perfect design, complete product lifecycle management, DevOps and CI/CD',
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
