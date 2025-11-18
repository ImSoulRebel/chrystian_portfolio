import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

// Schema para proyectos con validación completa
const projectSchema = z.object({
  // Identificación
  id: z.string().min(1, 'ID es requerido'),

  // Contenido multiidioma

  // Campos multiidioma opcionales (desacoplados, gestionados por traducciones)
  title: z
    .object({
      es: z.string().optional(),
      en: z.string().optional(),
    })
    .optional(),

  description: z
    .object({
      es: z.string().optional(),
      en: z.string().optional(),
    })
    .optional(),

  impact: z
    .object({
      es: z.string().optional(),
      en: z.string().optional(),
    })
    .optional(),

  // Información técnica opcional
  stack: z.array(z.string()).optional(),

  // Metadatos del proyecto
  category: z.enum(['business', 'personal'], {
    errorMap: () => ({ message: "Categoría debe ser 'business' o 'personal'" }),
  }),

  featured: z.boolean().default(false),
  priority: z.number().min(1).max(100).default(1),

  // NDA and confidentiality
  nda: z.boolean().default(false),

  // URLs opcionales
  liveUrl: z.string().url('URL de demostración debe ser válida').optional(),
  githubUrl: z.string().url('URL de GitHub debe ser válida').optional(),

  // Asset y metadata
  image: z.string().optional(),
  tags: z.array(z.string()).default([]),

  // Control de estado
  status: z.enum(['active', 'archived', 'draft']).default('active'),

  // Timestamps
  createdAt: z.string().datetime().default(new Date().toISOString()),
  updatedAt: z.string().datetime().default(new Date().toISOString()),
});

// Schema para skills con validación completa
const skillSchema = z.object({
  // Identificación
  id: z.string().min(1, 'ID es requerido'),
  name: z.string().min(1, 'Nombre de skill es requerido'),

  // Categorización
  category: z.enum(
    ['mobile', 'frontend', 'backend', 'devops', 'leadership', 'tools'],
    {
      errorMap: () => ({
        message:
          'Categoría debe ser una de: mobile, frontend, backend, devops, leadership, tools',
      }),
    }
  ),

  // Información de experiencia
  level: z
    .enum(['beginner', 'intermediate', 'advanced', 'expert'], {
      errorMap: () => ({
        message: 'Nivel debe ser: beginner, intermediate, advanced, expert',
      }),
    })
    .default('intermediate'),

  years: z.number().min(0).max(20).default(1),

  // Metadatos de visualización
  icon: z.string().min(1).optional(),
  featured: z.boolean().default(false),
  priority: z.number().min(1).max(100).default(50),

  // Información adicional opcional
  url: z.string().url('URL oficial debe ser válida').optional(),
  description: z
    .object({
      es: z.string().optional(),
      en: z.string().optional(),
    })
    .optional(),

  // Control de estado
  status: z.enum(['active', 'archived', 'learning']).default('active'),

  // Timestamps
  createdAt: z.string().datetime().default(new Date().toISOString()),
  updatedAt: z.string().datetime().default(new Date().toISOString()),
});

// Schema para posts de blog
const blogPostSchema = z.object({
  // Identificación
  id: z.string().min(1, 'ID es requerido'),

  // Título multiidioma
  title: z.object({
    es: z.string().min(1, 'Título en español es requerido'),
    en: z.string().min(1, 'Título en inglés es requerido'),
  }),

  // Descripción/Resumen
  description: z
    .object({
      es: z.string().optional(),
      en: z.string().optional(),
    })
    .optional(),

  // Metadatos
  tags: z.array(z.string()).default([]),
  author: z.string().optional(),
  image: z
    .object({
      es: z.string().optional(),
      en: z.string().optional(),
    })
    .optional(),
  featured: z.boolean().default(false),
  priority: z.number().min(1).max(100).default(1),

  // Control de estado
  status: z.enum(['published', 'draft', 'archived']).default('draft'),

  // Timestamps
  createdAt: z.string().datetime().default(new Date().toISOString()),
  updatedAt: z.string().datetime().default(new Date().toISOString()),
});

// Tipos exportados para uso en TypeScript
export type ProjectData = z.infer<typeof projectSchema>;
export type SkillData = z.infer<typeof skillSchema>;
export type BlogPostData = z.infer<typeof blogPostSchema>;

// Definición de las colecciones con loaders
export const collections = {
  projects: defineCollection({
    loader: file('src/content/data/projects.json'),
    schema: projectSchema,
  }),
  skills: defineCollection({
    loader: file('src/content/data/skills.json'),
    schema: skillSchema,
  }),
  blog: defineCollection({
    type: 'content',
    schema: blogPostSchema,
  }),
};
