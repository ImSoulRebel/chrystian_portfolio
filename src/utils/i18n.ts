import {
  translations,
  type Locale,
  type TranslationKeyPath,
} from '../config/translations';

// Importar helpers nativos de Astro para i18n
import { getRelativeLocaleUrl } from 'astro:i18n';

// Re-exportar tipos para facilitar el uso
export type { Locale } from '../config/translations';

// Re-exportar helpers de Astro para consistencia
export { getRelativeLocaleUrl } from 'astro:i18n';

// ===========================================
// HELPER FUNCIONS - DEPLOYMENT AGNÓSTICO
// ===========================================

/**
 * Obtiene el base path dinámicamente desde las variables de entorno
 * Esto permite que el código funcione en GitHub Pages (con base path) y Netlify (sin base path)
 * @returns El base path configurado o cadena vacía
 */
export function getBasePath(): string {
  return import.meta.env.PUBLIC_BASE_PATH || '';
}

/**
 * Obtiene la URL completa del sitio
 * @returns La URL base del sitio según la configuración
 */
export function getSiteUrl(): string {
  return import.meta.env.PUBLIC_SITE_URL || import.meta.env.SITE || '';
}

/**
 * Obtiene la plataforma de deployment actual
 * @returns El identificador de la plataforma (development, github, netlify)
 */
export function getDeploymentPlatform():
  | 'development'
  | 'github'
  | 'netlify'
  | 'production' {
  return (import.meta.env.PUBLIC_DEPLOYMENT_PLATFORM as any) || 'development';
}

// ===========================================
// TRANSLATION FUNCTIONS
// ===========================================

/**
 * Hook para obtener la función de traducción basada en el locale actual
 * @param locale - El locale actual ('es' | 'en')
 * @returns Función de traducción tipada
 */
export function useTranslations(locale: Locale) {
  return function t(key: TranslationKeyPath): string {
    const keys = key.split('.');
    let value: any = translations[locale];

    for (const k of keys) {
      value = value?.[k];
    }

    // Fallback al español si no existe la traducción
    if (value === undefined && locale !== 'es') {
      let fallbackValue: any = translations.es;
      for (const k of keys) {
        fallbackValue = fallbackValue?.[k];
      }
      return fallbackValue || key;
    }

    return value || key;
  };
}

/**
 * Obtiene el locale actual basado en la URL
 * @param url - La URL actual
 * @returns El locale detectado
 */
export function getLocaleFromUrl(url: URL): Locale {
  const pathname = url.pathname;

  // Detectar idioma basado en el prefijo de la URL
  if (pathname.startsWith('/en/') || pathname === '/en') {
    return 'en';
  }
  if (pathname.startsWith('/es/') || pathname === '/es') {
    return 'es';
  }

  // Por defecto, español (para URLs legacy o redirects)
  return 'es';
}

/**
 * Obtiene la ruta sin el prefijo de locale
 * @param pathname - La ruta actual
 * @returns La ruta sin prefijo de locale
 */
export function getPathnameWithoutLocale(pathname: string): string {
  // Remover prefijo /es o /en
  if (pathname.startsWith('/es/') || pathname.startsWith('/en/')) {
    return pathname.replace(/^\/(es|en)/, '') || '/';
  }
  if (pathname === '/es' || pathname === '/en') {
    return '/';
  }
  return pathname;
}

/**
 * Construye una URL para un locale específico (MÉTODO MEJORADO con helpers de Astro)
 * Esta función ahora utiliza getRelativeLocaleUrl de Astro que:
 * - Maneja automáticamente el base path
 * - Es agnóstica al hosting
 * - Funciona tanto en GitHub Pages como en Netlify
 *
 * @param pathname - La ruta base
 * @param targetLocale - El locale objetivo
 * @returns La URL completa para el locale objetivo con base path incluido
 */
export function getLocalizedPath(
  pathname: string,
  targetLocale: Locale
): string {
  // Limpiar el pathname de cualquier locale y base path existente
  const basePath = getBasePath();
  let cleanPath = pathname;

  // Remover base path si existe
  if (basePath && cleanPath.startsWith(basePath)) {
    cleanPath = cleanPath.slice(basePath.length);
  }

  // Remover prefijo de locale /es/ o /en/
  cleanPath = cleanPath.replace(/^\/(es|en)/, '') || '/';

  // Asegurar que el path comience con /
  if (!cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath;
  }

  // Remover la / inicial para pasarla a getRelativeLocaleUrl
  const pathForHelper = cleanPath === '/' ? '' : cleanPath.slice(1);

  // Usar el helper nativo de Astro que maneja base path automáticamente
  return getRelativeLocaleUrl(targetLocale, pathForHelper);
}

