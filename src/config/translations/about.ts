import type { AboutTranslations } from './types';

export const about: Record<'es' | 'en', AboutTranslations> = {
  es: {
    title: 'Sobre mí',
    description1:
      'Soy un <strong>Desarrollador Flutter Senior</strong> con experiencia en proyectos <strong>multiplataforma</strong> (iOS, Android, Web y SmartTV). Me especializo en <strong>arquitectura limpia</strong>, <strong>optimización de rendimiento</strong> y <strong>diseño pixel-perfect</strong>. He liderado equipos técnicos y gestionado el ciclo de vida completo de productos, desde la idea hasta la producción.',
    description2:
      'Mi enfoque siempre está en <strong>calidad, escalabilidad y experiencia de usuario</strong>. También tengo experiencia en <strong>desarrollo web full‑stack</strong>, aplicando frameworks modernos y patrones avanzados. Mi experiencia previa de más de 10 años en retail de tecnología me aporta una perspectiva única: entiendo tanto la complejidad técnica como las necesidades reales del usuario final y los objetivos de negocio.',
    description3:
      'Me apasiona <strong>traducir complejidad en claridad</strong>: crear arquitecturas escalables, establecer procesos que funcionen, y desarrollar equipos que crezcan. Creo firmemente que la mejor tecnología es la que resuelve problemas de negocio de forma sostenible. <em>"La calidad es un pilar de mi trabajo"</em>.',
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
  en: {
    title: 'About Me',
    description1:
      'I am a <strong>Senior Flutter Developer</strong> with experience in <strong>cross-platform</strong> projects (iOS, Android, Web, and SmartTV). I specialize in <strong>clean architecture</strong>, <strong>performance optimization</strong>, and <strong>pixel-perfect design</strong>. I have led technical teams and managed the complete product lifecycle, from idea to production.',
    description2:
      'My focus is always on <strong>quality, scalability, and user experience</strong>. I also have experience in <strong>full-stack web development</strong>, applying modern frameworks and advanced patterns. My previous experience of over 10 years in technology retail gives me a unique perspective: I understand both technical complexity and real end-user needs as well as business objectives.',
    description3:
      'I am passionate about <strong>translating complexity into clarity</strong>: creating scalable architectures, establishing processes that work, and developing teams that grow. I firmly believe that the best technology is the one that solves business problems sustainably. <em>"Quality is a pillar of my work"</em>.',
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
} as const;
