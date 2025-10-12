// ===========================================
// CONFIGURACIÓN DEL SITIO CON VARIABLES DE ENTORNO
// ===========================================
// Importamos variables de entorno públicas (astro:env/client)
import {
  PUBLIC_SITE_URL,
  PUBLIC_SITE_TITLE,
  PUBLIC_SITE_DESCRIPTION,
  PUBLIC_AUTHOR_NAME,
  PUBLIC_CONTACT_EMAIL,
  PUBLIC_CONTACT_PHONE,
  PUBLIC_CONTACT_ADDRESS,
  PUBLIC_GITHUB_USERNAME,
  PUBLIC_LINKEDIN_URL,
  PUBLIC_TWITTER_HANDLE,
  PUBLIC_INSTAGRAM_URL,
  PUBLIC_SITE_VERSION,
  PUBLIC_DEBUG_MODE,
} from 'astro:env/client';

export const SITE_CONFIG = {
  // Información básica del sitio
  title: PUBLIC_SITE_TITLE,
  description: PUBLIC_SITE_DESCRIPTION,
  author: PUBLIC_AUTHOR_NAME,

  // URLs y dominios
  url: PUBLIC_SITE_URL,

  // Información técnica
  version: PUBLIC_SITE_VERSION,
  locale: 'es-ES',
  image: '/og-image.jpg',

  // Configuración de desarrollo
  debug: PUBLIC_DEBUG_MODE || false,

  // SEO Keywords
  keywords:
    'Flutter Developer, Dart, Tech Lead, Clean Architecture, BLoC Pattern, Desarrollo Multiplataforma, Apps Móviles, Smart TV, OTT Platform, Liderazgo Técnico',

  // Información de contacto
  contact: {
    email: PUBLIC_CONTACT_EMAIL,
    phone: PUBLIC_CONTACT_PHONE || '+34 653 31 69 44',
    location: PUBLIC_CONTACT_ADDRESS || 'Aranjuez, Madrid, España',
  },

  // Redes sociales (usando variables de entorno cuando estén disponibles)
  social: {
    twitter: PUBLIC_TWITTER_HANDLE,
    linkedin: PUBLIC_LINKEDIN_URL,
    github: `https://github.com/${PUBLIC_GITHUB_USERNAME}`,
    instagram: PUBLIC_INSTAGRAM_URL || null,
  },

  // Enlaces sociales para compartir
  socialLinks: {
    twitter: PUBLIC_TWITTER_HANDLE,
    linkedin: PUBLIC_LINKEDIN_URL,
    github: PUBLIC_GITHUB_USERNAME,
    email: PUBLIC_CONTACT_EMAIL,
  },
};

// ===========================================
// CONFIGURACIÓN DERIVADA
// ===========================================

// Helper para obtener URL completa de assets
export const getAssetUrl = (path) => {
  const baseUrl = PUBLIC_SITE_URL || '';
  return `${baseUrl}${path.startsWith('/') ? '' : '/'}${path}`;
};

// Helper para debug logging
export const debugLog = (message, data = null) => {
  if (PUBLIC_DEBUG_MODE) {
    console.log(`[SITE_CONFIG] ${message}`, data || '');
  }
};

// Configuración para diferentes entornos
export const ENV_CONFIG = {
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
  mode: import.meta.env.MODE,
  siteUrl: PUBLIC_SITE_URL,
  debug: PUBLIC_DEBUG_MODE,
};
