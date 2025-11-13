// Utilitario centralizado para obtención y filtrado de posts de blog
import { getCollection, type CollectionEntry } from 'astro:content';

export interface BlogPost extends CollectionEntry<'blog'> {
  // Puedes extender aquí si necesitas más campos
}

export async function getSortedBlogPosts(
  locale: 'es' | 'en',
  options?: { featuredOnly?: boolean; limit?: number; sortByDateOnly?: boolean }
): Promise<BlogPost[]> {
  // Obtener todos los posts publicados
  const allPosts = await getCollection(
    'blog',
    (entry) => entry.data.status === 'published'
  );

  // Filtrar por idioma si el campo title es objeto
  const filteredPosts = allPosts.filter((post) => {
    if (typeof post.data.title === 'object') {
      return post.data.title[locale as 'es' | 'en'] !== undefined;
    }
    return true;
  });

  let posts = filteredPosts;

  // Filtrar destacados si se solicita
  if (options?.featuredOnly) {
    posts = posts.filter((p) => p.data.featured);
  }

  // Ordenar: primero por featured, luego por priority, y finalmente por fecha
  posts = posts.sort((a, b) => {
    // Si sortByDateOnly está activo, solo ordenar por fecha
    if (options?.sortByDateOnly) {
      return (
        new Date(b.data.createdAt).getTime() -
        new Date(a.data.createdAt).getTime()
      );
    }

    // 1. Priorizar posts featured
    const featuredA = a.data.featured ? 1 : 0;
    const featuredB = b.data.featured ? 1 : 0;
    if (featuredA !== featuredB) {
      return featuredB - featuredA;
    }

    // 2. Ordenar por priority (mayor a menor)
    const priorityA = a.data.priority ?? 0;
    const priorityB = b.data.priority ?? 0;
    if (priorityA !== priorityB) {
      return priorityB - priorityA;
    }

    // 3. Fallback a fecha de creación más reciente
    return (
      new Date(b.data.createdAt).getTime() -
      new Date(a.data.createdAt).getTime()
    );
  });

  // Limitar cantidad si se solicita
  if (options?.limit) {
    posts = posts.slice(0, options.limit);
  }

  return posts;
}
