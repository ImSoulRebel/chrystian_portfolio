/**
 * Skills Manager - Utilidades para gestión de habilidades con Content Collections
 *
 * Proporciona funciones especializadas para trabajar con la colección de skills:
 * - Filtrado por categoría, nivel y estado
 * - Ordenamiento por prioridad y años de experiencia
 * - Caché para optimización de performance
 * - Mapeo de iconos con fallback automático
 */

import { getCollection } from 'astro:content';
import type { SkillData } from '@content/config';
import { projectPlaceholder } from '@assets';

// ===========================================
// TYPES
// ===========================================

/**
 * Tipo para skill procesado con icono resuelto
 */
export interface ProcessedSkill extends SkillData {
  iconUrl: string;
}

/**
 * Categorías disponibles para skills
 */
export type SkillCategory =
  | 'mobile'
  | 'frontend'
  | 'backend'
  | 'devops'
  | 'leadership'
  | 'tools';

/**
 * Niveles de experiencia disponibles
 */
export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

/**
 * Estado de la skill
 */
export type SkillStatus = 'active' | 'archived' | 'learning';

// ===========================================
// ICON MAPPING
// ===========================================

/**
 * Mapeo dinámico de iconos usando import.meta.glob
 * Esto permite cargar automáticamente todos los iconos disponibles
 */
const skillIcons = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/logos/*.svg',
  {
    eager: true,
  }
);

/**
 * Mapeo de iconos genéricos para skills que no tienen logo específico
 */
const genericIconMap: Record<string, string> = {
  code: '/src/assets/logos/clean_architecture_logo.svg',
  api: '/src/assets/logos/websocket_logo.svg',
  css: '/src/assets/logos/astro_logo.svg',
  web: '/src/assets/logos/astro_logo.svg',
  database: '/src/assets/logos/firebase_logo.svg',
  storage: '/src/assets/logos/firebase_logo.svg',
  security: '/src/assets/logos/docker_logo.svg',
  monitoring: '/src/assets/logos/docker_logo.svg',
  video: '/src/assets/logos/javascript_logo.svg',
  leadership: '/src/assets/logos/react_logo.svg',
  team: '/src/assets/logos/react_logo.svg',
  cloud: '/src/assets/logos/aws_logo.svg',
};

/**
 * Obtiene la URL del icono para una skill
 * @param iconName - Nombre del icono (ej: 'flutter', 'react', 'code')
 * @returns URL del icono o placeholder si no existe
 */
export function getSkillIcon(iconName: string): string {
  try {
    // Buscar icono específico primero (ej: flutter_logo.svg)
    const specificIconPath = `/src/assets/logos/${iconName}_logo.svg`;
    if (skillIcons[specificIconPath]) {
      return skillIcons[specificIconPath].default.src;
    }

    // Buscar icono directo (ej: flutter.svg)
    const directIconPath = `/src/assets/logos/${iconName}.svg`;
    if (skillIcons[directIconPath]) {
      return skillIcons[directIconPath].default.src;
    }

    // Buscar en mapeo genérico
    const genericIconPath = genericIconMap[iconName];
    if (genericIconPath && skillIcons[genericIconPath]) {
      return skillIcons[genericIconPath].default.src;
    }

    // Fallback a placeholder
    return projectPlaceholder.src;
  } catch (error) {
    console.warn(`Could not load icon for skill: ${iconName}`, error);
    return projectPlaceholder.src;
  }
}

// ===========================================
// CORE FUNCTIONS
// ===========================================

/**
 * Caché para skills procesados
 */
const skillsCache = new Map<string, ProcessedSkill[]>();

/**
 * Obtiene todas las skills y las procesa con iconos
 * @returns Array de skills procesadas con iconos
 */
export async function getAllSkills(): Promise<ProcessedSkill[]> {
  const cacheKey = 'all-skills';

  if (skillsCache.has(cacheKey)) {
    return skillsCache.get(cacheKey)!;
  }

  try {
    const skills = await getCollection('skills');

    const processedSkills: ProcessedSkill[] = skills.map((skillEntry) => ({
      ...skillEntry.data,
      iconUrl: getSkillIcon(skillEntry.data.icon),
    }));

    // Ordenar por prioridad y luego por años de experiencia
    processedSkills.sort((a, b) => {
      if (a.priority !== b.priority) {
        return a.priority - b.priority;
      }
      return b.years - a.years;
    });

    skillsCache.set(cacheKey, processedSkills);
    return processedSkills;
  } catch (error) {
    console.error('Error loading skills:', error);
    return [];
  }
}