/**
 * Obtiene las traducciones para un componente específico
 * @param locale - El locale actual
 * @param component - El nombre del componente/sección
 * @returns Las traducciones del componente
 */
export function getComponentTranslations<
  T extends keyof (typeof translations)['es'],
>(locale: Locale, component: T) {
  return translations[locale][component];
}

/**
 * Obtiene el locale alternativo
 * @param currentLocale - El locale actual
 * @returns El locale alternativo
 */
export function getAlternateLocale(currentLocale: Locale): Locale {
  return currentLocale === 'es' ? 'en' : 'es';
}

/**
 * Detecta el locale preferido del navegador
 * @param acceptLanguage - Header Accept-Language del navegador
 * @returns El locale más apropiado basado en las preferencias del usuario
 */
export function detectBrowserLocale(acceptLanguage?: string): Locale {
  if (!acceptLanguage) return 'es';

  const languages = acceptLanguage
    .split(',')
    .map((lang) => lang?.split(';')[0]?.trim().toLowerCase())
    .filter(Boolean);

  // Buscar coincidencias exactas primero
  for (const lang of languages) {
    if (lang === 'es' || lang === 'es-es') return 'es';
    if (lang === 'en' || lang === 'en-us' || lang === 'en-gb') return 'en';
  }

  // Buscar coincidencias parciales
  for (const lang of languages) {
    if (lang?.startsWith('es')) return 'es';
    if (lang?.startsWith('en')) return 'en';
  }

  // Fallback a español
  return 'es';
}

/**
 * Formatea números basado en el locale
 * @param number - El número a formatear
 * @param locale - El locale para el formateo
 * @returns El número formateado
 */
export function formatNumber(number: number, locale: Locale): string {
  const localeMap = {
    es: 'es-ES',
    en: 'en-US',
  };

  return new Intl.NumberFormat(localeMap[locale]).format(number);
}

/**
 * Formatea fechas basado en el locale
 * @param date - La fecha a formatear
 * @param locale - El locale para el formateo
 * @param options - Opciones de formato
 * @returns La fecha formateada
 */
export function formatDate(
  date: Date,
  locale: Locale,
  options?: Intl.DateTimeFormatOptions
): string {
  const localeMap = {
    es: 'es-ES',
    en: 'en-US',
  };

  return new Intl.DateTimeFormat(localeMap[locale], options).format(date);
}

/**
 * Obtiene las URLs hreflang para SEO
 * Construye las URLs absolutas usando el site URL (que ya incluye el base path) + locale + path
 *
 * @param currentPath - La ruta actual (puede incluir base path y locale)
 * @returns Objeto con las URLs absolutas para cada locale
 */
export function getHreflangUrls(currentPath: string) {
  const basePath = getBasePath();
  const siteUrl = getSiteUrl();

  // Limpiar el path: remover base path y locale
  let cleanPath = currentPath;
  
  // Primero remover el base path si existe
  if (basePath && cleanPath.startsWith(basePath)) {
    cleanPath = cleanPath.slice(basePath.length);
  }
  
  // Luego remover el prefijo de locale /es/ o /en/
  cleanPath = cleanPath.replace(/^\/(es|en)/, '') || '/';
  
  // Asegurar que el path comience con /
  if (!cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath;
  }

  // Construir URLs completas
  // siteUrl ya incluye el base path (ej: https://imsoulrebel.github.io/chrystian_portfolio)
  // solo necesitamos añadir: /locale/path
  const buildUrl = (locale: Locale) => {
    // Asegurar que siteUrl no termine con /
    const site = siteUrl.replace(/\/$/, '');
    
    // Construir path: /locale + cleanPath
    let fullPath = `/${locale}`;
    if (cleanPath !== '/') {
      fullPath += cleanPath.endsWith('/') 
        ? `/${cleanPath.replace(/^\//, '')}`.replace(/\/$/, '') + '/'
        : `/${cleanPath.replace(/^\//, '')}`;
    } else {
      fullPath += '/';
    }
    
    return `${site}${fullPath}`;
  };

  return {
    es: buildUrl('es'),
    en: buildUrl('en'),
    'x-default': buildUrl('es'), // Español como predeterminado
  };
}
