import type { ProjectsTranslations } from './types';

export const projects: Record<'es' | 'en', ProjectsTranslations> = {
  es: {
    title: 'Proyectos Destacados',
    subtitle:
      'Los 3 proyectos más destacados que demuestran experiencia en arquitectura Flutter avanzada, liderazgo técnico y soluciones escalables.',
    viewDemo: 'Ver Demo',
    viewCode: 'Ver Código',
    viewMore: 'Ver Más Proyectos',
    readMore: 'Leer más',
    featured: 'Destacado',
    stats: {
      inProduction: 'Producción',
      featuredProject: 'Destacado',
      codeAvailable: 'Código Disponible',
      underNDA: 'Bajo NDA',
    },
    badges: {
      nda: 'Confidencial',
      confidential: 'Bajo NDA',
    },
    actions: {
      visitWebsite: 'Visitar sitio web',
      visitWebsiteLabel: 'Visitar sitio web del proyecto',
      viewGithub: 'Ver código en GitHub',
      viewGithubLabel: 'Ver código en GitHub',
      requestCaseStudy: 'Solicitar case study completo',
      requestCaseStudyLabel: 'Solicitar acceso al case study completo bajo NDA',
      contactForDetails: 'Solicitar detalles',
      contactForDetailsLabel: 'Contactar para acceder a detalles completos',
    },
    metadata: {
      duration: 'Duración',
      role: 'Rol',
      team: 'Equipo',
      sector: 'Sector',
      impact: 'Impacto',
    },
    seo: {
      title: 'Proyectos | Chrystian Michell - Portfolio de Desarrollo Flutter',
      description:
        'Explora los proyectos destacados de Chrystian Michell: aplicaciones Flutter multiplataforma, plataformas OTT, Smart TV apps y soluciones móviles innovadoras desplegadas en múltiples países.',
    },
    list: {
      yuvod: {
        title: 'Plataforma OTT para Hoteles',
        sector: 'Streaming & Hospitalidad',
        role: 'Lead Flutter Developer & Arquitecto',
        duration: '6 meses (2023-2024)',
        team: '4 desarrolladores',
        stack:
          'Flutter · BLoC · auto_route · get_it · Video.js · Docker · GitHub Actions · WebSockets',
        description:
          'Plataforma de streaming multiplataforma para SmartTVs, móviles y web con arquitectura multientrada y selección dinámica de UI. Navegación espacial avanzada con NavigationHandlerBloc, soporte para menús anidados, grids y carouseles. Reproductor modular con DRM, subtítulos dinámicos, autenticación por token y pantalla completa. DevOps con RPS en pubspec.yaml, Docker Compose y Git Hooks en Dart.',
        impact:
          'Desplegada en +30 hoteles en Europa y LATAM. Experiencia fluida en SmartTV, despliegues confiables y arquitectura extensible.',
        metrics: [
          { label: 'Hoteles activos', value: '+30' },
          { label: 'Mejora satisfacción', value: '35%' },
          { label: 'Uptime', value: '99.9%' },
        ],
      },
      nextival: {
        title: 'Nextival CMS – Gestión de Festivales',
        sector: 'Música & Eventos',
        role: 'Full Stack Developer',
        duration: '4 meses (2024)',
        stack:
          'Astro · SolidJS · TypeScript · TailwindCSS · WebSockets · JWT · Spotify API',
        description:
          'Sistema de gestión de contenido para festivales musicales con Clean Architecture y Repository Pattern. API RESTful con Server Actions y middleware JWT. Integración con Spotify Web API y Geocoding API. Editor WYSIWYG (Quill.js) para gestión avanzada de artistas y escenarios. WebSockets para notificaciones y mensajería en tiempo real.',
        impact:
          'Entregado en 4 meses como proyecto funcional para producción con optimización SEO completa.',
        metrics: [
          { label: 'Tiempo de carga', value: '<1.5s' },
          { label: 'SEO Score', value: '100/100' },
          { label: 'Tiempo desarrollo', value: '4 meses' },
        ],
      },
      tookane: {
        title: 'App Multipropósito SaaS',
        sector: 'SaaS Multipropósito',
        role: 'Lead Flutter Developer',
        duration: '7 meses (2022-2023)',
        stack:
          'Flutter · Provider · Riverpod · BLoC · Firebase · Hive · SharedPreferences',
        description:
          'Aplicación multipropósito con Clean Architecture + MVVM + Repository Pattern. Autenticación multiplataforma (correo, Google, Facebook), gestión de usuarios y perfiles, consumo de APIs externas y visualización de datos. Notificaciones push, soporte offline-first con Hive/SharedPreferences, internacionalización multiidioma, animaciones y transiciones personalizadas. CI/CD para despliegues automatizados.',
        impact:
          'Buenas prácticas con linter, análisis estático y pruebas. Mejora significativa en eficiencia mediante optimización basada en datos.',
        metrics: [
          { label: 'Mejora eficiencia', value: '30%' },
          { label: 'Cobertura tests', value: '85%' },
          { label: 'Plataformas', value: 'iOS/Android/Web' },
        ],
      },
      portfolio: {
        title: 'Portfolio Personal – Chrystian Michell',
        sector: 'Personal Branding',
        role: 'Developer & Designer',
        duration: '2 meses (2024)',
        stack:
          'Astro · TypeScript · CSS Modules · GitHub Actions · Netlify · PWA',
        description:
          'Portfolio personal moderno y responsive desarrollado con Astro para renderizado estático optimizado. Arquitectura modular con TypeScript, sistema de traducciones i18n, SEO avanzado con structured data, PWA con manifest y service worker. Optimización de performance con lazy loading, code splitting y compresión de assets. Deployment automatizado con GitHub Actions.',
        impact:
          'SEO optimizado para posicionamiento profesional con internacionalización completa ES/EN.',
        metrics: [
          { label: 'Lighthouse', value: '100/100' },
          { label: 'Tiempo de carga', value: '<1s' },
          { label: 'Idiomas', value: 'ES/EN' },
        ],
      },
      stelcamping: {
        title: 'Sistema de Gestión de Campings',
        sector: 'Turismo & Gestión',
        role: 'Flutter Developer',
        duration: '5 meses (2022)',
        stack:
          'Flutter · Firebase · GetX/BLoC · dio · StringLocalizations · REST APIs',
        description:
          'Aplicación integral para gestión de campings con clase base BaseState<T> para centralizar diálogos, localización, foco y utilidades de UI. Sistema de registro, autenticación, reservas, calendario de actividades, notificaciones y perfil. Integración con APIs REST (auth, reservas, actividades, notificaciones, perfil). Arquitectura modular con separación clara entre presentación, lógica de negocio y datos.',
        impact:
          'Automatización de procesos que reducen costes operativos significativamente. Alta reutilización de código y consistencia en UX.',
        metrics: [
          { label: 'Usuarios activos', value: '+1,000' },
          { label: 'Reducción costes', value: '40%' },
          { label: 'Procesos automatizados', value: '100%' },
        ],
      },
      bnc10: {
        title: 'Neobanco Frontend',
        sector: 'FinTech B2B',
        role: 'Senior Flutter Architect',
        duration: '8 meses (2023)',
        team: 'Lead Developer',
        stack:
          'Flutter · GetX · Firebase · GetStorage · responsive_framework · Sentry',
        description:
          'Frontend de neobanco con responsive avanzado usando responsive_framework. Theming diferenciado para web y móvil. Monitoreo de errores en producción con Sentry. Modularización en core, resources, routing y commons. Buenas prácticas de UI/UX: orientación fija, control de escala, transiciones animadas. Seguridad bancaria con autenticación biométrica y storage encriptado.',
        impact:
          'Experiencia fluida cross-platform con reducción significativa en fricción de autenticación y alta estabilidad en producción.',
        metrics: [
          { label: 'Usuarios activos', value: '500+' },
          { label: 'Rating', value: '4.7⭐' },
          { label: 'Sesiones sin crashes', value: '99.5%' },
        ],
      },
    },
  },
  en: {
    title: 'Featured Projects',
    subtitle:
      'Top 3 standout projects showcasing advanced Flutter architecture, technical leadership, and scalable solutions.',
    viewDemo: 'View Demo',
    viewCode: 'View Code',
    viewMore: 'View More Projects',
    readMore: 'Read more',
    featured: 'Featured',
    stats: {
      inProduction: 'Production',
      featuredProject: 'Featured',
      codeAvailable: 'Code Available',
      underNDA: 'Under NDA',
    },
    badges: {
      nda: 'Confidential',
      confidential: 'Under NDA',
    },
    actions: {
      visitWebsite: 'Visit website',
      visitWebsiteLabel: 'Visit project website',
      viewGithub: 'View code on GitHub',
      viewGithubLabel: 'View code on GitHub',
      requestCaseStudy: 'Request full case study',
      requestCaseStudyLabel: 'Request access to full case study under NDA',
      contactForDetails: 'Request details',
      contactForDetailsLabel: 'Contact to access full details',
    },
    metadata: {
      duration: 'Duration',
      role: 'Role',
      team: 'Team',
      sector: 'Sector',
      impact: 'Impact',
    },
    seo: {
      title: 'Projects | Chrystian Michell - Flutter Development Portfolio',
      description:
        "Explore Chrystian Michell's featured projects: cross-platform Flutter applications, OTT platforms, Smart TV apps, and innovative mobile solutions deployed across multiple countries.",
    },
    list: {
      yuvod: {
        title: 'OTT Platform for Hotels',
        sector: 'Streaming & Hospitality',
        role: 'Lead Flutter Developer & Architect',
        duration: '6 months (2023-2024)',
        team: '4 developers',
        stack:
          'Flutter · BLoC · auto_route · get_it · Video.js · Docker · GitHub Actions · WebSockets',
        description:
          'Cross-platform streaming platform for SmartTVs, mobile, and web with multi-entry architecture and dynamic UI selection. Advanced spatial navigation with NavigationHandlerBloc, support for nested menus, grids, and carousels. Modular player with DRM, dynamic subtitles, token authentication, and fullscreen. DevOps with RPS in pubspec.yaml, Docker Compose, and Git Hooks in Dart.',
        impact:
          'Deployed in +30 hotels across Europe and LATAM. Smooth SmartTV experience, reliable deployments, and extensible architecture.',
        metrics: [
          { label: 'Active hotels', value: '+30' },
          { label: 'Satisfaction improvement', value: '35%' },
          { label: 'Uptime', value: '99.9%' },
        ],
      },
      nextival: {
        title: 'Nextival CMS – Festival Management',
        sector: 'Music & Events',
        role: 'Full Stack Developer',
        duration: '4 months (2024)',
        stack:
          'Astro · SolidJS · TypeScript · TailwindCSS · WebSockets · JWT · Spotify API',
        description:
          'Content management system for music festivals with Clean Architecture and Repository Pattern. RESTful API with Server Actions and JWT middleware. Integration with Spotify Web API and Geocoding API. WYSIWYG editor (Quill.js) for advanced artist and stage management. WebSockets for real-time notifications and messaging.',
        impact:
          'Delivered in 4 months as a production-ready project with complete SEO optimization.',
        metrics: [
          { label: 'Load time', value: '<1.5s' },
          { label: 'SEO Score', value: '100/100' },
          { label: 'Development time', value: '4 months' },
        ],
      },
      stelcamping: {
        title: 'Camping Management System',
        sector: 'Tourism & Management',
        role: 'Flutter Developer',
        duration: '5 months (2022)',
        stack:
          'Flutter · Firebase · GetX/BLoC · dio · StringLocalizations · REST APIs',
        description:
          'Comprehensive camping management application with BaseState<T> base class to centralize dialogs, localization, focus, and UI utilities. Registration, authentication, reservations, activities calendar, notifications, and profile system. Integration with REST APIs (auth, reservations, activities, notifications, profile). Modular architecture with clear separation between presentation, business logic, and data layers.',
        impact:
          'Process automation that significantly reduces operational costs. High code reusability and UX consistency.',
        metrics: [
          { label: 'Active users', value: '+1,000' },
          { label: 'Cost reduction', value: '40%' },
          { label: 'Automated processes', value: '100%' },
        ],
      },
      bnc10: {
        title: 'Neobanking Frontend',
        sector: 'FinTech B2B',
        role: 'Senior Flutter Architect',
        duration: '8 months (2023)',
        team: 'Lead Developer',
        stack:
          'Flutter · GetX · Firebase · GetStorage · responsive_framework · Sentry',
        description:
          'Neobanking frontend with advanced responsive design using responsive_framework. Differentiated theming for web and mobile. Production error monitoring with Sentry. Modularization in core, resources, routing, and commons. UI/UX best practices: fixed orientation, scale control, animated transitions. Banking security with biometric authentication and encrypted storage.',
        impact:
          'Smooth cross-platform experience with significant reduction in authentication friction and high production stability.',
        metrics: [
          { label: 'Active users', value: '500+' },
          { label: 'Rating', value: '4.7⭐' },
          { label: 'Crash-free sessions', value: '99.5%' },
        ],
      },
      tookane: {
        title: 'Multipurpose SaaS App',
        sector: 'Multipurpose SaaS',
        role: 'Lead Flutter Developer',
        duration: '7 months (2022-2023)',
        stack:
          'Flutter · Provider · Riverpod · BLoC · Firebase · Hive · SharedPreferences',
        description:
          'Multipurpose application with Clean Architecture + MVVM + Repository Pattern. Cross-platform authentication (email, Google, Facebook), user and profile management, external API consumption and data visualization. Push notifications, offline-first support with Hive/SharedPreferences, multi-language internationalization, custom animations and transitions. CI/CD for automated deployments.',
        impact:
          'Best practices with linter, static analysis and testing. Significant efficiency improvement through data-driven optimization.',
        metrics: [
          { label: 'Efficiency improvement', value: '30%' },
          { label: 'Test coverage', value: '85%' },
          { label: 'Platforms', value: 'iOS/Android/Web' },
        ],
      },
      portfolio: {
        title: 'Personal Portfolio – Chrystian Michell',
        sector: 'Personal Branding',
        role: 'Developer & Designer',
        duration: '2 months (2024)',
        stack:
          'Astro · TypeScript · CSS Modules · GitHub Actions · Netlify · PWA',
        description:
          'Modern and responsive personal portfolio developed with Astro for optimized static rendering. Modular architecture with TypeScript, i18n translation system, advanced SEO with structured data, PWA with manifest and service worker. Performance optimization with lazy loading, code splitting, and asset compression. Automated deployment with GitHub Actions.',
        impact:
          'SEO optimized for professional positioning with complete ES/EN internationalization.',
        metrics: [
          { label: 'Lighthouse', value: '100/100' },
          { label: 'Load time', value: '<1s' },
          { label: 'Languages', value: 'ES/EN' },
        ],
      },
    },
  },
} as const;
