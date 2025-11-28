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
    readMore: 'Leer más',
    featured: 'Destacado',
    stats: {
      inProduction: 'Producción',
      featuredProject: 'Destacado',
      inProduction: 'Producción',
      featuredProject: 'Destacado',
      codeAvailable: 'Código Disponible',
      underNDA: 'Bajo NDA',
    },
    badges: {
      confidential: 'Confidencial',
      underNDA: 'Bajo NDA',
    },
    badges: {
      confidential: 'Confidencial',
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
      'streaming-platform': {
        title: 'Plataforma OTT para Hoteles',
        sector: 'Streaming & Hospitalidad',
        role: 'Lead Flutter Developer & Arquitecto de Software',
        duration: '30 meses (jul. 2022 - ene. 2025)',
        team: '4 desarrolladores',
        stack:
          'Flutter 3.16 · Dart 3.0+ · BLoC Pattern · Clean Architecture · auto_route · GetIt · Dio · IndexedDB · DRM · Video Player · Docker · GitHub Actions · CI/CD · JavaScript Interop',
        description:
          'Plataforma de streaming multiplataforma con arquitectura Clean Architecture y patrón BLoC. Sistema dual-entry para Smart TV (HTML renderer) y Web (CanvasKit) con arquitectura modular escalable. Video player personalizado con DRM, multi-audio/subtítulos y reproducción adaptativa. Persistencia local con IndexedDB via JS interop, caché inteligente HTTP con estrategias configurables. 68+ componentes UI reutilizables, 17+ BLoCs para gestión de estado, integración con API REST mediante interceptores JWT. Sistema de routing tipado con 33+ rutas. CI/CD completo con GitHub Actions y Docker para múltiples ambientes.',
        impact:
          'Arquitectura escalable desplegada en producción con CI/CD automatizado. Reducción de costos mediante código compartido entre 6 plataformas. Performance optimizado con lazy loading, caché estratégico y tree shaking. Alta disponibilidad en múltiples ambientes.',
        metrics: [
          { label: 'Hoteles activos', value: '+30' },
          { label: 'Plataformas', value: '6' },
          { label: 'Uptime', value: '99.9%' },
        ],
      },
      'festival-cms': {
        title: 'Plataforma de Administración de Festivales Musicales',
        sector: 'Música & Eventos',
        role: 'Desarrollador Full Stack',
        duration: '7 meses (ene. 2025 - jul. 2025)',
        team: 'Individual',
        stack:
          'Astro · SolidJS · TypeScript · TailwindCSS · Spotify API · Integración de Mapas',
        description:
          'Sistema web profesional para administrar todos los aspectos de festivales de música: lineup de artistas, horarios, escenarios, contenido editorial y ubicaciones. La plataforma permite a los organizadores gestionar centralizadamente la programación del evento, actualizar información en tiempo real y publicar contenido que se sincroniza automáticamente con aplicaciones móviles y sitios web públicos. Incluye integración con Spotify para vincular música de artistas, editor visual de contenidos, y sistema de gestión de ubicaciones con mapas interactivos.',
        impact:
          'Plataforma completa lista para producción que centraliza la gestión de eventos complejos, reduciendo el tiempo de actualización de contenidos en un 70% y eliminando errores manuales. Arquitectura profesional y escalable que facilita la gestión de múltiples ediciones del festival.',
        metrics: [
          { label: 'Carga inicial', value: '<1.5s' },
          { label: 'Reducción tiempo actualización', value: '70%' },
          { label: 'Entrega del proyecto', value: '4 meses' },
        ],
      },
      'logistics-management': {
        title: 'App de Gestión Logística Empresarial',
        sector: 'Logística & Transporte',
        role: 'Desarrollador Móvil Senior',
        duration: '6 meses (dic. 2021 - may. 2022)',
        stack:
          'Flutter · Google Maps · Firebase · GPS en Tiempo Real · APIs REST',
        description:
          'Aplicación móvil empresarial (iOS/Android) para optimizar operaciones de flotas y entregas. Incluye rastreo GPS en tiempo real de vehículos, gestión inteligente de rutas y tareas, reportes de incidencias con fotos, chat en tiempo real entre conductores y central, y funcionamiento sin conexión a internet. La app permite a conductores gestionar sus entregas diarias, reportar problemas, y mantener comunicación constante con el equipo.',
        impact:
          'Solución completa que redujo significativamente los tiempos de gestión operativa y mejoró la trazabilidad de entregas. Arquitectura profesional con múltiples ambientes de desarrollo, componentes reutilizables y código de alta calidad. Proyecto activo en producción con usuarios reales gestionando operaciones diarias.',
        metrics: [
          { label: 'Pantallas desarrolladas', value: '21' },
          { label: 'Funciona sin internet', value: 'Sí' },
          { label: 'Plataformas', value: 'iOS + Android' },
        ],
      },
      portfolio: {
        title: 'Portfolio Personal – Chrystian Michell',
        sector: 'Personal Branding',
        role: 'Developer & Designer',
        duration: '2 meses (oct. 2025 - actualidad)',
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
      'camping-management': {
        title: 'App Móvil para Gestión de Campings',
        sector: 'Turismo & Hospitalidad',
        role: 'Desarrollador Móvil',
        duration: '5 meses (ene. 2022 - may. 2022)',
        stack:
          'Flutter · Firebase · Arquitectura Modular · APIs · Autenticación Segura',
        description:
          'Aplicación móvil completa para iOS y Android que digitaliza la gestión integral de un camping turístico. Los usuarios pueden registrarse, realizar reservas de parcelas, consultar el calendario de actividades del camping, recibir notificaciones en tiempo real sobre eventos y servicios, y gestionar su perfil personal. La app permite al personal del camping administrar las operaciones diarias desde cualquier dispositivo móvil, mejorando significativamente la experiencia de los visitantes.',
        impact:
          'Transformación digital que automatizó completamente las operaciones del camping, eliminando procesos manuales en papel y reduciendo costes operativos en un 40%. La app mejoró la satisfacción de los huéspedes al facilitar reservas instantáneas y mantenerlos informados de todas las actividades disponibles.',
        metrics: [
          { label: 'Usuarios registrados', value: '+1,000' },
          { label: 'Reducción costes operativos', value: '40%' },
          { label: 'Procesos digitalizados', value: '100%' },
        ],
      },
      'neobank-frontend': {
        title: 'Aplicación Bancaria Digital Multiplataforma',
        sector: 'Banca Digital y FinTech',
        role: 'Desarrollador Flutter Full-Stack',
        duration: '3 meses (oct. 2021 - dic. 2021)',
        team: 'Desarrollador Principal',
        stack:
          'Flutter · GetX · Firebase · GraphQL · NFC · Biometría · Google Pay · Sentry',
        description:
          'Aplicación bancaria completa para iOS, Android y Web que permite gestionar cuentas personales y compartidas, realizar transferencias bancarias, pagos instantáneos entre usuarios, y gestionar tarjetas virtuales y físicas. Implementé un sistema avanzado de verificación de identidad con captura automática de documentos mediante inteligencia artificial, reconocimiento facial y lectura NFC de documentos electrónicos. La app incluye autenticación multinivel con biometría (Face ID/Touch ID/Huella), sistema de notificaciones en tiempo real, y arquitectura modular que separa la lógica de negocio de la interfaz para facilitar el mantenimiento y la escalabilidad.',
        impact:
          'Aplicación bancaria de producción con experiencia de usuario premium en tres plataformas con una sola base de código, reduciendo costos de desarrollo en un 70%. El proceso de verificación de identidad automatizado reduce en un 80% las validaciones manuales, permitiendo alta de nuevos clientes en menos de 10 minutos.',
        metrics: [
          { label: 'Pantallas', value: '50+' },
          { label: 'Servicios', value: '15+' },
          { label: 'Plataformas', value: '3' },
        ],
      },
      'digital-catalog': {
        title: 'Catálogo Digital de Productos',
        sector: 'Construcción y Decoración',
        role: 'Desarrollador Flutter Full-Stack',
        duration: '3 meses (jun. 2022 - ago. 2022)',
        team: 'Individual',
        stack:
          'Flutter 2.16 · Dart · GetX · Parse Server · AWS S3 · cached_network_image · carousel_slider · Multi-tenant · Clean Architecture',
        description:
          'Aplicación móvil de catálogo digital desarrollada en Flutter que permite explorar y consultar productos de construcción y decoración de manera interactiva. Implementé una arquitectura escalable multi-tenant con navegación multinivel (series, productos, ambientes, subseries) y sistema de filtrado avanzado con múltiples criterios combinables. La app integra Parse Server como backend y AWS S3 para gestión de assets, con un sistema inteligente de caché de imágenes que optimiza el consumo de datos. Desarrollé 61 archivos Dart organizados en capas (Models, Services, Controllers, Views), incluyendo 17 modelos de datos, 12 servicios especializados, y 12 widgets personalizados reutilizables. El proyecto destaca por su configuración dinámica desde servidor que permite personalizar la UI sin modificar código, y una estrategia de fallback inteligente para imágenes.',
        impact:
          'Digitalización completa que eliminó catálogos físicos voluminosos, reduciendo costos de impresión y distribución. La arquitectura multi-tenant permite soportar múltiples clientes desde una única base de código. Las optimizaciones de performance con caché de imágenes reducen el consumo de datos en un 70% en uso repetido, mejorando significativamente la experiencia del usuario.',
        metrics: [
          { label: 'Archivos Dart', value: '61' },
          { label: 'Modelos de datos', value: '17' },
          { label: 'Reducción consumo datos', value: '70%' },
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
    readMore: 'Read more',
    featured: 'Featured',
    stats: {
      inProduction: 'Production',
      featuredProject: 'Featured',
      inProduction: 'Production',
      featuredProject: 'Featured',
      codeAvailable: 'Code Available',
      underNDA: 'Under NDA',
    },
    badges: {
      confidential: 'Confidential',
      underNDA: 'Under NDA',
    },
    badges: {
      confidential: 'Confidential',
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
      'streaming-platform': {
        title: 'OTT Platform for Hotels',
        sector: 'Streaming & Hospitality',
        role: 'Lead Flutter Developer & Software Architect',
        duration: '30 months (Jul 2022 - Jan 2025)',
        team: '4 developers',
        stack:
          'Flutter 3.16 · Dart 3.0+ · BLoC Pattern · Clean Architecture · auto_route · GetIt · Dio · IndexedDB · DRM · Video Player · Docker · GitHub Actions · CI/CD · JavaScript Interop',
        description:
          'Cross-platform streaming platform with Clean Architecture and BLoC pattern. Dual-entry system for Smart TV (HTML renderer) and Web (CanvasKit) with scalable modular architecture. Custom video player with DRM, multi-audio/subtitles, and adaptive streaming. Local persistence with IndexedDB via JS interop, smart HTTP caching with configurable strategies. 68+ reusable UI components, 17+ BLoCs for state management, REST API integration with JWT interceptors. Typed routing system with 33+ routes. Complete CI/CD with GitHub Actions and Docker for multiple environments.',
        impact:
          'Scalable architecture deployed in production with automated CI/CD. Cost reduction through shared code across 6 platforms. Optimized performance with lazy loading, strategic caching, and tree shaking. High availability across multiple environments.',
        metrics: [
          { label: 'Active hotels', value: '+30' },
          { label: 'Platforms', value: '6' },
          { label: 'Uptime', value: '99.9%' },
        ],
      },
      'festival-cms': {
        title: 'Music Festival Management Platform',
        sector: 'Music & Events',
        role: 'Full Stack Developer',
        duration: '7 months (Jan 2025 - Jul 2025)',
        team: 'Individual',
        stack:
          'Astro · SolidJS · TypeScript · TailwindCSS · Spotify API · Maps Integration',
        description:
          'Professional web system for managing all aspects of music festivals: artist lineup, schedules, stages, editorial content, and locations. The platform allows organizers to centrally manage event programming, update information in real-time, and publish content that automatically syncs with mobile apps and public websites. Features Spotify integration to link artist music, visual content editor, and location management system with interactive maps.',
        impact:
          'Complete production-ready platform that centralizes complex event management, reducing content update time by 70% and eliminating manual errors. Professional and scalable architecture that facilitates managing multiple festival editions.',
        metrics: [
          { label: 'Initial load', value: '<1.5s' },
          { label: 'Update time reduction', value: '70%' },
          { label: 'Project delivery', value: '4 months' },
        ],
      },
      'camping-management': {
        title: 'Mobile App for Camping Management',
        sector: 'Tourism & Hospitality',
        role: 'Mobile Developer',
        duration: '5 months (Jan 2022 - May 2022)',
        stack:
          'Flutter · Firebase · Modular Architecture · APIs · Secure Authentication',
        description:
          'Complete mobile application for iOS and Android that digitalizes the comprehensive management of a tourist camping site. Users can register, make plot reservations, check the camping activities calendar, receive real-time notifications about events and services, and manage their personal profile. The app allows camping staff to manage daily operations from any mobile device, significantly improving the visitor experience.',
        impact:
          'Digital transformation that fully automated camping operations, eliminating manual paper-based processes and reducing operational costs by 40%. The app improved guest satisfaction by enabling instant reservations and keeping them informed of all available activities.',
        metrics: [
          { label: 'Registered users', value: '+1,000' },
          { label: 'Operational cost reduction', value: '40%' },
          { label: 'Digitalized processes', value: '100%' },
        ],
      },
      'neobank-frontend': {
        title: 'Cross-Platform Digital Banking Application',
        sector: 'Digital Banking & FinTech',
        role: 'Full-Stack Flutter Developer',
        duration: '3 months (Oct 2021 - Dec 2021)',
        team: 'Lead Developer',
        stack:
          'Flutter · GetX · Firebase · GraphQL · NFC · Biometrics · Google Pay · Sentry',
        description:
          'Comprehensive banking application for iOS, Android, and Web enabling management of personal and shared accounts, bank transfers, instant peer-to-peer payments, and virtual/physical card management. I implemented an advanced identity verification system with AI-powered automatic document capture, facial recognition, and NFC reading of electronic documents. The app features multi-level authentication with biometrics (Face ID/Touch ID/Fingerprint), real-time notification system, and modular architecture that separates business logic from UI for enhanced maintainability and scalability.',
        impact:
          'Production banking application with premium user experience across three platforms using a single codebase, reducing development costs by 70%. The automated identity verification process reduces manual validations by 80%, enabling customer onboarding in under 10 minutes.',
        metrics: [
          { label: 'Screens', value: '50+' },
          { label: 'Services', value: '15+' },
          { label: 'Platforms', value: '3' },
        ],
      },
      'digital-catalog': {
        title: 'Digital Product Catalog',
        sector: 'Construction & Decoration',
        role: 'Full-Stack Flutter Developer',
        duration: '3 months (Jun 2022 - Aug 2022)',
        team: 'Individual',
        stack:
          'Flutter 2.16 · Dart · GetX · Parse Server · AWS S3 · cached_network_image · carousel_slider · Multi-tenant · Clean Architecture',
        description:
          'Digital catalog mobile application developed in Flutter that enables interactive exploration and consultation of construction and decoration products. I implemented a scalable multi-tenant architecture with multi-level navigation (series, products, environments, subseries) and advanced filtering system with multiple combinable criteria. The app integrates Parse Server as backend and AWS S3 for asset management, with an intelligent image caching system that optimizes data consumption. I developed 61 Dart files organized in layers (Models, Services, Controllers, Views), including 17 data models, 12 specialized services, and 12 reusable custom widgets. The project stands out for its dynamic server-side configuration that allows UI customization without code modifications, and an intelligent fallback strategy for images.',
        impact:
          'Complete digitalization that eliminated bulky physical catalogs, reducing printing and distribution costs. The multi-tenant architecture supports multiple clients from a single codebase. Performance optimizations with image caching reduce data consumption by 70% on repeated use, significantly improving user experience.',
        metrics: [
          { label: 'Dart files', value: '61' },
          { label: 'Data models', value: '17' },
          { label: 'Data consumption reduction', value: '70%' },
        ],
      },
      'logistics-management': {
        title: 'Enterprise Logistics Management App',
        sector: 'Logistics & Transportation',
        role: 'Senior Mobile Developer',
        duration: '6 months (Dec 2021 - May 2022)',
        stack: 'Flutter · Google Maps · Firebase · Real-time GPS · REST APIs',
        description:
          'Enterprise mobile application (iOS/Android) to optimize fleet and delivery operations. Features real-time GPS tracking of vehicles, intelligent route and task management, incident reporting with photos, real-time chat between drivers and headquarters, and offline functionality. The app enables drivers to manage daily deliveries, report issues, and maintain constant communication with the team.',
        impact:
          'Complete solution that significantly reduced operational management times and improved delivery traceability. Professional architecture with multiple development environments, reusable components, and high-quality code. Active production project with real users managing daily operations.',
        metrics: [
          { label: 'Screens developed', value: '21' },
          { label: 'Works offline', value: 'Yes' },
          { label: 'Platforms', value: 'iOS + Android' },
        ],
      },
      portfolio: {
        title: 'Personal Portfolio – Chrystian Michell',
        sector: 'Personal Branding',
        role: 'Developer & Designer',
        duration: '2 months (Oct 2025 - Present)',
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
