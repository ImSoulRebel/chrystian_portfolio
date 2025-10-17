import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

// Schema para proyectos con validación completa
const projectSchema = z.object({
  // Identificación
  id: z.string().min(1, 'ID es requerido'),

  // Contenido multiidioma
  title: z.object({
    es: z.string().min(1, 'Título en español es requerido'),
    en: z.string().min(1, 'Título en inglés es requerido'),
  }),

  description: z.object({
    es: z.string().min(1, 'Descripción en español es requerida'),
    en: z.string().min(1, 'Descripción en inglés es requerida'),
  }),

  impact: z.object({
    es: z.string().min(1, 'Impacto en español es requerido'),
    en: z.string().min(1, 'Impacto en inglés es requerido'),
  }),

  // Información técnica
  stack: z.array(z.string()).min(1, 'Al menos una tecnología es requerida'),

  // Metadatos del proyecto
  category: z.enum(['business', 'personal'], {
    errorMap: () => ({ message: "Categoría debe ser 'business' o 'personal'" }),
  }),

  featured: z.boolean().default(false),
  priority: z.number().min(1).max(100).default(1),

  // URLs opcionales
  liveUrl: z.string().url('URL de demostración debe ser válida').optional(),
  githubUrl: z.string().url('URL de GitHub debe ser válida').optional(),

  // Asset y metadata
  image: z.string().optional(), // Nombre del archivo en assets/projects/
  tags: z.array(z.string()).default([]),

  // Control de estado
  status: z.enum(['active', 'archived', 'draft']).default('active'),

  // Timestamps
  createdAt: z.string().datetime().default(new Date().toISOString()),
  updatedAt: z.string().datetime().default(new Date().toISOString()),
});

// Tipo exportado para uso en TypeScript
export type ProjectData = z.infer<typeof projectSchema>;

// Definición de las colecciones
export const collections = {
  projects: defineCollection({
    loader: file('src/content/data/projects.json'),
    schema: projectSchema,
  }),
};
