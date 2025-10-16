import type { FooterTranslations } from './types';

export const footer: Record<'es' | 'en', FooterTranslations> = {
  es: {
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
  en: {
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
} as const;
