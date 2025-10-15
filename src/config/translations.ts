export const translations = {
  es: {
    // General
    welcome: 'Bienvenido a mi portfolio',
    and: 'y',

    // Navegación
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      skills: 'Habilidades',
      experience: 'Experiencia',
      projects: 'Proyectos',
      contact: 'Contacto',
    },

    // Error 404 Page
    error404: {
      title: '404 - Página No Encontrada | Chrystian Michell',
      description:
        'La página que buscas no existe. Vuelve al portfolio de Chrystian Michell.',
      heading: '404',
      subheading: 'Página No Encontrada',
      message: 'La página que buscas no existe o ha sido movida.',
      suggestion: 'Quizás lo que buscas está en alguna de estas páginas:',
      homeButton: 'Volver al Inicio',
      contactButton: 'Contactar',
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
      description3:
        ' Me apasiona <strong>traducir complejidad en claridad</strong>: crear arquitecturas escalables, establecer procesos que funcionen, y desarrollar equipos que crezcan. Creo firmemente que la mejor tecnología es la que resuelve problemas de negocio de forma sostenible.',
      stats: {
        apps: {
          label: 'Apps en Producción',
          value: '10+',
        },
        experience: {
          label: 'Años de Experiencia',
          value: '5+',
        },
        users: {
          label: 'Usuarios Impactados',
          value: '50K+',
        },
        countries: {
          label: 'Países Desplegados',
          value: '11',
        },
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

    // Experience Section
    experience: {
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

    // Projects Section
    projects: {
      title: 'Proyectos Destacados',
      viewDemo: 'Ver Demo',
      viewCode: 'Ver Código',
      viewMore: 'Ver Más Proyectos',
      featured: 'Destacado',
      seo: {
        title:
          'Proyectos | Chrystian Michell - Portfolio de Desarrollo Flutter',
        description:
          'Explora los proyectos destacados de Chrystian Michell: aplicaciones Flutter multiplataforma, plataformas OTT, Smart TV apps y soluciones móviles innovadoras desplegadas en múltiples países.',
      },
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
      seo: {
        title: 'Contacto | Chrystian Michell - Tech Lead & Arquitecto Flutter',
        description:
          'Contacta con Chrystian Michell para oportunidades de liderazgo técnico, proyectos de desarrollo Flutter y servicios de consultoría especializada. Disponible para contratación inmediata.',
      },
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

    // Structured Data (Schema.org)
    structuredData: {
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

    // Recruiter Meta Tags
    recruiterMeta: {
      hiringStatus: 'available',
      workAuthorization: 'EU citizen',
      salaryExpectation: 'competitive',
      noticePeriod: 'immediate to 2 weeks',
      preferredRole: 'Tech Lead, CTO, Senior Flutter Developer',
      teamSizeManaged: '2-15 developers',
      yearsExperience: '5+',
      specialization: 'Flutter, Mobile Architecture, Technical Leadership',
    },

    // Language Selector
    language: {
      switchTo: 'Cambiar a',
      spanish: 'Español',
      english: 'English',
    },
  },

  en: {
    // General
    welcome: 'Welcome to my portfolio',
    and: 'and',

    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },

    // Error 404 Page
    error404: {
      title: '404 - Page Not Found | Chrystian Michell',
      description:
        "The page you're looking for doesn't exist. Return to Chrystian Michell's portfolio homepage.",
      heading: '404',
      subheading: 'Page Not Found',
      message: "The page you're looking for doesn't exist or has been moved.",
      suggestion: 'Maybe what you are looking for is on one of these pages:',
      homeButton: 'Back to Home',
      contactButton: 'Contact Me',
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

      description3:
        ' I am passionate about <strong>translating complexity into clarity</strong>: creating scalable architectures, establishing processes that work, and developing teams that grow. I firmly believe that the best technology is the one that solves business problems sustainably.',
      stats: {
        apps: { label: 'Apps in Production', value: '10+' },
        experience: { label: 'Years of Experience', value: '5+' },
        users: { label: 'Users Impacted', value: '50K+' },
        countries: { label: 'Countries Deployed', value: '11' },
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

    // Experience Section
    experience: {
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

    // Projects Section
    projects: {
      title: 'Featured Projects',
      viewDemo: 'View Demo',
      viewCode: 'View Code',
      viewMore: 'View More Projects',
      featured: 'Featured',
      seo: {
        title: 'Projects | Chrystian Michell - Flutter Development Portfolio',
        description:
          "Explore Chrystian Michell's featured projects: cross-platform Flutter applications, OTT platforms, Smart TV apps, and innovative mobile solutions deployed across multiple countries.",
      },
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
      seo: {
        title: 'Contact | Chrystian Michell - Tech Lead & Flutter Architect',
        description:
          'Contact Chrystian Michell for technical leadership opportunities, Flutter development projects, and specialized consulting services. Available for immediate hire.',
      },
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

    // Structured Data (Schema.org)
    structuredData: {
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

    // Recruiter Meta Tags
    recruiterMeta: {
      hiringStatus: 'available',
      workAuthorization: 'EU citizen',
      salaryExpectation: 'competitive',
      noticePeriod: 'immediate to 2 weeks',
      preferredRole: 'Tech Lead, CTO, Senior Flutter Developer',
      teamSizeManaged: '2-15 developers',
      yearsExperience: '5+',
      specialization: 'Flutter, Mobile Architecture, Technical Leadership',
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