/**
 * Obtiene skills filtradas por categoría
 * @param category - Categoría de skills a filtrar
 * @returns Array de skills de la categoría especificada
 */
export async function getSkillsByCategory(
  category: SkillCategory
): Promise<ProcessedSkill[]> {
  const cacheKey = `skills-${category}`;

  if (skillsCache.has(cacheKey)) {
    return skillsCache.get(cacheKey)!;
  }

  const allSkills = await getAllSkills();
  const categorySkills = allSkills.filter(
    (skill) => skill.category === category && skill.status === 'active'
  );

  skillsCache.set(cacheKey, categorySkills);
  return categorySkills;
}

/**
 * Obtiene skills destacadas (featured)
 * @returns Array de skills destacadas
 */
export async function getFeaturedSkills(): Promise<ProcessedSkill[]> {
  const cacheKey = 'featured-skills';

  if (skillsCache.has(cacheKey)) {
    return skillsCache.get(cacheKey)!;
  }

  const allSkills = await getAllSkills();
  const featuredSkills = allSkills.filter(
    (skill) => skill.featured && skill.status === 'active'
  );

  skillsCache.set(cacheKey, featuredSkills);
  return featuredSkills;
}

/**
 * Obtiene skills por nivel de experiencia
 * @param level - Nivel de experiencia
 * @returns Array de skills del nivel especificado
 */
export async function getSkillsByLevel(
  level: SkillLevel
): Promise<ProcessedSkill[]> {
  const cacheKey = `skills-level-${level}`;

  if (skillsCache.has(cacheKey)) {
    return skillsCache.get(cacheKey)!;
  }

  const allSkills = await getAllSkills();
  const levelSkills = allSkills.filter(
    (skill) => skill.level === level && skill.status === 'active'
  );

  skillsCache.set(cacheKey, levelSkills);
  return levelSkills;
}

/**
 * Busca skills por nombre o descripción
 * @param query - Término de búsqueda
 * @param locale - Idioma para búsqueda en descripción ('es' | 'en')
 * @returns Array de skills que coinciden con la búsqueda
 */
export async function searchSkills(
  query: string,
  locale: 'es' | 'en' = 'es'
): Promise<ProcessedSkill[]> {
  const allSkills = await getAllSkills();
  const searchTerm = query.toLowerCase();

  return allSkills.filter((skill) => {
    const nameMatch = skill.name.toLowerCase().includes(searchTerm);
    const descriptionMatch =
      skill.description?.[locale]?.toLowerCase().includes(searchTerm) || false;

    return (nameMatch || descriptionMatch) && skill.status === 'active';
  });
}

/**
 * Obtiene estadísticas de skills
 * @returns Objeto con estadísticas generales
 */
export async function getSkillsStats(): Promise<{
  total: number;
  byCategory: Record<SkillCategory, number>;
  byLevel: Record<SkillLevel, number>;
  featured: number;
  averageYears: number;
}> {
  const allSkills = await getAllSkills();
  const activeSkills = allSkills.filter((skill) => skill.status === 'active');

  const byCategory = activeSkills.reduce(
    (acc, skill) => {
      acc[skill.category] = (acc[skill.category] || 0) + 1;
      return acc;
    },
    {} as Record<SkillCategory, number>
  );

  const byLevel = activeSkills.reduce(
    (acc, skill) => {
      acc[skill.level] = (acc[skill.level] || 0) + 1;
      return acc;
    },
    {} as Record<SkillLevel, number>
  );

  const totalYears = activeSkills.reduce((sum, skill) => sum + skill.years, 0);
  const averageYears =
    activeSkills.length > 0 ? totalYears / activeSkills.length : 0;

  return {
    total: activeSkills.length,
    byCategory,
    byLevel,
    featured: activeSkills.filter((skill) => skill.featured).length,
    averageYears: Math.round(averageYears * 10) / 10, // Redondear a 1 decimal
  };
}

/**
 * Limpia el caché de skills (útil para desarrollo)
 */
export function clearSkillsCache(): void {
  skillsCache.clear();
}

// ===========================================
// EXPORTS
// ===========================================

export default {
  getAllSkills,
  getSkillsByCategory,
  getFeaturedSkills,
  getSkillsByLevel,
  searchSkills,
  getSkillsStats,
  getSkillIcon,
  clearSkillsCache,
};
