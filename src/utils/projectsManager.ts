import { getCollection, type CollectionEntry } from 'astro:content';
import { projectPlaceholder } from '@assets';

// Tipos para el proyecto procesado
export interface ProcessedProject {
  id: string;
  title: string;
  description: string;
  impact: string;
  stack: string[];
  category: 'business' | 'personal';
  featured: boolean;
  priority: number;
  liveUrl?: string | undefined;
  githubUrl?: string | undefined;
  image: any; // ImageMetadata from assets
  tags: string[];
  status: 'active' | 'archived' | 'draft';
  createdAt: string;
  updatedAt: string;
}

// Cache de imágenes cargadas dinámicamente
const imageCache = new Map<string, any>();

// Dynamic imports para todas las imágenes de proyectos
const projectImages = import.meta.glob<{ default: any }>(
  '/src/assets/projects/*.{png,jpg,jpeg,svg,webp}',
  {
    eager: false,
  }
);

/**
 * Obtiene la imagen de un proyecto con fallback automático a placeholder
 */
export async function getProjectImage(imagePath?: string): Promise<any> {
  // Si no hay imagen especificada, usar placeholder
  if (!imagePath) {
    return projectPlaceholder;
  }

  // Verificar cache primero
  if (imageCache.has(imagePath)) {
    return imageCache.get(imagePath)!;
  }

  // Construir ruta completa
  const fullPath = `/src/assets/projects/${imagePath}`;
  const imageImporter = projectImages[fullPath];

  if (!imageImporter) {
    console.warn(
      `[ProjectsManager] Image not found: ${imagePath}, using placeholder`
    );
    return projectPlaceholder;
  }

  try {
    const imageModule = await imageImporter();
    const image = imageModule.default;

    // Guardar en cache para futuras consultas
    imageCache.set(imagePath, image);

    return image;
  } catch (error) {
    console.error(`[ProjectsManager] Error loading image ${imagePath}:`, error);
    return projectPlaceholder;
  }
}

/**
 * Obtiene todos los proyectos desde Content Collections
 */
export async function getAllProjects(): Promise<CollectionEntry<'projects'>[]> {
  try {
    return await getCollection('projects');
  } catch (error) {
    console.error('[ProjectsManager] Error fetching projects:', error);
    return [];
  }
}

/**
 * Procesa un proyecto raw para el renderizado
 */
export async function processProject(
  project: CollectionEntry<'projects'>,
  locale: 'es' | 'en' = 'es'
): Promise<ProcessedProject> {
  const image = await getProjectImage(project.data.image);

  return {
    id: project.data.id,
    title: project.data.title[locale],
    description: project.data.description[locale],
    impact: project.data.impact[locale],
    stack: project.data.stack,
    category: project.data.category,
    featured: project.data.featured,
    priority: project.data.priority,
    liveUrl: project.data.liveUrl,
    githubUrl: project.data.githubUrl,
    image,
    tags: project.data.tags,
    status: project.data.status,
    createdAt: project.data.createdAt,
    updatedAt: project.data.updatedAt,
  };
}

/**
 * Obtiene proyectos filtrados y procesados por categoría
 */
export async function getProjectsByCategory(
  category: 'business' | 'personal',
  locale: 'es' | 'en' = 'es',
  onlyActive: boolean = true
): Promise<ProcessedProject[]> {
  try {
    const allProjects = await getAllProjects();

    const filtered = allProjects
      .filter((project) => project.data.category === category)
      .filter((project) =>
        onlyActive ? project.data.status === 'active' : true
      )
      .sort((a, b) => a.data.priority - b.data.priority);

    // Procesar todos los proyectos en paralelo
    const processed = await Promise.all(
      filtered.map((project) => processProject(project, locale))
    );

    return processed;
  } catch (error) {
    console.error(
      `[ProjectsManager] Error fetching ${category} projects:`,
      error
    );
    return [];
  }
}

/**
 * Obtiene proyectos destacados
 */
export async function getFeaturedProjects(
  locale: 'es' | 'en' = 'es',
  category?: 'business' | 'personal'
): Promise<ProcessedProject[]> {
  try {
    const allProjects = await getAllProjects();

    const filtered = allProjects
      .filter((project) => project.data.featured)
      .filter((project) => project.data.status === 'active')
      .filter((project) =>
        category ? project.data.category === category : true
      )
      .sort((a, b) => a.data.priority - b.data.priority);

    const processed = await Promise.all(
      filtered.map((project) => processProject(project, locale))
    );

    return processed;
  } catch (error) {
    console.error('[ProjectsManager] Error fetching featured projects:', error);
    return [];
  }
}

/**
 * Obtiene un proyecto específico por ID
 */
export async function getProjectById(
  id: string,
  locale: 'es' | 'en' = 'es'
): Promise<ProcessedProject | null> {
  try {
    const allProjects = await getAllProjects();
    const project = allProjects.find((p) => p.data.id === id);

    if (!project) {
      console.warn(`[ProjectsManager] Project not found: ${id}`);
      return null;
    }

    return await processProject(project, locale);
  } catch (error) {
    console.error(`[ProjectsManager] Error fetching project ${id}:`, error);
    return null;
  }
}

/**
 * Utilidad para pre-cargar imágenes críticas
 */
export async function preloadCriticalImages(
  projectIds: string[]
): Promise<void> {
  try {
    const allProjects = await getAllProjects();
    const criticalProjects = allProjects.filter((p) =>
      projectIds.includes(p.data.id)
    );

    // Precargar imágenes en paralelo
    await Promise.all(
      criticalProjects.map(async (project) => {
        if (project.data.image) {
          await getProjectImage(project.data.image);
        }
      })
    );

    console.log(
      `[ProjectsManager] Preloaded ${criticalProjects.length} critical images`
    );
  } catch (error) {
    console.error('[ProjectsManager] Error preloading images:', error);
  }
}

// Exportar tipos útiles
export type { CollectionEntry };
export type ProjectCollection = CollectionEntry<'projects'>;
