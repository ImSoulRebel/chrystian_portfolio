export const translations = {
  es: {
    // Navegación
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      skills: 'Habilidades',
      experience: 'Experiencia',
      projects: 'Proyectos',
      contact: 'Contacto',
    },

    // Hero Section
    hero: {
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

    // About Section
    about: {
      title: 'Sobre mí',
      description1:
        'Soy un <strong>líder técnico apasionado</strong> con más de 5 años de experiencia especializándome en desarrollo multiplataforma con <strong>Flutter</strong>. Mi enfoque combina <strong>expertise técnico profundo</strong> (Clean Architecture, DDD, optimización de rendimiento) con <strong>liderazgo de equipos multidisciplinares</strong>.',
      description2:
        'He liderado el ciclo completo de <strong>más de 10 aplicaciones multiplataforma</strong> (iOS, Android, Web, Smart TV) desplegadas en 11 países en Europa y LATAM. Mi experiencia previa de más de 10 años en retail de tecnología me aporta una perspectiva única: entiendo tanto la complejidad técnica como las necesidades reales del usuario final.',
      stats: {
        apps: 'Apps en Producción',
        experience: 'Años de Experiencia',
        users: 'Usuarios Impactados',
        countries: 'Países Desplegados',
      },
      highlights: {
        title: 'Logros Destacados',
        list: [
          {
            emoji: '🏨',
            text: 'Líder técnico de plataforma OTT desplegada en más de 30 hoteles en Europa y LATAM',
          },
          {
            emoji: '🚀',
            text: 'Arquitectura escalable soportando +1000 usuarios concurrentes con 95% de disponibilidad',
          },
          {
            emoji: '👥',
            text: 'Liderazgo de equipos multidisciplinares de hasta 9 personas con metodologías ágiles',
          },
          {
            emoji: '⚡',
            text: 'Optimización de rendimiento: 60% mejora en Smart TVs y 40% reducción en tiempo de despliegue',
          },
          {
            emoji: '🔗',
            text: 'Integración exitosa con +10 sistemas PMS hoteleros (Oracle OPERA, Mews, Cloudbeds)',
          },
          {
            emoji: '🌍',
            text: 'Más de 50,000 usuarios impactados a través de aplicaciones multiplataforma',
          },
        ],
      },
    },

    // Skills Section
    skills: {
      title: 'Habilidades Técnicas',
      categories: {
        frontend: 'Desarrollo Frontend',
        backend: 'Desarrollo Backend',
        mobile: 'Desarrollo Móvil',
        devops: 'DevOps & Cloud',
        leadership: 'Liderazgo Técnico',
        tools: 'Herramientas & Metodologías',
      },
    },

    // Experience Section
    experience: {
      title: 'Experiencia Profesional',
      current: 'Actual',
      months: 'meses',
      years: 'años',
    },

    // Projects Section
    projects: {
      title: 'Proyectos Destacados',
      viewDemo: 'Ver Demo',
      viewCode: 'Ver Código',
      viewMore: 'Ver Más Proyectos',
      list: {
        yuvod: {
          title: 'YUVOD – Plataforma OTT para Hoteles',
          stack: 'Flutter · BLoC · WebSockets · Video.js · Docker · AWS',
          description:
            'Plataforma de streaming multiplataforma para SmartTVs, móviles y web con navegación espacial custom, reproductor modular con DRM y subtítulos dinámicos. Arquitectura multientrada con selección dinámica de UI para diferentes dispositivos.',
          impact:
            'Desplegada en +30 hoteles en Europa y LATAM. Mejora del 35% en satisfacción de huéspedes según encuestas post-estancia.',
        },
        nextival: {
          title: 'Nextival CMS – Gestión de Festivales',
          stack: 'Astro · SolidJS · TailwindCSS · Node.js · WebSockets',
          description:
            'Sistema de gestión de contenido para festivales musicales con renderizado híbrido SSR/SSG, Clean Architecture con Repository Pattern, integración con Spotify Web API y editor WYSIWYG. WebSockets para notificaciones en tiempo real.',
          impact:
            'Tiempos de carga <1.5s, optimización SEO completa. Entregado en 4 meses como proyecto funcional para producción.',
        },
        stelcamping: {
          title: 'STELCAMPING – Gestión de Campings',
          stack: 'Flutter · Firebase · GetX · REST APIs · Push Notifications',
          description:
            'Aplicación integral para gestión de campings con sistema de reservas, calendario de actividades, notificaciones push, chat en tiempo real y panel administrativo. Arquitectura modular con clase base BaseState<T> para centralizar utilidades.',
          impact:
            'Más de 1,000 usuarios activos. Automatizó procesos que antes requerían 3 personas, reduciendo costes operativos en 40%.',
        },
        bnc10: {
          title: 'BNC10 – Aplicación Neobanca',
          stack: 'Flutter · GetX · Firebase · Biometric Auth · Secure Storage',
          description:
            'App de neobanca social con P2P, gestión de cuentas y analytics financieras. Implementé seguridad bancaria (biometric auth, encrypted storage), responsive avanzado con responsive_framework y monitoreo con Sentry.',
          impact:
            '500+ usuarios activos, rating 4.7⭐, 99.5% de sesiones sin crashes. Reducción del 60% en fricción de autenticación.',
        },
        tookane: {
          title: 'TOOKANE – Seguimiento Logístico',
          stack: 'Flutter · Riverpod · Supabase · Geolocalización Real-Time',
          description:
            'Sistema de tracking en tiempo real con offline-first architecture para zonas con conectividad limitada. Clean Architecture + MVVM + Repository Pattern con optimización de batería reduciendo consumo en 40%.',
          impact:
            'Mejora del 30% en eficiencia de entregas mediante optimización de rutas basada en datos reales de geolocalización.',
        },
      },
    },

    // Contact Section
    contact: {
      title: 'Trabajemos Juntos',
      subtitle: '¿Listo para transformar tu idea en realidad?',
      description:
        '¿Tienes un proyecto en mente? Me encantaría conocer más sobre tu idea y cómo puedo ayudarte a hacerla realidad.',
      form: {
        subject: 'Nuevo mensaje desde el portfolio',
        title: 'Cuéntame sobre tu proyecto',
        text: 'Completa el formulario y te responderé en menos de 24 horas con una propuesta personalizada.',
        name: {
          label: 'Nombre completo',
          placeholder: 'Tu nombre',
        },
        email: {
          label: 'Email',
          placeholder: 'Tu email',
        },
        company: {
          label: 'Empresa/Organización',
          placeholder: 'Nombre de tu empresa',
        },
        phone: {
          label: 'Teléfono',
          placeholder: '+34 XXX XX XX XX',
        },
        projectType: {
          label: 'Tipo de proyecto ',
          placeholder: 'Selecciona el tipo de proyecto',
          options: {
            mobileApp: 'Aplicación móvil',
            webApp: 'Aplicación web',
            consulting: 'Consultoría técnica',
            leadership: 'Liderazgo técnico',
            migration: 'Migración/Modernización',
            other: 'Otro',
          },
        },
        budget: {
          label: 'Presupuesto estimado',
          placeholder: 'Selecciona un rango',
          options: {
            range1: '€5.000 - €15.000',
            range2: '€15.000 - €30.000',
            range3: '€30.000 - €50.000',
            range4: '€50.000+',
            undefined: 'Por definir',
          },
        },
        timeline: {
          label: 'Timeline esperado',
          placeholder: 'Selecciona un timeline',
          options: {
            immediate: 'Inmediato (&lt; 1 mes)',
            range1: '1-3 meses',
            range2: '3-6 meses',
            range3: '6-12 meses',
            flexible: 'Flexible',
          },
        },
        message: {
          label: 'Describe tu proyecto',
          placeholder:
            'Cuéntame sobre tu proyecto, objetivos, características principales, usuarios objetivo, contexto técnico, etc.',
        },
        send: 'Enviar mensaje',
        sending: 'Enviando...',
        success: '¡Mensaje enviado correctamente!',
        error: 'Error al enviar el mensaje. Inténtalo de nuevo.',
        notice: 'Te responderé en menos de 24 horas',
      },
      expectation: {
        quickResponse: {
          title: 'Respuesta rápida',
          text: 'Te responderé en menos de 24 horas con una propuesta inicial y algunas preguntas adicionales.',
        },
        collaborationOpportunity: {
          title: 'Oportunidad de colaboración',
          text: 'Evaluaré si tu proyecto es un buen fit para mis habilidades y disponibilidad actual como Tech Lead.',
        },
        actionPlan: {
          title: 'Plan de acción claro',
          text: 'Recibirás un plan detallado con alcance, enfoque técnico y condiciones de colaboración.',
        },
      },
      tipSection: {
        title: 'Consejo para un contacto efectivo',
        description:
          'Mientras más detalles compartas sobre tu proyecto, mejor podré entender tus necesidades y ofrecerte una solución perfecta.',
      },
      quickLinks: {
        label: 'O conecta directamente:',
        email: 'Correo electrónico',
        phone: 'Teléfono',
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },

      info: {
        location: 'España (Remote/Presencial)',
        availability: 'Disponible inmediatamente',
        response: 'Respuesta en menos de 24h',
      },
    },

    // Footer
    footer: {
      position: 'Senior Flutter Developer & Tech Lead',
      tagline: 'Construyendo el futuro digital, una app a la vez',
      nav: {
        title: 'Navegación',
        home: 'Inicio',
        about: 'Sobre mí',
        contact: 'Contacto',
        skills: 'Habilidades',
        experience: 'Experiencia',
        projects: 'Proyectos',
      },
      tech: {
        title: 'Tecnologías',
        flutter: 'Flutter & Dart',
        firebase: 'Firebase & AWS',
        javascript: 'JavaScript & TypeScript',
        react: 'React & Node.js',
        ciCd: 'CI/CD & DevOps',
      },
      contact: {
        title: 'Contacto',
        subtitle: '¿Tienes un proyecto en mente?',
        cta: '¡Hablemos!',
        email: 'Correo electrónico',
      },

      rights: 'Todos los derechos reservados.',
      madeWith: 'Hecho con',
      technologies: 'Astro, TypeScript y mucho ☕',
    },

    // SEO & Meta
    seo: {
      title:
        'Chrystian Michell | Líder Técnico & Arquitecto Flutter - Desarrollador Senior Disponible',
      description:
        'Líder Técnico & Arquitecto Flutter especializado en desarrollo multiplataforma. Más de 5 años de experiencia, 10+ apps en producción en 11 países. Disponible para roles de liderazgo técnico, CTO, Tech Lead y proyectos de consultoría empresarial.',
      keywords:
        'Flutter Developer, Dart Expert, Tech Lead, CTO, Arquitecto Software, Senior Developer, Clean Architecture, BLoC Pattern, Desarrollo Multiplataforma, Apps Móviles, Smart TV, OTT Platform, Liderazgo Técnico, Consultoría Tecnológica, Remote Work, Hiring, Available for Hire, Head Hunter, Technical Recruitment',
    },

    // Language Selector
    language: {
      switchTo: 'Cambiar a',
      spanish: 'Español',
      english: 'English',
    },
  },

  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },

    // Hero Section
    hero: {
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

    // About Section
    about: {
      title: 'About Me',
      description1:
        'I am a <strong>passionate technical leader</strong> with over 5 years of experience specializing in cross-platform development with <strong>Flutter</strong>. My approach combines <strong>deep technical expertise</strong> (Clean Architecture, DDD, performance optimization) with <strong>multidisciplinary team leadership</strong>.',
      description2:
        'I have led the complete cycle of <strong>more than 10 cross-platform applications</strong> (iOS, Android, Web, Smart TV) deployed in 11 countries across Europe and LATAM. My previous experience of over 10 years in technology retail gives me a unique perspective: I understand both technical complexity and real end-user needs.',
      stats: {
        apps: 'Production Apps',
        experience: 'Years of Experience',
        users: 'Users Impacted',
        countries: 'Countries Deployed',
      },
      highlights: {
        title: 'Highlights',
        list: [
          {
            emoji: '🏨',
            text: 'Technical leader of OTT platform deployed in over 30 hotels across Europe and LATAM',
          },
          {
            emoji: '🚀',
            text: 'Scalable architecture supporting +1000 concurrent users with 95% uptime',
          },
          {
            emoji: '👥',
            text: 'Leadership of multidisciplinary teams of up to 9 people with agile methodologies',
          },
          {
            emoji: '⚡',
            text: 'Performance optimization: 60% improvement on Smart TVs and 40% reduction in deployment time',
          },
          {
            emoji: '🔗',
            text: 'Successful integration with +10 hotel PMS systems (Oracle OPERA, Mews, Cloudbeds)',
          },
          {
            emoji: '🌍',
            text: 'More than 50,000 users impacted through cross-platform applications',
          },
        ],
      },
    },

    // Skills Section
    skills: {
      title: 'Technical Skills',
      categories: {
        frontend: 'Frontend Development',
        backend: 'Backend Development',
        mobile: 'Mobile Development',
        devops: 'DevOps & Cloud',
        leadership: 'Technical Leadership',
        tools: 'Tools & Methodologies',
      },
    },

    // Experience Section
    experience: {
      title: 'Professional Experience',
      current: 'Current',
      months: 'months',
      years: 'years',
    },

    // Projects Section
    projects: {
      title: 'Featured Projects',
      viewDemo: 'View Demo',
      viewCode: 'View Code',
      viewMore: 'View More Projects',
      list: {
        yuvod: {
          title: 'YUVOD – OTT Platform for Hotels',
          stack: 'Flutter · BLoC · WebSockets · Video.js · Docker · AWS',
          description:
            'Cross-platform streaming platform for SmartTVs, mobile, and web with custom spatial navigation, modular player with DRM and dynamic subtitles. Multi-entry architecture with dynamic UI selection for different devices.',
          impact:
            'Deployed in +30 hotels across Europe and LATAM. 35% improvement in guest satisfaction according to post-stay surveys.',
        },
        nextival: {
          title: 'Nextival CMS – Festival Management',
          stack: 'Astro · SolidJS · TailwindCSS · Node.js · WebSockets',
          description:
            'Content management system for music festivals with hybrid SSR/SSG rendering, Clean Architecture with Repository Pattern, Spotify Web API integration, and WYSIWYG editor. WebSockets for real-time notifications.',
          impact:
            'Load times <1.5s, complete SEO optimization. Delivered in 4 months as a production-ready project.',
        },
        stelcamping: {
          title: 'STELCAMPING – Camping Management',
          stack: 'Flutter · Firebase · GetX · REST APIs · Push Notifications',
          description:
            'Comprehensive camping management application with booking system, activities calendar, push notifications, real-time chat, and admin panel. Modular architecture with BaseState<T> base class to centralize utilities.',
          impact:
            'More than 1,000 active users. Automated processes that previously required 3 people, reducing operational costs by 40%.',
        },
        bnc10: {
          title: 'BNC10 – Neobanking App',
          stack: 'Flutter · GetX · Firebase · Biometric Auth · Secure Storage',
          description:
            'Social neobanking app with P2P, account management, and financial analytics. Implemented banking security (biometric auth, encrypted storage), advanced responsive design with responsive_framework, and monitoring with Sentry.',
          impact:
            '500+ active users, 4.7⭐ rating, 99.5% crash-free sessions. 60% reduction in authentication friction.',
        },
        tookane: {
          title: 'TOOKANE – Logistics Tracking',
          stack: 'Flutter · Riverpod · Supabase · Real-Time Geolocation',
          description:
            'Real-time tracking system with offline-first architecture for areas with limited connectivity. Clean Architecture + MVVM + Repository Pattern with battery optimization reducing consumption by 40%.',
          impact:
            '30% improvement in delivery efficiency through route optimization based on real geolocation data.',
        },
      },
    },

    // Contact Section
    contact: {
      title: 'Contact',
      subtitle: 'Ready to transform your idea into reality?',
      description:
        'I am available for new technical leadership opportunities, senior development roles, and specialized consulting.',
      form: {
        subject: 'New message from portfolio',
        title: 'Tell me about your project',
        text: 'Fill out the form and I will respond within 24 hours with a personalized proposal.',
        name: {
          label: 'Full Name',
          placeholder: 'Your name',
        },
        email: {
          label: 'Email',
          placeholder: 'Your email',
        },
        company: {
          label: 'Company/Organization',
          placeholder: 'Your company name',
        },
        phone: {
          label: 'Phone',
          placeholder: '+34 XXX XX XX XX',
        },
        projectType: {
          label: 'Project Type',
          placeholder: 'Select project type',
          options: {
            mobileApp: 'Mobile Application',
            webApp: 'Web Application',
            consulting: 'Technical Consulting',
            leadership: 'Technical Leadership',
            migration: 'Migration/Modernization',
            other: 'Other',
          },
        },
        budget: {
          label: 'Estimated Budget',
          placeholder: 'Select a range',
          options: {
            range1: '€5,000 - €15,000',
            range2: '€15,000 - €30,000',
            range3: '€30,000 - €50,000',
            range4: '€50,000+',
            undefined: 'To be defined',
          },
        },
        timeline: {
          label: 'Expected Timeline',
          placeholder: 'Select a timeline',
          options: {
            immediate: 'Immediate (&lt; 1 month)',
            range1: '1-3 months',
            range2: '3-6 months',
            range3: '6-12 months',
            flexible: 'Flexible',
          },
        },
        message: {
          label: 'Describe your project',
          placeholder:
            'Tell me about your project, objectives, main features, target users, technical context, etc.',
        },
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Error sending message. Please try again.',
        notice: 'I will respond within 24 hours',
      },
      expectation: {
        quickResponse: {
          title: 'Quick Response',
          text: 'I will respond within 24 hours with an initial proposal and some follow-up questions.',
        },
        collaborationOpportunity: {
          title: 'Collaboration Opportunity',
          text: 'I will assess whether your project is a good fit for my skills and current availability as a Tech Lead.',
        },
        actionPlan: {
          title: 'Clear Action Plan',
          text: 'You will receive a detailed plan outlining scope, technical approach, and collaboration terms.',
        },
      },

      tipSection: {
        title: 'Tip for Effective Contact',
        description:
          'Provide as much detail as possible about your project to receive a more accurate proposal.',
      },
      quickLinks: {
        label: 'Or connect directly:',
        email: 'Email',
        phone: 'Phone',
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
      info: {
        location: 'Spain (Remote/On-site)',
        availability: 'Available immediately',
        response: 'Response within 24h',
      },
    },

    // Footer
    footer: {
      position: 'Senior Flutter Developer & Tech Lead',
      tagline: 'Building the digital future, one app at a time',
      nav: {
        title: 'Navigation',
        home: 'Home',
        about: 'About',
        contact: 'Contact',
        skills: 'Skills',
        experience: 'Experience',
        projects: 'Projects',
      },
      tech: {
        title: 'Technologies',
        flutter: 'Flutter & Dart',
        firebase: 'Firebase & AWS',
        javascript: 'JavaScript & TypeScript',
        react: 'React & Node.js',
        ciCd: 'CI/CD & DevOps',
      },
      contact: {
        title: 'Contact',
        subtitle: 'Have a project in mind?',
        cta: "Let's Talk!",
        email: 'Email',
      },
      rights: 'All rights reserved.',
      madeWith: 'Made with',
      technologies: 'Astro, TypeScript and lots of ☕',
    },

    // SEO & Meta
    seo: {
      title:
        'Chrystian Michell | Tech Lead & Flutter Architect - Senior Developer Available',
      description:
        'Tech Lead & Flutter Architect specialized in cross-platform development. Over 5 years of experience, 10+ production apps in 11 countries. Available for technical leadership roles, CTO, Tech Lead and enterprise consulting projects.',
      keywords:
        'Flutter Developer, Dart Expert, Tech Lead, CTO, Software Architect, Senior Developer, Clean Architecture, BLoC Pattern, Cross-platform Development, Mobile Apps, Smart TV, OTT Platform, Technical Leadership, Technology Consulting, Remote Work, Hiring, Available for Hire, Head Hunter, Technical Recruitment',
    },

    // Language Selector
    language: {
      switchTo: 'Switch to',
      spanish: 'Español',
      english: 'English',
    },
  },
} as const;

export type Locale = keyof typeof translations;
export type TranslationKey = keyof (typeof translations)['es'];

// Type helper para autocompletado de claves de traducción
export type DeepKeyOf<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends object
          ? `${K}` | `${K}.${DeepKeyOf<T[K]>}`
          : `${K}`
        : never;
    }[keyof T]
  : never;

export type TranslationKeyPath = DeepKeyOf<(typeof translations)['es']>;
