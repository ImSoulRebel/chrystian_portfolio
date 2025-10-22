// Tipos utilitarios para props y secciones de blog
import type { CollectionEntry } from 'astro:content';
import type { BlogPostData } from '../config';

export type BlogPostEntry = CollectionEntry<'blog'> & { data: BlogPostData };

export interface BlogCardProps {
  title: string;
  description?: string;
  author?: string;
  date?: string;
  tags?: string[];
  href: string;
  fullWidth?: boolean;
  lang?: 'es' | 'en';
  'aria-label'?: string;
}

export interface BlogListSectionProps {
  lang: 'es' | 'en';
}

export interface BlogPreviewSectionProps {
  locale: 'es' | 'en';
}

export interface BlogSectionProps {
  post: BlogPostEntry;
  lang: 'es' | 'en';
  Content: AstroInstance; // Mejor que any, pero compatible con Astro 5.x
}

export interface BlogContentSectionProps {
  image?: string;
  title: { es: string; en: string };
  lang: 'es' | 'en';
  Content: AstroInstance;
}

// Tipo para instancia de contenido Astro (mejor que any)
export type AstroInstance = { (props: any): any } | any;
