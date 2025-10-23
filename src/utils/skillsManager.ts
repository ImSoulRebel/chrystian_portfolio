import { useTranslations, type Locale } from '@utils/i18n';
export async function getTranslatedSkills(locale: Locale = 'es') {
  const t = useTranslations(locale);
  const allSkills = await getAllSkills();
  return allSkills.map((s) => ({
    ...s,
    name: t(`skills.list.${s.id}.name` as any) || s.id,
    description: t(`skills.list.${s.id}.description` as any) || '',
  }));
}

import { getCollection } from 'astro:content';
import type { SkillData } from '@content/config';
import { projectPlaceholder } from '@assets';

export interface ProcessedSkill extends SkillData {
  iconUrl: string;
}
export type SkillCategory =
  | 'mobile'
  | 'frontend'
  | 'backend'
  | 'devops'
  | 'leadership'
  | 'tools';
export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';
export type SkillStatus = 'active' | 'archived' | 'learning';

const skillIcons = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/logos/*.svg',
  { eager: true }
);
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

const skillsCache = new Map<string, ProcessedSkill[]>();

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

export async function searchSkills(
  query: string,
  locale: 'es' | 'en' = 'es'
): Promise<ProcessedSkill[]> {
  const allSkills = await getAllSkills();
  const searchTerm = query.toLowerCase();
  return allSkills.filter((skill) => {
    const nameMatch =
      typeof skill.name === 'string' &&
      skill.name.toLowerCase().includes(searchTerm);
    let descriptionMatch = false;
    const desc: unknown = skill.description;
    if (typeof desc === 'string') {
      descriptionMatch = desc.toLowerCase().includes(searchTerm);
    } else if (
      desc &&
      typeof desc === 'object' &&
      desc !== null &&
      typeof (desc as Record<string, unknown>)[locale] === 'string'
    ) {
      const localizedDesc = (desc as Record<string, string>)[locale];
      if (localizedDesc) {
        descriptionMatch = localizedDesc.toLowerCase().includes(searchTerm);
      }
    }
    return (nameMatch || descriptionMatch) && skill.status === 'active';
  });
}

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

export function clearSkillsCache(): void {
  skillsCache.clear();
}

export async function getSkillsWithUrls(): Promise<ProcessedSkill[]> {
  const allSkills = await getAllSkills();
  return allSkills.filter((skill) => skill.url);
}

export async function getSkillUrl(skillId: string): Promise<string | null> {
  const allSkills = await getAllSkills();
  const skill = allSkills.find((s) => s.id === skillId);
  return skill?.url || null;
}

export function getSkillIcon(iconName?: string, fallback?: string): string {
  if (!iconName || iconName.trim() === '') {
    return fallback || projectPlaceholder.src;
  }
  const patterns = [
    `/src/assets/logos/${iconName}_logo.svg`,
    `/src/assets/logos/${iconName}.svg`,
    genericIconMap[iconName],
  ];
  for (const path of patterns) {
    if (path && skillIcons[path]) {
      return skillIcons[path].default.src;
    }
  }
  return fallback || projectPlaceholder.src;
}

export function filterAndSortSkills(
  skills: SkillData[],
  options?: {
    category?: SkillCategory;
    level?: SkillLevel;
    status?: SkillStatus;
    featured?: boolean;
    orderBy?: keyof SkillData;
    orderDir?: 'asc' | 'desc';
  }
): SkillData[] {
  let result = [...skills];
  if (options?.category)
    result = result.filter((s) => s.category === options.category);
  if (options?.level) result = result.filter((s) => s.level === options.level);
  if (options?.status)
    result = result.filter((s) => s.status === options.status);
  if (options?.featured !== undefined)
    result = result.filter((s) => !!s.featured === options.featured);
  if (options?.orderBy) {
    result.sort((a, b) => {
      const dir = options.orderDir === 'desc' ? -1 : 1;
      const aVal = a[options.orderBy!];
      const bVal = b[options.orderBy!];
      if (aVal == null && bVal == null) return 0;
      if (aVal == null) return 1;
      if (bVal == null) return -1;
      if (aVal < bVal) return -1 * dir;
      if (aVal > bVal) return 1 * dir;
      return 0;
    });
  }
  return result;
}

// Exportar agrupado para importación moderna
export default {
  getAllSkills,
  getSkillsByCategory,
  getFeaturedSkills,
  getSkillsByLevel,
  searchSkills,
  getSkillsStats,
  getSkillIcon,
  clearSkillsCache,
  getSkillsWithUrls,
  getSkillUrl,
  filterAndSortSkills,
  getTranslatedSkills,
};
