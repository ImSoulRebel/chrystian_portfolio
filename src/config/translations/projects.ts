import type { ProjectsTranslations } from './types';

export const projects: Record<'es' | 'en', ProjectsTranslations> = {
  es: {
    title: 'Proyectos Destacados',
    subtitle:
      'Los 3 proyectos más destacados que demuestran experiencia en arquitectura Flutter avanzada, liderazgo técnico y soluciones escalables.',
    viewDemo: 'Ver Demo',
    viewCode: 'Ver Código',
    viewMore: 'Ver Más Proyectos',
    featured: 'Destacado',
    stats: {
      inProduction: 'En Producción',
      featuredProject: 'Proyecto Destacado',
      codeAvailable: 'Código Disponible',
    },
    actions: {
      visitWebsite: 'Visitar sitio web',
      visitWebsiteLabel: 'Visitar sitio web del proyecto',
      viewGithub: 'Ver código en GitHub',
      viewGithubLabel: 'Ver código en GitHub',
    },
    seo: {
      title: 'Proyectos | Chrystian Michell - Portfolio de Desarrollo Flutter',
      description:
        'Explora los proyectos destacados de Chrystian Michell: aplicaciones Flutter multiplataforma, plataformas OTT, Smart TV apps y soluciones móviles innovadoras desplegadas en múltiples países.',
    },
    list: {
      yuvod: {
        title: 'YUVOD – Plataforma OTT para Hoteles',
        stack:
          'Flutter · BLoC · auto_route · get_it · Video.js · Docker · GitHub Actions · WebSockets',
        description:
          'Plataforma de streaming multiplataforma para SmartTVs, móviles y web con arquitectura multientrada y selección dinámica de UI. Navegación espacial avanzada con NavigationHandlerBloc, soporte para menús anidados, grids y carruseles. Reproductor modular con DRM, subtítulos dinámicos, autenticación por token y pantalla completa. DevOps con RPS en pubspec.yaml, Docker Compose y Git Hooks en Dart.',
        impact:
          'Desplegada en +30 hoteles en Europa y LATAM. Experiencia fluida en SmartTV, despliegues confiables y arquitectura extensible. Mejora del 35% en satisfacción de huéspedes según encuestas post-estancia.',
      },
      nextival: {
        title: 'Nextival CMS – Gestión de Festivales',
        stack:
          'Astro · SolidJS · TypeScript · TailwindCSS · WebSockets · JWT · Spotify API',
        description:
          'Sistema de gestión de contenido para festivales musicales con Clean Architecture y Repository Pattern. API RESTful con Server Actions y middleware JWT. Integración con Spotify Web API y Geocoding API. Editor WYSIWYG (Quill.js) para gestión avanzada de artistas y escenarios. WebSockets para notificaciones y mensajería en tiempo real.',
        impact:
          'Tiempos de carga <1.5s con renderizado híbrido SSR/SSG, optimización SEO completa. Entregado en 4 meses como proyecto funcional para producción.',
      },
      stelcamping: {
        title: 'STELCAMPING – Gestión de Campings',
        stack:
          'Flutter · Firebase · GetX/BLoC · dio · StringLocalizations · REST APIs',
        description:
          'Aplicación integral para gestión de campings con clase base BaseState<T> para centralizar diálogos, localización, foco y utilidades de UI. Sistema de registro, autenticación, reservas, calendario de actividades, notificaciones y perfil. Integración con APIs REST (auth, reservas, actividades, notificaciones, perfil). Arquitectura modular con separación clara entre presentación, lógica de negocio y datos.',
        impact:
          'Más de 1,000 usuarios activos. Reutilización de código, consistencia en UX y escalabilidad. Automatizó procesos que antes requerían 3 personas, reduciendo costes operativos en 40%.',
      },
      bnc10: {
        title: 'BNC10 – Neobanco Frontend',
        stack:
          'Flutter · GetX · Firebase · GetStorage · responsive_framework · Sentry',
        description:
          'Frontend de neobanco con responsive avanzado usando responsive_framework. Theming diferenciado para web y móvil. Monitoreo de errores en producción con Sentry. Modularización en core, resources, routing y commons. Buenas prácticas de UI/UX: orientación fija, control de escala, transiciones animadas. Seguridad bancaria con autenticación biométrica y storage encriptado.',
        impact:
          '500+ usuarios activos, rating 4.7⭐, 99.5% de sesiones sin crashes. Reducción del 60% en fricción de autenticación. Experiencia fluida cross-platform.',
      },
      tookane: {
        title: 'TOOKANE – App Multipropósito',
        stack:
          'Flutter · Provider · Riverpod · BLoC · Firebase · Hive · SharedPreferences',
        description:
          'Aplicación multipropósito con Clean Architecture + MVVM + Repository Pattern. Autenticación multiplataforma (correo, Google, Facebook), gestión de usuarios y perfiles, consumo de APIs externas y visualización de datos. Notificaciones push, soporte offline-first con Hive/SharedPreferences, internacionalización multiidioma, animaciones y transiciones personalizadas. CI/CD para despliegues automatizados.',
        impact:
          'Buenas prácticas con linter, análisis estático, pruebas unitarias y de widgets, documentación clara y CI/CD. Mejora del 30% en eficiencia mediante optimización basada en datos reales.',
      },
      portfolio: {
        title: 'Portfolio Personal – Chrystian Michell',
        stack:
          'Astro · TypeScript · CSS Modules · GitHub Actions · Netlify · PWA',
        description:
          'Portfolio personal moderno y responsive desarrollado con Astro para renderizado estático optimizado. Arquitectura modular con TypeScript, sistema de traducciones i18n, SEO avanzado con structured data, PWA con manifest y service worker. Optimización de performance con lazy loading, code splitting y compresión de assets. Deployment automatizado con GitHub Actions.',
        impact:
          'Lighthouse score 100/100 en todas las métricas. Tiempo de carga <1s, SEO optimizado para posicionamiento profesional. Internacionalización ES/EN completa.',
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
    featured: 'Featured',
    stats: {
      inProduction: 'In Production',
      featuredProject: 'Featured Project',
      codeAvailable: 'Code Available',
    },
    actions: {
      visitWebsite: 'Visit website',
      visitWebsiteLabel: 'Visit project website',
      viewGithub: 'View code on GitHub',
      viewGithubLabel: 'View code on GitHub',
    },
    seo: {
      title: 'Projects | Chrystian Michell - Flutter Development Portfolio',
      description:
        "Explore Chrystian Michell's featured projects: cross-platform Flutter applications, OTT platforms, Smart TV apps, and innovative mobile solutions deployed across multiple countries.",
    },
    list: {
      yuvod: {
        title: 'YUVOD – OTT Platform for Hotels',
        stack:
          'Flutter · BLoC · auto_route · get_it · Video.js · Docker · GitHub Actions · WebSockets',
        description:
          'Cross-platform streaming platform for SmartTVs, mobile, and web with multi-entry architecture and dynamic UI selection. Advanced spatial navigation with NavigationHandlerBloc, support for nested menus, grids, and carousels. Modular player with DRM, dynamic subtitles, token authentication, and fullscreen. DevOps with RPS in pubspec.yaml, Docker Compose, and Git Hooks in Dart.',
        impact:
          'Deployed in +30 hotels across Europe and LATAM. Smooth SmartTV experience, reliable deployments, and extensible architecture. 35% improvement in guest satisfaction according to post-stay surveys.',
      },
      nextival: {
        title: 'Nextival CMS – Festival Management',
        stack:
          'Astro · SolidJS · TypeScript · TailwindCSS · WebSockets · JWT · Spotify API',
        description:
          'Content management system for music festivals with Clean Architecture and Repository Pattern. RESTful API with Server Actions and JWT middleware. Integration with Spotify Web API and Geocoding API. WYSIWYG editor (Quill.js) for advanced artist and stage management. WebSockets for real-time notifications and messaging.',
        impact:
          'Load times <1.5s with hybrid SSR/SSG rendering, complete SEO optimization. Delivered in 4 months as a production-ready project.',
      },
      stelcamping: {
        title: 'STELCAMPING – Camping Management',
        stack:
          'Flutter · Firebase · GetX/BLoC · dio · StringLocalizations · REST APIs',
        description:
          'Comprehensive camping management application with BaseState<T> base class to centralize dialogs, localization, focus, and UI utilities. Registration, authentication, reservations, activities calendar, notifications, and profile system. Integration with REST APIs (auth, reservations, activities, notifications, profile). Modular architecture with clear separation between presentation, business logic, and data layers.',
        impact:
          'More than 1,000 active users. Code reusability, UX consistency, and scalability. Automated processes that previously required 3 people, reducing operational costs by 40%.',
      },
      bnc10: {
        title: 'BNC10 – Neobanking Frontend',
        stack:
          'Flutter · GetX · Firebase · GetStorage · responsive_framework · Sentry',
        description:
          'Neobanking frontend with advanced responsive design using responsive_framework. Differentiated theming for web and mobile. Production error monitoring with Sentry. Modularization in core, resources, routing, and commons. UI/UX best practices: fixed orientation, scale control, animated transitions. Banking security with biometric authentication and encrypted storage.',
        impact:
          '500+ active users, 4.7⭐ rating, 99.5% crash-free sessions. 60% reduction in authentication friction. Smooth cross-platform experience.',
      },
      tookane: {
        title: 'TOOKANE – Multipurpose App',
        stack:
          'Flutter · Provider · Riverpod · BLoC · Firebase · Hive · SharedPreferences',
        description:
          'Multipurpose application with Clean Architecture + MVVM + Repository Pattern. Cross-platform authentication (email, Google, Facebook), user and profile management, external API consumption and data visualization. Push notifications, offline-first support with Hive/SharedPreferences, multi-language internationalization, custom animations and transitions. CI/CD for automated deployments.',
        impact:
          'Best practices with linter, static analysis, unit and widget tests, clear documentation and CI/CD. 30% improvement in efficiency through real data-based optimization.',
      },
      portfolio: {
        title: 'Personal Portfolio – Chrystian Michell',
        stack:
          'Astro · TypeScript · CSS Modules · GitHub Actions · Netlify · PWA',
        description:
          'Modern and responsive personal portfolio developed with Astro for optimized static rendering. Modular architecture with TypeScript, i18n translation system, advanced SEO with structured data, PWA with manifest and service worker. Performance optimization with lazy loading, code splitting, and asset compression. Automated deployment with GitHub Actions.',
        impact:
          'Lighthouse score 100/100 in all metrics. Load time <1s, SEO optimized for professional positioning. Complete ES/EN internationalization.',
      },
    },
  },
} as const;
