import type { ExperienceTranslations } from './types';

export const experience: Record<'es' | 'en', ExperienceTranslations> = {
  es: {
    title: 'Experiencia Profesional',
    current: 'Actual',
    months: 'meses',
    years: 'años',
    list: {
      yuvod: {
        title: 'Líder Técnico & Arquitecto Flutter',
        company: 'YUVOD',
        period: 'Enero 2023 – Enero 2025',
        location: 'Remoto desde Madrid para empresa en Valencia, España',
        description:
          'Lideré la estrategia técnica de una plataforma OTT (streaming de contenidos) para el sector hotelero desplegada en más de 30 hoteles en Europa y LATAM. Gestioné equipos multidisciplinares de hasta 9 personas, implementé arquitecturas escalables con Clean Architecture y BLoC, y establecí pipelines CI/CD que redujeron el tiempo de despliegue en 40%. Logré mejoras de rendimiento del 60% en Smart TVs de gama baja.',
        skills: [
          'Flutter',
          'Dart',
          'BLoC',
          'Clean Architecture',
          'Video.js',
          'Firebase',
          'Docker',
          'AWS',
          'GitHub Actions',
          'WebSockets',
        ],
      },
      nextival: {
        title: 'Arquitecto Frontend & Desarrollador Full Stack',
        company: 'NEXTIVAL (Proyecto Pro Bono)',
        period: 'Febrero 2025 – Junio 2025',
        location: 'Remoto',
        description:
          'Durante período entre roles, lideré arquitectura y desarrollo frontend de gestor de contenidos para festivales de música. Definí arquitectura frontend completa utilizando Astro con SolidJS para renderizado híbrido (SSR/SSG), optimizando SEO y rendimiento con tiempos de carga inferiores a 1.5 segundos. Proyecto completado y entregado para uso en producción.',
        skills: [
          'Astro',
          'SolidJS',
          'TypeScript',
          'TailwindCSS',
          'Node.js',
          'WebSockets',
          'JWT',
          'Spotify API',
        ],
      },
      optimus: {
        title: 'Desarrollador Flutter Senior',
        company: 'OPTIMUS APPS LAB (Freelance)',
        period: 'Abril 2021 – Diciembre 2022',
        location: 'Híbrido, Madrid, España',
        description:
          'Desarrollé soluciones móviles end-to-end para clientes B2B en neobanca, logística y turismo. Entregué más de 5 aplicaciones Flutter para iOS, Android y Web, logrando reducción del 35% en tiempo de comercialización mediante arquitecturas estandarizadas. Gestioné relación directa con clientes, traduciendo necesidades de negocio en requisitos técnicos.',
        skills: [
          'Flutter',
          'GetX',
          'Riverpod',
          'BLoC',
          'Firebase',
          'Supabase',
          'REST APIs',
          'Biometric Auth',
        ],
      },
      retail: {
        title: 'Especialista en Producto y Tecnología – Retail',
        company: 'World Duty Free Group, Fnac, Worten, Carrefour',
        period: 'Mayo 2008 – Febrero 2021',
        location: 'Madrid, España',
        description:
          '13 años en primera línea de retail tecnológico, desarrollando perspectiva única sobre interacción usuario-tecnología. Progresión desde especialista de producto hasta roles de mayor responsabilidad, gestionando equipos y formando a nuevos miembros. Esta experiencia fundamenta mi enfoque actual en desarrollo de producto centrado en el cliente.',
        skills: [
          'Gestión de Equipos',
          'Formación',
          'Atención al Cliente',
          'Ventas Consultivas',
          'Análisis de Producto',
        ],
      },
    },
  },
  en: {
    title: 'Professional Experience',
    current: 'Current',
    months: 'months',
    years: 'years',
    list: {
      yuvod: {
        title: 'Tech Lead & Flutter Architect',
        company: 'YUVOD',
        period: 'January 2023 – January 2025',
        location: 'Remote from Madrid for company in Valencia, Spain',
        description:
          'Led technical strategy for an OTT platform (content streaming) for the hotel sector deployed in over 30 hotels across Europe and LATAM. Managed multidisciplinary teams of up to 9 people, implemented scalable architectures with Clean Architecture and BLoC, and established CI/CD pipelines that reduced deployment time by 40%. Achieved 60% performance improvements on low-end Smart TVs.',
        skills: [
          'Flutter',
          'Dart',
          'BLoC',
          'Clean Architecture',
          'Video.js',
          'Firebase',
          'Docker',
          'AWS',
          'GitHub Actions',
          'WebSockets',
        ],
      },
      nextival: {
        title: 'Frontend Architect & Full Stack Developer',
        company: 'NEXTIVAL (Pro Bono Project)',
        period: 'February 2025 – June 2025',
        location: 'Remote',
        description:
          'During gap between roles, led architecture and frontend development of content management system for music festivals. Defined complete frontend architecture using Astro with SolidJS for hybrid rendering (SSR/SSG), optimizing SEO and performance with load times under 1.5 seconds. Project completed and delivered for production use.',
        skills: [
          'Astro',
          'SolidJS',
          'TypeScript',
          'TailwindCSS',
          'Node.js',
          'WebSockets',
          'JWT',
          'Spotify API',
        ],
      },
      optimus: {
        title: 'Senior Flutter Developer',
        company: 'OPTIMUS APPS LAB (Freelance)',
        period: 'April 2021 – December 2022',
        location: 'Hybrid, Madrid, Spain',
        description:
          'Developed end-to-end mobile solutions for B2B clients in neobanking, logistics, and tourism. Delivered over 5 Flutter applications for iOS, Android, and Web, achieving 35% reduction in time-to-market through standardized architectures. Managed direct client relationships, translating business needs into technical requirements.',
        skills: [
          'Flutter',
          'GetX',
          'Riverpod',
          'BLoC',
          'Firebase',
          'Supabase',
          'REST APIs',
          'Biometric Auth',
        ],
      },
      retail: {
        title: 'Product & Technology Specialist – Retail',
        company: 'World Duty Free Group, Fnac, Worten, Carrefour',
        period: 'May 2008 – February 2021',
        location: 'Madrid, Spain',
        description:
          '13 years on the front lines of technology retail, developing unique perspective on user-technology interaction. Progression from product specialist to higher responsibility roles, managing teams and training new members. This experience underpins my current approach to customer-centric product development.',
        skills: [
          'Team Management',
          'Training',
          'Customer Service',
          'Consultative Sales',
          'Product Analysis',
        ],
      },
    },
  },
} as const;
