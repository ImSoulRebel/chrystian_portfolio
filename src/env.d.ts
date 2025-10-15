/// <reference types="astro/client" />

// ===========================================
// DECLARACIONES DE MÓDULOS ASTRO
// ===========================================

declare module '*.astro' {
  const component: any;
  export default component;
}

// ===========================================
// TIPOS PARA VARIABLES DE ENTORNO
// ===========================================

interface ImportMetaEnv {
  // CONFIGURACIÓN DEL SITIO (Públicas)
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_BASE_DOMAIN: string;
  readonly PUBLIC_SITE_TITLE: string;
  readonly PUBLIC_SITE_DESCRIPTION: string;

  // INFORMACIÓN PERSONAL (Públicas)
  readonly PUBLIC_AUTHOR_NAME: string;
  readonly PUBLIC_AUTHOR_GIVEN_NAME?: string;
  readonly PUBLIC_AUTHOR_FAMILY_NAME?: string;
  readonly PUBLIC_CONTACT_EMAIL: string;
  readonly PUBLIC_CONTACT_PHONE?: string;
  readonly PUBLIC_CONTACT_ADDRESS?: string;
  readonly PUBLIC_GITHUB_USERNAME?: string;
  readonly PUBLIC_GITHUB_URL?: string;
  readonly PUBLIC_LINKEDIN_URL?: string;
  readonly PUBLIC_LINKEDIN_USERNAME?: string;
  readonly PUBLIC_TWITTER_URL?: string;
  readonly PUBLIC_TWITTER_HANDLE?: string;
  readonly PUBLIC_INSTAGRAM_URL?: string;

  // PERFIL Y MEDIA (Públicas)
  readonly PUBLIC_PROFILE_IMAGE?: string;
  readonly PUBLIC_PROFILE_IMAGE_WIDTH?: number;
  readonly PUBLIC_PROFILE_IMAGE_HEIGHT?: number;
  readonly PUBLIC_OG_IMAGE?: string;
  readonly PUBLIC_OG_IMAGE_WIDTH?: number;
  readonly PUBLIC_OG_IMAGE_HEIGHT?: number;
  // SERVICIOS EXTERNOS (Solo disponibles en servidor)
  readonly PUBLIC_FORMSPREE_ENDPOINT?: string;

  // CONFIGURACIÓN DE DESARROLLO
  readonly PUBLIC_DEV_PORT: number;
  readonly PUBLIC_DEBUG_MODE: boolean;

  // CONFIGURACIÓN DE PRODUCCIÓN (Públicas)
  readonly PUBLIC_SITE_VERSION: string;

  // REDES SOCIALES (Públicas)
  readonly PUBLIC_TWITTER_HANDLE?: string;
  readonly PUBLIC_INSTAGRAM_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// ===========================================
// TIPOS PARA CONFIGURACIÓN DEL SITIO
// ===========================================

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  baseDomain: string;
  version: string;
  author: {
    name: string;
    email: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
  contact: {
    email: string;
  };
  development: {
    port: number;
    debug: boolean;
  };
}

// ===========================================
// CONFIGURACIÓN DE TIPOS GLOBALES
// ===========================================

declare global {
  namespace App {
    // Tipos para locals de Astro (middleware)
    interface Locals {
      currentLanguage?: 'es' | 'en';
      isProduction?: boolean;
    }

    // Tipos para parámetros de página
    interface PageData {
      url: URL;
      params: Record<string, string>;
    }
  }
}

export {};
