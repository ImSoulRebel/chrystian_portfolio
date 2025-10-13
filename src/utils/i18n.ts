import {
  translations,
  type Locale,
  type TranslationKeyPath,
} from "../config/translations";

// Re-exportar tipos para facilitar el uso
export type { Locale } from "../config/translations";

/**
 * Hook para obtener la función de traducción basada en el locale actual
 * @param locale - El locale actual ('es' | 'en')
 * @returns Función de traducción tipada
 */
export function useTranslations(locale: Locale) {
  return function t(key: TranslationKeyPath): string {
    const keys = key.split(".");
    let value: any = translations[locale];

    for (const k of keys) {
      value = value?.[k];
    }

    // Fallback al español si no existe la traducción
    if (value === undefined && locale !== "es") {
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
  if (pathname.startsWith("/en/") || pathname === "/en") {
    return "en";
  }
  if (pathname.startsWith("/es/") || pathname === "/es") {
    return "es";
  }

  // Por defecto, español (para URLs legacy o redirects)
  return "es";
}

/**
 * Obtiene la ruta sin el prefijo de locale
 * @param pathname - La ruta actual
 * @returns La ruta sin prefijo de locale
 */
export function getPathnameWithoutLocale(pathname: string): string {
  // Remover prefijo /es o /en
  if (pathname.startsWith("/es/") || pathname.startsWith("/en/")) {
    return pathname.replace(/^\/(es|en)/, "") || "/";
  }
  if (pathname === "/es" || pathname === "/en") {
    return "/";
  }
  return pathname;
}

/**
 * Construye una URL para un locale específico
 * @param pathname - La ruta base
 * @param targetLocale - El locale objetivo
 * @returns La URL completa para el locale objetivo
 */
export function getLocalizedPath(
  pathname: string,
  targetLocale: Locale,
): string {
  // Remover cualquier prefijo de locale existente
  const cleanPath = pathname.replace(/^\/(es|en)/, "") || "/";

  // Agregar el prefijo correspondiente
  if (targetLocale === "en") {
    return `/en${cleanPath === "/" ? "" : cleanPath}`;
  } else {
    return `/es${cleanPath === "/" ? "" : cleanPath}`;
  }
}

/**
 * Obtiene las traducciones para un componente específico
 * @param locale - El locale actual
 * @param component - El nombre del componente/sección
 * @returns Las traducciones del componente
 */
export function getComponentTranslations<
  T extends keyof (typeof translations)["es"],
>(locale: Locale, component: T) {
  return translations[locale][component];
}

/**
 * Obtiene el locale alternativo
 * @param currentLocale - El locale actual
 * @returns El locale alternativo
 */
export function getAlternateLocale(currentLocale: Locale): Locale {
  return currentLocale === "es" ? "en" : "es";
}

/**
 * Detecta el locale preferido del navegador
 * @param acceptLanguage - Header Accept-Language del navegador
 * @returns El locale más apropiado basado en las preferencias del usuario
 */
export function detectBrowserLocale(acceptLanguage?: string): Locale {
  if (!acceptLanguage) return "es";

  const languages = acceptLanguage
    .split(",")
    .map((lang) => lang?.split(";")[0]?.trim().toLowerCase())
    .filter(Boolean);

  // Buscar coincidencias exactas primero
  for (const lang of languages) {
    if (lang === "es" || lang === "es-es") return "es";
    if (lang === "en" || lang === "en-us" || lang === "en-gb") return "en";
  }

  // Buscar coincidencias parciales
  for (const lang of languages) {
    if (lang?.startsWith("es")) return "es";
    if (lang?.startsWith("en")) return "en";
  }

  // Fallback a español
  return "es";
}

/**
 * Formatea números basado en el locale
 * @param number - El número a formatear
 * @param locale - El locale para el formateo
 * @returns El número formateado
 */
export function formatNumber(number: number, locale: Locale): string {
  const localeMap = {
    es: "es-ES",
    en: "en-US",
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
  options?: Intl.DateTimeFormatOptions,
): string {
  const localeMap = {
    es: "es-ES",
    en: "en-US",
  };

  return new Intl.DateTimeFormat(localeMap[locale], options).format(date);
}

/**
 * Obtiene las URLs hreflang para SEO
 * @param currentPath - La ruta actual sin locale
 * @param baseUrl - La URL base del sitio
 * @returns Objeto con las URLs para cada locale
 */
export function getHreflangUrls(currentPath: string, baseUrl: string) {
  const cleanPath = currentPath.replace(/^\/(es|en)/, "") || "/";

  return {
    es: `${baseUrl}/es${cleanPath === "/" ? "" : cleanPath}`,
    en: `${baseUrl}/en${cleanPath === "/" ? "" : cleanPath}`,
    "x-default": `${baseUrl}/es${cleanPath === "/" ? "" : cleanPath}`, // Español como predeterminado
  };
}
