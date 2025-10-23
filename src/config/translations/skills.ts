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
    list: {
      flutter: {
        name: 'Flutter',
        description:
          'Framework de desarrollo multiplataforma de Google para crear aplicaciones nativas de alta calidad',
      },
      dart: {
        name: 'Dart',
        description:
          'Lenguaje de programación optimizado para el desarrollo de aplicaciones en múltiples plataformas',
      },
      'clean-architecture': {
        name: 'Clean Architecture',
        description:
          'Arquitectura de software que separa las preocupaciones en capas bien definidas',
      },
      bloc: {
        name: 'BLoC Pattern',
        description:
          'Patrón de gestión de estado predictible y testeable para aplicaciones Flutter',
      },
      getx: {
        name: 'GetX',
        description:
          'Framework Flutter para gestión de estado, dependencias y routing',
      },
      riverpod: {
        name: 'Riverpod',
        description:
          'Provider mejorado para gestión de estado en Flutter con compile-time safety',
      },
      provider: {
        name: 'Provider',
        description:
          'Wrapper alrededor de InheritedWidget para facilitar la gestión de estado',
      },
      'auto-route': {
        name: 'auto_route',
        description:
          'Generador de rutas automático para Flutter con type safety',
      },
      'get-it': {
        name: 'get_it',
        description:
          'Service locator simple para inyección de dependencias en Flutter',
      },
      dio: {
        name: 'dio',
        description:
          'Cliente HTTP potente para Dart/Flutter con interceptors y manejo de errores',
      },
      typescript: {
        name: 'TypeScript',
        description:
          'Superset tipado de JavaScript que compila a JavaScript plano',
      },
      javascript: {
        name: 'JavaScript',
        description:
          'Lenguaje de programación esencial para desarrollo web moderno',
      },
      astro: {
        name: 'Astro',
        description:
          'Framework moderno para construir sitios web rápidos y centrados en el contenido',
      },
      solidjs: {
        name: 'SolidJS',
        description:
          'Framework reactivo simple y performante para construir interfaces de usuario',
      },
      react: {
        name: 'React',
        description:
          'Biblioteca JavaScript para construir interfaces de usuario componetizadas',
      },
      'css-modules': {
        name: 'CSS Modules',
        description:
          'Sistema de scoping automático para CSS que evita colisiones de nombres',
      },
      tailwindcss: {
        name: 'TailwindCSS',
        description:
          'Framework CSS utility-first para desarrollo rápido de interfaces',
      },
      pwa: {
        name: 'PWA',
        description:
          'Aplicaciones web progresivas que ofrecen experiencia similar a apps nativas',
      },
      nodejs: {
        name: 'Node.js',
        description:
          'Runtime de JavaScript construido sobre el motor V8 de Chrome para servidor',
      },
      firebase: {
        name: 'Firebase',
        description:
          'Plataforma de desarrollo de aplicaciones backend-as-a-service de Google',
      },
      websockets: {
        name: 'WebSockets',
        description:
          'Protocolo de comunicación bidireccional en tiempo real entre cliente y servidor',
      },
      jwt: {
        name: 'JWT',
        description:
          'Estándar para transmitir información de forma segura entre partes como token',
      },
      hive: {
        name: 'Hive',
        description:
          'Base de datos NoSQL ligera y rápida escrita en Dart para Flutter',
      },
      sharedpreferences: {
        name: 'SharedPreferences',
        description:
          'Almacenamiento de datos clave-valor persistente en dispositivos móviles',
      },
      docker: {
        name: 'Docker',
        description:
          'Plataforma de contenedorización para crear, desplegar y gestionar aplicaciones',
      },
      'github-actions': {
        name: 'GitHub Actions',
        description: 'Platform de automatización y CI/CD integrada en GitHub',
      },
      aws: {
        name: 'AWS',
        description:
          'Plataforma de servicios en la nube de Amazon Web Services',
      },
      netlify: {
        name: 'Netlify',
        description:
          'Plataforma de desarrollo web con hosting y CI/CD automático',
      },
      cicd: {
        name: 'CI/CD',
        description:
          'Prácticas de integración y despliegue continuo para automatizar releases',
      },
      'technical-leadership': {
        name: 'Technical Leadership',
        description:
          'Liderazgo de equipos técnicos y toma de decisiones arquitectónicas',
      },
      'team-management': {
        name: 'Team Management',
        description:
          'Gestión y coordinación de equipos multidisciplinares de desarrollo',
      },
      git: {
        name: 'Git',
        description:
          'Sistema de control de versiones distribuido para gestión de código fuente',
      },
      'video-js': {
        name: 'Video.js',
        description: 'Reproductor de video HTML5 personalizable y extensible',
      },
      sentry: {
        name: 'Sentry',
        description:
          'Plataforma de monitoreo de errores y rendimiento de aplicaciones',
      },
      postman: {
        name: 'Postman',
        description: 'Plataforma para pruebas de API y colaboración en equipo',
      },
      json: {
        name: 'JSON',
        description:
          'Formato ligero de intercambio de datos fácil de leer y escribir',
      },
      'go-router': {
        name: 'go_router',
        description:
          'Paquete de enrutamiento declarativo para Flutter que simplifica la navegación',
      },
      figma: {
        name: 'Figma',
        description:
          'Herramienta de diseño y prototipado colaborativo basada en la nube',
      },
      'shaka-player': {
        name: 'Shaka Player',
        description:
          'Reproductor de video HTML5 de código abierto para transmisión adaptativa',
      },
      'sqlite-flutter': {
        name: 'sqflite',
        description:
          'Plugin SQLite para Flutter para almacenamiento de datos local',
      },
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
    list: {
      flutter: {
        name: 'Flutter',
        description: `Google's cross-platform framework for building high-quality native applications`,
      },
      dart: {
        name: 'Dart',
        description: `Programming language optimized for building apps on multiple platforms`,
      },
      'clean-architecture': {
        name: 'Clean Architecture',
        description:
          'Software architecture that separates concerns into well-defined layers',
      },
      bloc: {
        name: 'BLoC Pattern',
        description:
          'Predictable and testable state management pattern for Flutter applications',
      },
      getx: {
        name: 'GetX',
        description:
          'Flutter framework for state management, dependency injection and routing',
      },
      riverpod: {
        name: 'Riverpod',
        description:
          'Enhanced Provider for state management in Flutter with compile-time safety',
      },
    },
  },
} as const;
