import type { AboutTranslations } from './types';

export const about: Record<'es' | 'en', AboutTranslations> = {
  es: {
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
  en: {
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
} as const;
